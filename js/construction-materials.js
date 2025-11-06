(function() {
    const content = {
        hero: {
            title: {
                fa: 'ماشین‌آلات مصالح ساختمانی آماده اجرا',
                en: 'Construction Materials Machinery Ready to Deploy',
                ps: 'د ساختماني موادو ماشینونه چې د نصب لپاره چمتو دي'
            },
            subtitle: {
                fa: 'از بلوک‌سازی و آسفالت تا جرثقیل، لودر و متریال مصرفی؛ بسته کامل کارگاه‌های افغانستان را تامین می‌کنیم.',
                en: 'From block plants and asphalt fleets to cranes, loaders and consumables—we deliver complete job-site packages for Afghanistan.',
                ps: 'له بلاک فابریکو او اسفالټ تجهیزاتو څخه تر کرین، لوډر او مصرفي توکو پورې؛ موږ د افغانستان د ساختماني ساحو بشپړ کڅوړې برابروو.'
            },
            quote: {
                fa: 'هر بسته شامل طراحی، نصب، آموزش اپراتور و مستندات سه‌زبانه است تا پروژه بدون توقف پیش برود.',
                en: 'Each package covers design, installation, operator training and trilingual dossiers to keep your project moving.',
                ps: 'هره کڅوړه ډیزاین، نصب، د اپریټر روزنه او درې ژبې اسناد لري څو پروژه پرته له ځنډه پر مخ ولاړه شي.'
            },
            secondaryCta: {
                fa: 'مشاهده فایل‌های فنی مصالح ساختمانی',
                en: 'Browse Construction Material Datasheets',
                ps: 'د ساختماني موادو تخنیکي پاڼې وګورئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا تجهیزات ساختمانی را از صنعتچی تهیه کنیم؟',
            en: 'Why Source Construction Equipment with Sanaatchi?',
            ps: 'ولې د ساختماني وسایلو لپاره صنعتچي وټاکئ؟'
        },
        highlightsSubtitle: {
            fa: 'از طراحی کارخانه تا راه‌اندازی کارگاه؛ هر تجهیز با مشاوره مهندسی، لجستیک و آموزش کامل ارائه می‌شود.',
            en: 'From plant design to on-site commissioning—every asset arrives with engineering, logistics and training support.',
            ps: 'له فابریکې ډیزاین څخه تر ساحوي فعالولو پورې—هر تجهیز د انجینري، لوژستیک او روزنې ملاتړ سره راځي.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی تجهیزات ساختمانی',
            en: 'Core Construction Equipment Families',
            ps: 'د ساختماني تجهیزاتو اصلي ډلې'
        },
        categoriesSubtitle: {
            fa: 'بر اساس حوزه فعالیت خود، خطوط بلوک، آسفالت، ماشین‌آلات سنگین یا متریال مصرفی را انتخاب کنید.',
            en: 'Select block plants, asphalt solutions, heavy machinery or consumables tailored to your project.',
            ps: 'د خپلې پروژې لپاره د بلاک لاینونه، اسفالټ حللارې، درنې ماشینونه او مصرفي توکي وټاکئ.'
        },
        inventoryTitle: {
            fa: 'فایل‌های فنی آماده دانلود',
            en: 'Downloadable Technical Datasheets',
            ps: 'د ډاونلوډ لپاره تخنیکي معلومات'
        },
        inventorySubtitle: {
            fa: 'مشخصات فنی هر تجهیز را مرور کنید و فایل PDF سه‌زبانه را دریافت نمایید.',
            en: 'Review the technical scope of each solution and download trilingual PDFs.',
            ps: 'د هر حل تخنیکي جزیات وګورئ او درې ژبې PDF فایلونه ډاونلوډ کړئ.'
        },
        assuranceTitle: {
            fa: 'بسته خدمات پروژه‌های عمرانی',
            en: 'Civil Project Support Bundle',
            ps: 'د عمراني پروژو د ملاتړ کڅوړه'
        },
        assuranceSubtitle: {
            fa: 'پشتیبانی طراحی، کنترل کیفیت و تأمین قطعات یدکی برای بهره‌برداری پایدار.',
            en: 'Design backing, quality control and spare provisioning for dependable operations.',
            ps: 'د ډیزاین ملاتړ، د کیفیت کنټرول او د پرزو برابرول د دوامدار فعالیت لپاره.'
        },
        processTitle: {
            fa: 'روند اجرای پروژه‌های ساختمانی',
            en: 'Execution Roadmap for Construction Projects',
            ps: 'د ساختماني پروژو د تطبیق لاره نقشه'
        },
        processSubtitle: {
            fa: 'از تعریف نیاز تا نصب و تحویل کارگاهی، تمام مراحل توسط تیم صنعتچی مدیریت می‌شود.',
            en: 'Sanaatchi manages every stage—from requirement capture to installation and handover.',
            ps: 'له اړتیا ټاکلو څخه تر نصب او سپارلو پورې، ټول پړاوونه د صنعتچي له خوا اداره کېږي.'
        }
    };

    const highlights = [
        {
            icon: '🧭',
            title: {
                fa: 'طراحی منطبق با اقلیم افغانستان',
                en: 'Design Tailored to Afghanistan’s Climate',
                ps: 'د افغانستان د اقلیم لپاره مناسب ډیزاین'
            },
            description: {
                fa: 'انتخاب تجهیزات و متریال مقاوم به گردوغبار، اختلاف دما و برق ناپایدار برای کارگاه‌های محلی.',
                en: 'Selecting equipment and materials hardened against dust, temperature swings and unstable power at local sites.',
                ps: 'د تجهیزاتو او موادو ټاکنه چې د دوړو، تودوخې بدلونونو او نا باثباته برېښنا پر وړاندې مقاومت ولري.'
            }
        },
        {
            icon: '📐',
            title: {
                fa: 'یکپارچه‌سازی سازه و تاسیسات',
                en: 'Integrated Civil & Utility Engineering',
                ps: 'د ملکي جوړښت او تاسیساتو یو ځای انجینري'
            },
            description: {
                fa: 'چیدمان خطوط، فونداسیون و تاسیسات جانبی با نقشه‌های اجرایی و دیتیل نصب ارائه می‌شود.',
                en: 'Layouts cover foundations, utilities and auxiliary systems with execution drawings and installation details.',
                ps: 'د بنسټ، تاسیساتو او فرعي سیستمونو ډیزاین د اجرایي نقشو او د نصب جزیاتو سره وړاندې کېږي.'
            }
        },
        {
            icon: '🚚',
            title: {
                fa: 'لجستیک و ترخیص سریع',
                en: 'Expedited Logistics & Clearance',
                ps: 'چټک لوژستیک او ګمرکي تصفیه'
            },
            description: {
                fa: 'از حمل دریایی و زمینی تا بیمه و ترخیص در مرزهای افغانستان را مدیریت می‌کنیم.',
                en: 'We handle sea and land freight, insurance and Afghan customs clearance end-to-end.',
                ps: 'موږ سمندر او ځمکني بار، بیمه او د افغانستان ګمرکي تصفیه له پیل څخه تر پایه اداره کوو.'
            }
        },
        {
            icon: '🎓',
            title: {
                fa: 'آموزش ایمنی و بهره‌برداری',
                en: 'Safety & Operations Training',
                ps: 'د خوندیتوب او عملیاتو روزنه'
            },
            description: {
                fa: 'تیم اپراتوری و نگهداری شما آموزش ایمنی، بهره‌برداری و برنامه‌ریزی نگهداری پیشگیرانه دریافت می‌کند.',
                en: 'Your operators and maintenance crew receive safety, operation and preventive maintenance programmes.',
                ps: 'ستاسو اپریټرانو او د ساتنې ټیم ته د خوندیتوب، چلولو او مخنیوي ساتنې پروګرامونه ورکول کېږي.'
            }
        }
    ];

    const categories = [
        {
            id: 'concrete-block',
            icon: '🧱',
            title: {
                fa: 'خطوط و تجهیزات بلوک‌سازی بتن',
                en: 'Concrete Block Production Systems',
                ps: 'د کانکریټ بلاک جوړولو سیستمونه'
            },
            description: {
                fa: 'قالب‌گیری، عمل‌آوری و پالت‌گذاری بلوک برای پروژه‌های مسکونی و تجاری.',
                en: 'Moulding, curing and palletising concrete blocks for residential and commercial builds.',
                ps: 'د استوګنې او سوداګریز پروژو لپاره د کانکریټ بلاکونو قالب، درملنه او پالت کول.'
            }
        },
        {
            id: 'asphalt',
            icon: '🛣️',
            title: {
                fa: 'تجهیزات تولید و اجرای آسفالت',
                en: 'Asphalt Production & Paving Fleet',
                ps: 'د اسفالټ تولید او ایښودلو تجهیزات'
            },
            description: {
                fa: 'بچینگ، پخش و فشرده‌سازی آسفالت برای پروژه‌های راهسازی شهری و بین‌شهری.',
                en: 'Batching, paving and compaction solutions for urban and intercity roadworks.',
                ps: 'د ښار او ښارونو تر منځ سړکونو لپاره د اسفالټ مخلوط، ایښودلو او کمپکشن حللارې.'
            }
        },
        {
            id: 'excavator',
            icon: '⛏️',
            title: {
                fa: 'بیل مکانیکی و تجهیزات حفاری',
                en: 'Excavators & Earthmoving Gear',
                ps: 'اکسکاویټر او د خاورې کیندلو وسایل'
            },
            description: {
                fa: 'بیل‌های استاندارد، مینی و مجموعه قطعات مصرفی برای عملیات خاک‌برداری.',
                en: 'Standard and mini excavators with consumable kits for earthworks and trenching.',
                ps: 'معیاري او کوچني اکسکاویټرونه او د خاورې کیندلو لپاره مصرفي کټونه.'
            }
        },
        {
            id: 'crane',
            icon: '🏗️',
            title: {
                fa: 'جرثقیل‌های کارگاهی و تاور کرین',
                en: 'Site Cranes & Tower Cranes',
                ps: 'د ساحې کرینونه او تاور کرینونه'
            },
            description: {
                fa: 'انواع جرثقیل برجی، متحرک و قطعات یدکی برای نصب ایمن بارهای سنگین.',
                en: 'Tower and mobile cranes with spare parts to lift heavy loads safely.',
                ps: 'تاور او ګرځنده کرینونه د درنو بارونو خوندي پورته کولو لپاره له پرزو سره.'
            }
        },
        {
            id: 'loader',
            icon: '🚜',
            title: {
                fa: 'لودر و تجهیزات بارگیری',
                en: 'Loaders & Material Handling',
                ps: 'لوډرونه او د موادو لېږد تجهیزات'
            },
            description: {
                fa: 'لودرهای چرخ‌دار، تجهیز جانبی و قطعات یدکی برای حمل مصالح و خاک.',
                en: 'Wheel loaders, attachments and spare parts for bulk material handling.',
                ps: 'د څرخ لرونکي لوډرونه، ملحقات او پرزې د موادو لېږدولو لپاره.'
            }
        },
        {
            id: 'materials',
            icon: '🪨',
            title: {
                fa: 'مصالح و متریال مصرفی پروژه',
                en: 'Core Construction Materials',
                ps: 'د ساختماني پروژو اساسي مواد'
            },
            description: {
                fa: 'سیمان، میلگرد، شن و ماسه و مواد عایق برای پروژه‌های عمرانی.',
                en: 'Cement, steel rebar, aggregates and waterproofing supplies for civil works.',
                ps: 'سمنټ، د فولادو میلونه، جغل او د اوبو ضد مواد د عمراني پروژو لپاره.'
            }
        },
        {
            id: 'formwork',
            icon: '🧰',
            title: {
                fa: 'قالب‌بندی و متعلقات بتن',
                en: 'Formwork & Concrete Accessories',
                ps: 'فارم ورک او د کانکریټ اړوند وسایل'
            },
            description: {
                fa: 'قالب‌های فولادی و پلاستیکی به همراه متعلقات برای اجرای سازه‌های بتنی.',
                en: 'Steel and plastic formwork systems with accessories for reinforced concrete structures.',
                ps: 'د فولادي او پلاستیکي قالب سیسټمونه له اړوندو وسایلو سره د کانکریټ جوړښتونو لپاره.'
            }
        }
    ];

    const assuranceHighlights = [
        {
            icon: '🧱',
            title: {
                fa: 'طراحی فونداسیون و جانمایی',
                en: 'Foundation & Layout Engineering',
                ps: 'د بنسټ او ترتیب انجینري'
            },
            description: {
                fa: 'نقشه‌های فونداسیون، مسیر کابل‌کشی و جانمایی تجهیزات توسط تیم عمران صنعتچی تهیه می‌شود.',
                en: 'Sanaatchi civil engineers prepare foundation drawings, cabling routes and equipment layouts.',
                ps: 'د صنعتچي ملکي انجینران د بنسټ نقشې، د کیبل لارو او د تجهیزاتو ترتیب برابروي.'
            }
        },
        {
            icon: '🧪',
            title: {
                fa: 'کنترل کیفیت متریال و قطعات',
                en: 'Material & Component Quality Control',
                ps: 'د موادو او پرزو د کیفیت کنټرول'
            },
            description: {
                fa: 'آزمایش مقاومت مصالح، تست عملکرد تجهیزات و گزارش QC پیش از ارسال ارائه می‌شود.',
                en: 'Material strength tests, equipment performance checks and QC reports precede every shipment.',
                ps: 'د موادو د مقاومت ازموینې، د تجهیزاتو د فعالیت کتنې او د QC راپورونه د هر لېږد مخکې ترسره کېږي.'
            }
        },
        {
            icon: '🔩',
            title: {
                fa: 'تامین قطعات یدکی و سرویس دوره‌ای',
                en: 'Spare Parts & Preventive Service',
                ps: 'د سپیر پارټو او مخنیوي ساتنې برابرول'
            },
            description: {
                fa: 'لیست قطعات مصرفی و برنامه سرویس دوره‌ای برای حفظ آماده‌به‌کاری ماشین‌آلات ارائه می‌گردد.',
                en: 'Consumable lists and preventive service schedules keep machinery uptime high.',
                ps: 'د مصرفي پرزو لست او د مخنیوي ساتنې مهالویش د ماشینونو د دوام لپاره برابریږي.'
            }
        },
        {
            icon: '📑',
            title: {
                fa: 'مستندسازی و آموزش ایمنی',
                en: 'Documentation & Safety Briefings',
                ps: 'مستندات او د خوندیتوب روزنه'
            },
            description: {
                fa: 'دفترچه‌های سه‌زبانه، چک‌لیست‌های ایمنی و سناریوهای واکنش اضطراری تحویل می‌شود.',
                en: 'Trilingual manuals, safety checklists and emergency response scenarios are delivered.',
                ps: 'درې ژبیز لارښودونه، د خوندیتوب چک‌لېسټونه او د بیړني غبرګون سناریوګانې سپارل کېږي.'
            }
        }
    ];

    const processStages = [
        {
            step: '01',
            title: {
                fa: 'تعریف نیاز و بازدید کارگاه',
                en: 'Requirement Capture & Site Survey',
                ps: 'اړتیا ټاکل او د ساحې سروي'
            },
            description: {
                fa: 'نیاز پروژه، ظرفیت تولید، شرایط زمین و دسترسی به انرژی بررسی و ثبت می‌شود.',
                en: 'We review project output targets, terrain conditions and utility availability before scoping.',
                ps: 'د پروژې هدف، د ځمکې حالت او د انرژۍ لاسرسی تر ارزونې وروسته ثبتېږي.'
            },
            bullets: [
                { fa: 'بازدید میدانی و برداشت ابعادی', en: 'On-site survey and dimensional take-off', ps: 'ساحوي سروي او د ابعادو اندازه اخیستل' },
                { fa: 'تحلیل ریسک ایمنی و لجستیک', en: 'Safety and logistics risk assessment', ps: 'د خوندیتوب او لوژستیک خطر شننه' }
            ]
        },
        {
            step: '02',
            title: {
                fa: 'طراحی و تایید راهکار',
                en: 'Solution Engineering & Approval',
                ps: 'د حل انجینري او تصویب'
            },
            description: {
                fa: 'چیدمان تجهیزات، فلوچارت فرآیند و پیشنهاد مالی برای تایید نهایی مشتری ارائه می‌شود.',
                en: 'We submit equipment layouts, process flow charts and commercial proposals for approval.',
                ps: 'موږ د تجهیزاتو ترتیب، د بهیر فلوچارتونه او مالي وړاندیزونه د تصویب لپاره وړاندې کوو.'
            },
            bullets: [
                { fa: 'ارائه نقشه‌های فونداسیون و زیرساخت', en: 'Provide foundation and infrastructure drawings', ps: 'د بنسټ او زیربنا نقشې وړاندې کول' },
                { fa: 'هماهنگی تامین مالی و برنامه پرداخت', en: 'Coordinate financing options and payment schedule', ps: 'د تمویل او د تادیاتو مهالویش همغږي' }
            ]
        },
        {
            step: '03',
            title: {
                fa: 'تولید، بازرسی و حمل',
                en: 'Manufacturing, Inspection & Logistics',
                ps: 'تولید، تفتیش او لوژستیک'
            },
            description: {
                fa: 'پیش از ارسال، تست عملکرد، کنترل کیفیت و بسته‌بندی مقاوم انجام می‌شود.',
                en: 'Before dispatch we run performance tests, QC checks and secure packaging.',
                ps: 'د لېږلو مخکې د فعالیت ازموینې، د کیفیت څارنه او خوندي بسته بندي ترسره کېږي.'
            },
            bullets: [
                { fa: 'گزارش QC و عکس‌های پیش از ارسال', en: 'QC reports and pre-shipment photos', ps: 'د QC راپورونه او د لېږلو مخکې انځورونه' },
                { fa: 'ترخیص گمرکی و بیمه حمل', en: 'Customs clearance and freight insurance', ps: 'ګمرکي تصفیه او د مالونو بیمه' }
            ]
        },
        {
            step: '04',
            title: {
                fa: 'نصب، آموزش و تحویل',
                en: 'Installation, Training & Handover',
                ps: 'نصب، روزنه او سپارنه'
            },
            description: {
                fa: 'تیم صنعتچی نصب، راه‌اندازی، آموزش اپراتور و تحویل رسمی پروژه را مدیریت می‌کند.',
                en: 'Sanaatchi commissions the equipment, trains operators and performs formal handover.',
                ps: 'صنعتچي تجهیزات نصب او فعالوي، اپریټران روزي او رسمي سپارنه کوي.'
            },
            bullets: [
                { fa: 'تحویل مستندات و دستورالعمل بهره‌برداری', en: 'Deliver manuals and operating procedures', ps: 'لارښودونه او د کار پروسیجرونه سپارل' },
                { fa: 'پشتیبانی پس از تحویل و تامین قطعات', en: 'After-sales support and spare supply', ps: 'د سپارلو وروسته ملاتړ او د پرزو برابرول' }
            ]
        }
    ];

    const categoryIcons = categories.reduce((acc, cat) => {
        acc[cat.id] = cat.icon;
        return acc;
    }, {});

    const itemIcons = {
        'block-molding': '🧱',
        'block-curing': '🌡️',
        'block-palletizing': '🪵',
        'asphalt-mixing': '⚗️',
        'asphalt-paving': '🚜',
        'asphalt-compacting': '🛞',
        'excavator': '🚧',
        'mini-excavator': '🏗️',
        'excavator-parts': '🔩',
        'crane': '🏗️',
        'tower-crane': '🗼',
        'crane-parts': '⚙️',
        'loader': '🚜',
        'wheel-loader': '🛠️',
        'loader-parts': '🔧',
        'cement': '🪨',
        'steel-rebar': '🔗',
        'sand-aggregate': '🏖️',
        'waterproofing': '💧',
        'steel-formwork': '🧱',
        'plastic-formwork': '🧊',
        'formwork-accessories': '🧰'
    };

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function setHero(lang) {
        const title = document.getElementById('constructionMaterialsHeroTitle');
        const subtitle = document.getElementById('constructionMaterialsHeroSubtitle');
        const quote = document.getElementById('constructionMaterialsHeroQuote');
        const cta = document.getElementById('viewConstructionMaterialsButton');

        if (title) {
            title.textContent = localise(content.hero.title, lang);
        }
        if (subtitle) {
            subtitle.textContent = localise(content.hero.subtitle, lang);
        }
        if (quote) {
            quote.textContent = localise(content.hero.quote, lang);
        }
        if (cta) {
            cta.textContent = localise(content.hero.secondaryCta, lang);
        }
    }

    function renderHighlights(lang) {
        const title = document.getElementById('constructionMaterialsHighlightsTitle');
        const subtitle = document.getElementById('constructionMaterialsHighlightsSubtitle');
        const grid = document.getElementById('constructionMaterialsHighlightsGrid');

        if (title) {
            title.textContent = localise(content.highlightsTitle, lang);
        }
        if (subtitle) {
            subtitle.textContent = localise(content.highlightsSubtitle, lang);
        }
        if (!grid) {
            return;
        }

        grid.innerHTML = '';
        highlights.forEach(item => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            card.innerHTML = `
                <span class="feature-icon">${item.icon}</span>
                <h3>${localise(item.title, lang)}</h3>
                <p>${localise(item.description, lang)}</p>
            `;
            grid.appendChild(card);
        });
    }

    function renderCategories(lang) {
        const title = document.getElementById('constructionMaterialsCategoriesTitle');
        const subtitle = document.getElementById('constructionMaterialsCategoriesSubtitle');
        const grid = document.getElementById('constructionMaterialsCategoriesGrid');

        if (title) {
            title.textContent = localise(content.categoriesTitle, lang);
        }
        if (subtitle) {
            subtitle.textContent = localise(content.categoriesSubtitle, lang);
        }
        if (!grid) {
            return;
        }

        grid.innerHTML = '';
        categories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.innerHTML = `
                <span class="icon">${category.icon}</span>
                <h4>${localise(category.title, lang)}</h4>
                <p>${localise(category.description, lang)}</p>
            `;
            card.addEventListener('click', () => scrollToInventoryCategory(category.id));
            card.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    scrollToInventoryCategory(category.id);
                }
            });
            grid.appendChild(card);
        });
    }

    function scrollToInventoryCategory(categoryId) {
        const target = document.querySelector(`[data-category="${categoryId}"]`);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const previousOutline = target.style.outline;
            target.style.outline = '2px solid var(--primary-color, #ff6f3c)';
            target.style.transition = 'outline 0.3s ease';
            setTimeout(() => {
                target.style.outline = previousOutline || '';
            }, 1200);
        }
    }

    function normaliseInventoryItem(item) {
        const pdfName = item.pdfUrl ? item.pdfUrl.split('/').pop().replace('.pdf', '') : '';
        const category = item.category || 'materials';
        return {
            category,
            name: item.name,
            description: item.description,
            pdfUrl: item.pdfUrl,
            icon: item.icon || itemIcons[pdfName] || categoryIcons[category] || '📄'
        };
    }

    const equipmentSource = typeof equipmentData !== 'undefined'
        ? equipmentData
        : (typeof window !== 'undefined' ? (window.equipmentData || {}) : {});

    const inventory = (Array.isArray(equipmentSource['construction-materials'])
        ? equipmentSource['construction-materials']
        : []).map(normaliseInventoryItem);

    function buildInventoryCardsHtml(items, lang) {
        if (!items || !items.length) {
            const emptyText = lang === 'fa'
                ? 'هیچ تجهیزی برای این دسته ثبت نشده است.'
                : (lang === 'ps' ? 'په دې ډله کې کوم تجهیزات نشته.' : 'No items are currently registered for this group.');
            return `<div class="no-equipment">${emptyText}</div>`;
        }

        const viewText = lang === 'fa' ? 'مشاهده PDF' : (lang === 'ps' ? 'PDF وګورئ' : 'View PDF');
        const downloadText = lang === 'fa' ? 'دانلود' : (lang === 'ps' ? 'ډاونلوډ' : 'Download');

        const cards = items.map(item => `
            <div class="equipment-card">
                <div class="equipment-icon">${item.icon || '📄'}</div>
                <h4>${localise(item.name, lang)}</h4>
                <p>${localise(item.description, lang)}</p>
                <div class="equipment-actions">
                    <a href="${item.pdfUrl}" target="_blank" class="btn-primary">
                        <i class="fas fa-file-pdf"></i> ${viewText}
                    </a>
                    <a href="${item.pdfUrl}" download class="btn-secondary">
                        <i class="fas fa-download"></i> ${downloadText}
                    </a>
                </div>
            </div>
        `).join('');

        return `<div class="equipment-grid">${cards}</div>`;
    }

    function renderInventory(lang) {
        const title = document.getElementById('constructionMaterialsInventoryTitle');
        const subtitle = document.getElementById('constructionMaterialsInventorySubtitle');
        const container = document.getElementById('constructionMaterialsInventoryGrid');

        if (title) {
            title.textContent = localise(content.inventoryTitle, lang);
        }
        if (subtitle) {
            subtitle.textContent = localise(content.inventorySubtitle, lang);
        }
        if (!container) {
            return;
        }

        if (inventory.length === 0) {
            const emptyText = lang === 'fa'
                ? 'برای این دسته‌بندی هنوز فایلی ثبت نشده است.'
                : lang === 'ps'
                    ? 'د دې کټګورۍ لپاره لا فایل ثبت شوی نه دی.'
                    : 'No datasheets have been registered for this category yet.';
            container.innerHTML = `<div class="no-equipment">${emptyText}</div>`;
            return;
        }

        const grouped = inventory.reduce((acc, item) => {
            const categoryId = item.category || 'materials';
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(item);
            return acc;
        }, {});

        const sectionsHtml = Object.keys(grouped).map(categoryId => {
            const categoryDetails = categories.find(cat => cat.id === categoryId);
            const titleText = categoryDetails ? localise(categoryDetails.title, lang) : '';
            const descriptionText = categoryDetails ? localise(categoryDetails.description, lang) : '';
            const descriptionMarkup = descriptionText ? `<p class="inventory-category-description">${descriptionText}</p>` : '';
            return `
                <section class="second-hand-inventory-category" data-category="${categoryId}">
                    <h4 class="inventory-category-title">${titleText}</h4>
                    ${descriptionMarkup}
                    ${buildInventoryCardsHtml(grouped[categoryId], lang)}
                </section>
            `;
        }).join('');

        container.innerHTML = `<div class="second-hand-inventory-modal">${sectionsHtml}</div>`;
    }

    function renderAssurance(lang) {
        const title = document.getElementById('constructionMaterialsAssuranceTitle');
        const subtitle = document.getElementById('constructionMaterialsAssuranceSubtitle');
        const grid = document.getElementById('constructionMaterialsAssuranceGrid');

        if (title) {
            title.textContent = localise(content.assuranceTitle, lang);
        }
        if (subtitle) {
            subtitle.textContent = localise(content.assuranceSubtitle, lang);
        }
        if (!grid) {
            return;
        }

        grid.innerHTML = '';
        assuranceHighlights.forEach(item => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            card.innerHTML = `
                <span class="feature-icon">${item.icon}</span>
                <h3>${localise(item.title, lang)}</h3>
                <p>${localise(item.description, lang)}</p>
            `;
            grid.appendChild(card);
        });
    }

    function renderProcess(lang) {
        const title = document.getElementById('constructionMaterialsProcessTitle');
        const subtitle = document.getElementById('constructionMaterialsProcessSubtitle');
        const grid = document.getElementById('constructionMaterialsProcessTimeline');

        if (title) {
            title.textContent = localise(content.processTitle, lang);
        }
        if (subtitle) {
            subtitle.textContent = localise(content.processSubtitle, lang);
        }
        if (!grid) {
            return;
        }

        grid.innerHTML = '';
        processStages.forEach(stage => {
            const card = document.createElement('div');
            card.className = 'process-card';
            const bulletsHtml = (stage.bullets || []).map(bullet => `<li>${localise(bullet, lang)}</li>`).join('');
            card.innerHTML = `
                <div class="process-step">${stage.step}</div>
                <h3>${localise(stage.title, lang)}</h3>
                <p>${localise(stage.description, lang)}</p>
                ${bulletsHtml ? `<ul>${bulletsHtml}</ul>` : ''}
            `;
            grid.appendChild(card);
        });
    }

    function updatePage() {
        const lang = getLanguage();
        setHero(lang);
        renderHighlights(lang);
        renderCategories(lang);
        renderInventory(lang);
        renderAssurance(lang);
        renderProcess(lang);
    }

    function setupInteractions() {
        const cta = document.getElementById('viewConstructionMaterialsButton');
        if (cta && !cta.dataset.boundScroll) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                const inventorySection = document.getElementById('construction-materials-inventory');
                if (inventorySection) {
                    inventorySection.scrollIntoView({ behavior: 'smooth' });
                }
            });
            cta.dataset.boundScroll = 'true';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updatePage();
        setupInteractions();
    });

    window.updateConstructionMaterialsPage = () => {
        updatePage();
        setupInteractions();
    };
})();
