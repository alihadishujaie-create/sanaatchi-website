(function () {
    if (typeof translations === 'undefined') {
        window.translations = {};
    }

    const cargoTranslations = {
        'nav-cargo': { fa: 'کارگو و حمل‌ونقل', en: 'Cargo & Transport', ps: 'کارګو او ترانسپورت' },
        'cargo-hero-title': {
            fa: 'کارگو و حمل بار از چین به افغانستان',
            en: 'Cargo & Freight from China to Afghanistan',
            ps: 'له چین څخه افغانستان ته کارګو او مال لېږد'
        },
        'cargo-hero-subtitle': {
            fa: 'ریل، دریا و جاده با مدیریت یکپارچه Sanaatchi',
            en: 'Rail, sea and road logistics managed end-to-end by Sanaatchi',
            ps: 'ریل، سمندر او سړک لوجستیک د صنعتچي له خوا په بشپړ ډول سمبالېږي'
        },
        'cargo-hero-quote': {
            fa: '«از برنامه‌ریزی حمل تا تحویل درب کارخانه، تیم Sanaatchi تمامی مراحل کارگو چین – افغانستان را مدیریت می‌کند.»',
            en: '“From load planning to factory delivery, the Sanaatchi team manages every step of the China–Afghanistan cargo journey.”',
            ps: '"له بار بندۍ څخه تر فابریکې سپارلو پورې، د صنعتچي ټیم د چین او افغانستان ترمنځ د کارګو ټول پړاوونه اداره کوي."'
        },
        'cargo-hero-cta': { fa: 'درخواست نرخ حمل', en: 'Request Freight Quote', ps: 'د لېږد بیه وغواړئ' },
        'cargo-hero-secondary': { fa: 'مشاهده مسیرها', en: 'View Routes', ps: 'مسیرونه وګورئ' },
        'cargo-tag-logistics': { fa: 'مسیرهای کارگو', en: 'Cargo Routes', ps: 'د کارګو مسیرونه' },
        'cargo-tag-rail': { fa: 'حمل ریلی', en: 'Rail Freight', ps: 'د رېل لېږد' },
        'cargo-tag-sea': { fa: 'حمل دریایی', en: 'Sea Freight', ps: 'سمندري لېږد' },
        'cargo-tag-road': { fa: 'حمل جاده‌ای', en: 'Road Freight', ps: 'د سړک لېږد' },
        'cargo-overview-title': {
            fa: 'مدیریت یکپارچه کارگو چین – افغانستان',
            en: 'Integrated China–Afghanistan Cargo Management',
            ps: 'د چین او افغانستان ترمنځ یو موټی کارګو مدیریت'
        },
        'cargo-overview-subtitle': {
            fa: 'از انتخاب مسیر تا ترخیص و تحویل، Sanaatchi Industrial Vision تمام زنجیره لجستیک شما را پوشش می‌دهد.',
            en: 'From route selection to customs clearance and delivery, Sanaatchi Industrial Vision covers your full logistics chain.',
            ps: 'له مسیر ټاکنې، ګمرک څخه تر سپارلو پورې، صنعتچي ټول لوجستیکي ځنځیر پر غاړه اخلي.'
        },
        'cargo-overview-point-1-title': {
            fa: 'سه مسیر اصلی حمل',
            en: 'Three Core Transport Corridors',
            ps: 'درې اساسي د لېږد دهلېزونه'
        },
        'cargo-overview-point-1-desc': {
            fa: 'حمل ریلی چین – حیرتان، حمل دریایی از بنادر چین به بندر عباس و چابهار، و حمل جاده‌ای سراسری در افغانستان.',
            en: 'Rail freight from China to Hairatan, sea freight from Chinese ports to Bandar Abbas and Chabahar, plus nationwide trucking inside Afghanistan.',
            ps: 'د چین څخه حیرتان ته رېل لېږد، له چینایي بندرونو څخه تر بندر عباس او چابهار پورې سمندري لېږد او بیا د افغانستان دننه سړکيز ټرانسپورټ.'
        },
        'cargo-overview-point-2-title': {
            fa: 'پوشش تجهیزات و مواد اولیه',
            en: 'Machinery & Raw Material Coverage',
            ps: 'ماشین آلات او خام مواد تر پوښښ لاندې'
        },
        'cargo-overview-point-2-desc': {
            fa: 'مدیریت کارگو برای کانتینر کامل، ماشین‌آلات نو و دست دوم، خطوط تولید و مواد اولیه صنعتی.',
            en: 'Cargo management for full containers, new and second-hand machinery, production lines and industrial raw materials.',
            ps: 'د بشپړو کانتینرونو، نوو او دوهم لاس ماشینونو، تولیدي لینونو او صنعتي خامو موادو لپاره کارګو مدیریت.'
        },
        'cargo-overview-point-3-title': {
            fa: 'پشتیبانی تیم متخصص',
            en: 'Specialist Operations Support',
            ps: 'د متخصص ټیم ملاتړ'
        },
        'cargo-overview-point-3-desc': {
            fa: 'هماهنگی با تامین‌کنندگان چینی، بیمه، تشریفات گمرکی و تحویل در مقصد با تیم عملیات Sanaatchi.',
            en: 'Coordination with Chinese suppliers, insurance, customs procedures and destination delivery handled by the Sanaatchi operations team.',
            ps: 'د چینایي عرضه کوونکو همغږي، بیمه، ګمرکي تشریفات او په هدف ځای کې سپارل د صنعتچي د عملیاتو ټیم له خوا ترسره کېږي.'
        },
        'cargo-overview-point-4-title': {
            fa: 'برنامه‌ریزی زمان‌بندی دقیق',
            en: 'Precise Scheduling & Tracking',
            ps: 'دقیق مهالویش او څارنه'
        },
        'cargo-overview-point-4-desc': {
            fa: 'ارائه جدول زمان‌بندی روشن برای هر مسیر و پیگیری مرحله‌به‌مرحله تا تحویل نهایی بار.',
            en: 'Clear schedules for every route with milestone tracking through to final delivery.',
            ps: 'د هر مسیر لپاره روښانه مهالویش او د پړاو په پړاو څارنه تر وروستي سپارلو پورې.'
        },
        'cargo-routes-title': {
            fa: 'مسیرهای حمل و نقل چین – افغانستان',
            en: 'China–Afghanistan Transport Routes',
            ps: 'د چین او افغانستان د لېږد مسیرونه'
        },
        'cargo-routes-subtitle': {
            fa: 'در اینجا می‌توانید مسیرهای اصلی حمل کارگو، کانتینر، ماشین‌آلات و مواد اولیه از چین به افغانستان را مشاهده کنید؛ شامل حمل ریلی، دریایی و حمل جاده‌ای با کامیون از حیرتان به شهرهای افغانستان.',
            en: 'Explore the key cargo corridors moving containers, machinery and raw materials from China to Afghanistan via rail, sea and road links from Hairatan to Afghan cities.',
            ps: 'دلته هغه اساسي مسیرونه وینئ چې له چین څخه افغانستان ته کانتینرونه، ماشینونه او خام مواد د رېل، سمندر او له حیرتان څخه د لاریو له لارې انتقالوي.'
        },
        'cargo-cta-title': {
            fa: 'برای دریافت نرخ و برنامه حمل، با ما در تماس باشید',
            en: 'Contact Us for Freight Rates & Scheduling',
            ps: 'د لېږد نرخ او مهالویش لپاره موږ سره اړیکه ونیسئ'
        },
        'cargo-cta-subtitle': {
            fa: 'تیم Sanaatchi با ارزیابی نوع کالا، وزن، مسیر و زمان‌بندی، بهترین گزینه حمل را برای پروژه شما پیشنهاد می‌دهد.',
            en: 'The Sanaatchi team evaluates cargo type, weight, route and timing to recommend the best logistics plan for your project.',
            ps: 'د صنعتچي ټیم د مال ډول، وزن، مسیر او وخت ارزونه کوي او ستاسو پروژې ته تر ټولو مناسب لوجستیک پلان وړاندیزوي.'
        },
        'cargo-cta-contact': { fa: 'درخواست مشاوره حمل', en: 'Request Logistics Consultation', ps: 'د لېږد مشوره وغواړئ' },
        'cargo-cta-sales': { fa: 'هماهنگی با تیم فروش', en: 'Coordinate with Sales Team', ps: 'د پلور له ټیم سره همغږي وکړئ' },
        'cargo-faq-title': {
            fa: 'سوالات متداول کارگو چین – افغانستان',
            en: 'China–Afghanistan Cargo FAQs',
            ps: 'د چین او افغانستان د کارګو پرله‌پسې پوښتنې'
        },
        'cargo-faq-subtitle': {
            fa: 'پرسش‌های پرتکرار مشتریان درباره حمل و نقل کانتینر، ماشین‌آلات و مواد اولیه از چین به افغانستان.',
            en: 'Common customer questions about shipping containers, machinery and raw materials from China to Afghanistan.',
            ps: 'هغه عامې پوښتنې چې مشتریان یې د چین څخه افغانستان ته د کانتینر، ماشین او خامو موادو د لېږد په اړه کوي.'
        }
    };

    Object.assign(translations, cargoTranslations);

    const cargoRoutes = [
        {
            id: 'rail-china-hairatan',
            badge: { fa: 'فعال', en: 'Active', ps: 'فعال' },
            title: {
                fa: 'مسیر ریلی چین – حیرتان',
                en: 'China to Hairatan Rail Corridor',
                ps: 'د چین – حیرتان رېل کارګو مسیر'
            },
            description: {
                fa: 'حمل کانتینر و بارهای سنگین با قطار از شهرهای مختلف چین تا بندر حیرتان؛ مناسب برای ماشین‌آلات، خطوط تولید و مواد اولیه صنعتی.',
                en: 'Rail transport for containers and heavy cargo from major Chinese hubs to Hairatan—ideal for machinery, production lines and industrial raw materials.',
                ps: 'له بېلابېلو چینایي ښارونو څخه تر حیرتان پورې د کانتینرونو او درنو مالونو رېلي لېږد؛ د ماشین آلاتو، تولیدي لینونو او صنعتي خامو موادو لپاره مناسب.'
            },
            pdfUrl: 'pdf/route-rail-china-hairatan-rate.pdf'
        },
        {
            id: 'road-hairatan-afghanistan',
            badge: { fa: 'فعال', en: 'Active', ps: 'فعال' },
            title: {
                fa: 'حمل جاده‌ای با کامیون از حیرتان به شهرهای افغانستان',
                en: 'Hairatan to Afghan Cities Trucking Service',
                ps: 'له حیرتان څخه د افغانستان ښارونو ته د لاریو ترانسپورت'
            },
            description: {
                fa: 'پس از رسیدن کانتینر یا بار شما به حیرتان، تیم Sanaatchi حمل جاده‌ای با لاری/کامیون به شهرهایی مانند کابل، مزار شریف، بلخ، سمنگان، هرات، قندهار و سایر نقاط افغانستان را مدیریت می‌کند.',
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
                en: 'China – Bandar Abbas – Afghanistan Sea Route',
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
                en: 'China – Chabahar – Afghanistan Sea Route',
                ps: 'د چین – چابهار – افغانستان سمندري مسیر'
            },
            description: {
                fa: 'مسیر اقتصادی برای بارهای حجیم و صنعتی؛ حمل کانتینر از چین تا چابهار و سپس حمل جاده‌ای به شهرهای غرب و جنوب افغانستان مانند هرات و قندهار.',
                en: 'Cost-efficient route for bulky and industrial cargo—ship containers to Chabahar then truck to western and southern Afghan cities such as Herat and Kandahar.',
                ps: 'د درنو او صنعتي مالونو لپاره اقتصادي مسیر؛ کانتینر له چین څخه چابهار ته لېږدول او بیا یې هرات، کندهار او نورو لوېديځ او سوېلي ښارونو ته د لاریو په وسیله انتقالول.'
            },
            pdfUrl: 'pdf/route-sea-china-chabahar-rate.pdf'
        }
    ];

    const cargoButtonLabels = {
        view: {
            fa: 'مشاهده PDF مسیر',
            en: 'View Route PDF',
            ps: 'د مسیر PDF کتنه'
        },
        download: {
            fa: 'دانلود PDF مسیر',
            en: 'Download Route PDF',
            ps: 'د مسیر PDF ښکته کول'
        }
    };

    const cargoMetaDescriptions = {
        fa: 'خدمات کامل کارگو و حمل بار از چین به افغانستان؛ شامل حمل ریلی تا حیرتان، حمل جاده‌ای با کامیون و حمل دریایی از طریق بندر عباس و چابهار. مدیریت یکپارچه Sanaatchi برای کانتینر، ماشین‌آلات و مواد اولیه.',
        en: 'Comprehensive cargo and freight solutions from China to Afghanistan, covering rail to Hairatan, sea freight via Bandar Abbas and Chabahar, and nationwide trucking for machinery, production lines and raw materials.',
        ps: 'له چین څخه افغانستان ته د کارګو او بار وړلو بشپړ خدمتونه؛ پکې د حیرتان تر رېل، د بندر عباس او چابهار له لارې سمندري لېږد او د ټول افغانستان لپاره سړکيز ټرانسپورټ شامل دي.'
    };

    const cargoFaqs = [
        {
            id: 'faq-import-machinery',
            question: {
                fa: 'چگونه ماشین‌آلات را از چین به افغانستان وارد کنیم؟',
                en: 'How can we import machinery from China to Afghanistan?',
                ps: 'موږ څنګه کولی شو له چین څخه افغانستان ته ماشین آلات وارد کړو؟'
            },
            answer: {
                fa: 'Sanaatchi از انتخاب تامین‌کننده، بازرسی فنی، عقد قرارداد، بیمه، تشریفات گمرکی و حمل تا تحویل در مقصد را مدیریت می‌کند.',
                en: 'Sanaatchi handles supplier selection, technical inspection, contracting, insurance, customs procedures and transport through to delivery at your site.',
                ps: 'صنعتچي د عرضه کوونکي ټاکنه، تخنیکي تفتیش، قرارداد، بیمه، ګمرکي تشریفات او تر سپارلو پورې ټوله لېږد پروسه پر غاړه اخلي.'
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
                en: 'Costs depend on the chosen route, cargo weight and volume, commodity type and required services. Share the shipment details and we will provide a tailored quote.',
                ps: 'مصرف د ټاکل شوي مسیر، وزن او حجم، د مال ډول او اړینو خدماتو پورې تړاو لري. د مال معلومات راسره شریک کړئ څو ځانګړی وړاندیز درکړو.'
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
                fa: 'برای محموله‌های سریع، ریل چین – حیرتان پیشنهاد می‌شود. برای حجم‌های بزرگ یا اقتصادی، مسیرهای دریایی بندر عباس و چابهار همراه با حمل جاده‌ای توصیه می‌گردد.',
                en: 'For time-sensitive cargo we recommend the China–Hairatan rail line, while large or cost-sensitive shipments benefit from sea routes via Bandar Abbas or Chabahar combined with domestic trucking.',
                ps: 'د بیړنیو مالونو لپاره د چین – حیرتان رېل مناسب دی، او د لوی یا اقتصادي مالونو لپاره د بندر عباس او چابهار سمندري مسیرونه د کورني ټرکینګ سره یوځای غوره دي.'
            }
        }
    ];

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
        const cargoLink = nav.querySelector('a[data-translate="nav-cargo"]');
        if (cargoLink) {
            cargoLink.classList.add('active');
        }
    }

    function updateCargoContent() {
        renderCargoRoutes();
        renderCargoFaq();
        setCargoMetaDescription();
        setActiveCargoNav();
    }

    document.addEventListener('DOMContentLoaded', () => {
        updateCargoContent();
    });

    window.updateCargoContent = updateCargoContent;
})();
