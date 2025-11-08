(function () {
  if (typeof window.translations === 'undefined') {
    window.translations = {};
  }

  // All keys that appear in data-translate on this page
  const cargoTranslations = {
    // nav
    'nav-cargo': { fa: 'کارگو و حمل‌ونقل', en: 'Cargo & Transport', ps: 'کارګو او ترانسپورت' },

    // Hero
    'cargo-hero-title': {
      fa: 'کارگو و حمل بار از چین به افغانستان',
      en: 'Cargo & Freight from China to Afghanistan',
      ps: 'له چین څخه افغانستان ته کارګو او د مال لېږد'
    },
    'cargo-hero-subtitle': {
      fa: 'مسیرهای حمل و نقل اموال از طریق ریل، دریا و جاده با مدیریت یکپارچه صنعتچی',
      en: 'Cargo flows by rail, sea and road with integrated management by Sanaatchi',
      ps: 'د رېل، سمندر او سړک له لارې د مال لېږد د صنعتچي په یو موټي مدیریت سره'
    },
    'cargo-hero-quote': {
      fa: '«از برنامه‌ریزی حمل تا تحویل درب کارخانه، تیم صنعتچی تمامی مراحل کارگو چین – افغانستان را مدیریت می‌کند.»',
      en: '“From load planning to factory delivery, the Sanaatchi team manages every step of the China–Afghanistan cargo journey.”',
      ps: '“له بار بندۍ څخه تر فابریکې سپارلو پورې، د صنعتچي ټیم د چین او افغانستان ترمنځ د کارګو ټول پړاوونه اداره کوي.”'
    },
    'cargo-hero-cta': {
      fa: 'درخواست نرخ حمل',
      en: 'Request freight quote',
      ps: 'د لېږد بیه وغواړئ'
    },
    'cargo-hero-secondary': {
      fa: 'مشاهده مسیرها',
      en: 'View routes',
      ps: 'مسیرونه وګورئ'
    },

    // hero search area (same wording as index page)
    'search-title': {
      fa: 'دستگاه یا کالای مورد نظرتان را بین دسته بندی صنعتی',
      en: 'Search across industrial categories',
      ps: 'خپل مطلوب صنعتي توکي په کټګوریو کې ولټوئ'
    },
    'search-subtitle': {
      fa: 'جستجو کنید و بهترین ها را بیابید.',
      en: 'Search and find the best options.',
      ps: 'پلټنه وکړئ او تر ټولو ښه انتخابونه ومومئ.'
    },
    'search-btn': {
      fa: 'جستجو',
      en: 'Search',
      ps: 'لټون'
    },
    'search-placeholder': {
      fa: 'دنبال چه محصولی هستید؟',
      en: 'What product are you looking for?',
      ps: 'کوم محصول پسې ګرځئ؟'
    },
    'popular-categories': {
      fa: 'دسته‌بندی‌های محبوب:',
      en: 'Popular categories:',
      ps: 'مشهورې کټګورۍ:'
    },
    'cargo-tag-logistics': {
      fa: 'مسیرهای کارگو',
      en: 'Cargo routes',
      ps: 'د کارګو مسیرونه'
    },
    'cargo-tag-rail': {
      fa: 'حمل ریلی',
      en: 'Rail freight',
      ps: 'رېلي لېږد'
    },
    'cargo-tag-sea': {
      fa: 'حمل دریایی',
      en: 'Sea freight',
      ps: 'سمندري لېږد'
    },
    'cargo-tag-road': {
      fa: 'حمل جاده‌ای',
      en: 'Road freight',
      ps: 'سړکيز لېږد'
    },

    // Overview
    'cargo-overview-title': {
      fa: 'مدیریت یکپارچه کارگو چین – افغانستان',
      en: 'Integrated China–Afghanistan cargo management',
      ps: 'د چین او افغانستان ترمنځ یو موټی کارګو مدیریت'
    },
    'cargo-overview-subtitle': {
      fa: 'از انتخاب مسیر تا ترخیص و تحویل، صنعتچی تمام زنجیره لجستیک شما را پوشش می‌دهد.',
      en: 'From route selection to customs clearance and delivery, Sanaatchi covers your full logistics chain.',
      ps: 'له مسیر ټاکنې، له ګمرک څخه تر وروستي سپارلو پورې، صنعتچي ټول لوجستیک پر غاړه اخلي.'
    },
    'cargo-overview-point-1-title': {
      fa: 'سه مسیر اصلی حمل',
      en: 'Three core transport corridors',
      ps: 'درې اساسي د لېږد دهلېزونه'
    },
    'cargo-overview-point-1-desc': {
      fa: 'حمل ریلی چین – حیرتان، حمل دریایی از بنادر چین به بندر عباس و چابهار، و حمل جاده‌ای سراسری در افغانستان.',
      en: 'Rail freight to Hairatan, sea freight to Bandar Abbas and Chabahar, plus nationwide trucking inside Afghanistan.',
      ps: 'رېل تر حیرتان، سمندري کارګو تر بندر عباس او چابهار، او د افغانستان دننه ټرکینګ.'
    },
    'cargo-overview-point-2-title': {
      fa: 'پوشش تجهیزات و مواد اولیه',
      en: 'Machinery & raw material coverage',
      ps: 'ماشین آلات او خام مواد'
    },
    'cargo-overview-point-2-desc': {
      fa: 'مدیریت کارگو برای کانتینر کامل، ماشین‌آلات نو و دست دوم، خطوط تولید و مواد اولیه صنعتی.',
      en: 'Management for full containers, new/used machinery, production lines and industrial raw materials.',
      ps: 'د بشپړ کانتینرونو، نوو او دوهم لاس ماشینونو، تولیدي لینونو او صنعتي خامو موادو مدیریت.'
    },
    'cargo-overview-point-3-title': {
      fa: 'پشتیبانی تیم متخصص',
      en: 'Specialist operations support',
      ps: 'د متخصص ټیم ملاتړ'
    },
    'cargo-overview-point-3-desc': {
      fa: 'هماهنگی با تامین‌کنندگان چینی، بیمه، تشریفات گمرکی و تحویل در مقصد با تیم عملیات صنعتچی.',
      en: 'Coordination with Chinese suppliers, insurance, customs procedures and destination delivery by our ops team.',
      ps: 'له چینایي عرضه کوونکو سره همغږي، بیمه، ګمرکي تشریفات او په هدف ځای کې سپارنه د صنعتچي له خوا ترسره کېږي.'
    },
    'cargo-overview-point-4-title': {
      fa: 'برنامه‌ریزی زمان‌بندی دقیق',
      en: 'Precise scheduling & tracking',
      ps: 'دقیق مهالویش او څارنه'
    },
    'cargo-overview-point-4-desc': {
      fa: 'ارائه جدول زمان‌بندی روشن برای هر مسیر و پیگیری مرحله‌به‌مرحله تا تحویل نهایی بار.',
      en: 'Clear schedules for each route with milestone tracking through to final delivery.',
      ps: 'د هر مسیر لپاره روښانه مهالویش او د پړاوونو څارنه تر وروستي سپارلو پورې.'
    },

    // Routes heading
    'cargo-routes-title': {
      fa: 'مسیرهای حمل و نقل چین – افغانستان',
      en: 'China–Afghanistan transport routes',
      ps: 'د چین او افغانستان د لېږد مسیرونه'
    },
    'cargo-routes-subtitle': {
      fa: 'در اینجا می‌توانید مسیرهای اصلی حمل کارگو، کانتینر، ماشین‌آلات و مواد اولیه از چین به افغانستان را مشاهده کنید؛ شامل حمل ریلی، دریایی و حمل جاده‌ای با کامیون از حیرتان به شهرهای افغانستان.',
      en: 'Explore the main routes moving containers, machinery and raw materials from China to Afghanistan via rail, sea and road connections from Hairatan.',
      ps: 'دلته اصلي مسیرونه وینئ چې له چین څخه افغانستان ته کانتینرونه، ماشینونه او خام مواد د رېل، سمندر او سړک له لارې رسېږي.'
    },

    // CTA
    'cargo-cta-title': {
      fa: 'برای دریافت نرخ و برنامه حمل، با ما در تماس باشید',
      en: 'Contact us for freight rates & schedules',
      ps: 'د لېږد د نرخ او مهالویش لپاره اړیکه ونیسئ'
    },
    'cargo-cta-subtitle': {
      fa: 'تیم صنعتچی با ارزیابی نوع کالا، وزن، مسیر و زمان‌بندی، بهترین گزینه حمل را برای پروژه شما پیشنهاد می‌دهد.',
      en: 'Our team evaluates cargo type, weight, route and timing to recommend the best logistics option for your project.',
      ps: 'زموږ ټیم ستاسو د مال ډول، وزن، مسیر او وخت ارزونه کوي او تر ټولو مناسب لوجستیکي حل درته وړاندیزوي.'
    },
    'cargo-cta-contact': {
      fa: 'درخواست مشاوره حمل',
      en: 'Request logistics consultation',
      ps: 'د لېږد مشوره وغواړئ'
    },
    'cargo-cta-sales': {
      fa: 'هماهنگی با تیم فروش',
      en: 'Coordinate with sales team',
      ps: 'له د پلور له ټیم سره همغږي وکړئ'
    },

    // FAQ headings
    'cargo-faq-title': {
      fa: 'سوالات متداول کارگو چین – افغانستان',
      en: 'China–Afghanistan cargo FAQs',
      ps: 'د چین او افغانستان د کارګو پرله‌پسې پوښتنې'
    },
    'cargo-faq-subtitle': {
      fa: 'پرسش‌های پرتکرار مشتریان درباره حمل و نقل کانتینر، ماشین‌آلات و مواد اولیه از چین به افغانستان.',
      en: 'Common questions about shipping containers, machinery and raw materials from China to Afghanistan.',
      ps: 'هغه پوښتنې چې ډېر کله د چین څخه افغانستان ته د کانتینر، ماشین او خامو موادو د لېږد په اړه کېږي.'
    }
  };

  Object.assign(window.translations, cargoTranslations);

  // ---- Route cards (including Customs + Insurance) ----
  const cargoRoutes = [
    {
      id: 'rail-china-hairatan',
      badge: { fa: 'فعال', en: 'Active', ps: 'فعال' },
      title: {
        fa: 'مسیر ریلی چین – حیرتان',
        en: 'China → Hairatan rail corridor',
        ps: 'د چین – حیرتان رېلي مسیر'
      },
      description: {
        fa: 'حمل کانتینر و بارهای سنگین با قطار از شهرهای مختلف چین تا بندر حیرتان؛ مناسب برای ماشین‌آلات، خطوط تولید و مواد اولیه صنعتی.',
        en: 'Rail transport for containers and heavy cargo from Chinese hubs to Hairatan—ideal for machinery, production lines and industrial raw materials.',
        ps: 'له بېلابېلو چینایي ښارونو څخه تر حیرتان پورې د کانتینرونو او درنو مالونو رېلي لېږد؛ د ماشین آلاتو، تولیدي لینونو او خامو موادو لپاره مناسب.'
      },
      pdfUrl: 'pdf/route-rail-china-hairatan-rate.pdf'
    },
    {
      id: 'road-china-hairatan',
      badge: { fa: 'فعال', en: 'Active', ps: 'فعال' },
      title: {
        fa: 'حمل‌ونقل جاده‌ای از چین تا حیرتان',
        en: 'Road transport China → Hairatan',
        ps: 'له چین څخه تر حیرتان پورې سړکيز ترانسپورت'
      },
      description: {
        fa: 'سریع‌ترین و مطمئن‌ترین راه جاده‌ای از چین به مرز حیرتان توسط تیلری؛ مناسب برای محموله‌هایی که زمان تحویل در آن‌ها حیاتی است.',
        en: 'The fastest and most reliable road option from China to the Hairatan border by trailer trucks—ideal when delivery time matters.',
        ps: 'تر ټولو چټک او باوري سړکـي لاره د ټیلري ټرکونو له لارې تر حیرتان؛ د هغو محمولو لپاره چې وخت پکې ډېر مهم وي.'
      },
      pdfUrl: 'pdf/route-road-china-hairatan-rate.pdf'
    },
    {
      id: 'road-hairatan-afghanistan',
      badge: { fa: 'فعال', en: 'Active', ps: 'فعال' },
      title: {
        fa: 'حمل جاده‌ای با کامیون از حیرتان به شهرهای افغانستان',
        en: 'Hairatan → Afghan cities trucking service',
        ps: 'له حیرتان څخه د افغانستان ښارونو ته د لاریو ترانسپورت'
      },
      description: {
        fa: 'پس از رسیدن کانتینر یا بار شما به حیرتان، تیم صنعتچی حمل جاده‌ای با لاری/کامیون به شهرهایی مانند کابل، مزار شریف، بلخ، سمنگان، هرات، قندهار و سایر نقاط افغانستان را مدیریت می‌کند.',
        en: 'Once cargo arrives in Hairatan, Sanaatchi coordinates trucking to Kabul, Mazar-e Sharif, Balkh, Samangan, Herat, Kandahar and other Afghan destinations.',
        ps: 'کله چې ستاسې کانتینر یا بار حیرتان ته ورسېږي، د صنعتچي ټیم یې کابل، مزار شریف، بلخ، سمنګان، هرات، کندهار او نورو ښارونو ته د لاریو له لارې رسوي.'
      },
      pdfUrl: 'pdf/route-road-hairatan-afghanistan-rate.pdf'
    },
    {
      id: 'sea-bandar-abbas',
      badge: { fa: 'فعال', en: 'Active', ps: 'فعال' },
      title: {
        fa: 'مسیر دریایی چین – بندر عباس – افغانستان',
        en: 'China – Bandar Abbas – Afghanistan sea route',
        ps: 'د چین – بندر عباس – افغانستان سمندري مسیر'
      },
      description: {
        fa: 'حمل دریایی کانتینر از بنادر چین تا بندر عباس و سپس ترانزیت زمینی به افغانستان؛ مناسب برای کانتینرهای کامل، مواد اولیه و تجهیزات پروژه‌ای.',
        en: 'Sea freight from Chinese ports to Bandar Abbas followed by overland transit into Afghanistan—ideal for full containers, raw materials and project equipment.',
        ps: 'له چینایي بندرونو څخه تر بندر عباس پورې سمندري لېږد او وروسته افغانستان ته ځمکنی ترانزیت؛ د بشپړو کانتینرونو، خامو موادو او پروژوي تجهیزاتو لپاره مناسب.'
      },
      pdfUrl: 'pdf/route-sea-china-bandar-abbas-rate.pdf'
    },
    {
      id: 'sea-chabahar',
      badge: { fa: 'فعال', en: 'Active', ps: 'فعال' },
      title: {
        fa: 'مسیر دریایی چین – چابهار – افغانستان',
        en: 'China – Chabahar – Afghanistan sea route',
        ps: 'د چین – چابهار – افغانستان سمندري مسیر'
      },
      description: {
        fa: 'مسیر اقتصادی برای بارهای حجیم و صنعتی؛ حمل کانتینر از چین تا چابهار و سپس حمل جاده‌ای به شهرهای غرب و جنوب افغانستان مانند هرات و قندهار.',
        en: 'Cost-efficient route for bulky and industrial cargo—ship containers to Chabahar then truck to western and southern Afghan cities such as Herat and Kandahar.',
        ps: 'د حجیم او صنعتي مالونو لپاره اقتصادي مسیر؛ کانتینر له چین څخه تر چابهار پورې سمندري او له هغه ځایه هرات، کندهار او نورو ښارونو ته د لاریو له لارې لیږدول کېږي.'
      },
      pdfUrl: 'pdf/route-sea-china-chabahar-rate.pdf'
    },
    {
      id: 'customs-services',
      badge: { fa: 'فعال', en: 'Active', ps: 'فعال' },
      title: {
        fa: 'خدمات گمرکی و ترخیص کالا',
        en: 'Customs & clearance services',
        ps: 'د ګمرک او د مال ترخیص خدمات'
      },
      description: {
        fa: 'ارائه مشاوره و انجام تشریفات گمرکی در مرز، ترخیص کانتینر و بارهای صنعتی از حیرتان و سایر مبادی ورودی برای کاهش زمان خواب کالا.',
        en: 'Consulting and handling customs procedures at border points, clearing containers and industrial cargo from Hairatan and other entry points to minimize dwell time.',
        ps: 'په سرحدونو کې د ګمرکي مشورې او تشریفاتو ترسره کول، له حیرتان او نورو بندرونو څخه د کانتینر او صنعتي مالونو ترخیص ترڅو د مال ولاړېدل کم شي.'
      },
      pdfUrl: 'pdf/customs-services-rate.pdf'
    },
    {
      id: 'insurance-coverage',
      badge: { fa: 'فعال', en: 'Active', ps: 'فعال' },
      title: {
        fa: 'بیمه حمل و نقل بین‌المللی',
        en: 'International transport insurance',
        ps: 'د نړیوال ترانسپورت بیمه'
      },
      description: {
        fa: 'پوشش بیمه‌ای برای کارگو از لحظه خروج از چین تا تحویل در افغانستان؛ کاهش ریسک‌های مربوط به آسیب، سرقت یا حوادث احتمالی در مسیر حمل.',
        en: 'Insurance coverage from departure in China through to delivery in Afghanistan, reducing risks of damage, theft or incidents during transit.',
        ps: 'له چین څخه د حرکت له شېبې تر افغانستان کې د سپارلو پورې د کارګو لپاره بیمه؛ د زیان، غلا او نورو پېښو خطرونه راکموي.'
      },
      pdfUrl: 'pdf/insurance-coverage-rate.pdf'
    }
  ];

  // Buttons text
  const cargoButtonLabels = {
    view: {
      fa: 'مشاهده PDF نرخنامه',
      en: 'View rate PDF',
      ps: 'د نرخنامې PDF کتنه'
    },
    download: {
      fa: 'دانلود PDF نرخنامه',
      en: 'Download rate PDF',
      ps: 'د نرخنامې PDF ښکته کول'
    }
  };

  // Meta description per language
  const cargoMetaDescriptions = {
    fa: 'خدمات کامل کارگو و حمل بار از چین به افغانستان؛ شامل حمل ریلی تا حیرتان، حمل جاده‌ای با کامیون و حمل دریایی از طریق بندر عباس و چابهار. مدیریت یکپارچه صنعتچی برای کانتینر، ماشین‌آلات و مواد اولیه.',
    en: 'Comprehensive cargo and freight solutions from China to Afghanistan, covering rail to Hairatan, sea freight via Bandar Abbas and Chabahar, and nationwide trucking for machinery, production lines and raw materials.',
    ps: 'له چین څخه افغانستان ته د کارګو او بار لېږد بشپړ خدمتونه؛ پکې د حیرتان تر رېل، د بندر عباس او چابهار له لارې سمندري لېږد او د ټول افغانستان لپاره سړکيز ترانسپورت شامل دي.'
  };

  // FAQ items (multi-language)
  const cargoFaqs = [
    {
      id: 'faq-choose-best-route',
      question: {
        fa: 'چطور بهترین مسیر کارگو چین به افغانستان را انتخاب کنیم؟',
        en: 'How do we choose the best China–Afghanistan cargo route?',
        ps: 'څنګه د چین څخه افغانستان ته د کارګو لپاره تر ټولو ښه مسیر وټاکو؟'
      },
      answer: {
        fa: 'نوع بار، وزن و حجم، شهر مبدأ در چین، مقصد در افغانستان و موعد تحویل از مهم‌ترین عوامل هستند. پس از دریافت مشخصات بار، ما گزینه‌های ریلی، دریایی و جاده‌ای را از نظر زمان و هزینه مقایسه کرده و بهترین مسیر را پیشنهاد می‌دهیم.',
        en: 'Cargo type, weight/volume, origin city in China, destination in Afghanistan and delivery deadline all matter. After we receive your shipment details, we compare rail, sea and road options and recommend the best route in terms of time and cost.',
        ps: 'د مال ډول، وزن/حجم، په چین کې مبدأ ښار، په افغانستان کې هدف او د سپارلو وخت مهم فکتورونه دي. کله چې معلومات ترلاسه کړو، رېل، سمندر او سړک پرتله کوو او له نظره د وخت او لګښت غوره مسیر وړاندیزوو.'
      }
    },
    {
      id: 'faq-import-machinery',
      question: {
        fa: 'چگونه ماشین‌آلات را از چین به افغانستان وارد کنیم؟',
        en: 'How can we import machinery from China to Afghanistan?',
        ps: 'موږ څنګه کولی شو له چین څخه افغانستان ته ماشین آلات وارد کړو؟'
      },
      answer: {
        fa: 'صنعتچی از انتخاب تامین‌کننده، بازرسی فنی، عقد قرارداد، بیمه، تشریفات گمرکی و حمل تا تحویل در مقصد را مدیریت می‌کند.',
        en: 'Sanaatchi handles supplier selection, technical inspection, contracting, insurance, customs procedures and transport through to delivery at your site.',
        ps: 'صنعتچي د عرضه کوونکي ټاکنه، تخنیکي تفتیش، قرارداد، بیمه، ګمرکي تشریفات او تر وروستي سپارلو پورې ټول پړاوونه پر غاړه اخلي.'
      }
    },
    {
      id: 'faq-cost-shipping',
      question: {
        fa: 'هزینه حمل و نقل از چین به افغانستان چقدر است؟',
        en: 'How much does shipping from China to Afghanistan cost?',
        ps: 'له چین څخه افغانستان ته د لېږد لګښت څومره دی؟'
      },
      answer: {
        fa: 'هزینه بر اساس مسیر انتخابی، وزن و حجم، نوع کالا و خدمات موردنیاز تعیین می‌شود. پس از دریافت اطلاعات، پیشنهاد قیمت دقیق ارائه می‌کنیم.',
        en: 'Costs depend on the chosen route, cargo weight and volume, commodity type and required services. Once we have your shipment details, we provide a tailored quote.',
        ps: 'مصرف د ټاکل شوي مسیر، وزن او حجم، د مال ډول او اړینو خدماتو پورې تړاو لري. معلومات راسره شریک کړئ تر څو ځانګړې او کره بیه درکړو.'
      }
    },
    {
      id: 'faq-route-selection',
      question: {
        fa: 'بهترین مسیر ارسال کانتینر به کابل، هرات و مزار شریف چیست؟',
        en: 'What is the best route for shipping containers to Kabul, Herat and Mazar-e Sharif?',
        ps: 'کوم مسیر د کانتینر د لېږلو لپاره کابل، هرات او مزار شریف ته غوره دی؟'
      },
      answer: {
        fa: 'برای محموله‌های سریع، ریل چین – حیرتان توصیه می‌شود. برای حجم‌های بزرگ یا اقتصادی، مسیرهای دریایی بندر عباس و چابهار همراه با حمل جاده‌ای پیشنهاد می‌گردد.',
        en: 'For time-sensitive cargo we recommend the China–Hairatan rail line. For large or cost-sensitive cargo, sea routes via Bandar Abbas or Chabahar combined with domestic trucking work best.',
        ps: 'د بیړنیو محمولو لپاره د چین – حیرتان رېلي مسیر توصیه کېږي، او د لویو یا اقتصادي بارونو لپاره د بندر عباس او چابهار سمندري لارې د کورني ټرکینګ سره یوځای غوره انتخاب دی.'
      }
    }
  ];

  // ----- RENDERING -----
  function renderCargoRoutes() {
    const container = document.getElementById('cargoRoutesGrid');
    if (!container) return;

    const lang = (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa') || 'fa';
    container.innerHTML = '';

    cargoRoutes.forEach(route => {
      const card = document.createElement('div');
      card.className = 'cargo-card';

      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = route.badge[lang] || route.badge.fa;
      card.appendChild(badge);

      const title = document.createElement('h3');
      title.textContent = route.title[lang] || route.title.fa;
      card.appendChild(title);

      const desc = document.createElement('p');
      desc.textContent = route.description[lang] || route.description.fa;
      card.appendChild(desc);

      const buttonGroup = document.createElement('div');
      buttonGroup.className = 'card-buttons';

      const viewButton = document.createElement('a');
      viewButton.className = 'btn-primary';
      viewButton.href = route.pdfUrl;
      viewButton.target = '_blank';
      viewButton.rel = 'noopener noreferrer';
      viewButton.textContent = cargoButtonLabels.view[lang] || cargoButtonLabels.view.fa;
      buttonGroup.appendChild(viewButton);

      const downloadButton = document.createElement('a');
      downloadButton.className = 'btn-secondary';
      downloadButton.href = route.pdfUrl;
      downloadButton.setAttribute('download', '');
      downloadButton.textContent = cargoButtonLabels.download[lang] || cargoButtonLabels.download.fa;
      buttonGroup.appendChild(downloadButton);

      card.appendChild(buttonGroup);
      container.appendChild(card);
    });
  }

  function renderCargoFaq() {
    const list = document.getElementById('cargoFaqList');
    if (!list) return;

    const lang = (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa') || 'fa';
    list.innerHTML = '';

    cargoFaqs.forEach(item => {
      const wrapper = document.createElement('div');
      wrapper.className = 'cargo-faq-item';

      const question = document.createElement('h3');
      question.textContent = item.question[lang] || item.question.fa;
      wrapper.appendChild(question);

      const answer = document.createElement('p');
      answer.textContent = item.answer[lang] || item.answer.fa;
      wrapper.appendChild(answer);

      list.appendChild(wrapper);
    });
  }

  function setCargoMetaDescription() {
    const meta = document.querySelector('meta[name="description"]');
    if (!meta) return;
    const lang = (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa') || 'fa';
    meta.setAttribute('content', cargoMetaDescriptions[lang] || cargoMetaDescriptions.fa);
  }

  function setActiveCargoNav() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    nav.querySelectorAll('a').forEach(link => link.classList.remove('active'));
    const cargoLink = nav.querySelector('a[href*="cargo.html"]');
    if (cargoLink) cargoLink.classList.add('active');
  }

  function updateCargoContent() {
    renderCargoRoutes();
    renderCargoFaq();
    setCargoMetaDescription();
    setActiveCargoNav();
  }

  document.addEventListener('DOMContentLoaded', updateCargoContent);

  // Expose so main language switcher can re-render if it wants
  window.updateCargoContent = updateCargoContent;
})();
