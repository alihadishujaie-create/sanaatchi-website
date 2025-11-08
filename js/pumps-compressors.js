(function() {
    const content = {
        hero: {
            title: {
                fa: 'راهکارهای پمپ و کمپرسور آماده استقرار',
                en: 'Pump & Compressor Systems Ready to Deploy',
                ps: 'د پمپ او کمپرسور سیسټمونه د نصب لپاره چمتو دي'
            },
            subtitle: {
                fa: 'از پمپ‌های سانتریفیوژ و تقویتی تا کمپرسورهای پیچ، پیستونی و وکیوم صنعتی؛ هر سامانه با نصب و سرویس تحویل می‌شود.',
                en: 'From centrifugal and booster pumps to screw, piston and industrial vacuum systems—delivered with installation and service.',
                ps: 'له سنټرفیوګ او بوستر پمپونو څخه تر سکرو، پسټوني او صنعتي ویکیوم سیسټمونو پورې—هر حل د نصب او خدمت سره وړاندې کېږي.'
            },
            quote: {
                fa: 'هر پروژه با اندازه‌گیری دبی، مستندسازی سه‌زبانه و برنامه نگهداری دوره‌ای تحویل می‌شود.',
                en: 'Each project ships with flow testing, trilingual documentation and a preventative maintenance plan.',
                ps: 'هر پروژه د جریان ازموینې، درې ژبني اسنادو او د مخنیوي ساتنې پلان سره سپارل کېږي.'
            },
            secondaryCta: {
                fa: 'مشاهده فهرست تجهیزات',
                en: 'View Equipment Catalogue',
                ps: 'د تجهیزاتو کتالوګ وګورئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا پمپ و کمپرسور را با صنعتچی اجرا کنیم؟',
            en: 'Why Deliver Pump & Compressor Projects with Sanaatchi?',
            ps: 'ولې د پمپ او کمپرسور پروژې له صنعتچي سره پلي کړو؟'
        },
        highlightsSubtitle: {
            fa: 'از تحلیل دبی و فشار تا انتخاب متریال، هر سامانه با گارانتی عملکرد و پشتیبانی میدانی ارائه می‌شود.',
            en: 'Flow and pressure analysis through material selection—every system arrives with performance guarantees and field support.',
            ps: 'له جریان او فشار تحلیل څخه تر د موادو انتخاب پورې—هر سیسټم د فعالیت ضمانت او میداني ملاتړ سره راځي.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی تجهیزات پمپ و کمپرسور',
            en: 'Core Pump & Compressor Equipment Groups',
            ps: 'د پمپ او کمپرسور تجهیزاتو بنسټیزې ډلې'
        },
        categoriesSubtitle: {
            fa: 'براساس نوع سیال و کاربری خود از پمپ‌های آب، کمپرسورهای هوا، سیستم‌های وکیوم یا قطعات یدکی انتخاب کنید.',
            en: 'Select water pumps, air compressors, vacuum systems or spare parts matched to your media and application.',
            ps: 'د خپل سیال او کارونې له مخې د اوبو پمپونه، د هوا کمپرسورونه، ویکیوم سیستمونه یا سپیر پارچې وټاکئ.'
        },
        inventoryTitle: {
            fa: 'فهرست فایل‌های فنی آماده دانلود',
            en: 'Downloadable Technical Datasheets',
            ps: 'د ډاونلوډ وړ تخنیکي معلومات'
        },
        inventorySubtitle: {
            fa: 'جزئیات فنی هر تجهیز را بررسی کرده و فایل PDF مشخصات را دریافت کنید.',
            en: 'Review specifications for each unit and download the PDF datasheet.',
            ps: 'د هر واحد ځانګړتیاوې وګورئ او د معلوماتو PDF ډاونلوډ کړئ.'
        },
        assuranceTitle: {
            fa: 'خدمات همراه سامانه‌های پمپ و کمپرسور',
            en: 'Services Bundled with Pump & Compressor Systems',
            ps: 'له پمپ او کمپرسور سیسټمونو سره مل خدمات'
        },
        assuranceSubtitle: {
            fa: 'از تست عملکرد و تنظیمات VFD تا آموزش اپراتور، تیم صنعتچی کنار شماست.',
            en: 'From performance testing and VFD tuning to operator training, the Sanaatchi team stands with you.',
            ps: 'له د فعالیت ازموینې او د VFD عیارولو څخه تر د اپراتور روزنې پورې، د صنعتچي ټیم له تاسو سره دی.'
        },
        processTitle: {
            fa: 'روند اجرای پروژه پمپ و کمپرسور',
            en: 'Pump & Compressor Project Roadmap',
            ps: 'د پمپ او کمپرسور د پروژې نقشه'
        },
        processSubtitle: {
            fa: 'چهار گام مهندسی از ارزیابی سایت تا تحویل مستندات نگهداری را با ما طی کنید.',
            en: 'Follow four engineered steps from site assessment to maintenance handover.',
            ps: 'څلور انجنیر شوي ګامونه د سایټ له ارزونې څخه تر د ساتنې د اسنادو سپارلو پورې تعقیب کړئ.'
        }
    };

    const highlights = [
        {
            icon: '📊',
            title: {
                fa: 'مهندسی دبی و فشار',
                en: 'Flow & Pressure Engineering',
                ps: 'د جریان او فشار انجینري'
            },
            description: {
                fa: 'منحنی پمپ، NPSH و نقطه عملکرد سیستم شما مدل‌سازی می‌شود تا انتخاب تجهیز دقیق باشد.',
                en: 'Pump curves, NPSH and system duty points are modelled to select the exact machine.',
                ps: 'د پمپ منحني، NPSH او د سیستم کاري ټکی محاسبه کېږي څو سم ماشین وټاکل شي.'
            }
        },
        {
            icon: '🛡️',
            title: {
                fa: 'انتخاب متریال مقاوم',
                en: 'Durable Material Selection',
                ps: 'د دوامدارو موادو انتخاب'
            },
            description: {
                fa: 'برای سیالات خورنده یا دما بالا، متریال مناسب بدنه، شافت و آب‌بندی طراحی می‌شود.',
                en: 'For corrosive or high-temperature media we engineer the right casing, shaft and sealing materials.',
                ps: 'د زهرجنو یا لوړې تودوخې سیالاتو لپاره، مناسب بدنه، شافټ او سیل مواد ډیزاین کېږي.'
            }
        },
        {
            icon: '🔧',
            title: {
                fa: 'راه‌اندازی و هم‌ترازی دقیق',
                en: 'Precision Commissioning & Alignment',
                ps: 'دقیق فعالول او هم‌محوري'
            },
            description: {
                fa: 'هم‌ترازی شفت، تنظیم VFD و تست ارتعاش برای جلوگیری از توقف ناخواسته انجام می‌شود.',
                en: 'Shaft alignment, VFD tuning and vibration testing prevent unplanned downtime.',
                ps: 'د شافټ هم‌محوري، د VFD عیارول او د رپ ازموینه ترسره کېږي څو ناڅاپي درېدنې ونه شي.'
            }
        },
        {
            icon: '📦',
            title: {
                fa: 'پشتیبانی قطعات و سرویس',
                en: 'Spare Parts & Service Support',
                ps: 'د سپیر پارټو او خدمت ملاتړ'
            },
            description: {
                fa: 'کیت‌های ایمپلر، سیل و ولو به همراه برنامه سرویس و آموزش اپراتور تامین می‌شود.',
                en: 'Impeller, seal and valve kits ship with service schedules and operator coaching.',
                ps: 'د ایمپلر، سیل او والو کټونه د خدمت مهالویش او د اپراتور روزنې سره برابریږي.'
            }
        }
    ];

    const categories = [
        {
            id: 'water-pump',
            icon: '💧',
            title: {
                fa: 'پمپ‌های آب صنعتی',
                en: 'Industrial Water Pumps',
                ps: 'د صنعتي اوبو پمپونه'
            },
            description: {
                fa: 'پمپ‌های سانتریفیوژ، چاهی و بوستر برای آبرسانی شهری و خطوط فرایندی.',
                en: 'Centrifugal, submersible and booster pumps serving municipal supply and process lines.',
                ps: 'سنټرفیوګ، سبمرسیبل او بوستر پمپونه د ښارونو او پروسې لینونو لپاره.'
            }
        },
        {
            id: 'air-compressor',
            icon: '🌬️',
            title: {
                fa: 'کمپرسورهای هوا',
                en: 'Air Compressor Systems',
                ps: 'د هوا کمپرسور سیستمونه'
            },
            description: {
                fa: 'کمپرسورهای پیچ، پیستونی و سیار با خشک‌کن و مخزن ذخیره برای ابزار و خطوط تولید.',
                en: 'Screw, piston and portable compressors with dryers and receivers for tools and production lines.',
                ps: 'سکرو، پسټوني او ګرځنده کمپرسورونه د وچوونکو او ټانکونو سره د وسایلو او تولید لینونو لپاره.'
            }
        },
        {
            id: 'vacuum-pump',
            icon: '🌀',
            title: {
                fa: 'سیستم‌های وکیوم',
                en: 'Vacuum Systems',
                ps: 'د ویکیوم سیستمونه'
            },
            description: {
                fa: 'پمپ‌های پره‌ای روغنی، رینگ مایع و دیافراگمی برای بسته‌بندی و فرایندهای صنعتی.',
                en: 'Oil vane, liquid ring and dry diaphragm pumps for packaging and industrial processes.',
                ps: 'د تېلو وین، د مایع حلقه او وچ ډایافرام پمپونه د بسته بندۍ او صنعتي پروسو لپاره.'
            }
        },
        {
            id: 'pump-parts',
            icon: '⚙️',
            title: {
                fa: 'قطعات و لوازم پمپ',
                en: 'Pump Spares & Accessories',
                ps: 'د پمپ سپیر پارچې او لوازم'
            },
            description: {
                fa: 'ایمپلر، سیل مکانیکی و ولوهای کنترلی برای نگهداری دوره‌ای واحدهای نصب‌شده.',
                en: 'Impellers, mechanical seals and control valves for maintaining installed units.',
                ps: 'ایمپلرونه، میخانیک سیلونه او کنټرول والوز د نصب شوو واحدونو د ساتنې لپاره.'
            }
        }
    ];

    const assuranceHighlights = [
        {
            icon: '🧪',
            title: {
                fa: 'تست عملکرد در کارخانه و سایت',
                en: 'Factory & On-Site Performance Tests',
                ps: 'په فابریکه او ساحه کې د فعالیت ازموینې'
            },
            description: {
                fa: 'قبل از تحویل، تست فشار، دبی و ارتعاش انجام و نتایج مستندسازی می‌شود.',
                en: 'Pressure, flow and vibration tests are run before handover and fully documented.',
                ps: 'د فشار، جریان او رپ ازموینې د سپارلو مخکې ترسره او بشپړ اسناد کېږي.'
            }
        },
        {
            icon: '📈',
            title: {
                fa: 'تنظیمات انرژی و VFD',
                en: 'Energy & VFD Optimisation',
                ps: 'د انرژۍ او VFD اصلاح'
            },
            description: {
                fa: 'پارامترهای VFD، نرم‌استارت و سیستم کنترل برای کمترین مصرف انرژی تنظیم می‌شود.',
                en: 'VFD parameters, soft starters and controls are tuned for lowest energy consumption.',
                ps: 'د VFD پارامترونه، سافټ سټارټر او کنټرولونه د لږ انرژۍ مصرف لپاره عیارېږي.'
            }
        },
        {
            icon: '🎓',
            title: {
                fa: 'آموزش اپراتور و نگهداری',
                en: 'Operator & Maintenance Training',
                ps: 'د اپراتور او ساتنې روزنه'
            },
            description: {
                fa: 'کارگاه عملی برای عیب‌یابی، تعویض قطعات مصرفی و برنامه سرویس ارائه می‌شود.',
                en: 'Hands-on workshops cover troubleshooting, replacing wear parts and planning service intervals.',
                ps: 'د عملي ورکشاپونو له لارې ستونزې حل، د استهلاکي پرزو بدلول او د خدمت مهالویش ښوول کېږي.'
            }
        },
        {
            icon: '🤝',
            title: {
                fa: 'پشتیبانی قطعات یدکی سریع',
                en: 'Rapid Spare Parts Support',
                ps: 'د سپیر پارټو چټک ملاتړ'
            },
            description: {
                fa: 'انبار قطعات حیاتی و کانال مستقیم تامین‌کنندگان برای جلوگیری از توقف تولید فراهم است.',
                en: 'Critical spare stock and direct supplier channels prevent production stoppages.',
                ps: 'د مهمو سپیر پارټو زیرمه او د عرضه کوونکو مستقیمې لارې تولید له درېدو ساتي.'
            }
        }
    ];

    const processStages = [
        {
            step: '01',
            title: {
                fa: 'ارزیابی سایت و نیازسنجی',
                en: 'Site Assessment & Requirement Capture',
                ps: 'د ساحې ارزونه او اړتیا راټولول'
            },
            description: {
                fa: 'نمونه‌گیری از سیال، سنجش فشار موجود و مشخص‌کردن نقاط مصرف انجام می‌شود.',
                en: 'We sample the fluid, measure existing pressures and map consumption points.',
                ps: 'له سیال څخه نمونې اخلو، اوسني فشارونه سنجوو او د مصرف ټکي نقش کوو.'
            },
            bullets: [
                { fa: 'اندازه‌گیری هد موردنیاز و طول لوله‌کشی', en: 'Calculate required head and piping lengths', ps: 'اړین هد او د پایپ اوږدوالی محاسبه کول' },
                { fa: 'تحلیل کیفیت برق و دسترسی سوخت', en: 'Analyse power quality and fuel availability', ps: 'د برېښنا کیفیت او د سون توکو موجودیت تحلیل' }
            ]
        },
        {
            step: '02',
            title: {
                fa: 'طراحی و انتخاب تجهیز',
                en: 'Design & Equipment Selection',
                ps: 'ډیزاین او د تجهیزاتو انتخاب'
            },
            description: {
                fa: 'مدل مناسب پمپ یا کمپرسور، سیستم کنترل و جانمایی سه‌بعدی نهایی می‌شود.',
                en: 'We finalise the pump or compressor model, control scheme and 3D layout.',
                ps: 'د پمپ یا کمپرسور ماډل، کنټرول سکیم او درې بعدي ترتیب وروستى کېږي.'
            },
            bullets: [
                { fa: 'تعریف لیست قطعات مصرفی و سیل‌ها', en: 'Define wear part and seal kits', ps: 'د استهلاکي پرزو او سیلونو لست ټاکل' },
                { fa: 'تهیه زمان‌بندی تامین و ساخت شاسی', en: 'Prepare procurement timeline and skid fabrication plan', ps: 'د تدارک مهالویش او د چوکاټ جوړولو پلان چمتو کول' }
            ]
        },
        {
            step: '03',
            title: {
                fa: 'تولید، تست و حمل',
                en: 'Manufacturing, Testing & Logistics',
                ps: 'تولید، ازموینه او لوژستیک'
            },
            description: {
                fa: 'تجهیزات مونتاژ، تست FAT و SAT انجام و برنامه حمل دریایی یا زمینی تنظیم می‌شود.',
                en: 'Equipment is assembled, FAT/SAT tested and sea or land logistics are scheduled.',
                ps: 'تجهیزات اسمبل کېږي، د FAT/SAT ازموینه کېږي او د سمندري یا ځمکني لوژستیک پلان کېږي.'
            },
            bullets: [
                { fa: 'ارائه گزارش QC و منحنی‌های عملکرد', en: 'Deliver QC reports and performance curves', ps: 'د QC راپورونه او د فعالیت منحني ورکول' },
                { fa: 'بسته‌بندی ضد ضربه و بیمه کامل حمل', en: 'Shock-proof packing and full freight insurance', ps: 'د ټکر ضد بسته بندي او د بار وړلو بشپړه بیمه' }
            ]
        },
        {
            step: '04',
            title: {
                fa: 'نصب، راه‌اندازی و آموزش',
                en: 'Installation, Commissioning & Training',
                ps: 'نصب، فعالول او روزنه'
            },
            description: {
                fa: 'نصب مکانیکی، کابل‌کشی، تست نهایی و آموزش بهره‌برداری و نگهداری انجام می‌شود.',
                en: 'Mechanical installation, cabling, final tests and operations training are delivered.',
                ps: 'میکانیکي نصب، کیبل کشول، وروستۍ ازموینې او د عملیاتو روزنه ترسره کېږي.'
            },
            bullets: [
                { fa: 'تنظیم برنامه نگهداری پیشگیرانه', en: 'Set preventative maintenance schedule', ps: 'د مخنیوي ساتنې مهالویش ټاکل' },
                { fa: 'تحویل مستندات سه‌زبانه و قطعات یدکی', en: 'Handover trilingual manuals and spare parts', ps: 'د درې ژبو لارښودونو او سپیر پارټو سپارل' }
            ]
        }
    ];

    const categoryMap = categories.reduce((acc, category) => {
        acc[category.id] = category;
        return acc;
    }, {});

    const categoryIcons = {
        'water-pump': '💧',
        'air-compressor': '🌬️',
        'vacuum-pump': '🌀',
        'pump-parts': '⚙️'
    };

    const itemIcons = {
        'centrifugal-pump': '💧',
        'submersible-pump': '🌊',
        'booster-pump': '🚰',
        'screw-compressor': '⚙️',
        'piston-compressor': '🔩',
        'portable-compressor': '🚛',
        'rotary-vane-pump': '🪠',
        'liquid-ring-pump': '♻️',
        'diaphragm-pump': '🫧',
        'pump-impeller': '🌀',
        'pump-seal': '🔒',
        'pump-valve': '🔧'
    };

    function normaliseInventoryItem(item) {
        const pdfName = item.pdfUrl ? item.pdfUrl.split('/').pop().replace('.pdf', '') : '';
        const categoryId = item.category || 'pump-parts';
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

    const inventory = (Array.isArray(equipmentSource['pumps-compressors']) ? equipmentSource['pumps-compressors'] : [])
        .map(normaliseInventoryItem);

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function setHero(lang) {
        const title = document.getElementById('pumpsCompressorsHeroTitle');
        const subtitle = document.getElementById('pumpsCompressorsHeroSubtitle');
        const quote = document.getElementById('pumpsCompressorsHeroQuote');
        const cta = document.getElementById('viewPumpsCompressorsButton');

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
        const title = document.getElementById('pumpsCompressorsHighlightsTitle');
        const subtitle = document.getElementById('pumpsCompressorsHighlightsSubtitle');
        const grid = document.getElementById('pumpsCompressorsHighlightsGrid');

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
        const title = document.getElementById('pumpsCompressorsCategoriesTitle');
        const subtitle = document.getElementById('pumpsCompressorsCategoriesSubtitle');
        const grid = document.getElementById('pumpsCompressorsCategoriesGrid');

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

            const openModal = () => showPumpsCompressorsCategoryModal(category.id, lang);

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
                : (lang === 'ps' ? 'په دې ډله کې کوم تجهیزات نشته.' : 'No equipment available in this category.');
            return `<div class="no-equipment">${emptyText}</div>`;
        }

        const viewText = lang === 'fa' ? 'مشاهده PDF' : (lang === 'ps' ? 'PDF وګورئ' : 'View PDF');
        const downloadText = lang === 'fa' ? 'دانلود' : (lang === 'ps' ? 'ډاونلوډ' : 'Download');

        return items.map(item => `
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
    }

    function renderInventory(lang) {
        const title = document.getElementById('pumpsCompressorsInventoryTitle');
        const subtitle = document.getElementById('pumpsCompressorsInventorySubtitle');
        const container = document.getElementById('pumpsCompressorsInventoryGrid');
        const section = document.getElementById('pumps-compressors-inventory');

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
        const title = document.getElementById('pumpsCompressorsAssuranceTitle');
        const subtitle = document.getElementById('pumpsCompressorsAssuranceSubtitle');
        const grid = document.getElementById('pumpsCompressorsAssuranceGrid');

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
        const title = document.getElementById('pumpsCompressorsProcessTitle');
        const subtitle = document.getElementById('pumpsCompressorsProcessSubtitle');
        const grid = document.getElementById('pumpsCompressorsProcessTimeline');

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

    function groupInventoryByCategory() {
        return inventory.reduce((acc, item) => {
            const categoryId = item.category || 'pump-parts';
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(item);
            return acc;
        }, {});
    }

    function showPumpsCompressorsCategoryModal(categoryId, lang = getLanguage()) {
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

    function showPumpsCompressorsInventoryModal(lang = getLanguage()) {
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
        const cta = document.getElementById('viewPumpsCompressorsButton');
        if (cta && !cta.dataset.boundModal) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showPumpsCompressorsInventoryModal(getLanguage());
            });
            cta.dataset.boundModal = 'true';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updatePage();
        setupInteractions();
    });

    window.updatePumpsCompressorsPage = () => {
        updatePage();
        setupInteractions();
    };

    window.showPumpsCompressorsCategoryModal = showPumpsCompressorsCategoryModal;
    window.showPumpsCompressorsInventoryModal = showPumpsCompressorsInventoryModal;
    window.pumpsCompressorsInventory = inventory;
})();
