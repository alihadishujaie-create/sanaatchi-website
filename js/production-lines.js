const productionLineIconDirectory = 'images/icons/production-lines';
const productionLineIconMap = {
    'food-processing-lines': 'food-processing-lines.ico',
    'consumer-goods-lines': 'consumer-goods-lines.ico',
    'construction-materials-lines': 'construction-materials-lines.ico',
    'textile-garments-lines': 'textile-garments-lines.ico',
    'fiberglas-production': 'fiberglas-production.ico',
    'recycling-lines': 'recycling-lines.ico',
    'disposable-products-lines': 'disposable-products-lines.ico',
    'light-industry-lines': 'light-industry-lines.ico',
    'second-hand': 'second-hand.ico',
    'cereal-production-line': 'cereal-production-line.ico',
    'baby-food-cerelac-line': 'baby-food-cerelac-line.ico',
    'dairy-processing-line': 'dairy-processing-line.ico',
    'beverage-production-line': 'beverage-production-line.ico',
    'bakery-biscuits-line': 'bakery-biscuits-line.ico',
    'meat-processing-line': 'meat-processing-line.ico',
    'fruit-vegetable-processing-line': 'fruit-vegetable-processing-line.ico',
    'edible-oil-line': 'edible-oil-line.ico',
    'shampoo-production-line': 'shampoo-production-line.ico',
    'detergent-production-line': 'detergent-production-line.ico',
    'soap-production-line': 'soap-production-line.ico',
    'toothpaste-production-line': 'toothpaste-production-line.ico',
    'cosmetics-production-line': 'cosmetics-production-line.ico',
    'sanitary-napkins-line': 'sanitary-napkins-line.ico',
    'cement-production-line': 'cement-production-line.ico',
    'brick-making-line': 'brick-making-line.ico',
    'concrete-blocks-line': 'concrete-blocks-line.ico',
    'steel-fabrication-line': 'steel-fabrication-line.ico',
    'gypsum-board-line': 'gypsum-board-line.ico',
    't-shirt-production-line': 't-shirt-production-line.ico',
    'jeans-production-line': 'jeans-production-line.ico',
    'towel-production-line': 'towel-production-line.ico',
    'carpet-weaving-line': 'carpet-weaving-line.ico',
    'fiberglas-bottle-washing': 'fiberglas-bottle-washing.ico',
    'fiberglas-bottle-crushing': 'fiberglas-bottle-crushing.ico',
    'fiberglas-steam-treatment': 'fiberglas-steam-treatment.ico',
    'fiberglas-carding-machine': 'fiberglas-carding-machine.ico',
    'fiberglas-padding-machine': 'fiberglas-padding-machine.ico',
    'fiberglas-feeding-machine': 'fiberglas-feeding-machine.ico',
    'fiberglas-cross-laping': 'fiberglas-cross-laping.ico',
    'fiberglas-needling-machine': 'fiberglas-needling-machine.ico',
    'fiberglas-fiber-finishing': 'fiberglas-fiber-finishing.ico',
    'fiberglas-cotton-spinning': 'fiberglas-cotton-spinning.ico',
    'fiberglas-cotton-weaving': 'fiberglas-cotton-weaving.ico',
    'fiberglas-cotton-dyeing': 'fiberglas-cotton-dyeing.ico',
    'plastic-recycling-line': 'plastic-recycling-line.ico',
    'paper-recycling-line': 'paper-recycling-line.ico',
    'tire-recycling-line': 'tire-recycling-line.ico',
    'metal-recycling-line': 'metal-recycling-line.ico',
    'disposable-cups-line': 'disposable-cups-line.ico',
    'disposable-plates-line': 'disposable-plates-line.ico',
    'disposable-cutlery-line': 'disposable-cutlery-line.ico',
    'plastic-bottles-line': 'plastic-bottles-line.ico',
    'plastic-bags-line': 'plastic-bags-line.ico',
    'furniture-manufacturing-line': 'furniture-manufacturing-line.ico',
    'school-furniture-line': 'school-furniture-line.ico',
    'office-furniture-line': 'office-furniture-line.ico',
    'sports-equipment-line': 'sports-equipment-line.ico'
};

const loggedProductionLineIcons = new Set();

function getProductionLineIcon(key) {
    if (!key) {
        return null;
    }

    const normalised = String(key).trim().toLowerCase();
    const mapped = productionLineIconMap[normalised];

    if (!mapped) {
        if (typeof console !== 'undefined' && !loggedProductionLineIcons.has(normalised)) {
            console.warn(`Missing production line icon: ${normalised}`);
            loggedProductionLineIcons.add(normalised);
        }
        return `${productionLineIconDirectory}/${normalised}.ico`;
    }

    if (typeof mapped === 'object' && mapped !== null) {
        const src = mapped.src ? (mapped.src.includes('/') ? mapped.src : `${productionLineIconDirectory}/${mapped.src}`) : '';
        if (!src) {
            return null;
        }
        return mapped.alt ? { src, alt: mapped.alt } : src;
    }

    if (typeof mapped === 'string') {
        return mapped.includes('/') ? mapped : `${productionLineIconDirectory}/${mapped}`;
    }

    return null;
}

if (typeof window !== 'undefined') {
    window.getProductionLineIcon = getProductionLineIcon;
    window.productionLineIconMap = productionLineIconMap;
}

