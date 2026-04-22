(function initAtelaCopy() {
  const TECH_EXAMPLES = {
    ko: [
      {
        id: 'outdoor',
        title: '아웃도어 의류',
        subtitle: '로고 · 텀블러 각인',
        thumb: '/assets/comparisons/1/atela.avif',
        comparisons: [
          {
            id: 'nb2',
            brandLines: ['Nanobanana Pro'],
            image: '/assets/comparisons/1/nb2.avif',
            mainPosition: '50% 52%',
            detailSide: 'left',
            notePrefix: 'Nanobanana Pro.',
            note: '장면은 그럴듯해도 한글 배너, 브랜드 로고, 텀블러 각인처럼 구매에 영향을 주는 작은 정보는 흔들리기 쉽습니다.',
            details: [
              { position: '37% 47%', scale: 10, alt: 'Nanobanana Pro tumbler logo detail' },
              { position: '71% 54%', scale: 12, alt: 'Nanobanana Pro jacket detail' },
            ],
          },
          {
            id: 'atela',
            brandLines: ['ATELA'],
            image: '/assets/comparisons/1/atela.avif',
            mainPosition: '50% 48%',
            detailSide: 'right',
            notePrefix: 'ATELA.',
            note: 'ATELA는 한글 배너, 로고, 자수, 각인처럼 브랜드 신뢰를 만드는 작은 정보까지 또렷하게 유지하는 결과에 집중합니다.',
            details: [
              { position: '100% 78%', scale: 3.5, alt: 'ATELA tumbler logo detail' },
              { position: '40% 98%', scale: 5, alt: 'ATELA jacket engraving detail' },
            ],
          },
        ],
      },
      {
        id: 'beauty',
        title: '뷰티 패키지',
        subtitle: '제품명 · 라벨 · 패키지 정보',
        thumb: '/assets/comparisons/2/atela.avif',
        comparisons: [
          {
            id: 'nb2',
            brandLines: ['Nanobanana Pro'],
            image: '/assets/comparisons/2/nb2.avif',
            detailImage: '/assets/comparisons/2/nb2.detail.avif',
            mainPosition: '50% 50%',
            detailSide: 'left',
            notePrefix: 'Nanobanana Pro.',
            note: '분위기는 맞아도 제품명, 하단 정보, 패키지 표면 디테일은 작아지거나 흐려지기 쉽습니다.',
            details: [
              { position: '50% 73%', scale: 6.4, alt: 'Nanobanana Pro beauty product name detail' },
              { position: '45% 80%', scale: 9.2, alt: 'Nanobanana Pro beauty label detail' },
            ],
          },
          {
            id: 'atela',
            brandLines: ['ATELA'],
            image: '/assets/comparisons/2/atela.avif',
            detailImage: '/assets/comparisons/2/atela.detail.avif',
            mainPosition: '50% 50%',
            detailSide: 'right',
            notePrefix: 'ATELA.',
            note: 'ATELA는 제품명, 라인명, 용량 표기처럼 구매 판단에 중요한 패키지 정보를 더 선명하게 유지하는 데 집중합니다.',
            details: [
              { position: '60% 61%', scale: 5.0, alt: 'ATELA beauty product name detail' },
              { position: '52% 75%', scale: 5.0, alt: 'ATELA beauty lower label detail' },
            ],
          },
        ],
      },
      {
        id: 'beverage',
        title: '음료 패키지',
        subtitle: '로고 · 한글 제품명 · 패키지 텍스트',
        thumb: '/assets/comparisons/3/atela.avif',
        comparisons: [
          {
            id: 'nb2',
            brandLines: ['Nanobanana Pro'],
            image: '/assets/comparisons/3/nb2.avif',
            detailImage: '/assets/comparisons/3/nb2.detail.avif',
            mainPosition: '50% 50%',
            detailSide: 'left',
            notePrefix: 'Nanobanana Pro.',
            note: '전체 무드는 맞아도 로고 형태, 영문·한글 제품명, 하단 표기 같은 패키지 정보는 쉽게 흔들릴 수 있습니다.',
            details: [
              { position: '55% 44%', scale: 8.0, alt: 'Nanobanana Pro beverage logo detail' },
              { position: '50% 74%', scale: 5.4, alt: 'Nanobanana Pro beverage label detail' },
            ],
          },
          {
            id: 'atela',
            brandLines: ['ATELA'],
            image: '/assets/comparisons/3/atela.avif',
            detailImage: '/assets/comparisons/3/atela.detail.avif',
            mainPosition: '50% 50%',
            detailSide: 'right',
            notePrefix: 'ATELA.',
            note: 'ATELA는 로고 곡선, 제품명, 하단 한글 표기처럼 브랜드 식별에 중요한 디테일을 안정적으로 유지하는 데 집중합니다.',
            details: [
              { position: '55% 40%', scale: 8, alt: 'ATELA beverage logo detail' },
              { position: '50% 66%', scale: 5.0, alt: 'ATELA beverage label detail' },
            ],
          },
        ],
      },
    ],
    en: [
      {
        id: 'outdoor',
        title: 'Outdoor apparel',
        subtitle: 'Logo · tumbler engraving',
        thumb: '/assets/comparisons/1/atela.avif',
        comparisons: [
          {
            id: 'nb2',
            brandLines: ['Nanobanana Pro'],
            image: '/assets/comparisons/1/nb2.avif',
            mainPosition: '50% 52%',
            detailSide: 'left',
            notePrefix: 'Nanobanana Pro.',
            note: 'Even when the scene looks convincing, small details that drive conversion, like text overlays, brand logos, and product engravings, tend to drift.',
            details: [
              { position: '37% 47%', scale: 10, alt: 'Nanobanana Pro tumbler detail' },
              { position: '71% 54%', scale: 12, alt: 'Nanobanana Pro jacket logo detail' },
            ],
          },
          {
            id: 'atela',
            brandLines: ['ATELA'],
            image: '/assets/comparisons/1/atela.avif',
            mainPosition: '50% 48%',
            detailSide: 'right',
            notePrefix: 'ATELA.',
            note: 'ATELA is built to keep the small details that create brand trust, from text overlays and logos to embroidery and engravings, clear and intact.',
            details: [
              { position: '100% 78%', scale: 3.5, alt: 'ATELA tumbler engraving detail' },
              { position: '40% 98%', scale: 5, alt: 'ATELA jacket logo detail' },
            ],
          },
        ],
      },
      {
        id: 'beauty',
        title: 'Beauty packaging',
        subtitle: 'Product name · label · pack info',
        thumb: '/assets/comparisons/2/atela.avif',
        comparisons: [
          {
            id: 'nb2',
            brandLines: ['Nanobanana Pro'],
            image: '/assets/comparisons/2/nb2.avif',
            detailImage: '/assets/comparisons/2/nb2.detail.avif',
            mainPosition: '50% 50%',
            detailSide: 'left',
            notePrefix: 'Nanobanana Pro.',
            note: 'Even if the overall mood looks right, the product name, lower-pack information, and fine surface details on the package can easily get softened or blurred.',
            details: [
              { position: '50% 73%', scale: 6.4, alt: 'Nanobanana Pro beauty product name detail' },
              { position: '45% 80%', scale: 9.2, alt: 'Nanobanana Pro beauty label detail' },
            ],
          },
          {
            id: 'atela',
            brandLines: ['ATELA'],
            image: '/assets/comparisons/2/atela.avif',
            detailImage: '/assets/comparisons/2/atela.detail.avif',
            mainPosition: '50% 50%',
            detailSide: 'right',
            notePrefix: 'ATELA.',
            note: 'ATELA focuses on keeping package information that affects buying decisions, like the product name, line name, and volume marking, sharper and more stable.',
            details: [
              { position: '60% 61%', scale: 5.0, alt: 'ATELA beauty product name detail' },
              { position: '52% 75%', scale: 5.0, alt: 'ATELA beauty lower label detail' },
            ],
          },
        ],
      },
      {
        id: 'beverage',
        title: 'Beverage packaging',
        subtitle: 'Logo · Korean product name · package text',
        thumb: '/assets/comparisons/3/atela.avif',
        comparisons: [
          {
            id: 'nb2',
            brandLines: ['Nanobanana Pro'],
            image: '/assets/comparisons/3/nb2.avif',
            detailImage: '/assets/comparisons/3/nb2.detail.avif',
            mainPosition: '50% 50%',
            detailSide: 'left',
            notePrefix: 'Nanobanana Pro.',
            note: 'Even when the overall mood lands, packaging details like logo shapes, English and Korean product names, and lower label text can shift easily.',
            details: [
              { position: '55% 44%', scale: 8.0, alt: 'Nanobanana Pro beverage logo detail' },
              { position: '50% 74%', scale: 5.4, alt: 'Nanobanana Pro beverage label detail' },
            ],
          },
          {
            id: 'atela',
            brandLines: ['ATELA'],
            image: '/assets/comparisons/3/atela.avif',
            detailImage: '/assets/comparisons/3/atela.detail.avif',
            mainPosition: '50% 50%',
            detailSide: 'right',
            notePrefix: 'ATELA.',
            note: 'ATELA focuses on keeping identity-critical details stable, including logo curves, product names, and lower-pack Korean text.',
            details: [
              { position: '55% 40%', scale: 8, alt: 'ATELA beverage logo detail' },
              { position: '50% 66%', scale: 5.0, alt: 'ATELA beverage label detail' },
            ],
          },
        ],
      },
    ],
  };

  const COPY = {
    ko: {
      page: {
        title: 'ATELA · 브랜드를 위한 에이전틱 크리에이티브 팀',
        description: '텍스트와 로고 선명도를 지키며 상세페이지, 광고, 숏폼, 마켓플레이스 비주얼을 운영하는 AI Agentic Agency for Brands.',
      },
      atelierPage: {
        title: 'ATELA Atelier · 브랜드 크리에이티브 운영을 직접 실행하는 팀',
        description: 'PDP, 광고, 릴스, CRM까지 브랜드 크리에이티브 운영을 직접 실행하는 ATELA Atelier.',
      },
      privacyPage: {
        title: 'ATELA 개인정보처리방침',
        description: 'ATELA 서비스와 Google OAuth 로그인에 적용되는 개인정보 처리방침입니다.',
        eyebrow: 'PRIVACY POLICY',
        heading: '개인정보처리방침',
        summary: 'ATELA는 서비스 제공과 Google OAuth 로그인을 위해 필요한 범위의 개인정보만 처리합니다.',
        effectiveDateLabel: '시행일',
        effectiveDate: '2026년 4월 22일',
        homeLabel: '홈으로',
        otherPageLabel: '서비스 약관 보기',
        sections: [
          {
            title: '1. 수집하는 정보',
            items: [
              'Google OAuth 또는 제3자 인증 연동 과정에서 사용자가 동의한 범위의 계정 정보(예: 이메일 주소, 이름, 프로필 이미지)',
              '로그인 상태, 접속 시간, 브라우저 및 기기 정보, 쿠키 등 서비스 운영과 보안에 필요한 기술 정보',
              '문의, 지원 요청, 운영 상담 과정에서 사용자가 직접 제공한 정보',
            ],
          },
          {
            title: '2. 개인정보 이용 목적',
            items: [
              '사용자 식별, 계정 생성, 로그인 및 인증 제공',
              '서비스 운영, 보안 유지, 비정상 이용 방지, 기능 개선',
              '문의 응대, 공지 전달, 계정 및 서비스 관련 커뮤니케이션',
            ],
          },
          {
            title: '3. 보관 기간',
            items: [
              '개인정보는 서비스 이용 기간 동안 보관되며, 목적 달성 또는 계정 삭제 요청 후 합리적인 기간 내 파기합니다.',
              '관계 법령에 따라 별도 보관이 필요한 정보는 해당 법령이 정한 기간 동안 보관할 수 있습니다.',
            ],
          },
          {
            title: '4. 제3자 제공 및 외부 서비스',
            items: [
              'ATELA는 법령상 요구되는 경우를 제외하고 사용자의 개인정보를 판매하거나 임의로 제3자에게 제공하지 않습니다.',
              '로그인 및 계정 운영을 위해 Google OAuth, Clerk 등 외부 서비스 사업자를 사용할 수 있으며, 이들은 서비스 제공에 필요한 범위에서 정보를 처리할 수 있습니다.',
            ],
          },
          {
            title: '5. 이용자의 권리',
            items: [
              '사용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다.',
              'Google 계정 연동 권한은 사용자가 Google 계정 설정에서 직접 해제할 수 있습니다.',
            ],
          },
          {
            title: '6. 운영 주체 및 문의',
            items: [
              '운영 주체: ATELA Inc.',
              '개인정보 및 계정 관련 요청은 ATELA의 공식 문의 채널을 통해 접수할 수 있습니다.',
            ],
          },
        ],
      },
      termsPage: {
        title: 'ATELA 서비스 약관',
        description: 'ATELA 웹사이트와 Google OAuth 로그인을 포함한 관련 서비스 이용 약관입니다.',
        eyebrow: 'TERMS OF SERVICE',
        heading: '서비스 약관',
        summary: '이 약관은 ATELA 웹사이트 및 관련 서비스 이용에 적용되는 기본 조건을 설명합니다.',
        effectiveDateLabel: '시행일',
        effectiveDate: '2026년 4월 22일',
        homeLabel: '홈으로',
        otherPageLabel: '개인정보처리방침 보기',
        sections: [
          {
            title: '1. 서비스 안내',
            items: [
              'ATELA는 브랜드 크리에이티브 운영과 관련된 웹사이트, 로그인 기능, 안내 페이지 및 연계 서비스를 제공합니다.',
              '서비스의 일부 기능은 예고 없이 변경, 추가, 중단될 수 있습니다.',
            ],
          },
          {
            title: '2. 계정 및 로그인',
            items: [
              '사용자는 Google OAuth 등 ATELA가 제공하는 인증 수단을 통해 로그인할 수 있습니다.',
              '사용자는 자신의 계정 정보와 인증 수단을 안전하게 관리할 책임이 있습니다.',
            ],
          },
          {
            title: '3. 금지 행위',
            items: [
              '관련 법령 위반, 타인 사칭, 서비스 방해, 비정상적 접근 시도, 무단 수집 또는 악용 행위는 금지됩니다.',
              'ATELA는 서비스 안전성과 운영을 해치는 행위가 확인될 경우 접근 제한 또는 계정 조치를 할 수 있습니다.',
            ],
          },
          {
            title: '4. 지식재산권',
            items: [
              'ATELA 웹사이트, 상표, 로고, 문구, 디자인 및 관련 콘텐츠에 대한 권리는 ATELA 또는 정당한 권리자에게 있습니다.',
              '사전 승인 없이 이를 복제, 배포, 수정하거나 상업적으로 이용할 수 없습니다.',
            ],
          },
          {
            title: '5. 책임 제한',
            items: [
              'ATELA는 관련 법령이 허용하는 범위 내에서 서비스의 지속성, 특정 목적 적합성, 무오류 상태를 보증하지 않습니다.',
              '사용자는 자신의 계정 사용, 제3자 인증 수단, 외부 서비스 이용에 대해 스스로 책임을 부담합니다.',
            ],
          },
          {
            title: '6. 준거 및 문의',
            items: [
              '본 약관은 적용 가능한 법률에 따라 해석됩니다.',
              '서비스 이용과 관련한 문의는 ATELA의 공식 문의 채널을 통해 접수할 수 있습니다.',
            ],
          },
        ],
      },
      nav: {
        cta: '무료로 시작하기',
        menuHome: 'STUDIO',
        menuAtelier: 'ATELIER',
        menuContact: 'CONTACT',
      },
      atelierNav: {
        cta: '무료로 시작하기',
        menuHome: 'STUDIO',
        menuAtelier: 'ATELIER',
        menuContact: 'CONTACT',
      },
      hero: {
        titleLead: '이커머스 · 브랜드를 위한',
        titlePrefix: '단 하나의',
        titleHighlight: '비주얼 솔루션',
        subtitleLines: [
          '브랜드를 연결하세요.',
          'ATELA가 당신의 크리에이티브 팀이 됩니다.',
          '스튜디오 컷부터 상세페이지, 인스타그램 릴스, 캠페인 비주얼까지.',
        ],
        cta: '무료로 시작하기',
        packAriaPrefix: '결과 보기',
      },
      auth: {
        completedCta: '출시 알림 등록 완료',
        missingConfiguration: 'Clerk 설정이 아직 연결되지 않았습니다. VITE_CLERK_PUBLISHABLE_KEY를 추가한 뒤 다시 시도해 주세요.',
        unavailable: '지금은 Google 로그인을 열 수 없습니다. 잠시 후 다시 시도해 주세요.',
      },
      heroDemo: {
        packs: {
          drg: {
            name: 'Dr.G 크림',
            sourceAlt: 'Dr.G 크림 상품 소스',
            outputs: {
              studio: 'Dr.G 크림 Background 결과물',
              angle: 'Dr.G 크림 Lighting 결과물',
              variation: 'Dr.G 크림 Variation 결과물',
              lifestyle: 'Dr.G 크림 Angle 결과물',
            },
            videoAlt: 'Dr.G 크림 영상 결과물',
          },
          chamo: {
            name: 'CHAMO 핸드크림',
            sourceAlt: 'CHAMO 핸드크림 상품 소스',
            outputs: {
              studio: 'CHAMO 핸드크림 Background 결과물',
              angle: 'CHAMO 핸드크림 Lighting 결과물',
              variation: 'CHAMO 핸드크림 Variation 결과물',
              lifestyle: 'CHAMO 핸드크림 Angle 결과물',
            },
            videoAlt: 'CHAMO 핸드크림 영상 결과물',
          },
          lamp: {
            name: '테이블 램프',
            sourceAlt: '테이블 램프 상품 소스',
            outputs: {
              studio: '테이블 램프 Background 결과물',
              angle: '테이블 램프 Lighting 결과물',
              variation: '테이블 램프 Variation 결과물',
              lifestyle: '테이블 램프 Angle 결과물',
            },
          },
          sofa: {
            name: '커브드 소파',
            sourceAlt: '커브드 소파 상품 소스',
            outputs: {
              studio: '커브드 소파 Background 결과물',
              angle: '커브드 소파 Lighting 결과물',
              variation: '커브드 소파 Variation 결과물',
              lifestyle: '커브드 소파 Angle 결과물',
            },
          },
          jacket: {
            name: '마운틴 자켓',
            sourceAlt: '마운틴 자켓 상품 소스',
            outputs: {
              studio: '마운틴 자켓 Background 결과물',
              angle: '마운틴 자켓 Lighting 결과물',
              variation: '마운틴 자켓 Variation 결과물',
              lifestyle: '마운틴 자켓 Angle 결과물',
            },
          },
          pilot_trunk: {
            name: '파일럿 트렁크',
            sourceAlt: '파일럿 트렁크 상품 소스',
            outputs: {
              studio: '파일럿 트렁크 Background 결과물',
              angle: '파일럿 트렁크 Lighting 결과물',
              variation: '파일럿 트렁크 Variation 결과물',
              lifestyle: '파일럿 트렁크 Angle 결과물',
            },
            videoAlt: '파일럿 트렁크 영상 결과물',
          },
        },
      },
      logoCloud: {
        title: 'Trusted by',
        ariaLabel: 'Trusted by brand logos',
      },
      stats: {
        items: [
          { n: '15.2x', l: '한글 렌더링 정확도', s: 'Google Nanobanana Pro 대비' },
          { n: '4분', l: '브리프 → 첫 배치', s: '오케스트레이션 시작 시간' },
          { n: '199개', l: '운영 플로우', s: '6개 포맷 영역 기준' },
          { n: '2일', l: '브리프 → 첫 납품', s: '평균 turnaround' },
        ],
      },
      compound: {
        eyebrow: '시스템 러닝 루프',
        headlineLead: '쌓일수록 강해집니다.',
        headlineEmphasis: '멈추지 않고 진화하는 시스템.',
        sub: 'ATELA는 브랜드를 학습합니다. 성과 신호, 승인된 결과물, 채널 반응을 학습하여 더 정교해진 다음 캠페인을 생성합니다.',
        subHighlight: 'ATELA는 브랜드를 학습합니다.',
        subBody: '성과 신호, 승인된 결과물, 채널 반응을 학습하여 더 정교해진 다음 캠페인을 생성합니다.',
        inputKicker: null,
        briefTitle: '봄 런칭 캠페인',
        briefCopy: '세럼 SKU 10개, 인스타그램·네이버·쿠팡 버전. 트렌드에 민감한 20대 대학생 여성',
        inputTags: ['뷰티', 'SKU', '봄 런칭'],
        labels: {
          creative: '캠페인 브리프',
          v1: 'V1 - 신규 크리에이티브',
          distribution: '배포 채널',
          performance: '성과 데이터',
          variants: '진화한 다음 캠페인',
          training: '모델 학습',
          ideation: '기획 엔진',
        },
        metrics: {
          delta: '↑ +0.38',
          label: '광고 수익률',
          lanes: ['소셜', '디스플레이', '숏폼'],
          median: '중앙값',
          rankRows: [
            { name: '광고 A', width: '92%', hero: true },
            { name: '광고 C', width: '61%' },
            { name: '광고 E', width: '48%' },
            { name: '광고 B', width: '74%' },
            { name: '광고 D', width: '36%' },
          ],
        },
        v1Cards: [
          { kicker: '세럼', title: '대표 컷', tone: 'pink' },
          { kicker: 'PDP', title: '런칭 타일', tone: 'sand' },
          { kicker: 'META', title: 'CTR 변주', tone: 'lime' },
          { kicker: '릴스', title: '스토리 앵글', tone: 'blue' },
          { kicker: 'NAVER', title: '검색 프레임', tone: 'ink' },
          { kicker: '29CM', title: '무드 확장', tone: 'violet' },
          { kicker: 'REEL', title: '후킹 프레임', tone: 'pink' },
          { kicker: '프로모', title: '오퍼 컷', tone: 'lime' },
          { kicker: '라이프', title: '씬 샷', tone: 'blue' },
          { kicker: '배너', title: '플래시 세일', tone: 'sand' },
          { kicker: '쿠팡', title: '썸네일 팩', tone: 'ink' },
          { kicker: 'CRM', title: 'CRM 타일', tone: 'violet' },
        ],
        channelCards: [
          { title: '메타 광고', desc: '하나의 브리프를 즉시 광고 시안으로.', glyph: 'AD', tone: 'pink' },
          { title: '인스타그램 릴스', desc: '리뷰 문법으로 자연스럽게 변주.', glyph: 'UGC', tone: 'blue' },
          { title: 'PDP', desc: '성과 데이터가 상세페이지를 다시 다듬습니다.', glyph: 'PDP', tone: 'lime' },
          { title: '디스플레이', desc: '캠페인을 배너 규격으로 빠르게 확장.', glyph: 'OOH', tone: 'sand' },
          { title: '숏폼', desc: '승인된 방향을 숏폼 영상으로 전개.', glyph: 'REEL', tone: 'violet' },
          { title: '마켓플레이스', desc: '채널별 비주얼 세트를 자동 분기.', glyph: 'SKU', tone: 'ink' },
        ],
        optimizedCards: [
          { kicker: 'A1', title: 'ROAS 상승', tone: 'lime' },
          { kicker: 'A2', title: '카카오', tone: 'pink' },
          { kicker: 'A3', title: '메타', tone: 'blue' },
          { kicker: 'A4', title: '네이버', tone: 'sand' },
          { kicker: 'A5', title: 'PDP', tone: 'ink' },
          { kicker: 'A6', title: '릴스', tone: 'violet' },
          { kicker: 'A7', title: '옥외 광고', tone: 'pink' },
          { kicker: 'A8', title: '리뷰', tone: 'blue' },
          { kicker: 'A9', title: '부스트', tone: 'lime' },
          { kicker: 'B1', title: '런칭', tone: 'sand' },
          { kicker: 'B2', title: '클릭', tone: 'ink' },
          { kicker: 'B3', title: '프로모', tone: 'violet' },
          { kicker: 'B4', title: 'SKU', tone: 'pink' },
          { kicker: 'B5', title: 'UGC', tone: 'blue' },
          { kicker: 'B6', title: '오퍼', tone: 'lime' },
          { kicker: 'B7', title: '무드', tone: 'sand' },
          { kicker: 'B8', title: '씬', tone: 'ink' },
          { kicker: 'B9', title: '그리드', tone: 'violet' },
          { kicker: 'C1', title: '스케일', tone: 'pink' },
          { kicker: 'C2', title: '루프', tone: 'blue' },
        ],
        modelCards: [
          { title: '커스텀 모델', desc: '브랜드 룩과 카피 패턴을 계속 축적합니다.', icon: 'model' },
          { title: '커스텀 에이전트', desc: '다음 배치와 다음 변주를 자동으로 제안합니다.', icon: 'agent' },
        ],
        ideationCells: ['앵글', '카피', '무드', '오퍼', 'SKU', '후킹'],
        outputLabelLines: ['다음 크리에이티브는', '데이터 기반으로', '에이전트와 함께'],
        outputCards: [
          { kicker: 'PDP', title: '런칭 준비 완료', tone: 'lime' },
          { kicker: 'META', title: '광고 세트', tone: 'pink' },
          { kicker: 'REEL', title: '숏폼', tone: 'blue' },
          { kicker: 'NAVER', title: '검색 팩', tone: 'sand' },
          { kicker: 'CRM', title: '리텐션', tone: 'ink' },
          { kicker: 'SKU', title: '채널 믹스', tone: 'violet' },
        ],
        mobileCards: [
          { title: '크리에이티브', body: '하나의 브리프가 메타, 상세, 쇼핑, 숏폼 버전으로 퍼집니다.' },
          { title: '성과 데이터', body: 'CTR, ROAS, 채널별 반응 데이터가 다음 변주에 반영됩니다.' },
          { title: '모델 학습', body: '승인된 브랜드 룩과 텍스트 패턴이 누적되어 다음 배치가 더 날카로워집니다.' },
          { title: '기획 엔진', body: '누적된 학습을 바탕으로 다음 앵글, 카피, 오퍼 조합을 제안합니다.' },
          { title: '최적화 변주', body: '검증된 방향이 채널별 최적화 변주 묶음으로 다시 확장됩니다.' },
        ],
      },
      tech: {
        eyebrow: 'TECH · TEXT & DETAIL PRESERVATION',
        titleLines: ['한글·디테일을 지키는', '상업용 컨텐츠 생성 솔루션'],
        lede: '상품 이미지는 그럴듯해 보이는 것만으로는 충분하지 않습니다. 브랜드 카피, 로고, 자수, 제품 각인, 패키지의 작은 텍스트처럼 구매를 좌우하는 디테일까지 정확하게 살아 있어야 합니다. ',
        ledeStrong: 'ATELA는 특허받은 기술과 논문을 바탕으로 브랜드 자산과 제품 디테일을 끝까지 선명하게 유지합니다.',
        selectorAriaLabel: '기술 예시 선택',
        comparisons: TECH_EXAMPLES.ko[0].comparisons,
        examples: TECH_EXAMPLES.ko,
      },
      integrations: {
        eyebrow: 'WORKFLOW FOR ECOMMERCE BRANDS',
        titlePrefix: '카탈로그에 필요한',
        titleHighlight: '모든 비주얼을',
        titleSuffix: ', 한번에.',
        ledeLines: [
          '카탈로그 전체의 비주얼 퀄리티와 완성도를 끌어올리세요.',
        ],
        selectorAriaLabel: '워크플로우 과제 선택',
        metricAriaLabel: '워크플로우 성과 지표',
        challenges: [
          {
            id: 'packshot',
            k: '01',
            label: '일관된 팩샷',
            title: 'SKU별 대표 팩샷 정렬',
            image: '/assets/workflow/consistent-packshot.jpg',
            alt: '일관된 팩샷 예시 이미지',
          },
          {
            id: 'staging',
            k: '02',
            label: '제품 연출컷',
            title: '제품 연출컷 생성',
            image: '/assets/workflow/product-staging.jpg',
            alt: '제품 연출컷 예시 이미지',
          },
          {
            id: 'lighting',
            k: '03',
            label: '조명 제어',
            title: '조명 톤 정렬',
            image: '/assets/workflow/lighting-control.jpg',
            alt: '조명 제어 예시 이미지',
          },
          {
            id: 'closeups',
            k: '04',
            label: '디테일 확대컷',
            title: '구매 포인트 확대컷',
            image: '/assets/workflow/close-ups.jpg',
            alt: '디테일 확대컷 예시 이미지',
          },
          {
            id: 'infographics',
            k: '05',
            label: '제품 인포그래픽',
            title: '텍스트 포함 인포그래픽',
            image: '/assets/workflow/product-infographics.jpg',
            alt: '제품 인포그래픽 예시 이미지',
          },
          {
            id: 'dimensions',
            k: '06',
            label: '치수 오버레이',
            title: '치수 정보 오버레이',
            image: '/assets/workflow/dimension-overlays.jpg',
            alt: '치수 오버레이 예시 이미지',
          },
          {
            id: 'swap',
            k: '07',
            label: '제품 교체',
            title: '같은 장면 안의 SKU 교체',
            image: '/assets/workflow/product-swap.jpg',
            alt: '제품 교체 예시 이미지',
          },
          {
            id: 'motion',
            k: '08',
            label: '이미지 기반 영상화',
            title: '정지 이미지를 짧은 모션으로',
            image: '/assets/workflow/image-to-video.jpg',
            alt: '이미지 기반 영상화 예시 이미지',
          },
          {
            id: 'spin',
            k: '09',
            label: '360도 회전 뷰',
            title: '회전 뷰로 구조 전달',
            image: '/assets/workflow/spins-360.jpg',
            alt: '360도 회전 뷰 예시 이미지',
          },
        ],
        metrics: [
          {
            value: '+20%',
            body: '풍부한 비주얼 콘텐츠로 평균 전환율 상승',
          },
          {
            value: '10x',
            body: '더 빠른 카탈로그 리프레시',
          },
          {
            value: '90%',
            body: '시즌 캠페인 출시 시간 단축',
          },
        ],
      },
      showcase: {
        eyebrow: 'SHOWCASE',
        titleLines: ['이런 컨텐츠 만들고 싶은데,', '막막하신가요?'],
        galleryLabel: 'ATELA 작업 예시 갤러리',
        cards: [
          {
            id: 'pdp',
            image: '/assets/hero-demo/drg/bg.avif',
            alt: 'ATELA product detail page refresh showcase',
          },
          {
            id: 'ads',
            image: '/assets/hero-demo/chamo/bg.avif',
            alt: 'ATELA performance ad creative showcase',
          },
          {
            id: 'lifestyle',
            image: '/assets/hero-demo/lamp/bg.avif',
            alt: 'ATELA lifestyle commerce showcase',
          },
          {
            id: 'motion',
            image: '/assets/hero-demo/pilot_trunk/bg.avif',
            alt: 'ATELA motion and video showcase',
          },
        ],
      },
      atelierHero: {
        eyebrow: 'ATELA ATELIER',
        titleLines: ['브랜드 크리에이티브 운영,', 'ATELA가 직접 실행합니다.'],
        body: 'PDP, 광고, 릴스, CRM은 같은 템플릿으로 끝나지 않습니다. ATELA Atelier는 브랜드와 채널 맥락을 읽고, Showcase 품질의 결과물까지 직접 운영합니다.',
        primaryCta: '가격 보기 →',
        secondaryCta: '생성 툴 먼저 보기 ↗',
        points: [
          'PDP · 광고 · 릴스 · CRM까지',
          '브랜드 디테일 보존',
          '48시간 내 빠른 전달',
        ],
      },
      atelierBridge: {
        eyebrow: 'ATELA ATELIER',
        titleLines: ['직접 돌리기보다,', '바로 실행이 필요한 팀이라면.'],
        body: '툴은 내부 팀이 빠르게 제작할 때 좋습니다. 하지만 채널별 기획부터 결과물 전달까지 맡길 파트너가 필요하다면, Atelier가 더 빠릅니다.',
        points: [
          '광고, PDP, 릴스, CRM까지 한 번에 운영',
          '브랜드 톤과 디테일을 지키며 반복',
          'Showcase 품질로 바로 시작',
        ],
        primaryCta: 'ATELIER 보기 ↗',
        secondaryCta: '운영 방식 보기 ↗',
        galleryLabel: 'ATELA Atelier 미리보기',
      },
      marketplace: {
        eyebrow: 'AI AGENTIC AGENCY',
        titlePrefix: '브랜드 크리에이티브 운영,',
        titleHighlight: 'ATELA',
        titleSuffix: '가 실행합니다.',
        lede: '인스타그램 릴스, 광고 영상, PDP, CRM은 모두 다른 문법으로 움직입니다. 브랜드에 필요한 건, 브랜드와 채널 맥락을 이해하고 결과물까지 끝까지 실행하는 시스템입니다. 캠페인 브리프만 입력하면, ATELA의 AI Orchestration 시스템이 포맷별 크리에이티브를 기획하고 생성하며 채널에 맞게 전개합니다. ',
        ledeStrong: '대표님은 비즈니스에 집중하고, 크리에이티브 운영은 ATELA가 책임집니다.',
        flow: [
          { step: '1', title: '브랜드 브리프 업로드', body: '상품 · 채널 · 톤 · 예산. 2분.' },
          { step: '2', title: '에이전트가 채널별 실행안 설계', body: 'ATELA의 오케스트레이션 시스템이 포맷별 전략과 제작 흐름을 세팅합니다.' },
          { step: '3', title: '브랜드 세이프 생성·수정·반복', body: '텍스트, 로고, 디테일을 지키며 결과물을 반복 개선합니다.' },
          { step: '4', title: '48시간 내 전달', body: '평균 turnaround. 빠른 수정 반영.' },
          { step: '5', title: '피드백이 다음 실행으로 누적', body: '승인, 성과, 채널 반응이 다음 캠페인 품질에 반영됩니다.' },
        ],
        motionPills: [
          '광고 크리에이티브',
          '인스타그램 릴스',
          '광고 영상',
          '화보',
          '모션 그래픽',
          '프레젠테이션',
          '웹·UI 디자인',
          '옥외광고',
          '일러스트',
          '포스터',
          '해외시장 홍보물',
          '3D 디자인',
          '카피라이팅',
          'AI 컨설팅',
          '캠페인 기획',
          '컨퍼런스용 홍보영상',
          '그 외 다수',
        ],
        agents: [
          { n: 'PDP Agent', h: 'P', spec: 'PDP Agent · Detail Page', color: '#FF3DA8' },
          { n: 'Ads Agent', h: 'A', spec: 'Ads Agent · Performance', color: '#C6FF3D' },
          { n: 'Reels Agent', h: 'R', spec: 'Reels Agent · Short-form', color: '#6B3DFF' },
          { n: 'CRM Agent', h: 'C', spec: 'CRM Agent · Lifecycle', color: '#E8D5B0' },
        ],
      },
      compare: {
        eyebrow: 'WHY ATELA',
        titlePrefix: '인하우스도, 에이전시도 아닌',
        titleHighlight: '완전히 새로운 대안.',
        dims: ['속도', '유연성', '퀄리티', '확장성', '효율성', '전문성'],
        rows: [
          { n: 'ATELA', d: '상업용 콘텐츠를 위한 에이전틱 에이전시.', v: [1, 1, 1, 1, 1, 1], on: true },
          { n: 'In-house Team', d: '인하우스 디자이너. 스킬·역량 한정.', v: [0, 0, 1, 1, 0, 0] },
          { n: 'Creative Agency', d: '에이전시 계약. 퀄리티는 좋지만 느리고 비쌈.', v: [0, 0, 1, 0, 0, 1] },
          { n: 'Freelancer', d: '프리랜서. 품질 편차 · 스케일 어려움.', v: [0, 1, 0, 0, 0, 0] },
          { n: 'AI Tools only', d: 'Higgsfield·MJ. 브랜드 context 없음, 학습곡선.', v: [1, 1, 0, 1, 1, 0] },
        ],
      },
      caseStudy: {
        badge: '뷰티 브랜드',
        eyebrow: 'CASE STUDY · 뷰티 브랜드 시즌 런칭 운영',
        titlePrefix: '촬영 0회,\n시즌 컬렉션',
        titleHighlight: '런칭.',
        body: '신상 1개당 3일의 촬영·리터치가 필요했던 팀. Cafe24 연동 + ATELA Growth 도입 후, 상세페이지 35장을 평균 14분에 생성하고, Performance Creative도 주 2회씩 ATELA 에이전트 루프로 반복 개선했습니다. 주간 신상 업로드 4종 → 28종으로 증가.',
        quote: '촬영팀 없이 시즌 캠페인을 돌려요. 브랜드 톤은 오히려 더 일관됐어요. 이제 광고 크리에이티브까지 포함해, 대부분의 제작 운영을 ATELA와 함께 돌립니다.',
        cite: '브랜드 매니저, A사',
        stats: [
          { value: '82%', label: '촬영비 절감' },
          { value: '7×', label: '주간 업로드' },
          { value: '+38%', label: '광고 CTR' },
        ],
        cta: '전체 사례 보기 →',
      },
      pricing: {
        eyebrow: 'PRICING',
        title: '가장 막히는 워크플로우 하나부터 시작하세요.',
        subtitle: '처음부터 큰 약정은 필요 없습니다. 지금 가장 급한 크리에이티브 업무부터 함께 풀고, 효과가 확인되면 반복 운영으로 넓혀갑니다.',
        plans: [
          {
            name: 'Sprint',
            badge: '시작가',
            summary: '가장 시급한 병목 하나를 1-2주 안에 풀어보는 첫 프로젝트',
            features: ['가장 급한 워크플로우 1개부터 시작', '브랜드 가이드 정리 + 첫 결과물 전달', '촬영이나 외주 없이 바로 테스트', '장기 계약 없이 가볍게 시작'],
            price: { prefix: '₩', amount: '890,000', suffix: '부터', note: '장기 계약 없음' },
          },
          {
            name: 'Retainer',
            badge: '가장 많이 선택',
            summary: '검증된 흐름을 주간 운영으로 이어가는 월간 파트너십',
            features: ['새 SKU와 캠페인을 주간 단위로 전개', 'PDP · 광고 · CRM · 숏폼까지 채널별로 확장', '텍스트 · 로고 · 패키지 디테일을 지키며 반복', '운영 속도와 브랜드 이해가 계속 쌓임'],
            price: { prefix: '₩', amount: '2,490,000', suffix: '/월부터', note: '검증된 뒤 본격 확장' },
            dark: true,
            featured: true,
          },
          {
            name: 'Enterprise',
            badge: '맞춤형',
            summary: '여러 팀과 채널을 하나의 운영 체계로 묶는 맞춤형 구조',
            features: ['브랜드 · 국가 · 채널별 운영 기준 통합', '카탈로그 · 승인 플로우 · API 연동', '내부 팀과 외부 파트너 협업 방식 정리', '대량 운영에 맞춘 오케스트레이션 설계'],
            price: { amount: '문의', note: '브랜드 상황에 맞춘 제안' },
          },
        ],
        marketTitle: '그래서 브랜드에 남는 것',
        marketSubtitle: '결과물 몇 장이 아닙니다. 촬영과 외주 의존도는 줄이고, 런칭 속도는 높이고, 브랜드 톤은 흔들리지 않게 운영할 수 있는 기반을 만드는 일입니다.',
        marketRows: [
          { label: '촬영 의존도', value: '낮아짐' },
          { label: '외주 커뮤니케이션', value: '줄어듦' },
          { label: '런칭 속도', value: '빨라짐' },
          { label: '채널별 확장', value: '쉬워짐' },
          { label: '운영 노하우', value: '쌓임' },
        ],
        guarantee: '한 번의 납품보다, 다음 실행까지 이어질 운영 방식을 함께 만듭니다',
        subnote: '그래서 작게 시작해보고, 맞는 흐름만 점점 키워가는 방식이 가장 자연스럽습니다',
      },
      finalCta: {
        eyebrow: 'START TODAY',
        titleLines: ['오늘 상품 연결,', '내일 아침 50장\n+ 채널별 실행 결과물.'],
        body: '지금 무료로 시작하세요.',
        primaryCta: '무료로 시작하기 →',
        secondaryCta: 'ATELIER 보기 ↗',
      },
      footer: {
        bottomLeft: '© 2026 ATELA Inc.',
        bottomRight: '이용약관 · 개인정보처리방침 · 쿠키',
        termsLabel: '이용약관',
        privacyLabel: '개인정보처리방침',
      },
    },
    en: {
      page: {
        title: 'ATELA · The Agentic Creative Team for Brands',
        description: 'An AI agentic agency for brands that preserves text, logos, and brand detail across PDPs, ads, reels, and marketplace creative.',
      },
      atelierPage: {
        title: 'ATELA Atelier · Creative Operations Executed for Brands',
        description: 'ATELA Atelier executes PDP, ad, reels, and CRM creative operations for brands with showcase-ready quality.',
      },
      privacyPage: {
        title: 'ATELA Privacy Policy',
        description: 'This Privacy Policy explains how ATELA handles personal information for its service and Google OAuth sign-in.',
        eyebrow: 'PRIVACY POLICY',
        heading: 'Privacy Policy',
        summary: 'ATELA only processes the personal information needed to operate the service and support Google OAuth sign-in.',
        effectiveDateLabel: 'Effective date',
        effectiveDate: 'April 22, 2026',
        homeLabel: 'Back home',
        otherPageLabel: 'View Terms of Service',
        sections: [
          {
            title: '1. Information we collect',
            items: [
              'Account information shared with your consent through Google OAuth or another third-party sign-in flow, such as email address, name, and profile image',
              'Technical information needed for operations and security, including sign-in status, access time, browser and device details, and cookies',
              'Information you provide directly when you contact ATELA for support, onboarding, or service inquiries',
            ],
          },
          {
            title: '2. How we use information',
            items: [
              'To identify users, create accounts, and provide sign-in and authentication',
              'To operate the service, maintain security, prevent misuse, and improve the experience',
              'To respond to inquiries and send important account or service-related notices',
            ],
          },
          {
            title: '3. Retention',
            items: [
              'Personal information is kept while your account or service relationship remains active and deleted within a reasonable period after the purpose ends or deletion is requested.',
              'Some information may be retained longer when required by applicable law.',
            ],
          },
          {
            title: '4. Third parties and service providers',
            items: [
              'ATELA does not sell personal information or disclose it to unrelated third parties except when required by law.',
              'ATELA may use outside providers such as Google OAuth and Clerk to support sign-in and account operations, and those providers may process information as needed to deliver the service.',
            ],
          },
          {
            title: '5. Your choices',
            items: [
              'You may request access, correction, deletion, or restriction of your personal information where applicable.',
              'Permissions connected to your Google account can also be revoked from your Google account settings.',
            ],
          },
          {
            title: '6. Operator and contact',
            items: [
              'Operator: ATELA Inc.',
              "Privacy and account-related requests can be submitted through ATELA's official contact channel.",
            ],
          },
        ],
      },
      termsPage: {
        title: 'ATELA Terms of Service',
        description: 'These Terms of Service apply to the ATELA website and related services, including Google OAuth sign-in.',
        eyebrow: 'TERMS OF SERVICE',
        heading: 'Terms of Service',
        summary: 'These terms describe the basic conditions for using the ATELA website and related services.',
        effectiveDateLabel: 'Effective date',
        effectiveDate: 'April 22, 2026',
        homeLabel: 'Back home',
        otherPageLabel: 'View Privacy Policy',
        sections: [
          {
            title: '1. Service scope',
            items: [
              'ATELA provides a website, sign-in flow, information pages, and related services connected to brand creative operations.',
              'Parts of the service may change, be added, or be discontinued at any time.',
            ],
          },
          {
            title: '2. Accounts and sign-in',
            items: [
              'Users may sign in with Google OAuth or another authentication method made available by ATELA.',
              'You are responsible for maintaining the security of your account and authentication methods.',
            ],
          },
          {
            title: '3. Prohibited conduct',
            items: [
              'You may not violate applicable law, impersonate others, interfere with the service, attempt unauthorized access, or misuse data obtained from the service.',
              'ATELA may limit access or take account action when conduct harms service safety or operations.',
            ],
          },
          {
            title: '4. Intellectual property',
            items: [
              'Rights in the ATELA website, trademarks, logos, copy, design, and related content belong to ATELA or the applicable rights holder.',
              'You may not copy, distribute, modify, or commercially exploit those materials without prior permission.',
            ],
          },
          {
            title: '5. Disclaimer and limitation of liability',
            items: [
              'To the maximum extent allowed by law, ATELA does not guarantee uninterrupted availability, fitness for a particular purpose, or error-free operation.',
              'You are responsible for your own use of the account, connected third-party authentication, and outside services.',
            ],
          },
          {
            title: '6. Governing law and contact',
            items: [
              'These terms are interpreted under applicable law.',
              "Service-related questions may be submitted through ATELA's official contact channel.",
            ],
          },
        ],
      },
      nav: {
        cta: 'Start free',
        menuHome: 'STUDIO',
        menuAtelier: 'ATELIER',
        menuContact: 'CONTACT',
      },
      atelierNav: {
        cta: 'Start free',
        menuHome: 'STUDIO',
        menuAtelier: 'ATELIER',
        menuContact: 'CONTACT',
      },
      hero: {
        titleLead: 'For ecommerce brands',
        titlePrefix: 'The one',
        titleHighlight: 'visual solution',
        subtitleLines: [
          'Connect Cafe24, Shopify, or a product URL to ATELA,',
          'and one source expands into brand-tailored studio, detail, lifestyle, and video outputs.',
        ],
        cta: 'Start free',
        packAriaPrefix: 'View results for',
      },
      auth: {
        completedCta: 'Launch alert set',
        missingConfiguration: 'Clerk is not configured yet. Add VITE_CLERK_PUBLISHABLE_KEY and try again.',
        unavailable: 'Google sign-in is unavailable right now. Please try again in a moment.',
      },
      heroDemo: {
        packs: {
          drg: {
            name: 'Dr.G Cream',
            sourceAlt: 'Dr.G cream source asset',
            outputs: {
              studio: 'Dr.G cream background output',
              angle: 'Dr.G cream lighting output',
              variation: 'Dr.G cream variation output',
              lifestyle: 'Dr.G cream angle output',
            },
            videoAlt: 'Dr.G cream video output',
          },
          chamo: {
            name: 'CHAMO Hand Cream',
            sourceAlt: 'CHAMO hand cream source asset',
            outputs: {
              studio: 'CHAMO hand cream background output',
              angle: 'CHAMO hand cream lighting output',
              variation: 'CHAMO hand cream variation output',
              lifestyle: 'CHAMO hand cream angle output',
            },
            videoAlt: 'CHAMO hand cream video output',
          },
          lamp: {
            name: 'Table Lamp',
            sourceAlt: 'Table lamp source asset',
            outputs: {
              studio: 'Table lamp background output',
              angle: 'Table lamp lighting output',
              variation: 'Table lamp variation output',
              lifestyle: 'Table lamp angle output',
            },
          },
          sofa: {
            name: 'Curved Sofa',
            sourceAlt: 'Curved sofa source asset',
            outputs: {
              studio: 'Curved sofa background output',
              angle: 'Curved sofa lighting output',
              variation: 'Curved sofa variation output',
              lifestyle: 'Curved sofa angle output',
            },
          },
          jacket: {
            name: 'Mountain Jacket',
            sourceAlt: 'Mountain jacket source asset',
            outputs: {
              studio: 'Mountain jacket background output',
              angle: 'Mountain jacket lighting output',
              variation: 'Mountain jacket variation output',
              lifestyle: 'Mountain jacket angle output',
            },
          },
          pilot_trunk: {
            name: 'Pilot Trunk',
            sourceAlt: 'Pilot trunk source asset',
            outputs: {
              studio: 'Pilot trunk background output',
              angle: 'Pilot trunk lighting output',
              variation: 'Pilot trunk variation output',
              lifestyle: 'Pilot trunk angle output',
            },
            videoAlt: 'Pilot trunk video output',
          },
        },
      },
      logoCloud: {
        title: 'Trusted by',
        ariaLabel: 'Trusted by brand logos',
      },
      stats: {
        items: [
          { n: '15.2x', l: 'Text Rendering Accuracy', s: 'vs. Google Nanobanana Pro' },
          { n: '4 min', l: 'Brief → First Batch', s: 'Orchestration kickoff' },
          { n: '199', l: 'Active Workflows', s: 'Across 6 format groups' },
          { n: '2 days', l: 'Brief → First Delivery', s: 'Average turnaround' },
        ],
      },
      compound: {
        eyebrow: 'SYSTEM LEARNING LOOP',
        headlineLead: 'Built to compound.',
        headlineEmphasis: 'A system that never stops learning.',
        sub: 'Every ATELA project feeds the system. Performance signals, approved outputs, and channel feedback shape what gets made next. The more your team runs, the sharper the next batch becomes.',
        subHighlight: 'Every ATELA project teaches the system.',
        subBody: 'Performance signals, approved outputs, and channel feedback shape what gets made next. The more your team runs, the sharper the next batch becomes.',
        inputKicker: null,
        briefTitle: 'Spring launch campaign',
        briefCopy: '24 serum SKUs, versions for Meta, Naver, and 29CM',
        inputTags: ['Beauty', 'SKU', 'Spring'],
        labels: {
          creative: 'Campaign Brief',
          v1: 'V1 — New Creative',
          distribution: 'Distribution Channels',
          performance: 'Performance Data',
          variants: 'Optimized Variants',
          training: 'Model Training',
          ideation: 'Ideation Engine',
        },
        metrics: {
          delta: '↑ +0.38 vs baseline',
          label: 'Return on ad spend',
          lanes: ['social', 'display', 'reel'],
          median: 'median',
          rankRows: [
            { name: 'ad-a', width: '92%', hero: true },
            { name: 'ad-c', width: '61%' },
            { name: 'ad-e', width: '48%' },
            { name: 'ad-b', width: '74%' },
            { name: 'ad-d', width: '36%' },
          ],
        },
        v1Cards: [
          { kicker: 'SERUM', title: 'Hero Cut', tone: 'pink' },
          { kicker: 'PDP', title: 'Launch Tile', tone: 'sand' },
          { kicker: 'META', title: 'CTR Variant', tone: 'lime' },
          { kicker: 'UGC', title: 'Story Angle', tone: 'blue' },
          { kicker: 'NAVER', title: 'Search Frame', tone: 'ink' },
          { kicker: '29CM', title: 'Mood Spread', tone: 'violet' },
          { kicker: 'REEL', title: 'Hook Frame', tone: 'pink' },
          { kicker: 'PROMO', title: 'Offer Cut', tone: 'lime' },
          { kicker: 'LIFE', title: 'Scene Shot', tone: 'blue' },
          { kicker: 'BANNER', title: 'Flash Sale', tone: 'sand' },
          { kicker: 'COUPANG', title: 'Thumb Pack', tone: 'ink' },
          { kicker: 'EMAIL', title: 'CRM Tile', tone: 'violet' },
        ],
        channelCards: [
          { title: 'Meta Ad', desc: 'Turn one brief into ad concepts right away.', glyph: 'AD', tone: 'pink' },
          { title: 'Social UGC', desc: 'Remix naturally in the language of reviews.', glyph: 'UGC', tone: 'blue' },
          { title: 'PDP', desc: 'Performance data sharpens the PDP again.', glyph: 'PDP', tone: 'lime' },
          { title: 'Display', desc: 'Expand campaigns into banner formats fast.', glyph: 'OOH', tone: 'sand' },
          { title: 'Short-form', desc: 'Carry approved directions into short-form video.', glyph: 'REEL', tone: 'violet' },
          { title: 'Marketplace', desc: 'Branch visual sets automatically by channel.', glyph: 'SKU', tone: 'ink' },
        ],
        optimizedCards: [
          { kicker: 'A1', title: 'ROAS Up', tone: 'lime' },
          { kicker: 'A2', title: 'Kakao', tone: 'pink' },
          { kicker: 'A3', title: 'Meta', tone: 'blue' },
          { kicker: 'A4', title: 'Naver', tone: 'sand' },
          { kicker: 'A5', title: 'PDP', tone: 'ink' },
          { kicker: 'A6', title: 'Reel', tone: 'violet' },
          { kicker: 'A7', title: 'OOH', tone: 'pink' },
          { kicker: 'A8', title: 'Review', tone: 'blue' },
          { kicker: 'A9', title: 'Boost', tone: 'lime' },
          { kicker: 'B1', title: 'Launch', tone: 'sand' },
          { kicker: 'B2', title: 'Click', tone: 'ink' },
          { kicker: 'B3', title: 'Promo', tone: 'violet' },
          { kicker: 'B4', title: 'SKU', tone: 'pink' },
          { kicker: 'B5', title: 'UGC', tone: 'blue' },
          { kicker: 'B6', title: 'Offer', tone: 'lime' },
          { kicker: 'B7', title: 'Mood', tone: 'sand' },
          { kicker: 'B8', title: 'Scene', tone: 'ink' },
          { kicker: 'B9', title: 'Grid', tone: 'violet' },
          { kicker: 'C1', title: 'Scale', tone: 'pink' },
          { kicker: 'C2', title: 'Loop', tone: 'blue' },
        ],
        modelCards: [
          { title: 'Custom Model', desc: 'Keep accumulating brand look and copy patterns.', icon: 'model' },
          { title: 'Custom Agent', desc: 'Suggest the next batch and the next variation automatically.', icon: 'agent' },
        ],
        ideationCells: ['Angle', 'Copy', 'Mood', 'Offer', 'SKU', 'Hook'],
        outputLabelLines: ['YOUR NEXT CREATIVE IS', 'DATA INFORMED', 'AND AGENT ASSISTED'],
        outputCards: [
          { kicker: 'PDP', title: 'Launch Ready', tone: 'lime' },
          { kicker: 'META', title: 'Ad Set', tone: 'pink' },
          { kicker: 'REEL', title: 'Short-form', tone: 'blue' },
          { kicker: 'NAVER', title: 'Search Pack', tone: 'sand' },
          { kicker: 'CRM', title: 'Retention', tone: 'ink' },
          { kicker: 'SKU', title: 'Market Mix', tone: 'violet' },
        ],
        mobileCards: [
          { title: 'Creative', body: 'One brief fans out into Meta, PDP, commerce, and short-form versions.' },
          { title: 'Performance Data', body: 'CTR, ROAS, and channel-response data feed the next iteration.' },
          { title: 'Model Training', body: 'Approved brand looks and text patterns accumulate so the next batch gets sharper.' },
          { title: 'Ideation Engine', body: 'Accumulated learning suggests the next angle, copy, and offer combinations.' },
          { title: 'Optimized Variants', body: 'Validated directions expand back out into channel-ready optimized variants.' },
        ],
      },
      tech: {
        eyebrow: 'TECH · TEXT & DETAIL PRESERVATION',
        titleLines: ['Commercial content creation that preserves text and detail'],
        lede: 'A product image cannot just look good. Brand copy, logos, embroidery, engravings, and packaging text all affect conversion, and they need to stay intact. ',
        ledeStrong: 'Built on patented technology and published research, ATELA keeps brand assets and product detail sharp all the way through.',
        selectorAriaLabel: 'Tech example selector',
        comparisons: TECH_EXAMPLES.en[0].comparisons,
        examples: TECH_EXAMPLES.en,
      },
      integrations: {
        eyebrow: 'WORKFLOW FOR ECOMMERCE BRANDS',
        titlePrefix: 'Every visual',
        titleHighlight: 'your brand needs',
        titleSuffix: ', all at once.',
        ledeLines: [
          'Raise the quality and completeness of visuals across your entire catalog.',
        ],
        selectorAriaLabel: 'Workflow challenge selector',
        metricAriaLabel: 'Workflow performance metrics',
        challenges: [
          {
            id: 'packshot',
            k: '01',
            label: 'Consistent packshots',
            title: 'Align hero packshots by SKU',
            image: '/assets/workflow/consistent-packshot.jpg',
            alt: 'Consistent packshot sample',
          },
          {
            id: 'staging',
            k: '02',
            label: 'Product staging',
            title: 'Generate styled product scenes',
            image: '/assets/workflow/product-staging.jpg',
            alt: 'Product staging sample',
          },
          {
            id: 'lighting',
            k: '03',
            label: 'Lighting control',
            title: 'Align lighting tone',
            image: '/assets/workflow/lighting-control.jpg',
            alt: 'Lighting control sample',
          },
          {
            id: 'closeups',
            k: '04',
            label: 'Close-up details',
            title: 'Create close-up buying cues',
            image: '/assets/workflow/close-ups.jpg',
            alt: 'Close-up sample',
          },
          {
            id: 'infographics',
            k: '05',
            label: 'Product infographics',
            title: 'Create text-led infographics',
            image: '/assets/workflow/product-infographics.jpg',
            alt: 'Product infographic sample',
          },
          {
            id: 'dimensions',
            k: '06',
            label: 'Dimension overlays',
            title: 'Overlay size information',
            image: '/assets/workflow/dimension-overlays.jpg',
            alt: 'Dimension overlay sample',
          },
          {
            id: 'swap',
            k: '07',
            label: 'Product swap',
            title: 'Swap SKUs within the same scene',
            image: '/assets/workflow/product-swap.jpg',
            alt: 'Product swap sample',
          },
          {
            id: 'motion',
            k: '08',
            label: 'Image-to-video',
            title: 'Turn stills into short motion',
            image: '/assets/workflow/image-to-video.jpg',
            alt: 'Image to video sample',
          },
          {
            id: 'spin',
            k: '09',
            label: '360 view',
            title: 'Show product structure with rotation',
            image: '/assets/workflow/spins-360.jpg',
            alt: '360 spin sample',
          },
        ],
        metrics: [
          {
            value: '+20%',
            body: 'Average conversion lift from richer visual content',
          },
          {
            value: '10x',
            body: 'Faster catalog refresh cycles',
          },
          {
            value: '90%',
            body: 'Shorter time-to-launch for seasonal campaigns',
          },
        ],
      },
      showcase: {
        eyebrow: 'SHOWCASE',
        titleLines: ['Want content like this,', 'but not sure where to start?'],
        galleryLabel: 'ATELA example work gallery',
        cards: [
          {
            id: 'pdp',
            image: '/assets/hero-demo/drg/bg.avif',
            alt: 'ATELA product detail page refresh showcase',
          },
          {
            id: 'ads',
            image: '/assets/hero-demo/chamo/bg.avif',
            alt: 'ATELA performance ad creative showcase',
          },
          {
            id: 'lifestyle',
            image: '/assets/hero-demo/lamp/bg.avif',
            alt: 'ATELA lifestyle commerce showcase',
          },
          {
            id: 'motion',
            image: '/assets/hero-demo/pilot_trunk/bg.avif',
            alt: 'ATELA motion and video showcase',
          },
        ],
      },
      atelierHero: {
        eyebrow: 'ATELA ATELIER',
        titleLines: ['Creative operations for brands,', 'executed by ATELA.'],
        body: 'PDP, ads, reels, and CRM do not run on the same template. ATELA Atelier reads brand and channel context, then carries execution through to showcase-ready output.',
        primaryCta: 'View pricing →',
        secondaryCta: 'See the tool first ↗',
        points: [
          'PDP, ads, reels, and CRM together',
          'Brand detail stays intact',
          'Fast delivery within 48 hours',
        ],
      },
      atelierBridge: {
        eyebrow: 'ATELA ATELIER',
        titleLines: ['If you do not need another tool,', 'but execution right away.'],
        body: 'The tool is for teams who want to produce fast in-house. Atelier is for brands that need one partner to plan, make, and operate creative across channels.',
        points: [
          'Run ads, PDP, reels, and CRM together',
          'Iterate while keeping brand tone and detail',
          'Start with showcase-level output immediately',
        ],
        primaryCta: 'Explore ATELIER ↗',
        secondaryCta: 'See how it works ↗',
        galleryLabel: 'ATELA Atelier preview',
      },
      marketplace: {
        eyebrow: 'AI AGENTIC AGENCY',
        titlePrefix: 'Creative operations for brands,',
        titleHighlight: 'ATELA',
        titleSuffix: 'runs it.',
        lede: 'Instagram Reels, ad videos, PDPs, and CRM all follow different rules. Brands need a system that understands their context, adapts by channel, and carries execution through to the output. Submit a brief and ATELA’s AI orchestration system plans the work, generates the assets, and adapts them across formats. ',
        ledeStrong: 'You focus on the business. ATELA runs the creative operation.',
        flow: [
          { step: '1', title: 'Upload the brand brief', body: 'Product, channel, tone, budget. 2 minutes.' },
          { step: '2', title: 'Agents design the channel plan', body: 'ATELA orchestration sets the format-specific strategy and production flow.' },
          { step: '3', title: 'Brand-safe generate, revise, repeat', body: 'Preserve text, logos, and product detail while iterating toward launch-ready output.' },
          { step: '4', title: 'Delivered within 48 hours', body: 'Average turnaround. Fast revision cycles.' },
          { step: '5', title: 'Feedback compounds into the next run', body: 'Approvals, performance, and channel signals sharpen the next campaign.' },
        ],
        motionPills: [
          'Ad Creative',
          'Instagram Reels',
          'Ad Video',
          'Editorial',
          'Motion Graphics',
          'Presentations',
          'Web & UI Design',
          'Out-of-Home',
          'Illustration',
          'Posters',
          'Cross-border Campaign Assets',
          '3D Design',
          'Copywriting',
          'AI Consulting',
          'Campaign Planning',
          'Conference Promo Video',
          'And more',
        ],
        agents: [
          { n: 'PDP Agent', h: 'P', spec: 'PDP Agent · Detail Page', color: '#FF3DA8' },
          { n: 'Ads Agent', h: 'A', spec: 'Ads Agent · Performance', color: '#C6FF3D' },
          { n: 'Reels Agent', h: 'R', spec: 'Reels Agent · Short-form', color: '#6B3DFF' },
          { n: 'CRM Agent', h: 'C', spec: 'CRM Agent · Lifecycle', color: '#E8D5B0' },
        ],
      },
      compare: {
        eyebrow: 'WHY ATELA',
        titlePrefix: 'A new option beyond',
        titleHighlight: 'in-house teams, agencies, or freelancers.',
        dims: ['Speed', 'Flexibility', 'Quality', 'Scalability', 'Efficiency', 'Expertise'],
        rows: [
          { n: 'ATELA', d: 'An agentic agency built for commercial content.', v: [1, 1, 1, 1, 1, 1], on: true },
          { n: 'In-house Team', d: 'In-house designers with limited range and bandwidth.', v: [0, 0, 1, 1, 0, 0] },
          { n: 'Creative Agency', d: 'Agency contracts with strong quality, but slow and expensive.', v: [0, 0, 1, 0, 0, 1] },
          { n: 'Freelancer', d: 'Freelancers with quality variance and limited scale.', v: [0, 1, 0, 0, 0, 0] },
          { n: 'AI Tools only', d: 'Higgsfield, MJ. No brand context, steep learning curve.', v: [1, 1, 0, 1, 1, 0] },
        ],
      },
      caseStudy: {
        badge: 'Beauty brand',
        eyebrow: 'CASE STUDY · Seasonal Beauty Launch',
        titlePrefix: 'Zero shoots.\nSeasonal collection',
        titleHighlight: 'launched.',
        body: 'This team used to spend three days on shooting and retouching for every new SKU. After connecting Cafe24 and adopting ATELA Growth, they generated 35 PDP images in an average of 14 minutes and improved performance creative twice a week through ATELA\'s agent loop. Weekly new-product uploads grew from 4 to 28.',
        quote: 'We run seasonal campaigns without a shoot team now. Brand tone is actually more consistent. ATELA now handles most of the production workflow, including ad creative.',
        cite: 'Brand Manager, Company A',
        stats: [
          { value: '82%', label: 'lower shoot spend' },
          { value: '7×', label: 'weekly uploads' },
          { value: '+38%', label: 'higher ad CTR' },
        ],
        cta: 'View all case studies →',
      },
      pricing: {
        eyebrow: 'PRICING',
        title: 'Start with the workflow that hurts most.',
        subtitle: 'No big commitment up front. Start with the creative workflow causing the most friction, then expand into ongoing operations once the value is clear.',
        plans: [
          {
            name: 'Sprint',
            badge: 'From',
            summary: 'A first project to fix the most urgent bottleneck in 1-2 weeks.',
            features: ['Start with one urgent workflow', 'Brand setup plus first delivery', 'Test without shoots or outside vendors', 'No long-term commitment'],
            price: { prefix: '$', amount: '690', suffix: '+', note: 'No long-term commitment' },
          },
          {
            name: 'Retainer',
            badge: 'Most Popular',
            summary: 'A monthly partnership that turns a proven workflow into steady weekly operations.',
            features: ['Run launches and campaigns every week', 'Extend PDP, ads, CRM, and short-form by channel', 'Preserve text, logos, and packaging detail as you iterate', 'Build speed and brand knowledge over time'],
            price: { prefix: '$', amount: '1,990', suffix: '/mo+', note: 'Scale once it works' },
            dark: true,
            featured: true,
          },
          {
            name: 'Enterprise',
            badge: 'Custom',
            summary: 'Custom ops for teams working across brands, markets, and channels.',
            features: ['Align operating rules across brands, regions, and channels', 'Connect catalogs, approval flows, and APIs', 'Shape collaboration across internal teams and partners', 'Design orchestration for larger-scale execution'],
            price: { amount: 'Custom', note: 'Proposal-based' },
          },
        ],
        marketTitle: 'What your brand gains',
        marketSubtitle: 'Not just a few deliverables. You reduce shoots and outside coordination while building a steadier way to launch and keep the brand consistent.',
        marketRows: [
          { label: 'Shoot dependence', value: 'Lower' },
          { label: 'Vendor coordination', value: 'Reduced' },
          { label: 'Launch speed', value: 'Faster' },
          { label: 'Channel expansion', value: 'Easier' },
          { label: 'Operating know-how', value: 'Compounds' },
        ],
        guarantee: 'Beyond one-off delivery, you build an operating rhythm your team can keep using',
        subnote: 'Start small, prove the value, then scale what works',
      },
      finalCta: {
        eyebrow: 'START TODAY',
        titleLines: ['Connect products today,', 'wake up to 50 images\n+ channel-ready outputs.'],
        body: 'Start free today.',
        primaryCta: 'Start free →',
        secondaryCta: 'Explore ATELIER ↗',
      },
      footer: {
        bottomLeft: '© 2026 ATELA Inc.',
        bottomRight: 'Terms · Privacy · Cookies',
        termsLabel: 'Terms',
        privacyLabel: 'Privacy',
      },
    },
  };

  const PAGE_COPY_BY_ROUTE = {
    home: 'page',
    atelier: 'atelierPage',
    privacy: 'privacyPage',
    terms: 'termsPage',
  };

  function getLocale() {
    if (window.atelaGetCurrentLocale) return window.atelaGetCurrentLocale();
    return 'ko';
  }

  function getCurrentPage() {
    if (window.atelaGetCurrentPage) return window.atelaGetCurrentPage();
    if (window.atelaGetRouteState) return window.atelaGetRouteState().pageId || 'home';
    return 'home';
  }

  function getCopySection(section) {
    const locale = getLocale();
    return COPY[locale]?.[section] || COPY.ko[section];
  }

  function syncPageMeta() {
    const page = getCopySection(PAGE_COPY_BY_ROUTE[getCurrentPage()] || 'page');
    if (!page) return;

    document.title = page.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }

    description.content = page.description;
  }

  window.ATELA_COPY = COPY;
  window.atelaGetCopySection = getCopySection;
  window.atelaSyncPageMeta = syncPageMeta;

  syncPageMeta();
})();
