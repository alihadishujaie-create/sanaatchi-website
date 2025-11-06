(function() {
    const content = {
        hero: {
            title: {
                fa: 'ماشین‌آلات دست دوم تایید شده برای خطوط تولید افغانستان',
                en: 'Certified Second-Hand Machinery',
                ps: 'د افغانستان د تولیدي لینونو لپاره تایید شوي دوهم لاس ماشینونه'
            },
            subtitle: {
                fa: 'از چاپ و بسته‌بندی تا تجهیزات سنگین؛ هر دستگاه با گزارش فنی، سرویس کامل و تضمین راه‌اندازی تحویل می‌شود.',
                en: 'From printing and packaging to heavy equipment—each asset arrives with technical reports, full servicing, and commissioning support.',
                ps: 'له چاپ او بسته بندۍ څخه تر درنو تجهیزاتو پورې — هر ماشین له تخنیکي راپور، بشپړ سرویس او د فعالولو ملاتړ سره سپارل کېږي.'
            },
            quote: {
                fa: 'پیش از ارسال، ماشین‌آلات توسط تیم بازرسی صنعتچی در کارخانه فروشنده تست، به‌روزرسانی و آماده نصب می‌شوند.',
                en: 'Before shipping, every machine is inspected, upgraded, and prepared for installation by Sanaatchi’s on-site auditors.',
                ps: 'د لېږد وړاندې هر ماشین زموږ د صنعتچي د پلټنې ټیم له خوا ازمویل، نوى کېږي او د نصب لپاره چمتو کېږي.'
            },
            secondaryCta: {
                fa: 'مشاهده موجودی دست دوم',
                en: 'Browse Available Inventory',
                ps: 'شته دوهم لاس وسایل وګورئ'
            }
        },
        categoriesTitle: {
            fa: 'دسته‌بندی ماشین‌آلات دست دوم',
            en: 'Second-Hand Machinery Categories',
            ps: 'د دوهم لاس ماشینونو کټګورۍ'
        },
        categoriesSubtitle: {
            fa: 'بر اساس حوزه فعالیت تجهیزات بازبینی شده را مرور کنید.',
            en: 'Explore refurbished equipment grouped by industrial focus.',
            ps: 'ترمیم شوي وسایل د صنعتي تمرکز له مخې وپلټئ.'
        },
        inventoryTitle: {
            fa: 'موجودی تایید شده برای تحویل سریع',
            en: 'Certified Inventory Ready to Deploy',
            ps: 'تاييد شوې زیرمې د چټک نصب لپاره چمتو'
        },
        inventorySubtitle: {
            fa: 'برای هر دستگاه خلاصه فنی و فایل PDF دفترچه را بررسی کنید.',
            en: 'Review technical summaries and download the dossier PDF for each asset.',
            ps: 'د هر ماشین تخنیکي لنډیز وګورئ او د PDF دوسیه ډاونلوډ کړئ.'
        },
        assuranceTitle: {
            fa: 'چه چیزی همراه ماشین‌آلات تحویل می‌دهیم؟',
            en: 'What Accompanies Every Machine?',
            ps: 'له هر ماشین سره څه درکوو؟'
        },
        assuranceSubtitle: {
            fa: 'از بازرسی مستقل تا نصب مجدد و آموزش، صنعتچی تمام مراحل را پوشش می‌دهد.',
            en: 'From independent inspection to recommissioning and training, Sanaatchi covers every step.',
            ps: 'له خپلواکې پلټنې څخه تر بیا فعالولو او روزنې پورې، صنعتچي ټول پړاوونه سمبالوي.'
        },
        processTitle: {
            fa: 'روند تأمین ماشین‌آلات دست دوم',
            en: 'Second-Hand Procurement Roadmap',
            ps: 'د دوهم لاس تجهیزاتو د تدارک بهیر'
        },
        processSubtitle: {
            fa: 'گام‌به‌گام همراه شما از تعریف نیاز تا راه‌اندازی در افغانستان.',
            en: 'Step-by-step guidance from defining requirements to commissioning in Afghanistan.',
            ps: 'له اړتیا ټاکلو څخه تر په افغانستان کې فعالولو پورې ګام په ګام ملاتړ.'
        }
    };

    const categories = Array.isArray(window.secondHandCategories) ? window.secondHandCategories : [];

    const assuranceHighlights = [
        {
            icon: '🛠️',
            title: {
                fa: 'بازسازی و سرویس کامل',
                en: 'Full Refurbishment & Servicing',
                ps: 'بشپړه رغول او خدمت'
            },
            description: {
                fa: 'ماشین‌آلات پس از تعویض قطعات مصرفی و سرویس استاندارد به همراه لیست کارهای انجام‌شده تحویل می‌گردد.',
                en: 'Machines are delivered after replacing consumables and completing standard servicing with a documented checklist.',
                ps: 'ماشینونه د مصرفي پرزو له بدلون او معیاري خدمت وروسته د ترسره شویو کارونو له لېست سره سپارل کېږي.'
            }
        },
        {
            icon: '🧾',
            title: {
                fa: 'گزارش بازرسی مستقل',
                en: 'Independent Inspection Report',
                ps: 'مستقل تفتیش راپور'
            },
            description: {
                fa: 'کارشناسان صنعتچی وضعیت فنی، لرزش، آلودگی روغن و عمر باقیمانده قطعات کلیدی را مستند می‌کنند.',
                en: 'Sanaatchi experts document mechanics, vibration, oil contamination, and remaining life of critical parts.',
                ps: 'د صنعتچي متخصصین میخانیک، ارتعاش، د تېلو ککړتیا او د مهمو پرزو پاتې عمر مستندوي.'
            }
        },
        {
            icon: '⚓',
            title: {
                fa: 'هماهنگی لجستیک و گمرک',
                en: 'Coordinated Logistics & Customs',
                ps: 'همغږي لوژستیک او ګمرک'
            },
            description: {
                fa: 'از بسته‌بندی تا بیمه حمل، رزرو کانتینر و ترخیص گمرکی در افغانستان، همه توسط تیم ما مدیریت می‌شود.',
                en: 'From packing and cargo insurance to container booking and Afghan customs clearance, our team handles everything.',
                ps: 'له بسته بندۍ، د بار بیمه، کانټینر رزرف تر د افغانستان ګمرکي تصفیې پورې، ټول زموږ ټیم سمبالوي.'
            }
        },
        {
            icon: '🎯',
            title: {
                fa: 'راه‌اندازی و آموزش در محل',
                en: 'On-Site Commissioning & Training',
                ps: 'په ساحه کې فعالول او روزنه'
            },
            description: {
                fa: 'تکنسین‌های صنعتچی نصب، هم‌راستایی، تست تولید و انتقال دانش به اپراتورها را انجام می‌دهند.',
                en: 'Sanaatchi technicians perform installation, alignment, production tests, and operator handover training.',
                ps: 'د صنعتچي تخنیکران نصب، الاینمنټ، د تولید ټسټ او د اپریټرانو روزنه ترسره کوي.'
            }
        }
    ];

    const processStages = [
        {
            step: '01',
            title: {
                fa: 'تعریف نیاز و بودجه',
                en: 'Requirement & Budget Definition',
                ps: 'د اړتیا او بودجې ټاکل'
            },
            description: {
                fa: 'لیست دستگاه‌های موردنیاز، ظرفیت و محدودیت بودجه را مشخص می‌کنیم و گزینه‌های مناسب را کوتاه‌لیست می‌کنیم.',
                en: 'We capture required machinery, throughput, and budget limits, then shortlist the best-fit options.',
                ps: 'اړین ماشینونه، ظرفیت او بودجه راټولوو او مناسب انتخابونه لنډ لست کوو.'
            },
            bullets: [
                {
                    fa: 'بررسی اولویت خطوط تولید و برندهای مورد اعتماد',
                    en: 'Review production priorities and trusted brands',
                    ps: 'د تولید لومړیتوبونه او د باور وړ برانډونه ارزونه'
                },
                {
                    fa: 'بررسی هزینه راه‌اندازی، حمل و نصب مجدد',
                    en: 'Assess commissioning, freight, and reinstallation costs',
                    ps: 'د فعالولو، لېږد او بیا نصب لګښتونه ارزونه'
                }
            ]
        },
        {
            step: '02',
            title: {
                fa: 'بازرسی و تضمین سلامت',
                en: 'Inspection & Condition Assurance',
                ps: 'تفتیش او د حالت تضمین'
            },
            description: {
                fa: 'بازدید حضوری، تست عملکرد، نمونه‌گیری روغن و ویدیو از دستگاه در حال کار برای تصمیم قطعی.',
                en: 'On-site visit, performance testing, oil sampling, and live operation video for confident decisions.',
                ps: 'حضوري کتنه، د فعالیت ټسټ، د تېلو نمونې او د کار ویډیو د باوري پرېکړې لپاره.'
            },
            bullets: [
                {
                    fa: 'تهیه گزارش فنی چندزبانه',
                    en: 'Deliver multilingual technical dossier',
                    ps: 'چند ژبه تخنیکي دوسیه وړاندې کول'
                },
                {
                    fa: 'بررسی قطعات یدکی و خدمات پس از فروش',
                    en: 'Evaluate spare parts and after-sales support',
                    ps: 'د سپیر پارټو او وروسته خدمت ارزونه'
                }
            ]
        },
        {
            step: '03',
            title: {
                fa: 'خرید، لجستیک و گمرک',
                en: 'Purchase, Logistics & Customs',
                ps: 'پېرود، لوژستیک او ګمرک'
            },
            description: {
                fa: 'قرارداد فروش، بیمه حمل، رزرو کانتینر، فوم‌پک و آماده‌سازی اسناد گمرکی انجام می‌شود.',
                en: 'Manage sales contract, cargo insurance, container booking, protective packing, and customs paperwork.',
                ps: 'د پلور قرارداد، د بار بیمه، کانټینر رزرف، ساتندوی بسته بندي او ګمرکي اسناد چمتو کوو.'
            },
            bullets: [
                {
                    fa: 'نظارت بر بارگیری و ارسال به افغانستان',
                    en: 'Supervise loading and dispatch to Afghanistan',
                    ps: 'بار چک او افغانستان ته لېږد څارنه'
                },
                {
                    fa: 'هماهنگی ترخیص در گمرک افغانستان',
                    en: 'Coordinate clearance with Afghan customs',
                    ps: 'د افغانستان له ګمرک سره د تصفیې همغږي'
                }
            ]
        },
        {
            step: '04',
            title: {
                fa: 'نصب، تست و آموزش',
                en: 'Installation, Testing & Training',
                ps: 'نصب، ټسټ او روزنه'
            },
            description: {
                fa: 'تیم صنعتچی نصب، هم‌راستایی، تست تولید و آموزش اپراتورها را در محل شما انجام می‌دهد.',
                en: 'Sanaatchi deploys technicians for installation, alignment, production tests, and operator training on site.',
                ps: 'صنعتچي خپل تخنیکران ټاکي تر څو نصب، الاینمنټ، د تولید ټسټ او د اپریټرانو روزنه په ساحه کې ترسره کړي.'
            },
            bullets: [
                {
                    fa: 'تحویل مستندات بهره‌برداری و نگهداری',
                    en: 'Provide operation and maintenance documentation',
                    ps: 'د چلولو او ساتنې مستندات سپارل'
                },
                {
                    fa: 'پشتیبانی پس از راه‌اندازی برای تامین قطعات',
                    en: 'Post-startup support for spare parts sourcing',
                    ps: 'له فعالېدو وروسته د سپیر پارټو ملاتړ'
                }
            ]
        }
    ];

    const inventory = Array.isArray(window.secondHandInventoryData) ? window.secondHandInventoryData : [];

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    function setHero(lang) {
        const title = document.getElementById('secondHandHeroTitle');
        const subtitle = document.getElementById('secondHandHeroSubtitle');
        const quote = document.getElementById('secondHandHeroQuote');
        const viewInventoryButton = document.getElementById('viewInventoryButton');

        if (title) {
            title.textContent = content.hero.title[lang] || content.hero.title.fa;
        }
        if (subtitle) {
            subtitle.textContent = content.hero.subtitle[lang] || content.hero.subtitle.fa;
        }
        if (quote) {
            quote.textContent = content.hero.quote[lang] || content.hero.quote.fa;
        }
        if (viewInventoryButton) {
            viewInventoryButton.textContent = content.hero.secondaryCta[lang] || content.hero.secondaryCta.fa;
        }
    }

    function renderCategories(lang) {
        const wrapper = document.getElementById('secondHandCategories');
        const title = document.getElementById('secondHandCategoriesTitle');
        const subtitle = document.getElementById('secondHandCategoriesSubtitle');

        if (title) {
            title.textContent = content.categoriesTitle[lang] || content.categoriesTitle.fa;
        }
        if (subtitle) {
            subtitle.textContent = content.categoriesSubtitle[lang] || content.categoriesSubtitle.fa;
        }
        if (!wrapper) {
            return;
        }

        wrapper.innerHTML = '';
        categories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');

            card.innerHTML = `
                <span class="icon">${category.icon}</span>
                <h4>${category.title[lang] || category.title.fa}</h4>
                <p>${category.description[lang] || category.description.fa}</p>
            `;

            const scrollToCategory = () => {
                const section = document.getElementById(`inventory-category-${category.id}`);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };

            card.addEventListener('click', scrollToCategory);
            card.addEventListener('keypress', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    scrollToCategory();
                }
            });

            wrapper.appendChild(card);
        });
    }

    function buildMetaList(meta, lang) {
        if (!meta || !meta.length) {
            return '';
        }
        const items = meta.map(entry => {
            const label = entry.label?.[lang] || entry.label?.fa || '';
            const value = entry.value?.[lang] || entry.value?.fa || '';
            return `<li><span>${label}</span><strong>${value}</strong></li>`;
        }).join('');
        return `<ul class="second-hand-meta">${items}</ul>`;
    }

    function openSecondHandModal(item, lang) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');

        if (!modal || !modalContent || !item) {
            return;
        }

        const backText = lang === 'fa' ? 'بازگشت' : (lang === 'ps' ? 'بیرته' : 'Back');
        const viewText = lang === 'fa' ? 'مشاهده PDF' : (lang === 'ps' ? 'PDF وګورئ' : 'View PDF');
        const downloadText = lang === 'fa' ? 'دانلود' : (lang === 'ps' ? 'ډاونلوډ' : 'Download');

        const metaList = buildMetaList(item.meta, lang);

        modalContent.innerHTML = `
            <div class="equipment-modal-header">
                <button class="back-btn" onclick="closeEquipmentModal()">${backText}</button>
                <h3>${item.name[lang] || item.name.fa}</h3>
            </div>
            <div class="equipment-modal-body">
                <p>${item.description[lang] || item.description.fa}</p>
                ${metaList}
                <div class="equipment-actions">
                    <a href="${item.pdfUrl}" target="_blank" class="btn-primary">
                        <i class="fas fa-file-pdf"></i> ${viewText}
                    </a>
                    <a href="${item.pdfUrl}" download class="btn-secondary">
                        <i class="fas fa-download"></i> ${downloadText}
                    </a>
                </div>
            </div>
        `;

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }

    function renderInventory(lang) {
        const wrapper = document.getElementById('secondHandInventoryGrid');
        const title = document.getElementById('secondHandInventoryTitle');
        const subtitle = document.getElementById('secondHandInventorySubtitle');

        if (title) {
            title.textContent = content.inventoryTitle[lang] || content.inventoryTitle.fa;
        }
        if (subtitle) {
            subtitle.textContent = content.inventorySubtitle[lang] || content.inventorySubtitle.fa;
        }
        if (!wrapper) {
            return;
        }

        wrapper.innerHTML = '';
        categories.forEach(category => {
            const items = inventory.filter(item => item.category === category.id);
            if (items.length === 0) {
                return;
            }

            const section = document.createElement('section');
            section.className = 'second-hand-inventory-category';
            section.id = `inventory-category-${category.id}`;

            const heading = document.createElement('h3');
            heading.className = 'inventory-category-title';
            heading.innerHTML = `${category.icon} ${category.title[lang] || category.title.fa}`;
            section.appendChild(heading);

            const grid = document.createElement('div');
            grid.className = 'equipment-grid';

            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'equipment-card';
                card.classList.add('second-hand-card');
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');

                card.innerHTML = `
                    <div class="equipment-icon">${item.icon || '📄'}</div>
                    <h4>${item.name[lang] || item.name.fa}</h4>
                    <p>${item.description[lang] || item.description.fa}</p>
                    ${buildMetaList(item.meta, lang)}
                `;

                const openModal = () => openSecondHandModal(item, lang);
                card.addEventListener('click', openModal);
                card.addEventListener('keypress', event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        openModal();
                    }
                });

                grid.appendChild(card);
            });

            section.appendChild(grid);
            wrapper.appendChild(section);
        });
    }

    function renderAssurance(lang) {
        const title = document.getElementById('secondHandAssuranceTitle');
        const subtitle = document.getElementById('secondHandAssuranceSubtitle');
        const grid = document.getElementById('secondHandAssuranceGrid');

        if (title) {
            title.textContent = content.assuranceTitle[lang] || content.assuranceTitle.fa;
        }
        if (subtitle) {
            subtitle.textContent = content.assuranceSubtitle[lang] || content.assuranceSubtitle.fa;
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
                <h3>${item.title[lang] || item.title.fa}</h3>
                <p>${item.description[lang] || item.description.fa}</p>
            `;
            grid.appendChild(card);
        });
    }

    function renderProcess(lang) {
        const title = document.getElementById('secondHandProcessTitle');
        const subtitle = document.getElementById('secondHandProcessSubtitle');
        const timeline = document.getElementById('secondHandProcessTimeline');

        if (title) {
            title.textContent = content.processTitle[lang] || content.processTitle.fa;
        }
        if (subtitle) {
            subtitle.textContent = content.processSubtitle[lang] || content.processSubtitle.fa;
        }
        if (!timeline) {
            return;
        }

        timeline.innerHTML = '';
        processStages.forEach(stage => {
            const card = document.createElement('div');
            card.className = 'process-card';
            const bullets = stage.bullets?.map(bullet => `<li>${bullet[lang] || bullet.fa}</li>`).join('') || '';
            card.innerHTML = `
                <div class="step">${stage.step}</div>
                <h3>${stage.title[lang] || stage.title.fa}</h3>
                <p>${stage.description[lang] || stage.description.fa}</p>
                ${bullets ? `<ul>${bullets}</ul>` : ''}
            `;
            timeline.appendChild(card);
        });
    }

    function updateSecondHandPage(lang = getLanguage()) {
        setHero(lang);
        renderCategories(lang);
        renderInventory(lang);
        renderAssurance(lang);
        renderProcess(lang);
    }

    function setupInteractions() {
        const viewInventoryButton = document.getElementById('viewInventoryButton');
        if (viewInventoryButton) {
            viewInventoryButton.addEventListener('click', event => {
                event.preventDefault();
                const inventorySection = document.getElementById('second-hand-inventory');
                if (inventorySection) {
                    inventorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updateSecondHandPage();
        setupInteractions();
    });

    window.updateSecondHandPage = updateSecondHandPage;
})();
