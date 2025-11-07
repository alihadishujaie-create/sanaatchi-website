(function() {
    const content = {
        hero: {
            title: {
                fa: 'خطوط یکپارچه پالپ و کاغذ آماده اجرا',
                en: 'Integrated Pulp & Paper Lines Ready to Deploy',
                ps: 'مدغم د پالپ او کاغذ کرښې د تطبیق لپاره چمتو دي'
            },
            subtitle: {
                fa: 'از آماده‌سازی چیپس و خمیرسازی تا ماشین کاغذ و تبدیل نهایی؛ طراحی، تأمین و نصب را با یک تیم متخصص تجربه کنید.',
                en: 'From chip preparation and pulping to paper machines and finishing—design, supply and installation delivered by one specialist team.',
                ps: 'له د چپس برابرولو او خمیر جوړولو څخه تر د کاغذ ماشینونو او وروستي بدلون پورې—ډیزاین، تدارک او نصب د یوه متخصص ټیم له خوا برابریږي.'
            },
            quote: {
                fa: 'هر خط با بالانس آب و انرژی، دستورالعمل شیمیایی و برنامه نگهداری سه‌زبانه تحویل می‌شود.',
                en: 'Each line ships with water and energy balances, chemical recipes and trilingual maintenance programs.',
                ps: 'هره کرښه د اوبو او انرژۍ توازنونو، کیمیاوي نسخو او درې ژبنیو د ساتنې پروګرامونو سره سپارل کېږي.'
            },
            secondaryCta: {
                fa: 'مشاهده فهرست تجهیزات',
                en: 'View Equipment Catalogue',
                ps: 'د تجهیزاتو کتالوګ وګورئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا خطوط پالپ و کاغذ صنعتچی؟',
            en: 'Why Deliver Pulp & Paper Lines with Sanaatchi?',
            ps: 'ولې د پالپ او کاغذ کرښې له صنعتچي سره پلي کړو؟'
        },
        highlightsSubtitle: {
            fa: 'از مطالعات آب و انرژی تا انتخاب تأمین‌کننده و نصب؛ تیم صنعتچی همه مراحل را هدایت می‌کند.',
            en: 'From water and energy studies to supplier selection and installation—the Sanaatchi team guides every step.',
            ps: 'له د اوبو او انرژۍ څېړنو څخه تر عرضه کوونکي ټاکلو او نصب پورې—د صنعتچي ټیم هر ګام رهبري کوي.'
        },
        categoriesTitle: {
            fa: 'بخش‌های اصلی خطوط پالپ و کاغذ',
            en: 'Core Segments of Pulp & Paper Lines',
            ps: 'د پالپ او کاغذ کرښو بنسټیز برخې'
        },
        categoriesSubtitle: {
            fa: 'از خمیرسازی تا ماشین کاغذ و تبدیل نهایی را مطابق ظرفیت کارخانه خود انتخاب کنید.',
            en: 'Select pulping, paper making and converting modules matched to your mill capacity.',
            ps: 'د خپل فابریکې ظرفیت ته برابر د خمیر جوړولو، د کاغذ جوړولو او د بدلون ماډلونه وټاکئ.'
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
            fa: 'خدمات همراه خطوط پالپ و کاغذ',
            en: 'Services Bundled with Pulp & Paper Lines',
            ps: 'له د پالپ او کاغذ کرښو سره مل خدمات'
        },
        assuranceSubtitle: {
            fa: 'از نظارت بر نصب مکانیکی تا تنظیمات شیمیایی و آموزش اپراتور در کنار شما هستیم.',
            en: 'From mechanical installation supervision to chemical tuning and operator training, we stay beside you.',
            ps: 'له میخانیکي نصب څارنې څخه تر کیمیاوي عیارولو او د اپراتور روزنې پورې، موږ له تاسو سره یو.'
        },
        processTitle: {
            fa: 'روند اجرای پروژه پالپ و کاغذ',
            en: 'Pulp & Paper Project Roadmap',
            ps: 'د پالپ او کاغذ د پروژې نقشه'
        },
        processSubtitle: {
            fa: 'چارچوب اجرایی ما از طراحی مفهومی تا تحویل محصول نهایی را پوشش می‌دهد.',
            en: 'Our framework covers concept design through to final product handover.',
            ps: 'زموږ چوکاټ له مفهومي ډیزاین څخه تر وروستي محصول سپارلو پورې رانغاړي.'
        }
    };

    const highlights = [
        {
            icon: '🧪',
            title: {
                fa: 'کنترل کیفیت الیاف و شیمی',
                en: 'Fibre & Chemistry Quality Control',
                ps: 'د فایبر او کیمیا کیفیت کنټرول'
            },
            description: {
                fa: 'آزمایش‌های CSF، قوام و کنترل قلیا برای پایداری کیفیت شیت کاغذ اجرا می‌شود.',
                en: 'CSF, consistency and alkali controls keep sheet quality stable across shifts.',
                ps: 'د CSF، غلظت او الکلي کنټرولونه د کاغذ شیټ کیفیت په دوامداره توګه ثابت ساتي.'
            }
        },
        {
            icon: '💧',
            title: {
                fa: 'مدیریت حلقه آب و بخار',
                en: 'Water & Steam Loop Management',
                ps: 'د اوبو او بخار حلقې مدیریت'
            },
            description: {
                fa: 'مدل‌سازی مصرف آب تازه، بازیافت کندانس و بهینه‌سازی مصرف بخار برای کاهش هزینه انرژی.',
                en: 'Fresh water usage, condensate recovery and steam consumption are modelled to cut energy spend.',
                ps: 'د تازه اوبو کارول، د کندانس بیا راټولول او د بخار مصرف ماډل کېږي څو د انرژۍ لګښت راکم شي.'
            }
        },
        {
            icon: '⚙️',
            title: {
                fa: 'یکپارچگی مکانیک و اتوماسیون',
                en: 'Mechanical & Automation Integration',
                ps: 'د میخانیک او اتومات مدغم کول'
            },
            description: {
                fa: 'از ترازینگ رول‌ها و وکیوم‌ها تا تنظیمات DCS و SCADA برای پایش پیوسته خط.',
                en: 'Roll alignment, vacuum calibration and DCS/SCADA tuning secure continuous line monitoring.',
                ps: 'د رولونو هم‌محوري، د ویکیوم کالیبراسیون او د DCS/SCADA عیارونه د خط دوامداره څارنه تضمینوي.'
            }
        },
        {
            icon: '🛡️',
            title: {
                fa: 'پشتیبانی مواد شیمیایی و مصرفی',
                en: 'Chemical & Consumable Support',
                ps: 'د کیمیاوي او مصرفي موادو ملاتړ'
            },
            description: {
                fa: 'تأمین مواد سفیدکننده، افزودنی‌های رطوبتی و فیلتر پارچه‌ای با برنامه نگهداری دوره‌ای.',
                en: 'Bleaching agents, wet-end additives and felt fabrics supplied with preventative maintenance plans.',
                ps: 'د سپینولو مواد، رطوبتي اضافه کونکي او فیلټ ټوکرونه د مخنیوي ساتنې پلانونو سره برابریږي.'
            }
        }
    ];

    const categories = [
        {
            id: 'pulp-production',
            icon: '🪵',
            title: {
                fa: 'بخش خمیرسازی و آماده‌سازی چیپس',
                en: 'Pulp Production & Chip Preparation',
                ps: 'د خمیر جوړولو او د چپس برابرولو برخه'
            },
            description: {
                fa: 'چیپر، دیفیوذر، شست‌وشو و برج سفیدکننده برای تولید پالپ پایدار.',
                en: 'Chippers, digesters, washing presses and bleaching towers for stable pulp output.',
                ps: 'چیپرونه، ډایجسټرونه، د مینځلو ماشینونه او د سپینولو برجونه د ثابت پالپ تولید لپاره.'
            }
        },
        {
            id: 'paper-production',
            icon: '📄',
            title: {
                fa: 'ماشین‌های تولید کاغذ',
                en: 'Paper Making Machines',
                ps: 'د کاغذ جوړولو ماشینونه'
            },
            description: {
                fa: 'ماشین‌های فوردرینیه، بخش پرس و خشک‌کن با کنترل پروفایل ضخامت و رطوبت.',
                en: 'Fourdrinier machines, press sections and dryers with thickness and moisture control.',
                ps: 'د فوردرینیر ماشینونه، د پرس برخه او وچوونکي د ضخامت او رطوبت کنټرول سره.'
            }
        },
        {
            id: 'paper-converting',
            icon: '🧻',
            title: {
                fa: 'واحدهای تبدیل و بسته‌بندی',
                en: 'Paper Converting & Packaging',
                ps: 'د کاغذ بدلون او بسته بندي واحدونه'
            },
            description: {
                fa: 'تجهیزات برش، کیسه‌سازی، پاکت و تبدیل دستمال با بسته‌بندی خودکار.',
                en: 'Cutting, bag making, envelope and tissue converting lines with automated packaging.',
                ps: 'د پرې کولو، د کڅوړې جوړولو، لفافې او دستمال بدلون کرښې د اتومات بسته بندۍ سره.'
            }
        }
    ];

    const assuranceHighlights = [
        {
            icon: '📋',
            title: {
                fa: 'مستندسازی فرآیند و SOP',
                en: 'Process Documentation & SOPs',
                ps: 'د پروسې اسناد او SOPs'
            },
            description: {
                fa: 'تهیه دفترچه دستورالعمل عملیاتی استاندارد، چک‌لیست‌های ایمنی و فرم‌های کنترل کیفیت.',
                en: 'Standard operating manuals, safety checklists and QC forms compiled for your mill.',
                ps: 'د معیاري عملیاتو لارښودونه، د خوندیتوب چک لیستونه او QC فورمونه ستاسو لپاره ترتیبېږي.'
            }
        },
        {
            icon: '🧑‍🏫',
            title: {
                fa: 'آموزش اپراتور و تکنسین',
                en: 'Operator & Technician Training',
                ps: 'د اپراتور او تخنیکر روزنه'
            },
            description: {
                fa: 'جلسات آموزشی در محل برای تنظیم خمیر، کنترل پروفایل و نگهداری تجهیزات.',
                en: 'On-site coaching on stock prep, profile control and equipment maintenance.',
                ps: 'په ساحه کې د ذخیرې چمتو کولو، پروفایل کنټرول او د تجهیزاتو ساتنې روزنه.'
            }
        },
        {
            icon: '🛠️',
            title: {
                fa: 'نظارت بر نصب مکانیکی',
                en: 'Mechanical Installation Supervision',
                ps: 'د میخانیکي نصب څارنه'
            },
            description: {
                fa: 'ترازینگ رول‌ها، تنظیمات وکیوم، نصب لاینرها و راه‌اندازی درایوها با ابزار دقیق.',
                en: 'Roll alignment, vacuum setup, felt installation and drive commissioning with precision tools.',
                ps: 'د رولونو هم‌محوري، د ویکیوم ترتیب، د فیلټ نصبول او د ډرایف فعالول د دقیقو وسایلو سره.'
            }
        },
        {
            icon: '🔄',
            title: {
                fa: 'پشتیبانی بهره‌برداری و بهینه‌سازی',
                en: 'Operations Support & Optimisation',
                ps: 'د عملیاتو ملاتړ او ښه والی'
            },
            description: {
                fa: 'مانیتورینگ دوره‌ای عملکرد و ارائه پیشنهاد برای بهینه‌سازی مصرف مواد و انرژی.',
                en: 'Periodic performance monitoring with recommendations to optimise chemical and energy consumption.',
                ps: 'د فعالیت دوره يي څارنه او د کیمیاوي او انرژۍ د کارونې د ښه کولو سپارښتنې.'
            }
        }
    ];

    const processStages = [
        {
            step: '01',
            title: {
                fa: 'مطالعات اولیه و طراحی مفهومی',
                en: 'Pre-Engineering & Concept Design',
                ps: 'لومړنۍ څېړنې او مفهومي ډیزاین'
            },
            description: {
                fa: 'تحلیل فیبر خام، کیفیت آب و ظرفیت بخار برای انتخاب فرایند مناسب.',
                en: 'Analyse fibre supply, water quality and steam capacity to define the right process.',
                ps: 'د فایبر عرضې، د اوبو کیفیت او د بخار ظرفیت تحلیل ترڅو سم پروسه وټاکل شي.'
            },
            bullets: [
                { fa: 'نمونه‌گیری چیپس و سنجش رطوبت', en: 'Chip sampling & moisture analysis', ps: 'د چپس نمونې او د رطوبت تحلیل' },
                { fa: 'برآورد توازن آب و انرژی', en: 'Water & energy balance estimation', ps: 'د اوبو او انرژۍ د توازن اټکل' }
            ]
        },
        {
            step: '02',
            title: {
                fa: 'مهندسی تفصیلی و تدارکات',
                en: 'Detailed Engineering & Procurement',
                ps: 'تفصیلي انجینري او تدارکات'
            },
            description: {
                fa: 'طراحی چیدمان، انتخاب تجهیزات اصلی و آماده‌سازی مدارک خرید.',
                en: 'Layout design, selection of core equipment and preparation of procurement packages.',
                ps: 'د ترتیب ډیزاین، اساسي تجهیزاتو ټاکنه او د تدارکاتو د اسنادو چمتو کول.'
            },
            bullets: [
                { fa: 'لیست قطعات کلیدی و زمان‌بندی تأمین', en: 'Key equipment list & sourcing schedule', ps: 'د مهمو تجهیزاتو لست او د تدارک مهالویش' },
                { fa: 'مدارک فنی برای نصب و زیرساخت', en: 'Technical dossiers for installation & utilities', ps: 'د نصب او خدماتو لپاره تخنیکي اسناد' }
            ]
        },
        {
            step: '03',
            title: {
                fa: 'نصب، راه‌اندازی و آموزش',
                en: 'Installation, Commissioning & Training',
                ps: 'نصب، فعالول او روزنه'
            },
            description: {
                fa: 'هماهنگی تیم‌های مکانیک، برق و شیمی برای راه‌اندازی بدون وقفه.',
                en: 'Coordinate mechanical, electrical and chemical teams for seamless start-up.',
                ps: 'د میخانیک، برېښنا او کیمیا ټیمونه همغږي کول څو بې خنډه پیل وشي.'
            },
            bullets: [
                { fa: 'آزمون‌های بدون بار و بار کامل', en: 'Cold & hot commissioning tests', ps: 'د سړې او ګرمې ازموینې' },
                { fa: 'آموزش اپراتور شیفت و تیم نگهداری', en: 'Shift operator & maintenance crew training', ps: 'د شفټ اپراتور او د ساتنې ټیم روزنه' }
            ]
        },
        {
            step: '04',
            title: {
                fa: 'تحویل نهایی و بهینه‌سازی',
                en: 'Handover & Optimisation Support',
                ps: 'سپارل او د ښه والي ملاتړ'
            },
            description: {
                fa: 'تحویل مستندات، پایش تولید اولیه و ارائه راهکار برای بهبود مستمر.',
                en: 'Deliver documentation, monitor initial production and provide continuous improvement plans.',
                ps: 'اسناد سپارل، لومړني تولید څارل او د دوامداره ښه والي پلانونه وړاندې کول.'
            },
            bullets: [
                { fa: 'تحلیل مصرف مواد شیمیایی و انرژی', en: 'Chemical & energy consumption analysis', ps: 'د کیمیاوي او انرژۍ د مصرف تحلیل' },
                { fa: 'برنامه بازرسی و نگهداری دوره‌ای', en: 'Planned inspection & maintenance schedule', ps: 'د معاینې او ساتنې منظم مهالویش' }
            ]
        }
    ];

    const categoryIcons = {
        'pulp-production': '🪵',
        'paper-production': '📄',
        'paper-converting': '🧻'
    };

    const itemIcons = {
        'pulping-machine': '🪓',
        'pulp-washing': '🚿',
        'pulp-bleaching': '✨',
        'paper-machine': '📄',
        'paper-coating': '🎨',
        'paper-cutting': '✂️',
        'paper-bag-making': '🛍️',
        'envelope-making': '✉️',
        'tissue-converting': '🧻'
    };

    function normaliseInventoryItem(item) {
        const pdfName = item.pdfUrl ? item.pdfUrl.split('/').pop().replace('.pdf', '') : '';
        const categoryId = item.category || 'pulp-production';
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

    const inventory = (Array.isArray(equipmentSource['paper-pulp']) ? equipmentSource['paper-pulp'] : [])
        .map(normaliseInventoryItem);

    const categoryMap = categories.reduce((acc, category) => {
        acc[category.id] = category;
        return acc;
    }, {});

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function setHero(lang) {
        const title = document.getElementById('paperPulpHeroTitle');
        const subtitle = document.getElementById('paperPulpHeroSubtitle');
        const quote = document.getElementById('paperPulpHeroQuote');
        const cta = document.getElementById('viewPaperPulpButton');

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
        const title = document.getElementById('paperPulpHighlightsTitle');
        const subtitle = document.getElementById('paperPulpHighlightsSubtitle');
        const grid = document.getElementById('paperPulpHighlightsGrid');

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
        const title = document.getElementById('paperPulpCategoriesTitle');
        const subtitle = document.getElementById('paperPulpCategoriesSubtitle');
        const grid = document.getElementById('paperPulpCategoriesGrid');

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

            const openModal = () => showPaperPulpCategoryModal(category.id, lang);

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
                        event.preventDefault();
                        openModal();
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
        const title = document.getElementById('paperPulpInventoryTitle');
        const subtitle = document.getElementById('paperPulpInventorySubtitle');
        const container = document.getElementById('paperPulpInventoryGrid');
        const section = document.getElementById('paper-pulp-inventory');

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
        const title = document.getElementById('paperPulpAssuranceTitle');
        const subtitle = document.getElementById('paperPulpAssuranceSubtitle');
        const grid = document.getElementById('paperPulpAssuranceGrid');

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
        const title = document.getElementById('paperPulpProcessTitle');
        const subtitle = document.getElementById('paperPulpProcessSubtitle');
        const grid = document.getElementById('paperPulpProcessTimeline');

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
            const categoryId = item.category || 'pulp-production';
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(item);
            return acc;
        }, {});
    }

    function showPaperPulpCategoryModal(categoryId, lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');

        if (!modal || !modalContent) {
            return;
        }

        const grouped = groupInventoryByCategory();
        const items = grouped[categoryId] || [];
        const category = categoryMap[categoryId];
        const backText = lang === 'fa' ? 'بازگشت' : (lang === 'ps' ? 'بیرته' : 'Back');
        const sectionTitle = category ? localise(category.title, lang) : '';

        modalContent.innerHTML = `
            <div class="equipment-modal-header">
                <button class="back-btn" onclick="closeEquipmentModal()">${backText}</button>
                <h3>${sectionTitle}</h3>
            </div>
            <div class="second-hand-inventory-modal">
                ${buildInventoryCardsHtml(items, lang)}
            </div>
        `;

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }

    function showPaperPulpInventoryModal(lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');

        if (!modal || !modalContent) {
            return;
        }

        const grouped = groupInventoryByCategory();
        const categoryOrder = categories.map(category => category.id);
        const backText = lang === 'fa' ? 'بستن' : (lang === 'ps' ? 'بندول' : 'Close');
        const sectionTitle = localise(content.inventoryTitle, lang);

        const sectionsHtml = categoryOrder.map(categoryId => {
            const category = categoryMap[categoryId];
            const items = grouped[categoryId] || [];
            const categoryTitle = category ? localise(category.title, lang) : '';
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

    function updatePaperPulpPage(lang = getLanguage()) {
        const activeLang = lang || getLanguage();
        setHero(activeLang);
        renderHighlights(activeLang);
        renderCategories(activeLang);
        renderInventory(activeLang);
        renderAssurance(activeLang);
        renderProcess(activeLang);
    }

    function setupInteractions() {
        const cta = document.getElementById('viewPaperPulpButton');
        if (cta && !cta.dataset.boundModal) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showPaperPulpInventoryModal(getLanguage());
            });
            cta.dataset.boundModal = 'true';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updatePaperPulpPage();
        setupInteractions();
    });

    window.updatePaperPulpPage = updatePaperPulpPage;

    window.showPaperPulpCategoryModal = showPaperPulpCategoryModal;
    window.showPaperPulpInventoryModal = showPaperPulpInventoryModal;
    window.paperPulpInventory = inventory;
})();
