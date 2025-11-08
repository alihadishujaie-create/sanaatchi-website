(function() {
    const content = {
        hero: {
            title: {
                fa: 'سرویس‌های متالورژی و کوتینگ برای تولید فولاد و رنگ',
                en: 'Metallurgy & Industrial Coating Solutions for Steel and Paint Production',
                ps: 'د فولادو او رنګ تولید لپاره د متالورژۍ او صنعتي پوښښ حل لارې'
            },
            subtitle: {
                fa: 'از کوره‌های ذوب و خطوط نورد تا پوشش‌دهی گالوانیزه و رنگ نهایی؛ طراحی، ساخت و نصب با تیم مهندسی صنعتچی انجام می‌شود.',
                en: 'From melting furnaces and rolling mills to galvanizing and final paint booths—design, fabrication and installation handled by the Sanaatchi engineering team.',
                ps: 'له د ذوب د کورو او رولینګ ملونو څخه تر ګالوانایز او وروستیو رنګ خونيو پورې—ډیزاین، جوړول او نصب د صنعتچي د انجنیري ټیم له خوا ترسره کېږي.'
            },
            quote: {
                fa: 'هر پروژه با محاسبات حرارتی، کنترل کیفیت جوش و گزارش تست پوشش تحویل می‌شود تا تولید پایدار بماند.',
                en: 'Every project ships with thermal calculations, weld quality control and coating test reports to keep production reliable.',
                ps: 'هر پروژه د حرارتي محاسبو، د ویلډ کیفیت کنټرول او د پوښښ د ازموینې راپورونو سره سپارل کېږي څو تولید باوري پاتې شي.'
            },
            secondaryCta: {
                fa: 'دانلود فهرست تجهیزات',
                en: 'Download Equipment Catalogue',
                ps: 'د تجهیزاتو کتالوګ ډاونلوډ کړئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا پروژه متالورژی و کوتینگ خود را به صنعتچی بسپارید؟',
            en: 'Why Deliver Your Metallurgy & Coating Project with Sanaatchi?',
            ps: 'ولې خپل د متالورژۍ او پوښښ پروژه له صنعتچي سره پرمخ یوسئ؟'
        },
        highlightsSubtitle: {
            fa: 'از تحلیل متالورژیکی تا نصب خطوط پوشش‌دهی؛ هر پروژه با اسناد کامل و خدمات پس از فروش پشتیبانی می‌شود.',
            en: 'From metallurgical analysis to coating line installation—every project includes full documentation and after-sales support.',
            ps: 'له متالورژیکي تحلیل څخه تر د پوښښ د کرښو نصب پورې—هر پروژه بشپړ اسناد او د پلور وروسته ملاتړ لري.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی تجهیزات متالورژی و کوتینگ',
            en: 'Core Metallurgy & Coating Equipment Families',
            ps: 'د متالورژۍ او پوښښ د تجهیزاتو اصلي ډلې'
        },
        categoriesSubtitle: {
            fa: 'برای ذوب، نورد، سازه‌های فولادی و پوشش‌های صنعتی راهکار اختصاصی ارائه می‌کنیم.',
            en: 'Tailored solutions for melting, rolling, steel structures and industrial coatings.',
            ps: 'د ذوب، رولینګ، د فولادي جوړښتونو او صنعتي پوښښونو لپاره ځانګړي حلونه وړاندې کوو.'
        },
        inventoryTitle: {
            fa: 'فهرست تجهیزات قابل تأمین',
            en: 'Equipment Available for Supply',
            ps: 'هغه تجهیزات چې برابرولی شو'
        },
        inventorySubtitle: {
            fa: 'مشخصات فنی تجهیزات متالورژی و کوتینگ را بررسی و فایل PDF هر دستگاه را دانلود کنید.',
            en: 'Review the metallurgy and coating equipment specs and download the PDF for each machine.',
            ps: 'د متالورژۍ او پوښښ د تجهیزاتو تخنیکي ځانګړتیاوې وګورئ او د هر ماشین PDF ډاونلوډ کړئ.'
        },
        assuranceTitle: {
            fa: 'خدمات همراه پروژه متالورژی و کوتینگ',
            en: 'Services Bundled with Every Metallurgy & Coating Project',
            ps: 'له هر د متالورژۍ او پوښښ پروژې سره مل خدمات'
        },
        assuranceSubtitle: {
            fa: 'از طراحی کوره تا پوشش نهایی و تست چسبندگی، تیم صنعتچی همراه شماست.',
            en: 'From furnace design to final coating adhesion tests, the Sanaatchi team stands beside you.',
            ps: 'له د کوره ډیزاین څخه تر وروستي پوښښ د چسپېدو ازموینو پورې، د صنعتچي ټیم ستاسو تر څنګ وي.'
        },
        processTitle: {
            fa: 'مراحل اجرای پروژه متالورژی و کوتینگ',
            en: 'Metallurgy & Coating Project Delivery Steps',
            ps: 'د متالورژۍ او پوښښ د پروژې د تطبیق پړاوونه'
        },
        processSubtitle: {
            fa: 'تمام گام‌ها از نیازسنجی تا تحویل خط پوشش‌دهی را با شفافیت کامل مدیریت می‌کنیم.',
            en: 'We manage every step transparently—from requirements capture to commissioning the coating line.',
            ps: 'له اړتیا سنجونې څخه تر د پوښښ د کرښې تر فعالولو پورې هر پړاو په روڼتیا سمبالوو.'
        }
    };

    const highlights = [
        {
            icon: '🔥',
            title: {
                fa: 'مهندسی حرارتی و انتخاب آلیاژ',
                en: 'Thermal Engineering & Alloy Selection',
                ps: 'حرارتي انجینري او د الیاژ انتخاب'
            },
            description: {
                fa: 'تحلیل ترکیب فولاد، نمودار فاز و ظرفیت کوره برای رسیدن به کیفیت مذاب هدف انجام می‌شود.',
                en: 'Steel chemistry analysis, phase diagrams and furnace sizing deliver the target melt quality.',
                ps: 'د فولادو د ترکیب تحلیل، د فازونو انځور او د کوره اندازه ټاکل د ټاکلي مذاب کیفیت لپاره ترسره کېږي.'
            }
        },
        {
            icon: '🛡️',
            title: {
                fa: 'کنترل کیفیت جوش و سازه',
                en: 'Weld & Structural Quality Control',
                ps: 'د ویلډ او جوړښت کیفیت کنټرول'
            },
            description: {
                fa: 'تست‌های التراسونیک، جوشکاری مطابق WPS و مستندسازی دقیق برای سازه‌های سنگین اجرا می‌شود.',
                en: 'Ultrasonic testing, WPS-compliant welding and precise documentation support heavy structures.',
                ps: 'الټراسونیک ازموینې، د WPS سره سم ویلډنګ او دقیق مستندسازي د درنو جوړښتونو ملاتړ کوي.'
            }
        },
        {
            icon: '⚙️',
            title: {
                fa: 'اتوماسیون خطوط نورد و پوشش',
                en: 'Rolling & Coating Line Automation',
                ps: 'د رولینګ او پوښښ کرښو اتومات'
            },
            description: {
                fa: 'PLC، درایوهای سرعت متغیر و مانیتورینگ ضخامت لایه برای ثبات تولید پیاده‌سازی می‌شود.',
                en: 'PLC, variable speed drives and thickness monitoring ensure stable rolling and coating throughput.',
                ps: 'PLC، د سرعت بدلېدونکي ډرایونه او د ضخامت څارنه د رولینګ او پوښښ ثابت تولید تضمینوي.'
            }
        },
        {
            icon: '🧰',
            title: {
                fa: 'راه‌اندازی، آموزش و خدمات پس از فروش',
                en: 'Commissioning, Training & After-Sales',
                ps: 'فعاله ول، روزنه او د پلور وروسته خدمت'
            },
            description: {
                fa: 'از نصب مکانیکی تا آموزش اپراتور و تأمین قطعات یدکی، تیم صنعتچی کنار شماست.',
                en: 'Our team handles mechanical installation, operator training and spare parts support.',
                ps: 'زموږ ټیم میخانیکي نصب، د اپراتور روزنه او د سپېر پرزو ملاتړ برابروي.'
            }
        }
    ];

    const categories = [
        {
            id: 'iron-melting',
            icon: '🔥',
            title: {
                fa: 'کوره‌های ذوب و ریخته‌گری',
                en: 'Melting Furnaces & Casting Cells',
                ps: 'د ذوب کوره او د اچولو حجرې'
            },
            description: {
                fa: 'کوره القایی، قوس الکتریکی و ماشین ریخته‌گری پیوسته برای کنترل کیفیت مذاب و نرخ تولید.',
                en: 'Induction and arc furnaces with continuous casting machines to control melt quality and throughput.',
                ps: 'د انډکشن او قوسي کوره ګانې د پرله پسې اچولو ماشینونو سره د مذاب کیفیت او ظرفیت کنټرولوي.'
            }
        },
        {
            id: 'rolling-mill',
            icon: '⚙️',
            title: {
                fa: 'خطوط نورد گرم و سرد',
                en: 'Hot & Cold Rolling Lines',
                ps: 'د ګرم او یخ رولینګ کرښې'
            },
            description: {
                fa: 'قفسه‌های نورد، خنک‌کاری و تنظیم ضخامت برای تولید ورق و مقاطع دقیق.',
                en: 'Rolling stands, cooling beds and thickness control to produce precise sheet and section profiles.',
                ps: 'د رولینګ سټېنډونه، د یخولو بسترونه او د ضخامت کنټرول دقیق شیټ او پروفایل تولیدوي.'
            }
        },
        {
            id: 'steel-structure',
            icon: '🏗️',
            title: {
                fa: 'ساخت سازه‌های فولادی',
                en: 'Steel Structure Fabrication',
                ps: 'د فولادي جوړښت جوړونه'
            },
            description: {
                fa: 'جوش تیر، برش CNC و مونتاژ سازه‌های سنگین برای سالن‌ها و برج‌ها.',
                en: 'Beam welding, CNC cutting and heavy structure assembly for plants and towers.',
                ps: 'د بیم ویلډنګ، CNC پرې کول او د درنو جوړښتونو اسمبل د فابریکو او برجونو لپاره.'
            }
        },
        {
            id: 'metal-coating',
            icon: '🛡️',
            title: {
                fa: 'پوشش‌های فلزی و گالوانیزه',
                en: 'Metal Coating & Galvanizing',
                ps: 'د فلزي پوښښ او ګالوانایز'
            },
            description: {
                fa: 'گالوانیزه گرم، پوشش پودری و الکتروپلیتینگ برای محافظت در برابر خوردگی.',
                en: 'Hot-dip galvanizing, powder coating and electroplating systems to protect against corrosion.',
                ps: 'د ګرم ګالوانایز، پوډر پوښښ او الکترپلېټینګ سیستمونه د زنګ پر وړاندې ساتنه برابروي.'
            }
        },
        {
            id: 'powder-coating',
            icon: '🌫️',
            title: {
                fa: 'خطوط پوشش پودری',
                en: 'Powder Coating Lines',
                ps: 'د پوډر پوښښ کرښې'
            },
            description: {
                fa: 'میکس، پاشش و کوره پخت برای دستیابی به ضخامت یکنواخت لایه پودری.',
                en: 'Mixing, spraying and curing ovens deliver uniform powder layer thickness.',
                ps: 'مکس کول، شیندل او د پخېدو تنورونه یکنواخت د پوډر طبقه جوړوي.'
            }
        },
        {
            id: 'spray-painting',
            icon: '🖌️',
            title: {
                fa: 'حجره‌های رنگ پاشی',
                en: 'Spray Painting Booths',
                ps: 'د رنګ شیندلو خونې'
            },
            description: {
                fa: 'کابین پاشش، گان‌های فشار بالا و خشک‌کن هوای گرم برای رنگ‌آمیزی باکیفیت.',
                en: 'Spray booths, high-pressure guns and hot-air dryers for high-quality painting.',
                ps: 'د رنګ شیندلو کابینونه، لوړ فشار ټوپکونه او د ګرمې هوا وچوونکي د لوړ کیفیت رنګولو لپاره.'
            }
        },
        {
            id: 'liquid-paint',
            icon: '🧴',
            title: {
                fa: 'فرآیند پر و لیبل‌زنی رنگ مایع',
                en: 'Liquid Paint Filling & Labelling',
                ps: 'د مایع رنګ ډکول او لیبل کول'
            },
            description: {
                fa: 'سیستم‌های اختلاط، پرکن و لیبل‌زن اتومات برای بسته‌بندی رنگ مایع.',
                en: 'Automated mixing, filling and labelling systems for liquid paint packaging.',
                ps: 'اتومات مکس، ډکول او لیبل سیسټمونه د مایع رنګ د بسته بندۍ لپاره.'
            }
        },
        {
            id: 'surface-treatment',
            icon: '🧼',
            title: {
                fa: 'آماده‌سازی و تیمار سطح',
                en: 'Surface Preparation Systems',
                ps: 'د سطحې د چمتو کولو سیستمونه'
            },
            description: {
                fa: 'چربی‌زدایی، فسفاته و شات‌بلست برای چسبندگی و دوام بهتر پوشش.',
                en: 'Degreasing, phosphating and sandblasting to improve coating adhesion and durability.',
                ps: 'د غوړ لرې کول، فاسفېټ کول او شګه پاشل د پوښښ د چسپېدو او دوام د لوړولو لپاره.'
            }
        }
    ];

    const assuranceHighlights = [
        {
            icon: '📐',
            title: {
                fa: 'طراحی مهندسی و شاپ‌دراوینگ',
                en: 'Engineering Design & Shop Drawings',
                ps: 'انجینري ډیزاین او شاپ ډراینګ'
            },
            description: {
                fa: 'تهیه مدارک متالورژیکی، نقشه‌های ساخت و محاسبات بار برای هر پروژه.',
                en: 'Metallurgical documentation, fabrication drawings and load calculations prepared for every project.',
                ps: 'د متالورژۍ اسناد، د جوړولو نقاشۍ او د بار محاسبې د هر پروژې لپاره برابریږي.'
            }
        },
        {
            icon: '🧪',
            title: {
                fa: 'کنترل کیفیت و آزمایشگاه',
                en: 'Quality Control & Laboratory Testing',
                ps: 'د کیفیت کنټرول او لابراتوار ازموینې'
            },
            description: {
                fa: 'نمونه‌گیری مذاب، تست‌های غیرمخرب و گزارش ضخامت پوشش مطابق استاندارد ارائه می‌شود.',
                en: 'Melt sampling, NDT checks and coating thickness reports delivered to standard.',
                ps: 'د مذاب نمونې، غیرمخرب ټېسټونه او د پوښ ضخامت راپورونه د معیار سره سم وړاندې کېږي.'
            }
        },
        {
            icon: '🚛',
            title: {
                fa: 'مدیریت تأمین‌کنندگان و لجستیک',
                en: 'Supplier Management & Logistics',
                ps: 'د عرضه کوونکو مدیریت او لوژستیک'
            },
            description: {
                fa: 'بازرسی کارخانه سازنده، زمان‌بندی تولید و حمل تخصصی برای تجهیزات سنگین هماهنگ می‌شود.',
                en: 'Factory inspections, production scheduling and heavy-equipment logistics are coordinated.',
                ps: 'د فابریکې تفتیش، د تولید مهالویش او د درنو تجهیزاتو لوژستیک همغږي کېږي.'
            }
        },
        {
            icon: '🔧',
            title: {
                fa: 'نصب، آموزش و خدمات پس از فروش',
                en: 'Installation, Training & After-Sales',
                ps: 'نصب، روزنه او د پلور وروسته خدمت'
            },
            description: {
                fa: 'نصب مکانیکی، راه‌اندازی اتوماسیون و آموزش اپراتور به همراه تأمین قطعات یدکی تضمین می‌شود.',
                en: 'Mechanical installation, automation commissioning and operator training with guaranteed spare support.',
                ps: 'میخانیکي نصب، د اتومات سیستم فعاله ول او د اپراتور روزنه د سپېر ملاتړ سره تضمین کېږي.'
            }
        }
    ];

    const processStages = [
        {
            step: '01',
            title: {
                fa: 'تحلیل نیاز و طراحی متالورژیکی',
                en: 'Needs Assessment & Metallurgical Design',
                ps: 'د اړتیا سنجونه او متالورژي ډیزاین'
            },
            description: {
                fa: 'مشخصات محصول، ظرفیت ذوب و معیارهای پوشش جمع‌آوری و تحلیل می‌شود.',
                en: 'Gather product specs, melting capacity targets and coating criteria for analysis.',
                ps: 'د محصول ځانګړتیاوې، د ذوب ظرفیت هدفونه او د پوښ معیارونه راټولوو او تحلیل کوو.'
            }
        },
        {
            step: '02',
            title: {
                fa: 'مهندسی تفصیلی و انتخاب تجهیزات',
                en: 'Detailed Engineering & Equipment Selection',
                ps: 'تفصيلي انجینري او د تجهیزاتو ټاکنه'
            },
            description: {
                fa: 'کوره، خط نورد و سیستم‌های پوشش با نقشه اجرایی و BOM دقیق انتخاب می‌شوند.',
                en: 'Select furnaces, rolling lines and coating systems with execution drawings and detailed BOMs.',
                ps: 'کوره، رولینګ کرښې او د پوښ سیستمونه د اجرایي نقشو او مفصل BOM سره ټاکل کېږي.'
            }
        },
        {
            step: '03',
            title: {
                fa: 'ساخت، تست و کنترل کیفیت',
                en: 'Fabrication, Testing & Quality Control',
                ps: 'جوړول، ازموینه او د کیفیت کنټرول'
            },
            description: {
                fa: 'ساخت در کارگاه‌های تاییدشده، تست‌های NDT و کنترل ضخامت پوشش انجام می‌شود.',
                en: 'Manufacture in certified shops, perform NDT checks and verify coating thickness.',
                ps: 'جوړول په تایید شویو ورکشاپونو کې، غیرمخرب ټېسټونه او د پوښ ضخامت تایید ترسره کېږي.'
            }
        },
        {
            step: '04',
            title: {
                fa: 'حمل، نصب و هم‌راستاسازی',
                en: 'Transport, Installation & Alignment',
                ps: 'ترانسپورت، نصب او الاینمنت'
            },
            description: {
                fa: 'تجهیزات سنگین حمل شده، نصب مکانیکی و هم‌راستاسازی دقیق در سایت انجام می‌شود.',
                en: 'Heavy equipment is transported, mechanically installed and precisely aligned on site.',
                ps: 'درانه تجهیزات لېږدول کېږي، میخانیکي نصب او په ساحه کې په دقت سره الاین کېږي.'
            }
        },
        {
            step: '05',
            title: {
                fa: 'راه‌اندازی، آموزش و تحویل نهایی',
                en: 'Commissioning, Training & Final Handover',
                ps: 'فعاله ول، روزنه او وروستۍ سپارنه'
            },
            description: {
                fa: 'پس از راه‌اندازی گرم، آموزش اپراتور و تحویل کامل مستندات ارائه می‌شود.',
                en: 'After hot commissioning we train operators and deliver the complete documentation set.',
                ps: 'له ګرم فعالولو وروسته اپراتوران روزو او بشپړ اسناد سپارو.'
            }
        }
    ];

    const categoryMap = categories.reduce((acc, category) => {
        acc[category.id] = category;
        return acc;
    }, {});

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    const categoryIcons = {
        'iron-melting': '🔥',
        'rolling-mill': '⚙️',
        'steel-structure': '🏗️',
        'metal-coating': '🛡️',
        'powder-coating': '🌫️',
        'spray-painting': '🖌️',
        'liquid-paint': '🧴',
        'surface-treatment': '🧼'
    };

    const itemIcons = {
        'induction-furnace': '⚡',
        'arc-furnace': '⚡',
        'casting-machine': '🏭',
        'hot-rolling': '♨️',
        'cold-rolling': '❄️',
        'roll-grinding': '🪚',
        'beam-welding': '🔩',
        'structure-cutting': '🪚',
        'structure-assembly': '🏗️',
        'galvanizing': '🛡️',
        'powder-coating': '🌫️',
        'electroplating': '⚗️',
        'powder-mixing': '🌀',
        'powder-spraying': '🎯',
        'powder-curing': '🔥',
        'spray-booth': '🚿',
        'spray-gun': '🎨',
        'spray-drying': '🌬️',
        'paint-mixing': '🧪',
        'paint-filling': '🛢️',
        'paint-labeling': '🏷️',
        'degreasing': '🧼',
        'phosphating': '🧪',
        'sandblasting': '💥'
    };

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
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

    function normaliseInventoryItem(item) {
        const pdfName = item.pdfUrl ? item.pdfUrl.split('/').pop().replace('.pdf', '') : '';
        const categoryId = item.category || 'iron-melting';
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

    const inventory = (Array.isArray(equipmentSource['metallurgy-coating']) ? equipmentSource['metallurgy-coating'] : [])
        .map(normaliseInventoryItem);

    function setHero(lang) {
        const title = document.getElementById('metallurgyCoatingHeroTitle');
        const subtitle = document.getElementById('metallurgyCoatingHeroSubtitle');
        const quote = document.getElementById('metallurgyCoatingHeroQuote');
        const cta = document.getElementById('viewMetallurgyCoatingButton');

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
        const title = document.getElementById('metallurgyCoatingHighlightsTitle');
        const subtitle = document.getElementById('metallurgyCoatingHighlightsSubtitle');
        const grid = document.getElementById('metallurgyCoatingHighlightsGrid');

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
        const title = document.getElementById('metallurgyCoatingCategoriesTitle');
        const subtitle = document.getElementById('metallurgyCoatingCategoriesSubtitle');
        const grid = document.getElementById('metallurgyCoatingCategoriesGrid');

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

            const openModal = () => showMetallurgyCoatingCategoryModal(category.id, lang);

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
        const title = document.getElementById('metallurgyCoatingInventoryTitle');
        const subtitle = document.getElementById('metallurgyCoatingInventorySubtitle');
        const grid = document.getElementById('metallurgyCoatingInventoryGrid');

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
        const title = document.getElementById('metallurgyCoatingAssuranceTitle');
        const subtitle = document.getElementById('metallurgyCoatingAssuranceSubtitle');
        const grid = document.getElementById('metallurgyCoatingAssuranceGrid');

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
        const title = document.getElementById('metallurgyCoatingProcessTitle');
        const subtitle = document.getElementById('metallurgyCoatingProcessSubtitle');
        const timeline = document.getElementById('metallurgyCoatingProcessTimeline');

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

    function groupInventoryByCategory() {
        return inventory.reduce((acc, item) => {
            const categoryId = item.category || 'iron-melting';
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(item);
            return acc;
        }, {});
    }

    function showMetallurgyCoatingCategoryModal(categoryId, lang = getLanguage()) {
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

    function showMetallurgyCoatingInventoryModal(lang = getLanguage()) {
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

    function updateMetallurgyCoatingPage(lang = getLanguage()) {
        setHero(lang);
        renderHighlights(lang);
        renderCategories(lang);
        renderInventory(lang);
        renderAssurance(lang);
        renderProcess(lang);
    }

    function setupInteractions() {
        const cta = document.getElementById('viewMetallurgyCoatingButton');
        if (cta) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showMetallurgyCoatingInventoryModal(getLanguage());
            });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updateMetallurgyCoatingPage();
        setupInteractions();
    });

    window.updateMetallurgyCoatingPage = updateMetallurgyCoatingPage;
    window.showMetallurgyCoatingCategoryModal = showMetallurgyCoatingCategoryModal;
    window.metallurgyCoatingInventory = inventory;
})();
