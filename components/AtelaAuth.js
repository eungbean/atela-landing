(function initAtelaAuth() {
  const CLERK_UI_VERSION = '1';
  const CLERK_JS_VERSION = '6';
  const PUBLISHABLE_KEY_PLACEHOLDER = /^%VITE_[A-Z0-9_]+%$/;

  let clerkLoadPromise = null;
  let clerkWarmupScheduled = false;
  let clerkListenerAttached = false;
  let authState = {
    isLoaded: false,
    isSignedIn: false,
    userId: '',
  };

  function getAuthCopy() {
    if (!window.atelaGetCopySection) return null;
    return window.atelaGetCopySection('auth');
  }

  function readPublishableKey() {
    const meta = document.querySelector('meta[name="atela-clerk-publishable-key"]');
    const rawValue = String(meta?.content || '').trim();

    if (!rawValue || PUBLISHABLE_KEY_PLACEHOLDER.test(rawValue)) {
      return '';
    }

    return rawValue;
  }

  function hasPublishableKey() {
    return /^pk_(test|live)_/.test(readPublishableKey());
  }

  function emitAuthState() {
    window.dispatchEvent(new CustomEvent('atela:auth-state-change', {
      detail: { ...authState },
    }));
  }

  function syncAuthState(clerk = window.Clerk) {
    authState = {
      isLoaded: Boolean(clerk?.loaded),
      isSignedIn: Boolean(clerk?.isSignedIn && clerk?.session && clerk?.user),
      userId: clerk?.user?.id || '',
    };

    emitAuthState();
    return { ...authState };
  }

  function attachClerkListener(clerk = window.Clerk) {
    if (!clerk?.addListener || clerkListenerAttached) {
      return;
    }

    clerk.addListener(({ session, user }) => {
      authState = {
        isLoaded: true,
        isSignedIn: Boolean(session && user),
        userId: user?.id || '',
      };

      emitAuthState();
    });

    clerkListenerAttached = true;
  }

  function getClerkFrontendApi(publishableKey) {
    try {
      const encodedDomain = String(publishableKey || '').split('_')[2];
      return encodedDomain ? atob(encodedDomain).slice(0, -1) : '';
    } catch {
      return '';
    }
  }

  function loadScript(src, attributes = {}) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        if (existing.dataset.atelaLoaded === 'true') {
          resolve(existing);
          return;
        }

        existing.addEventListener('load', () => resolve(existing), { once: true });
        existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.crossOrigin = 'anonymous';

      Object.entries(attributes).forEach(([name, value]) => {
        script.setAttribute(name, value);
      });

      script.addEventListener('load', () => {
        script.dataset.atelaLoaded = 'true';
        resolve(script);
      }, { once: true });

      script.addEventListener('error', () => {
        reject(new Error(`Failed to load ${src}`));
      }, { once: true });

      document.head.appendChild(script);
    });
  }

  async function ensureClerkLoaded() {
    if (window.Clerk && window.Clerk.loaded) {
      attachClerkListener(window.Clerk);
      syncAuthState(window.Clerk);
      return window.Clerk;
    }

    if (clerkLoadPromise) {
      return clerkLoadPromise;
    }

    const publishableKey = readPublishableKey();
    if (!hasPublishableKey()) {
      throw new Error('missing_publishable_key');
    }

    clerkLoadPromise = (async () => {
      const clerkFrontendApi = getClerkFrontendApi(publishableKey);
      if (!clerkFrontendApi) {
        throw new Error('invalid_publishable_key');
      }

      const uiSrc = `https://${clerkFrontendApi}/npm/@clerk/ui@${CLERK_UI_VERSION}/dist/ui.browser.js`;
      const jsSrc = `https://${clerkFrontendApi}/npm/@clerk/clerk-js@${CLERK_JS_VERSION}/dist/clerk.browser.js`;

      if (!window.__internal_ClerkUICtor) {
        await loadScript(uiSrc);
      }

      if (!window.Clerk) {
        await loadScript(jsSrc, {
          'data-clerk-publishable-key': publishableKey,
        });
      }

      await window.Clerk.load({
        ui: { ClerkUI: window.__internal_ClerkUICtor },
      });

      attachClerkListener(window.Clerk);
      syncAuthState(window.Clerk);

      window.dispatchEvent(new CustomEvent('atela:auth-ready', {
        detail: {
          provider: 'clerk',
        },
      }));

      return window.Clerk;
    })().catch((error) => {
      clerkLoadPromise = null;
      throw error;
    });

    return clerkLoadPromise;
  }

  function getStartFlowMessage(error) {
    const authCopy = getAuthCopy() || {};
    const message = String(error?.message || '');

    if (message === 'missing_publishable_key' || message === 'invalid_publishable_key') {
      return authCopy.missingConfiguration
        || 'Clerk publishable key is missing. Add VITE_CLERK_PUBLISHABLE_KEY and try again.';
    }

    return authCopy.unavailable
      || 'Google sign-in is unavailable right now. Please try again in a moment.';
  }

  function getCurrentLocation() {
    return `${window.location.pathname}${window.location.search}${window.location.hash}`;
  }

  async function openStartFlow(options = {}) {
    const source = options.source || 'unknown';

    try {
      const clerk = await ensureClerkLoaded();
      const currentState = syncAuthState(clerk);

      if (currentState.isSignedIn) {
        return true;
      }

      try {
        window.localStorage.setItem('atela-start-flow-source', source);
      } catch {
        // Ignore storage failures.
      }

      const currentLocation = getCurrentLocation();

      clerk.openSignIn({
        withSignUp: true,
        oauthFlow: 'popup',
        forceRedirectUrl: currentLocation,
        fallbackRedirectUrl: currentLocation,
      });

      return true;
    } catch (error) {
      console.error('[ATELA auth] Unable to open Clerk sign-in.', error);
      window.alert(getStartFlowMessage(error));
      return false;
    }
  }

  function warmClerk() {
    if (clerkWarmupScheduled || !hasPublishableKey()) {
      return;
    }

    clerkWarmupScheduled = true;

    const warm = () => {
      ensureClerkLoaded().catch((error) => {
        console.warn('[ATELA auth] Clerk warmup skipped.', error);
      });
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(warm, { timeout: 2200 });
      return;
    }

    window.setTimeout(warm, 1200);
  }

  window.ATELA_AUTH = {
    provider: 'clerk',
    hasPublishableKey,
    getState: () => ({ ...authState }),
    isSignedIn: () => authState.isSignedIn,
  };
  window.atelaEnsureAuthReady = ensureClerkLoaded;
  window.atelaOpenStartFlow = openStartFlow;

  if (document.readyState === 'complete') {
    warmClerk();
  } else {
    window.addEventListener('load', warmClerk, { once: true });
  }
})();