const productionLineGroups = [
    {
        id: 'food-processing-lines',
        icon: '🥘',
        title: {
            fa: 'خطوط تولید مواد غذایی',
            en: 'Food Processing Lines',
            ps: 'د خوراکي موادو د پروسس لینونه'
        },
        description: {
            fa: 'راه‌حل‌های کامل برای تولید غلات صبحانه، لبنیات، نوشیدنی، نان و محصولات پروتئینی.',
            en: 'Complete solutions for cereals, dairy, beverages, bakery and protein processing.',
            ps: 'د ناشته غلو، لبنیاتو، مشروباتو، ډوډۍ او پروټیني محصولاتو لپاره بشپړې حل لارې.'
        }
    },
    {
        id: 'consumer-goods-lines',
        icon: '🧴',
        title: {
            fa: 'خطوط تولید کالاهای مصرفی',
            en: 'Consumer Goods Lines',
            ps: 'د مصرفي توکو د تولید لینونه'
        },
        description: {
            fa: 'راه‌اندازی خطوط شوینده، محصولات بهداشتی شخصی، آرایشی و بهداشت خانگی.',
            en: 'Turnkey lines for detergents, personal care, cosmetics and hygiene goods.',
            ps: 'د صابون، شیمپو، ښکلايي او کورني حفظ الصحې محصولاتو د تولید حل لارې.'
        }
    },
    {
        id: 'construction-materials-lines',
        icon: '🏗️',
        title: {
            fa: 'خطوط تولید مصالح ساختمانی',
            en: 'Construction Materials Lines',
            ps: 'د ساختماني موادو د تولید لینونه'
        },
        description: {
            fa: 'از سیمان و آجر تا بلوک بتنی، فولادسازی سبک و پنل‌های گچی آماده.',
            en: 'From cement and bricks to concrete blocks, light steel fabrication and gypsum panels.',
            ps: 'له سمنټو او خښتو څخه تر کانکریټ بلاکونو، سپکو فولادي جوړښتونو او جپسم تختو پورې.'
        }
    },
    {
        id: 'textile-garments-lines',
        icon: '👕',
        title: {
            fa: 'خطوط تولید نساجی و پوشاک',
            en: 'Textile & Garments Lines',
            ps: 'د نساجۍ او جامو د تولید لینونه'
        },
        description: {
            fa: 'از ریسندگی و بافندگی تا دوخت تی‌شرت، جین، حوله و فرش‌های دستباف صنعتی.',
            en: 'From spinning and weaving to automated T-shirt, denim, towel and carpet production.',
            ps: 'له سپننې او اوبدلو څخه تر د ټي شرټ، جین، تولیي او غالۍ صنعتي تولید پورې.'
        }
    },
    {
        id: 'fiberglas-production',
        icon: '🧶',
        title: {
            fa: 'خطوط تولید پشم شیشه',
            en: 'Fiberglass Wool Production Lines',
            ps: 'د فایبر ګلاس وړۍ د تولید لینونه'
        },
        description: {
            fa: 'بازیافت بطری PET، ذوب الیاف، کاردینگ و نیدل پانچ برای تولید عایق پشم شیشه.',
            en: 'PET bottle recycling, fibre melting, carding and needle punching for fiberglass insulation.',
            ps: 'د PET بوتلونو بیاکارونه، فایبر خټول، کارډینګ او نیدل پینچ د فایبر ګلاس عایق لپاره.'
        }
    },
    {
        id: 'recycling-lines',
        icon: '♻️',
        title: {
            fa: 'خطوط بازیافت صنعتی',
            en: 'Industrial Recycling Lines',
            ps: 'صنعتي د بیاکارونې لینونه'
        },
        description: {
            fa: 'بازیافت پلاستیک، کاغذ، تایر و فلزات با تجهیزات خردایش، شستشو و گرانول‌سازی.',
            en: 'Plastic, paper, tire and metal recycling with shredding, washing and pelletising systems.',
            ps: 'د پلاستیک، کاغذ، ټایر او فلزاتو بیاکارونې لپاره د پرېکولو، مینځلو او ګرینول کولو سیسټمونه.'
        }
    },
    {
        id: 'disposable-products-lines',
        icon: '🥤',
        title: {
            fa: 'خطوط تولید محصولات یکبارمصرف',
            en: 'Disposable Products Lines',
            ps: 'د یو ځل کارېدونکو محصولاتو د تولید لینونه'
        },
        description: {
            fa: 'تجهیز خطوط تولید لیوان، بشقاب، قاشق و بطری پلاستیکی برای صنایع خدماتی.',
            en: 'Equip production lines for cups, plates, cutlery and PET packaging for service industries.',
            ps: 'د کپ، پشقاب، کارد او PET بوتلونو د تولید لپاره بشپړ تجهیزات.'
        }
    },
    {
        id: 'light-industry-lines',
        icon: '🪑',
        title: {
            fa: 'خطوط صنایع سبک و چوبی',
            en: 'Light Industry Lines',
            ps: 'د سپکو صنعتونو د تولید لینونه'
        },
        description: {
            fa: 'تولید مبلمان منزل، مدرسه و اداره به همراه تجهیزات ورزشی نرم.',
            en: 'Furniture manufacturing for home, school and office plus soft sports equipment.',
            ps: 'د کور، ښوونځي او دفتر فرنیچر او نرم ورزشي تجهیزاتو د تولید حل لارې.'
        }
    },
    {
        id: 'second-hand',
        icon: '🔄',
        title: {
            fa: 'ماشین آلات دست دوم تایید شده',
            en: 'Certified Second-Hand Machinery',
            ps: 'تایید شوي دوهم لاس ماشینونه'
        },
        description: {
            fa: 'دستگاه‌های بازبینی‌شده چاپ، بسته‌بندی، پلاستیک، نساجی و ماشین‌آلات سنگین آماده تحویل.',
            en: 'Inspected printing, packaging, plastics, textile, and heavy machinery ready to deploy.',
            ps: 'تر پلټنې وروسته چمتو شوي د چاپ، بسته بندۍ، پلاستیک، نساجۍ او درنو ماشینونو بشپړ انتخاب.'
        }
    }
];

const productionLineCategoryRoutes = window.productionLineCategoryRoutes || {
    'food-processing-lines': 'food-processing-lines.html',
    'consumer-goods-lines': 'consumer-goods-lines.html',
    'construction-materials-lines': 'construction-materials-lines.html',
    'textile-garments-lines': 'textile-garments-lines.html',
    'fiberglas-production': 'production-lines.html#fiberglas-production',
    'recycling-lines': 'recycling-lines.html',
    'disposable-products-lines': 'disposable-products-lines.html',
    'light-industry-lines': 'light-industry-lines.html',
    'second-hand': 'second-hand.html'
};

window.productionLineCategoryRoutes = productionLineCategoryRoutes;

