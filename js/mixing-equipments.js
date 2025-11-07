(function() {
    const content = {
        hero: {
            title: {
                fa: 'خطوط میکسینگ و تانک‌سازی برای تولید پیوسته',
                en: 'Mixing & Process Tank Solutions for Continuous Production',
                ps: 'د پرله پسې تولید لپاره د مکسینګ او پروسې ټانک حل لارې'
            },
            subtitle: {
                fa: 'از راکتورهای شیمیایی تا تانک‌های ذخیره استیل و تجهیزات فوم؛ طراحی، ساخت و نصب توسط تیم صنعتچی انجام می‌شود.',
                en: 'From chemical reactors to stainless storage tanks and foam systems—design, fabrication and installation handled by the Sanaatchi team.',
                ps: 'له کیمیاوي ریکټورونو څخه تر د زنګ نه وهلو ذخیره ټانکونو او د فوم سیسټمونو پورې—ډیزاین، جوړول او نصب د صنعتچي ټیم پر غاړه دی.'
            },
            quote: {
                fa: 'هر پروژه با مهندسی فرآیند، نقشه‌های اجرایی و تست نشتی تحویل می‌گردد تا تولید بدون توقف ادامه یابد.',
                en: 'Every project ships with process engineering, execution drawings and leak testing to keep production uninterrupted.',
                ps: 'هر پروژه د پروسې انجینري، اجرایي نقشو او د لیک ازموینې سره سپارل کېږي څو تولید بې خنډه روان وي.'
            },
            secondaryCta: {
                fa: 'دانلود فهرست تجهیزات',
                en: 'Download Equipment Catalogue',
                ps: 'د تجهیزاتو کتالوګ ډاونلوډ کړئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا خط میکسینگ خود را به صنعتچی بسپارید؟',
            en: 'Why Build Your Mixing Plant with Sanaatchi?',
            ps: 'ولې خپل د مکسینګ پروژه له صنعتچي سره پرمخ یوسئ؟'
        },
        highlightsSubtitle: {
            fa: 'از مهندسی فرآیند تا نصب در سایت؛ هر پروژه با اسناد کامل و خدمات پس از فروش پشتیبانی می‌شود.',
            en: 'From process engineering to on-site installation—every project includes full documentation and after-sales support.',
            ps: 'له پروسې انجینرۍ څخه تر په ساحه کې نصب پورې—هر پروژه بشپړ اسناد او د پلور وروسته ملاتړ لري.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی تجهیزات میکسینگ',
            en: 'Core Mixing Equipment Families',
            ps: 'د مکسینګ تجهیزاتو اصلي ډلې'
        },
        categoriesSubtitle: {
            fa: 'برای صنایع شیمیایی، دارویی، تانک‌سازی و فوم، راهکار اختصاصی ارائه می‌کنیم.',
            en: 'Tailored solutions for chemical, pharmaceutical, tank fabrication and foam industries.',
            ps: 'د کیمیاوي، درمل جوړونې، ټانک جوړولو او فوم صنعتونو لپاره ځانګړي حلونه وړاندې کوو.'
        },
        inventoryTitle: {
            fa: 'فهرست تجهیزات قابل تأمین',
            en: 'Equipment Available for Supply',
            ps: 'هغه تجهیزات چې برابرولی شو'
        },
        inventorySubtitle: {
            fa: 'مشخصات فنی را بررسی و فایل PDF هر دستگاه را دانلود کنید.',
            en: 'Review technical specifications and download the PDF for each machine.',
            ps: 'تخنیکي ځانګړتیاوې وګورئ او د هر ماشین PDF ډاونلوډ کړئ.'
        },
        assuranceTitle: {
            fa: 'خدمات همراه پروژه میکسینگ',
            en: 'Services Bundled with Every Mixing Project',
            ps: 'له هر د مکسینګ پروژې سره مل خدمات'
        },
        assuranceSubtitle: {
            fa: 'از طراحی مخزن تا اتوماسیون و تست نهایی، تیم صنعتچی کنار شماست.',
            en: 'From tank design to automation and final testing, the Sanaatchi team stands beside you.',
            ps: 'له د ټانک ډیزاین څخه تر اتومات او وروستي ټېسټ پورې، د صنعتچي ټیم ستاسو تر څنګ وي.'
        },
        processTitle: {
            fa: 'مراحل اجرای پروژه میکسینگ',
            en: 'Mixing Project Delivery Steps',
            ps: 'د مکسینګ پروژې د تطبیق پړاوونه'
        },
        processSubtitle: {
            fa: 'تمام گام‌ها از نیازسنجی تا راه‌اندازی را با شفافیت کامل دنبال می‌کنیم.',
            en: 'We manage every step transparently—from requirements capture to commissioning.',
            ps: 'له اړتیا سنجونې څخه تر فعالولو پورې هر پړاو په روڼتیا سمبالوو.'
        }
    };

    const highlights = [
        {
            icon: '🧪',
            title: {
                fa: 'مهندسی فرآیند و شبیه‌سازی',
                en: 'Process Engineering & Simulation',
                ps: 'د پروسې انجینري او سمول'
            },
            description: {
                fa: 'محاسبه ظرفیت، تلاطم و انتقال حرارت براساس فرمولاسیون محصول شما انجام می‌شود.',
                en: 'Capacity, agitation and heat transfer are engineered to match your product formulation.',
                ps: 'ظرفیت، ګډاډ او د تودوخې لېږد د ستاسو د محصول فورمول سره سم محاسبه کېږي.'
            }
        },
        {
            icon: '🛡️',
            title: {
                fa: 'ساخت بهداشتی و گواهی‌دار',
                en: 'Sanitary Fabrication with Certifications',
                ps: 'د حفظ الصحې جوړښت له تصدیقونو سره'
            },
            description: {
                fa: 'جوشکاری آرگون، پولیش بهداشتی و تست جوش مطابق استانداردهای دارویی و غذایی.',
                en: 'Argon welding, sanitary polishing and weld testing meet pharmaceutical and food standards.',
                ps: 'د ارګون ویلډنګ، صحي پولش او د ویلډ ازموینې د درملو او خوړو معیارونه پوره کوي.'
            }
        },
        {
            icon: '⚙️',
            title: {
                fa: 'اتوماسیون و کنترل دقیق',
                en: 'Automation & Precision Control',
                ps: 'اتومات او دقیق کنټرول'
            },
            description: {
                fa: 'PLC، سنسورهای دما و فشار، و اسکیدهای دوزینگ متناسب با سطح اتوماسیون شما طراحی می‌شوند.',
                en: 'PLC, temperature and pressure sensors, and dosing skids are tailored to your automation level.',
                ps: 'PLC، د تودوخې او فشار سینسرونه او دوزینګ سکیډونه ستاسو د اتومات کچې سره سم جوړېږي.'
            }
        },
        {
            icon: '🧰',
            title: {
                fa: 'نصب، آموزش و خدمات پس از فروش',
                en: 'Installation, Training & After-Sales',
                ps: 'نصب، روزنه او د پلور وروسته خدمت'
            },
            description: {
                fa: 'تیم ما نصب مکانیکی، لوله‌کشی و راه‌اندازی را انجام داده و پرسنل شما را آموزش می‌دهد.',
                en: 'Our team handles mechanical installation, piping and commissioning while training your staff.',
                ps: 'زموږ ټیم میخانیکي نصب، پایپ لاین او فعالول ترسره کوي او ستاسو کارکوونکو ته روزنه ورکوي.'
            }
        }
    ];

    const categories = [
        {
            id: 'chemical-pharma',
            icon: '⚗️',
            title: {
                fa: 'راکتورها و تجهیزات دارویی',
                en: 'Reactors & Pharma Equipment',
                ps: 'ریکټورونه او د درمل جوړونې وسایل'
            },
            description: {
                fa: 'راکتورهای جکت‌دار، همزن‌های راکتور و ماشین‌های بسته‌بندی دارویی با کنترل تمیزی.',
                en: 'Jacketed reactors, reactor agitators and pharmaceutical packaging lines with sanitary control.',
                ps: 'جکت لرونکي ریکټورونه، د ریکټور همزنونه او د درملو بسته بندۍ ماشینونه د پاکوالي کنټرول سره.'
            }
        },
        {
            id: 'tanks',
            icon: '🛢️',
            title: {
                fa: 'تانک‌های ذخیره و فرایندی',
                en: 'Process & Storage Tanks',
                ps: 'د پروسې او ذخیرې ټانکونه'
            },
            description: {
                fa: 'تانک‌های آب، اسید و سوخت با متریال استیل یا پلی‌اتیلن و خدمات آسترکاری.',
                en: 'Water, acid and fuel tanks in stainless steel or polyethylene with lining services.',
                ps: 'د اوبو، اسید او سونګ ټانکونه په سټینلیس سټیل یا پولی ایتیلین کې د آستر خدمتونو سره.'
            }
        },
        {
            id: 'foam-sponge',
            icon: '🧽',
            title: {
                fa: 'خطوط فوم و اسفنج',
                en: 'Foam & Sponge Lines',
                ps: 'د فوم او سپنچ لینونه'
            },
            description: {
                fa: 'میکسینگ فوم، قالب‌گیری، برش و بسته‌بندی اسفنج برای تولید مبلمان و کالای خواب.',
                en: 'Foam mixing, moulding, cutting and packaging systems for furniture and bedding production.',
                ps: 'د فوم مخلوط، قالب، پرې کول او بسته بندي سیسټمونه د فرنیچر او بستر تولید لپاره.'
            }
        }
    ];

    const assuranceHighlights = [
        {
            icon: '📐',
            title: {
                fa: 'طراحی سه‌بعدی و ارائه نقشه',
                en: '3D Design & Drawing Packages',
                ps: 'درې بعدي ډیزاین او د نقشو بسته'
            },
            description: {
                fa: 'مدل سه‌بعدی تجهیزات، نقشه ساخت و لیست متریال در اختیار تیم شما قرار می‌گیرد.',
                en: '3D models, fabrication drawings and BOMs are delivered to your engineering team.',
                ps: '۳D ماډلونه، د جوړولو نقشی او د موادو لست ستاسو انجینري ټیم ته سپارل کېږي.'
            }
        },
        {
            icon: '🧪',
            title: {
                fa: 'تست کیفی و گواهی مواد',
                en: 'Quality Testing & Material Certificates',
                ps: 'د کیفیت ټېسټ او د موادو تصدیق'
            },
            description: {
                fa: 'گزارش تست جوش، آنالیز مواد و گواهی FDA یا CE بنا بر نیاز پروژه ارائه می‌شود.',
                en: 'Weld test reports, material analysis and FDA/CE certifications are supplied as required.',
                ps: 'د ویلډ ټېسټ راپورونه، د موادو انالیز او د FDA/CE تصدیقونه د اړتیا سره سم برابروو.'
            }
        },
        {
            icon: '🧯',
            title: {
                fa: 'ایمنی و طراحی مطابق استاندارد',
                en: 'Safety & Code-Compliant Design',
                ps: 'خوندیتوب او له معیارونو سره سم ډیزاین'
            },
            description: {
                fa: 'محاسبات فشار، دریچه‌های اطمینان و ابزار دقیق مطابق استانداردهای بین‌المللی انتخاب می‌شوند.',
                en: 'Pressure calculations, relief valves and instrumentation follow international standards.',
                ps: 'د فشار محاسبې، سیفټي والوګان او وسایل د نړیوالو معیارونو له مخې ټاکل کېږي.'
            }
        },
        {
            icon: '🔄',
            title: {
                fa: 'پشتیبانی بهره‌برداری و قطعات یدکی',
                en: 'Operations Support & Spare Parts',
                ps: 'د عملیاتو ملاتړ او سپېر پارچې'
            },
            description: {
                fa: 'آموزش اپراتور، برنامه نگهداری پیشگیرانه و تأمین قطعات مصرفی تضمین می‌شود.',
                en: 'Operator training, preventive maintenance planning and spare supply are guaranteed.',
                ps: 'د اپراتور روزنه، د مخنیوي ساتنې پلان او د سپېر پارچو برابرول تضمین کېږي.'
            }
        }
    ];

    const processStages = [
        {
            step: '01',
            title: {
                fa: 'نیازسنجی و طراحی مفهومی',
                en: 'Requirements & Concept Design',
                ps: 'د اړتیا سنجونه او مفهومي ډیزاین'
            },
            description: {
                fa: 'مشخصات محصول، ظرفیت و الزامات بهداشتی جمع‌آوری می‌شود.',
                en: 'Collect product specs, capacity targets and sanitary requirements.',
                ps: 'د محصول ځانګړتیاوې، د ظرفیت هدفونه او د حفظ الصحې اړتیاوې راټولوو.'
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
                fa: 'راکتور، همزن، تانک و سیستم‌های کنترلی با نقشه اجرایی انتخاب می‌شوند.',
                en: 'Select reactors, agitators, tanks and control systems with execution drawings.',
                ps: 'ریکټورونه، همزنونه، ټانکونه او کنټرول سیسټمونه د اجرایي نقشو سره ټاکل کېږي.'
            }
        },
        {
            step: '03',
            title: {
                fa: 'ساخت، تست و بازرسی کیفیت',
                en: 'Fabrication, Testing & QA Inspection',
                ps: 'جوړول، ازموینه او د کیفیت تفتیش'
            },
            description: {
                fa: 'ساخت در کارگاه‌های تخصصی، تست هیدرواستاتیک و کنترل کیفیت انجام می‌شود.',
                en: 'Manufacture in specialised workshops, perform hydrostatic tests and QA inspections.',
                ps: 'جوړول په تخصصي ورکشاپونو کې، هایدروستاتیک ټېسټ او د کیفیت تفتیش ترسره کېږي.'
            }
        },
        {
            step: '04',
            title: {
                fa: 'ارسال، نصب و اتصالات فرایندی',
                en: 'Delivery, Installation & Piping',
                ps: 'سپارل، نصب او پروسې پایپ لاین'
            },
            description: {
                fa: 'حمل و نصب در سایت شما انجام شده و لوله‌کشی فرایندی کامل می‌شود.',
                en: 'Deliver and install on site, completing all process piping connections.',
                ps: 'په ساحه کې سپارل او نصب ترسره کېږي او د پروسې پایپونه وصل کېږي.'
            }
        },
        {
            step: '05',
            title: {
                fa: 'راه‌اندازی، آموزش و تحویل نهایی',
                en: 'Commissioning, Training & Handover',
                ps: 'فعاله ول، روزنه او وروستۍ سپارنه'
            },
            description: {
                fa: 'پس از تست‌های عملکردی، آموزش اپراتور و تحویل کامل مستندات انجام می‌شود.',
                en: 'After performance tests we train operators and hand over full documentation.',
                ps: 'د فعالیت له ازموینو وروسته اپراتورانو ته روزنه ورکوو او بشپړ اسناد سپارو.'
            }
        }
    ];

    const categoryMap = categories.reduce((acc, category) => {
        acc[category.id] = category;
        return acc;
    }, {});

    const categoryIcons = {
        'chemical-pharma': '⚗️',
        'tanks': '🛢️',
        'foam-sponge': '🧽'
    };

    const itemIcons = {
        'jacketed-reactor': '🧥',
        'glass-lined-reactor': '🧪',
        'reactor-agitator': '🌀',
        'blister-packing': '📦',
        'bottle-filling': '🍾',
        'cartoning-machine': '📦',
        'mixer': '🌀',
        'granulator': '⚙️',
        'ribbon-blender': '🎀',
        'stainless-tank': '🛢️',
        'plastic-tank': '🧴',
        'acid-tank': '🧪',
        'fuel-tank': '⛽',
        'tank-lining': '🛡️',
        'vertical-tank': '📏',
        'horizontal-tank': '📐',
        'foam-mixing': '🧼',
        'foam-molding': '🪆',
        'foam-cutting': '✂️',
        'contour-cutting': '🪚',
        'horizontal-cutting': '📏',
        'vertical-cutting': '📐',
        'foam-lamination': '🧻',
        'foam-shaping': '🧩'
    };

    function normaliseInventoryItem(item) {
        const pdfName = item.pdfUrl ? item.pdfUrl.split('/').pop().replace('.pdf', '') : '';
        const categoryId = item.category || 'chemical-pharma';
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

    const inventory = (Array.isArray(equipmentSource['mixing-equipments']) ? equipmentSource['mixing-equipments'] : [])
        .map(normaliseInventoryItem);

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function setHero(lang) {
        const title = document.getElementById('mixingEquipmentsHeroTitle');
        const subtitle = document.getElementById('mixingEquipmentsHeroSubtitle');
        const quote = document.getElementById('mixingEquipmentsHeroQuote');
        const cta = document.getElementById('viewMixingEquipmentsButton');

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
        const title = document.getElementById('mixingEquipmentsHighlightsTitle');
        const subtitle = document.getElementById('mixingEquipmentsHighlightsSubtitle');
        const grid = document.getElementById('mixingEquipmentsHighlightsGrid');

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
        const title = document.getElementById('mixingEquipmentsCategoriesTitle');
        const subtitle = document.getElementById('mixingEquipmentsCategoriesSubtitle');
        const grid = document.getElementById('mixingEquipmentsCategoriesGrid');

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

            const openModal = () => showMixingEquipmentsCategoryModal(category.id, lang);

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

        return `<div class="second-hand-inventory-grid">${cards}</div>`;
    }

    function renderInventory(lang) {
        const title = document.getElementById('mixingEquipmentsInventoryTitle');
        const subtitle = document.getElementById('mixingEquipmentsInventorySubtitle');
        const grid = document.getElementById('mixingEquipmentsInventoryGrid');

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
        const title = document.getElementById('mixingEquipmentsAssuranceTitle');
        const subtitle = document.getElementById('mixingEquipmentsAssuranceSubtitle');
        const grid = document.getElementById('mixingEquipmentsAssuranceGrid');

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
        const title = document.getElementById('mixingEquipmentsProcessTitle');
        const subtitle = document.getElementById('mixingEquipmentsProcessSubtitle');
        const timeline = document.getElementById('mixingEquipmentsProcessTimeline');

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
            const categoryId = item.category || 'chemical-pharma';
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(item);
            return acc;
        }, {});
    }

    function showMixingEquipmentsCategoryModal(categoryId, lang = getLanguage()) {
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

    function showMixingEquipmentsInventoryModal(lang = getLanguage()) {
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

    function updateMixingEquipmentsPage(lang = getLanguage()) {
        setHero(lang);
        renderHighlights(lang);
        renderCategories(lang);
        renderInventory(lang);
        renderAssurance(lang);
        renderProcess(lang);
    }

    function setupInteractions() {
        const cta = document.getElementById('viewMixingEquipmentsButton');
        if (cta) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showMixingEquipmentsInventoryModal(getLanguage());
            });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updateMixingEquipmentsPage();
        setupInteractions();
    });

    window.updateMixingEquipmentsPage = updateMixingEquipmentsPage;
    window.showMixingEquipmentsCategoryModal = showMixingEquipmentsCategoryModal;
    window.mixingEquipmentsInventory = inventory;
})();
