const workCases = {
  grubhub: {
    kicker: "퍼포먼스 소재 · 캠페인 운영",
    title: "Grubhub 캠페인 운영",
    description:
      "빠르게 바뀌는 캠페인 일정 안에서 같은 톤의 광고 소재를 반복 제작하고 확장한 사례입니다.",
    tags: ["광고 소재", "캠페인 운영", "브랜드 일관성"],
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/de81f11100322c957a880aafb431f63240a8656d-1280x1280.jpg",
  },
  microsoft: {
    kicker: "브랜드 캠페인 · 멀티 포맷 제작",
    title: "Microsoft 브랜드 확장",
    description:
      "여러 채널과 포맷에 걸쳐 같은 브랜드 경험을 유지하도록 비주얼 시스템을 운영한 예시입니다.",
    tags: ["브랜드 캠페인", "멀티 포맷", "시스템 운영"],
    image:
      "https://sanity-cdn.superside.com/e2c33a24b5841a972c74b51c038910d2680a2610-1280x1280.jpg",
  },
  reddit: {
    kicker: "SNS 운영 · 광고 크리에이티브",
    title: "Reddit 소셜 크리에이티브",
    description:
      "SNS, 퍼포먼스 광고, 모션 자산을 같은 룰 안에서 빠르게 전개하는 운영 사례입니다.",
    tags: ["SNS 운영", "광고 크리에이티브", "모션 자산"],
    image:
      "https://sanity-cdn.superside.com/fde4ec90b2f2dd9c27e3a60951c0b1ab1b1da130-768x768.jpg",
  },
  amazon: {
    kicker: "상세페이지 · 성과형 소재",
    title: "Amazon Pharmacy 전환 최적화",
    description:
      "전환 중심의 소재와 상세페이지 요소를 빠르게 조정하며 운영 효율을 높인 사례입니다.",
    tags: ["상세페이지", "성과형 소재", "전환 최적화"],
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/6aea823cfa61741bf9ca392562653f746e0db599-1920x1920.jpg",
  },
};

const testimonials = [
  {
    name: "김서현",
    role: "브랜드 마케팅 리드 · FOUNDRY",
    quote:
      "신상품 런칭 때마다 반복되던 촬영 준비 시간이 크게 줄었어요. 팀이 더 중요한 기획과 운영에 집중하게 됐습니다.",
    avatar:
      "https://cdn.sanity.io/images/k0dlbavy/production/7d9d79c6805f0bdd9e1c24b835782c4835b97bd6-500x500.jpg",
  },
  {
    name: "박준호",
    role: "콘텐츠 총괄 · DAILY FORM",
    quote:
      "배너, 썸네일, 광고 소재를 한 톤으로 빠르게 맞출 수 있어서 운영 속도가 완전히 달라졌습니다.",
    avatar:
      "https://cdn.sanity.io/images/k0dlbavy/production/f039131bd0e4193b79ec67b7cdd18538dc1dd624-800x800.jpg",
  },
  {
    name: "이민지",
    role: "이커머스 디렉터 · NORTHWAVE",
    quote:
      "외주와 내부 팀 사이에서 생기던 수정 비용이 줄고, 시안 확인부터 확정까지의 속도가 훨씬 빨라졌습니다.",
    avatar:
      "https://cdn.sanity.io/images/k0dlbavy/production/96cfacfa199c6a766eb2197092de01215b8a9e9f-768x768.jpg",
  },
];

