(function() {
    const content = {
        hero: {
            title: {
                fa: 'پوشش کامل تایر برای ناوگان و ماشین‌آلات افغانستان',
                en: 'Comprehensive Tyre Coverage for Afghan Fleets & Machinery',
                ps: 'د افغانستان د ناوګانو او ماشینونو لپاره بشپړه ټایر پوښښ'
            },
            subtitle: {
                fa: 'تایر تریلر، کامیون، ماشین‌آلات سنگین، کشاورزی و صنعتی با خدمات نصب، توازن و گارانتی.',
                en: 'Trailer, truck, heavy equipment, agricultural and industrial tyres with installation, balancing and warranty support.',
                ps: 'د ټریلر، لاریو، درنو ماشینونو، کرنیزو او صنعتي وسایلو لپاره ټایرونه د نصب، بالانس او تضمین سره.'
            },
            quote: {
                fa: 'هر تایر با گزارش تولید، تست کیفیت، موجودی قطعات و برنامه تعویض دوره‌ای تحویل می‌شود.',
                en: 'Each tyre ships with production reports, quality tests, spare availability and a scheduled replacement plan.',
                ps: 'هر ټایر د تولید راپورونو، د کیفیت ازموینو، اضافي ذخیرې او د بدیل مهالویش سره رسیږي.'
            },
            secondaryCta: {
                fa: 'مشاهده موجودی تایر',
                en: 'View Tyre Inventory',
                ps: 'د ټایر موجودي وګورئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا تایر ناوگان را از صنعتچی تهیه کنیم؟',
            en: 'Why Source Fleet Tyres with Sanaatchi?',
            ps: 'ولې د ناوګان ټایر له صنعتچي څخه واخلئ؟'
        },
        highlightsSubtitle: {
            fa: 'از جاده تا معادن، تایرهای تخصصی با خدمات نصب، بالانس و برنامه نگهداری ارائه می‌کنیم.',
            en: 'From highways to mines, we deliver specialist tyres with installation, balancing and maintenance programmes.',
            ps: 'له لویو لارو تر کانونو پورې، موږ ځانګړي ټایرونه د نصب، بالانس او ساتنې پروګرامونو سره برابروو.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی تایر صنعتی',
            en: 'Core Industrial Tyre Groups',
            ps: 'د صنعتي ټایرونو بنسټیزې ډلې'
        },
        categoriesSubtitle: {
            fa: 'براساس نوع ناوگان یا ماشین‌آلات خود، ترکیب مناسب تایر و خدمات پشتیبانی را انتخاب کنید.',
            en: 'Choose the right tyre mix and support services for your fleet or machinery class.',
            ps: 'د خپل ناوګان یا ماشین ډول ته مناسب ټایرونه او ملاتړ خدمات وټاکئ.'
        },
        inventoryTitle: {
            fa: 'فایل‌های فنی تایر آماده دانلود',
            en: 'Downloadable Tyre Datasheets',
            ps: 'د ټایرونو د معلوماتو ډاونلوډ وړ فایلونه'
        },
        inventorySubtitle: {
            fa: 'جدول سایز، شاخص بار، سرعت و پیشنهاد تعویض برای هر تایر را بررسی کنید.',
            en: 'Review size charts, load and speed ratings plus replacement guidance for every tyre.',
            ps: 'د هر ټایر لپاره د اندازې جدولونه، د بار او سرعت درجه بندي او د بدیل سپارښتنې وګورئ.'
        },
        assuranceTitle: {
            fa: 'بسته خدمات نصب و نگهداری تایر',
            en: 'Tyre Installation & Maintenance Service Bundle',
            ps: 'د ټایر نصب او ساتنې خدماتو کڅوړه'
        },
        assuranceSubtitle: {
            fa: 'پشتیبانی کامل از انتخاب تا نصب و مانیتورینگ سایش با تیم میدانی صنعتچی.',
            en: 'Complete support from selection to fitting and wear monitoring by Sanaatchi field teams.',
            ps: 'له ټاکلو څخه تر نصب او د سايښ څارنې پورې بشپړ ملاتړ د صنعتچي د ساحوي ټیم له خوا.'
        },
        processTitle: {
            fa: 'روند تامین و نصب تایر',
            en: 'Tyre Supply & Fitment Roadmap',
            ps: 'د ټایر برابرولو او نصبولو بهیر'
        },
        processSubtitle: {
            fa: 'از ارزیابی ناوگان تا مانیتورینگ سایش و تامین دوره‌ای، همه مراحل توسط صنعتچی مدیریت می‌شود.',
            en: 'Sanaatchi manages every stage from fleet assessment to wear tracking and scheduled replenishment.',
            ps: 'صنعتچي له ناوګان ارزونې څخه تر سايښ څارنې او منظم ټایر برابرولو پورې ټول ګامونه سمبالوي.'
        }
    };

    const highlights = [
        {
            icon: '🛣️',
            title: {
                fa: 'ترکیب ویژه اقلیم افغانستان',
                en: 'Compounds Tuned for Afghan Climate',
                ps: 'د افغانستان اقلیم ته برابر مرکب'
            },
            description: {
                fa: 'ترکیبات مقاوم به گرما، سرما و سطوح خشن برای عمر مفید طولانی‌تر تایر.',
                en: 'Heat, cold and rough-surface resistant compounds deliver extended tyre life.',
                ps: 'د تودوخې، یخ او ناهموارو سطحو په وړاندې مقاوم مرکب د ټایر عمر اوږدوي.'
            }
        },
        {
            icon: '⚖️',
            title: {
                fa: 'خدمات بالانس و نصب در محل',
                en: 'On-Site Balancing & Fitment',
                ps: 'په ځای بالانس او نصب'
            },
            description: {
                fa: 'تیم‌های میدانی صنعتچی نصب، بالانس و تنظیم فشار را در سایت شما انجام می‌دهند.',
                en: 'Sanaatchi field crews handle mounting, balancing and pressure setup on your site.',
                ps: 'د صنعتچي ساحوي ډلې ستاسې په ځای کې نصب، بالانس او د فشار تنظیم برابروي.'
            }
        },
        {
            icon: '📊',
            title: {
                fa: 'گزارش‌گیری سایش و تحلیل هزینه',
                en: 'Wear Tracking & Cost Analytics',
                ps: 'د سايښ څارنه او د لګښت تحلیل'
            },
            description: {
                fa: 'کارنامه سایش، شاخص هزینه در کیلومتر و برنامه تعویض برای هر ناوگان ارائه می‌شود.',
                en: 'Wear logs, cost-per-kilometre indexes and replacement schedules are issued per fleet.',
                ps: 'د سايښ راپورونه، د هر کیلومتر لګښت شاخصونه او د بدیل مهالویش د ناوګان لپاره ورکول کېږي.'
            }
        },
        {
            icon: '🚚',
            title: {
                fa: 'تامین سریع و ذخیره اضطراری',
                en: 'Rapid Replenishment & Emergency Stock',
                ps: 'چټک اکمال او بیړنی ذخیره'
            },
            description: {
                fa: 'انبار استراتژیک در کابل و هماهنگی حمل فوری برای کاهش توقف ناوگان.',
                en: 'Strategic stock in Kabul with expedited freight coordination to minimise downtime.',
                ps: 'په کابل کې ستراتیژیک ذخیره او چټک ترانسپورت د ناوګان د تم کېدو مخه نیسي.'
            }
        }
    ];

    const categories = [
        {
            id: 'transportation-trailers',
            icon: '🚛',
            title: {
                fa: 'تایر تریلرهای باری',
                en: 'Transport Trailer Tyres',
                ps: 'د بار وړلو ټریلر ټایرونه'
            },
            description: {
                fa: 'سری تایرهای نیمه‌تریلر، مسطح، تانکری و کانتینربر با دیواره تقویت‌شده.',
                en: 'Semi-trailer, flatbed, tanker and container tyres with reinforced sidewalls.',
                ps: 'د نیمه ټریلر، فلیټ بیډ، ټانکر او کانتینر لپاره ټایرونه د پیاوړي اړخ دیوالونو سره.'
            }
        },
        {
            id: 'truck-bus',
            icon: '🚌',
            title: {
                fa: 'تایر کامیون و بس',
                en: 'Truck & Bus Tyres',
                ps: 'د لاریو او بسونو ټایرونه'
            },
            description: {
                fa: 'پروفیل‌های شهری و بین‌شهری با شاخص بار بالا و دیواره مقاوم.',
                en: 'Urban and intercity tread patterns with high load indices and durable casings.',
                ps: 'د ښار او ښارونو ترمنځ نقشونه د لوړ بار شاخص او قوي قشر سره.'
            }
        },
        {
            id: 'heavy-construction-machinery',
            icon: '🏗️',
            title: {
                fa: 'تایر ماشین‌آلات عمرانی سنگین',
                en: 'Heavy Construction Machinery Tyres',
                ps: 'د درنو ساختماني ماشینونو ټایرونه'
            },
            description: {
                fa: 'تایر لودر، بیل مکانیکی و جرثقیل با الگوهای ضد سایش و دیواره ضخیم.',
                en: 'Loader, excavator and crane tyres with anti-wear patterns and thick ply ratings.',
                ps: 'د لودر، اکساویټر او کرین لپاره ټایرونه د سايښ ضد نقش او غټو پرتونو سره.'
            }
        },
        {
            id: 'agricultural-machineries',
            icon: '🚜',
            title: {
                fa: 'تایر ماشین‌آلات کشاورزی',
                en: 'Agricultural Machinery Tyres',
                ps: 'د کرنې ماشینونو ټایرونه'
            },
            description: {
                fa: 'پروفیل‌های عمیق برای تراکتور، دروگر و سمپاش با چسبندگی بالا.',
                en: 'Deep lugs for tractors, harvesters and sprayers delivering superior traction.',
                ps: 'د ټرکټور، راټولونکي او سپرې کوونکي لپاره ژور ګامونه چې قوي نیونه برابروي.'
            }
        },
        {
            id: 'industrial-vehicles',
            icon: '🏭',
            title: {
                fa: 'تایر وسایل صنعتی و کارگاهی',
                en: 'Industrial & Yard Vehicle Tyres',
                ps: 'د صنعتي او انګړ وسایطو ټایرونه'
            },
            description: {
                fa: 'تایر لیفتراک، اسکید استیر و تله‌هندلر با ترکیبات ضدسوراخ.',
                en: 'Forklift, skid steer and telehandler tyres with puncture resistant compounds.',
                ps: 'د فورک لیفټ، سکیډ سټیر او ټیلهنډلر ټایرونه د سوري ضد مرکبونو سره.'
            }
        }
    ];

    const defaultInventory = [
        {
            name: { fa: 'تایر نیمه تریلر', en: 'Semi-Trailer Tyre', ps: 'نیمه ټریلر ټایر' },
            description: { fa: 'شاخص بار بالا و طراحی برای محورهای محرک و یدک برای مسیرهای طولانی.', en: 'High load index casing engineered for drive and trailer axles on long-haul routes.', ps: 'لوړ بار شاخص لرونکی قشر د اوږده سفر لپاره د محرک او ټریلر اکسلو لپاره.' },
            pdfUrl: 'pdfs/tires/transportation-trailers/semi-trailer-tire.pdf',
            category: 'transportation-trailers'
        },
        {
            name: { fa: 'تایر تریلر مسطح', en: 'Flatbed Trailer Tyre', ps: 'مسحه ټریلر ټایر' },
            description: { fa: 'الگوی آج مقاوم در برابر بریدگی با شانه تقویت‌شده برای حمل بار فولادی و کانتینری.', en: 'Cut-resistant tread with reinforced shoulders for steel and container haulage.', ps: 'د پرې کېدو ضد نقش د پیاوړو اوږو سره د فولادو او کانتینر بار لپاره.' },
            pdfUrl: 'pdfs/tires/transportation-trailers/flatbed-trailer-tire.pdf',
            category: 'transportation-trailers'
        },
        {
            name: { fa: 'تایر تریلر تانکر', en: 'Tanker Trailer Tyre', ps: 'تانکر ټریلر ټایر' },
            description: { fa: 'دیواره تقویت‌شده و ترکیب ضد لغزش برای حمل مایعات و مواد خطرناک.', en: 'Reinforced casing and anti-slip compound for liquid and hazardous freight.', ps: 'پیاوړی قشر او د خطا ضد مرکب د مایعاتو او خطرناکو بارونو لپاره.' },
            pdfUrl: 'pdfs/tires/transportation-trailers/tanker-trailer-tire.pdf',
            category: 'transportation-trailers'
        },
        {
            name: { fa: 'تایر تریلر کانتینر', en: 'Container Trailer Tyre', ps: 'کانتینر ټریلر ټایر' },
            description: { fa: 'پروفیل ویژه پیچ و خم با دیواره جانبی مقاوم برای حمل کانتینر ۲۰ و ۴۰ فوت.', en: 'Twist-resistant profile with strong sidewalls for 20ft and 40ft container haulage.', ps: 'د تاو پر وړاندې مقاومت لرونکی نقش د قوي اړخونو سره د ۲۰ او ۴۰ فوټ کانتینر لپاره.' },
            pdfUrl: 'pdfs/tires/transportation-trailers/container-trailer-tire.pdf',
            category: 'transportation-trailers'
        },
        {
            name: { fa: 'تایر کامیون سنگین', en: 'Heavy-Duty Truck Tyre', ps: 'دروند کامیون ټایر' },
            description: { fa: 'آج عمقی با ترکیب مقاوم در برابر حرارت و دیواره چندلایه برای بارهای سنگین.', en: 'Deep lug tread with heat-resistant compound and multi-ply casing for heavy loads.', ps: 'ژور نقش د تودوخې ضد مرکب او څو پرت قشر سره د درنو بارونو لپاره.' },
            pdfUrl: 'pdfs/tires/truck-bus/heavy-duty-truck-tire.pdf',
            category: 'truck-bus'
        },
        {
            name: { fa: 'تایر کامیون سبک', en: 'Light Truck Tyre', ps: 'سپک کامیون ټایر' },
            description: { fa: 'آج چندمنظوره شهری با مقاومت بالا در برابر سوراخ شدن.', en: 'Multi-purpose urban tread delivering high puncture resistance.', ps: 'چندګونې ښاري نقش چې لوړ د سوري ضد وړتیا لري.' },
            pdfUrl: 'pdfs/tires/truck-bus/light-truck-tire.pdf',
            category: 'truck-bus'
        },
        {
            name: { fa: 'تایر اتوبوس', en: 'Bus Tyre', ps: 'بس ټایر' },
            description: { fa: 'شانه سرد با نویز پایین و دیواره تقویت‌شده برای خطوط مسافری.', en: 'Cool running shoulder, low noise and reinforced casing for passenger routes.', ps: 'سړه اوږه، کم شور او پیاوړی قشر د مسافر وړونکو کرښو لپاره.' },
            pdfUrl: 'pdfs/tires/truck-bus/bus-tire.pdf',
            category: 'truck-bus'
        },
        {
            name: { fa: 'تایر بیل مکانیکی', en: 'Excavator Tyre', ps: 'بیل مکانیکی ټایر' },
            description: { fa: 'آج بلوکی با ترکیب ضد پارگی و دیواره ضخیم برای سایت‌های معدنی.', en: 'Block tread with tear-resistant compound and thick sidewalls for mining sites.', ps: 'بلوکي نقش د څیرې ضد مرکب او غټ اړخونو سره د کانونو ساحو لپاره.' },
            pdfUrl: 'pdfs/tires/heavy-construction-machinery/excavator-tire.pdf',
            category: 'heavy-construction-machinery'
        },
        {
            name: { fa: 'تایر لودر', en: 'Loader Tyre', ps: 'لودر ټایر' },
            description: { fa: 'الگوی L-5 با عمق زیاد و مقاومت در برابر سایش برای باربرداری سنگین.', en: 'Deep L-5 pattern delivering extreme wear resistance for heavy loading.', ps: 'ژور L-5 نقش چې د درنو پورته کولو لپاره لوړ سايښ ضد وړتیا لري.' },
            pdfUrl: 'pdfs/tires/heavy-construction-machinery/loader-tire.pdf',
            category: 'heavy-construction-machinery'
        },
        {
            name: { fa: 'تایر جرثقیل', en: 'Crane Tyre', ps: 'جرثقیل ټایر' },
            description: { fa: 'پروفیل صاف با ساختار مقاوم جانبی برای پایداری در حین بلند کردن بار.', en: 'Smooth tread with reinforced side structure for stability during lifts.', ps: 'هوار نقش د پیاوړي اړخ جوړښت سره د پورته کولو پر مهال ثبات لپاره.' },
            pdfUrl: 'pdfs/tires/heavy-construction-machinery/crane-tire.pdf',
            category: 'heavy-construction-machinery'
        },
        {
            name: { fa: 'تایر تراکتور', en: 'Tractor Tyre', ps: 'ټرکټر ټایر' },
            description: { fa: 'آج عمیق V شکل با چسبندگی بالا برای خاک نرم و زمین‌های کشاورزی.', en: 'Deep V-lug delivering high traction on soft soil and farmland.', ps: 'ژور V نقش چې په نرمه خاوره او کرنیزه ځمکه کې لوړه نیونه برابروي.' },
            pdfUrl: 'pdfs/tires/agricultural-machineries/tractor-tire.pdf',
            category: 'agricultural-machineries'
        },
        {
            name: { fa: 'تایر دروگر', en: 'Harvester Tyre', ps: 'دروګر ټایر' },
            description: { fa: 'پروفیل مخصوص وزن توزیع شده و دیواره تقویت‌شده برای جلوگیری از فشردگی خاک.', en: 'Special profile spreading load with reinforced carcass to limit soil compaction.', ps: 'ځانګړی نقش چې وزن وېشي او پیاوړی قشر د خاورې د فشار مخه نیسي.' },
            pdfUrl: 'pdfs/tires/agricultural-machineries/harvester-tire.pdf',
            category: 'agricultural-machineries'
        },
        {
            name: { fa: 'تایر سمپاش', en: 'Sprayer Tyre', ps: 'سمپاش ټایر' },
            description: { fa: 'ردیف باریک با مقاومت شیمیایی بالا و فشار زمین کم برای ماشین‌های سمپاش.', en: 'Narrow row tyre with high chemical resistance and low ground pressure for sprayers.', ps: 'تنګ قطار ټایر د کیمیاوي مقاومت او د ځمکې ټیټ فشار سره د سپرې ماشینونو لپاره.' },
            pdfUrl: 'pdfs/tires/agricultural-machineries/sprayer-tire.pdf',
            category: 'agricultural-machineries'
        },
        {
            name: { fa: 'تایر لیفتراک', en: 'Forklift Tyre', ps: 'لیفتراک ټایر' },
            description: { fa: 'ترکیب ضدسوراخ با دیواره مستحکم برای عملیات انبار و محوطه صنعتی.', en: 'Puncture-resistant compound with sturdy sidewalls for warehouse and yard work.', ps: 'سوري ضد مرکب د قوي اړخونو سره د ګودام او صنعتي انګړ لپاره.' },
            pdfUrl: 'pdfs/tires/industrial-vehicles/forklift-tire.pdf',
            category: 'industrial-vehicles'
        },
        {
            name: { fa: 'تایر اسکید استیر', en: 'Skid Steer Tyre', ps: 'اسکيد استیر ټایر' },
            description: { fa: 'آج تهاجمی و ترکیب مقاوم در برابر بریدگی برای محوطه‌های ساختمانی.', en: 'Aggressive tread with cut-resistant compound for construction yards.', ps: 'تیز نقش د پرې کېدو ضد مرکب سره د ساختماني انګړ لپاره.' },
            pdfUrl: 'pdfs/tires/industrial-vehicles/skid-steer-tire.pdf',
            category: 'industrial-vehicles'
        },
        {
            name: { fa: 'تایر تلهندلر', en: 'Telehandler Tyre', ps: 'تلهندلر ټایر' },
            description: { fa: 'آج چندمنظوره و دیواره مستحکم برای کار در ارتفاع و محیط‌های ناهموار.', en: 'Multi-purpose tread with strong carcass for elevated and uneven terrain work.', ps: 'چند مهار نقش د قوي قشر سره د لوړوالي او ناهموارو ځایونو لپاره.' },
            pdfUrl: 'pdfs/tires/industrial-vehicles/telehandler-tire.pdf',
            category: 'industrial-vehicles'
        }
    ];

    const assurance = [
        {
            icon: '🧰',
            title: {
                fa: 'کیت نصب و ابزار کامل',
                en: 'Complete Fitment Toolkits',
                ps: 'د نصب بشپړ کټونه'
            },
            description: {
                fa: 'جک‌های هیدرولیک، بکس ابزار و تجهیزات بالانس در هر پروژه تحویل می‌شود.',
                en: 'Hydraulic jacks, tool chests and balancing equipment supplied with every project.',
                ps: 'هایډرولیک جکونه، د وسایلو بکسونه او د بالانس تجهیزات د هر پروژې سره سپارل کېږي.'
            }
        },
        {
            icon: '📝',
            title: {
                fa: 'گزارش بازرسی و گارانتی',
                en: 'Inspection Reports & Warranty',
                ps: 'د تفتیش راپورونه او تضمین'
            },
            description: {
                fa: 'گزارش اولیه نصب، کارت گارانتی و برنامه بازرسی دوره‌ای ارائه می‌گردد.',
                en: 'Initial fitting reports, warranty cards and scheduled inspection plans are issued.',
                ps: 'لومړني د نصب راپورونه، تضمین کارتونه او منظم تفتیش پلانونه وړاندې کېږي.'
            }
        },
        {
            icon: '🚨',
            title: {
                fa: 'پشتیبانی اضطراری جاده‌ای',
                en: 'Emergency Roadside Support',
                ps: 'بیړنی سړک ملاتړ'
            },
            description: {
                fa: 'هماهنگی تعویض تایر در جاده و تامین فوری تایر یدکی در مواقع بحرانی.',
                en: 'Coordinated roadside replacements and rapid spare provisioning during incidents.',
                ps: 'په پیښو کې منظم د سړک پر سر بدیل او چټک اضافي ټایر برابرول.'
            }
        },
        {
            icon: '📦',
            title: {
                fa: 'مدیریت موجودی و انبار',
                en: 'Inventory & Storage Management',
                ps: 'د موجودي او ګدام مدیریت'
            },
            description: {
                fa: 'ردیابی موجودی تایر، انبارگردانی و برنامه‌ریزی تامین ماهانه بر اساس مصرف.',
                en: 'Tyre stock tracking, warehousing and monthly replenishment planning by usage.',
                ps: 'د ټایر موجودي څارنه، ګدامداري او د استعمال له مخې میاشتنی اکمال پلان.'
            }
        }
    ];

    const processSteps = [
        {
            step: '01',
            title: {
                fa: 'ارزیابی ناوگان و شرایط مسیر',
                en: 'Fleet & Route Assessment',
                ps: 'د ناوګان او لارې ارزونه'
            },
            description: {
                fa: 'نوع عملیات، وزن محورها، شرایط جاده و روش‌های نگهداری فعلی بررسی می‌شود.',
                en: 'We audit operations, axle loads, road conditions and current maintenance practices.',
                ps: 'د عملیاتو ډول، د اکسلو وزن، د لارې شرایط او اوسني د ساتنې کړنلارې ارزول کېږي.'
            },
            bullets: [
                { fa: 'بازدید میدانی و جمع‌آوری داده‌های سایش موجود', en: 'On-site survey capturing existing wear data', ps: 'میداني سروې او د اوسني سايښ معلومات راټولول' },
                { fa: 'تحلیل الگوی مصرف و بررسی موجودی فعلی', en: 'Analyse consumption patterns and current stock', ps: 'د مصرف نقش او اوسني موجودي تحلیل' }
            ]
        },
        {
            step: '02',
            title: {
                fa: 'انتخاب ترکیب تایر و خدمات',
                en: 'Tyre Mix & Service Proposal',
                ps: 'د ټایر ترکیب او خدماتو وړاندیز'
            },
            description: {
                fa: 'ترکیب تایر پیشنهادی، برنامه نصب، بالانس و پشتیبانی دوره‌ای تدوین می‌شود.',
                en: 'We prepare tyre mix recommendations plus installation, balancing and support schedules.',
                ps: 'د ټایر ترکیب سپارښتنې او د نصب، بالانس او ملاتړ مهالویش چمتو کوو.'
            },
            bullets: [
                { fa: 'ارائه جدول مشخصات فنی و شاخص بار هر تایر', en: 'Provide technical matrix and load index per tyre', ps: 'د تخنیکي جدول او د هر ټایر د بار شاخص وړاندې کول' },
                { fa: 'هماهنگی قرارداد خدمات پس از فروش و گارانتی', en: 'Align after-sales service and warranty terms', ps: 'د پلور وروسته خدمت او تضمین شرطونه همغږي کول' }
            ]
        },
        {
            step: '03',
            title: {
                fa: 'تامین، حمل و نصب در محل',
                en: 'Supply, Logistics & On-Site Fitment',
                ps: 'برابرول، لوژستیک او په ځای نصب'
            },
            description: {
                fa: 'تایرها تامین و به سایت ارسال شده و تیم نصب صنعتچی عملیات را انجام می‌دهد.',
                en: 'Tyres are sourced, shipped to site and fitted by Sanaatchi installation teams.',
                ps: 'ټایرونه برابر، سایټ ته لېږدول او د صنعتچي د نصب ټیم له خوا لګول کېږي.'
            },
            bullets: [
                { fa: 'بالانس، تنظیم فشار و ثبت سریال هر تایر', en: 'Balancing, pressure setup and serial registration', ps: 'بالانس، د فشار تنظیم او د هر ټایر سریال ثبت' },
                { fa: 'تحویل ابزار و آموزش تیم عملیاتی', en: 'Deliver toolkits and train operations team', ps: 'د وسایلو کټ سپارل او د عملیاتو ټیم روزل' }
            ]
        },
        {
            step: '04',
            title: {
                fa: 'پایش سایش و تامین دوره‌ای',
                en: 'Wear Monitoring & Scheduled Replenishment',
                ps: 'د سايښ څارنه او منظم اکمال'
            },
            description: {
                fa: 'بازدیدهای دوره‌ای، گزارش سایش و برنامه تامین ماهانه برای ناوگان اجرا می‌شود.',
                en: 'Periodic inspections, wear reporting and monthly replenishment plans are executed.',
                ps: 'منظم معاینات، د سايښ راپورونه او میاشتني اکمال پلانونه عملي کېږي.'
            },
            bullets: [
                { fa: 'به‌روزرسانی موجودی انبار و سفارش‌گذاری خودکار', en: 'Update warehouse stock and automate ordering', ps: 'د ګدام موجودي تازه کول او د امر اتومات کول' },
                { fa: 'پشتیبانی ۲۴/۷ برای حوادث و توقف ناگهانی', en: '24/7 assistance for incidents and breakdowns', ps: '۲۴/۷ ملاتړ د پیښو او ناڅاپي تم لپاره' }
            ]
        }
    ];

    const categoryIcons = categories.reduce((acc, category) => {
        acc[category.id] = category.icon;
        return acc;
    }, {});

    const itemIcons = {
        'semi-trailer-tire': '🚛',
        'flatbed-trailer-tire': '📦',
        'tanker-trailer-tire': '🛢️',
        'container-trailer-tire': '🧱',
        'heavy-duty-truck-tire': '🚚',
        'light-truck-tire': '🚛',
        'bus-tire': '🚌',
        'excavator-tire': '⛏️',
        'loader-tire': '🏗️',
        'crane-tire': '🏗️',
        'tractor-tire': '🚜',
        'harvester-tire': '🌾',
        'sprayer-tire': '💧',
        'forklift-tire': '🏭',
        'skid-steer-tire': '🏗️',
        'telehandler-tire': '🏗️'
    };

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function setHero(lang) {
        const title = document.getElementById('tiresHeroTitle');
        const subtitle = document.getElementById('tiresHeroSubtitle');
        const quote = document.getElementById('tiresHeroQuote');
        const cta = document.getElementById('viewTiresInventoryButton');

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
        const title = document.getElementById('tiresHighlightsTitle');
        const subtitle = document.getElementById('tiresHighlightsSubtitle');
        const grid = document.getElementById('tiresHighlightsGrid');

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
        const title = document.getElementById('tiresCategoriesTitle');
        const subtitle = document.getElementById('tiresCategoriesSubtitle');
        const grid = document.getElementById('tiresCategoriesGrid');

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
            const titleText = localise(category.title, lang);
            const descriptionText = localise(category.description, lang);
            const detailText = lang === 'fa' ? 'مشاهده جزئیات' : (lang === 'ps' ? 'جزییات وګورئ' : 'View Details');
            const detailLabel = lang === 'fa'
                ? `مشاهده جزئیات ${titleText}`
                : (lang === 'ps' ? `د ${titleText} جزییات وګورئ` : `View details for ${titleText}`);

            card.innerHTML = `
                <span class="icon">${category.icon}</span>
                <h4>${titleText}</h4>
                <p>${descriptionText}</p>
                <div class="category-card-actions">
                    <a class="category-card-link" href="#" role="button" aria-label="${detailLabel}">
                        <span>${detailText}</span>
                        <i class="fas fa-arrow-left"></i>
                    </a>
                </div>
            `;

            const openModal = () => showTiresCategoryModal(category.id, lang);

            card.addEventListener('click', openModal);
            card.addEventListener('keypress', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openModal();
                }
            });

            const link = card.querySelector('.category-card-link');
            if (link) {
                const handleInteraction = event => {
                    event.preventDefault();
                    event.stopPropagation();
                    openModal();
                };
                link.addEventListener('click', handleInteraction);
                link.addEventListener('keypress', event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        handleInteraction(event);
                    }
                });
            }

            grid.appendChild(card);
        });
    }

    function normaliseInventoryItem(item) {
        const pdfName = item.pdfUrl ? item.pdfUrl.split('/').pop().replace('.pdf', '') : '';
        const category = item.category || 'transportation-trailers';
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

    const globalInventory = Array.isArray(equipmentSource.tires)
        ? equipmentSource.tires
        : (typeof window !== 'undefined' && Array.isArray(window.tiresInventory)
            ? window.tiresInventory
            : []);

    const inventory = (globalInventory.length ? globalInventory : defaultInventory)
        .map(normaliseInventoryItem);

    if (typeof window !== 'undefined') {
        window.tiresInventory = inventory;
    }

    function buildInventoryCardsHtml(items, lang) {
        if (!items || !items.length) {
            const emptyText = lang === 'fa'
                ? 'هیچ تایری برای این دسته ثبت نشده است.'
                : (lang === 'ps' ? 'په دې ډله کې کوم ټایر نشته.' : 'No tyres are currently registered for this group.');
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
        const title = document.getElementById('tiresInventoryTitle');
        const subtitle = document.getElementById('tiresInventorySubtitle');
        const grid = document.getElementById('tiresInventoryGrid');

        if (title) {
            title.textContent = localise(content.inventoryTitle, lang);
        }
        if (subtitle) {
            subtitle.textContent = localise(content.inventorySubtitle, lang);
        }
        if (!grid) {
            return;
        }

        grid.innerHTML = buildInventoryCardsHtml(inventory, lang);
    }

    function renderAssurance(lang) {
        const title = document.getElementById('tiresAssuranceTitle');
        const subtitle = document.getElementById('tiresAssuranceSubtitle');
        const grid = document.getElementById('tiresAssuranceGrid');

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
        assurance.forEach(item => {
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
        const title = document.getElementById('tiresProcessTitle');
        const subtitle = document.getElementById('tiresProcessSubtitle');
        const grid = document.getElementById('tiresProcessTimeline');

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
        processSteps.forEach(step => {
            const card = document.createElement('div');
            card.className = 'process-card';
            const bulletsHtml = (step.bullets || []).map(item => `<li>${localise(item, lang)}</li>`).join('');

            card.innerHTML = `
                <div class="process-step">${step.step}</div>
                <h3>${localise(step.title, lang)}</h3>
                <p>${localise(step.description, lang)}</p>
                ${bulletsHtml ? `<ul>${bulletsHtml}</ul>` : ''}
            `;
            grid.appendChild(card);
        });
    }

    function showTiresCategoryModal(categoryId, lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');
        const category = categories.find(entry => entry.id === categoryId);
        const items = inventory.filter(item => item.category === categoryId);

        if (!modal || !modalContent || !category) {
            return;
        }

        const title = localise(category.title, lang);
        const backText = lang === 'fa' ? 'بازگشت' : (lang === 'ps' ? 'بېرته' : 'Back');
        const cardsHtml = buildInventoryCardsHtml(items, lang);

        modalContent.innerHTML = `
            <div class="equipment-modal-header">
                <button class="back-btn" onclick="closeEquipmentModal()">${backText}</button>
                <h3>${title}</h3>
            </div>
            ${cardsHtml}
        `;

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }

    function showTiresInventoryModal(lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');

        if (!modal || !modalContent) {
            return;
        }

        const backText = lang === 'fa' ? 'بازگشت' : (lang === 'ps' ? 'بېرته' : 'Back');
        const sectionTitle = localise(content.inventoryTitle, lang);

        const sectionsHtml = categories.map(category => {
            const items = inventory.filter(item => item.category === category.id);
            const categoryTitle = `${category.icon} ${localise(category.title, lang)}`;
            const description = localise(category.description, lang);
            const descriptionMarkup = description ? `<p class="inventory-category-description">${description}</p>` : '';
            return `
                <section class="second-hand-inventory-category">
                    <h4 class="inventory-category-title">${categoryTitle}</h4>
                    ${descriptionMarkup}
                    ${buildInventoryCardsHtml(items, lang)}
                </section>
            `;
        }).join('');

        modalContent.innerHTML = `
            <div class="equipment-modal-header">
                <button class="back-btn" onclick="closeEquipmentModal()">${backText}</button>
                <h3>${sectionTitle}</h3>
            </div>
            ${sectionsHtml}
        `;

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
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
        const cta = document.getElementById('viewTiresInventoryButton');
        if (cta && !cta.dataset.boundModal) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showTiresInventoryModal(getLanguage());
            });
            cta.dataset.boundModal = 'true';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updatePage();
        setupInteractions();
    });

    window.updateTiresPage = () => {
        updatePage();
        setupInteractions();
    };

    window.showTiresCategoryModal = showTiresCategoryModal;
    window.showTiresInventoryModal = showTiresInventoryModal;
})();
