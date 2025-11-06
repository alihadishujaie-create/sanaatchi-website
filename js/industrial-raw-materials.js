(function() {
    const content = {
        hero: {
            title: {
                fa: 'تأمین مواد اولیه صنعتی برای خطوط تولید افغانستان',
                en: 'Industrial Raw Materials for Afghan Production Lines',
                ps: 'د افغانستان د تولیدي لینونو لپاره صنعتي خام مواد'
            },
            subtitle: {
                fa: 'از فولاد و پلیمر تا مواد شیمیایی و معدنی؛ هر محموله با بازرسی کیفیت و لجستیک کامل تحویل می‌شود.',
                en: 'From steel and polymers to chemicals and minerals—each shipment arrives with quality inspection and full logistics.',
                ps: 'له فولادو او پولیمرونو څخه تر کیمیاوي او معدني موادو پورې—هر محموله د کیفیت پلټنې او بشپړ لوژستیک سره رسیږي.'
            },
            quote: {
                fa: 'مواد اولیه استاندارد جهانی با گواهی آنالیز (COA) و خدمات ترخیص تا درب کارخانه شما.',
                en: 'Global-standard feedstocks with certificates of analysis (COA) and customs clearance to your factory gate.',
                ps: 'نړیوال معیار لرونکي خام مواد د تحلیل سند (COA) او تر فابریکې دروازې پورې د ګمرکي تصفیې سره.'
            },
            secondaryCta: {
                fa: 'مشاهده فهرست مواد اولیه',
                en: 'View Raw Material Catalogue',
                ps: 'د خامو موادو کتلاګ وګورئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا تأمین مواد اولیه با صنعتچی؟',
            en: 'Why Source Raw Materials with Sanaatchi?',
            ps: 'ولې له صنعتچي څخه خام مواد برابر کړئ؟'
        },
        highlightsSubtitle: {
            fa: 'از انتخاب تولیدکننده تا کنترل کیفیت و لجستیک، تیم ما تمام مسیر را مدیریت می‌کند.',
            en: 'From supplier selection to quality control and logistics, our team manages the entire chain.',
            ps: 'له عرضه کوونکي ټاکلو څخه تر کیفیت کنټرول او لوژستیک پورې، زموږ ټیم ټول بهیر سمبالوي.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی مواد اولیه',
            en: 'Core Raw Material Groups',
            ps: 'د خامو موادو اصلي ډلې'
        },
        categoriesSubtitle: {
            fa: 'براساس نیاز خط تولید خود، فلزات، پلیمرها، مواد شیمیایی یا مواد معدنی را انتخاب کنید.',
            en: 'Select metals, polymers, chemicals or minerals according to your production requirements.',
            ps: 'د خپل تولید د اړتیاوو له مخې فلزات، پولیمرونه، کیمیاوي مواد یا معدني مواد وټاکئ.'
        },
        inventoryTitle: {
            fa: 'فهرست مواد اولیه آماده تأمین',
            en: 'Raw Materials Ready for Supply',
            ps: 'خام مواد چې د برابرولو لپاره چمتو دي'
        },
        inventorySubtitle: {
            fa: 'هر قلم با مشخصات فنی، گواهی کیفیت و فایل PDF جزئیات عرضه می‌شود.',
            en: 'Each item includes technical specs, quality certificates and a downloadable PDF dossier.',
            ps: 'هر توکي کې تخنیکي ځانګړتیاوې، د کیفیت سندونه او د ډاونلوډ وړ PDF دوسیه شامله ده.'
        },
        assuranceTitle: {
            fa: 'خدمات همراه مواد اولیه',
            en: 'Services Bundled with Raw Materials',
            ps: 'له خامو موادو سره مل خدمات'
        },
        assuranceSubtitle: {
            fa: 'از کنترل کیفیت تا مدیریت گمرک و تحویل درب کارخانه، صنعتچی کنار شماست.',
            en: 'From QC inspection to customs handling and door delivery, Sanaatchi stays beside you.',
            ps: 'له کیفیت څارنې څخه تر ګمرک مدیریت او تر دروازې سپارلو پورې، صنعتچي درسره وي.'
        },
        processTitle: {
            fa: 'روند تأمین مواد اولیه',
            en: 'Raw Material Procurement Roadmap',
            ps: 'د خامو موادو د تدارک لاره'
        },
        processSubtitle: {
            fa: 'گام‌به‌گام از ثبت نیاز تا تحویل محموله در افغانستان.',
            en: 'Step-by-step from requirement capture to delivery inside Afghanistan.',
            ps: 'له اړتیا ثبتولو څخه تر په افغانستان کې سپارلو پورې ګام په ګام.'
        }
    };

    const highlights = [
        {
            icon: '🌐',
            title: {
                fa: 'شبکه تأمین مطمئن آسیایی',
                en: 'Trusted Asian Supply Network',
                ps: 'د باور وړ آسیایي د تدارک شبکه'
            },
            description: {
                fa: 'ارتباط مستقیم با کارخانه‌های چین، هند، ترکیه و ایران برای دسترسی سریع به مواد اولیه.',
                en: 'Direct coordination with mills across China, India, Turkey and Iran for fast access to feedstocks.',
                ps: 'له چین، هند، ترکیې او ایران فابریکو سره مستقیمه همغږي د خامو موادو چټک لاسرسي لپاره.'
            }
        },
        {
            icon: '🧪',
            title: {
                fa: 'کنترل کیفیت و COA مستقل',
                en: 'Independent QC & Certificates of Analysis',
                ps: 'مستقل کیفیت کنټرول او د تحلیل سند'
            },
            description: {
                fa: 'نمونه‌گیری، آزمایشگاهی و گواهی COA پیش از حمل برای اطمینان از انطباق با استاندارد تولید.',
                en: 'Sampling, lab verification and COA issuance before shipment to guarantee production compliance.',
                ps: 'د لېږد دمخه نمونې اخیستل، لابراتواري تصدیق او د COA ورکول د تولید د معیار ډاډ لپاره.'
            }
        },
        {
            icon: '🚛',
            title: {
                fa: 'پوشش حمل‌ونقل و گمرک',
                en: 'Logistics & Customs Coverage',
                ps: 'لوژستیک او ګمرکي پوښښ'
            },
            description: {
                fa: 'هماهنگی کامل حمل دریایی، ریلی و زمینی به همراه ترخیص در بنادر ایران و گمرک افغانستان.',
                en: 'Complete sea, rail and trucking coordination with clearance at Iranian ports and Afghan customs.',
                ps: 'د سمندري، رېل او ځمکني لېږد بشپړه همغږي د ایران بندرونو او د افغانستان ګمرک کې د تصفیې سره.'
            }
        },
        {
            icon: '📊',
            title: {
                fa: 'قرارداد شفاف و انعطاف‌پذیر',
                en: 'Transparent & Flexible Contracts',
                ps: 'روښانه او انعطاف منونکي قراردادونه'
            },
            description: {
                fa: 'شرایط پرداخت مرحله‌ای، نگهداری موجودی و پوشش نوسانات قیمت برای ثبات تولید.',
                en: 'Milestone payments, buffer stocking and price hedging to keep production stable.',
                ps: 'د قسطونو تادیات، د زیرمو ساتنه او د بیو خوندیتوب د ثابت تولید لپاره.'
            }
        }
    ];

    const categories = [
        {
            id: 'metals',
            icon: '⚙️',
            title: {
                fa: 'فلزات صنعتی',
                en: 'Industrial Metals',
                ps: 'صنعتي فلزات'
            },
            description: {
                fa: 'کویل فولادی، ورق آلومینیوم، سیم مسی و سنگ آهن برای ساخت‌وساز و تولید.',
                en: 'Steel coils, aluminium sheets, copper wire and iron ore for manufacturing and construction.',
                ps: 'د فولادو کویلونه، د المونیم پاڼې، د مسو تار او د اوسپنې کان د تولید او جوړونې لپاره.'
            }
        },
        {
            id: 'plastics',
            icon: '♻️',
            title: {
                fa: 'پلیمر و پلاستیک',
                en: 'Polymers & Plastics',
                ps: 'پولیمرونه او پلاستیک'
            },
            description: {
                fa: 'گرانول PET، HDPE، PP، ABS، رزین EVA و لوله PVC با درجه صادراتی.',
                en: 'PET, HDPE, PP and ABS granules, EVA resin and PVC pipes in export grades.',
                ps: 'د PET، HDPE، PP او ABS ګرانول، د EVA رال او د PVC پایپونه د صادراتو په ګریډ کې.'
            }
        },
        {
            id: 'chemicals',
            icon: '⚗️',
            title: {
                fa: 'مواد شیمیایی فله',
                en: 'Bulk Industrial Chemicals',
                ps: 'د صنعت کیمیاوي مواد'
            },
            description: {
                fa: 'اسید سولفوریک، سود سوزآور، آمونیاک و متانول با تانکرهای ایزوله.',
                en: 'Sulfuric acid, caustic soda, ammonia and methanol supplied in certified tankers.',
                ps: 'سلفوریک اسید، سود سوزآور، امونیا او میتانول په تصدیق شویو ټانکرونو کې برابریږي.'
            }
        },
        {
            id: 'industrial-minerals',
            icon: '⛰️',
            title: {
                fa: 'مواد معدنی صنعتی',
                en: 'Industrial Minerals',
                ps: 'صنعتي منرالونه'
            },
            description: {
                fa: 'سنگ آهک، گچ، شن سیلیسی و خاک کائولن برای سیمان، سرامیک و رنگ.',
                en: 'Limestone, gypsum, silica sand and kaolin clay for cement, ceramics and coatings.',
                ps: 'د سمنټو، سرامیک او رنګ لپاره د اهک ډبره، ګچ، سیلیکا شګه او د کایولن خاوره.'
            }
        }
    ];

    const inventory = [
        {
            category: 'metals',
            icon: '🧷',
            name: { fa: 'کویل‌های فولادی', en: 'Steel Coils', ps: 'د فولادو کويلونه' },
            description: {
                fa: 'کویل گرم و سرد با ضخامت ۰.۸ تا 8 میلی‌متر برای ساخت قطعات و پروفیل.',
                en: 'Hot and cold rolled coils ranging 0.8–8 mm for fabrication and profiling.',
                ps: 'ګرم او سوړ کویلونه د ۰.۸ تر ۸ ملي مترو پورې د پرزو جوړولو لپاره.'
            },
            meta: [
                {
                    label: { fa: 'گرید', en: 'Grade', ps: 'ګریډ' },
                    value: { fa: 'Q195 / ASTM A36', en: 'Q195 / ASTM A36', ps: 'Q195 / ASTM A36' }
                },
                {
                    label: { fa: 'بسته‌بندی', en: 'Packaging', ps: 'بسته بندي' },
                    value: { fa: 'بندیل تسمه‌کشی با روکش ضدزنگ', en: 'Strapped bundles with anti-rust wrap', ps: 'د ضد زنګ پوښ سره تړل شوي بندیلونه' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/metals/steel-coils.pdf'
        },
        {
            category: 'metals',
            icon: '🪙',
            name: { fa: 'ورق‌های آلومینیومی', en: 'Aluminium Sheets', ps: 'د المونیم ورقونه' },
            description: {
                fa: 'ورق آلیاژی سری 3003 و 5052 با پرداخت آینه‌ای و مات برای صنایع غذایی و ساختمانی.',
                en: 'Alloy 3003/5052 sheets in mirror and matte finishes for food and construction uses.',
                ps: 'د 3003/5052 الیاژ پاڼې په مټ او انعکاسي پای سره د خوړو او ودانۍ لپاره.'
            },
            meta: [
                {
                    label: { fa: 'ضخامت', en: 'Thickness', ps: 'ضخامت' },
                    value: { fa: '۰.۵ تا 5 میلی‌متر', en: '0.5–5 mm', ps: '۰.۵ تر ۵ ملي متره' }
                },
                {
                    label: { fa: 'استاندارد', en: 'Standard', ps: 'معیار' },
                    value: { fa: 'ASTM / EN', en: 'ASTM / EN', ps: 'ASTM / EN' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/metals/aluminum-sheets.pdf'
        },
        {
            category: 'metals',
            icon: '🔌',
            name: { fa: 'سیم مسی', en: 'Copper Wire', ps: 'د مسو تار' },
            description: {
                fa: 'کاتد الکترولیتیک با خلوص 99.97٪ مناسب برای کابل‌سازی و تجهیزات برقی.',
                en: 'Electrolytic cathode copper at 99.97% purity for cabling and electrical hardware.',
                ps: '۹۹.۹۷٪ خالص الکترولیتیک مس د کیبل او برقي تجهیزاتو لپاره.'
            },
            meta: [
                {
                    label: { fa: 'بسته‌بندی', en: 'Packaging', ps: 'بسته بندي' },
                    value: { fa: 'کویل 250 کیلوگرمی بر روی پالت', en: '250 kg coils on pallets', ps: '۲۵۰ کیلو کویلونه پر پالتونو' }
                },
                {
                    label: { fa: 'استاندارد', en: 'Standard', ps: 'معیار' },
                    value: { fa: 'GB/T 2310', en: 'GB/T 2310', ps: 'GB/T 2310' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/metals/copper-wire.pdf'
        },
        {
            category: 'metals',
            icon: '⛏️',
            name: { fa: 'سنگ آهن', en: 'Iron Ore (62% Fe)', ps: 'د اوسپنې کان (۶۲٪)' },
            description: {
                fa: 'کلوخه و دانه‌بندی شده ۰ تا ۱۰ میلی‌متر با عیار ۶۲ درصد برای واحدهای احیای مستقیم.',
                en: 'Lump and fines 0–10 mm at 62% Fe grade for direct reduction plants.',
                ps: '۰ تر ۱۰ ملي مترو دانې او ټوټې د ۶۲٪ اوسپنې درجې سره د مستقیم احیا فابریکو لپاره.'
            },
            meta: [
                {
                    label: { fa: 'حمل', en: 'Logistics', ps: 'لوژستیک' },
                    value: { fa: 'کانتینری یا واگنی از بنادر ایران', en: 'Containerised or rail from Iranian ports', ps: 'له ایران بندرونو څخه په کانتینر یا رېل کې' }
                },
                {
                    label: { fa: 'آنالیز', en: 'Analysis', ps: 'تحلیل' },
                    value: { fa: 'COA و SGS پیش از بارگیری', en: 'COA & SGS before loading', ps: 'د بارولو دمخه COA او SGS' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/metals/iron-ore.pdf'
        },
        {
            category: 'plastics',
            icon: '🧴',
            name: { fa: 'گرانول پت (PET)', en: 'PET Pellets', ps: 'پت ګرینول' },
            description: {
                fa: 'گرانول بطری درجه A برای تولید پریفرم، الیاف و ورق‌های شفاف.',
                en: 'Bottle-grade PET pellets for preforms, fibres and clear sheets.',
                ps: 'د بوتل درجې PET ګرینول د پریفرم، فایبر او شفاف پاڼو لپاره.'
            },
            meta: [
                {
                    label: { fa: 'شاخص ذوب', en: 'IV', ps: 'IV' },
                    value: { fa: '0.80 ± 0.02 dl/g', en: '0.80 ± 0.02 dl/g', ps: '0.80 ± 0.02 dl/g' }
                },
                {
                    label: { fa: 'بسته‌بندی', en: 'Packaging', ps: 'بسته بندي' },
                    value: { fa: 'کیسه لمینت ۱۱۰۰ کیلوگرم', en: '1,100 kg jumbo bags', ps: '۱۱۰۰ کیلو جومبو بوجۍ' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/plastics/pet-pellets.pdf'
        },
        {
            category: 'plastics',
            icon: '🧊',
            name: { fa: 'گرانول اچ‌دی‌پی‌ای (HDPE)', en: 'HDPE Granules', ps: 'اچ ډي پي اې ګرينول' },
            description: {
                fa: 'گرید بادی و تزریقی برای تولید مخازن، بطری و قطعات صنعتی مقاوم.',
                en: 'Blow and injection grades for tanks, bottles and robust industrial parts.',
                ps: 'د بلو او انجکشن ګریډونه د ټانکونو، بوتلونو او قوي صنعتي پرزو لپاره.'
            },
            meta: [
                {
                    label: { fa: 'شاخص جریان مذاب', en: 'MFI', ps: 'MFI' },
                    value: { fa: '0.3 – 0.45 g/10min', en: '0.3 – 0.45 g/10min', ps: '0.3 – 0.45 g/10min' }
                },
                {
                    label: { fa: 'رنگ', en: 'Colour', ps: 'رنګ' },
                    value: { fa: 'طبیعی / کدر', en: 'Natural / Opaque', ps: 'طبیعي / کدر' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/plastics/hdpe-granules.pdf'
        },
        {
            category: 'plastics',
            icon: '🛠️',
            name: { fa: 'لوله‌های پی‌وی‌سی', en: 'PVC Pipes', ps: 'د پی وي سي لولې' },
            description: {
                fa: 'لوله U-PVC و C-PVC در سایز 20 تا 250 میلی‌متر با اتصالات کامل.',
                en: 'U-PVC and C-PVC pipes from 20 to 250 mm with matching fittings.',
                ps: 'د U-PVC او C-PVC پایپونه د ۲۰ تر ۲۵۰ ملي مترو پورې له بشپړو فټینګونو سره.'
            },
            meta: [
                {
                    label: { fa: 'فشار کاری', en: 'Pressure Class', ps: 'د فشار ټولګی' },
                    value: { fa: 'PN10 / PN16', en: 'PN10 / PN16', ps: 'PN10 / PN16' }
                },
                {
                    label: { fa: 'استاندارد', en: 'Standard', ps: 'معیار' },
                    value: { fa: 'ISO 1452', en: 'ISO 1452', ps: 'ISO 1452' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/plastics/pvc-pipes.pdf'
        },
        {
            category: 'plastics',
            icon: '⚙️',
            name: { fa: 'گرانول پی‌پی (PP)', en: 'PP Granules', ps: 'پی پي ګرينول' },
            description: {
                fa: 'گرید تزریق، الیاف و فیلم با شاخص مذاب متفاوت برای بسته‌بندی و قطعات.',
                en: 'Injection, fibre and film grades with tailored melt flow for packaging and components.',
                ps: 'د انجکشن، فایبر او فلم ګریډونه د بسته بندۍ او پرزو لپاره د ځانګړي مذاب جریان سره.'
            },
            meta: [
                {
                    label: { fa: 'MFI', en: 'MFI', ps: 'MFI' },
                    value: { fa: '3 – 12 g/10min', en: '3 – 12 g/10min', ps: '۳ – ۱۲ g/10min' }
                },
                {
                    label: { fa: 'بسته‌بندی', en: 'Packaging', ps: 'بسته بندي' },
                    value: { fa: 'کیسه ۲۵ کیلوگرمی با لاینر داخلی', en: '25 kg bag with inner liner', ps: '۲۵ کیلو بوجۍ له داخلي لاینر سره' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/plastics/pp-granules.pdf'
        },
        {
            category: 'plastics',
            icon: '🔩',
            name: { fa: 'گرانول ای‌بی‌اس (ABS)', en: 'ABS Granules', ps: 'اې بي ايس ګرينول' },
            description: {
                fa: 'گرید مقاوم به ضربه و حرارت برای تزریق قطعات لوازم خانگی و الکترونیک.',
                en: 'Impact and heat resistant grades for appliance and electronics moulding.',
                ps: 'د ضربې او تودوخې پر وړاندې مقاومت لرونکي ګریډونه د کورنیو وسایلو او برقي پرزو لپاره.'
            },
            meta: [
                {
                    label: { fa: 'شاخص مذاب', en: 'MFI', ps: 'MFI' },
                    value: { fa: '18 – 24 g/10min', en: '18 – 24 g/10min', ps: '۱۸ – ۲۴ g/10min' }
                },
                {
                    label: { fa: 'رنگ پایه', en: 'Base Colour', ps: 'بنسټیز رنګ' },
                    value: { fa: 'طبیعی / سیاه / سفید', en: 'Natural / Black / White', ps: 'طبیعي / تور / سپین' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/plastics/abs-granules.pdf'
        },
        {
            category: 'plastics',
            icon: '🧼',
            name: { fa: 'رزین ای‌وی‌ای (EVA)', en: 'EVA Resin', ps: 'اې وي اې رزين' },
            description: {
                fa: 'گرید 18% و 28% برای کفش، چسب حرارتی و فیلم‌های لمینتی.',
                en: '18% and 28% grades for footwear foam, hot-melt adhesives and lamination films.',
                ps: '۱۸٪ او ۲۸٪ ګریډونه د بوټونو فوم، ګرم چسپ او لامینیشن فلمونو لپاره.'
            },
            meta: [
                {
                    label: { fa: 'محتوای وینیل استات', en: 'VA Content', ps: 'د VA منځپانګه' },
                    value: { fa: '18% / 28%', en: '18% / 28%', ps: '۱۸٪ / ۲۸٪' }
                },
                {
                    label: { fa: 'بسته‌بندی', en: 'Packaging', ps: 'بسته بندي' },
                    value: { fa: 'کیسه 25 کیلوگرمی', en: '25 kg bags', ps: '۲۵ کیلو بوجۍ' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/plastics/eva-resin.pdf'
        },
        {
            category: 'chemicals',
            icon: '🧯',
            name: { fa: 'اسید سولفوریک', en: 'Sulfuric Acid 98%', ps: 'سلفوریک اسيد ۹۸٪' },
            description: {
                fa: 'اسید سولفوریک غلیظ برای صنایع باتری‌سازی، استخراج فلزات و کود شیمیایی.',
                en: 'Concentrated sulfuric acid for battery, metal extraction and fertiliser industries.',
                ps: 'متمرکز سلفوریک اسید د بیټرۍ، فلز استخراج او سرې صنعت لپاره.'
            },
            meta: [
                {
                    label: { fa: 'حمل', en: 'Transport', ps: 'ترانسپورت' },
                    value: { fa: 'تانکرهای ایزوله 35 تن', en: '35 t insulated tankers', ps: '۳۵ ټنه عایق ټانکرونه' }
                },
                {
                    label: { fa: 'استاندارد', en: 'Standard', ps: 'معیار' },
                    value: { fa: 'GB 534-2002', en: 'GB 534-2002', ps: 'GB 534-2002' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/chemicals/sulfuric-acid.pdf'
        },
        {
            category: 'chemicals',
            icon: '🧂',
            name: { fa: 'سود سوزآور', en: 'Sodium Hydroxide (Caustic Soda)', ps: 'سود سوزآور' },
            description: {
                fa: 'پرک و مایع 50٪ برای صابون‌سازی، تصفیه آب و صنایع کاغذ.',
                en: 'Flakes and 50% liquid for soap making, water treatment and pulp industries.',
                ps: 'فلیکي او ۵۰٪ مایع د صابون جوړولو، د اوبو تصفیه او پالپ صنعت لپاره.'
            },
            meta: [
                {
                    label: { fa: 'فرم', en: 'Form', ps: 'بڼه' },
                    value: { fa: 'پرک / مایع', en: 'Flake / Liquid', ps: 'فلیک / مایع' }
                },
                {
                    label: { fa: 'بسته‌بندی', en: 'Packaging', ps: 'بسته بندي' },
                    value: { fa: 'کیسه 25 کیلو یا درام 200 لیتری', en: '25 kg bags or 200 L drums', ps: '۲۵ کیلو بوجۍ یا ۲۰۰ لیټره ډرمونه' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/chemicals/sodium-hydroxide.pdf'
        },
        {
            category: 'chemicals',
            icon: '💨',
            name: { fa: 'آمونیاک', en: 'Anhydrous Ammonia', ps: 'امونيا' },
            description: {
                fa: 'آمونیاک بی‌آب با فشار بالا برای کود شیمیایی و سیستم‌های تبرید صنعتی.',
                en: 'Anhydrous ammonia supplied under pressure for fertiliser and industrial refrigeration.',
                ps: 'بې اوبو امونیا د سرې او صنعتي یخچال سیستمونو لپاره تر فشار لاندې برابریږي.'
            },
            meta: [
                {
                    label: { fa: 'ظرفیت مخزن', en: 'Tank Capacity', ps: 'د ټانک ظرفیت' },
                    value: { fa: 'ISO تانک کانتینر 24 تن', en: '24 t ISO tank containers', ps: '۲۴ ټنه ISO ټانک کانتینرونه' }
                },
                {
                    label: { fa: 'گواهی', en: 'Certification', ps: 'تصدیق' },
                    value: { fa: 'BV / SGS', en: 'BV / SGS', ps: 'BV / SGS' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/chemicals/ammonia.pdf'
        },
        {
            category: 'chemicals',
            icon: '🍃',
            name: { fa: 'متانول', en: 'Methanol 99.9%', ps: 'میتانول ۹۹.۹٪' },
            description: {
                fa: 'متانول خالص برای تولید رزین، حلال‌ها و سوخت سبز با بسته‌بندی تانکری.',
                en: 'High-purity methanol for resins, solvents and green fuel supplied in tankers.',
                ps: 'لوړ خالص میتانول د رالونو، محلولو او شین سونګ لپاره په ټانکرونو کې.'
            },
            meta: [
                {
                    label: { fa: 'حمل', en: 'Transport', ps: 'ترانسپورت' },
                    value: { fa: 'فله ایزوله 30 تن', en: '30 t insulated bulk', ps: '۳۰ ټنه عایق فله' }
                },
                {
                    label: { fa: 'استاندارد', en: 'Standard', ps: 'معیار' },
                    value: { fa: 'GB/T 338-2015', en: 'GB/T 338-2015', ps: 'GB/T 338-2015' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/chemicals/methanol.pdf'
        },
        {
            category: 'industrial-minerals',
            icon: '🪨',
            name: { fa: 'سنگ آهک', en: 'Limestone', ps: 'د اهک ډبره' },
            description: {
                fa: 'سنگ آهک خرد شده CaCO₃ 95٪ برای تولید سیمان و آهک هیدراته.',
                en: 'Crushed limestone at 95% CaCO₃ for cement and hydrated lime plants.',
                ps: 'ماتو شوی اهک ډبره د ۹۵٪ CaCO₃ سره د سمنټو او هیدرېټ شوی اهک فابریکو لپاره.'
            },
            meta: [
                {
                    label: { fa: 'اندازه', en: 'Size', ps: 'اندازه' },
                    value: { fa: '۰ تا ۳۰ میلی‌متر', en: '0 – 30 mm', ps: '۰ تر ۳۰ ملي متره' }
                },
                {
                    label: { fa: 'حمل', en: 'Transport', ps: 'ترانسپورت' },
                    value: { fa: 'بالک بگ ۱.۵ تن', en: '1.5 t bulk bags', ps: '۱.۵ ټنه بلك بوجۍ' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/industrial-minerals/limestone.pdf'
        },
        {
            category: 'industrial-minerals',
            icon: '🧱',
            name: { fa: 'گچ ساختمانی', en: 'Gypsum', ps: 'ګچ' },
            description: {
                fa: 'سنگ گچ با خلوص 90٪ برای تولید پنل، سیمان و ملات‌های ویژه.',
                en: 'Gypsum stone at 90% purity for panels, cement and speciality plasters.',
                ps: '۹۰٪ خالص ګچ د تختو، سمنټو او ځانګړو ملاتونو لپاره.'
            },
            meta: [
                {
                    label: { fa: 'رطوبت', en: 'Moisture', ps: 'رطوبت' },
                    value: { fa: '< 5%', en: '< 5%', ps: '< ۵٪' }
                },
                {
                    label: { fa: 'بسته‌بندی', en: 'Packaging', ps: 'بسته بندي' },
                    value: { fa: 'بالک یا بگ ۵۰ کیلوگرم', en: 'Bulk or 50 kg bags', ps: 'فله یا ۵۰ کیلو بوجۍ' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/industrial-minerals/gypsum.pdf'
        },
        {
            category: 'industrial-minerals',
            icon: '🏖️',
            name: { fa: 'شن سیلیسی', en: 'Silica Sand', ps: 'سيليکا خږه' },
            description: {
                fa: 'شن سیلیسی شسته شده با SiO₂ بالای 97٪ برای شیشه و ریخته‌گری.',
                en: 'Washed silica sand with >97% SiO₂ for glassmaking and foundry.',
                ps: 'مینځل شوې سیلیکا شګه له ۹۷٪ څخه لوړه SiO₂ سره د ښیښې او کاسټینګ لپاره.'
            },
            meta: [
                {
                    label: { fa: 'اندازه مش', en: 'Mesh Size', ps: 'د جال اندازه' },
                    value: { fa: '16/30، 30/60', en: '16/30, 30/60', ps: '16/30، 30/60' }
                },
                {
                    label: { fa: 'بسته‌بندی', en: 'Packaging', ps: 'بسته بندي' },
                    value: { fa: 'کیسه 40 کیلوگرمی یا بالک بگ', en: '40 kg bags or jumbo bags', ps: '۴۰ کیلو بوجۍ یا جومبو بوجۍ' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/industrial-minerals/silica-sand.pdf'
        },
        {
            category: 'industrial-minerals',
            icon: '🧴',
            name: { fa: 'خاک کائولن', en: 'Kaolin Clay', ps: 'کاولن خاوره' },
            description: {
                fa: 'کائولن سفید با روشنایی 86٪ برای سرامیک، کاغذ و رنگ.',
                en: 'White kaolin clay with 86% brightness for ceramics, paper and coatings.',
                ps: 'سپین کایولن خاوره د ۸۶٪ روښانتیا سره د سرامیک، کاغذ او رنګ لپاره.'
            },
            meta: [
                {
                    label: { fa: 'رطوبت', en: 'Moisture', ps: 'رطوبت' },
                    value: { fa: '< 1%', en: '< 1%', ps: '< ۱٪' }
                },
                {
                    label: { fa: 'بسته‌بندی', en: 'Packaging', ps: 'بسته بندي' },
                    value: { fa: 'کیسه 25 کیلوگرمی یا جامبو', en: '25 kg bags or jumbo sacks', ps: '۲۵ کیلو بوجۍ یا جومبو کڅوړې' }
                }
            ],
            pdfUrl: 'pdfs/raw-materials/industrial-minerals/kaolin-clay.pdf'
        }
    ];

    const assuranceHighlights = [
        {
            icon: '🧾',
            title: {
                fa: 'بازرسی و COA قبل از حمل',
                en: 'Pre-Shipment Inspection & COA',
                ps: 'له لېږد وړاندې تفتیش او COA'
            },
            description: {
                fa: 'نمونه‌گیری طرف ثالث، گزارش آزمایشگاهی و بارکد رهگیری برای هر محموله.',
                en: 'Third-party sampling, lab reports and traceable barcodes for every shipment.',
                ps: 'دریمګړی نمونې اخیستل، لابراتواري راپورونه او د تعقیب وړ بارکوډونه د هر محمول لپاره.'
            }
        },
        {
            icon: '📦',
            title: {
                fa: 'بسته‌بندی و ایمن‌سازی محموله',
                en: 'Packaging & Cargo Securing',
                ps: 'بسته بندي او د محمول خوندي کول'
            },
            description: {
                fa: 'بسته‌بندی ضد رطوبت، پالت چوبی و نصب دیتالاگر د دما برای مواد حساس.',
                en: 'Moisture-proof packaging, fumigated pallets and temperature dataloggers for sensitive goods.',
                ps: 'د رطوبت ضد بسته بندي، تعقیم شوي پالتونه او د تودوخې ډیټالاګر د حساسو توکو لپاره.'
            }
        },
        {
            icon: '🧰',
            title: {
                fa: 'مدیریت اسناد و گمرک',
                en: 'Documentation & Customs Handling',
                ps: 'اسناد او ګمرکي مدیریت'
            },
            description: {
                fa: 'تهیه پکینگ لیست، MSDS، فرم‌های ترانزیت و ترخیص در مرزهای افغانستان.',
                en: 'Packing lists, MSDS, transit forms and customs clearance at Afghan borders.',
                ps: 'پیکینګ لیستونه، MSDS، د ترانزیټ فورمې او په افغان پولو کې ګمرکي تصفیه.'
            }
        },
        {
            icon: '🤝',
            title: {
                fa: 'پشتیبانی فنی و پایش موجودی',
                en: 'Technical Support & Inventory Monitoring',
                ps: 'تخنیکي ملاتړ او د زیرمو څارنه'
            },
            description: {
                fa: 'پیشنهاد برنامه تأمین دوره‌ای، هشدار موجودی و تطبیق با برنامه تولید شما.',
                en: 'Scheduled replenishment plans, stock alerts and alignment with your production calendar.',
                ps: 'د منظم اکمال پلانونه، د زیرمو خبرتیاوې او د تولید له مهالویش سره سمون.'
            }
        }
    ];

    const processStages = [
        {
            step: '01',
            title: {
                fa: 'تعریف نیاز و مشخصات',
                en: 'Define Requirements & Specifications',
                ps: 'اړتیاوې او ځانګړتیاوې ټاکل'
            },
            description: {
                fa: 'ظرفیت مصرف، گرید، بسته‌بندی و شرایط تحویل را مشخص می‌کنیم.',
                en: 'Capture consumption volume, grades, packaging and delivery terms.',
                ps: 'د مصرف ظرفیت، ګریډ، بسته بندي او د سپارلو شرایط مشخصوو.'
            },
            bullets: [
                { fa: 'تحلیل انبار و برنامه تولید', en: 'Analyse inventory and production schedule', ps: 'زېرمتون او د تولید مهالویش ارزول' },
                { fa: 'هماهنگی الزامات HS Code و MSDS', en: 'Align HS code and MSDS requirements', ps: 'د HS کوډ او MSDS اړتیاوو همغږي' }
            ]
        },
        {
            step: '02',
            title: {
                fa: 'انتخاب تأمین‌کننده و عقد قرارداد',
                en: 'Select Supplier & Sign Contract',
                ps: 'عرضه کوونکی ټاکل او قرارداد لاسلیکول'
            },
            description: {
                fa: 'قیمت‌گذاری چند منبع، نمونه‌گیری و توافق شرایط پرداخت و تحویل.',
                en: 'Multi-source pricing, sampling and agreement on payment and delivery terms.',
                ps: 'د څو سرچینو قیمتونه، نمونې اخیستل او د تادیې او سپارلو شرایطو هوکړه.'
            },
            bullets: [
                { fa: 'بازدید آنلاین یا حضوری از کارخانه', en: 'Virtual or on-site factory audit', ps: 'انلاین یا حضوري د فابریکې تفتیش' },
                { fa: 'صدور پیش فاکتور و LC / TT', en: 'Issue proforma and arrange LC/TT', ps: 'پروفارما صادروو او LC/TT برابروو' }
            ]
        },
        {
            step: '03',
            title: {
                fa: 'کنترل کیفیت و حمل بین‌المللی',
                en: 'Quality Control & International Freight',
                ps: 'د کیفیت کنټرول او نړیوال لېږد'
            },
            description: {
                fa: 'بازرسی بارگیری، صدور COA، رزرو کشتی/ریل و بیمه بار.',
                en: 'Loading supervision, COA issuance, vessel/rail booking and cargo insurance.',
                ps: 'د بارولو څارنه، د COA ورکول، د کښتۍ/رېل رزرف او د بار بیمه.'
            },
            bullets: [
                { fa: 'نصب پلمب و دیتالاگر حمل', en: 'Install seals and transit dataloggers', ps: 'د محمول مهر او ډیټالاګر لګول' },
                { fa: 'پیگیری ترانزیت تا مرز افغانستان', en: 'Track transit up to Afghan border', ps: 'تر افغان پولو پورې د ترانزیټ څارنه' }
            ]
        },
        {
            step: '04',
            title: {
                fa: 'ترخیص و تحویل درب کارخانه',
                en: 'Customs Clearance & Door Delivery',
                ps: 'ګمرکي تصفیه او دروازې ته سپارل'
            },
            description: {
                fa: 'ترخیص در گمرک افغانستان، توزین نهایی و تخلیه ایمن در انبار شما.',
                en: 'Clear Afghan customs, final weighing and safe unloading at your facility.',
                ps: 'په افغان ګمرک کې تصفیه، وروستي وزن او په خوندي ډول ستاسو په ګودام کې کښته کول.'
            },
            bullets: [
                { fa: 'ارائه گزارش تحویل و موجودی', en: 'Provide delivery and inventory reports', ps: 'د سپارلو او زیرمو راپور وړاندې کول' },
                { fa: 'پشتیبانی برای سفارش‌های بعدی', en: 'Support for follow-up orders', ps: 'د راتلونکو سفارشونو ملاتړ' }
            ]
        }
    ];

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    function setHero(lang) {
        const title = document.getElementById('rawMaterialsHeroTitle');
        const subtitle = document.getElementById('rawMaterialsHeroSubtitle');
        const quote = document.getElementById('rawMaterialsHeroQuote');
        const cta = document.getElementById('viewRawMaterialsButton');

        if (title) {
            title.textContent = content.hero.title[lang] || content.hero.title.fa;
        }
        if (subtitle) {
            subtitle.textContent = content.hero.subtitle[lang] || content.hero.subtitle.fa;
        }
        if (quote) {
            quote.textContent = content.hero.quote[lang] || content.hero.quote.fa;
        }
        if (cta) {
            cta.textContent = content.hero.secondaryCta[lang] || content.hero.secondaryCta.fa;
        }
    }

    function renderHighlights(lang) {
        const title = document.getElementById('rawMaterialsHighlightsTitle');
        const subtitle = document.getElementById('rawMaterialsHighlightsSubtitle');
        const grid = document.getElementById('rawMaterialsHighlightsGrid');

        if (title) {
            title.textContent = content.highlightsTitle[lang] || content.highlightsTitle.fa;
        }
        if (subtitle) {
            subtitle.textContent = content.highlightsSubtitle[lang] || content.highlightsSubtitle.fa;
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
                <h3>${item.title[lang] || item.title.fa}</h3>
                <p>${item.description[lang] || item.description.fa}</p>
            `;
            grid.appendChild(card);
        });
    }

    function renderCategories(lang) {
        const title = document.getElementById('rawMaterialsCategoriesTitle');
        const subtitle = document.getElementById('rawMaterialsCategoriesSubtitle');
        const grid = document.getElementById('rawMaterialsCategoriesGrid');

        if (title) {
            title.textContent = content.categoriesTitle[lang] || content.categoriesTitle.fa;
        }
        if (subtitle) {
            subtitle.textContent = content.categoriesSubtitle[lang] || content.categoriesSubtitle.fa;
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

            const titleText = category.title[lang] || category.title.fa;
            const descriptionText = category.description[lang] || category.description.fa;
            const viewText = lang === 'fa' ? 'مشاهده جزئیات' : (lang === 'ps' ? 'جزییات وګورئ' : 'View Details');
            const ariaLabel = lang === 'fa'
                ? `مشاهده مواد ${titleText}`
                : (lang === 'ps' ? `د ${titleText} مواد وګورئ` : `View ${titleText} materials`);

            card.innerHTML = `
                <span class="icon">${category.icon}</span>
                <h4>${titleText}</h4>
                <p>${descriptionText}</p>
                <div class="category-card-actions">
                    <a class="category-card-link" href="#" role="button" aria-label="${ariaLabel}">
                        <span>${viewText}</span>
                        <i class="fas fa-arrow-left"></i>
                    </a>
                </div>
            `;

            const openModal = () => showRawMaterialsCategoryModal(category.id, lang);

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
            const label = entry.label?.[lang] || entry.label?.fa || '';
            const value = entry.value?.[lang] || entry.value?.fa || '';
            return `<li><span>${label}</span><strong>${value}</strong></li>`;
        }).join('');
        return `<ul class="second-hand-meta">${items}</ul>`;
    }

    function renderInventory(lang) {
        const title = document.getElementById('rawMaterialsInventoryTitle');
        const subtitle = document.getElementById('rawMaterialsInventorySubtitle');
        const grid = document.getElementById('rawMaterialsInventoryGrid');

        if (title) {
            title.textContent = content.inventoryTitle[lang] || content.inventoryTitle.fa;
        }
        if (subtitle) {
            subtitle.textContent = content.inventorySubtitle[lang] || content.inventorySubtitle.fa;
        }
        if (!grid) {
            return;
        }

        grid.innerHTML = '';
        inventory.forEach(item => {
            const card = document.createElement('div');
            card.className = 'equipment-card';
            const viewText = lang === 'fa' ? 'مشاهده PDF' : (lang === 'ps' ? 'PDF وګورئ' : 'View PDF');
            const downloadText = lang === 'fa' ? 'دانلود' : (lang === 'ps' ? 'ډاونلوډ' : 'Download');

            card.innerHTML = `
                <div class="equipment-icon">${item.icon || '📄'}</div>
                <h4>${item.name[lang] || item.name.fa}</h4>
                <p>${item.description[lang] || item.description.fa}</p>
                ${buildMetaList(item.meta, lang)}
                <div class="equipment-actions">
                    <a href="${item.pdfUrl}" target="_blank" class="btn-primary">
                        <i class="fas fa-file-pdf"></i> ${viewText}
                    </a>
                    <a href="${item.pdfUrl}" download class="btn-secondary">
                        <i class="fas fa-download"></i> ${downloadText}
                    </a>
                </div>
            `;

            grid.appendChild(card);
        });
    }

    function renderAssurance(lang) {
        const title = document.getElementById('rawMaterialsAssuranceTitle');
        const subtitle = document.getElementById('rawMaterialsAssuranceSubtitle');
        const grid = document.getElementById('rawMaterialsAssuranceGrid');

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
        const title = document.getElementById('rawMaterialsProcessTitle');
        const subtitle = document.getElementById('rawMaterialsProcessSubtitle');
        const timeline = document.getElementById('rawMaterialsProcessTimeline');

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

    function buildInventoryCardsHtml(items, lang) {
        if (!items || !items.length) {
            const emptyText = lang === 'fa'
                ? 'هیچ ماده اولیه‌ای در این دسته موجود نیست.'
                : (lang === 'ps' ? 'په دې کټګورۍ کې کوم خام مواد نشته.' : 'No raw materials available in this category.');
            return `<div class="no-equipment">${emptyText}</div>`;
        }

        const viewText = lang === 'fa' ? 'مشاهده PDF' : (lang === 'ps' ? 'PDF وګورئ' : 'View PDF');
        const downloadText = lang === 'fa' ? 'دانلود' : (lang === 'ps' ? 'ډاونلوډ' : 'Download');

        const cards = items.map(item => `
            <div class="equipment-card">
                <div class="equipment-icon">${item.icon || '📄'}</div>
                <h4>${item.name[lang] || item.name.fa}</h4>
                <p>${item.description[lang] || item.description.fa}</p>
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

    function showRawMaterialsCategoryModal(categoryId, lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');
        const category = categories.find(entry => entry.id === categoryId);
        const items = inventory.filter(item => item.category === categoryId);

        if (!modal || !modalContent || !category) {
            return;
        }

        const title = category.title[lang] || category.title.fa;
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

    function showRawMaterialsInventoryModal(lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');

        if (!modal || !modalContent) {
            return;
        }

        const backText = lang === 'fa' ? 'بازگشت' : (lang === 'ps' ? 'بېرته' : 'Back');
        const sectionTitle = content.inventoryTitle[lang] || content.inventoryTitle.fa;

        const sectionsHtml = categories.map(category => {
            const items = inventory.filter(item => item.category === category.id);
            const categoryTitle = `${category.icon} ${category.title[lang] || category.title.fa}`;
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

    function updateIndustrialRawMaterialsPage(lang = getLanguage()) {
        setHero(lang);
        renderHighlights(lang);
        renderCategories(lang);
        renderInventory(lang);
        renderAssurance(lang);
        renderProcess(lang);
    }

    function setupInteractions() {
        const cta = document.getElementById('viewRawMaterialsButton');
        if (cta) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showRawMaterialsInventoryModal(getLanguage());
            });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updateIndustrialRawMaterialsPage();
        setupInteractions();
    });

    window.updateIndustrialRawMaterialsPage = updateIndustrialRawMaterialsPage;
    window.showRawMaterialsCategoryModal = showRawMaterialsCategoryModal;
    window.industrialRawMaterialsInventory = inventory;
})();