const header = document.querySelector(".site-header");
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const workTabs = document.querySelectorAll(".work-tab");
const workImage = document.querySelector("#work-image");
const workKicker = document.querySelector("#work-kicker");
const workTitle = document.querySelector("#work-title");
const workDescription = document.querySelector("#work-description");
const workTags = document.querySelector("#work-tags");
const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonialCard = document.querySelector("#testimonial-card");
const testimonialAvatar = document.querySelector("#testimonial-avatar");
const testimonialName = document.querySelector("#testimonial-name");
const testimonialRole = document.querySelector("#testimonial-role");
const testimonialQuote = document.querySelector("#testimonial-quote");
const prevButton = document.querySelector(".slider-control.prev");
const nextButton = document.querySelector(".slider-control.next");
const testimonialProgressBar = document.querySelector("#testimonial-progress-bar");
const googleLoginButtons = document.querySelectorAll("[data-google-login]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const loginUrl =
  document.body?.dataset.loginUrl ||
  googleLoginButtons[0]?.getAttribute("href") ||
  "mailto:hello@atela.ai?subject=ATELA%20Free%20Access";

let testimonialIndex = 0;
let testimonialTimer = null;
let testimonialProgressAnimation = null;
let workSwapTimer = null;

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setMobileMenu(open) {
  if (!mobileToggle || !mobileMenu) return;
  mobileToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.hidden = !open;
  mobileMenu.classList.toggle("is-open", open);
}

function renderTagList(tags) {
  if (!workTags) return;

  const items = tags.map((tag) => {
    const element = document.createElement("li");
    element.textContent = tag;
    return element;
  });

  workTags.replaceChildren(...items);
}

function renderWorkCase(key) {
  const item = workCases[key];
  if (!item || !workImage || !workKicker || !workTitle || !workDescription || !workTags) return;

  window.clearTimeout(workSwapTimer);
  workImage.classList.add("is-swapping");

  workSwapTimer = window.setTimeout(() => {
    workImage.src = item.image;
    workImage.alt = `${item.title} 작업물`;
    workKicker.textContent = item.kicker;
    workTitle.textContent = item.title;
    workDescription.textContent = item.description;
    renderTagList(item.tags);
    workImage.classList.remove("is-swapping");
  }, 140);

  workTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.brand === key);
  });
}

function renderTestimonial(index) {
  const item = testimonials[index];
  if (!item || !testimonialCard || !testimonialAvatar || !testimonialName || !testimonialRole || !testimonialQuote) return;

  if (!prefersReducedMotion.matches) {
    testimonialCard.animate(
      [
        { opacity: 0.65, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 320,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );
  }

  testimonialAvatar.src = item.avatar;
  testimonialAvatar.alt = `${item.name} 아바타`;
  testimonialName.textContent = item.name;
  testimonialRole.textContent = item.role;
  testimonialQuote.textContent = item.quote;

  if (testimonialProgressBar) {
    testimonialProgressBar.getAnimations().forEach((animation) => animation.cancel());
    testimonialProgressBar.style.transform = prefersReducedMotion.matches ? "scaleX(1)" : "scaleX(0)";

    if (!prefersReducedMotion.matches) {
      testimonialProgressAnimation = testimonialProgressBar.animate(
        [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
        {
          duration: 5000,
          easing: "linear",
          fill: "forwards",
        },
      );
    }
  }
}

function stepTestimonial(direction) {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  renderTestimonial(testimonialIndex);
}

function restartTestimonialTimer() {
  if (!testimonialSlider || prefersReducedMotion.matches) return;
  window.clearInterval(testimonialTimer);
  testimonialTimer = window.setInterval(() => stepTestimonial(1), 5000);
}

function animateCount(element) {
  const target = Number(element.dataset.target || "0");
  const suffix = element.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    element.textContent = `${current}${suffix}`;

    if (progress < 1) {
      window.requestAnimationFrame(frame);
      return;
    }

    element.textContent = `${target}${suffix}`;
  }

  window.requestAnimationFrame(frame);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (mobileToggle && mobileMenu) {
  setMobileMenu(false);

  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileToggle.getAttribute("aria-expanded") === "true";
    setMobileMenu(!isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenu(false));
  });
}

workTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderWorkCase(tab.dataset.brand));
});

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    stepTestimonial(-1);
    restartTestimonialTimer();
  });

  nextButton.addEventListener("click", () => {
    stepTestimonial(1);
    restartTestimonialTimer();
  });
}

if (testimonialSlider) {
  restartTestimonialTimer();

  testimonialSlider.addEventListener("mouseenter", () => {
    window.clearInterval(testimonialTimer);
    testimonialProgressAnimation?.pause();
  });

  testimonialSlider.addEventListener("mouseleave", () => {
    testimonialProgressAnimation?.cancel();
    renderTestimonial(testimonialIndex);
    restartTestimonialTimer();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");

      if (entry.target.classList.contains("stat")) {
        entry.target.querySelectorAll(".count-up").forEach((element) => {
          if (element.dataset.animated) return;
          element.dataset.animated = "true";
          animateCount(element);
        });
      }

      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 },
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

googleLoginButtons.forEach((button) => {
  if (button instanceof HTMLAnchorElement) {
    button.href = loginUrl;
  }
});

renderWorkCase("grubhub");
renderTestimonial(testimonialIndex);
