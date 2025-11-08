(function() {
    const content = {
        hero: {
            title: {
                fa: 'خطوط صنعت پلاستیک آماده راه‌اندازی',
                en: 'Plastic Industry Lines Ready for Deployment',
                ps: 'د پلاستیک صنعت لینونه د نصب لپاره چمتو دي'
            },
            subtitle: {
                fa: 'اکسترودر، تزریق، دمشی و بازیافت پلاستیک با مهندسی کامل، نصب و آموزش تحویل داده می‌شود.',
                en: 'Extrusion, injection, blow moulding and plastic recycling systems delivered with engineering, installation and training.',
                ps: 'اکسترودر، انجکشن، بلو مولډنګ او د پلاستیک ریسایکل سیسټمونه د انجینرۍ، نصب او روزنې سره سپارل کېږي.'
            },
            quote: {
                fa: 'هر پروژه با تحلیل مواد، تنظیمات قالب و برنامه نگهداری ارائه می‌گردد تا تولید بدون توقف ادامه یابد.',
                en: 'Every project includes material analysis, mould tuning and maintenance planning to keep production uninterrupted.',
                ps: 'هر پروژه د موادو تحلیل، د قالب تنظیم او د ساتنې پلان لري څو تولید بې خنډه پرمخ ولاړ شي.'
            },
            secondaryCta: {
                fa: 'دانلود فهرست تجهیزات',
                en: 'Download Equipment Catalogue',
                ps: 'د تجهیزاتو کتالوګ ډاونلوډ کړئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا پروژه پلاستیک خود را با صنعتچی اجرا کنیم؟',
            en: 'Why Build Your Plastic Operations with Sanaatchi?',
            ps: 'ولې خپل د پلاستیک عملیات له صنعتچي سره پرمخ یوسو؟'
        },
        highlightsSubtitle: {
            fa: 'از طراحی قالب و اکسترودر تا اتوماسیون و بازیافت؛ همه چیز با تضمین کیفیت و تحویل سریع انجام می‌شود.',
            en: 'From tooling and extrusion to automation and recycling—delivered with quality assurance and rapid deployment.',
            ps: 'له قالب جوړونې او اکسترودر څخه تر اتومات او ریسایکل پورې—د کیفیت تضمین او چټک سپارلو سره ترسره کېږي.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی تجهیزات صنعت پلاستیک',
            en: 'Core Plastic Industry Equipment Families',
            ps: 'د پلاستیک صنعت اصلي د تجهیزاتو ډلې'
        },
        categoriesSubtitle: {
            fa: 'از اکسترودرهای پروفایل و فیلم تا تزریق و بازیافت ضایعات پلاستیکی را انتخاب کنید.',
            en: 'Choose extrusion, injection or recycling systems tailored to your plastic products.',
            ps: 'د خپلو پلاستیکي محصولاتو لپاره اکسترودر، انجکشن یا د ریسایکل سیسټمونه وټاکئ.'
        },
        inventoryTitle: {
            fa: 'فهرست تجهیزات قابل تأمین',
            en: 'Equipment Available for Supply',
            ps: 'هغه تجهیزات چې برابرولی شو'
        },
        inventorySubtitle: {
            fa: 'مشخصات فنی را بررسی و فایل PDF سه‌زبانه هر دستگاه را دانلود کنید.',
            en: 'Review specifications and download the trilingual PDF for each machine.',
            ps: 'تخنیکي ځانګړتیاوې وګورئ او د هر ماشین درې ژبنه PDF ډاونلوډ کړئ.'
        },
        assuranceTitle: {
            fa: 'خدمات همراه پروژه‌های پلاستیک',
            en: 'Services Bundled with Plastic Projects',
            ps: 'له د پلاستیک پروژو سره مل خدمات'
        },
        assuranceSubtitle: {
            fa: 'طراحی قالب، اتوماسیون، آموزش اپراتور و تأمین قطعات مصرفی به صورت یکپارچه ارائه می‌شود.',
            en: 'Tooling design, automation, operator training and spare provisioning delivered as one package.',
            ps: 'د قالب ډیزاین، اتومات، د اپراتور روزنه او د اضافي پرزو برابرول په یوه بسته کې وړاندې کېږي.'
        },
        processTitle: {
            fa: 'مراحل اجرای پروژه صنعت پلاستیک',
            en: 'Plastic Industry Project Delivery Steps',
            ps: 'د پلاستیک صنعت د پروژې د تطبیق پړاوونه'
        },
        processSubtitle: {
            fa: 'گام‌به‌گام از تحلیل ماده اولیه تا تولید انبوه و بازیافت همراه شما هستیم.',
            en: 'Step-by-step support from raw material analysis to mass production and recycling.',
            ps: 'له خام موادو د تحلیل څخه تر ډله ییز تولید او ریسایکل پورې له تاسو سره یو یو ګام مرسته کوو.'
        }
    };

    const highlights = [
        {
            icon: '🧪',
            title: {
                fa: 'تحلیل مواد و فرمولاسیون',
                en: 'Material Analysis & Formulation',
                ps: 'د موادو تحلیل او فورمول'
            },
            description: {
                fa: 'رفتار پلیمر، افزودنی‌ها و رنگدانه‌ها بررسی می‌شود تا تنظیمات اکسترودر و تزریق دقیق گردد.',
                en: 'Polymer behaviour, additives and pigments are evaluated to tune extrusion and injection parameters.',
                ps: 'د پولیمر چلند، اضافه کوونکي او رنګه مواد ارزول کېږي څو د اکسترودر او انجکشن پارامترونه دقیق شي.'
            }
        },
        {
            icon: '🛠️',
            title: {
                fa: 'طراحی قالب و ابزار',
                en: 'Tooling & Mould Engineering',
                ps: 'د قالب او وسیلو انجینري'
            },
            description: {
                fa: 'قالب‌های چند حفره، سیستم خنک‌کاری و خروج هوا مطابق ظرفیت تولید شما طراحی می‌شود.',
                en: 'Multi-cavity moulds, cooling circuits and venting are engineered to match your throughput.',
                ps: 'څو حفره لرونکي قالبونه، د یخولو سرکټونه او هوا ایستل ستاسو د تولید له ظرفیت سره سم ډیزاین کېږي.'
            }
        },
        {
            icon: '⚡',
            title: {
                fa: 'اتوماسیون و پایش کیفیت',
                en: 'Automation & Quality Monitoring',
                ps: 'اتومات او د کیفیت څارنه'
            },
            description: {
                fa: 'PLC، روبات برداشت، سنسور وزن و بینایی ماشین برای کنترل هر شات در خط تولید نصب می‌شود.',
                en: 'PLC control, take-out robots, weight sensors and machine vision ensure every shot meets spec.',
                ps: 'PLC کنټرول، د اخیستلو روباټونه، د وزن سینسرونه او ماشین ویژن ډاډ ورکوي چې هر محصول د معیار مطابق وي.'
            }
        },
        {
            icon: '♻️',
            title: {
                fa: 'بازیافت و مدیریت ضایعات',
                en: 'Recycling & Waste Management',
                ps: 'ریسایکل او د فاضله موادو مدیریت'
            },
            description: {
                fa: 'شردر، شستشو و گرانولایزر در کنار خط اصلی نصب می‌شود تا مواد برگشتی به چرخه تولید برگردد.',
                en: 'Shredders, washing and pelletising units return scrap to production alongside the main line.',
                ps: 'شریدر، مینځل او پلېټ جوړونکي واحدونه د اصلي لاین ترڅنګ نصب کېږي څو پاتې مواد بېرته تولید ته راوګرځي.'
            }
        }
    ];

    const categories = [
        {
            id: 'extruder',
            icon: '🛠️',
            title: {
                fa: 'خطوط اکسترودر پلاستیک',
                en: 'Plastic Extrusion Lines',
                ps: 'د پلاستیک اکسترودر لینونه'
            },
            description: {
                fa: 'اکسترودر لوله، فیلم و پروفایل با کنترل دما و کشش برای تولید پیوسته.',
                en: 'Pipe, film and profile extruders with precise temperature and haul-off control for continuous production.',
                ps: 'د پایپ، فلم او پروفایل اکسترودرونه د دقیق تودوخې او کشش کنټرول سره د پرله پسې تولید لپاره.'
            }
        },
        {
            id: 'injection',
            icon: '🧩',
            title: {
                fa: 'تزریق و دمشی پلاستیک',
                en: 'Plastic Injection & Blow Moulding',
                ps: 'د پلاستیک انجکشن او بلو مولډنګ'
            },
            description: {
                fa: 'ماشین‌های تزریق، دمشی و قطعات مصرفی برای تولید قطعات دقیق و سبک.',
                en: 'Injection and blow moulding machines with consumables for precise, lightweight plastic parts.',
                ps: 'د انجکشن او بلو مولډنګ ماشینونه د دقیق او سپکو پلاستیکي پرزو لپاره له مصرفي پرزو سره.'
            }
        },
        {
            id: 'recycling',
            icon: '♻️',
            title: {
                fa: 'بازیافت و احیای پلاستیک',
                en: 'Plastic Recycling & Reprocessing',
                ps: 'د پلاستیک ریسایکل او بیا پروسس'
            },
            description: {
                fa: 'شردر، خطوط شستشو، خشک‌کن و پلت‌سازی برای بازگرداندن ضایعات به تولید.',
                en: 'Shredding, washing, drying and pelletising systems return plastic scrap to production.',
                ps: 'شریدر، د مینځلو لینونه، وچوونکي او پلېټ جوړونکي سیسټمونه د پلاستیک پاتې شونو ته نوی ژوند ورکوي.'
            }
        }
    ];

    const assuranceHighlights = [
        {
            icon: '📐',
            title: {
                fa: 'مهندسی قالب و CAD/CAM',
                en: 'Mould Engineering & CAD/CAM',
                ps: 'د قالب انجینري او CAD/CAM'
            },
            description: {
                fa: 'مدل‌سازی سه‌بعدی، تحلیل جریان مذاب و مسیر کولانت برای کاهش عیوب و زمان سیکل.',
                en: '3D modelling, melt flow simulation and coolant routing minimise defects and cycle times.',
                ps: '۳D ماډل جوړونه، د مذاب جریان سمول او د یخولو لارو پلان کول نیمګړتیاوې او د سایکل وخت کموي.'
            }
        },
        {
            icon: '🔧',
            title: {
                fa: 'مونتاژ، FAT و SAT',
                en: 'Assembly, FAT & SAT',
                ps: 'اسمبلي، FAT او SAT'
            },
            description: {
                fa: 'آزمایش عملکرد، کالیبراسیون و تحویل با فیلم تست و چک‌لیست فنی انجام می‌شود.',
                en: 'Performance testing, calibration and handover with test videos and technical checklists.',
                ps: 'د فعالیت ازموینه، کالیبراسیون او سپارل د ټېسټ ویډیوګانو او تخنیکي چک لستونو سره ترسره کېږي.'
            }
        },
        {
            icon: '🧰',
            title: {
                fa: 'آموزش و قطعات یدکی',
                en: 'Training & Spare Parts',
                ps: 'روزنه او اضافي پرزې'
            },
            description: {
                fa: 'برنامه آموزشی اپراتور، لیست قطعات مصرفی و بسته نگهداری دوره‌ای ارائه می‌شود.',
                en: 'Operator training programmes, consumable lists and preventative maintenance kits are supplied.',
                ps: 'د اپراتور روزنیز پروګرامونه، د مصرفي پرزو لست او د مخنیوي ساتنې کټونه برابریږي.'
            }
        },
        {
            icon: '🚚',
            title: {
                fa: 'لجستیک و نصب در سایت',
                en: 'Logistics & On-Site Installation',
                ps: 'لوژستیک او په ساحه کې نصب'
            },
            description: {
                fa: 'حمل، نصب مکانیکی و الکتریکی، راه‌اندازی و تست تولید اولیه توسط تیم ما انجام می‌شود.',
                en: 'Transport, mechanical/electrical installation and commissioning handled by our team.',
                ps: 'حمل، میخانیکي او برقي نصب او فعالول د زموږ د ټیم له خوا ترسره کېږي.'
            }
        }
    ];

    const processStages = [
        {
            step: '01',
            title: {
                fa: 'تحلیل نیاز و انتخاب فناوری',
                en: 'Needs Analysis & Technology Selection',
                ps: 'د اړتیا تحلیل او د ټکنالوژۍ ټاکنه'
            },
            description: {
                fa: 'نوع پلیمر، ظرفیت و محصول هدف بررسی می‌شود تا معماری خط تولید مشخص گردد.',
                en: 'Polymer type, capacity and target product are reviewed to define the production line architecture.',
                ps: 'د پولیمر ډول، ظرفیت او هدف محصول ارزول کېږي څو د تولید لاین جوړښت وټاکل شي.'
            }
        },
        {
            step: '02',
            title: {
                fa: 'طراحی تفصیلی و تهیه نقشه',
                en: 'Detailed Design & Drawings',
                ps: 'تفصیلي ډیزاین او نقشی'
            },
            description: {
                fa: 'نقشه‌های نصب، جانمایی تجهیزات، مدارهای برقی و لیست مواد تهیه می‌گردد.',
                en: 'Installation layouts, equipment positioning, electrical schematics and BOMs are prepared.',
                ps: 'د نصب نقشې، د تجهیزاتو موقعیت، برقي سرکونه او د موادو لستونه چمتو کېږي.'
            }
        },
        {
            step: '03',
            title: {
                fa: 'تأمین، ساخت و آزمون',
                en: 'Procurement, Fabrication & Testing',
                ps: 'تدارک، جوړښت او ازموینه'
            },
            description: {
                fa: 'ماشین‌آلات ساخته، مونتاژ و تحت آزمون FAT/SAT قرار می‌گیرند و حمل برنامه‌ریزی می‌شود.',
                en: 'Equipment is built, assembled, runs through FAT/SAT and logistics are coordinated.',
                ps: 'تجهیزات جوړېږي، اسمبل کېږي، د FAT/SAT ازموینې پرې عملي کېږي او لوژستیک همغږي کېږي.'
            }
        },
        {
            step: '04',
            title: {
                fa: 'نصب، آموزش و پشتیبانی',
                en: 'Installation, Training & Support',
                ps: 'نصب، روزنه او ملاتړ'
            },
            description: {
                fa: 'نصب کامل، تولید آزمایشی، آموزش تیم بهره‌برداری و برنامه نگهداری دوره‌ای اجرا می‌شود.',
                en: 'Full installation, trial runs, operations training and preventative maintenance plans are delivered.',
                ps: 'بشپړ نصب، ازمایښتي تولید، د عملیاتو روزنه او د مخنیوي ساتنې پلانونه سپارل کېږي.'
            }
        }
    ];

    const categoryIcons = categories.reduce((acc, category) => {
        acc[category.id] = category.icon;
        return acc;
    }, {});

    const itemIcons = {
        'pipe-extruder': '🧵',
        'film-extruder': '🎞️',
        'profile-extruder': '📏',
        'injection-molding': '🧠',
        'blow-molding': '🍶',
        'injection-parts': '🧷',
        'plastic-recycling': '♻️',
        'shredder': '🪚',
        'washing-line': '💧',
        'pelletizing-line': '🧊'
    };

    const categoryMap = categories.reduce((acc, category) => {
        acc[category.id] = category;
        return acc;
    }, {});

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function normaliseInventoryItem(item) {
        const pdfName = item.pdfUrl ? item.pdfUrl.split('/').pop().replace('.pdf', '') : '';
        const category = item.category || 'extruder';
        return {
            category,
            name: item.name,
            description: item.description,
            pdfUrl: item.pdfUrl,
            icon: item.icon || itemIcons[pdfName] || categoryIcons[category] || '📄',
            meta: item.meta || []
        };
    }

    const equipmentSource = typeof equipmentData !== 'undefined'
        ? equipmentData
        : (typeof window !== 'undefined' ? (window.equipmentData || {}) : {});

    const inventory = (Array.isArray(equipmentSource['plastic-industry'])
        ? equipmentSource['plastic-industry']
        : Array.isArray(equipmentSource['plastic-processing'])
            ? equipmentSource['plastic-processing']
            : [])
        .map(normaliseInventoryItem);

    function setHero(lang) {
        const title = document.getElementById('plasticIndustryHeroTitle');
        const subtitle = document.getElementById('plasticIndustryHeroSubtitle');
        const quote = document.getElementById('plasticIndustryHeroQuote');
        const cta = document.getElementById('viewPlasticIndustryButton');

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
        const title = document.getElementById('plasticIndustryHighlightsTitle');
        const subtitle = document.getElementById('plasticIndustryHighlightsSubtitle');
        const grid = document.getElementById('plasticIndustryHighlightsGrid');

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
        const title = document.getElementById('plasticIndustryCategoriesTitle');
        const subtitle = document.getElementById('plasticIndustryCategoriesSubtitle');
        const grid = document.getElementById('plasticIndustryCategoriesGrid');

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

            const openModal = () => showPlasticIndustryCategoryModal(category.id, lang);

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
        const title = document.getElementById('plasticIndustryInventoryTitle');
        const subtitle = document.getElementById('plasticIndustryInventorySubtitle');
        const grid = document.getElementById('plasticIndustryInventoryGrid');

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
        const title = document.getElementById('plasticIndustryAssuranceTitle');
        const subtitle = document.getElementById('plasticIndustryAssuranceSubtitle');
        const grid = document.getElementById('plasticIndustryAssuranceGrid');

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
        const title = document.getElementById('plasticIndustryProcessTitle');
        const subtitle = document.getElementById('plasticIndustryProcessSubtitle');
        const timeline = document.getElementById('plasticIndustryProcessTimeline');

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
            const categoryId = item.category || 'extruder';
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(item);
            return acc;
        }, {});
    }

    function showPlasticIndustryCategoryModal(categoryId, lang = getLanguage()) {
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

    function showPlasticIndustryInventoryModal(lang = getLanguage()) {
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

    function updatePlasticIndustryPage(lang = getLanguage()) {
        setHero(lang);
        renderHighlights(lang);
        renderCategories(lang);
        renderAssurance(lang);
        renderProcess(lang);
    }

    function setupInteractions() {
        const cta = document.getElementById('viewPlasticIndustryButton');
        if (cta) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showPlasticIndustryInventoryModal(getLanguage());
            });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updatePlasticIndustryPage();
        setupInteractions();
    });

    window.updatePlasticIndustryPage = updatePlasticIndustryPage;
    window.showPlasticIndustryCategoryModal = showPlasticIndustryCategoryModal;
    window.plasticIndustryInventory = inventory;
})();
