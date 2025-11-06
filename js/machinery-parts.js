(function() {
    const content = {
        hero: {
            title: {
                fa: 'قطعات یدکی تخصصی برای تداوم تولید',
                en: 'Specialised Spare Parts to Keep Production Moving',
                ps: 'ځانګړي سپیر پارټونه چې تولید روان ساتي'
            },
            subtitle: {
                fa: 'از باکت و زنجیر شنی تا قالب تزریق، گیربکس و تجهیزات کشاورزی؛ قطعات اورجینال با لجستیک سریع تحویل می‌شوند.',
                en: 'From buckets and track chains to injection moulds, gearboxes and agri spares—genuine parts delivered with rapid logistics.',
                ps: 'له باکت او زنځیرونو څخه تر انجکشن قالبونو، ګیربکسونو او کرنیزو پرزو پورې؛ اصلي پارچې په چټک لوژستیک سره سپارل کېږي.'
            },
            quote: {
                fa: 'هر مجموعه قطعه با ضمانت اصالت، گزارش بازرسی و پشتیبانی نصب توسط تیم صنعتچی ارائه می‌شود.',
                en: 'Each shipment arrives with authenticity guarantee, inspection report and installation support from the Sanaatchi team.',
                ps: 'هره محموله د اصلي توب تضمین، د تفتیش راپور او د صنعتچي ټیم له خوا د نصب ملاتړ سره رسي.'
            },
            secondaryCta: {
                fa: 'مشاهده فهرست قطعات',
                en: 'Browse Spare Parts Catalogue',
                ps: 'د سپیر پارټو کتالوګ وګورئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا قطعات را از صنعتچی تهیه کنیم؟',
            en: 'Why Source Spare Parts with Sanaatchi?',
            ps: 'ولې سپیر پارچې له صنعتچي ترلاسه کړو؟'
        },
        highlightsSubtitle: {
            fa: 'از تأمین سریع تا نصب و راه‌اندازی؛ هر قطعه همراه با خدمات فنی و لجستیکی کامل ارائه می‌شود.',
            en: 'From rapid sourcing to commissioning—every part ships with comprehensive technical and logistics support.',
            ps: 'له چټک تدارک څخه تر فعالولو پورې—هره برخه د تخنیکي او لوژستیک بشپړ ملاتړ سره وړاندې کېږي.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی قطعات',
            en: 'Core Spare Part Families',
            ps: 'د سپیر پارټو اصلي ډلې'
        },
        categoriesSubtitle: {
            fa: 'براساس نوع ماشین‌آلات خود، قطعات ساختمانی، تولیدی، کشاورزی یا عمومی را انتخاب کنید.',
            en: 'Choose construction, production, agricultural or general service parts tailored to your machinery.',
            ps: 'خپل ماشین ته په کتو ساختماني، تولیدي، کرنیزې او عمومي پارچې وټاکئ.'
        },
        inventoryTitle: {
            fa: 'فهرست قطعات آماده تأمین',
            en: 'Spare Parts Ready to Supply',
            ps: 'سپیر پارچې چې د برابرولو لپاره چمتو دي'
        },
        inventorySubtitle: {
            fa: 'جزئیات فنی هر قطعه را بررسی و فایل PDF مشخصات را دانلود کنید.',
            en: 'Review technical details for each part and download the specification PDF.',
            ps: 'د هرې برخې تخنیکي جزئیات وګورئ او د مشخصاتو PDF ډاونلوډ کړئ.'
        },
        assuranceTitle: {
            fa: 'خدمات همراه قطعات یدکی',
            en: 'Services Bundled with Every Spare Part',
            ps: 'له هر سپیر پارټ سره مل خدمات'
        },
        assuranceSubtitle: {
            fa: 'تضمین اصالت، کنترل کیفیت و آموزش نصب برای تیم نگهداری شما.',
            en: 'Authenticity guarantees, QC inspections and installation training for your maintenance crew.',
            ps: 'د اصلي توب تضمین، د کیفیت پلټنې او ستاسو د ساتنې ډلې ته د نصب روزنه.'
        },
        processTitle: {
            fa: 'روند تأمین قطعات',
            en: 'Spare Part Procurement Roadmap',
            ps: 'د سپیر پارټو د تدارک بهیر'
        },
        processSubtitle: {
            fa: 'از ثبت نیاز تا تحویل و نصب در سایت شما را پوشش می‌دهیم.',
            en: 'We cover every step from requirement capture to delivery and commissioning on site.',
            ps: 'له اړتیا ثبتولو څخه تر سپارلو او په ساحه کې فعالولو پورې ټول ګامونه پوښوو.'
        }
    };

    const highlights = [
        {
            icon: '⏱️',
            title: {
                fa: 'تأمین سریع و قابل ردیابی',
                en: 'Rapid & Trackable Sourcing',
                ps: 'چټک او د څار وړ تدارک'
            },
            description: {
                fa: 'با شبکه تأمین آسیایی و اروپایی، قطعات بحرانی را در بازه‌های کوتاه به کابل می‌رسانیم.',
                en: 'Asian and European supplier networks keep critical spares flowing to Kabul in short lead times.',
                ps: 'آسیایي او اروپایي عرضه کوونکي مهم سپیر پارچې په لنډ وخت کې کابل ته رسوي.'
            }
        },
        {
            icon: '🧾',
            title: {
                fa: 'شفافیت کامل مدارک',
                en: 'Complete Documentation Transparency',
                ps: 'د اسنادو بشپړه روڼتیا'
            },
            description: {
                fa: 'فاکتور، گواهی اصالت، گزارش تست و عکس‌های قبل از ارسال همراه هر سفارش ارائه می‌شود.',
                en: 'Invoices, certificates of origin, test reports and pre-shipment photos accompany every order.',
                ps: 'انویسونه، د اصلي توب سندونه، د ټسټ راپورونه او د لېږد مخکې انځورونه له هر امر سره وي.'
            }
        },
        {
            icon: '🛠️',
            title: {
                fa: 'پشتیبانی فنی در محل',
                en: 'On-Site Technical Support',
                ps: 'په ساحه کې تخنیکي ملاتړ'
            },
            description: {
                fa: 'تکنسین‌های ما نصب، هم‌راستایی و تنظیمات اولیه را برای جلوگیری از توقف تولید انجام می‌دهند.',
                en: 'Our technicians handle installation, alignment and initial tuning to avoid production downtime.',
                ps: 'زموږ تخنیکران د نصب، سمولو او لومړنیو ترتیباتو پاملرنه کوي څو تولید ونه درېږي.'
            }
        },
        {
            icon: '🚚',
            title: {
                fa: 'لجستیک درب کارخانه شما',
                en: 'Door-to-Plant Logistics',
                ps: 'تر فابریکې پورې لوژستیک'
            },
            description: {
                fa: 'مدیریت حمل هوایی و زمینی، بیمه و ترخیص برای تحویل امن در افغانستان.',
                en: 'Air and road freight, insurance and customs handled for safe delivery across Afghanistan.',
                ps: 'هوایي او ځمکني بار، بیمه او ګمرک سمبالوو څو په افغانستان کې خوندي سپارنه وشي.'
            }
        }
    ];

    const categories = [
        {
            id: 'construction-parts',
            icon: '🏗️',
            title: {
                fa: 'قطعات ماشین‌آلات ساختمانی',
                en: 'Construction Machinery Parts',
                ps: 'د ساختماني ماشینونو پارچې'
            },
            description: {
                fa: 'باکت، زنجیر شنی، شیلنگ هیدرولیک و کیت‌های اورهال موتور برای بیل و بولدوزر.',
                en: 'Buckets, track chains, hydraulic hoses and engine overhaul kits for excavators and dozers.',
                ps: 'باکتونه، زنځیرونه، هایدرولیک نلۍ او د انجن اورهال کټونه د اکسکاویټر او بلدوزر لپاره.'
            }
        },
        {
            id: 'production-parts',
            icon: '🏭',
            title: {
                fa: 'قطعات خطوط تولید',
                en: 'Production Line Components',
                ps: 'د تولیدي لینونو پارچې'
            },
            description: {
                fa: 'قالب تزریق، تیغه برش، کنترلر CNC و ست‌های موتور-گیربکس برای ماشین‌آلات صنعتی.',
                en: 'Injection moulds, cutting blades, CNC controllers and motor-gearbox sets for processing equipment.',
                ps: 'د انجکشن قالبونه، د پرې کولو تیغونه، CNC کنټرولرونه او د موټر-ګیربکس سیټونه د صنعتي تجهیزاتو لپاره.'
            }
        },
        {
            id: 'agricultural-parts',
            icon: '🚜',
            title: {
                fa: 'قطعات کشاورزی',
                en: 'Agricultural Parts',
                ps: 'د کرنې پارچې'
            },
            description: {
                fa: 'شفت PTO، تیغه دروگر، پمپ آب و سیستم بذرپاش برای ماشین‌آلات مزرعه.',
                en: 'PTO shafts, harvester blades, irrigation pumps and seeding kits for farm machinery.',
                ps: 'د PTO شافټونه، د درو تیغونه، د اوبو پمپونه او د تخم کرلو کټونه د کرنیزو ماشینونو لپاره.'
            }
        },
        {
            id: 'general-parts',
            icon: '⚙️',
            title: {
                fa: 'قطعات عمومی نگهداری',
                en: 'General Maintenance Parts',
                ps: 'د عمومي ساتنې پارچې'
            },
            description: {
                fa: 'یاتاقان، فیلتر، باتری صنعتی و تسمه‌های انتقال نیرو برای تمام صنایع.',
                en: 'Bearings, filters, industrial batteries and power transmission belts for every facility.',
                ps: 'یاتاقانونه، فلټرونه، صنعتي بیټرۍ او د ځواک لېږد تسمې د هرې فابریکې لپاره.'
            }
        }
    ];

    const assuranceHighlights = [
        {
            icon: '🔍',
            title: {
                fa: 'بازرسی و آزمون عملکرد',
                en: 'Inspection & Performance Testing',
                ps: 'تفتیش او د فعالیت ازموینه'
            },
            description: {
                fa: 'پیش از ارسال، قطعات حساس با ابزار دقیق تست و نتایج ثبت می‌شود.',
                en: 'Critical components are tested with calibrated instruments and documented before dispatch.',
                ps: 'مهم پارچې د معیاري وسایلو په وسیله معاینه کېږي او د لېږلو مخکې مستندېږي.'
            }
        },
        {
            icon: '🧰',
            title: {
                fa: 'کیت نصب و دستورالعمل چندزبانه',
                en: 'Installation Kits & Multilingual Manuals',
                ps: 'د نصب کڅوړې او څو ژبې لارښودونه'
            },
            description: {
                fa: 'تمام اقلام لازم برای نصب به همراه دستورالعمل فارسی، انگلیسی و پشتو ارسال می‌شود.',
                en: 'All fasteners and tools ship with Persian, English and Pashto installation manuals.',
                ps: 'ټول اړین فټنرونه او وسایل د فارسی، انګلیسي او پښتو لارښودونو سره لېږل کېږي.'
            }
        },
        {
            icon: '📦',
            title: {
                fa: 'بسته‌بندی مقاوم در برابر ضربه',
                en: 'Impact-Resistant Packaging',
                ps: 'د ټکر پر وړاندې خوندي بسته بندي'
            },
            description: {
                fa: 'استفاده از کرات، فوم و حسگر ضربه برای جلوگیری از آسیب در مسیر حمل.',
                en: 'Crating, foam cushioning and impact indicators prevent damage during transit.',
                ps: 'کریټونه، فوم او د ټکر شاخصونه د لېږد پر مهال زیان مخه نیسي.'
            }
        },
        {
            icon: '🎓',
            title: {
                fa: 'آموزش تیم نگهداری',
                en: 'Maintenance Team Training',
                ps: 'د ساتنې د ټیم روزنه'
            },
            description: {
                fa: 'کارگاه عملی برای تعویض، تنظیم و پایش دوره‌ای قطعات در سایت شما برگزار می‌شود.',
                en: 'Hands-on workshops cover replacement, calibration and preventive checks at your site.',
                ps: 'د لاس پورې ورکشاپونه ستاسو په ساحه کې د بدلولو، عیارولو او مخنیوي معایناتو پوښښ کوي.'
            }
        }
    ];

    const processStages = [
        {
            step: '01',
            title: {
                fa: 'تعریف نیاز و کد قطعات',
                en: 'Define Requirements & Part Codes',
                ps: 'اړتیا او د پارټ کوډونه وټاکئ'
            },
            description: {
                fa: 'لیست قطعات فرسوده، شماره فنی، مقدار و سطح فوریت را ثبت می‌کنیم.',
                en: 'We capture worn parts, technical references, quantities and urgency levels.',
                ps: 'زړې پارچې، تخنیکي شمیرې، مقدار او د بیړني کچې ثبتوو.'
            },
            bullets: [
                { fa: 'مشاوره مهندسی برای انتخاب جایگزین', en: 'Engineering advice on equivalent options', ps: 'د معادل انتخاب لپاره انجنیرۍ مشوره' },
                { fa: 'بررسی موجودی انبار و تحویل اضطراری', en: 'Check buffer stock and emergency delivery windows', ps: 'د زیرمو کتنه او د عاجل سپارلو وختونه' }
            ]
        },
        {
            step: '02',
            title: {
                fa: 'تأیید نمونه و سفارش',
                en: 'Sample Approval & Ordering',
                ps: 'نمونه تایید او امر'
            },
            description: {
                fa: 'نمونه یا دیتاشیت تأیید شده و قرارداد خرید با شرایط پرداخت منعطف امضا می‌شود.',
                en: 'Samples or datasheets are approved and purchase contracts signed with flexible terms.',
                ps: 'نمونې یا د معلوماتو پاڼې تصویب او د انعطاف لرونکو شرطونو سره د پیرود قرارداد لاسلیک کېږي.'
            },
            bullets: [
                { fa: 'دریافت پیش‌فاکتور و برنامه زمان‌بندی', en: 'Receive proforma invoice and delivery schedule', ps: 'مخکینی انویس او د سپارلو مهالویش ترلاسه کړئ' },
                { fa: 'پرداخت مرحله‌ای متناسب با پیشرفت کار', en: 'Milestone payments aligned with progress', ps: 'د کار له پرمختګ سره سم قسط وار تادیات' }
            ]
        },
        {
            step: '03',
            title: {
                fa: 'کنترل کیفیت و بسته‌بندی',
                en: 'Quality Control & Packing',
                ps: 'د کیفیت کنټرول او بسته بندي'
            },
            description: {
                fa: 'بازرسی فنی، مستندسازی و بسته‌بندی مقاوم پیش از ارسال انجام می‌شود.',
                en: 'Technical inspections, documentation and protective packing take place before dispatch.',
                ps: 'تخنیکي پلټنې، مستندسازي او ساتندویه بسته بندي د لېږلو مخکې ترسره کېږي.'
            },
            bullets: [
                { fa: 'ارائه گزارش QC و عکس‌های بسته‌بندی', en: 'Provide QC reports and packing photos', ps: 'د QC راپورونه او د بسته بندۍ انځورونه وړاندې کول' },
                { fa: 'هماهنگی بیمه و حمل بین‌المللی', en: 'Coordinate insurance and international freight', ps: 'د بیمې او نړیوال بار وړلو همغږي' }
            ]
        },
        {
            step: '04',
            title: {
                fa: 'تحویل و راه‌اندازی',
                en: 'Delivery & Commissioning',
                ps: 'سپارنه او فعالول'
            },
            description: {
                fa: 'ترخیص در گمرک افغانستان، تحویل درب سایت و نصب توسط تیم صنعتچی.',
                en: 'Clear Afghan customs, deliver to site and install with Sanaatchi technicians.',
                ps: 'په افغان ګمرک کې تصفیه، سایټ ته سپارنه او د صنعتچي تخنیکرانو له خوا نصب.'
            },
            bullets: [
                { fa: 'آموزش بهره‌برداری و نگهداری', en: 'Operator and maintenance training', ps: 'اپریټر او ساتنې روزنه' },
                { fa: 'پشتیبانی برای سفارش‌های بعدی', en: 'Support for future orders', ps: 'د راتلونکو امرونو ملاتړ' }
            ]
        }
    ];

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    const categoryMap = categories.reduce((acc, category) => {
        acc[category.id] = category;
        return acc;
    }, {});

    const categoryIcons = {
        'construction-parts': '🏗️',
        'production-parts': '🏭',
        'agricultural-parts': '🚜',
        'general-parts': '⚙️'
    };

    const itemIcons = {
        'excavator-bucket': '🪣',
        'hydraulic-hose': '🧵',
        'track-chain': '⛓️',
        'engine-parts': '⚙️',
        'injection-mold': '🧩',
        'cutting-blade': '🔪',
        'cnc-controller': '🖥️',
        'motor-gearbox': '⚙️',
        'tractor-shaft': '🔩',
        'harvester-blade': '🌾',
        'water-pump': '💧',
        'seed-drill': '🌱',
        'industrial-bearings': '🛞',
        'filters': '🧴',
        'batteries': '🔋',
        'belts': '🪢'
    };

    function normaliseInventoryItem(item) {
        const pdfName = item.pdfUrl ? item.pdfUrl.split('/').pop().replace('.pdf', '') : '';
        const categoryId = item.category || 'general-parts';
        return {
            category: categoryId,
            name: item.name,
            description: item.description,
            pdfUrl: item.pdfUrl,
            icon: item.icon || itemIcons[pdfName] || categoryIcons[categoryId] || '📦',
            meta: item.meta || []
        };
    }

    const equipmentSource = typeof equipmentData !== 'undefined'
        ? equipmentData
        : (typeof window !== 'undefined' ? (window.equipmentData || {}) : {});

    const inventory = (Array.isArray(equipmentSource['machinery-parts']) ? equipmentSource['machinery-parts'] : [])
        .map(normaliseInventoryItem);

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function setHero(lang) {
        const title = document.getElementById('machineryPartsHeroTitle');
        const subtitle = document.getElementById('machineryPartsHeroSubtitle');
        const quote = document.getElementById('machineryPartsHeroQuote');
        const cta = document.getElementById('viewMachineryPartsButton');

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
        const title = document.getElementById('machineryPartsHighlightsTitle');
        const subtitle = document.getElementById('machineryPartsHighlightsSubtitle');
        const grid = document.getElementById('machineryPartsHighlightsGrid');

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
        const title = document.getElementById('machineryPartsCategoriesTitle');
        const subtitle = document.getElementById('machineryPartsCategoriesSubtitle');
        const grid = document.getElementById('machineryPartsCategoriesGrid');

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
                        <span>${lang === 'fa' ? 'مشاهده قطعات' : (lang === 'ps' ? 'برخې وګورئ' : 'View parts')}</span>
                        <i class="fas fa-arrow-left"></i>
                    </a>
                </div>
            `;

            const openModal = () => showMachineryPartsCategoryModal(category.id, lang);

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
                ? 'هیچ قطعه‌ای در این دسته ثبت نشده است.'
                : (lang === 'ps' ? 'په دې ډله کې کومه برخه نشته.' : 'No spare parts available in this category.');
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
        const title = document.getElementById('machineryPartsInventoryTitle');
        const subtitle = document.getElementById('machineryPartsInventorySubtitle');
        const grid = document.getElementById('machineryPartsInventoryGrid');

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
        const title = document.getElementById('machineryPartsAssuranceTitle');
        const subtitle = document.getElementById('machineryPartsAssuranceSubtitle');
        const grid = document.getElementById('machineryPartsAssuranceGrid');

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
        const title = document.getElementById('machineryPartsProcessTitle');
        const subtitle = document.getElementById('machineryPartsProcessSubtitle');
        const timeline = document.getElementById('machineryPartsProcessTimeline');

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
            const bullets = stage.bullets?.map(bullet => `<li>${localise(bullet, lang)}</li>`).join('') || '';
            card.innerHTML = `
                <div class="step">${stage.step}</div>
                <h3>${localise(stage.title, lang)}</h3>
                <p>${localise(stage.description, lang)}</p>
                ${bullets ? `<ul>${bullets}</ul>` : ''}
            `;
            timeline.appendChild(card);
        });
    }

    function groupInventoryByCategory() {
        return inventory.reduce((acc, item) => {
            const categoryId = item.category || 'general-parts';
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(item);
            return acc;
        }, {});
    }

    function showMachineryPartsCategoryModal(categoryId, lang = getLanguage()) {
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

    function showMachineryPartsInventoryModal(lang = getLanguage()) {
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

    function updateMachineryPartsPage(lang = getLanguage()) {
        setHero(lang);
        renderHighlights(lang);
        renderCategories(lang);
        renderInventory(lang);
        renderAssurance(lang);
        renderProcess(lang);
    }

    function setupInteractions() {
        const cta = document.getElementById('viewMachineryPartsButton');
        if (cta) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showMachineryPartsInventoryModal(getLanguage());
            });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updateMachineryPartsPage();
        setupInteractions();
    });

    window.updateMachineryPartsPage = updateMachineryPartsPage;
    window.showMachineryPartsCategoryModal = showMachineryPartsCategoryModal;
    window.machineryPartsInventory = inventory;
})();
