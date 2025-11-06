(function() {
    const content = {
        hero: {
            title: {
                fa: 'ناوگان حمل‌ونقل صنعتی آماده تحویل',
                en: 'Industrial Transport Fleet Ready for Deployment',
                ps: 'صنعتي د ترانسپورت ناوګان چې د سپارلو لپاره چمتو دی'
            },
            subtitle: {
                fa: 'تریلر، کامیون و لیفتراک‌های تخصصی با خدمات ترخیص، نصب و آموزش برای عملیات لجستیک افغانستان.',
                en: 'Specialised trailers, trucks and forklifts with customs clearance, installation and training for Afghan logistics.',
                ps: 'د افغانستان د لوژستیک لپاره ځانګړي ټریلرونه، لارۍ او فورک لیفټونه د ګمرکي تصفیې، نصب او روزنې سره.'
            },
            quote: {
                fa: 'هر تجهیز با ارزیابی فنی، قطعات یدکی بحرانی و برنامه تحویل درب انبار شما ارسال می‌شود.',
                en: 'Every unit ships with technical inspection, critical spares and a delivery schedule to your warehouse door.',
                ps: 'هره وسیله د تخنیکي تفتیش، مهمو اضافي پرزو او ستاسو تر ګدامه د سپارلو مهالویش سره لېږل کېږي.'
            },
            secondaryCta: {
                fa: 'مشاهده ناوگان حمل‌ونقل',
                en: 'View Transportation Fleet',
                ps: 'د ترانسپورتي ناوګان وګورئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا ناوگان حمل‌ونقل را از صنعتچی تامین کنیم؟',
            en: 'Why Source Your Transport Fleet with Sanaatchi?',
            ps: 'ولې خپله د ترانسپورتي ناوګان لپاره صنعتچي غوره کړئ؟'
        },
        highlightsSubtitle: {
            fa: 'انتخاب ناوگان جاده‌ای با پشتیبانی فنی، لجستیک فرامرزی و آموزش بهره‌برداری به زبان‌های محلی.',
            en: 'Road fleets delivered with engineering support, cross-border logistics and operator training in local languages.',
            ps: 'د سړک ناوګان د انجینري ملاتړ، سرحدي لوژستیک او په محلي ژبو د کارکوونکو روزنې سره برابروو.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی ناوگان حمل‌ونقل',
            en: 'Core Transportation Fleet Groups',
            ps: 'د ترانسپورت د ناوګانو بنسټیزې ډلې'
        },
        categoriesSubtitle: {
            fa: 'بر اساس نوع عملیات خود، تریلر، کامیون یا لیفتراک مناسب را انتخاب کنید.',
            en: 'Select the trailer, truck or forklift package that matches your operating profile.',
            ps: 'د خپل عملیاتو له مخې مناسب ټریلر، لارۍ او فورک لیفټ وټاکئ.'
        },
        inventoryTitle: {
            fa: 'فایل‌های فنی آماده دانلود',
            en: 'Downloadable Technical Datasheets',
            ps: 'د ډاونلوډ لپاره تخنیکي معلومات'
        },
        inventorySubtitle: {
            fa: 'مشخصات فنی هر ناوگان را بررسی کنید و فایل PDF سه‌زبانه را دریافت نمایید.',
            en: 'Review the specifications of each fleet asset and download the trilingual PDF.',
            ps: 'د هر ناوګان ځانګړتیاوې وګورئ او درې ژبني PDF فایل ترلاسه کړئ.'
        },
        assuranceTitle: {
            fa: 'بسته خدمات لجستیک و بهره‌برداری',
            en: 'Logistics & Operations Support Bundle',
            ps: 'د لوژستیک او عملیاتو ملاتړ کڅوړه'
        },
        assuranceSubtitle: {
            fa: 'پشتیبانی از خرید تا بهره‌برداری شامل بیمه، قطعات یدکی و آموزش راننده.',
            en: 'Support from procurement to operations covering insurance, spares and driver coaching.',
            ps: 'له پیرود څخه تر کارونې پورې ملاتړ چې بیمه، پرزې او د موټروان روزنه پکې شامله ده.'
        },
        processTitle: {
            fa: 'روند تامین ناوگان حمل‌ونقل',
            en: 'Transportation Fleet Delivery Roadmap',
            ps: 'د ترانسپورتي ناوګان د سپارلو نقشه'
        },
        processSubtitle: {
            fa: 'از انتخاب پیکربندی تا تحویل در مقصد و آموزش تیم شما، همه مراحل توسط صنعتچی مدیریت می‌شود.',
            en: 'Sanaatchi handles every stage from configuration selection to destination handover and team training.',
            ps: 'صنعتچي له پیکر جوړولو څخه تر وروستۍ سپارلو او د ټیم روزنې پورې ټول ګامونه پرمخ وړي.'
        }
    };

    const highlights = [
        {
            icon: '🧭',
            title: {
                fa: 'پیکربندی متناسب با ماموریت',
                en: 'Mission-Specific Configuration',
                ps: 'د ماموریت له مخې ترتیب'
            },
            description: {
                fa: 'محور، سیستم تعلیق و تجهیزات کمکی براساس مسیرهای افغانستان طراحی و تجهیز می‌شود.',
                en: 'Axles, suspension and auxiliary kits are engineered around Afghanistan’s routes and cargo demands.',
                ps: 'محورونه، تعلیق او مرسته کوونکي وسایل د افغانستان د لارو او بار اړتیاوو ته برابرېږي.'
            }
        },
        {
            icon: '🛡️',
            title: {
                fa: 'استانداردهای ایمنی و مدارک کامل',
                en: 'Safety Standards & Complete Dossier',
                ps: 'د خوندیتوب معیارونه او بشپړ اسناد'
            },
            description: {
                fa: 'گزارش بازرسی فنی، مدارک ترخیص و لیست قطعات حساس قبل از ارسال تحویل می‌گردد.',
                en: 'Technical inspection reports, customs paperwork and critical spare lists are issued before dispatch.',
                ps: 'د تخنیکي تفتیش راپورونه، د ګمرکي اسناد او د مهمو پرزو لست د لېږلو نه وړاندې وړاندې کېږي.'
            }
        },
        {
            icon: '🚚',
            title: {
                fa: 'لجستیک فرامرزی یکپارچه',
                en: 'Integrated Cross-Border Logistics',
                ps: 'یوځای سرحدي لوژستیک'
            },
            description: {
                fa: 'از رزرو کشتی و کامیون تا بیمه، ترخیص مرزی و تحویل در مقصد را مدیریت می‌کنیم.',
                en: 'We coordinate ocean and road freight, insurance, border clearance and final delivery.',
                ps: 'موږ سمندري او ځمکني بار، بیمه، سرحدي تصفیه او وروستۍ سپارنه همغږي کوو.'
            }
        },
        {
            icon: '🎓',
            title: {
                fa: 'آموزش راننده و تیم تعمیرات',
                en: 'Driver & Maintenance Training',
                ps: 'د موټروان او ساتنې روزنه'
            },
            description: {
                fa: 'دوره‌های ایمنی، بهره‌برداری و برنامه نگهداری به زبان فارسی، انگلیسی و پشتو ارائه می‌شود.',
                en: 'Safety, operation and maintenance programmes delivered in Dari, English and Pashto.',
                ps: 'د خوندیتوب، کارونې او ساتنې پروګرامونه په دري، انګلیسي او پښتو کې وړاندې کېږي.'
            }
        }
    ];

    const categories = [
        {
            id: 'trailers',
            icon: '🚛',
            title: {
                fa: 'تریلرهای تخصصی حمل بار',
                en: 'Specialised Cargo Trailers',
                ps: 'د بار وړلو ځانګړي ټریلرونه'
            },
            description: {
                fa: 'انواع تریلر مسطح، کم‌ارتفاع، کانتینربر، تانکر و یخچالدار برای مسیرهای طولانی.',
                en: 'Flatbed, lowbed, container, tanker and refrigerated trailers built for long-haul routes.',
                ps: 'فلیټ بیډ، ټیټ، کانتینر، ټانکر او یخچال لرونکي ټریلرونه د اوږده سفر لپاره.'
            }
        },
        {
            id: 'trucks',
            icon: '🚚',
            title: {
                fa: 'کامیون‌های عملیاتی',
                en: 'Operational Truck Platforms',
                ps: 'د عملیاتو لپاره لارۍ'
            },
            description: {
                fa: 'کامیون دامپر، بارکش و یدک‌کش آماده کار با ضمانت قطعات و سرویس.',
                en: 'Dump, cargo and tow trucks supplied ready for duty with spare and service backing.',
                ps: 'ډمپر، بار وړونکې او د کشولو لارۍ د پرزو او خدمتونو ضمانت سره چمتو دي.'
            }
        },
        {
            id: 'forklifts',
            icon: '🏗️',
            title: {
                fa: 'لیفتراک و تجهیزات انبارداری',
                en: 'Forklifts & Warehouse Handling',
                ps: 'فورک لیفټونه او د ګودام تجهیزات'
            },
            description: {
                fa: 'لیفتراک برقی، دیزلی و آفرود برای پایانه‌های بندری و انبارهای صنعتی.',
                en: 'Electric, diesel and rough-terrain forklifts for port terminals and industrial depots.',
                ps: 'برقي، ډیزلي او ناهموار ځمکې فورک لیفټونه د بندري ټرمنلونو او صنعتي ګودامونو لپاره.'
            }
        }
    ];

    const defaultInventory = [
        {
            name: {
                fa: 'تریلر مسطح',
                en: 'Flatbed Trailer',
                ps: 'مسحه ټریلر'
            },
            description: {
                fa: 'کفی تقویت‌شده با قفل کانتینر و تسمه‌بند برای حمل بار عمومی و سازه‌ای.',
                en: 'Reinforced deck with container locks and tie-down gear for general cargo and steel structures.',
                ps: 'پیاوړی پوړ د کانتینر قلفونو او د بار تړلو تجهیزاتو سره د عمومي او فولادي بار لپاره.'
            },
            pdfUrl: 'pdfs/transportation/trailers/flatbed-trailer.pdf',
            category: 'trailers',
            icon: '📦'
        },
        {
            name: {
                fa: 'تریلر کم‌ارتفاع',
                en: 'Lowbed Trailer',
                ps: 'لوېد ټریلر'
            },
            description: {
                fa: 'سطح بارگیری پایین با رمپ هیدرولیک برای حمل ماشین‌آلات سنگین و بارهای ارتفاع‌دار.',
                en: 'Low loading deck with hydraulic ramps to move heavy machinery and over-height equipment.',
                ps: 'ټیټ بار بردار پوړ د هایدرولیک رمپونو سره د درنو ماشینونو او لوړ تجهیزاتو لېږد لپاره.'
            },
            pdfUrl: 'pdfs/transportation/trailers/lowbed-trailer.pdf',
            category: 'trailers',
            icon: '🏗️'
        },
        {
            name: {
                fa: 'تریلر تانکر',
                en: 'Tanker Trailer',
                ps: 'تانکر ټریلر'
            },
            description: {
                fa: 'تانکر چندمحفظه با سیستم پمپ و سنجش سطح برای حمل سوخت و مایعات صنعتی.',
                en: 'Multi-compartment tanker with pumping and level monitoring for fuel and industrial liquids.',
                ps: 'څو خونې لرونکی تانکر د پمپ او د سطحې د څارنې سیستم سره د سون توکو او صنعتي مایعاتو لپاره.'
            },
            pdfUrl: 'pdfs/transportation/trailers/tanker-trailer.pdf',
            category: 'trailers',
            icon: '🛢️'
        },
        {
            name: {
                fa: 'تریلر کانتینربر',
                en: 'Container Carrier Trailer',
                ps: 'کانتینر ټریلر'
            },
            description: {
                fa: 'شاسی کانتینری با قفل‌های twist-lock و سیستم تعلیق بادی برای حمل ۲۰ و ۴۰ فوت.',
                en: 'Container chassis with twist-locks and air suspension for 20ft and 40ft units.',
                ps: 'د کانتینر چاسیس د ټویسټ لاکونو او د هوا تعلیق سره د ۲۰ او ۴۰ فوټو کانتینرونو لپاره.'
            },
            pdfUrl: 'pdfs/transportation/trailers/container-trailer.pdf',
            category: 'trailers',
            icon: '📦'
        },
        {
            name: {
                fa: 'تریلر یخچالدار',
                en: 'Refrigerated Trailer',
                ps: 'یخچال لرونکی ټریلر'
            },
            description: {
                fa: 'اتاق عایق با یونیت سردخانه، ثبت دما و برق کمکی برای حمل زنجیره سرد.',
                en: 'Insulated van with refrigeration unit, temperature logging and standby power for cold-chain loads.',
                ps: 'عایق بکس د یخچال یونټ، د تودوخې ثبت او د برېښنا ملاتړ سره د سړې زنځیر بار لپاره.'
            },
            pdfUrl: 'pdfs/transportation/trailers/refrigerated-trailer.pdf',
            category: 'trailers',
            icon: '❄️'
        },
        {
            name: {
                fa: 'کامیون دامپر',
                en: 'Dump Truck',
                ps: 'ډمپر کامیون'
            },
            description: {
                fa: 'کابین تقویت‌شده با جعبه تخلیه هیدرولیک برای عملیات معدنی و پروژه‌های عمرانی.',
                en: 'Reinforced cab with hydraulic tipping body for mining and construction haulage.',
                ps: 'پیاوړی کابین د هایدرولیک ټیپنګ باډۍ سره د کان کیندنې او ساختماني بار لپاره.'
            },
            pdfUrl: 'pdfs/transportation/trucks/dump-truck.pdf',
            category: 'trucks',
            icon: '🪣'
        },
        {
            name: {
                fa: 'کامیون بارکش',
                en: 'Cargo Haulage Truck',
                ps: 'بارکش کامیون'
            },
            description: {
                fa: 'شاسی طولانی با سیستم بادی، تلمبه سوخت ذخیره و جعبه ابزار برای حمل بار عمومی.',
                en: 'Long-wheelbase chassis with air system, auxiliary fuel tank and tool storage for general freight.',
                ps: 'اوږده چاسیس د هوا سیستم، اضافي د سون ټانک او د وسیلو بکس سره د عمومي بار لپاره.'
            },
            pdfUrl: 'pdfs/transportation/trucks/cargo-truck.pdf',
            category: 'trucks',
            icon: '📦'
        },
        {
            name: {
                fa: 'کامیون یدک‌کش',
                en: 'Tow Recovery Truck',
                ps: 'ډکړ کامیون'
            },
            description: {
                fa: 'وینچ هیدرولیک، بازوی جرثقیل و بوم متحرک برای امداد و حمل وسایل نقلیه.',
                en: 'Hydraulic winch, crane boom and adjustable underlift for vehicle recovery operations.',
                ps: 'هایډرولیک وینچ، د کرین بازو او متحرک انډرلفټ سره د وسایطو د ژغورنې لپاره.'
            },
            pdfUrl: 'pdfs/transportation/trucks/tow-truck.pdf',
            category: 'trucks',
            icon: '🚨'
        },
        {
            name: {
                fa: 'لیفتراک برقی',
                en: 'Electric Forklift',
                ps: 'برقي لیفتراک'
            },
            description: {
                fa: 'سیستم باتری لیتیوم، شارژر سریع و فرمان ارگونومیک برای محیط‌های بسته.',
                en: 'Lithium battery system, fast charger and ergonomic steering ideal for indoor terminals.',
                ps: 'د لیتیوم بیټرۍ سیستم، چټک چارج او ارګونومیک سټیرنګ د سالون کار لپاره.'
            },
            pdfUrl: 'pdfs/transportation/forklifts/electric-forklift.pdf',
            category: 'forklifts',
            icon: '🔌'
        },
        {
            name: {
                fa: 'لیفتراک دیزلی',
                en: 'Diesel Forklift',
                ps: 'دیزلي لیفتراک'
            },
            description: {
                fa: 'موتور پرقدرت، دکل برق و دکل مقاوم برای عملیات بیرونی و بار سنگین.',
                en: 'High-torque engine with robust mast and lighting kit for outdoor heavy-duty handling.',
                ps: 'لوړ تورک انجن د قوي مَست او څراغونو سره د درنو بهرنیو عملیاتو لپاره.'
            },
            pdfUrl: 'pdfs/transportation/forklifts/diesel-forklift.pdf',
            category: 'forklifts',
            icon: '⛽'
        },
        {
            name: {
                fa: 'لیفتراک خاکی',
                en: 'Rough Terrain Forklift',
                ps: 'خاکی لیفتراک'
            },
            description: {
                fa: 'محور چهارچرخ محرک، لاستیک آفرود و گارد محافظ برای سایت‌های ساخت و معادن.',
                en: 'Four-wheel drive axles, off-road tyres and protective guard for construction and mining sites.',
                ps: 'څلور څرخ محرک، د ناهموارو ټایرونه او محافظتي چوکاټ د ساختماني او کانونو ساحو لپاره.'
            },
            pdfUrl: 'pdfs/transportation/forklifts/rough-terrain-forklift.pdf',
            category: 'forklifts',
            icon: '🌄'
        }
    ];

    const assuranceHighlights = [
        {
            icon: '📦',
            title: {
                fa: 'بسته قطعات یدکی بحرانی',
                en: 'Critical Spare Parts Packs',
                ps: 'د مهمو اضافي پرزو کڅوړې'
            },
            description: {
                fa: 'ست اقلام مصرفی، لاستیک، فیلتر و لوازم خدماتی همراه هر ناوگان ارسال می‌شود.',
                en: 'Consumables, tyres, filters and service kits accompany every fleet delivery.',
                ps: 'مصرفي توکي، ټایرونه، فلټرونه او د خدمت کټونه له هر ناوګان سره سپارل کېږي.'
            }
        },
        {
            icon: '🛠️',
            title: {
                fa: 'تیم پشتیبانی تعمیر و نگهداری',
                en: 'Maintenance Support Team',
                ps: 'د ساتنې ملاتړ ټیم'
            },
            description: {
                fa: 'دسترسی به تکنسین‌های آموزش‌دیده، برنامه بازدید دوره‌ای و تأمین قطعات در محل.',
                en: 'Access to trained technicians, scheduled inspections and on-site spare provisioning.',
                ps: 'روزن شوي تخنیکران، مهالویش شوي معاینات او په ساحه کې د پرزو برابرول.'
            }
        },
        {
            icon: '🛰️',
            title: {
                fa: 'رهگیری و پایش ناوگان',
                en: 'Fleet Tracking & Monitoring',
                ps: 'د ناوګان تعقیب او څارنه'
            },
            description: {
                fa: 'سیستم GPS، ثبت کارکرد و هشدار تعمیر برای مدیریت بهره‌برداری و کاهش توقف.',
                en: 'GPS tracking, utilisation logging and service alerts to optimise uptime.',
                ps: 'د GPS تعقیب، د کارونې ثبت او د خدمت خبرتیاوې د فعالیت د ښه کولو لپاره.'
            }
        },
        {
            icon: '🤝',
            title: {
                fa: 'تأمین مالی و بیمه',
                en: 'Financing & Insurance Coordination',
                ps: 'د تمویل او بیمې همغږي'
            },
            description: {
                fa: 'هماهنگی وام، لیزینگ و بیمه حمل برای تسهیل راه‌اندازی و بهره‌برداری.',
                en: 'Arrange loans, leasing and freight insurance to streamline commissioning.',
                ps: 'قرضې، لیزنګ او د بار بیمه همغږي کوو څو ګټه اخیستنه اسانه شي.'
            }
        }
    ];

    const processSteps = [
        {
            step: '01',
            title: {
                fa: 'نیازسنجی مسیر و بار',
                en: 'Route & Payload Assessment',
                ps: 'د لارې او بار ارزونه'
            },
            description: {
                fa: 'نوع بار، مسیرهای عملیاتی، محدودیت وزن و امکانات تعمیر در محل بررسی می‌شود.',
                en: 'We audit cargo types, duty routes, axle load limits and local maintenance capabilities.',
                ps: 'د بار ډولونه، د کار لارې، د اکسلو حدونه او سیمه ییزې د ساتنې وړتیاوې ارزول کېږي.'
            },
            bullets: [
                { fa: 'بازدید میدانی و دریافت داده‌های ناوگان فعلی', en: 'On-site survey and existing fleet data capture', ps: 'ساحوي سروې او د اوسني ناوګان معلومات راټولول' },
                { fa: 'تحلیل محدودیت‌های گمرکی و مرزی', en: 'Analyse customs and border constraints', ps: 'د ګمرک او سرحدي محدودیتونو تحلیل' }
            ]
        },
        {
            step: '02',
            title: {
                fa: 'پیکربندی و پیشنهاد فنی',
                en: 'Configuration & Technical Proposal',
                ps: 'پیکر جوړونه او تخنیکي وړاندیز'
            },
            description: {
                fa: 'چیدمان ناوگان، گزینه‌های تامین مالی و برنامه قطعات یدکی برای تایید ارائه می‌شود.',
                en: 'We present fleet layouts, financing options and spare-parts programmes for approval.',
                ps: 'د ناوګان ترتیب، د تمویل اختیارونه او د پرزو پروګرامونه د تصویب لپاره وړاندې کوو.'
            },
            bullets: [
                { fa: 'ارائه جدول مشخصات فنی و زمان تحویل', en: 'Deliver technical specification matrix and lead times', ps: 'د تخنیکي ځانګړنو جدول او د سپارلو مهال ویش ورکول' },
                { fa: 'هماهنگی قرارداد خدمات پس از فروش', en: 'Align after-sales service agreement', ps: 'د پلور وروسته د خدمت تړون همغږي' }
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
                fa: 'تجهیزات تولید و شخصی‌سازی شده، تست میدانی می‌شوند و حمل دریایی و زمینی رزرو می‌گردد.',
                en: 'Configured assets undergo production, field testing and booking for sea and land freight.',
                ps: 'پیکر شوي وسایل تولید، میداني ازموینې او سمندري او ځمکني بار ته بوکل کېږي.'
            },
            bullets: [
                { fa: 'گزارش QC و عکس‌های قبل از بارگیری', en: 'QC reports and pre-loading photos', ps: 'د QC راپورونه او د بارولو دمخه انځورونه' },
                { fa: 'ترخیص گمرکی و بیمه تمام‌خطر', en: 'Customs clearance and all-risk insurance', ps: 'ګمرکي تصفیه او بشپړ بیمه' }
            ]
        },
        {
            step: '04',
            title: {
                fa: 'تحویل، آموزش و پشتیبانی',
                en: 'Delivery, Training & Support',
                ps: 'سپارنه، روزنه او ملاتړ'
            },
            description: {
                fa: 'تحویل در مقصد، آموزش رانندگان و تنظیم برنامه نگهداری برای شروع بدون توقف.',
                en: 'We hand over on site, train drivers and schedule maintenance to ensure seamless start-up.',
                ps: 'په ځای سپارنه، د موټروانانو روزنه او د ساتنې مهالویش د بې ځنډه پیل لپاره برابروو.'
            },
            bullets: [
                { fa: 'مستندسازی و تحویل مدارک عملیاتی', en: 'Provide operating manuals and documentation', ps: 'د عملیاتو لارښودونه او اسناد سپارل' },
                { fa: 'پشتیبانی دوره‌ای و تأمین سریع قطعات', en: 'Periodic support and fast spare supply', ps: 'منظم ملاتړ او د پرزو چټک برابرول' }
            ]
        }
    ];

    const categoryIcons = categories.reduce((acc, category) => {
        acc[category.id] = category.icon;
        return acc;
    }, {});

    const itemIcons = {
        'flatbed-trailer': '📦',
        'lowbed-trailer': '🏗️',
        'tanker-trailer': '🛢️',
        'container-trailer': '📦',
        'refrigerated-trailer': '❄️',
        'dump-truck': '🪣',
        'cargo-truck': '🚚',
        'tow-truck': '🚨',
        'electric-forklift': '🔌',
        'diesel-forklift': '⛽',
        'rough-terrain-forklift': '🌄'
    };

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function setHero(lang) {
        const title = document.getElementById('transportationHeroTitle');
        const subtitle = document.getElementById('transportationHeroSubtitle');
        const quote = document.getElementById('transportationHeroQuote');
        const cta = document.getElementById('viewTransportationInventoryButton');

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
        const title = document.getElementById('transportationHighlightsTitle');
        const subtitle = document.getElementById('transportationHighlightsSubtitle');
        const grid = document.getElementById('transportationHighlightsGrid');

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
        const title = document.getElementById('transportationCategoriesTitle');
        const subtitle = document.getElementById('transportationCategoriesSubtitle');
        const grid = document.getElementById('transportationCategoriesGrid');

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

            const openModal = () => showTransportationCategoryModal(category.id, lang);

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
        const category = item.category || 'trailers';
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

    const globalInventory = Array.isArray(equipmentSource.transportation)
        ? equipmentSource.transportation
        : (typeof window !== 'undefined' && Array.isArray(window.transportationInventory)
            ? window.transportationInventory
            : []);

    const inventory = (globalInventory.length ? globalInventory : defaultInventory)
        .map(normaliseInventoryItem);

    if (typeof window !== 'undefined') {
        window.transportationInventory = inventory;
    }

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

    function showTransportationCategoryModal(categoryId, lang = getLanguage()) {
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

    function showTransportationInventoryModal(lang = getLanguage()) {
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
            <div class="second-hand-inventory-modal">
                ${sectionsHtml}
            </div>
        `;

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }

    function renderInventory(lang) {
        const title = document.getElementById('transportationInventoryTitle');
        const subtitle = document.getElementById('transportationInventorySubtitle');
        const container = document.getElementById('transportationInventoryGrid');
        const section = document.getElementById('transportation-inventory');

        if (title) {
            title.textContent = localise(content.inventoryTitle, lang);
        }
        if (subtitle) {
            subtitle.textContent = localise(content.inventorySubtitle, lang);
        }
        if (section) {
            section.setAttribute('hidden', 'true');
        }
        if (container) {
            container.innerHTML = '';
        }
    }

    function renderAssurance(lang) {
        const title = document.getElementById('transportationAssuranceTitle');
        const subtitle = document.getElementById('transportationAssuranceSubtitle');
        const grid = document.getElementById('transportationAssuranceGrid');

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
        const title = document.getElementById('transportationProcessTitle');
        const subtitle = document.getElementById('transportationProcessSubtitle');
        const grid = document.getElementById('transportationProcessTimeline');

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
        processSteps.forEach(stage => {
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
        const cta = document.getElementById('viewTransportationInventoryButton');
        if (cta && !cta.dataset.boundModal) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showTransportationInventoryModal(getLanguage());
            });
            cta.dataset.boundModal = 'true';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updatePage();
        setupInteractions();
    });

    window.updateTransportationPage = () => {
        updatePage();
        setupInteractions();
    };

    window.showTransportationCategoryModal = showTransportationCategoryModal;
    window.showTransportationInventoryModal = showTransportationInventoryModal;
})();
