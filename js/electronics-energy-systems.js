(function() {
    const content = {
        hero: {
            title: {
                fa: 'زیرساخت الکترونیک و انرژی برای تولید هوشمند',
                en: 'Electronics & Energy Infrastructure for Smart Production',
                ps: 'د هوښیار تولید لپاره د برېښنا او انرژۍ بنسټونه'
            },
            subtitle: {
                fa: 'از مونتاژ PCB و تست عملکردی تا لیزر صنعتی، شبکه و نیروگاه خورشیدی؛ راهکار کامل توسط تیم صنعتچی ارائه می‌شود.',
                en: 'From PCB assembly and functional testing to industrial lasers, networking and solar plants—delivered end-to-end by the Sanaatchi team.',
                ps: 'له د PCB اسمبلۍ او د فعالیت ټېسټ څخه تر صنعتي لېزرونو، شبکو او لمریز فابریکو پورې—ټوله حل د صنعتچي ټیم برابروي.'
            },
            quote: {
                fa: 'هر پروژه با طراحی مهندسی، BOM تایید‌شده، تست‌های ایمنی و راه‌اندازی در سایت کارخانه تحویل می‌گردد.',
                en: 'Every project arrives with engineered design packs, approved BOMs, safety testing and on-site commissioning.',
                ps: 'هر پروژه د انجینري ډیزاین، تائید شوي BOM، د خونديتوب ټېسټونو او په ساحه کې د فعالولو سره سپارل کېږي.'
            },
            secondaryCta: {
                fa: 'دانلود فهرست تجهیزات',
                en: 'Download Equipment Catalogue',
                ps: 'د تجهیزاتو کتالوګ ډاونلوډ کړئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا راهکارهای الکترونیک و انرژی را به صنعتچی می‌سپارند؟',
            en: 'Why Entrust Your Electronics & Energy Projects to Sanaatchi?',
            ps: 'ولې د برېښنا او انرژۍ پروژې صنعتچي ته سپارل کیږي؟'
        },
        highlightsSubtitle: {
            fa: 'ترکیب طراحی مدار، تولید، تست و انرژی تجدیدپذیر را یکپارچه برنامه‌ریزی و اجرا می‌کنیم.',
            en: 'We orchestrate circuit design, production, testing and renewable energy delivery under one program.',
            ps: 'موږ د سرک ډیزاین، تولید، ټېسټ او د بیا نوي انرژۍ برابرول په ګډه پلان او عملي کوو.'
        },
        categoriesTitle: {
            fa: 'حوزه‌های اصلی تجهیزات الکترونیک و انرژی',
            en: 'Core Electronics & Energy Equipment Domains',
            ps: 'د برېښنا او انرژۍ د تجهیزاتو اصلي برخې'
        },
        categoriesSubtitle: {
            fa: 'از تولید مدار تا توزیع برق و شبکه، هر بخش با تجهیزات تخصصی پشتیبانی می‌شود.',
            en: 'From board manufacturing to power distribution and networking, every domain is covered with specialist equipment.',
            ps: 'له سرک جوړولو څخه تر د برېښنا وېش او شبکې پورې، هره برخه د ځانګړو تجهیزاتو سره ملاتړ کېږي.'
        },
        inventoryTitle: {
            fa: 'فهرست تجهیزات قابل تأمین',
            en: 'Equipment Available for Supply',
            ps: 'هغه تجهیزات چې برابرولی شو'
        },
        inventorySubtitle: {
            fa: 'جزئیات فنی را بررسی کرده و فایل PDF هر دستگاه را دانلود کنید.',
            en: 'Review the specifications and download a PDF for every system.',
            ps: 'تخنیکي معلومات وګورئ او د هر سیستم PDF ډاونلوډ کړئ.'
        },
        assuranceTitle: {
            fa: 'خدمات همراه پروژه‌های الکترونیک و انرژی',
            en: 'Services Packaged with Every Electronics & Energy Project',
            ps: 'له هر برېښنایي او انرژۍ پروژې سره مل خدمات'
        },
        assuranceSubtitle: {
            fa: 'از مهندسی تفصیلی تا آموزش اپراتور و پشتیبانی نرم‌افزار کنترل، کنار شما هستیم.',
            en: 'We support you from detailed engineering through operator training and control software assistance.',
            ps: 'له تفصیلي انجینرۍ څخه تر د اپراتور روزنې او د کنټرول سافټویر ملاتړ پورې له تاسو سره یو.'
        },
        processTitle: {
            fa: 'مراحل اجرای پروژه الکترونیک و انرژی',
            en: 'Project Delivery Steps for Electronics & Energy',
            ps: 'د برېښنایي او انرژۍ پروژو د تطبیق پړاوونه'
        },
        processSubtitle: {
            fa: 'گام‌های کلیدی از ارزیابی نیاز تا تحویل نهایی و خدمات پس از اجرا را شفاف پیاده می‌کنیم.',
            en: 'We deliver every milestone transparently—from requirements capture to handover and aftercare.',
            ps: 'موږ له اړتیا سنجونې څخه تر سپارلو او د وروسته خدمتونو پورې هر پړاو په روڼتیا ترسره کوو.'
        }
    };

    const highlights = [
        {
            icon: '🧠',
            title: {
                fa: 'طراحی و مهندسی یکپارچه',
                en: 'Integrated Design & Engineering',
                ps: 'یو ځایه ډیزاین او انجینري'
            },
            description: {
                fa: 'مدل‌سازی مدار، انتخاب کامپوننت، طراحی کابینت برق و اسکید انرژی در یک بسته EPC ارائه می‌شود.',
                en: 'Circuit modelling, component selection, power cabinet design and energy skid planning delivered as one EPC package.',
                ps: 'د سرک ماډل جوړونه، د اجزاوو انتخاب، د برقي کابینې ډیزاین او د انرژۍ سکیډ پلان په یوه EPC بسته کې وړاندې کېږي.'
            }
        },
        {
            icon: '🧪',
            title: {
                fa: 'کنترل کیفیت و تست چندلایه',
                en: 'Multi-Layer Quality & Functional Testing',
                ps: 'څو پوړیز کیفیت او فعالیت ټېسټ'
            },
            description: {
                fa: 'خطوط SMT، تست ICT و فانکشنال با دیتالاگر، ردیابی و مستندسازی خودکار پشتیبانی می‌شوند.',
                en: 'SMT lines, ICT and functional tests include datalogging, traceability and automated documentation.',
                ps: 'د SMT لینونه، ICT او فانکشنل ټېسټونه له ډاټالاګر، د تعقیب وړتیا او اتومات اسنادو سره مل دي.'
            }
        },
        {
            icon: '☀️',
            title: {
                fa: 'انرژی پایدار و مدیریت بار',
                en: 'Sustainable Energy & Load Management',
                ps: 'دوامداره انرژي او د بار مدیریت'
            },
            description: {
                fa: 'طراحی سامانه خورشیدی و بادی با استراکچر، اینورتر و مانیتورینگ برای کاهش هزینه انرژی کارخانه.',
                en: 'Solar and wind systems engineered with structures, inverters and monitoring to reduce plant energy costs.',
                ps: 'د لمر او باد سیستمونه د جوړښتونو، انورټرونو او څارنې سره انجینري کېږي څو د فابریکې انرژۍ لګښت کم کړي.'
            }
        },
        {
            icon: '🛠️',
            title: {
                fa: 'نصب، راه‌اندازی و آموزش',
                en: 'Installation, Commissioning & Training',
                ps: 'نصب، فعالول او روزنه'
            },
            description: {
                fa: 'تیم ما نصب مکانیکی و برقی، کابل‌کشی شبکه، تست FAT/SAT و آموزش اپراتور را انجام می‌دهد.',
                en: 'Our team executes mechanical & electrical installation, network cabling, FAT/SAT testing and operator training.',
                ps: 'زموږ ټیم میخانیکي او برقي نصب، د شبکې کیبل ایښودل، FAT/SAT ټېسټ او د اپراتور روزنه برابروي.'
            }
        }
    ];

    const categories = [
        {
            id: 'electronic-machinery',
            icon: '🔧',
            title: {
                fa: 'ماشین‌آلات مونتاژ الکترونیک',
                en: 'Electronic Assembly Machinery',
                ps: 'د الکترونیک اسمبلۍ ماشینونه'
            },
            description: {
                fa: 'خطوط SMT، لحیم موجی، تست ICT و کابل‌سازی با اتوماسیون کامل برای تیراژ بالا.',
                en: 'SMT lines, wave soldering, ICT testers and cable harness cells with high-throughput automation.',
                ps: 'د SMT لینونه، د موجي لحم کولو، ICT ټېسټونه او د کیبل هارنس حجرې د لوړې تولید کچې لپاره.'
            }
        },
        {
            id: 'telecom-parts',
            icon: '📡',
            title: {
                fa: 'قطعات و سازه‌های مخابراتی',
                en: 'Telecom Parts & Structures',
                ps: 'د مخابراتو پرزې او جوړښتونه'
            },
            description: {
                fa: 'مونتاژ آنتن، تولید کابل فیبر و زیرساخت برج مخابراتی با استانداردهای سختگیرانه.',
                en: 'Antenna assembly, fibre cable production and telecom tower infrastructure built to stringent standards.',
                ps: 'د انتن اسمبلۍ، د فایبر کیبل تولید او د مخابراتي برجه جوړښتونه د لوړو معیارونو سره.'
            }
        },
        {
            id: 'industrial-laser',
            icon: '🔦',
            title: {
                fa: 'سیستم‌های لیزر صنعتی',
                en: 'Industrial Laser Systems',
                ps: 'صنعتي لېزر سیستمونه'
            },
            description: {
                fa: 'برش، مارکینگ و جوش لیزری برای فلز و پلیمر با نرم‌افزار کنترل و ایمنی اپراتور.',
                en: 'Laser cutting, marking and welding for metals and polymers with control software and operator safety.',
                ps: 'د فلز او پولیمر لپاره د لېزر پرې کول، نښان وهل او ویلډنګ د کنټرول سافټویر او د اپراتور خوندیتوب سره.'
            }
        },
        {
            id: 'printing-machines',
            icon: '🖨️',
            title: {
                fa: 'دستگاه‌های چاپ صنعتی',
                en: 'Industrial Printing Machines',
                ps: 'صنعتي چاپ ماشینونه'
            },
            description: {
                fa: 'چاپ افست، دیجیتال، فلکسو و سیلک با سیستم خشک‌کن و مدیریت رنگ پیشرفته.',
                en: 'Offset, digital, flexo and screen printing lines with drying systems and advanced colour management.',
                ps: 'افست، ډیجیټل، فلیکسو او سکرین چاپ لینونه د وچولو سیستمونو او پرمختللي رنګ مدیریت سره.'
            }
        },
        {
            id: 'renewable-energy',
            icon: '⚡',
            title: {
                fa: 'سامانه‌های انرژی تجدیدپذیر',
                en: 'Renewable Energy Systems',
                ps: 'د بیا نوي انرژۍ سیستمونه'
            },
            description: {
                fa: 'پکیج کامل پنل خورشیدی، اینورتر، استراکچر نصب و توربین بادی برای تأمین برق پایدار.',
                en: 'Complete solar panel, inverter, mounting and wind turbine packages for resilient power.',
                ps: 'بشپړ د لمریز پینل، انورټر، د نصب جوړښت او د باد توربین پیکجونه د ثابتې برېښنا لپاره.'
            }
        },
        {
            id: 'electrical-distribution',
            icon: '🗄️',
            title: {
                fa: 'تابلو و توزیع برق صنعتی',
                en: 'Industrial Power Distribution',
                ps: 'صنعتي د برېښنا وېش'
            },
            description: {
                fa: 'تابلوی LV، پنل توزیع و کلید ATS با طراحی ایمن و مستندسازی کامل.',
                en: 'Low-voltage switchgear, distribution panels and ATS switches engineered with safety and documentation.',
                ps: 'د ټیټ ولتاژ سویچ ګیر، د وېش پینلونه او ATS سویچونه د خوندیتوب او بشپړو اسنادو سره.'
            }
        },
        {
            id: 'networking-equipment',
            icon: '🌐',
            title: {
                fa: 'تجهیزات شبکه و دیتاسنتر',
                en: 'Networking & Data Center Gear',
                ps: 'د شبکې او ډیټا سنتر وسایل'
            },
            description: {
                fa: 'سوئیچ، روتر، اکسس پوینت و رک شبکه با پشتیبانی طراحی کابل‌کشی ساخت‌یافته.',
                en: 'Switches, routers, Wi-Fi access points and racks supplied with structured cabling design support.',
                ps: 'سوئچونه، روټرونه، د وای فای اکسس پواینټونه او رېکونه د جوړښتي کیبل ډیزاین ملاتړ سره.'
            }
        }
    ];

    const assuranceHighlights = [
        {
            icon: '📐',
            title: {
                fa: 'مهندسی تفصیلی و نقشه‌کشی',
                en: 'Detailed Engineering & Drafting',
                ps: 'تفصیلي انجینري او نقشه کشي'
            },
            description: {
                fa: 'تهیه مدارک طراحی، دیاگرام سیم‌بندی، لی اوت تابلو و دستورالعمل نصب برای هر خط.',
                en: 'Preparation of design documents, wiring diagrams, panel layouts and installation manuals for every line.',
                ps: 'د ډیزاین اسناد، د سیم ایښودلو ډایاګرامونه، د پینل ترتیب او د نصب لارښودونه برابرېږي.'
            }
        },
        {
            icon: '🔍',
            title: {
                fa: 'بازرسی و تضمین کیفیت',
                en: 'Inspection & Quality Assurance',
                ps: 'تفتیش او د کیفیت تضمین'
            },
            description: {
                fa: 'FAT/SAT، تست ایزولاسیون، گزارش تست عملکردی و تحویل همراه با مدارک QC انجام می‌شود.',
                en: 'FAT/SAT, insulation checks, functional reports and handover with QC dossiers are executed.',
                ps: 'FAT/SAT، د عایق معاینات، د فعالیت راپورونه او د QC اسنادو سره سپارل ترسره کېږي.'
            }
        },
        {
            icon: '🧾',
            title: {
                fa: 'تأمین مستندات و آموزش',
                en: 'Documentation & Training Delivery',
                ps: 'اسناد او روزنه'
            },
            description: {
                fa: 'Manual، دستور نگهداری، لیست قطعات یدکی و برنامه آموزشی اپراتور ارائه می‌شود.',
                en: 'Manuals, maintenance procedures, spare parts lists and operator training programs are provided.',
                ps: 'لارښودونه، د ساتنې کړنلارې، د سپیر پرزو لستونه او د اپراتور روزنیز پروګرامونه ورکول کېږي.'
            }
        },
        {
            icon: '🤝',
            title: {
                fa: 'پشتیبانی پس از راه‌اندازی',
                en: 'Post-Commissioning Support',
                ps: 'د فعالولو وروسته ملاتړ'
            },
            description: {
                fa: 'پشتیبانی فنی از راه دور، تأمین قطعات مصرفی و بازدید دوره‌ای توسط تیم صنعتچی انجام می‌شود.',
                en: 'Remote technical support, consumables supply and periodic visits by the Sanaatchi team.',
                ps: 'لرې تخنیکي ملاتړ، د مصرفي پرزو برابرول او د صنعتچي ټیم له خوا دوره ای لیدنې.'
            }
        }
    ];

    const processStages = [
        {
            step: '01',
            title: {
                fa: 'ارزیابی نیاز و امکان‌سنجی',
                en: 'Needs Assessment & Feasibility',
                ps: 'د اړتیا ارزونه او امکان سنجونه'
            },
            description: {
                fa: 'تحلیل ظرفیت تولید، استانداردهای کیفیت و نیاز انرژی پروژه انجام می‌شود.',
                en: 'Analyse production throughput, quality standards and project energy demand.',
                ps: 'د تولید ظرفیت، د کیفیت معیارونه او د پروژې د انرژۍ اړتیا شننه کېږي.'
            }
        },
        {
            step: '02',
            title: {
                fa: 'طراحی مفهومی و انتخاب تجهیز',
                en: 'Concept Design & Equipment Selection',
                ps: 'مفکوري ډیزاین او د تجهیزاتو ټاکنه'
            },
            description: {
                fa: 'طرح Layout، فهرست قطعات، برند تجهیزات و استراتژی انرژی تعیین می‌گردد.',
                en: 'Define layouts, bill of materials, equipment brands and energy strategy.',
                ps: 'لی اوت، د موادو لست، د تجهیزاتو برانډونه او د انرژۍ ستراتیژي ټاکل کېږي.'
            }
        },
        {
            step: '03',
            title: {
                fa: 'مهندسی تفصیلی و ساخت',
                en: 'Detailed Engineering & Fabrication',
                ps: 'تفصیلي انجینري او جوړول'
            },
            description: {
                fa: 'تهیه نقشه‌های ساخت، برنامه‌ریزی تولید و مونتاژ تابلو، رک و اسکید انرژی.',
                en: 'Prepare fabrication drawings, plan production and assemble panels, racks and energy skids.',
                ps: 'د جوړولو نقاشي برابره، تولید پلان کړه او پینلونه، رېکونه او د انرژۍ سکیډونه اسمبل کړه.'
            }
        },
        {
            step: '04',
            title: {
                fa: 'نصب و کابل‌کشی',
                en: 'Installation & Cabling',
                ps: 'نصب او کیبل ایښودل'
            },
            description: {
                fa: 'نصب مکانیکی، سیم‌بندی تابلو، کابل‌کشی شبکه و استراکچر نیروگاه انجام می‌شود.',
                en: 'Execute mechanical installation, panel wiring, structured cabling and plant structures.',
                ps: 'میخانیکي نصب، د پینل سیم ایښودل، جوړښتي کیبل او د فابریکې جوړښتونه ترسره کېږي.'
            }
        },
        {
            step: '05',
            title: {
                fa: 'تست، راه‌اندازی و تحویل',
                en: 'Testing, Commissioning & Handover',
                ps: 'ټېسټ، فعالول او سپارل'
            },
            description: {
                fa: 'FAT/SAT، تست عملکردی، مانیتورینگ انرژی و تحویل رسمی با مستندات انجام می‌شود.',
                en: 'Run FAT/SAT, functional tests, energy monitoring and formal handover with documentation.',
                ps: 'FAT/SAT، د فعالیت ټېسټونه، د انرژۍ څارنه او له اسنادو سره رسمي سپارل کېږي.'
            }
        },
        {
            step: '06',
            title: {
                fa: 'آموزش و پشتیبانی مداوم',
                en: 'Training & Ongoing Support',
                ps: 'روزنه او دوامداره ملاتړ'
            },
            description: {
                fa: 'آموزش اپراتور، تحویل برنامه نگهداری و پشتیبانی پس از راه‌اندازی ادامه می‌یابد.',
                en: 'Deliver operator training, maintenance programs and sustained after-sales support.',
                ps: 'د اپراتور روزنه، د ساتنې پروګرامونه او دوامدار وروسته له پلور ملاتړ وړاندې کېږي.'
            }
        }
    ];

    const categoryIcons = categories.reduce((acc, category) => {
        acc[category.id] = category.icon;
        return acc;
    }, {});

    const itemIcons = {
        'smt-machine': '🤖',
        'wave-soldering': '🌊',
        'ic-testing': '🔬',
        'functional-testing': '🧪',
        'wire-harness': '🪢',
        'cable-testing': '📏',
        'antenna-assembly': '📡',
        'antenna-testing': '🧭',
        'antenna-coating': '🎯',
        'fiber-optic-cable': '🧵',
        'coaxial-cable': '🔄',
        'cable-connector': '🔌',
        'tower-assembly': '🗼',
        'tower-foundation': '🧱',
        'tower-maintenance': '🧗',
        'fiber-laser': '💡',
        'co2-laser': '🔥',
        'laser-marking': '✒️',
        'laser-etching': '🪵',
        'laser-brazing': '🛠️',
        'laser-cladding': '🛡️',
        'sheet-fed-offset': '📰',
        'web-offset': '🧾',
        'offset-drying': '💨',
        'inkjet-printing': '🖋️',
        'laser-printing': '🖨️',
        'large-format-printing': '📽️',
        'flexo-printing': '🎞️',
        'flexo-plate-making': '🧱',
        'flexo-slitting': '🔪',
        'screen-printing': '🖼️',
        'screen-making': '🛠️',
        'screen-cleaning': '🧼',
        'solar-panel': '☀️',
        'solar-inverter': '🔁',
        'solar-mounting-structure': '🪜',
        'wind-turbine': '🌬️',
        'wind-tower-structure': '🏗️',
        'wind-controller': '🎛️',
        'lv-switchgear': '⚡',
        'distribution-panel': '🗄️',
        'ats-switch': '🔁',
        'network-switch': '🧠',
        'router': '📶',
        'wifi-access-point': '📡',
        'network-rack': '🗄️'
    };

    function normaliseInventoryItem(item) {
        const pdfName = item.pdfUrl ? item.pdfUrl.split('/').pop().replace('.pdf', '') : '';
        const categoryId = item.category || 'electronic-machinery';
        return {
            category: categoryId,
            name: item.name,
            description: item.description,
            pdfUrl: item.pdfUrl,
            icon: item.icon || itemIcons[pdfName] || categoryIcons[categoryId] || '📄',
            meta: item.meta || []
        };
    }

    const equipmentSource = typeof equipmentData !== 'undefined'
        ? equipmentData
        : (typeof window !== 'undefined' ? (window.equipmentData || {}) : {});

    const inventory = (Array.isArray(equipmentSource['electronics-energy-systems']) ? equipmentSource['electronics-energy-systems'] : [])
        .map(normaliseInventoryItem);

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function setHero(lang) {
        const title = document.getElementById('electronicsEnergySystemsHeroTitle');
        const subtitle = document.getElementById('electronicsEnergySystemsHeroSubtitle');
        const quote = document.getElementById('electronicsEnergySystemsHeroQuote');
        const cta = document.getElementById('viewElectronicsEnergySystemsButton');

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
        const title = document.getElementById('electronicsEnergySystemsHighlightsTitle');
        const subtitle = document.getElementById('electronicsEnergySystemsHighlightsSubtitle');
        const grid = document.getElementById('electronicsEnergySystemsHighlightsGrid');

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
        const title = document.getElementById('electronicsEnergySystemsCategoriesTitle');
        const subtitle = document.getElementById('electronicsEnergySystemsCategoriesSubtitle');
        const grid = document.getElementById('electronicsEnergySystemsCategoriesGrid');

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
                <div class="category-card-actions">
                    <a class="category-card-link" href="#" role="button" aria-label="${localise(category.title, lang)}">
                        <span>${lang === 'fa' ? 'مشاهده تجهیزات' : (lang === 'ps' ? 'تجهیزات وګورئ' : 'View equipment')}</span>
                        <i class="fas fa-arrow-left"></i>
                    </a>
                </div>
            `;

            const openModal = () => showElectronicsEnergySystemsCategoryModal(category.id, lang);

            card.addEventListener('click', openModal);
            card.addEventListener('keypress', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openModal();
                }
            });

            const link = card.querySelector('.category-card-link');
            if (link) {
                const handle = event => {
                    event.preventDefault();
                    event.stopPropagation();
                    openModal();
                };
                link.addEventListener('click', handle);
                link.addEventListener('keypress', event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        handle(event);
                    }
                });
            }

            grid.appendChild(card);
        });
    }

    function buildMetaList(meta, lang) {
        if (!meta || !meta.length) {
            return '';
        }
        const items = meta.map(entry => {
            const label = localise(entry.label, lang);
            const value = localise(entry.value, lang);
            return `<li><span>${label}</span><strong>${value}</strong></li>`;
        }).join('');
        return `<ul class="second-hand-meta">${items}</ul>`;
    }

    function buildInventoryCardsHtml(items, lang) {
        if (!items || !items.length) {
            const emptyText = lang === 'fa'
                ? 'هیچ تجهیزی در این دسته ثبت نشده است.'
                : (lang === 'ps' ? 'په دې ډله کې کوم تجهیز نشته.' : 'No equipment is registered in this category.');
            return `<div class="no-equipment">${emptyText}</div>`;
        }

        const viewText = lang === 'fa' ? 'مشاهده PDF' : (lang === 'ps' ? 'PDF وګورئ' : 'View PDF');
        const downloadText = lang === 'fa' ? 'دانلود' : (lang === 'ps' ? 'ډاونلوډ' : 'Download');

        const cards = items.map(item => `
            <div class="equipment-card">
                <div class="equipment-icon">${item.icon || '📄'}</div>
                <h4>${localise(item.name, lang)}</h4>
                <p>${localise(item.description, lang)}</p>
                ${buildMetaList(item.meta, lang)}
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
        const title = document.getElementById('electronicsEnergySystemsInventoryTitle');
        const subtitle = document.getElementById('electronicsEnergySystemsInventorySubtitle');
        const grid = document.getElementById('electronicsEnergySystemsInventoryGrid');

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
        const title = document.getElementById('electronicsEnergySystemsAssuranceTitle');
        const subtitle = document.getElementById('electronicsEnergySystemsAssuranceSubtitle');
        const grid = document.getElementById('electronicsEnergySystemsAssuranceGrid');

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
        const title = document.getElementById('electronicsEnergySystemsProcessTitle');
        const subtitle = document.getElementById('electronicsEnergySystemsProcessSubtitle');
        const timeline = document.getElementById('electronicsEnergySystemsProcessTimeline');

        if (title) {
            title.textContent = localise(content.processTitle, lang);
        }
        if (subtitle) {
            subtitle.textContent = localise(content.processSubtitle, lang);
        }
        if (!timeline) {
            return;
        }

        timeline.innerHTML = '';
        processStages.forEach(stage => {
            const card = document.createElement('div');
            card.className = 'process-card';
            card.innerHTML = `
                <div class="step">${stage.step}</div>
                <h3>${localise(stage.title, lang)}</h3>
                <p>${localise(stage.description, lang)}</p>
            `;
            timeline.appendChild(card);
        });
    }

    const categoryMap = categories.reduce((acc, category) => {
        acc[category.id] = category;
        return acc;
    }, {});

    function groupInventoryByCategory() {
        return inventory.reduce((acc, item) => {
            const categoryId = item.category || 'electronic-machinery';
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(item);
            return acc;
        }, {});
    }

    function showElectronicsEnergySystemsCategoryModal(categoryId, lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');

        if (!modal || !modalContent) {
            return;
        }

        const grouped = groupInventoryByCategory();
        const items = grouped[categoryId] || [];
        const categoryTitle = localise(categoryMap[categoryId]?.title || { fa: '', en: '', ps: '' }, lang);
        const backText = lang === 'fa' ? 'بازگشت' : (lang === 'ps' ? 'بیرته' : 'Back');

        modalContent.innerHTML = `
            <div class="equipment-modal-header">
                <button class="back-btn" onclick="closeEquipmentModal()">${backText}</button>
                <h3>${categoryTitle}</h3>
            </div>
            <div class="second-hand-inventory-modal">
                ${buildInventoryCardsHtml(items, lang)}
            </div>
        `;

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }

    function showElectronicsEnergySystemsInventoryModal(lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');

        if (!modal || !modalContent) {
            return;
        }

        const grouped = groupInventoryByCategory();
        const backText = lang === 'fa' ? 'بستن' : (lang === 'ps' ? 'بندول' : 'Close');
        const sectionTitle = localise(content.inventoryTitle, lang);

        const sectionsHtml = Object.entries(grouped).map(([categoryId, items]) => {
            const categoryTitle = localise(categoryMap[categoryId]?.title || { fa: '', en: '', ps: '' }, lang);
            return `
                <section class="second-hand-inventory-category">
                    <h4 class="inventory-category-title">${categoryTitle}</h4>
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

    function updateElectronicsEnergySystemsPage(lang = getLanguage()) {
        setHero(lang);
        renderHighlights(lang);
        renderCategories(lang);
        renderInventory(lang);
        renderAssurance(lang);
        renderProcess(lang);
    }

    function setupInteractions() {
        const cta = document.getElementById('viewElectronicsEnergySystemsButton');
        if (cta) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showElectronicsEnergySystemsInventoryModal(getLanguage());
            });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updateElectronicsEnergySystemsPage();
        setupInteractions();
    });

    window.updateElectronicsEnergySystemsPage = updateElectronicsEnergySystemsPage;
    window.showElectronicsEnergySystemsCategoryModal = showElectronicsEnergySystemsCategoryModal;
    window.electronicsEnergySystemsInventory = inventory;
})();
