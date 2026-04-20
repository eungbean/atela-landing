(function initAtelaCopy() {
  const COPY = {
    ko: {
      page: {
        title: 'ATELA · 브랜드를 위한 단 하나의 비주얼 솔루션',
        description: '한국어 텍스트와 브랜드 디테일을 보존하는 AI 크리에이티브 플랫폼. 스토어 연결, 자동 생성, 전문가 매칭을 한 곳에서.',
      },
      nav: {
        cta: '무료로 시작하기',
      },
      hero: {
        titleLead: '이커머스 · 브랜드를 위한',
        titlePrefix: '단 하나의',
        titleHighlight: '비주얼 솔루션',
        subtitleLines: [
          'Cafe24, Shopify, URL 상품 데이터를 ATELA에 연결하면',
          '하나의 소스가 스튜디오, 디테일, 라이프스타일, 영상까지 확장됩니다.',
        ],
        cta: '무료로 시작하기',
        packAriaPrefix: '결과 보기',
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
          { n: '98.2%', l: '한글 렌더링 정확도', s: '내부 10K 샘플' },
          { n: '4분', l: '신상 → 50장', s: 'Webhook 동기화' },
          { n: '199명', l: 'AI 전문가 풀', s: '6개 분야' },
          { n: '48h', l: '평균 납품', s: '프로젝트 turnaround' },
        ],
      },
      tech: {
        eyebrow: 'TECH · TEXT & DETAIL PRESERVATION',
        titleLines: ['한글과 디테일이 무너지면', '상품 페이지가 아닙니다.'],
        lede: '상품 이미지는 그럴듯해 보이는 것만으로는 충분하지 않습니다. 브랜드 카피, 로고, 자수, 제품 각인, 패키지의 작은 텍스트처럼 구매를 좌우하는 디테일까지 정확하게 살아 있어야 합니다. ',
        ledeStrong: 'ATELA는 브랜드 자산과 제품 디테일을 끝까지 선명하게 유지하는 결과',
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
      marketplace: {
        eyebrow: 'EXPERT MARKETPLACE',
        titlePrefix: 'AI 전문가가 필요한 순간,',
        titleHighlight: 'on-demand',
        titleSuffix: '로.',
        lede: 'AI 영상이라고 다 같지 않습니다. 인스타그램 릴스와 홍보 영상은 전혀 다른 분야입니다. 프로젝트 유형에 맞는 전문가 AI 크리에이터를 자동 매칭하고, 브랜드는 ATELA가 넘겨줄게요. ',
        ledeStrong: '필요한 만큼 전문가가 도와드립니다.',
        flow: [
          { step: '1', title: '캠페인 브리프 업로드', body: '상품 · 채널 · 톤 · 예산. 2분.' },
          { step: '2', title: 'AI 매칭 전문가 3명 추천', body: '전문 분야 · 과거 성과 · 가용성 기반.' },
          { step: '3', title: '프로젝트 단위 진행', body: '브랜드 에셋·가이드는 ATELA가 자동 전달.' },
          { step: '4', title: '48시간 내 납품', body: '평균 turnaround. 수정 무제한.' },
          { step: '5', title: '브랜드 전용 AI 모델 학습', body: '브랜드에 최적화된 AI 모델을 학습하여 다음 캠페인에 반영합니다.' },
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
        experts: [
          { n: '이수현', h: '수', spec: 'Performance · Beauty', color: '#FF3DA8' },
          { n: '박준호', h: '준', spec: 'Product Visual · F&B', color: '#C6FF3D' },
          { n: 'Jiwon K.', h: 'J', spec: 'Motion · Fashion', color: '#6B3DFF' },
          { n: '최민아', h: '민', spec: 'Reels · Gen Z Brand', color: '#E8D5B0' },
        ],
      },
      compare: {
        eyebrow: 'WHY ATELA',
        titlePrefix: '인하우스도, 에이전시도, 프리랜서도 아닌',
        titleHighlight: '새로운 옵션.',
        dims: ['Speed', 'Flexibility', 'Quality', 'Scalability', 'Efficiency', 'Strategy'],
        rows: [
          { n: 'ATELA', d: 'AI 도구 + 전문가 매칭을 한 플랫폼에서.', v: [1, 1, 1, 1, 1, 1], on: true },
          { n: 'In-house Team', d: '인하우스 디자이너. 스킬·역량 한정.', v: [0, 1, 1, 0, 0, 0] },
          { n: 'Creative Agency', d: '에이전시 계약. 느리고 비싸고 경직됨.', v: [0, 0, 1, 0, 0, 0] },
          { n: 'Freelancer', d: '프리랜서. 품질 편차 · 스케일 어려움.', v: [0, 1, 0, 0, 0, 0] },
          { n: 'AI Tools only', d: 'MJ · DALL·E. 브랜드 context 없음.', v: [1, 0, 0, 1, 1, 0] },
        ],
      },
      caseStudy: {
        badge: '뷰티 브랜드 · 무신사',
        eyebrow: 'CASE STUDY · 뷰티 브랜드 A',
        titlePrefix: '촬영 0회, 시즌 컬렉션',
        titleHighlight: '런칭.',
        body: '신상 1개당 3일의 촬영·리터치가 필요했던 팀. Cafe24 연동 + ATELA Growth 도입 후, 상세페이지 35장을 평균 14분에 생성하고, Performance Creative는 주 2회씩 AI 전문가와 iteration. 주간 신상 업로드 4종 → 28종으로 증가.',
        quote: '촬영팀 없이 시즌 캠페인을 돌려요. 브랜드 톤은 오히려 더 일관됐어요. 광고 크리에이티브만 외부 전문가랑 돌리고, 나머지는 우리가 플랫폼에서.',
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
        title: 'Starter에서 Business까지, Annual은 더 저렴하게.',
        billingAriaLabel: '결제 주기 선택',
        billingMonthly: '월간',
        billingAnnual: '연간',
        billingBadge: '30% OFF',
        toolsTiers: [
          {
            name: 'Starter',
            features: ['월 200 credits', '선택 모델만 사용', '이미지 4개 병렬 생성', '기본 워크플로우'],
            prices: {
              monthly: { prefix: '₩', amount: '29,000', suffix: '/월', note: '기본가' },
              annual: { prefix: '₩', amount: '29,000', suffix: '/월', note: '연간 동일가' },
            },
          },
          {
            name: 'Creator',
            features: ['월 1,000 credits', '모든 모델 사용', '이미지 8개 병렬 생성', '선호 모델 365일 무제한'],
            prices: {
              monthly: { prefix: '₩', amount: '59,000', suffix: '/월', note: '월 단위 결제' },
              annual: { prefix: '₩', amount: '39,000', suffix: '/월', originalAmount: '59,000', note: '연간 결제 기준' },
            },
          },
          {
            name: 'Growth',
            badge: 'Most Popular',
            features: ['월 3,000 credits', '모든 모델 + 우선 처리', 'API · 커스텀 프리셋', '비디오 모델 1개 무제한'],
            prices: {
              monthly: { prefix: '₩', amount: '129,000', suffix: '/월', note: '월 단위 결제' },
              annual: { prefix: '₩', amount: '99,000', suffix: '/월', originalAmount: '129,000', note: '연간 결제 기준' },
            },
            dark: true,
            featured: true,
          },
          {
            name: 'Business',
            badge: 'Best Value',
            features: ['좌석당 월 1,500 credits', '2-15명 공용 워크스페이스', '공유 크레딧 풀', '우선 지원 · 사용량 분석'],
            prices: {
              monthly: { prefix: '₩', amount: '89,000', suffix: '/좌석/월', note: '2석부터' },
              annual: { prefix: '₩', amount: '59,000', suffix: '/좌석/월', originalAmount: '89,000', note: '2석부터 · 연간 결제' },
            },
          },
        ],
        marketTitle: 'AI 전문가가 필요하신가요?',
        marketRows: [
          { label: 'Performance Creative', value: '48만원~' },
          { label: 'PDP Refresh (상세 1건)', value: '36만원~' },
          { label: 'Instagram Reels 15s', value: '54만원~' },
          { label: 'Lookbook Sprint (20컷)', value: '120만원~' },
          { label: 'Motion · Video', value: '72만원~' },
        ],
        guarantee: '고정 견적 · 빠른 납기',
        subnote: '리테이너 없음 · 락인 없음',
      },
      finalCta: {
        eyebrow: 'START TODAY',
        titleLines: ['오늘 상품 연결,', '내일 아침 50장\n+ 전문가 매칭.'],
        body: '지금 무료로 시작하세요.',
        primaryCta: '무료로 시작하기 →',
        secondaryCta: '세일즈에 문의 ↗',
      },
      footer: {
        description: '한국어가 깨지지 않는 AI 크리에이티브 플랫폼. Yonsei Univ. CV Lab 출신 팀. Seoul, South Korea.',
        platformTitle: '플랫폼',
        platformLinks: {
          tech: 'Korean AI',
          marketplace: '전문가',
        },
        companyTitle: '회사',
        companyLinks: ['소개', '팀 · 연구', '블로그', '채용'],
        supportTitle: '지원',
        supportLinks: ['문서 · API', '커뮤니티', '문의', '서비스 상태'],
        bottomLeft: '© 2026 ATELA Inc. · 사업자 000-00-00000',
        bottomRight: '이용약관 · 개인정보처리방침 · 쿠키',
      },
    },
    en: {
      page: {
        title: 'ATELA · AI Creative Platform That Preserves Text and Brand Detail',
        description: 'AI creative platform for ecommerce teams. Preserve text and brand detail, connect your catalog, automate outputs, and match with experts on demand.',
      },
      nav: {
        cta: 'Start trial',
      },
      hero: {
        titleLead: 'For ecommerce brands',
        titlePrefix: 'A single',
        titleHighlight: 'visual solution',
        subtitleLines: [
          'Connect Cafe24, Shopify, or product URLs to ATELA,',
          'and one source expands into studio, detail, lifestyle, and video outputs.',
        ],
        cta: 'Start trial',
        packAriaPrefix: 'View results for',
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
          { n: '98.2%', l: 'Hangul render accuracy', s: 'Internal 10K sample' },
          { n: '4 min', l: 'New launch → 50 images', s: 'Webhook sync' },
          { n: '199', l: 'AI expert network', s: '6 specialties' },
          { n: '48h', l: 'Average delivery', s: 'Project turnaround' },
        ],
      },
      tech: {
        eyebrow: 'TECH · TEXT & DETAIL PRESERVATION',
        titleLines: ['If text and detail break,', "it's not a product page."],
        lede: 'A product image cannot just look good. Brand copy, logos, embroidery, engravings, and packaging text all influence purchase decisions, and they need to stay intact. ',
        ledeStrong: 'ATELA focuses on outputs that preserve brand assets and product detail all the way through.',
        comparisons: [
          {
            id: 'nb2',
            brandLines: ['Nanobanana Pro'],
            image: '/assets/comparisons/1/nb2.avif',
            mainPosition: '50% 52%',
            detailSide: 'left',
            notePrefix: 'Nanobanana Pro.',
            note: 'Even when the scene looks convincing, small details that drive conversion, like Hangul banners, brand logos, and product engravings, tend to drift.',
            details: [
              { position: '78% 58%', scale: 3.35, alt: 'Nanobanana Pro jacket logo detail' },
              { position: '31% 47%', scale: 3.05, alt: 'Nanobanana Pro tumbler detail' },
            ],
          },
          {
            id: 'atela',
            brandLines: ['ATELA'],
            image: '/assets/comparisons/1/atela.avif',
            mainPosition: '50% 48%',
            detailSide: 'right',
            notePrefix: 'ATELA.',
            note: 'ATELA is built to keep the small details that create brand trust, from Hangul banners and logos to embroidery and engravings, crisp and intact.',
            details: [
              { position: '39% 84%', scale: 3.2, alt: 'ATELA jacket logo detail' },
              { position: '91% 60%', scale: 3.1, alt: 'ATELA tumbler engraving detail' },
            ],
          },
        ],
      },
      integrations: {
        eyebrow: 'WORKFLOW FOR ECOMMERCE BRANDS',
        titlePrefix: 'Every catalog visual',
        titleHighlight: 'you need',
        titleSuffix: ', in one workflow.',
        ledeLines: [
          'Enrich and elevate the visual quality of your entire catalog.',
          'ATELA brings packshots, staging, variants, and infographics into one streamlined ecommerce workflow.',
        ],
        selectorAriaLabel: 'Workflow challenge selector',
        metricAriaLabel: 'Workflow metrics',
        challenges: [
          {
            id: 'packshot',
            k: '01',
            label: 'Consistent packshot',
            title: 'Aligned hero packshots by SKU',
            image: '/assets/workflow/consistent-packshot.jpg',
            alt: 'Consistent packshot sample',
          },
          {
            id: 'staging',
            k: '02',
            label: 'Product staging',
            title: 'Contextual staged scenes',
            image: '/assets/workflow/product-staging.jpg',
            alt: 'Product staging sample',
          },
          {
            id: 'lighting',
            k: '03',
            label: 'Lighting control',
            title: 'Lighting and mood alignment',
            image: '/assets/workflow/lighting-control.jpg',
            alt: 'Lighting control sample',
          },
          {
            id: 'closeups',
            k: '04',
            label: 'Close-ups',
            title: 'Detail-first product crops',
            image: '/assets/workflow/close-ups.jpg',
            alt: 'Close-up sample',
          },
          {
            id: 'infographics',
            k: '05',
            label: 'Product infographics',
            title: 'Informative product visuals',
            image: '/assets/workflow/product-infographics.jpg',
            alt: 'Product infographic sample',
          },
          {
            id: 'dimensions',
            k: '06',
            label: 'Dimension overlays',
            title: 'Size and proportion overlays',
            image: '/assets/workflow/dimension-overlays.jpg',
            alt: 'Dimension overlay sample',
          },
          {
            id: 'swap',
            k: '07',
            label: 'Product swap',
            title: 'Scene-stable SKU swaps',
            image: '/assets/workflow/product-swap.jpg',
            alt: 'Product swap sample',
          },
          {
            id: 'motion',
            k: '08',
            label: 'Image to video',
            title: 'Still-to-motion expansion',
            image: '/assets/workflow/image-to-video.jpg',
            alt: 'Image to video sample',
          },
          {
            id: 'spin',
            k: '09',
            label: '360 spins',
            title: 'Rotational product view',
            image: '/assets/workflow/spins-360.jpg',
            alt: '360 spin sample',
          },
        ],
        metrics: [
          {
            value: '+20%',
            body: 'Average conversion lift with richer visuals',
          },
          {
            value: '10x',
            body: 'Faster catalog refreshes',
          },
          {
            value: '90%',
            body: 'Shorter seasonal campaign lead times',
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
      marketplace: {
        eyebrow: 'EXPERT MARKETPLACE',
        titlePrefix: 'When you need AI experts,',
        titleHighlight: 'on-demand',
        titleSuffix: '.',
        lede: 'Product visuals and Instagram ads are different crafts. ATELA matches the right AI creator to each project and passes brand context through the platform. ',
        ledeStrong: 'No six-month lock-ins.',
        flow: [
          { step: '1', title: 'Upload a brief', body: 'Product, channel, tone, budget. 2 minutes.' },
          { step: '2', title: 'Get 3 AI matches', body: 'Ranked by specialty, track record, and availability.' },
          { step: '3', title: 'Run it project-by-project', body: 'ATELA passes along the brand assets and guidelines automatically.' },
          { step: '4', title: 'Delivery within 48 hours', body: 'Average turnaround, with unlimited revisions.' },
          { step: '5', title: 'Train a brand-specific AI model', body: 'Learn a model tuned to the brand and feed it into the next campaign.' },
        ],
        motionPills: [
          'Ad Creative',
          'Social Assets',
          'Video Production',
          'Photography',
          'Motion Graphics',
          'Presentations',
          'Web & UI Design',
          'OOH & Fake OOH',
          'Illustration',
          'Email Design',
          'Brand Strategy',
          '3D Design',
          'Copywriting',
          'AI Consulting',
          'Campaign Development',
          'AI-Enhanced Creative',
          '...and more',
        ],
        experts: [
          { n: 'Suhyun Lee', h: 'S', spec: 'Performance · Beauty', color: '#FF3DA8' },
          { n: 'Junho Park', h: 'J', spec: 'Product Visual · F&B', color: '#C6FF3D' },
          { n: 'Jiwon K.', h: 'J', spec: 'Motion · Fashion', color: '#6B3DFF' },
          { n: 'Mina Choi', h: 'M', spec: 'Reels · Gen Z Brand', color: '#E8D5B0' },
        ],
      },
      compare: {
        eyebrow: 'WHY ATELA',
        titlePrefix: 'A new option beyond',
        titleHighlight: 'in-house, agencies, and freelancers.',
        dims: ['Speed', 'Flexibility', 'Quality', 'Scalability', 'Efficiency', 'Strategy'],
        rows: [
          { n: 'ATELA', d: 'AI tools and expert matching on one platform.', v: [1, 1, 1, 1, 1, 1], on: true },
          { n: 'In-house Team', d: 'In-house designers with limited bandwidth and specialties.', v: [0, 1, 1, 0, 0, 0] },
          { n: 'Creative Agency', d: 'Agency contracts that are slow, expensive, and rigid.', v: [0, 0, 1, 0, 0, 0] },
          { n: 'Freelancer', d: 'Freelancers with quality variance and limited scale.', v: [0, 1, 0, 0, 0, 0] },
          { n: 'AI Tools only', d: 'MJ and DALL·E without brand context.', v: [1, 0, 0, 1, 1, 0] },
        ],
      },
      caseStudy: {
        badge: 'Beauty brand · MUSINSA',
        eyebrow: 'CASE STUDY · Beauty Brand A',
        titlePrefix: 'Zero shoots, season collection',
        titleHighlight: 'launched.',
        body: 'This team used to spend three days on shooting and retouching for every new product. After connecting Cafe24 and adopting ATELA Growth, they generated 35 PDP visuals in an average of 14 minutes and iterated on performance creative with AI specialists twice a week. Weekly new-product uploads jumped from 4 to 28.',
        quote: 'We run seasonal campaigns without a shoot crew. Brand tone is actually more consistent now. We only bring in outside specialists for ad creative, and we do the rest in-platform.',
        cite: 'Brand manager, Company A',
        stats: [
          { value: '82%', label: 'lower shoot cost' },
          { value: '7×', label: 'weekly uploads' },
          { value: '+38%', label: 'ad CTR' },
        ],
        cta: 'Read more case studies →',
      },
      pricing: {
        eyebrow: 'PRICING',
        title: 'From Starter to Business, with lower Annual pricing.',
        billingAriaLabel: 'Select billing period',
        billingMonthly: 'Monthly',
        billingAnnual: 'Annual',
        billingBadge: '30% OFF',
        toolsTiers: [
          {
            name: 'Starter',
            features: ['200 credits / month', 'Selected models only', '4 parallel image generations', 'Core workflow'],
            prices: {
              monthly: { prefix: '$', amount: '19', suffix: '/mo', note: 'Base price' },
              annual: { prefix: '$', amount: '19', suffix: '/mo', note: 'Same on Annual' },
            },
          },
          {
            name: 'Creator',
            features: ['1,000 credits / month', 'Access to all models', '8 parallel image generations', '365-day favorite unlimited'],
            prices: {
              monthly: { prefix: '$', amount: '59', suffix: '/mo', note: 'Billed monthly' },
              annual: { prefix: '$', amount: '39', suffix: '/mo', originalAmount: '59', note: 'Billed annually' },
            },
          },
          {
            name: 'Growth',
            badge: 'Most Popular',
            features: ['3,000 credits / month', 'All models + priority queue', 'API + custom presets', 'One unlimited video model'],
            prices: {
              monthly: { prefix: '$', amount: '129', suffix: '/mo', note: 'Billed monthly' },
              annual: { prefix: '$', amount: '99', suffix: '/mo', originalAmount: '129', note: 'Billed annually' },
            },
            dark: true,
            featured: true,
          },
          {
            name: 'Business',
            badge: 'Best Value',
            features: ['1,500 credits per seat / month', '2-15 members shared workspace', 'Shared credit pool', 'Priority support + analytics'],
            prices: {
              monthly: { prefix: '$', amount: '89', suffix: '/seat/mo', note: '2-seat minimum' },
              annual: { prefix: '$', amount: '59', suffix: '/seat/mo', originalAmount: '89', note: '2-seat minimum, billed annually' },
            },
          },
        ],
        marketTitle: 'Need an AI specialist?',
        marketRows: [
          { label: 'Performance Creative', value: '$349+' },
          { label: 'PDP Refresh (1 PDP)', value: '$259+' },
          { label: 'Instagram Reels 15s', value: '$399+' },
          { label: 'Lookbook Sprint (20 looks)', value: '$899+' },
          { label: 'Motion · Video', value: '$529+' },
        ],
        guarantee: 'Fixed scope · fast turnaround',
        subnote: 'No retainer · no lock-in',
      },
      finalCta: {
        eyebrow: 'START TODAY',
        titleLines: ['Connect products today,', 'wake up to 50 images + expert matches tomorrow.'],
        body: 'Start with Starter, or try Growth for 14 days. No credit card required.',
        primaryCta: 'Start trial →',
        secondaryCta: 'Talk to sales ↗',
      },
      footer: {
        description: 'AI creative platform built to preserve text, logos, and product detail. Team from Yonsei Univ. CV Lab. Seoul, South Korea.',
        platformTitle: 'Platform',
        platformLinks: {
          tech: 'Text Preservation',
          marketplace: 'Experts',
        },
        companyTitle: 'Company',
        companyLinks: ['About', 'Team · Research', 'Blog', 'Careers'],
        supportTitle: 'Support',
        supportLinks: ['Docs · API', 'Community', 'Contact', 'Status'],
        bottomLeft: '© 2026 ATELA Inc. · Business registration 000-00-00000',
        bottomRight: 'Terms · Privacy · Cookies',
      },
    },
  };

  function getLocale() {
    if (window.atelaGetCurrentLocale) return window.atelaGetCurrentLocale();
    return 'ko';
  }

  function getCopySection(section) {
    const locale = getLocale();
    return COPY[locale]?.[section] || COPY.ko[section];
  }

  function syncPageMeta() {
    const page = getCopySection('page');
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
