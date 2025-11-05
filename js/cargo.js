// js/cargo.js

let currentLanguage = 'fa';

const translations = {
    fa: {
        // Header & nav
        nav_home: 'خانه',
        nav_services: 'خدمات',
        nav_about: 'درباره ما',
        nav_projects: 'پروژه‌های تحت کار',
        nav_cargo: 'کارگو و حمل‌ونقل',
        nav_contact: 'تماس با ما',
        header_cta: 'مشاوره رایگان',

        // Hero (نسخه اول)
        cargo_eyebrow: 'کارگو و حمل‌ونقل چین – افغانستان',
        cargo_hero_title: 'کارگو و حمل‌ونقل بین‌المللی',
        cargo_hero_subtitle: 'مسیرهای حمل و نقل چین – افغانستان',
        cargo_hero_description: 'در اینجا می‌توانید مسیرهای اصلی حمل کارگو، کانتینر، ماشین‌آلات و مواد اولیه از چین به افغانستان را مشاهده کنید؛ شامل حمل ریلی، دریایی و حمل جاده‌ای با کامیون از حیرتان به شهرهای افغانستان.',

        // Section title
        cargo_routes_heading: 'مسیرهای کارگو و حمل‌ونقل چین به افغانستان',

        // Badge
        badge_active: 'فعال',

        // Cards
        cargo_card_rail_title: 'مسیر ریلی چین – حیرتان',
        cargo_card_rail_desc: 'حمل کانتینر و بارهای سنگین با قطار از شهرهای مختلف چین تا بندر حیرتان؛ مناسب برای ماشین‌آلات، خطوط تولید و مواد اولیه صنعتی.',

        cargo_card_road_china_hairatan_title: 'حمل‌ونقل جاده‌ای از چین تا حیرتان',
        cargo_card_road_china_hairatan_desc: 'سریع‌ترین و مطمئن‌ترین راه حمل‌ونقل جاده‌ای از چین به مرز حیرتان توسط موترهای تیلری؛ مناسب برای بارهایی که زمان تحویل برای شما مهم است.',

        cargo_card_road_internal_title: 'حمل جاده‌ای از حیرتان به شهرهای افغانستان',
        cargo_card_road_internal_desc: 'پس از رسیدن کانتینر یا بار شما به حیرتان، تیم صنعتچی حمل جاده‌ای با لاری/کامیون به شهرهایی مانند کابل، مزار شریف، بلخ، سمنگان، هرات، قندهار و سایر نقاط افغانستان را مدیریت می‌کند.',

        cargo_card_sea_bandar_title: 'مسیر دریایی چین – بندر عباس – افغانستان',
        cargo_card_sea_bandar_desc: 'حمل دریایی کانتینر از بنادر چین تا بندر عباس و سپس ترانزیت زمینی به افغانستان؛ مناسب برای کانتینرهای کامل، مواد اولیه و تجهیزات پروژه‌ای.',

        cargo_card_sea_chabahar_title: 'مسیر دریایی چین – چابهار – افغانستان',
        cargo_card_sea_chabahar_desc: 'مسیر اقتصادی برای بارهای حجیم و صنعتی؛ حمل کانتینر از چین تا چابهار و سپس حمل جاده‌ای به شهرهای غرب و جنوب افغانستان مانند هرات و قندهار.',

        cargo_card_customs_title: 'خدمات گمرکی و ترخیص کالا',
        cargo_card_customs_desc: 'ارائه مشاوره و انجام تشریفات گمرکی در مرز، ترخیص کانتینر و بارهای صنعتی از حیرتان و سایر مبادی ورودی برای کاهش زمان خواب کالا.',

        cargo_card_insurance_title: 'بیمه حمل و نقل بین‌المللی',
        cargo_card_insurance_desc: 'پوشش بیمه‌ای برای کارگو از لحظه خروج از چین تا تحویل در افغانستان؛ کاهش ریسک‌های مربوط به آسیب، سرقت یا حوادث احتمالی در مسیر حمل.',

        cargo_card_cta: 'مشاهده PDF نرخنامه',

        // SEO content section
        cargo_seo_heading: 'چطور بهترین مسیر کارگو چین به افغانستان را انتخاب کنیم؟',
        cargo_seo_p1: 'بسیاری از مشتریان صنعتچی هنگام جستجو در گوگل عباراتی مانند «کارگو چین افغانستان»، «حمل بار از چین به افغانستان»، «کارگو بندر عباس به افغانستان» یا «China to Afghanistan cargo» را استفاده می‌کنند. هدف ما این است که برای همین جستجوها بهترین پاسخ باشیم و از لحظه خرید کالا در چین تا تحویل در افغانستان همراه شما بمانیم.',
        cargo_seo_subheading1: 'نمونه جستجوهایی که مشتریان ما انجام می‌دهند:',
        cargo_seo_li1: 'کارگو چین به افغانستان (China to Afghanistan cargo)',
        cargo_seo_li2: 'حمل بار از چین به کابل، مزار شریف، هرات و قندهار',
        cargo_seo_li3: 'مسیر ریلی و جاده‌ای چین – حیرتان – افغانستان',
        cargo_seo_li4: 'کارگو بندر عباس و چابهار به افغانستان',
        cargo_seo_li5: 'خدمات گمرکی و ترخیص کارگو در حیرتان',
        cargo_seo_p2: 'تیم صنعتچی بر اساس نوع بار، وزن، حجم، شهر مبدأ در چین و شهر مقصد در افغانستان، بهترین ترکیب مسیر (ریل، دریا، جاده) را پیشنهاد می‌کند تا هم هزینه حمل بهینه شود و هم زمان تحویل منطقی و قابل پیش‌بینی باشد.',
        cargo_seo_internal_link: 'اگر علاوه بر کارگو، به راه‌اندازی فابریکه و خطوط تولید در افغانستان هم فکر می‌کنید، می‌توانید از طریق صفحه اصلی سایت صنعتچی با سایر خدمات ما آشنا شوید.',

        // Main CTA
        cargo_cta_title: 'برای کارگو چین به افغانستان با ما تماس بگیرید',
        cargo_cta_desc: 'تیم متخصص صنعتچی مسیر مناسب برای بار شما را از میان حمل ریلی، جاده‌ای و دریایی انتخاب کرده و تمام مراحل از هماهنگی در چین تا تحویل در افغانستان را مدیریت می‌کند.',
        cargo_cta_primary: 'درخواست قیمت و زمان حمل',
        cargo_cta_secondary: 'مشاوره رایگان',

        // FAQ
        cargo_faq_heading: 'پرسش‌های متداول درباره کارگو چین به افغانستان',
        cargo_faq_intro: 'اگر برای اولین بار از چین به افغانستان کارگو می‌کنید، این سوال‌ها بیشترین تکرار را بین مشتریان صنعتچی دارند.',
        cargo_faq_q1: 'چقدر زمان می‌برد تا کارگو از چین به افغانستان برسد؟',
        cargo_faq_a1: 'بسته به مسیر انتخابی (ریلی، جاده‌ای یا دریایی)، نوع بار و فصل حمل، زمان معمول بین ۱۵ تا ۴۰ روز است. پس از دریافت مشخصات بار، زمان تقریبی را دقیق‌تر اعلام می‌کنیم.',
        cargo_faq_q2: 'چه نوع بارهایی را می‌توان از طریق صنعتچی حمل کرد؟',
        cargo_faq_a2: 'از ماشین‌آلات و خطوط تولید تا مواد اولیه، پرزه جات، تجهیزات پروژه‌ای و کانتینرهای کامل؛ کافی است مشخصات بار را برای ما ارسال کنید تا مسیر و هزینه پیشنهادی را ارائه کنیم.',
        cargo_faq_q3: 'آیا امکان بیمه بار در مسیر کارگو وجود دارد؟',
        cargo_faq_a3: 'بله، تمام مسیرهای کارگو چین به افغانستان می‌تواند تحت پوشش بیمه قرار گیرد تا ریسک‌های احتمالی حمل‌ونقل به حداقل برسد.',

        // Footer
        footer_description: 'گروه چشم‌انداز صنعتی صنعتچی با تمرکز بر کارگو چین به افغانستان و راه‌اندازی خطوط تولید، از مرحله مشاوره تا نصب تجهیزات و تأمین مواد اولیه در کنار شما است.',
        afghanistan_office_title: 'دفتر افغانستان',
        afghanistan_address: 'کابل، افغانستان',
        afghanistan_phone: '+93 779 819 820',
        afghanistan_hours: 'شنبه تا چهارشنبه: ۹:۰۰ تا ۱۷:۰۰ – پنجشنبه: ۹:۰۰ تا ۱۳:۰۰',
        china_office_title: 'دفتر چین',
        china_address: 'چین',
        china_phone: '+86 159 5171 6867',
        china_hours: 'شنبه تا جمعه: ۹:۰۰ تا ۱۸:۰۰',
        copyright: '© 2024 Arya Industrial Vision Group - صنعتچی. تمامی حقوق محفوظ است.'
    },

    ps: {
        nav_home: 'کورپاڼه',
        nav_services: 'خدمتونه',
        nav_about: 'زموږ په اړه',
        nav_projects: 'پر مخ روان پروژې',
        nav_cargo: 'کارګو او ترانسپورت',
        nav_contact: 'اړیکه',
        header_cta: 'وړیا مشوره',

        cargo_eyebrow: 'د چین–افغانستان کارګو او لېږد',
        cargo_hero_title: 'نړیوال کارګو او ترانسپورت',
        cargo_hero_subtitle: 'د چین–افغانستان د کارګو د لېږد مسیرونه',
        cargo_hero_description: 'دلته د چین څخه افغانستان ته د کارګو، کنټینرونو، ماشینونو او خامو موادو اصلي مسیرونه وینئ؛ پکې د رېل، سمندر او د حیرتان څخه د لاریو سړکـي ترانسپورت شامل دی.',

        cargo_routes_heading: 'د چین–افغانستان د کارګو د لېږد مسیرونه',

        badge_active: 'فعال',

        cargo_card_rail_title: 'د چین – حیرتان د رېل کارګو مسیر',
        cargo_card_rail_desc: 'له بېلابېلو چینایي ښارونو څخه تر بندر حیرتان پورې د رېل له لارې د کنټینر او درنو صنعتي مالونو لېږد؛ د فابریکې ماشینونو، تولیدي کرښو او خامو موادو لپاره مناسب.',

        cargo_card_road_china_hairatan_title: 'له چین څخه تر حیرتان پورې د سړک له لارې لېږد',
        cargo_card_road_china_hairatan_desc: 'سریع او باوري سړکـي کارګو د چین څخه تر حیرتان پولې پورې د تیلري موټرو له لارې؛ د هغو بارونو لپاره مناسب چې چټک تحویل غواړي.',

        cargo_card_road_internal_title: 'له حیرتان څخه د لاریو له لارې د افغانستان ښارونو ته کارګو',
        cargo_card_road_internal_desc: 'ستاسې کانتینر یا مال چې حیرتان ته ورسېږي، د صنعتچی ټیم یې د لاریو/ټراکونو په وسیله کابل، مزار شریف، بلخ، سمنگان، هرات، کندهار او نورو ښارونو ته رسوي.',

        cargo_card_sea_bandar_title: 'د چین – بندر عباس – افغانستان سمندري کارګو مسیر',
        cargo_card_sea_bandar_desc: 'له چین څخه تر بندر عباس پورې د کنټینر سمندري لېږد او وروسته د سړک له لارې افغانستان ته ترانزیت؛ د بشپړ کنټینرونو، خامو موادو او پروژوي تجهیزاتو لپاره مناسب.',

        cargo_card_sea_chabahar_title: 'د چین – چابهار – افغانستان سمندري کارګو مسیر',
        cargo_card_sea_chabahar_desc: 'د حجیم او درنو صنعتي مالونو لپاره مناسب مسیر؛ له چین څخه تر چابهار پورې سمندري کارګو او له هغه ځایه د لاریو په وسیله هرات، کندهار او نورو لوېدیځ او سوېلي ښارونو ته انتقال.',

        cargo_card_customs_title: 'ګمرکي خدمتونه او د توکو ترخیص',
        cargo_card_customs_desc: 'په حیرتان او نورو سرحدي نقطو کې د ګمرکي چارو ترسره کول، د کنټینرونو او صنعتي بارونو ترخیص څو د مال د ځنډېدو وخت کم شي.',

        cargo_card_insurance_title: 'د نړیوال لېږد بیمه',
        cargo_card_insurance_desc: 'له چین څخه د وتلو له شېبې تر افغانستان پورې د بار بیمه؛ د زیان، غلا او نورو پېښو ریسک کموي.',

        cargo_card_cta: 'د نرخنامې PDF کتنه',

        cargo_seo_heading: 'د چین–افغانستان د کارګو لپاره غوره مسیر څنګه وټاکو؟',
        cargo_seo_p1: 'ډېری مراجعین د صنعتچی نوم ته د رسېدو لپاره په ګوګل کې داسې لټونونه کوي لکه «کارګو چین افغانستان»، «له چین څخه تر افغانستان پورې د مال لېږد»، «د بندر عباس څخه افغانستان ته کارګو» یا «China to Afghanistan cargo». زموږ موخه دا ده چې د همدې لټونونو لپاره تر ټولو ګټوره ځواب ووایو او له چین څخه د پیرود تر افغانستان پورې له تاسو سره یوځای واوسو.',
        cargo_seo_subheading1: 'ځینې لټونونه چې زموږ مراجعین یې کوي:',
        cargo_seo_li1: 'کارګو چین افغانستان (China to Afghanistan cargo)',
        cargo_seo_li2: 'له چین څخه کابل، مزار شریف، هرات او کندهار ته د مال لېږد',
        cargo_seo_li3: 'د چین – حیرتان – افغانستان رېلي او سړکـي مسیر',
        cargo_seo_li4: 'د بندر عباس او چابهار له لارې افغانستان ته کارګو',
        cargo_seo_li5: 'د حیرتان په بندر کې د کارګو ګمرکي خدمتونه او ترخیص',
        cargo_seo_p2: 'د صنعتچی ټیم د بار له ډول، وزن، حجم، د چین له ښار او د افغانستان له مقصدي ښار سره سم د رېل، سمندر او سړک ترمنځ غوره ترکیب درته ټاکي څو د لېږد لګښتونه او د تحویل وخت دواړه متوازن وي.',
        cargo_seo_internal_link: 'که د کارګو ترڅنګ د تولیدي فابریکې او کرښو د جوړولو په اړه هم فکر کوئ، کولای شئ د صنعتچی له اصلي پاڼې څخه زموږ له نورو خدمتونو سره بلدتیا ومومئ.',

        cargo_cta_title: 'د چین–افغانستان کارګو لپاره زموږ سره اړیکه ونیسئ',
        cargo_cta_desc: 'د صنعتچی متخصص ټیم ستاسې د بار لپاره مناسب مسیر ټاکي او ټول پروسه له چین څخه تر تحویل پورې مدیریت کوي.',
        cargo_cta_primary: 'د بیې او وخت غوښتنه',
        cargo_cta_secondary: 'وړیا مشوره',

        cargo_faq_heading: 'د چین–افغانستان کارګو په اړه ډېرپېښې پوښتنې',
        cargo_faq_intro: 'که تاسې لومړی ځل د چین څخه افغانستان ته کارګو کوئ، دا پوښتنې تر ټولو ډېر تکرار لري.',
        cargo_faq_q1: 'د چین څخه تر افغانستان پورې د کارګو لېږد څومره وخت نیسي؟',
        cargo_faq_a1: 'د مسیر، فصل او د بار ډول پورې تړاو لري، خو عموماً نږدې ۱۵ تر ۴۰ ورځو پورې وخت نیسي. له معلوماتو وروسته دقیق اټکل درته درکول کېږي.',
        cargo_faq_q2: 'کوم ډول بارونه د صنعتچی له لارې لېږدولی شو؟',
        cargo_faq_a2: 'صنعتي ماشینونه، تولیدي کرښې، خام مواد، پرزې او بشپړ کنټینرونه د رېل، سړک او سمندر له لارې لېږدولی شو.',
        cargo_faq_q3: 'ایا د کارګو بیمه کول امکان لري؟',
        cargo_faq_a3: 'هو، د چین–افغانستان د کارګو ټول مسیرونه د بیمې تر پوښښ لاندې راوستل کېدای شي.',

        footer_description: 'د صنعتچی صنعتي لید ډله د چین–افغانستان کارګو او تولیدي کرښو په برخه کې له مشورې څخه تر تجهیزاتو نصب او خامو موادو تأمین پورې له تاسو سره ده.',
        afghanistan_office_title: 'د افغانستان دفتر',
        afghanistan_address: 'کابل، افغانستان',
        afghanistan_phone: '+93 779 819 820',
        afghanistan_hours: 'له شنبې تر چهارشنبې: ۹:۰۰ تر ۱۷:۰۰ – پنجشنبه: ۹:۰۰ تر ۱۳:۰۰',
        china_office_title: 'د چین دفتر',
        china_address: 'چین',
        china_phone: '+86 159 5171 6867',
        china_hours: 'له شنبې تر جمعې: ۹:۰۰ تر ۱۸:۰۰',
        copyright: '© 2024 Arya Industrial Vision Group - صنعتچی. ټول حقونه خوندي دي.'
    },

    en: {
        nav_home: 'Home',
        nav_services: 'Services',
        nav_about: 'About',
        nav_projects: 'Ongoing Projects',
        nav_cargo: 'Cargo & Transport',
        nav_contact: 'Contact',
        header_cta: 'Free Consultation',

        cargo_eyebrow: 'China–Afghanistan Cargo & Transport',
        cargo_hero_title: 'International Cargo & Transport',
        cargo_hero_subtitle: 'Main Transport Routes China – Afghanistan',
        cargo_hero_description: 'Here you can see the main routes for cargo, containers, machinery and raw materials from China to Afghanistan, including rail, sea and road transport from Hairatan to Afghan cities.',

        cargo_routes_heading: 'China–Afghanistan Cargo & Transport Routes',

        badge_active: 'Active',

        cargo_card_rail_title: 'Rail Route China – Hairatan',
        cargo_card_rail_desc: 'Heavy cargo and containers by train from major Chinese cities to Hairatan; ideal for machinery, production lines and industrial raw materials.',

        cargo_card_road_china_hairatan_title: 'Road Transport from China to Hairatan',
        cargo_card_road_china_hairatan_desc: 'Fast and reliable road cargo from China to the Hairatan border using trailer trucks, suitable for time-sensitive shipments.',

        cargo_card_road_internal_title: 'Trucking from Hairatan to Afghan Cities',
        cargo_card_road_internal_desc: 'After your container reaches Hairatan, the Sanaatchi team manages trucking to Kabul, Mazar-e-Sharif, Balkh, Samangan, Herat, Kandahar and other Afghan cities.',

        cargo_card_sea_bandar_title: 'Sea Route China – Bandar Abbas – Afghanistan',
        cargo_card_sea_bandar_desc: 'Sea freight from Chinese ports to Bandar Abbas, followed by overland transit to Afghanistan; ideal for full containers, raw materials and project cargo.',

        cargo_card_sea_chabahar_title: 'Sea Route China – Chabahar – Afghanistan',
        cargo_card_sea_chabahar_desc: 'Cost-efficient route for bulky industrial cargo; sea freight from China to Chabahar and then road transport to western and southern Afghan cities such as Herat and Kandahar.',

        cargo_card_customs_title: 'Customs Clearance Services',
        cargo_card_customs_desc: 'Consulting and handling customs procedures at border points like Hairatan to reduce cargo dwell time and accelerate delivery.',

        cargo_card_insurance_title: 'International Cargo Insurance',
        cargo_card_insurance_desc: 'Insurance coverage from origin in China to delivery in Afghanistan to minimise risks of damage, theft or other incidents during transport.',

        cargo_card_cta: 'View price list PDF',

        cargo_seo_heading: 'How to choose the best China to Afghanistan cargo route?',
        cargo_seo_p1: 'Many Sanaatchi clients search in Google using phrases like “cargo China Afghanistan”, “shipping from China to Afghanistan”, “Bandar Abbas to Afghanistan cargo” or “China to Afghanistan cargo”. Our goal is to be the best answer for these searches and support you from purchase in China all the way to delivery in Afghanistan.',
        cargo_seo_subheading1: 'Example search queries from our clients:',
        cargo_seo_li1: 'China to Afghanistan cargo services',
        cargo_seo_li2: 'Shipping from China to Kabul, Mazar-e-Sharif, Herat and Kandahar',
        cargo_seo_li3: 'Rail and road routes China – Hairatan – Afghanistan',
        cargo_seo_li4: 'Sea freight via Bandar Abbas and Chabahar to Afghanistan',
        cargo_seo_li5: 'Customs clearance and freight forwarding at Hairatan',
        cargo_seo_p2: 'Based on cargo type, weight, volume, origin city in China and destination city in Afghanistan, our team selects the optimal mix of rail, sea and road so that both cost and transit time are reasonable and predictable.',
        cargo_seo_internal_link: 'If you are also planning to set up a factory or production line in Afghanistan, you can learn more about our industrial services through the Sanaatchi home page.',

        cargo_cta_title: 'Contact us for China–Afghanistan cargo',
        cargo_cta_desc: 'Our specialist team selects the optimal combination of rail, road and sea and manages the whole process from China to final delivery in Afghanistan.',
        cargo_cta_primary: 'Request quote & transit time',
        cargo_cta_secondary: 'Free consultation',

        cargo_faq_heading: 'China–Afghanistan Cargo FAQs',
        cargo_faq_intro: 'If this is your first time shipping from China to Afghanistan, these are the questions we receive most often from clients.',
        cargo_faq_q1: 'How long does cargo from China to Afghanistan take?',
        cargo_faq_a1: 'Depending on the selected route (rail, road or sea), cargo type and season, transit time is usually around 15–40 days.',
        cargo_faq_q2: 'What types of cargo can be shipped with Sanaatchi?',
        cargo_faq_a2: 'Industrial machinery, production lines, raw materials, spare parts, project equipment and full/LCL containers can be shipped via rail, road and sea.',
        cargo_faq_q3: 'Is insurance available for shipments?',
        cargo_faq_a3: 'Yes, all China–Afghanistan cargo routes can be insured end-to-end to minimise transport risks.',

        footer_description: 'Arya Industrial Vision Group (Sanaatchi) focuses on China–Afghanistan cargo and industrial plant setup, supporting you from consulting to equipment installation and raw material supply.',
        afghanistan_office_title: 'Afghanistan Office',
        afghanistan_address: 'Kabul, Afghanistan',
        afghanistan_phone: '+93 779 819 820',
        afghanistan_hours: 'Saturday to Wednesday: 9:00 to 17:00 – Thursday: 9:00 to 13:00',
        china_office_title: 'China Office',
        china_address: 'China',
        china_phone: '+86 159 5171 6867',
        china_hours: 'Saturday to Friday: 9:00 to 18:00',
        copyright: '© 2024 Arya Industrial Vision Group - Sanaatchi. All rights reserved.'
    }
};

// اعمال ترجمه‌ها روی همه‌ی المنت‌هایی که data-translate دارند
function applyTranslations() {
    const lang = currentLanguage in translations ? currentLanguage : 'fa';
    const dict = translations[lang];

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // تنظیم lang و dir برای سئو و UX
    const html = document.documentElement;
    html.lang = (lang === 'fa') ? 'fa' : (lang === 'ps') ? 'ps' : 'en';
    html.dir = (lang === 'en') ? 'ltr' : 'rtl';
}

// سوییچ زبان؛ از select در HTML صدا زده می‌شود
function switchLanguage(lang) {
    currentLanguage = lang;
    applyTranslations();

    const select = document.querySelector('.language-switcher');
    if (select && select.value !== lang) {
        select.value = lang;
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    currentLanguage = 'fa';
    applyTranslations();

    const select = document.querySelector('.language-switcher');
    if (select) {
        select.value = currentLanguage;
        select.addEventListener('change', (e) => {
            switchLanguage(e.target.value);
        });
    }
});