const productionLines = {
    'food-processing-lines': {
        title: {
            fa: 'خطوط تولید مواد غذایی',
            en: 'Food Processing Lines',
            ps: 'د خوراکي موادو د پروسس لینونه'
        },
        lines: [
            {
                id: 'cereal-production-line',
                title: {
                    fa: 'خط تولید غلات صبحانه',
                    en: 'Cereal Production Line',
                    ps: 'د ناشته د غلو تولید لین'
                },
                description: {
                    fa: 'فرآیند کامل از پاک‌سازی دانه تا اکسترود، روکش و بسته‌بندی غلات صبحانه.',
                    en: 'Complete process from grain cleaning to extrusion, coating and cereal packaging.',
                    ps: 'له دانې پاکولو، اکسترود او پوښښ څخه تر د ناشته غلو بسته بندۍ پورې بشپړ بهیر.'
                },
                pdfUrl: 'pdfs/production-lines/food-processing/cereal-production-line.pdf'
            },
            {
                id: 'baby-food-cerelac-line',
                title: {
                    fa: 'خط تولید غذای کودک/سرلاک',
                    en: 'Baby Food / Cerelac Line',
                    ps: 'د ماشوم د خوراک / سرلاک تولید لین'
                },
                description: {
                    fa: 'میکسینگ دقیق، خشک‌کن غلتکی و بسته‌بندی استریل غذای کودک.',
                    en: 'Precise mixing, drum drying and sterile packing for baby cereal products.',
                    ps: 'د ماشوم د خوراک لپاره دقیق مخلوط، ډرم وچول او استریل بسته بندي.'
                },
                pdfUrl: 'pdfs/production-lines/food-processing/baby-food-cerelac-line.pdf'
            },
            {
                id: 'dairy-processing-line',
                title: {
                    fa: 'خط فرآوری لبنیات',
                    en: 'Dairy Processing Line',
                    ps: 'د لبنیاتو د پروسس لین'
                },
                description: {
                    fa: 'پاستوریزه، هموژنیزه، تخمیر و بسته‌بندی شیر، ماست و پنیر.',
                    en: 'Pasteurisation, homogenisation, fermentation and packaging for milk, yogurt and cheese.',
                    ps: 'د شیدو، مستې او پنیر لپاره پاستور، هموژن، تخمیر او بسته بندي.'
                },
                pdfUrl: 'pdfs/production-lines/food-processing/dairy-processing-line.pdf'
            },
            {
                id: 'beverage-production-line',
                title: {
                    fa: 'خط تولید نوشیدنی',
                    en: 'Beverage Production Line',
                    ps: 'د مشروباتو تولید لین'
                },
                description: {
                    fa: 'اختلاط، تصفیه، پرکن و درب‌بندی نوشیدنی‌های غیرالکلی.',
                    en: 'Mixing, filtration, filling and capping for non-alcoholic beverages.',
                    ps: 'د غیر الکولي مشروباتو لپاره مخلوط، فلټراسیون، ډکول او سرپوش کول.'
                },
                pdfUrl: 'pdfs/production-lines/food-processing/beverage-production-line.pdf'
            },
            {
                id: 'bakery-biscuits-line',
                title: {
                    fa: 'خط تولید نان و بیسکویت',
                    en: 'Bakery & Biscuits Line',
                    ps: 'د ډوډۍ او بسکټو تولید لین'
                },
                description: {
                    fa: 'آماده‌سازی خمیر، تخمیرکنترل‌شده، پخت، سردکردن و بسته‌بندی نان و بیسکویت.',
                    en: 'Dough preparation, controlled proofing, baking, cooling and packing for bread and biscuits.',
                    ps: 'د خمیر چمتووالی، کنټرول شوی پخېدنه، پخول، یخول او بسته بندي د ډوډۍ او بسکټو لپاره.'
                },
                pdfUrl: 'pdfs/production-lines/food-processing/bakery-biscuits-line.pdf'
            },
            {
                id: 'meat-processing-line',
                title: {
                    fa: 'خط فرآوری گوشت',
                    en: 'Meat Processing Line',
                    ps: 'د غوښې د پروسس لین'
                },
                description: {
                    fa: 'خردکردن، مخلوط، پرکن، دودی و بسته‌بندی محصولات گوشتی.',
                    en: 'Grinding, blending, filling, smoking and packaging for processed meat products.',
                    ps: 'د غوښې د محصولاتو لپاره ګراینډ، مخلوط، ډکول، سګرټ کول او بسته بندي.'
                },
                pdfUrl: 'pdfs/production-lines/food-processing/meat-processing-line.pdf'
            },
            {
                id: 'fruit-vegetable-processing-line',
                title: {
                    fa: 'خط فرآوری میوه و سبزی',
                    en: 'Fruit & Vegetable Processing Line',
                    ps: 'د میوو او سبزیو د پروسس لین'
                },
                description: {
                    fa: 'شستشو، پوست‌گیری، برش، بلانچینگ و بسته‌بندی تازه یا IQF.',
                    en: 'Washing, peeling, cutting, blanching and packaging for fresh or IQF produce.',
                    ps: 'د میوو او سبزیو لپاره مینځل، پوستکښ، پرې کول، بلانچینګ او بسته بندي.'
                },
                pdfUrl: 'pdfs/production-lines/food-processing/fruit-vegetable-processing-line.pdf'
            },
            {
                id: 'edible-oil-line',
                title: {
                    fa: 'خط تولید روغن خوراکی',
                    en: 'Edible Oil Production Line',
                    ps: 'د خوراکي غوړ د تولید لین'
                },
                description: {
                    fa: 'استخراج، تصفیه، بی‌بو کردن و بسته‌بندی انواع روغن نباتی.',
                    en: 'Extraction, refining, deodorising and bottling of vegetable cooking oils.',
                    ps: 'د خوراکي نباتي غوړ لپاره استخراج، تصفیه، بوی لرې کول او بوتل بندي.'
                },
                pdfUrl: 'pdfs/production-lines/food-processing/edible-oil-line.pdf'
            }
        ]
    },
    'consumer-goods-lines': {
        title: {
            fa: 'خطوط تولید کالاهای مصرفی',
            en: 'Consumer Goods Lines',
            ps: 'د مصرفي توکو د تولید لینونه'
        },
        lines: [
            {
                id: 'shampoo-production-line',
                title: {
                    fa: 'خط تولید شامپو',
                    en: 'Shampoo Production Line',
                    ps: 'د شیمپو تولید لین'
                },
                description: {
                    fa: 'میکسینگ، همگن‌سازی، پرکن و درب‌بندی شامپو و نرم‌کننده.',
                    en: 'Mixing, homogenising, filling and capping for shampoos and conditioners.',
                    ps: 'د شیمپو او نرمونکو لپاره مخلوط، همجنس کول، ډکول او سرپوښ.'
                },
                pdfUrl: 'pdfs/production-lines/consumer-goods/shampoo-production-line.pdf'
            },
            {
                id: 'detergent-production-line',
                title: {
                    fa: 'خط تولید مواد شوینده مایع',
                    en: 'Detergent Production Line',
                    ps: 'د مایع ډیټرژن تولید لین'
                },
                description: {
                    fa: 'سری‌سازی، مخلوط پیوسته، پرکن چندنازله و لیبل‌زنی شوینده‌ها.',
                    en: 'Batch formulation, continuous mixing, multi-head filling and labelling for detergents.',
                    ps: 'د ډیټرژنټ لپاره فارمول جوړونه، دوامداره مخلوط، څو سری ډکول او لیبل لګول.'
                },
                pdfUrl: 'pdfs/production-lines/consumer-goods/detergent-production-line.pdf'
            },
            {
                id: 'soap-production-line',
                title: {
                    fa: 'خط تولید صابون جامد',
                    en: 'Soap Production Line',
                    ps: 'د صابون تولید لین'
                },
                description: {
                    fa: 'خمیرگیری، اکسترودر صابون، قالب‌گیری، چاپ و بسته‌بندی قالبی.',
                    en: 'Saponification, soap extrusion, stamping, imprinting and flow-wrapping.',
                    ps: 'د صابون جوړولو، اکسترود، ټاپه کولو او فلو-رېپ بسته بندۍ بشپړ بهیر.'
                },
                pdfUrl: 'pdfs/production-lines/consumer-goods/soap-production-line.pdf'
            },
            {
                id: 'toothpaste-production-line',
                title: {
                    fa: 'خط تولید خمیردندان',
                    en: 'Toothpaste Production Line',
                    ps: 'د غاښونو کریم تولید لین'
                },
                description: {
                    fa: 'میکسینگ خلأ، دیگ‌های دوجداره، پرکن تیوپ و بسته‌بندی مقوایی.',
                    en: 'Vacuum mixers, jacketed kettles, tube filling and carton packing.',
                    ps: 'د خلا مخلوطونه، دوپوسته کټلونه، ټیوپ ډکول او کارټوني بسته بندي.'
                },
                pdfUrl: 'pdfs/production-lines/consumer-goods/toothpaste-production-line.pdf'
            },
            {
                id: 'cosmetics-production-line',
                title: {
                    fa: 'خط تولید محصولات آرایشی',
                    en: 'Cosmetics Production Line',
                    ps: 'د سینګار محصولاتو تولید لین'
                },
                description: {
                    fa: 'فرمولاسیون وکیوم، پرکن کرم و پنکک، درب‌بندی و تست کنترل کیفیت.',
                    en: 'Vacuum formulation, cream and compact filling, sealing and QC testing.',
                    ps: 'د خلا فارمول، د کریم او کمپکت ډکول، سیل کول او د کیفیت ازموینې.'
                },
                pdfUrl: 'pdfs/production-lines/consumer-goods/cosmetics-production-line.pdf'
            },
            {
                id: 'sanitary-napkins-line',
                title: {
                    fa: 'خط تولید نوار بهداشتی',
                    en: 'Sanitary Napkins Line',
                    ps: 'د حفظ الصحې پیډونو تولید لین'
                },
                description: {
                    fa: 'برش وب، جذب پودر SAP، تا، بسته‌بندی و استریل محصولات بهداشتی بانوان.',
                    en: 'Web cutting, SAP dosing, folding, wrapping and sterilising feminine hygiene pads.',
                    ps: 'د حفظ الصحې پیډونو لپاره د ویب پرې کول، د SAP پوډر اچول، تاوول، بسته بندي او استریل کول.'
                },
                pdfUrl: 'pdfs/production-lines/consumer-goods/sanitary-napkins-line.pdf'
            }
        ]
    },
    'construction-materials-lines': {
        title: {
            fa: 'خطوط تولید مصالح ساختمانی',
            en: 'Construction Materials Lines',
            ps: 'د ساختماني موادو د تولید لینونه'
        },
        lines: [
            {
                id: 'cement-production-line',
                title: {
                    fa: 'خط تولید سیمان',
                    en: 'Cement Production Line',
                    ps: 'د سمنټو تولید لین'
                },
                description: {
                    fa: 'سنگ‌شکنی، آسیاب مواد، پخت کلینکر و بسته‌بندی سیمان در کیسه یا بگ‌ها.',
                    en: 'Crushing, raw milling, clinker kiln and cement packing into bags or bulk.',
                    ps: 'د سمنټو لپاره د ډبرو ماتول، خام مل، کلینکر تنور او بسته بندي.'
                },
                pdfUrl: 'pdfs/production-lines/construction-materials/cement-production-line.pdf'
            },
            {
                id: 'brick-making-line',
                title: {
                    fa: 'خط تولید آجر',
                    en: 'Brick Making Line',
                    ps: 'د خښتو جوړولو لین'
                },
                description: {
                    fa: 'آماده‌سازی خاک، اکسترودر آجر، برش وایری، خشک‌کن و کوره تونلی.',
                    en: 'Clay preparation, brick extrusion, wire cutting, dryer and tunnel kiln.',
                    ps: 'د خټې چمتووالی، خښتو اکسترود، د وایر پرې کول، وچول او تونلي بټۍ.'
                },
                pdfUrl: 'pdfs/production-lines/construction-materials/brick-making-line.pdf'
            },
            {
                id: 'concrete-blocks-line',
                title: {
                    fa: 'خط تولید بلوک بتنی',
                    en: 'Concrete Blocks Line',
                    ps: 'د کانکریټ بلاک تولید لین'
                },
                description: {
                    fa: 'میکسینگ اتوماتیک، قالب‌گیری پرس، عمل‌آوری و پالتایزینگ بلوک‌های بتنی.',
                    en: 'Automated mixing, hydraulic moulding, curing and palletising of concrete blocks.',
                    ps: 'اتومات مخلوط، هایدرولیک قالب، درملنه او د کانکریټ بلاکونو پالت ایزه کول.'
                },
                pdfUrl: 'pdfs/production-lines/construction-materials/concrete-blocks-line.pdf'
            },
            {
                id: 'steel-fabrication-line',
                title: {
                    fa: 'خط تولید سازه‌های فولادی سبک',
                    en: 'Steel Fabrication Line',
                    ps: 'د فولادي جوړښتونو تولید لین'
                },
                description: {
                    fa: 'برش CNC، خم، جوش و مونتاژ سازه‌های فلزی برای پروژه‌های ساختمانی.',
                    en: 'CNC cutting, bending, welding and assembly of structural steel components.',
                    ps: 'د ساختماني فولادي برخو لپاره CNC پرې کول، خم، ویلډنګ او مونتاژ.'
                },
                pdfUrl: 'pdfs/production-lines/construction-materials/steel-fabrication-line.pdf'
            },
            {
                id: 'gypsum-board-line',
                title: {
                    fa: 'خط تولید پنل و تایل گچی',
                    en: 'Gypsum Board Line',
                    ps: 'د جپسم تختو تولید لین'
                },
                description: {
                    fa: 'دستگاه میکسر دوغاب، خط شکل‌دهی، خشک‌کن پیوسته و بسته‌بندی پنل‌ها.',
                    en: 'Slurry mixers, forming line, continuous dryer and panel packaging.',
                    ps: 'د دوغاب مخلوط، بڼه ورکولو لین، دوامداره وچوونکې او د تختو بسته بندي.'
                },
                pdfUrl: 'pdfs/production-lines/construction-materials/gypsum-board-line.pdf'
            }
        ]
    },
    'textile-garments-lines': {
        title: {
            fa: 'خطوط تولید نساجی و پوشاک',
            en: 'Textile & Garments Lines',
            ps: 'د نساجۍ او جامو د تولید لینونه'
        },
        lines: [
            {
                id: 't-shirt-production-line',
                title: {
                    fa: 'خط تولید تی‌شرت',
                    en: 'T-Shirt Production Line',
                    ps: 'د ټي شرټ د تولید لین'
                },
                description: {
                    fa: 'برش خودکار، دوخت، چاپ و کنترل کیفیت برای تولید تی‌شرت در حجم بالا.',
                    en: 'Automated cutting, sewing, printing and QC for high-volume T-shirt manufacturing.',
                    ps: 'د ټي شرټ د لوړ تولید لپاره اتومات پرې کول، ګنډل، چاپ او د کیفیت کنټرول.'
                },
                pdfUrl: 'pdfs/production-lines/textile-garments/t-shirt-production-line.pdf'
            },
            {
                id: 'jeans-production-line',
                title: {
                    fa: 'خط تولید شلوار جین',
                    en: 'Jeans Production Line',
                    ps: 'د جین پتلون د تولید لین'
                },
                description: {
                    fa: 'آماده‌سازی پارچه، دوخت صنعتی، شستشوی آنزیمی و پرداخت نهایی شلوار جین.',
                    en: 'Fabric prep, industrial sewing, enzyme washing and finishing for denim jeans.',
                    ps: 'د جین لپاره د ټوکر چمتووالی، صنعتي ګنډل، انزایمي مینځل او وروستی فینش.'
                },
                pdfUrl: 'pdfs/production-lines/textile-garments/jeans-production-line.pdf'
            },
            {
                id: 'towel-production-line',
                title: {
                    fa: 'خط تولید حوله و منسوجات',
                    en: 'Towel Production Line',
                    ps: 'د تولیو د تولید لین'
                },
                description: {
                    fa: 'ریسندگی، بافندگی حوله‌ای، رنگرزی و بسته‌بندی برای هتل‌ها و بازار مصرف.',
                    en: 'Spinning, terry weaving, dyeing and packaging tailored for hospitality and retail.',
                    ps: 'د ریسېدو، حوله اوبدلو، رنګولو او بسته بندۍ بشپړ سیستم د بازار لپاره.'
                },
                pdfUrl: 'pdfs/production-lines/textile-garments/towel-production-line.pdf'
            },
            {
                id: 'carpet-weaving-line',
                title: {
                    fa: 'خط تولید قالین ماشینی',
                    en: 'Carpet Weaving Line',
                    ps: 'د غالۍ د تولید لین'
                },
                description: {
                    fa: 'ماشین‌های بافندگی، فینیشینگ و برش برای تولید فرش ماشینی و دستباف صنعتی.',
                    en: 'Power looms, finishing and cutting solutions for machine-made and semi-handmade carpets.',
                    ps: 'د ماشین اوبدلو، وروستي فینش او پرې کولو سیستم د غالۍ تولید لپاره.'
                },
                pdfUrl: 'pdfs/production-lines/textile-garments/carpet-weaving-line.pdf'
            }
        ]
    },
    'fiberglas-production': {
        title: {
            fa: 'خطوط تولید پشم شیشه',
            en: 'Fiberglass Wool Production Lines',
            ps: 'د فایبر ګلاس وړۍ د تولید لینونه'
        },
        lines: [
            {
                id: 'fiberglas-bottle-washing',
                title: {
                    fa: 'شستشوی بطری PET',
                    en: 'PET Bottle Washing System',
                    ps: 'د PET بوتل د مینځلو سیستم'
                },
                description: {
                    fa: 'خط شستشو با واحدهای تفکیک، شستشوی گرم و خشک‌کن سانتریفیوژ برای آماده‌سازی پرک.',
                    en: 'Sorting, hot washing and centrifugal drying line that prepares clean PET flakes.',
                    ps: 'د تفکیک، ګرم مینځلو او سنټرفیوژ وچولو لاین چې پاک PET فلېکونه برابروي.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/bottle-washing.pdf'
            },
            {
                id: 'fiberglas-bottle-crushing',
                title: {
                    fa: 'خرد کردن بطری PET',
                    en: 'PET Bottle Crushing Line',
                    ps: 'د PET بوتل د خړوبولو لاین'
                },
                description: {
                    fa: 'شردر تیغه‌ای و آسیاب دانه‌ای با سیستم جداسازی فلز و گردگیر برای آماده‌سازی مواد ورودی.',
                    en: 'Blade shredder and granulator with metal separation and dust collection for feed preparation.',
                    ps: 'د تیغ لرونکی شریدر او ګرینولیټر د فلز بېلولو او دوړو ټولولو سره د موادو د چمتو کولو لپاره.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/bottle-crushing.pdf'
            },
            {
                id: 'fiberglas-steam-treatment',
                title: {
                    fa: 'بخاردهی و نرم‌سازی الیاف',
                    en: 'Steam Fibre Conditioning',
                    ps: 'د فایبر د بخار درملنه'
                },
                description: {
                    fa: 'واحد بخاردهی و پیش‌گرمایش برای نرم‌سازی الیاف بازیافتی پیش از کاردینگ.',
                    en: 'Steam conditioning tunnel that softens recycled fibres ahead of carding.',
                    ps: 'د بخار درملنې تونل چې بیا کارېدلي فایبرونه د کارډینګ څخه مخکې نرموي.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/steam-treatment.pdf'
            },
            {
                id: 'fiberglas-carding-machine',
                title: {
                    fa: 'ماشین کاردینگ الیاف',
                    en: 'Fiberglass Carding Machine',
                    ps: 'د فایبر ګلاس د کارډینګ ماشین'
                },
                description: {
                    fa: 'کاردینگ عرض پهن با کنترل سرعت و تراکم برای همگن‌سازی لایه الیاف.',
                    en: 'Wide working-width carder with adjustable speed and density for uniform fibre webs.',
                    ps: 'د پراخ عرض کارډر د سرعت او کثافت د تنظیم وړ لپاره چې یوشان فایبر جال جوړ کړي.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/carding-machine.pdf'
            },
            {
                id: 'fiberglas-padding-machine',
                title: {
                    fa: 'ماشین پدینگ و لایه‌سازی',
                    en: 'Padding & Layering Machine',
                    ps: 'د پډینګ او لایه جوړولو ماشین'
                },
                description: {
                    fa: 'سامانه فشرده‌سازی و تنظیم وزن سطحی برای آماده‌سازی پدهای عایق.',
                    en: 'Compaction line that sets basis weight and prepares insulation pads.',
                    ps: 'د کمپکشن لاین چې د سطح وزن تنظیموي او د عایق پډونه برابروي.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/padding-machine.pdf'
            },
            {
                id: 'fiberglas-feeding-machine',
                title: {
                    fa: 'ماشین تغذیه الیاف',
                    en: 'Fibre Feeding System',
                    ps: 'د فایبر د تغذیې سیستم'
                },
                description: {
                    fa: 'خوراک‌دهی حجمی با سنسور وزن و کنترل سرعت برای ورود یکنواخت الیاف به خط.',
                    en: 'Volumetric feeders with weight sensors maintain even fibre feed into the line.',
                    ps: 'حجمي فیډرونه د وزن سینسرونو سره چې فایبر په یوشان ډول لاین ته داخلوي.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/feeding-machine.pdf'
            },
            {
                id: 'fiberglas-cross-laping',
                title: {
                    fa: 'دستگاه کراس لپینگ',
                    en: 'Cross Lapping Machine',
                    ps: 'د کراس لاپینګ ماشین'
                },
                description: {
                    fa: 'واحد لاپینگ با کنترل عرض و زاویه برای ساخت تشک الیاف چندلایه.',
                    en: 'Cross lapper with adjustable width and lay angles to build multilayer fibre batts.',
                    ps: 'د لاپینګ واحد د تنظیم وړ عرض او زاویو سره چې څو لایه فایبر چپرکټ جوړوي.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/cross-laping.pdf'
            },
            {
                id: 'fiberglas-needling-machine',
                title: {
                    fa: 'ماشین نیدل پانچ',
                    en: 'Needle Punching Line',
                    ps: 'د نیدل پانچ لاین'
                },
                description: {
                    fa: 'نیدل‌پانچ چندمرحله‌ای با کنترل عمق و تراکم سوزن برای اتصال لایه‌های الیاف.',
                    en: 'Multi-stage needle looms with depth and density control to bond fibre layers.',
                    ps: 'چند پړاوه نیدل لومونه د ژوروالي او کثافت کنټرول سره چې فایبر لایه یوځای کوي.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/needling-machine.pdf'
            },
            {
                id: 'fiberglas-fiber-finishing',
                title: {
                    fa: 'خط فینیشینگ الیاف',
                    en: 'Fibre Finishing Line',
                    ps: 'د فایبر فینشنګ لاین'
                },
                description: {
                    fa: 'سیستم برش، برش نهایی و رول‌پیچ برای آماده‌سازی تشک پشم شیشه.',
                    en: 'Trimming, surface finishing and winding system for fiberglass wool batts.',
                    ps: 'د پرې کولو، سطح فینش او واینډنګ سیستم د فایبر ګلاس وړۍ لپاره.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/fiber-finishing.pdf'
            },
            {
                id: 'fiberglas-cotton-spinning',
                title: {
                    fa: 'ریسندگی الیاف ترکیبی',
                    en: 'Blended Fibre Spinning',
                    ps: 'د ګډو فایبرو سپننه'
                },
                description: {
                    fa: 'ریسندگی رینگ/روتور برای ترکیب الیاف شیشه با الیاف طبیعی جهت تولید نخ تقویتی.',
                    en: 'Ring/rotor spinning that blends glass fibres with natural fibres for reinforcement yarns.',
                    ps: 'د رنګ/روتور سپننه چې د فایبر ګلاس فایبرونه له طبیعي فایبرو سره ګډوي د تقویتي تارونو لپاره.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/cotton-spinning.pdf'
            },
            {
                id: 'fiberglas-cotton-weaving',
                title: {
                    fa: 'بافندگی الیاف ترکیبی',
                    en: 'Blended Fibre Weaving Loom',
                    ps: 'د ګډو فایبرو اوبدلو ماشین'
                },
                description: {
                    fa: 'ماشین بافندگی عرض پهن با کنترل تنش و ضربدری برای تولید پارچه تقویتی.',
                    en: 'Wide-width loom with precise tension and beat-up control for reinforcement fabrics.',
                    ps: 'د پراخ عرض اوبدلو ماشین د دقیق تناو او ضرب تنظیم سره د تقویتي ټوکر لپاره.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/cotton-weaving.pdf'
            },
            {
                id: 'fiberglas-cotton-dyeing',
                title: {
                    fa: 'رنگ‌آمیزی الیاف ترکیبی',
                    en: 'Blended Fibre Dyeing Unit',
                    ps: 'د ګډو فایبرو رنګولو واحد'
                },
                description: {
                    fa: 'خط رنگرزی جت و پد-استف برای تثبیت رنگ روی ترکیب الیاف شیشه و پنبه.',
                    en: 'Jet and pad-steam dye range that fixes colour on glass and cotton fibre blends.',
                    ps: 'د جټ او پد-سټیم رنګرزي لاین چې د فایبر ګلاس او پنبه ګډو فایبرو رنګ ثابتوي.'
                },
                pdfUrl: 'pdfs/production-lines/fiberglas-production/cotton-dyeing.pdf'
            }
        ]
    },
    'recycling-lines': {
        title: {
            fa: 'خطوط بازیافت صنعتی',
            en: 'Industrial Recycling Lines',
            ps: 'صنعتي د بیاکارونې لینونه'
        },
        lines: [
            {
                id: 'plastic-recycling-line',
                title: {
                    fa: 'خط بازیافت پلاستیک',
                    en: 'Plastic Recycling Line',
                    ps: 'د پلاستیک د بیاکارونې لین'
                },
                description: {
                    fa: 'خردکن، شستشو، خشک‌کن و گرانول‌سازی برای ضایعات پلاستیکی.',
                    en: 'Shredding, washing, drying and pelletising for plastic scrap.',
                    ps: 'د پلاستیک ضایعاتو لپاره پرېکول، مینځل، وچول او ګرینول کول.'
                },
                pdfUrl: 'pdfs/production-lines/recycling/plastic-recycling-line.pdf'
            },
            {
                id: 'paper-recycling-line',
                title: {
                    fa: 'خط بازیافت کاغذ و کارتن',
                    en: 'Paper Recycling Line',
                    ps: 'د کاغذ بیاکارونې لین'
                },
                description: {
                    fa: 'پالپر، حوضچه شستشو، دی‌اینکینگ و تولید رول یا شیت کاغذ بازیافتی.',
                    en: 'Pulper, washing tanks, de-inking and recycled paper sheet or roll production.',
                    ps: 'پالپر، د مینځلو حوضونه، د رنګ ایستل او د بیا کارېدونکي کاغذ تولید.'
                },
                pdfUrl: 'pdfs/production-lines/recycling/paper-recycling-line.pdf'
            },
            {
                id: 'tire-recycling-line',
                title: {
                    fa: 'خط بازیافت تایر',
                    en: 'Tire Recycling Line',
                    ps: 'د ټایر بیاکارونې لین'
                },
                description: {
                    fa: 'برید کردن، سیم‌جداکن، آسیاب و طبقه‌بندی گرانول لاستیک.',
                    en: 'Bead cutting, steel separation, granulation and grading of rubber crumb.',
                    ps: 'د ټایر لپاره کړۍ پرې کول، د فولادو جلا کول، ګرینول او درجه بندي.'
                },
                pdfUrl: 'pdfs/production-lines/recycling/tire-recycling-line.pdf'
            },
            {
                id: 'metal-recycling-line',
                title: {
                    fa: 'خط بازیافت فلزات',
                    en: 'Metal Recycling Line',
                    ps: 'د فلزاتو بیاکارونې لین'
                },
                description: {
                    fa: 'پرس ضایعات، خردایش، تفکیک مغناطیسی و بسته‌بندی برای فلزات آهنی و غیرآهنی.',
                    en: 'Scrap baling, shredding, magnetic separation and packing for ferrous and non-ferrous metals.',
                    ps: 'د اوسپنې او غیر اوسپنې فلزاتو لپاره پریس، پرې کول، مقناطیسي بېلول او بسته بندي.'
                },
                pdfUrl: 'pdfs/production-lines/recycling/metal-recycling-line.pdf'
            }
        ]
    },
    'disposable-products-lines': {
        title: {
            fa: 'خطوط تولید محصولات یکبارمصرف',
            en: 'Disposable Products Lines',
            ps: 'د یو ځل کارېدونکو محصولاتو د تولید لینونه'
        },
        lines: [
            {
                id: 'disposable-cups-line',
                title: {
                    fa: 'خط تولید لیوان یکبارمصرف',
                    en: 'Disposable Cups Line',
                    ps: 'د یو ځل کارېدونکو جامونو تولید لین'
                },
                description: {
                    fa: 'فرم‌دهی، ترموفرمینگ و بسته‌بندی لیوان پلاستیکی و کاغذی برای سرویس نوشیدنی.',
                    en: 'Forming, thermoforming and packing plastic and paper cups for beverage service.',
                    ps: 'د پلاستیکي او کاغذي جامونو لپاره تشکیل، ترموفورمینګ او بسته بندي.'
                },
                pdfUrl: 'pdfs/production-lines/disposable-products/disposable-cups-line.pdf'
            },
            {
                id: 'disposable-plates-line',
                title: {
                    fa: 'خط تولید بشقاب یکبارمصرف',
                    en: 'Disposable Plates Line',
                    ps: 'د یو ځل کارېدونکو پشقابونو تولید لین'
                },
                description: {
                    fa: 'پرس حرارتی، برش و بسته‌بندی بشقاب‌های پلاستیکی یا فومی برای پذیرایی.',
                    en: 'Heat pressing, trimming and wrapping disposable plastic or foam plates for catering.',
                    ps: 'د پلاستیکي یا فومي پشقابونو لپاره د حرارتي پریس، پرې کولو او بسته بندۍ سیستم.'
                },
                pdfUrl: 'pdfs/production-lines/disposable-products/disposable-plates-line.pdf'
            },
            {
                id: 'disposable-cutlery-line',
                title: {
                    fa: 'خط تولید قاشق و چنگال یکبارمصرف',
                    en: 'Disposable Cutlery Line',
                    ps: 'د یو ځل کارېدونکو قاشق او چنګک تولید لین'
                },
                description: {
                    fa: 'تزریق پلاستیک، پرداخت و بسته‌بندی قاشق، چنگال و کارد یکبارمصرف.',
                    en: 'Plastic injection, finishing and packing disposable spoons, forks and knives.',
                    ps: 'د پلاستیک انجیکشن، فینش او بسته بندي د یو ځل کارېدونکو چمچو، څانګو او چړو لپاره.'
                },
                pdfUrl: 'pdfs/production-lines/disposable-products/disposable-cutlery-line.pdf'
            },
            {
                id: 'plastic-bottles-line',
                title: {
                    fa: 'خط تولید بطری پلاستیکی',
                    en: 'Plastic Bottles Line',
                    ps: 'د پلاستیکي بوتلونو تولید لین'
                },
                description: {
                    fa: 'قالب‌گیری دمشی، تست نشت و بسته‌بندی بطری‌های PET و HDPE.',
                    en: 'Blow moulding, leak testing and packaging PET and HDPE bottles.',
                    ps: 'د PET او HDPE بوتلونو لپاره بلو مولډنګ، د لیک ازموینه او بسته بندي.'
                },
                pdfUrl: 'pdfs/production-lines/disposable-products/plastic-bottles-line.pdf'
            },
            {
                id: 'plastic-bags-line',
                title: {
                    fa: 'خط تولید کیسه پلاستیکی',
                    en: 'Plastic Bags Line',
                    ps: 'د پلاستیکي کڅوړو تولید لین'
                },
                description: {
                    fa: 'اکسترودر فیلم، چاپ فلکسو و برش-دوخت اتوماتیک برای کیسه‌های فروشگاهی.',
                    en: 'Film extrusion, flexo printing and auto cut-seal for retail shopping bags.',
                    ps: 'د فلم اکسترودر، فلکسو چاپ او اتومات پرې کول-ګنډل د پلورنځي کڅوړو لپاره.'
                },
                pdfUrl: 'pdfs/production-lines/disposable-products/plastic-bags-line.pdf'
            }
        ]
    },
    'light-industry-lines': {
        title: {
            fa: 'خطوط صنایع سبک و چوبی',
            en: 'Light Industry Lines',
            ps: 'د سپکو صنعتونو د تولید لینونه'
        },
        lines: [
            {
                id: 'furniture-manufacturing-line',
                title: {
                    fa: 'خط تولید مبلمان منزل',
                    en: 'Furniture Manufacturing Line',
                    ps: 'د کورني فرنیچر تولید لین'
                },
                description: {
                    fa: 'اره‌کاری CNC، لبه‌چسبان، سنباده و مونتاژ مبلمان چوبی و MDF.',
                    en: 'CNC cutting, edge-banding, sanding and assembly for wood and MDF furniture.',
                    ps: 'د لرګي او MDF فرنیچر لپاره CNC پرې کول، څنډه چسپول، سنډر او مونتاژ.'
                },
                pdfUrl: 'pdfs/production-lines/light-industry/furniture-manufacturing-line.pdf'
            },
            {
                id: 'school-furniture-line',
                title: {
                    fa: 'خط تولید مبلمان آموزشی',
                    en: 'School Furniture Line',
                    ps: 'د ښوونځي فرنیچر تولید لین'
                },
                description: {
                    fa: 'برش لوله، خم CNC، رنگ پودری و مونتاژ نیمکت و صندلی مدارس.',
                    en: 'Tube cutting, CNC bending, powder coating and assembly for desks and chairs.',
                    ps: 'د پایپ پرې کول، CNC خم، پوډر رنګ او د میزونو او چوکۍو مونتاژ.'
                },
                pdfUrl: 'pdfs/production-lines/light-industry/school-furniture-line.pdf'
            },
            {
                id: 'office-furniture-line',
                title: {
                    fa: 'خط تولید مبلمان اداری',
                    en: 'Office Furniture Line',
                    ps: 'د اداري فرنیچر تولید لین'
                },
                description: {
                    fa: 'لیزر برش فلز، برش MDF، روکش، پرس گرم و مونتاژ مبلمان اداری.',
                    en: 'Metal laser cutting, MDF machining, laminating, hot pressing and assembly for office sets.',
                    ps: 'د فلزي لیزر پرې کول، MDF ماشینونه، لامینټ، ګرم پرس او د اداري سیټونو مونتاژ.'
                },
                pdfUrl: 'pdfs/production-lines/light-industry/office-furniture-line.pdf'
            },
            {
                id: 'sports-equipment-line',
                title: {
                    fa: 'خط تولید تجهیزات ورزشی سبک',
                    en: 'Sports Equipment Line',
                    ps: 'د ورزشي تجهیزاتو تولید لین'
                },
                description: {
                    fa: 'دوخت توپ، قالب‌گیری فوم، چاپ و بسته‌بندی تجهیزات ورزشی نرم.',
                    en: 'Ball stitching, foam moulding, printing and packaging for soft sports gear.',
                    ps: 'د توپ ګنډل، د فوم قالب، چاپ او بسته بندي د نرم ورزشي تجهیزاتو لپاره.'
                },
                pdfUrl: 'pdfs/production-lines/light-industry/sports-equipment-line.pdf'
            }
        ]
    }
};

function integrateProductionLinesWithSearch() {
    if (typeof categoryKeywords !== 'undefined') {
        const keywords = new Set(categoryKeywords['production-lines'] || []);

        productionLineGroups.forEach(group => {
            Object.values(group.title).forEach(value => keywords.add(value));
            Object.values(group.description).forEach(value => keywords.add(value));
        });

        Object.values(productionLines).forEach(group => {
            (group.lines || []).forEach(line => {
                Object.values(line.title).forEach(value => keywords.add(value));
                Object.values(line.description).forEach(value => keywords.add(value));
            });
        });

        categoryKeywords['production-lines'] = Array.from(keywords);
    }

    if (typeof equipmentData !== 'undefined') {
        const aggregated = [];

        productionLineGroups.forEach(group => {
            const lines = (productionLines[group.id] && productionLines[group.id].lines) || [];
            lines.forEach(line => {
                aggregated.push({
                    name: line.title,
                    description: line.description,
                    pdfUrl: line.pdfUrl,
                    icon: getProductionLineIcon(line.id)
                });
            });
        });

        if (aggregated.length > 0) {
            equipmentData['production-lines'] = aggregated;
        }
    }
}

integrateProductionLinesWithSearch();

function buildProductionLineCard(group, lang) {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.dataset.groupId = group.id;

    const title = group.title[lang] || group.title.fa;
    const description = group.description[lang] || group.description.fa;

    const route = productionLineCategoryRoutes[group.id];
    const detailText = lang === 'fa' ? 'مشاهده جزئیات' : (lang === 'ps' ? 'جزییات وګورئ' : 'View Details');
    const detailLabel = lang === 'fa'
        ? `مشاهده صفحه جزئیات ${title}`
        : (lang === 'ps' ? `${title} تفصيلي پاڼه وګورئ` : `View detailed page for ${title}`);

    const iconSource = getProductionLineIcon(group.id) || group.icon;
    const iconMarkup = (typeof window !== 'undefined' && typeof window.renderIconMarkup === 'function')
        ? window.renderIconMarkup(iconSource, 'icon', title)
        : `<span class="icon">${iconSource || ''}</span>`;

    let cardHtml = `
        ${iconMarkup}
        <h4>${title}</h4>
        <p>${description}</p>
    `;

    if (route) {
        cardHtml += `
            <div class="category-card-actions">
                <a class="category-card-link" href="${route}" aria-label="${detailLabel}">
                    <span>${detailText}</span>
                    <i class="fas fa-arrow-left"></i>
                </a>
            </div>
        `;
    }

    card.innerHTML = cardHtml;

    const openModal = () => {
        if (productionLines[group.id] && productionLines[group.id].lines) {
            showProductionLineModal(group.id);
        } else if (route) {
            window.location.href = route;
        }
    };
    card.addEventListener('click', openModal);
    card.addEventListener('keypress', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openModal();
        }
    });

    if (route) {
        const link = card.querySelector('.category-card-link');
        if (link) {
            const stopPropagation = event => event.stopPropagation();
            link.addEventListener('click', stopPropagation);
            link.addEventListener('keypress', stopPropagation);
        }
    }

    return card;
}

function renderProductionLineGroups(lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa') {
    const grid = document.getElementById('productionLinesGrid');
    if (!grid) {
        return;
    }

    grid.innerHTML = '';
    productionLineGroups.forEach(group => {
        grid.appendChild(buildProductionLineCard(group, lang));
    });
}

function showProductionLineModal(groupId) {
    const modal = document.getElementById('equipmentModal');
    const modalContent = document.getElementById('equipmentModalContent');
    const data = productionLines[groupId];

    if (!modal || !modalContent || !data) {
        return;
    }

    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa';
    const title = data.title[lang] || data.title.fa;

    const backText = lang === 'fa' ? 'بازگشت' : (lang === 'ps' ? 'بیرته' : 'Back');
    const viewText = lang === 'fa' ? 'مشاهده PDF' : (lang === 'ps' ? 'PDF وګورئ' : 'View PDF');
    const downloadText = lang === 'fa' ? 'دانلود' : (lang === 'ps' ? 'ډاونلوډ' : 'Download');

    let cardsHtml = '<div class="equipment-grid">';
    data.lines.forEach(line => {
        const lineTitle = line.title[lang] || line.title.fa;
        const lineDesc = line.description[lang] || line.description.fa;
        const lineIcon = getProductionLineIcon(line.id);
        const lineIconMarkup = (typeof window !== 'undefined' && typeof window.renderIconMarkup === 'function')
            ? window.renderIconMarkup(lineIcon, 'equipment-icon', lineTitle, 'div')
            : `<div class="equipment-icon">${lineIcon || '📄'}</div>`;
        cardsHtml += `
            <div class="equipment-card">
                ${lineIconMarkup}
                <h4>${lineTitle}</h4>
                <p>${lineDesc}</p>
                <div class="equipment-actions">
                    <a href="${line.pdfUrl}" target="_blank" class="btn-primary">
                        <i class="fas fa-file-pdf"></i> ${viewText}
                    </a>
                    <a href="${line.pdfUrl}" download class="btn-secondary">
                        <i class="fas fa-download"></i> ${downloadText}
                    </a>
                </div>
            </div>
        `;
    });
    cardsHtml += '</div>';

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

function updateProductionLineCards() {
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa';
    renderProductionLineGroups(lang);
}

function publishProductionLinesStructuredData() {
    publishEquipmentStructuredData('production-lines', {
        collectionName: 'Sanaatchi Production Lines Dossier Library',
        collectionDescription: 'Technical dossiers and production line equipment for food, consumer goods, construction materials and recycling projects sourced by Sanaatchi.',
        pageUrl: '/production-lines.html',
        breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Production Lines', url: '/production-lines.html' }
        ]
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateProductionLineCards();
    publishProductionLinesStructuredData();
});

window.showProductionLineModal = showProductionLineModal;
window.updateProductionLineCards = updateProductionLineCards;
