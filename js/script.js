let currentLanguage = 'fa';

// Preserve the original meta description so language changes do not mutate SEO copy
const metaDescriptionTag = document.querySelector('meta[name="description"]');
if (metaDescriptionTag && !metaDescriptionTag.dataset.originalContent) {
    metaDescriptionTag.dataset.originalContent = metaDescriptionTag.getAttribute('content') || '';
}

// Phase data
const phases = {
    1: {
        icon: '⚙️',
        title: {
            fa: 'فاز 1: مهندسی و طراحی',
            en: 'Phase 1: Engineering & Design',
            ps: 'فاز 1: انجنیري او ډیزاین'
        },
        subtitle: {
            fa: 'از ایده تا نقشه',
            en: 'From Idea to Blueprint',
            ps: 'له نظره څخه نقشه پورې'
        },
        details: {
            fa: [
                'مشاوره تخصصی و امکان‌سنجی اولیه',
                'تحلیل فنی و اقتصادی پروژه',
                'طراحی مفهومی خط تولید',
                'تهیه نقشه‌های تفصیلی',
                'محاسبات مهندسی دقیق',
                'ارائه گزارش جامع طراحی'
            ],
            en: [
                'Professional consultation and initial feasibility study',
                'Technical and economic project analysis',
                'Conceptual production line design',
                'Detailed blueprint preparation',
                'Precise engineering calculations',
                'Comprehensive design report delivery'
            ],
            ps: [
                'تخصصي مشوره او لومړنی امکان سنجي',
                'د پروژې تخنیکی او اقتصادي تحلیل',
                'د تولید لینې مفهومي ډیزاین',
                'تفصیلي نقشه چمتو کول',
                'دقیق انجنیري محاسبات',
                'د ډیزاین جامع راپور ورکول'
            ]
        }
    },
    2: {
        icon: '🚛',
        title: {
            fa: 'فاز 2: تأمین و لجستیک جهانی',
            en: 'Phase 2: Global Sourcing & Logistics',
            ps: 'فاز 2: نړیوال تامین او لجستیک'
        },
        subtitle: {
            fa: 'از کارخانه مبدأ تا سایت شما',
            en: 'From Source Factory to Your Site',
            ps: 'د سرچینې کارخونه څخه تر ستاسو پاڼې پورې'
        },
        details: {
            fa: [
                'شناسایی بهترین تأمین‌کنندگان جهانی',
                'اعتبارسنجی و بازدید از کارخانه‌ها',
                'مذاکره قیمت و شرایط خرید',
                'مدیریت کامل فرآیند سفارش',
                'نظارت بر تولید و کنترل کیفیت',
                'هماهنگی حمل و نقل بین‌المللی'
            ],
            en: [
                'Identifying the best global suppliers',
                'Verification and factory visits',
                'Price negotiation and purchase terms',
                'Complete order process management',
                'Production supervision and quality control',
                'International transportation coordination'
            ],
            ps: [
                'غوره نړیوال تامین کوونکی پیژندل',
                'تایید او د کارخونو لیدنه',
                'بیې او د پیرود شرایطو خبرې',
                'د امر بشپړ پروسه مدیریت',
                'د تولید نظارت او کیفیت کنټرول',
                'نړیوال حمل او نقل هماهنگي'
            ]
        }
    },
    3: {
        icon: '🏭',
        title: {
            fa: 'فاز 3: اجرا و ساخت',
            en: 'Phase 3: Implementation & Construction',
            ps: 'فاز 3: اجرا او جوړونه'
        },
        subtitle: {
            fa: 'از نقشه تا واقعیت',
            en: 'From Blueprint to Reality',
            ps: 'له نقشه څخه واقعیت ته'
        },
        details: {
            fa: [
                'مدیریت پروژه با استانداردهای بین‌المللی',
                'نظارت بر ساخت‌وساز و زیرساخت',
                'هماهنگی تحویل تجهیزات',
                'نصب و راه‌اندازی ماشین‌آلات',
                'تست‌های اولیه سیستم',
                'گزارش‌دهی مرحله‌ای پیشرفت'
            ],
            en: [
                'Project management with international standards',
                'Construction and infrastructure supervision',
                'Equipment delivery coordination',
                'Machinery installation and setup',
                'Initial system testing',
                'Phased progress reporting'
            ],
            ps: [
                'د پروژې مدیریت د نړیوالو معیارونو سره',
                'د جوړښت او زېربناهو نظارت',
                'د تجهیزات تحویل هماهنگي',
                'د ماشینونو نصب او پیل',
                'د سیسټم لومړني ازمویښت',
                'په مرحلو کې د پرمختګ راپور ورکول'
            ]
        }
    },
    4: {
        icon: '🔧',
        title: {
            fa: 'فاز 4: راه‌اندازی و پشتیبانی',
            en: 'Phase 4: Commissioning & Support',
            ps: 'فاز 4: پیل او ملاتړ'
        },
        subtitle: {
            fa: 'از اولین محصول تا تولید پایدار',
            en: 'From First Product to Sustainable Production',
            ps: 'له لومړي محصول څخه په دوامداره تولید پورې'
        },
        details: {
            fa: [
                'پیش‌راه‌اندازی و تنظیمات نهایی',
                'تست‌های جامع عملکرد',
                'آموزش کامل تیم فنی',
                'آموزش اپراتورهای تولید',
                'تحویل مستندات فنی',
                'پشتیبانی و خدمات پس از فروش'
            ],
            en: [
                'Pre-commissioning and final adjustments',
                'Comprehensive performance testing',
                'Complete technical team training',
                'Production operator training',
                'Technical documentation delivery',
                'Support and after-sales services'
            ],
            ps: [
                'مخکې پیل او پایلي تنظیمات',
                'د عملکرد جامع ازمویښت',
                'د تخنیکي ډلې بشپړ روزنه',
                'د تولید اپراتورانو روزنه',
                'د تخنیکي اسناد تحویل',
                'ملاتړ او د پلور وروسته خدمتونه'
            ]
        }
    }
};

// Category data
const categories = {
    'production-lines': {
        icon: '🏭',
        title: {
            fa: 'خط تولید',
            en: 'Production Lines',
            ps: 'تولید لینې'
        },
        description: {
            fa: 'ما طیف گسترده‌ای از خطوط تولید را برای صنایع مختلف ارائه می‌دهیم. از خطوط تولید مواد غذایی تا خطوط تولید صنعتی، با تضمین کیفیت و کارایی بالا.',
            en: 'We offer a wide range of production lines for various industries. From food production lines to industrial production lines, with guaranteed quality and high efficiency.',
            ps: 'مو د مختلفو صنعتونو لپاره د تولید لینو پراخ طیف وړاندیز کوو. له خوراکي تولید لینو څخه تر صنعتي تولید لینو پورې، د لوړ کیفیت او کارایی تضمین سره.'
        }
    },
    'printing-machines': {
        icon: '🖨️',
        title: {
            fa: 'دستگاه های چاپ',
            en: 'Printing Machines',
            ps: 'چاپ ماشینونه'
        },
        description: {
            fa: 'تجهیزات چاپ پیشرفته برای تمام نیازهای چاپی شما. از چاپ دیجیتال تا چاپ افست، با آخرین فناوری‌های روز دنیا.',
            en: 'Advanced printing equipment for all your printing needs. From digital printing to offset printing, with the latest technologies in the world.',
            ps: 'د ستاسو د چاپ اړتیاو لپاره پرمختللي چاپ تجهیزات. له ډیجیټل چاپ څخه تر افست چاپ پورې، د نړۍ د وروستیو ټکنالوژیو سره.'
        }
    },
    'sports-equipment': {
        icon: '⚽',
        title: {
            fa: 'تجهیزات ورزشی',
            en: 'Sports Equipment',
            ps: 'ورزشي تجهیزات'
        },
        description: {
            fa: 'تجهیزات و ماشین آلات تولیدی برای صنعت ورزش. از تولید توپ تا تجهیزات ورزشی حرفه‌ای، با کیفیت استاندارد بین‌المللی.',
            en: 'Production equipment and machinery for the sports industry. From ball production to professional sports equipment, with international standard quality.',
            ps: 'د ورزش صنعت لپاره تولیدي تجهیزات او ماشینونه. له توپ تولید څخه تر حرفه‌اي ورزشي تجهیزاتو پورې، د نړیوال معیار کیفیت سره.'
        }
    },
    'metallurgy': {
        icon: '🔩',
        title: {
            fa: 'متالورژی و فلزکاری',
            en: 'Metallurgy & Metalworking',
            ps: 'د فلزاتو علم او فلزکاري'
        },
        description: {
            fa: 'ماشین آلات و تجهیزات پیشرفته برای صنایع متالورژی و فلزکاری. از ذوب تا شکل‌دهی فلزات، با دقت و کیفیت بالا.',
            en: 'Advanced machinery and equipment for metallurgy and metalworking industries. From melting to metal forming, with high precision and quality.',
            ps: 'د متالورژي او فلزکاري صنعتونو لپاره پرمختللي ماشینونه او تجهیزات. له ذوب څخه تر فلزاتو بڼه ورکولو پورې، د لوړ دقت او کیفیت سره.'
        }
    },
    'construction-materials': {
        icon: '🧱',
        title: {
            fa: 'ماشین آلات مصالح ساخت',
            en: 'Construction Materials Machinery',
            ps: 'د ساختماني موادو ماشینونه'
        },
        description: {
            fa: 'تجهیزات تولید مصالح ساختمانی برای پروژه‌های عمرانی. از تولید بلوک تا تجهیزات بتن‌ریزی، با بهینه‌سازی مصرف انرژی.',
            en: 'Construction materials production equipment for construction projects. From block production to concrete equipment, with energy consumption optimization.',
            ps: 'د ساختماني پروژو لپاره د ساختماني موادو تولید تجهیزات. له بلوک تولید څخه تر بتن تجهیزاتو پورې، د انرژي مصرف بهینه کولو سره.'
        }
    },
    'plastic-processing': {
        icon: '♻️',
        title: {
            fa: 'دستگاه های فرآوری پلاستیک',
            en: 'Plastic Processing Machines',
            ps: 'د پلاستیک پروسس ماشینونه'
        },
        description: {
            fa: 'ماشین آلات فرآوری پلاستیک برای بازیافت و تولید محصولات پلاستیکی. از اکسترودر تا ماشین‌های تزریق پلاستیک.',
            en: 'Plastic processing machinery for recycling and producing plastic products. From extruders to plastic injection machines.',
            ps: 'د پلاستیک بیاګرځولو او پلاستیکي محصولاتو تولید لپاره پلاستیک پروسس ماشینونه. له اکسترودر څخه تر پلاستیک تزریق ماشینونو پورې.'
        }
    },
    'paint-coating': {
        icon: '🎨',
        title: {
            fa: 'ماشین آلات رنگ و کوتینگ',
            en: 'Paint & Coating Machinery',
            ps: 'د رنګ او پوښښت ماشینونه'
        },
        description: {
            fa: 'تجهیزات رنگ‌آمیزی و پوشش‌دهی برای صنایع مختلف. از خطوط رنگ‌آمیزی صنعتی تا تجهیزات پودرپاشی.',
            en: 'Painting and coating equipment for various industries. From industrial painting lines to powder coating equipment.',
            ps: 'د مختلفو صنعتونو لپاره د رنګولو او پوښښت تجهیزات. له صنعتي رنګ لینو څخه تر پوډر پوښښت تجهیزاتو پورې.'
        }
    },
    'foam-sponge': {
        icon: '🧽',
        title: {
            fa: 'ماشین آلات لوم و اسفنج',
            en: 'Foam & Sponge Machinery',
            ps: 'د فوم او اسفنج ماشینونه'
        },
        description: {
            fa: 'تجهیزات تولید لوم و اسفنج برای صنایع مبلمان و بسته‌بندی. از تولید فوم تا برش و شکل‌دهی.',
            en: 'Foam and sponge production equipment for furniture and packaging industries. From foam production to cutting and shaping.',
            ps: 'د میبل او بسته بندي صنعتونو لپاره د فوم او اسفنج تولید تجهیزات. له فوم تولید څخه تر سکه او بڼه ورکولو پورې.'
        }
    },
    'tobacco': {
        icon: '🚬',
        title: {
            fa: 'ماشین آلات تناکو و سیگار',
            en: 'Tobacco & Cigarette Machinery',
            ps: 'د توتون او سیګر ماشینونه'
        },
        description: {
            fa: 'ماشین آلات تولید محصولات تنباکو با استانداردهای بین‌المللی. از خط تولید سیگار تا بسته‌بندی نهایی.',
            en: 'Tobacco product production machinery with international standards. From cigarette production lines to final packaging.',
            ps: 'د توتون محصولاتو تولید ماشینونه د نړیوالو معیارونو سره. له سیګر تولید لین څخه تر پایلي بسته بندي پورې.'
        }
    },
    'cooling-heating': {
        icon: '❄️',
        title: {
            fa: 'دستگاه های سرمایش و گرمایش',
            en: 'Cooling & Heating Equipment',
            ps: 'د سړښت او تودوخه تجهیزات'
        },
        description: {
            fa: 'تجهیزات سرمایشی و گرمایشی صنعتی و تجاری. از چیلر تا بویلر، با بهینه‌سازی مصرف انرژی.',
            en: 'Industrial and commercial cooling and heating equipment. From chillers to boilers, with energy consumption optimization.',
            ps: 'د صنعتي او سوداګریز سړښت او تودوخې تجهیزات. له چیلر څخه تر بویلر پورې، د انرژي مصرف بهینه کولو سره.'
        }
    },
    'pumps-compressors': {
        icon: '🔧',
        title: {
            fa: 'پمپ ها و کمپرسور ها صنعتی',
            en: 'Industrial Pumps & Compressors',
            ps: 'د صنعت پمپونه او کمپرسورونه'
        },
        description: {
            fa: 'پمپ‌ها و کمپرسورهای صنعتی برای کاربردهای مختلف. از پمپ‌های آب تا کمپرسورهای هوا، با دوام و کارایی بالا.',
            en: 'Industrial pumps and compressors for various applications. From water pumps to air compressors, with durability and high efficiency.',
            ps: 'د مختلفو کارونو لپاره صنعت پمپونه او کمپرسورونه. له اوبو پمپونو څخه تر هوا کمپرسورونو پورې، د دوام او لوړ کارایی سره.'
        }
    },
    'industrial-laser': {
        icon: '⚡',
        title: {
            fa: 'لیزر صنعتی',
            en: 'Industrial Laser',
            ps: 'صنعت لیزر'
        },
        description: {
            fa: 'تجهیزات لیزر صنعتی برای برش، حکاکی و جوشکاری. از لیزرهای فیبر تا CO2، با دقت و سرعت بالا.',
            en: 'Industrial laser equipment for cutting, engraving and welding. From fiber lasers to CO2, with high precision and speed.',
            ps: 'د سکول، کنګر او جوش کولو لپاره صنعت لیزر تجهیزات. له فایبر لیزرونو څخه تر CO2 پورې، د لوړ دقت او سرعت سره.'
        }
    },
    'tanks': {
        icon: '🛢️',
        title: {
            fa: 'مخازن',
            en: 'Tanks',
            ps: 'تنکونه'
        },
        description: {
            fa: 'مخازن صنعتی برای ذخیره‌سازی مواد مختلف. از مخازن آب تا مخازن شیمیایی، با استانداردهای ایمنی بالا.',
            en: 'Industrial tanks for storing various materials. From water tanks to chemical tanks, with high safety standards.',
            ps: 'د مختلفو موادو خوندي کولو لپاره صنعت تنکونه. له اوبو تنکونو څخه تر کیمیاوي تنکونو پورې، د لوړ امنیت معیارونو سره.'
        }
    },
    'packaging': {
        icon: '📦',
        title: {
            fa: 'بسته بندی',
            en: 'Packaging',
            ps: 'بسته بندي'
        },
        description: {
            fa: 'ماشین آلات بسته‌بندی برای صنایع مختلف. از بسته‌بندی اولیه تا نهایی، با افزایش سرعت و کاهش ضایعات.',
            en: 'Packaging machinery for various industries. From primary to final packaging, with increased speed and reduced waste.',
            ps: 'د مختلفو صنعتونو لپاره بسته بندي ماشینونه. له لومړنۍ بسته بندي څخه تر پایلي بسته بندي پورې، د سرعت زیاتوالي او ضایع کمولو سره.'
        }
    },
    'chemical-pharma': {
        icon: '🧪',
        title: {
            fa: 'ماشین آلات شیمیایی و دارویی',
            en: 'Chemical & Pharmaceutical Machinery',
            ps: 'د کیمیاوي او درملو ماشینونه'
        },
        description: {
            fa: 'تجهیزات تولیدی برای صنایع شیمیایی و دارویی. از مخازن واکنش تا خطوط بسته‌بندی دارو، با استانداردهای GMP.',
            en: 'Production equipment for chemical and pharmaceutical industries. From reaction tanks to pharmaceutical packaging lines, with GMP standards.',
            ps: 'د کیمیاوي او درملو صنعتونو لپاره تولیدي تجهیزات. له تعامل تنکونو څخه تر درملو بسته بندي لینو پورې، د GMP معیارونو سره.'
        }
    },
    'machinery-parts': {
        icon: '🔧',
        title: {
            fa: 'پرزه‌جات ماشین‌آلات',
            en: 'Machinery Spare Parts',
            ps: 'د ماشینونو پرزې'
        },
        description: {
            fa: 'پرزه‌جات صنعتی برای نگهداری خطوط تولید؛ شامل یاتاقان، فیلتر، تسمه، قالب و گیربکس.',
            en: 'Industrial spare parts that keep production lines running: bearings, filters, belts, moulds and gearboxes.',
            ps: 'صنعتي پرزې چې د تولید لینونه فعال ساتي؛ یاتاقانونه، فلټرونه، تسمې، قالبونه او ګیربکسونه.'
        }
    },
    'paper-pulp': {
        icon: '📄',
        title: {
            fa: 'ماشین آلات کاغذ و سلولوز',
            en: 'Paper & Pulp Machinery',
            ps: 'د کاغذ او پالپ ماشینونه'
        },
        description: {
            fa: 'تجهیزات تولید کاغذ و سلولوز. از خط تولید خمیر کاغذ تا ماشین‌های تولید کاغذ، با بهینه‌سازی مصرف آب.',
            en: 'Paper and pulp production equipment. From pulp production lines to paper making machines, with water consumption optimization.',
            ps: 'د کاغذ او پالپ تولید تجهیزات. له پالپ تولید لین څخه تر کاغذ جوړونکي ماشینونو پورې، د اوبو مصرف بهینه کولو سره.'
        }
    },
    'electronic-machinery': {
        icon: '💻',
        title: {
            fa: 'ماشین آلات الکترونیکی',
            en: 'Electronic Machinery',
            ps: 'د الکترونیک ماشینونه'
        },
        description: {
            fa: 'ماشین آلات تولید محصولات الکترونیکی. از خطوط مونتاژ PCB تا تجهیزات تست الکترونیکی.',
            en: 'Machinery for producing electronic products. From PCB assembly lines to electronic testing equipment.',
            ps: 'د الکترونیکي محصولاتو تولید لپاره ماشینونه. له PCB ټولګي لینو څخه تر الکترونیکي ازمویښت تجهیزاتو پورې.'
        }
    },
    'telecom-parts': {
        icon: '📡',
        title: {
            fa: 'قطعات و لوازم اینترنتی و مخابراتی',
            en: 'Internet & Telecommunication Parts',
            ps: 'د انترنت او مخابراتي برخې'
        },
        description: {
            fa: 'تجهیزات و قطعات برای صنایع اینترنت و مخابرات. از آنتن‌ها تا تجهیزات شبکه‌ای، با کیفیت بالا.',
            en: 'Equipment and parts for internet and telecommunications industries. From antennas to networking equipment, with high quality.',
            ps: 'د انترنت او مخابرات صنعتونو لپاره تجهیزات او برخې. له انتنونو څخه تر شبکي تجهیزاتو پورې، د لوړ کیفیت سره.'
        }
    },
    'second-hand': {
        icon: '🔄',
        title: {
            fa: 'ماشین آلات دست دوم',
            en: 'Second Hand Machinery',
            ps: 'د دوهم لاس ماشینونه'
        },
        description: {
            fa: 'ماشین آلات صنعتی دست دوم با کیفیت تضمین شده. از بازسازی تا گارانتی، با قیمت مناسب.',
            en: 'Second-hand industrial machinery with guaranteed quality. From refurbishment to warranty, at affordable prices.',
            ps: 'د تضمین شوي کیفیت سره د دوهم لاس صنعت ماشینونه. له بیا جوړولو څخه تر تضمین پورې، د مناسبه قیمت سره.'
        }
    }
};

const secondHandInventoryData = [
    {
        id: 'heidelberg-sm74',
        category: 'printing-machines',
        icon: '🖶',
        name: {
            fa: 'چاپ افست Heidelberg SM74 پنج رنگ',
            en: 'Heidelberg SM74 Five-Colour Offset Press',
            ps: 'هايدلبرګ SM74 پنځه رنګه افست ماشین'
        },
        description: {
            fa: 'دستگاه چاپ افست ۲۰۱۸ با سرویس کامل و اتوماسیون صفحه‌گذاری.',
            en: '2018 offset press with full service history and automated plate change.',
            ps: 'د ۲۰۱۸ افست چاپ ماشین د بشپړ خدمت تاریخ او اتومات پلیټ بدلون سره.'
        },
        meta: [
            {
                label: { fa: 'سال ساخت', en: 'Year', ps: 'د جوړېدو کال' },
                value: { fa: '۲۰۱۸ (اروپا)', en: '2018 (EU)', ps: '۲۰۱۸ (اروپا)' }
            },
            {
                label: { fa: 'ساعت کارکرد', en: 'Run Hours', ps: 'کاري ساعتونه' },
                value: { fa: '۴٬۵۰۰ ساعت', en: '4,500 h', ps: '۴٬۵۰۰ ساعته' }
            },
            {
                label: { fa: 'همراه با', en: 'Includes', ps: 'شامل' },
                value: { fa: 'CIP3، کولر پلیت، ست کامل غلتک', en: 'CIP3, plate chiller, full roller set', ps: 'CIP3، د پلیټ یخچال، د رولر بشپړ سیټ' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/printing-machines/heidelberg-speedmaster.pdf'
    },
    {
        id: 'flexo-roll-printing',
        category: 'printing-machines',
        icon: '🖨️',
        name: {
            fa: 'ماشین چاپ فلکسو رول‌به‌رول ۶ رنگ',
            en: 'Six-Colour Roll-to-Roll Flexo Press',
            ps: 'شپږ رنګه د رول څخه رول فلیکسو ماشین'
        },
        description: {
            fa: 'چاپ فلکسو با رجیستر اتوماتیک و خشک‌کن UV برای فیلم، فویل و لیبل.',
            en: 'Flexo press with automatic register control and UV dryers for film, foil, and labels.',
            ps: 'فلیکسو چاپ چې د اتومات ثبت کنټرول او UV وچوونکي لري د فلم، فویل او لیبل لپاره.'
        },
        meta: [
            {
                label: { fa: 'عرض چاپ', en: 'Web Width', ps: 'د چاپ سور' },
                value: { fa: '۱٬۳۰۰ میلی‌متر', en: '1,300 mm', ps: '۱٬۳۰۰ ملي متر' }
            },
            {
                label: { fa: 'سرعت تولید', en: 'Production Speed', ps: 'د تولید سرعت' },
                value: { fa: '۱۵۰ متر/دقیقه', en: '150 m/min', ps: '۱۵۰ متره/دقیقه' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/printing-machines/printing-machine.pdf'
    },
    {
        id: 'combibloc-aseptic-filler',
        category: 'food-beverage',
        icon: '📦',
        name: {
            fa: 'دستگاه پرکن آسپتیک Combibloc',
            en: 'Combibloc Aseptic Filler',
            ps: 'کمبی بلاک سترېل ډکونکی'
        },
        description: {
            fa: 'پرکن آسپتیک ۱۲٬۰۰۰ بطری/ساعت با سیستم CIP و استریلیزاسیون بخار.',
            en: '12,000 bph aseptic filler with CIP circuit and steam sterilisation.',
            ps: '۱۲٬۰۰۰ بوتله/ساعت سترېل ډکونکی د CIP او د بخار سترېلایزیشن سره.'
        },
        meta: [
            {
                label: { fa: 'ظرفیت', en: 'Capacity', ps: 'ظرفیت' },
                value: { fa: '۱۲٬۰۰۰ بطری/ساعت', en: '12,000 bph', ps: '۱۲٬۰۰۰ بوتله/ساعت' }
            },
            {
                label: { fa: 'مدارک', en: 'Documentation', ps: 'اسناد' },
                value: { fa: 'Manual، تست IQ/OQ', en: 'Manual, IQ/OQ validation', ps: 'لارښود او د IQ/OQ تایید' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/food-beverage/aseptic-filler.pdf'
    },
    {
        id: 'dairy-uht-line',
        category: 'food-beverage',
        icon: '🥛',
        name: {
            fa: 'خط کامل UHT لبنیات',
            en: 'Complete Dairy UHT Line',
            ps: 'د لبنیاتو بشپړ UHT لاین'
        },
        description: {
            fa: 'پاستور، استریلیزاسیون و بسته‌بندی تتراپک برای شیر و محصولات طعم‌دار.',
            en: 'Pasteurisation, sterilisation, and Tetra Pak packaging for milk and flavoured drinks.',
            ps: 'د شیدو او خوند لرونکو مشروباتو لپاره پاستور، سترېلایز او ټیټراپک بسته بندي.'
        },
        meta: [
            {
                label: { fa: 'ظرفیت', en: 'Capacity', ps: 'ظرفیت' },
                value: { fa: '۸٬۰۰۰ لیتر/ساعت', en: '8,000 L/h', ps: '۸٬۰۰۰ لیتر/ساعت' }
            },
            {
                label: { fa: 'سال ساخت', en: 'Year', ps: 'کال' },
                value: { fa: '۲۰۱۶', en: '2016', ps: '۲۰۱۶' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/food-beverage/dairy-uht-line.pdf'
    },
    {
        id: 'krones-carbonated-line',
        category: 'food-beverage',
        icon: '🍾',
        name: {
            fa: 'لاین نوشابه گازدار Krones',
            en: 'Krones Carbonated Beverage Line',
            ps: 'د کرونیس ګاز لرونکي مشروباتو لاین'
        },
        description: {
            fa: 'بلندر، پرکن ایزوبر و بسته‌بندی کارتن برای نوشابه و انرژی‌درینک.',
            en: 'Blending, isobaric filling, and carton packing for soft and energy drinks.',
            ps: 'د نرم او انرژي مشروباتو لپاره مخلوط، ایزو باریک ډکول او د کارتن بسته بندي.'
        },
        meta: [
            {
                label: { fa: 'ظرفیت', en: 'Throughput', ps: 'تولید' },
                value: { fa: '۱۸٬۰۰۰ بطری/ساعت', en: '18,000 bph', ps: '۱۸٬۰۰۰ بوتله/ساعت' }
            },
            {
                label: { fa: 'پک کامل', en: 'Package', ps: 'بسته' },
                value: { fa: 'پرکن، لیبل‌زن، شرینک‌پک', en: 'Filler, labeller, shrink packer', ps: 'ډکونکی، لیبلر، شرینک پیکر' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/food-beverage/carbonated-beverage-line.pdf'
    },
    {
        id: 'liquid-packaging-line',
        category: 'food-beverage',
        icon: '🥤',
        name: {
            fa: 'خط بسته‌بندی مایعات چندنازله',
            en: 'Multi-Nozzle Liquid Packaging Line',
            ps: 'د مایعاتو څو نوزله بسته بندۍ لاین'
        },
        description: {
            fa: 'پرکن پیستونی، درب‌بند و شرینک‌پک برای سس، روغن و نوشیدنی.',
            en: 'Piston filler, capper, and shrink packer for sauces, oils, and beverages.',
            ps: 'د پسټون ډکونکي، سرپوش او شرینک پیک سره د ساس، غوړ او مشروباتو لپاره.'
        },
        meta: [
            {
                label: { fa: 'ظرفیت', en: 'Capacity', ps: 'ظرفیت' },
                value: { fa: '۳٬۶۰۰ بطری/ساعت', en: '3,600 bph', ps: '۳٬۶۰۰ بوتله/ساعت' }
            },
            {
                label: { fa: 'قابلیت بسته‌بندی', en: 'Packaging Formats', ps: 'د بسته بندۍ ډولونه' },
                value: { fa: 'PET، شیشه، HDPE', en: 'PET, glass, HDPE', ps: 'PET، ښیښه، HDPE' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/food-beverage/packaging-machine.pdf'
    },
    {
        id: 'pp-pe-pelletising',
        category: 'plastic-processing',
        icon: '🆗',
        name: {
            fa: 'لاین گرانول‌سازی PP/PE',
            en: 'PP/PE Pelletising Line',
            ps: 'د PP/PE ګرانول لاین'
        },
        description: {
            fa: 'خردکن، شست‌وشو، اکسترودر و گرانولایزر دو مرحله‌ای بازبینی شده.',
            en: 'Refurbished shredder, washer, twin-stage extruder, and pelletiser.',
            ps: 'ترمیم شوی پرېکوونکی، مینځونکی، دوه پړاوه اکسترودر او ګرانول جوړوونکی.'
        },
        meta: [
            {
                label: { fa: 'خروجی', en: 'Output', ps: 'حاصل' },
                value: { fa: '۶۰۰ کیلوگرم/ساعت', en: '600 kg/h', ps: '۶۰۰ کیلو/ساعت' }
            },
            {
                label: { fa: 'تجهیزات تکمیلی', en: 'Auxiliaries', ps: 'مرستندویه' },
                value: { fa: 'سیلو ذخیره، خشک‌کن گازگرم', en: 'Storage silos, hot-air dryer', ps: 'د ذخیرې سایلونه، د ګرمو هوا وچوونکی' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/plastic-processing/plastic-pelletizing.pdf'
    },
    {
        id: 'pet-washing',
        category: 'plastic-processing',
        icon: '🧼',
        name: {
            fa: 'خط شست‌وشوی PET',
            en: 'PET Washing Line',
            ps: 'د PET د مینځلو لاین'
        },
        description: {
            fa: 'تفکیک، آسیاب، وان شست‌وشو و خشک‌کن سانتریفیوژی با بازیافت آب.',
            en: 'Sorting, grinding, hot washing, and centrifugal drying with water recovery.',
            ps: 'جلا کول، ګراینډر، ګرمه مینځل او سانتریفیوژ وچول د اوبو بیا کارولو سره.'
        },
        meta: [
            {
                label: { fa: 'مصرف آب', en: 'Water Usage', ps: 'د اوبو مصرف' },
                value: { fa: 'بازیافت تا ۷۰٪', en: 'Up to 70% recycle loop', ps: 'تر ۷۰٪ پورې بېرته کارېدونکې اوبه' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/plastic-processing/pet-washing.pdf'
    },
    {
        id: 'santoni-circular-knitting',
        category: 'textile-garments',
        icon: '🧵',
        name: {
            fa: 'ماشین گردباف Santoni',
            en: 'Santoni Circular Knitting Machine',
            ps: 'سانتوني دایروي اوبدلو ماشین'
        },
        description: {
            fa: 'قطر ۳۰ اینچ، گیج ۲۸، بازبینی کامل با سوزن و جک نو.',
            en: '30-inch diameter, gauge 28, fully overhauled with new needles and jacks.',
            ps: '۳۰ انچه قطر، ګیج ۲۸، په بشپړه توګه ترمیم شوی د نويو ستنو او جکونو سره.'
        },
        meta: [
            {
                label: { fa: 'سرعت', en: 'Speed', ps: 'چټکتیا' },
                value: { fa: '۳۰ دور/دقیقه', en: '30 rpm', ps: '۳۰ دور/دقیقه' }
            },
            {
                label: { fa: 'آپشن‌ها', en: 'Options', ps: 'اختیارات' },
                value: { fa: 'Jumbo Roll Taker، سیستم روغن‌کاری اتومات', en: 'Jumbo roll taker, automatic lubrication', ps: 'د جمبو رول اخیستونکی، اتومات غوړول' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/textile-garments/circular-knitting.pdf'
    },
    {
        id: 'automatic-garment-cutter',
        category: 'textile-garments',
        icon: '✂️',
        name: {
            fa: 'کاتر اتومات اسپردر + CAD',
            en: 'Automatic Cutter with Spreader & CAD',
            ps: 'اتومات پرېکوونکی له سپریډر او CAD سره'
        },
        description: {
            fa: 'سیستم برش ۹۰ میلی‌متری، میز ۱۸ متری و نرم‌افزار مارکرینگ.',
            en: '90 mm cutting system, 18 m table, and integrated CAD marker software.',
            ps: '۹۰ ملي متري پرې کولو سیسټم، ۱۸ متره مېز او مدغم CAD مارکر سافټویر.'
        },
        meta: [
            {
                label: { fa: 'سازنده', en: 'Manufacturer', ps: 'جوړونکی' },
                value: { fa: 'Lectra - فرانسه', en: 'Lectra - France', ps: 'لیکټرا - فرانسه' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/textile-garments/garment-cutting.pdf'
    },
    {
        id: 'hyundai-excavator',
        category: 'construction-machinery',
        icon: '🚜',
        name: {
            fa: 'اکسکاویتور Hyundai R220LC-9S',
            en: 'Hyundai R220LC-9S Excavator',
            ps: 'د هیونډای R220LC-9S اکسکاویټر'
        },
        description: {
            fa: 'مدل ۲۰۱۷ با بوم بلند، سیستم هیدرولیک اورجینال و آماده کار.',
            en: '2017 model with long boom, original hydraulics, and ready-for-work condition.',
            ps: '۲۰۱۷ ماډل د اوږده بازو، اصلي هایدرولیک او د کار لپاره چمتو حالت سره.'
        },
        meta: [
            {
                label: { fa: 'ساعت کارکرد', en: 'Run Hours', ps: 'کاري ساعتونه' },
                value: { fa: '۵٬۸۰۰ ساعت', en: '5,800 h', ps: '۵٬۸۰۰ ساعته' }
            },
            {
                label: { fa: 'ضمائم', en: 'Attachments', ps: 'ضمیمه' },
                value: { fa: 'چکش هیدرولیک + پاکت ۱٫۲ مترمکعب', en: 'Hydraulic hammer + 1.2 m³ bucket', ps: 'هایدرولیک چکش + ۱٫۲ م³ بېلچه' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/construction-machinery/excavator.pdf'
    },
    {
        id: 'liebherr-tower-crane',
        category: 'construction-machinery',
        icon: '🏗️',
        name: {
            fa: 'جرثقیل برجی Liebherr 132 EC-H',
            en: 'Liebherr 132 EC-H Tower Crane',
            ps: 'لیبهیر 132 EC-H برج کرین'
        },
        description: {
            fa: 'بازه ۶۰ متری، ظرفیت ۸ تن، سرویس کامل با تمام سکشن‌ها.',
            en: '60 m jib, 8 t capacity, fully serviced with complete mast sections.',
            ps: '۶۰ متره بازه، ۸ ټنه ظرفیت، بشپړ سرویس او ټول ماست برخې.'
        },
        meta: [
            {
                label: { fa: 'ارتفاع آزاد', en: 'Free Height', ps: 'ازاد لوړوالی' },
                value: { fa: '۴۵ متر', en: '45 m', ps: '۴۵ متره' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/construction-machinery/crane.pdf'
    },
    {
        id: 'hino-truck-fleet',
        category: 'logistics-utilities',
        icon: '🚚',
        name: {
            fa: 'کامیونت‌های Hino Euro IV',
            en: 'Hino Euro IV Truck Fleet',
            ps: 'د هینو Euro IV لاریو بېړۍ'
        },
        description: {
            fa: 'بیست دستگاه ۶ تن با سرویس کامل، آماده حمل بین‌شهری.',
            en: 'Fleet of twenty 6-ton trucks with full service records, ready for haulage.',
            ps: 'د شلو ۶ ټنه لاریو بېړۍ د بشپړ خدمت ریکارډونو سره، د لېږد لپاره چمتو.'
        },
        meta: [
            {
                label: { fa: 'میانگین کارکرد', en: 'Average Mileage', ps: 'اوسط مزل' },
                value: { fa: '۱۲۰٬۰۰۰ کیلومتر', en: '120,000 km', ps: '۱۲۰٬۰۰۰ کیلومتره' }
            },
            {
                label: { fa: 'امکانات', en: 'Features', ps: 'ځانګړتیاوې' },
                value: { fa: 'GPS، صندوق یخچالی، بیمه معتبر', en: 'GPS, refrigerated box, valid insurance', ps: 'GPS، یخچالي صندوق، معتبر بیمه' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/logistics-utilities/trucks-lorries.pdf'
    },
    {
        id: 'cummins-diesel-generator',
        category: 'logistics-utilities',
        icon: '🔌',
        name: {
            fa: 'ژنراتور دیزلی Cummins 500kVA',
            en: 'Cummins 500 kVA Diesel Generator',
            ps: 'د کمینز ۵۰۰ kVA ډیزلي جنراتور'
        },
        description: {
            fa: 'اورهال کامل، کنترل هوشمند، مناسب برای کارخانه و پروژه‌های معدنی.',
            en: 'Fully overhauled with smart control, ideal for plants and mining projects.',
            ps: 'بشپړ ترمیم شوی د هوښیار کنټرول سره، د فابریکو او کانونو لپاره مناسب.'
        },
        meta: [
            {
                label: { fa: 'ساعت کارکرد', en: 'Run Hours', ps: 'کاري ساعتونه' },
                value: { fa: '۳٬۲۰۰ ساعت پس از اورهال', en: '3,200 h after overhaul', ps: '۳٬۲۰۰ ساعته د ترمیم وروسته' }
            },
            {
                label: { fa: 'شامل', en: 'Includes', ps: 'شامل' },
                value: { fa: 'ATS، تانک دوجداره، صداگیر', en: 'ATS, double-wall fuel tank, sound enclosure', ps: 'ATS، دوه جداره د تېلو ټانک، غږ بندول' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/logistics-utilities/diesel-generator.pdf'
    },
    {
        id: 'atlas-copco-air-compressor',
        category: 'logistics-utilities',
        icon: '⚙️',
        name: {
            fa: 'ایستگاه کمپرسور هوای Atlas Copco',
            en: 'Atlas Copco Air Compressor Station',
            ps: 'د اټلس کوپکو د هوا کمپرسور سټېشن'
        },
        description: {
            fa: 'دو دستگاه GA90 با خشک‌کن جذبی و مخزن ۳٬۰۰۰ لیتری آماده بهره‌برداری.',
            en: 'Twin GA90 compressors with adsorption dryer and 3,000 L receiver tank.',
            ps: 'د GA90 دوه کمپرسورونه د جذب وچوونکي او ۳٬۰۰۰ لیتره ټانک سره.'
        },
        meta: [
            {
                label: { fa: 'فشار کاری', en: 'Working Pressure', ps: 'کاري فشار' },
                value: { fa: '۱۲ بار', en: '12 bar', ps: '۱۲ بار' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/logistics-utilities/air-compressor.pdf'
    },
    {
        id: 'toyota-electric-forklift',
        category: 'logistics-utilities',
        icon: '🪜',
        name: {
            fa: 'فورک‌لیف برقی ۳ تن Toyota',
            en: 'Toyota 3 Ton Electric Forklifts',
            ps: 'د تویوتا درې ټنه برقي فورک لیفټونه'
        },
        description: {
            fa: '۱۲ دستگاه بازسازی‌شده با باتری لیتیومی و شارژر سریع.',
            en: '12 refurbished units with lithium batteries and fast chargers.',
            ps: '۱۲ ترمیم شوي واحدونه د لیتیوم بیټرۍ او چټک چارجرو سره.'
        },
        meta: [
            {
                label: { fa: 'ارتفاع لیفت', en: 'Lift Height', ps: 'د پورته کولو لوړوالی' },
                value: { fa: '۶ متر', en: '6 m', ps: '۶ متره' }
            }
        ],
        pdfUrl: 'pdfs/second-hand/logistics-utilities/electric-forklift.pdf'
    }
];

window.secondHandInventoryData = secondHandInventoryData;

// Category keywords for search
const categoryKeywords = {
    'production-lines': [
        'خطوط تولید و راه‌اندازی فابریکه',
        'Production Lines & Factory Setup',
        'راه‌اندازی فابریکه',
        'production lines',
        'تولید لینونه',
        'factory setup',
        'Food Processing Lines',
        'خطوط تولید مواد غذایی',
        'د خوراکي موادو د پروسس لینونه',
        'Consumer Goods Lines',
        'خطوط تولید کالاهای مصرفی',
        'د مصرفي توکو د تولید لینونه',
        'Construction Materials Lines',
        'خطوط تولید مصالح ساختمانی',
        'د ساختماني موادو د تولید لینونه',
        'Textile & Garments Lines',
        'خطوط تولید نساجی و پوشاک',
        'د نساجۍ او جامو د تولید لینونه',
        'Industrial Recycling Lines',
        'خطوط بازیافت صنعتی',
        'صنعتي د بیاکارونې لینونه',
        'Disposable Products Lines',
        'خطوط تولید محصولات یکبارمصرف',
        'د یو ځل کارېدونکو محصولاتو د تولید لینونه',
        'Light Industry Lines',
        'خطوط صنایع سبک و چوبی',
        'د سپکو صنعتونو د تولید لینونه',
        'Cereal Production Line',
        'خط تولید غلات صبحانه',
        'د ناشته د غلو تولید لین',
        'Baby Food / Cerelac Line',
        'خط تولید غذای کودک/سرلاک',
        'د ماشوم د خوراک / سرلاک تولید لین',
        'Dairy Processing Line',
        'خط فرآوری لبنیات',
        'د لبنیاتو د پروسس لین',
        'Beverage Production Line',
        'خط تولید نوشیدنی',
        'د مشروباتو تولید لین',
        'Bakery & Biscuits Line',
        'خط تولید نان و بیسکویت',
        'د ډوډۍ او بسکټو تولید لین',
        'Meat Processing Line',
        'خط فرآوری گوشت',
        'د غوښې د پروسس لین',
        'Fruit & Vegetable Processing Line',
        'خط فرآوری میوه و سبزی',
        'د میوو او سبزیو د پروسس لین',
        'Edible Oil Production Line',
        'خط تولید روغن خوراکی',
        'د خوراکي غوړ د تولید لین'
    ],
    'printing-machines': ['دستگاه های چاپ', 'Printing Machines', 'چاپ', 'printing', 'چاپ ماشینونه', 'Printing Machines'],
    'sports-equipment': ['تجهیزات ورزشی', 'Sports Equipment', 'ورزشی', 'sports', 'ورزشي تجهیزات', 'Sports Equipment'],
    'metallurgy': ['متالورژی و فلزکاری', 'Metallurgy & Metalworking', 'متالورژی', 'metallurgy', 'فلزکاری', 'metalworking', 'د فلزاتو علم', 'metallurgy', 'فلزکاري', 'metalworking'],
    'construction-materials': ['ماشین آلات مصالح ساخت', 'Construction Materials Machinery', 'مصالح ساختمانی', 'construction materials', 'د ساختماني موادو ماشینونه', 'Construction Materials Machinery'],
    'plastic-processing': ['دستگاه های فرآوری پلاستیک', 'Plastic Processing Machines', 'پلاستیک', 'plastic', 'د پلاستیک پروسس ماشینونه', 'Plastic Processing Machines'],
    'paint-coating': ['ماشین آلات رنگ و کوتینگ', 'Paint & Coating Machinery', 'رنگ', 'paint', 'کوتینگ', 'coating', 'د رنګ او پوښښت ماشینونه', 'Paint & Coating Machinery'],
    'foam-sponge': ['ماشین آلات لوم و اسفنج', 'Foam & Sponge Machinery', 'اسفنج', 'foam', 'لوم', 'sponge', 'د فوم او اسفنج ماشینونه', 'Foam & Sponge Machinery'],
    'tobacco': ['ماشین آلات تناکو و سیگار', 'Tobacco & Cigarette Machinery', 'تناکو', 'tobacco', 'سیگار', 'cigarette', 'د توتون او سیګر ماشینونه', 'Tobacco & Cigarette Machinery'],
    'cooling-heating': ['دستگاه های سرمایش و گرمایش', 'Cooling & Heating Equipment', 'سرمایش', 'cooling', 'گرمایش', 'heating', 'د سړښت او تودوخه تجهیزات', 'Cooling & Heating Equipment'],
    'pumps-compressors': ['پمپ ها و کمپرسور ها صنعتی', 'Industrial Pumps & Compressors', 'پمپ', 'pump', 'کمپرسور', 'compressor', 'د صنعت پمپونه او کمپرسورونه', 'Industrial Pumps & Compressors'],
    'industrial-laser': ['لیزر صنعتی', 'Industrial Laser', 'لیزر', 'laser', 'صنعت لیزر', 'Industrial Laser'],
    'tanks': ['مخازن', 'Tanks', 'مخزن', 'tank', 'تنکونه', 'Tanks'],
    'packaging': ['بسته بندی', 'Packaging', 'بسته', 'package', 'بسته بندي', 'Packaging'],
    'chemical-pharma': ['ماشین آلات شیمیایی و دارویی', 'Chemical & Pharmaceutical Machinery', 'شیمیایی', 'chemical', 'دارویی', 'pharmaceutical', 'د کیمیاوي او درملو ماشینونه', 'Chemical & Pharmaceutical Machinery'],
    'machinery-parts': ['پرزه‌جات ماشین‌آلات', 'Machinery Spare Parts', 'پرزه‌جات', 'spare parts', 'د ماشینونو پرزې', 'Machinery Spare Parts'],
    'paper-pulp': ['ماشین آلات کاغذ و سلولوز', 'Paper & Pulp Machinery', 'کاغذ', 'paper', 'د کاغذ او پالپ ماشینونه', 'Paper & Pulp Machinery'],
    'electronic-machinery': ['ماشین آلات الکترونیکی', 'Electronic Machinery', 'الکترونیک', 'electronic', 'د الکترونیک ماشینونه', 'Electronic Machinery'],
    'telecom-parts': ['قطعات و لوازم اینترنتی و مخابراتی', 'Internet & Telecommunication Parts', 'مخابراتی', 'telecom', 'اینترنت', 'internet', 'د انترنت او مخابراتي برخې', 'Internet & Telecommunication Parts'],
    'second-hand': ['ماشین آلات دست دوم', 'Second Hand Machinery', 'دست دوم', 'second hand', 'د دوهم لاس ماشینونه', 'Second Hand Machinery']
};

// Equipment data for each category
const equipmentData = {
    'production-lines': [
        {
            name: { fa: 'خط تولید غلات صبحانه', en: 'Cereal Production Line', ps: 'د ناشته د غلو تولید لین' },
            description: { fa: 'فرآیند کامل از پاک‌سازی دانه تا اکسترود، روکش و بسته‌بندی غلات صبحانه.', en: 'Complete process from grain cleaning to extrusion, coating and cereal packaging.', ps: 'له دانې پاکولو، اکسترود او پوښښ څخه تر د ناشته غلو بسته بندۍ پورې بشپړ بهیر.' },
            pdfUrl: 'pdfs/production-lines/food-processing/cereal-production-line.pdf'
        },
        {
            name: { fa: 'خط تولید غذای کودک/سرلاک', en: 'Baby Food / Cerelac Line', ps: 'د ماشوم د خوراک / سرلاک تولید لین' },
            description: { fa: 'میکسینگ دقیق، خشک‌کن غلتکی و بسته‌بندی استریل غذای کودک.', en: 'Precise mixing, drum drying and sterile packing for baby cereal products.', ps: 'د ماشوم د خوراک لپاره دقیق مخلوط، ډرم وچول او استریل بسته بندي.' },
            pdfUrl: 'pdfs/production-lines/food-processing/baby-food-cerelac-line.pdf'
        },
        {
            name: { fa: 'خط فرآوری لبنیات', en: 'Dairy Processing Line', ps: 'د لبنیاتو د پروسس لین' },
            description: { fa: 'پاستوریزه، هموژنیزه، تخمیر و بسته‌بندی شیر، ماست و پنیر.', en: 'Pasteurisation, homogenisation, fermentation and packaging for milk, yogurt and cheese.', ps: 'د شیدو، مستې او پنیر لپاره پاستور، هموژن، تخمیر او بسته بندي.' },
            pdfUrl: 'pdfs/production-lines/food-processing/dairy-processing-line.pdf'
        },
        {
            name: { fa: 'خط تولید نوشیدنی', en: 'Beverage Production Line', ps: 'د مشروباتو تولید لین' },
            description: { fa: 'اختلاط، تصفیه، پرکن و درب‌بندی نوشیدنی‌های غیرالکلی.', en: 'Mixing, filtration, filling and capping for non-alcoholic beverages.', ps: 'د غیر الکولي مشروباتو لپاره مخلوط، فلټراسیون، ډکول او سرپوش کول.' },
            pdfUrl: 'pdfs/production-lines/food-processing/beverage-production-line.pdf'
        },
        {
            name: { fa: 'خط تولید نان و بیسکویت', en: 'Bakery & Biscuits Line', ps: 'د ډوډۍ او بسکټو تولید لین' },
            description: { fa: 'آماده‌سازی خمیر، تخمیرکنترل‌شده، پخت، سردکردن و بسته‌بندی نان و بیسکویت.', en: 'Dough preparation, controlled proofing, baking, cooling and packing for bread and biscuits.', ps: 'د خمیر چمتووالی، کنټرول شوی پخېدنه، پخول، یخول او بسته بندي د ډوډۍ او بسکټو لپاره.' },
            pdfUrl: 'pdfs/production-lines/food-processing/bakery-biscuits-line.pdf'
        },
        {
            name: { fa: 'خط فرآوری گوشت', en: 'Meat Processing Line', ps: 'د غوښې د پروسس لین' },
            description: { fa: 'خردکردن، مخلوط، پرکن، دودی و بسته‌بندی محصولات گوشتی.', en: 'Grinding, blending, filling, smoking and packaging for processed meat products.', ps: 'د غوښې د محصولاتو لپاره ګراینډ، مخلوط، ډکول، سګرټ کول او بسته بندي.' },
            pdfUrl: 'pdfs/production-lines/food-processing/meat-processing-line.pdf'
        },
        {
            name: { fa: 'خط فرآوری میوه و سبزی', en: 'Fruit & Vegetable Processing Line', ps: 'د میوو او سبزیو د پروسس لین' },
            description: { fa: 'شستشو، پوست‌گیری، برش، بلانچینگ و بسته‌بندی تازه یا IQF.', en: 'Washing, peeling, cutting, blanching and packaging for fresh or IQF produce.', ps: 'د میوو او سبزیو لپاره مینځل، پوستکښ، پرې کول، بلانچینګ او بسته بندي.' },
            pdfUrl: 'pdfs/production-lines/food-processing/fruit-vegetable-processing-line.pdf'
        },
        {
            name: { fa: 'خط تولید روغن خوراکی', en: 'Edible Oil Production Line', ps: 'د خوراکي غوړ د تولید لین' },
            description: { fa: 'استخراج، تصفیه، بی‌بو کردن و بسته‌بندی انواع روغن نباتی.', en: 'Extraction, refining, deodorising and bottling of vegetable cooking oils.', ps: 'د خوراکي نباتي غوړ لپاره استخراج، تصفیه، بوی لرې کول او بوتل بندي.' },
            pdfUrl: 'pdfs/production-lines/food-processing/edible-oil-line.pdf'
        }
    ],
    'printing-machines': [
        {
            name: { fa: 'دستگاه چاپ افست', en: 'Offset Printing Machine', ps: 'افست چاپ ماشین' },
            description: { fa: 'دستگاه چاپ افست با کیفیت بالا', en: 'High-quality offset printing machine', ps: 'د لوړ کیفیت سره افست چاپ ماشین' },
            pdfUrl: 'pdfs/printing-machines/offset-printing.pdf'
        },
        {
            name: { fa: 'دستگاه چاپ دیجیتال', en: 'Digital Printing Machine', ps: 'ډیجیټل چاپ ماشین' },
            description: { fa: 'دستگاه چاپ دیجیتال برای چاپ با تیراژ کم', en: 'Digital printing machine for short run printing', ps: 'د کم چاپ تیراژ لپاره ډیجیټل چاپ ماشین' },
            pdfUrl: 'pdfs/printing-machines/digital-printing.pdf'
        },
        {
            name: { fa: 'دستگاه چاپ فلکسو', en: 'Flexo Printing Machine', ps: 'فلکسو چاپ ماشین' },
            description: { fa: 'دستگاه چاپ فلکسو برای بسته‌بندی', en: 'Flexo printing machine for packaging', ps: 'د بسته بندي لپاره فلکسو چاپ ماشین' },
            pdfUrl: 'pdfs/printing-machines/flexo-printing.pdf'
        }
    ],
    'sports-equipment': [
        {
            name: { fa: 'خط تولید توپ فوتبال', en: 'Football Production Line', ps: 'د فوتبال بال تولید لین' },
            description: { fa: 'خط تولید کامل برای توپ فوتبال', en: 'Complete production line for footballs', ps: 'د فوتبال بالو لپاره بشپړ تولید لین' },
            pdfUrl: 'pdfs/sports-equipment/football.pdf'
        },
        {
            name: { fa: 'خط تولید توپ تنیس', en: 'Tennis Ball Production Line', ps: 'د تینس بال تولید لین' },
            description: { fa: 'خط تولید برای توپ تنیس', en: 'Production line for tennis balls', ps: 'د تینس بالو لپاره تولید لین' },
            pdfUrl: 'pdfs/sports-equipment/tennis-ball.pdf'
        }
    ],
    'metallurgy': [
        {
            name: { fa: 'خط تولید ذوب آهن', en: 'Iron Melting Production Line', ps: 'د اوسپنې ذوب تولید لین' },
            description: { fa: 'خط تولید برای ذوب و ریخته‌گری آهن', en: 'Production line for iron melting and casting', ps: 'د اوسپنې ذوب او ریخته‌ګرۍ لپاره تولید لین' },
            pdfUrl: 'pdfs/metallurgy/iron-melting.pdf'
        },
        {
            name: { fa: 'خط تولید نورد', en: 'Rolling Mill Production Line', ps: 'د رولینګ مل تولید لین' },
            description: { fa: 'خط تولید برای نورد فلزات', en: 'Production line for metal rolling', ps: 'د فلزاتو رولینګ لپاره تولید لین' },
            pdfUrl: 'pdfs/metallurgy/rolling-mill.pdf'
        }
    ],
    'construction-materials': [
        {
            name: { fa: 'خط تولید بلوک سیمانی', en: 'Concrete Block Production Line', ps: 'د کانکریټ بلاک تولید لین' },
            description: { fa: 'خط تولید برای بلوک‌های سیمانی', en: 'Production line for concrete blocks', ps: 'د کانکریټ بلاکونو لپاره تولید لین' },
            pdfUrl: 'pdfs/construction-materials/concrete-block.pdf'
        },
        {
            name: { fa: 'خط تولید آسفالت', en: 'Asphalt Production Line', ps: 'د اسفالټ تولید لین' },
            description: { fa: 'خط تولید برای تولید آسفالت', en: 'Production line for asphalt production', ps: 'د اسفالټ تولید لپاره تولید لین' },
            pdfUrl: 'pdfs/construction-materials/asphalt.pdf'
        },
        {
            name: { fa: 'اکسکاویتور ساختمانی', en: 'Construction Excavator', ps: 'د ساختمان اکسکاویټر' },
            description: { fa: 'اکسکاویتور برای کارهای ساختمانی', en: 'Excavator for construction work', ps: 'د ساختمان کارونو لپاره اکسکاویټر' },
            pdfUrl: 'pdfs/construction-materials/excavator.pdf'
        },
        {
            name: { fa: 'کرین ساختمانی', en: 'Construction Crane', ps: 'د ساختمان کرین' },
            description: { fa: 'کرین برای کارهای ساختمانی', en: 'Crane for construction work', ps: 'د ساختمان کارونو لپاره کرین' },
            pdfUrl: 'pdfs/construction-materials/crane.pdf'
        },
        {
            name: { fa: 'لودر ساختمانی', en: 'Construction Loader', ps: 'د ساختمان لوډر' },
            description: { fa: 'لودر برای کارهای ساختمانی', en: 'Loader for construction work', ps: 'د ساختمان کارونو لپاره لوډر' },
            pdfUrl: 'pdfs/construction-materials/loader.pdf'
        },
        {
            name: { fa: 'مصالح ساختمانی', en: 'Construction Materials', ps: 'د ساختماني مواد' },
            description: { fa: 'مصالح ساختمانی با کیفیت بالا', en: 'High-quality construction materials', ps: 'د لوړ کیفیت سره ساختماني مواد' },
            pdfUrl: 'pdfs/construction-materials/materials.pdf'
        }
    ],
    'plastic-processing': [
        {
            name: { fa: 'دستگاه اکسترودر پلاستیک', en: 'Plastic Extruder Machine', ps: 'د پلاستیک اکسترودر ماشین' },
            description: { fa: 'دستگاه اکسترودر برای فرآوری پلاستیک', en: 'Extruder machine for plastic processing', ps: 'د پلاستیک پروسس لپاره اکسترودر ماشین' },
            pdfUrl: 'pdfs/plastic-processing/extruder.pdf'
        },
        {
            name: { fa: 'دستگاه تزریق پلاستیک', en: 'Plastic Injection Machine', ps: 'د پلاستیک تزریق ماشین' },
            description: { fa: 'دستگاه تزریق برای تولید قطعات پلاستیکی', en: 'Injection machine for producing plastic parts', ps: 'د پلاستیکي برخو تولید لپاره تزریق ماشین' },
            pdfUrl: 'pdfs/plastic-processing/injection.pdf'
        }
    ],
    'paint-coating': [
        {
            name: { fa: 'دستگاه پودرپاشی', en: 'Powder Coating Machine', ps: 'د پوډر پوښښت ماشین' },
            description: { fa: 'دستگاه پودرپاشی برای پوشش‌دهی', en: 'Powder coating machine for surface coating', ps: 'د سطحي پوښښت لپاره پوډر پوښښت ماشین' },
            pdfUrl: 'pdfs/paint-coating/powder-coating.pdf'
        },
        {
            name: { fa: 'دستگاه رنگ‌پاشی', en: 'Spray Painting Machine', ps: 'د رنګ پاشۍ ماشین' },
            description: { fa: 'دستگاه رنگ‌پاشی صنعتی', en: 'Industrial spray painting machine', ps: 'د صنعت رنګ پاشۍ ماشین' },
            pdfUrl: 'pdfs/paint-coating/spray-painting.pdf'
        }
    ],
    'foam-sponge': [
        {
            name: { fa: 'دستگاه تولید فوم', en: 'Foam Production Machine', ps: 'د فوم تولید ماشین' },
            description: { fa: 'دستگاه تولید فوم برای صنایع مختلف', en: 'Foam production machine for various industries', ps: 'د مختلفو صنعتونو لپاره د فوم تولید ماشین' },
            pdfUrl: 'pdfs/foam-sponge/foam-production.pdf'
        },
        {
            name: { fa: 'دستگاه برش اسفنج', en: 'Sponge Cutting Machine', ps: 'د اسفنج سکه ماشین' },
            description: { fa: 'دستگاه برش برای اسفنج و فوم', en: 'Cutting machine for sponge and foam', ps: 'د اسفنج او فوم لپاره سکه ماشین' },
            pdfUrl: 'pdfs/foam-sponge/sponge-cutting.pdf'
        }
    ],
    'tobacco': [
        {
            name: { fa: 'دستگاه تولید سیگار', en: 'Cigarette Production Machine', ps: 'د سیګر تولید ماشین' },
            description: { fa: 'دستگاه تولید کامل سیگار', en: 'Complete cigarette production machine', ps: 'د سیګر بشپړ تولید ماشین' },
            pdfUrl: 'pdfs/tobacco/cigarette-machine.pdf'
        },
        {
            name: { fa: 'دستگاه بسته‌بندی تنباکو', en: 'Tobacco Packaging Machine', ps: 'د توتون بسته بندي ماشین' },
            description: { fa: 'دستگاه بسته‌بندی برای محصولات تنباکو', en: 'Packaging machine for tobacco products', ps: 'د توتون محصولاتو لپاره بسته بندي ماشین' },
            pdfUrl: 'pdfs/tobacco/tobacco-packaging.pdf'
        }
    ],
    'cooling-heating': [
        {
            name: { fa: 'دستگاه چیلر', en: 'Chiller Unit', ps: 'د چیلر واحد' },
            description: { fa: 'دستگاه چیلر برای سرمایش صنعتی', en: 'Chiller unit for industrial cooling', ps: 'د صنعت سړښت لپاره چیلر واحد' },
            pdfUrl: 'pdfs/cooling-heating/chiller.pdf'
        },
        {
            name: { fa: 'دستگاه بویلر', en: 'Boiler Unit', ps: 'د بویلر واحد' },
            description: { fa: 'دستگاه بویلر برای گرمایش صنعتی', en: 'Boiler unit for industrial heating', ps: 'د صنعت تودوخې لپاره بویلر واحد' },
            pdfUrl: 'pdfs/cooling-heating/boiler.pdf'
        }
    ],
    'pumps-compressors': [
        {
            name: { fa: 'پمپ آب صنعتی', en: 'Industrial Water Pump', ps: 'د صنعت اوبه پمپ' },
            description: { fa: 'پمپ آب برای مصارف صنعتی', en: 'Water pump for industrial applications', ps: 'د صنعت کارونو لپاره اوبه پمپ' },
            pdfUrl: 'pdfs/pumps-compressors/water-pump.pdf'
        },
        {
            name: { fa: 'کمپرسور هوا', en: 'Air Compressor', ps: 'د هوا کمپرسور' },
            description: { fa: 'کمپرسور هوا برای مصارف صنعتی', en: 'Air compressor for industrial applications', ps: 'د صنعت کارونو لپاره هوا کمپرسور' },
            pdfUrl: 'pdfs/pumps-compressors/air-compressor.pdf'
        }
    ],
    'industrial-laser': [
        {
            name: { fa: 'دستگاه لیزر برش', en: 'Laser Cutting Machine', ps: 'د لیزر سکه ماشین' },
            description: { fa: 'دستگاه لیزر برای برش فلزات', en: 'Laser machine for metal cutting', ps: 'د فلزاتو سکولو لپاره لیزر ماشین' },
            pdfUrl: 'pdfs/industrial-laser/laser-cutting.pdf'
        },
        {
            name: { fa: 'دستگاه لیزر حکاکی', en: 'Laser Engraving Machine', ps: 'د لیزر کنګر ماشین' },
            description: { fa: 'دستگاه لیزر برای حکاکی', en: 'Laser machine for engraving', ps: 'د کنګرولو لپاره لیزر ماشین' },
            pdfUrl: 'pdfs/industrial-laser/laser-engraving.pdf'
        }
    ],
    'tanks': [
        {
            name: { fa: 'مخزن آب', en: 'Water Tank', ps: 'د اوبو تنک' },
            description: { fa: 'مخزن ذخیره آب', en: 'Water storage tank', ps: 'د اوبو خوندي کولو تنک' },
            pdfUrl: 'pdfs/tanks/water-tank.pdf'
        },
        {
            name: { fa: 'مخزن شیمیایی', en: 'Chemical Tank', ps: 'د کیمیاوي تنک' },
            description: { fa: 'مخزن ذخیره مواد شیمیایی', en: 'Chemical storage tank', ps: 'د کیمیاوي موادو خوندي کولو تنک' },
            pdfUrl: 'pdfs/tanks/chemical-tank.pdf'
        }
    ],
    'packaging': [
        {
            name: { fa: 'دستگاه بسته‌بندی اتوماتیک', en: 'Automatic Packaging Machine', ps: 'د اوتوماتیک بسته بندي ماشین' },
            description: { fa: 'دستگاه بسته‌بندی اتوماتیک', en: 'Automatic packaging machine', ps: 'اوتوماتیک بسته بندي ماشین' },
            pdfUrl: 'pdfs/packaging/automatic-packaging.pdf'
        },
        {
            name: { fa: 'دستگاه بسته‌بندی وکیوم', en: 'Vacuum Packaging Machine', ps: 'د وکیوم بسته بندي ماشین' },
            description: { fa: 'دستگاه بسته‌بندی با سیستم وکیوم', en: 'Vacuum packaging machine', ps: 'د وکیوم سیسټم سره بسته بندي ماشین' },
            pdfUrl: 'pdfs/packaging/vacuum-packaging.pdf'
        }
    ],
    'chemical-pharma': [
        {
            name: { fa: 'دستگاه مخزن واکنش', en: 'Reaction Tank Machine', ps: 'د تعامل تنک ماشین' },
            description: { fa: 'دستگاه مخزن واکنش شیمیایی', en: 'Chemical reaction tank machine', ps: 'د کیمیاوي تعامل تنک ماشین' },
            pdfUrl: 'pdfs/chemical-pharma/reaction-tank.pdf'
        },
        {
            name: { fa: 'دستگاه بسته‌بندی دارو', en: 'Pharmaceutical Packaging Machine', ps: 'د درملو بسته بندي ماشین' },
            description: { fa: 'دستگاه بسته‌بندی برای محصولات دارویی', en: 'Packaging machine for pharmaceutical products', ps: 'د درملو محصولاتو لپاره بسته بندي ماشین' },
            pdfUrl: 'pdfs/chemical-pharma/pharma-packaging.pdf'
        }
    ],
    'machinery-parts': [
        {
            name: { fa: 'تسمه نقاله', en: 'Conveyor Belt', ps: 'د تسمه نقاله' },
            description: { fa: 'تسمه نقاله برای خطوط تولید', en: 'Conveyor belt for production lines', ps: 'د تولید لینو لپاره تسمه نقاله' },
            pdfUrl: 'pdfs/machinery-parts/conveyor-belt.pdf'
        },
        {
            name: { fa: 'یاتاقان صنعتی', en: 'Industrial Bearing', ps: 'د صنعت برګر' },
            description: { fa: 'یاتاقان برای ماشین آلات صنعتی', en: 'Bearing for industrial machinery', ps: 'د صنعت ماشینونو لپاره برګر' },
            pdfUrl: 'pdfs/machinery-parts/industrial-bearing.pdf'
        }
    ],
    'paper-pulp': [
        {
            name: { fa: 'دستگاه تولید خمیر کاغذ', en: 'Pulp Production Machine', ps: 'د پالپ تولید ماشین' },
            description: { fa: 'دستگاه تولید خمیر کاغذ', en: 'Pulp production machine', ps: 'د پالپ تولید ماشین' },
            pdfUrl: 'pdfs/paper-pulp/pulp-production.pdf'
        },
        {
            name: { fa: 'دستگاه تولید کاغذ', en: 'Paper Production Machine', ps: 'د کاغذ تولید ماشین' },
            description: { fa: 'دستگاه تولید کاغذ', en: 'Paper production machine', ps: 'د کاغذ تولید ماشین' },
            pdfUrl: 'pdfs/paper-pulp/paper-production.pdf'
        }
    ],
    'electronic-machinery': [
        {
            name: { fa: 'دستگاه مونتاژ PCB', en: 'PCB Assembly Machine', ps: 'د PCB ټولګي ماشین' },
            description: { fa: 'دستگاه مونتاژ برای برد الکترونیکی', en: 'Assembly machine for electronic boards', ps: 'د الکترونیکي بورډ لپاره ټولګي ماشین' },
            pdfUrl: 'pdfs/electronic-machinery/pcb-assembly.pdf'
        },
        {
            name: { fa: 'دستگاه تست الکترونیک', en: 'Electronic Testing Machine', ps: 'د الکترونیک ازمویښت ماشین' },
            description: { fa: 'دستگاه تست برای محصولات الکترونیکی', en: 'Testing machine for electronic products', ps: 'د الکترونیکي محصولاتو لپاره ازمویښت ماشین' },
            pdfUrl: 'pdfs/electronic-machinery/electronic-testing.pdf'
        }
    ],
    'telecom-parts': [
        {
            name: { fa: 'دستگاه تولید آنتن', en: 'Antenna Production Machine', ps: 'د انتن تولید ماشین' },
            description: { fa: 'دستگاه تولید آنتن', en: 'Antenna production machine', ps: 'د انتن تولید ماشین' },
            pdfUrl: 'pdfs/telecom-parts/antenna-production.pdf'
        },
        {
            name: { fa: 'دستگاه تولید کابل شبکه', en: 'Network Cable Production Machine', ps: 'د شبکي کیبل تولید ماشین' },
            description: { fa: 'دستگاه تولید کابل شبکه', en: 'Network cable production machine', ps: 'د شبکي کیبل تولید ماشین' },
            pdfUrl: 'pdfs/telecom-parts/network-cable.pdf'
        }
    ],
    'second-hand': secondHandInventoryData.map(item => ({
        name: item.name,
        description: item.description,
        pdfUrl: item.pdfUrl
    }))
};

// Translation dictionary
window.translations = window.translations || {};
const translations = window.translations;

Object.assign(translations, {
    // Header
    'home': { fa: 'خانه', en: 'Home', ps: 'کور' },
    'services': { fa: 'خدمات', en: 'Services', ps: 'خدمتونه' },
    'about': { fa: 'درباره ما', en: 'About Us', ps: 'زموږ په اړه' },
    'contact': { fa: 'تماس با ما', en: 'Contact Us', ps: 'مونږ سره اړیکه' },
    'free-consultation': { fa: 'مشاوره رایگان', en: 'Free Consultation', ps: 'رایگان مشوره' },
    'projects': { fa: 'پروژه های تحت کار', en: 'Projects Underway', ps: 'د کار پروژې' },
    'nav-cargo': { fa: 'کارگو و حمل‌ونقل', en: 'Cargo & Transport', ps: 'کارګو او ترانسپورت' },
    'nav_cargo': { fa: 'کارگو و حمل‌ونقل', en: 'Cargo & Transport', ps: 'کارګو او ترانسپورت' },
    'projects-back-link': {
        fa: 'بازگشت به صفحه اصلی',
        en: 'Back to Home',
        ps: 'بېرته کورپاڼې ته'
    },
    'projects-page-title': {
        fa: 'پروژه های تحت کار',
        en: 'Projects Underway',
        ps: 'د روانو پروژو لست'
    },
    'projects-page-subtitle': {
        fa: 'در اینجا می‌توانید لیست پروژه‌های در حال اجرا و تکمیل شده ما را مشاهده کنید',
        en: 'Explore our current and completed industrial projects across Afghanistan',
        ps: 'دلته زموږ روان او بشپړ صنعتي پروژې وینئ'
    },

    // Hero
    'hero-title': {
        fa: 'چشم‌انداز شما، تخصص ما', 
        en: 'Your Vision, Our Expertise',
        ps: 'ستاسو لید، زموږ تخصص'
    },
    'hero-subtitle': {
        fa: 'راهکارهای صنعتی و راه‌اندازی فابریکه در افغانستان',
        en: 'Industrial Solutions & Factory Setup for Afghanistan',
        ps: 'صنعتي حل لارې او په افغانستان کې د فابریکو جوړول'
    },
    'hero-quote': { 
        fa: '«شما فقط ایده و سرمایه را بیاورید، ما از طراحی اولیه تا اولین محصول خروجی از خط تولید، تمام مسیر را مدیریت می‌کنیم.»', 
        en: '"You just bring the idea and capital, we manage the entire journey from initial design to the first product off the production line."',
        ps: '"تاسو یوازې نظره او پانګه راځئ، موږ لومړنی ډیزاین څخه تولید لینې څخه لومړنی محصول پورې ټوله سفر مدیریت کوو."'
    },
    'start-cooperation': { fa: 'شروع همکاری', en: 'Start Cooperation', ps: 'همکاري پیل کړئ' },
    'view-services': { fa: 'مشاهده خدمات', en: 'View Services', ps: 'خدمتونه وګورئ' },
    'view-production-lines': { fa: 'مشاهده خطوط تولید', en: 'View Production Lines', ps: 'د تولید لینونه وګورئ' },
    
    // Search
    'search-title': { 
        fa: 'دستگاه یا کالای مورد نظرتان را بین دسته بندی صنعتی', 
        en: 'Search for your desired equipment or goods among industrial categories',
        ps: 'خپل غوښتلي تجهیزات یا توکي د صنعتي ک٫ګوریو څخه ولټوئ'
    },
    'search-subtitle': { 
        fa: 'جستجو کنید و بهترین ها را بیابید.', 
        en: 'Search and find the best.',
        ps: 'ولټوئ او غوره ومومئ.'
    },
    'search-placeholder': { 
        fa: 'دنبال چه محصولی هستید؟', 
        en: 'What product are you looking for?',
        ps: 'تاسو څه محصول لټوئ؟'
    },
    'search-btn': { fa: 'جستجو', en: 'Search', ps: 'لټون' },
    'popular-categories': { 
        fa: 'دسته‌بندی‌های محبوب:', 
        en: 'Popular Categories:',
        ps: 'مشهور ک٫ګوري:'
    },
    'cat-plastic': { fa: 'بازیافت پلاستیک', en: 'Plastic Recycling', ps: 'پلاستیک بیاګرځول' },
    'cat-construction': { fa: 'مصالح ساختمانی', en: 'Construction Materials', ps: 'د ساختماني مواد' },
    'cat-printing': { fa: 'چاپ', en: 'Printing', ps: 'چاپ' },
    'cat-metallurgy': { fa: 'متالورژی', en: 'Metallurgy', ps: 'د فلزاتو علم' },
    'cat-production': { fa: 'خط تولید', en: 'Production Lines', ps: 'تولید لینې' },
    'cat-electronic': { fa: 'الکترونیکی', en: 'Electronic', ps: 'الکترونیک' },
    
    // Services
    'services-title': { 
        fa: 'دامنه خدمات جامع ما', 
        en: 'Our Comprehensive Service Range',
        ps: 'زموږ د بشپړ خدمت ساحه'
    },
    'services-subtitle': { 
        fa: 'خدمات جامع ما در چهار فاز اصلی و به هم پیوسته ارائه می‌شود', 
        en: 'Our comprehensive services are delivered in four main interconnected phases',
        ps: 'زموږ د بشپړ خدمتونه په څلور اصلي او یو له بل سره تړلي فازونو کې وړاندیز کیږي'
    },
    'phase1-title': { fa: 'فاز 1', en: 'Phase 1', ps: 'فاز 1' },
    'phase1-subtitle': { fa: 'مهندسی و طراحی', en: 'Engineering & Design', ps: 'انجنیري او ډیزاین' },
    'phase1-desc': { fa: 'از ایده تا نقشه', en: 'From Idea to Blueprint', ps: 'له نظره څخه نقشه پورې' },
    'phase1-details': { 
        fa: 'مشاوره و امکان‌سنجی فنی و اقتصادی، طراحی مفهومی و پایه خط تولید', 
        en: 'Technical and economic consultation and feasibility, conceptual and basic production line design',
        ps: 'تخنیکي او اقتصادي مشوره او امکان سنجي، مفهومي او بنسټیز تولید لین ډیزاین'
    },
    'phase2-title': { fa: 'فاز 2', en: 'Phase 2', ps: 'فاز 2' },
    'phase2-subtitle': { fa: 'تأمین و لجستیک جهانی', en: 'Global Sourcing & Logistics', ps: 'نړیوال تامین او لجستیک' },
    'phase2-desc': { fa: 'از کارخانه مبدأ تا سایت شما', en: 'From Source Factory to Your Site', ps: 'د سرچینې کارخونه څخه تر ستاسو پاڼې پورې' },
    'phase2-details': { 
        fa: 'شناسایی و اعتبارسنجی تأمین‌کنندگان جهانی، مدیریت کامل فرآیند خرید', 
        en: 'Identifying and verifying global suppliers, complete procurement process management',
        ps: 'نړیوال تامین کوونکی پیژندل او تایید، د پیرود بشپړ پروسه مدیریت'
    },
    'phase3-title': { fa: 'فاز 3', en: 'Phase 3', ps: 'فاز 3' },
    'phase3-subtitle': { fa: 'اجرا و ساخت', en: 'Implementation & Construction', ps: 'اجرا او جوړونه' },
    'phase3-desc': { fa: 'از نقشه تا واقعیت', en: 'From Blueprint to Reality', ps: 'له نقشه څخه واقعیت ته' },
    'phase3-details': { 
        fa: 'مدیریت پروژه و نظارت بر ساخت‌وساز، تأمین و تحویل کلیه ماشین‌آلات', 
        en: 'Project management and construction supervision, procurement and delivery of all machinery',
        ps: 'د پروژې مدیریت او د جوړښت نظارت، د ټولو ماشینونو تامین او تحویل'
    },
    'phase4-title': { fa: 'فاز 4', en: 'Phase 4', ps: 'فاز 4' },
    'phase4-subtitle': { fa: 'راه‌اندازی و پشتیبانی', en: 'Commissioning & Support', ps: 'پیل او ملاتړ' },
    'phase4-desc': { fa: 'از اولین محصول تا تولید پایدار', en: 'From First Product to Sustainable Production', ps: 'له لومړي محصول څخه په دوامداره تولید پورې' },
    'phase4-details': { 
        fa: 'پیش‌راه‌اندازی و تست‌های نهایی، آموزش کامل تیم فنی و اپراتورها', 
        en: 'Pre-commissioning and final testing, complete training of technical team and operators',
        ps: 'مخکې پیل او پایلي ازمویښت، د تخنیکي ډلې او اپراتورانو بشپړ روزنه'
    },
    
    // Categories
    'categories-title': { fa: 'دسته بندی ها', en: 'Categories', ps: 'کټګوري' },
    'categories-subtitle': {
        fa: 'از لیست دسته بندی ها به محصولات مورد نظر خود دسترسی پیدا کنید',
        en: 'Access your desired products from the category list',
        ps: 'د کټګوري لیست څخه خپل غوښتلي محصولاتو ته لاسرسی پیدا کړئ'
    },
    'production-lines-categories-title': {
        fa: 'گروه‌های خطوط تولید',
        en: 'Production Line Groups',
        ps: 'د تولید لینونو ډلې'
    },
    'production-lines-categories-subtitle': {
        fa: 'صنایع کلیدی را انتخاب کنید تا خطوط تولید و فایل‌های فنی مرتبط نمایش داده شود',
        en: 'Select a key industry to view the related production lines and technical PDFs',
        ps: 'کلیدي صنعت وټاکئ تر څو اړوند تولیدي لینونه او تخنیکي PDF فایلونه ښکاره شي'
    },
    'cat-production-lines': { fa: 'خطوط تولید و راه‌اندازی فابریکه', en: 'Production Lines & Factory Setup', ps: 'د تولید لینونه او د فابریکې جوړول' },
    'cat-printing-machines': { fa: 'دستگاه های چاپ', en: 'Printing Machines', ps: 'چاپ ماشینونه' },
    'cat-sports-equipment': { fa: 'تجهیزات ورزشی', en: 'Sports Equipment', ps: 'ورزشي تجهیزات' },
    'cat-metallurgy-full': { fa: 'متالورژی و فلزکاری', en: 'Metallurgy & Metalworking', ps: 'د فلزاتو علم او فلزکاري' },
    'cat-construction-materials': { fa: 'ماشین آلات مصالح ساخت', en: 'Construction Materials Machinery', ps: 'د ساختماني موادو ماشینونه' },
    'cat-plastic-processing': { fa: 'دستگاه های فرآوری پلاستیک', en: 'Plastic Processing Machines', ps: 'د پلاستیک پروسس ماشینونه' },
    'cat-paint-coating': { fa: 'ماشین آلات رنگ و کوتینگ', en: 'Paint & Coating Machinery', ps: 'د رنګ او پوښښت ماشینونه' },
    'cat-foam-sponge': { fa: 'ماشین آلات لوم و اسفنج', en: 'Foam & Sponge Machinery', ps: 'د فوم او اسفنج ماشینونه' },
    'cat-tobacco': { fa: 'ماشین آلات تناکو و سیگار', en: 'Tobacco & Cigarette Machinery', ps: 'د توتون او سیګر ماشینونه' },
    'cat-cooling-heating': { fa: 'دستگاه های سرمایش و گرمایش', en: 'Cooling & Heating Equipment', ps: 'د سړښت او تودوخه تجهیزات' },
    'cat-pumps-compressors': { fa: 'پمپ ها و کمپرسور ها صنعتی', en: 'Industrial Pumps & Compressors', ps: 'د صنعت پمپونه او کمپرسورونه' },
    'cat-industrial-laser': { fa: 'لیزر صنعتی', en: 'Industrial Laser', ps: 'صنعت لیزر' },
    'cat-tanks': { fa: 'مخازن', en: 'Tanks', ps: 'تنکونه' },
    'cat-packaging': { fa: 'بسته بندی', en: 'Packaging', ps: 'بسته بندي' },
    'cat-chemical-pharma': { fa: 'ماشین آلات شیمیایی و دارویی', en: 'Chemical & Pharmaceutical Machinery', ps: 'د کیمیاوي او درملو ماشینونه' },
    'cat-machinery-parts': { fa: 'پرزه‌جات ماشین‌آلات', en: 'Machinery Spare Parts', ps: 'د ماشینونو پرزې' },
    'cat-paper-pulp': { fa: 'ماشین آلات کاغذ و سلولوز', en: 'Paper & Pulp Machinery', ps: 'د کاغذ او پالپ ماشینونه' },
    'cat-electronic-machinery': { fa: 'ماشین آلات الکترونیکی', en: 'Electronic Machinery', ps: 'د الکترونیک ماشینونه' },
    'cat-telecom-parts': { fa: 'قطعات و لوازم اینترنتی و مخابراتی', en: 'Internet & Telecommunication Parts', ps: 'د انترنت او مخابراتي برخې' },
    'cat-second-hand': { fa: 'ماشین آلات دست دوم', en: 'Second Hand Machinery', ps: 'د دوهم لاس ماشینونه' },
    
    // CTA
    'cta-title': {
        fa: 'قول ما در صنعتچی ساده است',
        en: 'Our Promise at Sanaatchi is Simple',
        ps: 'زموږ په صنعتچي کې ژمنه ساده ده'
    },
    'cta-subtitle': {
        fa: 'شما چشم‌انداز را مشخص کنید، ما مسیر تحقق آن را از طراحی تا تولید هموار می‌کنیم',
        en: 'You define the vision; we pave the path from design to first production',
        ps: 'تاسو لید ټاکئ، موږ له ډیزاین څخه تر تولید پورې ټول ګامونه هوار کوو'
    },
    
    // Why Sanaatchi
    'why-title': { fa: 'چرا صنعتچی؟', en: 'Why Sanaatchi?', ps: 'ولې صنعتچي؟' },
    'why-subtitle': {
        fa: 'مزایای همکاری با شرکت چشم‌انداز صنعتی صنعتچی',
        en: 'Benefits of partnering with Sanaatchi Industrial Vision',
        ps: 'له صنعتچي صنعتي لید سره د همکارۍ ګټې'
    },
    'why-trust': { fa: 'اعتماد مشتریان', en: 'Customer Trust', ps: 'د پیرودونکی اعتماد' },
    'why-trust-desc': { 
        fa: 'سابقه درخشان ما در اجرای موفق پروژه‌ها، بزرگترین تضمین برای آرامش خاطر شماست.', 
        en: 'Our brilliant track record in successful project execution is the greatest guarantee for your peace of mind.',
        ps: 'د بریالیتوب پروژو په بریالیتوب کې زموږ درخشان تاریخ، د ستاسو د آرامۍ لپاره لوی تضمین دی.'
    },
    'why-transparency': { fa: 'شفافیت و قیمت رقابتی', en: 'Transparency and Competitive Pricing', ps: 'شفافیت او سیال قیمت' },
    'why-transparency-desc': { 
        fa: 'ما با ارائه تحلیل دقیق هزینه‌ها و قیمت‌های رقابتی، فرآیند تصمیم‌گیری را برای شما آسان و شفاف می‌سازیم.', 
        en: 'We make your decision-making process easy and transparent by providing detailed cost analysis and competitive prices.',
        ps: 'موږ د دقیق لګښت تحلیل او سیال قیمتونو وړاندیز کولو سره ستاسو د پرېکړې پروسه اسانه او شفاف کوو.'
    },
    'why-timeline': { fa: 'تعهد به زمان‌بندی', en: 'Commitment to Timelines', ps: 'د وخت جدولې ته ژمنه' },
    'why-timeline-desc': { 
        fa: 'ما برای وقت شما ارزش قائلیم و متعهد به تکمیل و تحویل پروژه‌ها در کوتاه‌ترین زمان ممکن هستیم.', 
        en: 'We value your time and are committed to completing and delivering projects in the shortest possible time.',
        ps: 'موږ د ستاسو وخت ارزګارو او په لنډه کې ممکن وخت کې د پروژو بشپړولو او تحویل ته ژمن یو.'
    },
    'why-network': { fa: 'شبکه تامین جهانی', en: 'Global Supply Network', ps: 'نړیوال تامین شبکه' },
    'why-network-desc': { 
        fa: 'با پیگیری مستمر و ارتباط مستقیم با معتبرترین تامین‌کنندگان جهانی، کیفیت و اصالت تجهیزات شما را تضمین می‌کنیم.', 
        en: 'We guarantee the quality and authenticity of your equipment through continuous follow-up and direct communication with the most reputable global suppliers.',
        ps: 'د پیروي دوامداره او د معتبر نړیوال تامین کوونکو سره مستقیم اړیکې له لارې، موږ د ستاسو تجهیزاتو کیفیت او اصالت تضمین کوو.'
    },
    
    // Footer
    'footer-description': {
        fa: 'شرکت چشم‌انداز صنعتی صنعتچی با سال‌ها تجربه در ارائه راهکارهای صنعتی، از مشاوره تا راه‌اندازی فابریکه در کنار شماست و تمام مراحل پروژه‌های صنعتی را مدیریت می‌کند.',
        en: 'Sanaatchi Industrial Vision combines years of experience delivering industrial solutions, supporting you from consultation to factory commissioning across every project stage.',
        ps: 'صنعتچي صنعتي لید د صنعتي حل لارو په وړاندې کولو کې د کلونو تجربې سره، له سلا مشورې څخه تر د فابریکې فعالولو پورې له تاسو سره ولاړ دی او د پروژو ټول پړاوونه سمبالوي.'
    },
    'newsletter-title': { fa: 'عضویت در خبرنامه', en: 'Newsletter Subscription', ps: 'خبرنامه اشتراک' },
    'newsletter-subtitle': { 
        fa: 'برای دریافت آخرین اخبار و به‌روزرسانی‌ها عضو خبرنامه ما شوید.', 
        en: 'Subscribe to our newsletter to receive the latest news and updates.',
        ps: 'د وروستی خبرونو او تازه معلوماتو ترلاسه کولو لپاره زموږ د خبرنامې غړی شئ.'
    },
    'newsletter-placeholder': { 
        fa: 'آدرس ایمیل خود را وارد کنید', 
        en: 'Enter your email address',
        ps: 'خپل بریښنالیک پته ننوئ'
    },
    'newsletter-btn': { fa: 'عضویت', en: 'Subscribe', ps: 'اشتراک' },
    'afghanistan-office': { fa: 'دفتر افغانستان', en: 'Afghanistan Office', ps: 'د افغانستان دفتر' },
    'afghanistan-address': { fa: 'کابل، افغانستان', en: 'Kabul, Afghanistan', ps: 'کابل، افغانستان' },
    'afghanistan-phone': { fa: '+93 779 819 820', en: '+93 779 819 820', ps: '+93 779 819 820' },
    'afghanistan-hours': {
        fa: 'شنبه تا پنجشنبه: ۹:۰۰ تا ۱۸:۰۰',
        en: 'Saturday to Thursday: 9:00 to 18:00',
        ps: 'له شنبې تر پنجشنبې: ۹:۰۰ تر ۱۸:۰۰'
    },
    'afghanistan-hours1': { 
        fa: 'شنبه تا چهارشنبه: ۹:۰۰ تا ۱۷:۰۰', 
        en: 'Saturday to Wednesday: 9:00 to 17:00',
        ps: 'شنبه څخه چوارشنبه پورې: ۹:۰۰ څخه ۱۷:۰۰ پورې'
    },
    'afghanistan-hours2': { 
        fa: 'پنج‌شنبه: ۹:۰۰ تا ۱۳:۰۰', 
        en: 'Thursday: 9:00 to 13:00',
        ps: 'پنجشنبه: ۹:۰۰ څخه ۱۳:۰۰ پورې'
    },
    'china-office': { fa: 'دفتر چین', en: 'China Office', ps: 'د چین دفتر' },
    'china-address': { fa: 'چین', en: 'China', ps: 'چین' },
    'china-phone': { fa: '+86 159 5171 6867', en: '+86 159 5171 6867', ps: '+86 159 5171 6867' },
    'china-hours': { 
        fa: 'شنبه تا جمعه: ۹:۰۰ تا ۱۸:۰۰', 
        en: 'Saturday to Friday: 9:00 to 18:00',
        ps: 'شنبه څخه جمعه پورې: ۹:۰۰ څخه ۱۸:۰۰ پورې'
    },
    'copyright': {
        fa: '&copy; 2024 Sanaatchi Industrial Vision. تمامی حقوق محفوظ است.',
        en: '&copy; 2024 Sanaatchi Industrial Vision. All rights reserved.',
        ps: '&copy; 2024 Sanaatchi Industrial Vision. ټول حقونه خوندي دي.'
    },
    
    // New translation for the search result button
    'view-related-equipment': {
        fa: 'مشاهده تجهیزات مرتبط',
        en: 'View Related Equipment',
        ps: 'اړوند تجهیزات وګورئ'
    }
});

// Function to format phone number for href
function formatPhoneNumberForHref(phoneNumber) {
    // Remove all non-digit characters except the leading +
    return phoneNumber.replace(/[^0-9+]/g, '');
}

// Function to get WhatsApp URL from phone number
function getWhatsAppUrl(phoneNumber) {
    // Remove all non-digit characters including the +
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}`;
}

// Function to validate email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

function closeMobileMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.remove('active');
}

// Language switching
function switchLanguage(lang) {
    currentLanguage = lang;
    const html = document.documentElement;
    const body = document.body;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    if (lang === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.style.direction = 'ltr';
        body.style.textAlign = 'left';
        
        // Update all translatable elements
        updateTranslations('en');
        
    } else if (lang === 'ps') {
        html.setAttribute('lang', 'ps');
        html.setAttribute('dir', 'rtl');
        body.style.direction = 'rtl';
        body.style.textAlign = 'right';
        
        // Update all translatable elements
        updateTranslations('ps');
        
    } else {
        html.setAttribute('lang', 'fa');
        html.setAttribute('dir', 'rtl');
        body.style.direction = 'rtl';
        body.style.textAlign = 'right';
        
        // Update all translatable elements
        updateTranslations('fa');
        
    }
    
    // Update the language selector to reflect the current language
    document.querySelector('.language-switcher').value = lang;
}

// Function to update translations without page reload
function updateTranslations(lang) {
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[key] && translations[key][lang]) {
            element.setAttribute('placeholder', translations[key][lang]);
        }
    });
    
    // Update phone numbers
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (key === 'afghanistan-phone' && translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
            // Update href for phone link
            const phoneLink = element.closest('.phone-container').querySelector('.phone-link');
            if (phoneLink) {
                phoneLink.setAttribute('href', `tel:${formatPhoneNumberForHref(translations[key][lang])}`);
            }
            // Update href for WhatsApp link
            const whatsappLink = element.closest('.phone-container').querySelector('.whatsapp-link');
            if (whatsappLink) {
                whatsappLink.setAttribute('href', getWhatsAppUrl(translations[key][lang]));
            }
        }
        if (key === 'china-phone' && translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
            // Update href for phone link
            const phoneLink = element.closest('.phone-container').querySelector('.phone-link');
            if (phoneLink) {
                phoneLink.setAttribute('href', `tel:${formatPhoneNumberForHref(translations[key][lang])}`);
            }
            // Update href for WhatsApp link
            const whatsappLink = element.closest('.phone-container').querySelector('.whatsapp-link');
            if (whatsappLink) {
                whatsappLink.setAttribute('href', getWhatsAppUrl(translations[key][lang]));
            }
        }
    });

    if (typeof updateProductionLineCards === 'function') {
        updateProductionLineCards();
    }
    if (typeof updateProductionCategoryPage === 'function') {
        updateProductionCategoryPage();
    }
    if (typeof updateSecondHandPage === 'function') {
        updateSecondHandPage();
    }
    if (typeof updateCargoContent === 'function') {
        const metaTag = document.querySelector('meta[name="description"]');
        const originalContent = metaTag ? (metaTag.dataset.originalContent || metaTag.getAttribute('content') || '') : '';
        updateCargoContent();
        if (metaTag && lang === 'fa') {
            metaTag.setAttribute('content', originalContent);
        }
    }
    if (typeof updateProjectsContent === 'function') {
        updateProjectsContent();
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        closeMobileMenu();
    } else {
        closeMobileMenu();
        window.location.href = `index.html#${sectionId}`;
    }
}

function goToIndex(event, sectionId) {
    if (event) {
        event.preventDefault();
    }
    closeMobileMenu();
    window.location.href = `index.html#${sectionId}`;
    return false;
}

function navigateToProductionLines() {
    window.location.href = 'production-lines.html';
}

function navigateToSecondHand() {
    window.location.href = 'second-hand.html';
}

// Show phase modal
function showPhaseModal(phase) {
    const modal = document.getElementById('phaseModal');
    const modalContent = document.getElementById('modalContent');
    const phaseData = phases[phase];
    
    if (phaseData) {
        const title = phaseData.title[currentLanguage];
        const subtitle = phaseData.subtitle[currentLanguage];
        const details = phaseData.details[currentLanguage];
        
        let detailsHtml = '<ul>';
        details.forEach(detail => {
            detailsHtml += `<li>${detail}</li>`;
        });
        detailsHtml += '</ul>';
        
        modalContent.innerHTML = `
            <div class="modal-icon">${phaseData.icon}</div>
            <h3>${title}</h3>
            <p>${subtitle}</p>
            ${detailsHtml}
        `;
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('phaseModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Show contact modal
function showContactModal() {
    const modal = document.getElementById('contactModal');
    const modalContent = document.getElementById('contactModalContent');
    
    const title = currentLanguage === 'fa' ? 'درخواست مشاوره رایگان' : 
                 currentLanguage === 'ps' ? 'رایگان مشوره غوښتنه' : 'Free Consultation Request';
    const nameLabel = currentLanguage === 'fa' ? 'نام و نام خانوادگی' : 
                     currentLanguage === 'ps' ? 'نوم او تخلص' : 'Full Name';
    const phoneLabel = currentLanguage === 'fa' ? 'شماره تماس' : 
                      currentLanguage === 'ps' ? 'اړیکه شمیره' : 'Phone Number';
    const emailLabel = currentLanguage === 'fa' ? 'ایمیل' : 
                      currentLanguage === 'ps' ? 'بریښنالیک' : 'Email';
    const descLabel = currentLanguage === 'fa' ? 'شرح درخواست' : 
                     currentLanguage === 'ps' ? 'د غوښتنه توضیح' : 'Request Description';
    const submitText = currentLanguage === 'fa' ? 'ارسال' : 
                      currentLanguage === 'ps' ? 'استول' : 'Submit';
    
    modalContent.innerHTML = `
        <div class="modal-icon">📞</div>
        <h3>${title}</h3>
        <form id="contactForm">
            <div style="margin-bottom: 15px;">
                <label>${nameLabel}:</label>
                <input type="text" style="width: 100%; padding: 8px; margin-top: 5px;" required>
            </div>
            <div style="margin-bottom: 15px;">
                <label>${phoneLabel}:</label>
                <input type="tel" style="width: 100%; padding: 8px; margin-top: 5px;" required>
            </div>
            <div style="margin-bottom: 15px;">
                <label>${emailLabel}:</label>
                <input type="email" style="width: 100%; padding: 8px; margin-top: 5px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>${descLabel}:</label>
                <textarea style="width: 100%; padding: 8px; margin-top: 5px; height: 100px;"></textarea>
            </div>
            <button type="submit" class="btn-primary" style="width: 100%;">${submitText}</button>
        </form>
    `;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    
    // Add form submission handler
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value.trim();
        const phone = this.querySelector('input[type="tel"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        
        // Validation
        if (!name || !phone) {
            const errorMsg = currentLanguage === 'fa' ? 'لطفاً نام و شماره تماس را وارد کنید' : 
                           currentLanguage === 'ps' ? 'مهرباني کړه نوم او اړیکه شمیره ننوئ' : 'Please enter name and phone number';
            alert(errorMsg);
            return;
        }
        
        // Email validation (if provided)
        if (email && !isValidEmail(email)) {
            const errorMsg = currentLanguage === 'fa' ? 'لطفاً یک ایمیل معتبر وارد کنید' : 
                           currentLanguage === 'ps' ? 'مهرباني کړه یو معتبر بریښنالیک ننوئ' : 'Please enter a valid email';
            alert(errorMsg);
            return;
        }
        
        // Success message
        const successMsg = currentLanguage === 'fa' ? 'درخواست شما با موفقیت ارسال شد.' : 
                         currentLanguage === 'ps' ? 'ستاسو غوښتنه په بریالیتوب استول شوه.' : 'Your request has been submitted successfully.';
        alert(successMsg);
        closeContactModal();
    });
}

// Close contact modal
function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Show sales contact modal
function showSalesContactModal() {
    const modal = document.getElementById('salesContactModal');
    const modalContent = document.getElementById('salesContactModalContent');
    
    const title = currentLanguage === 'fa' ? 'تماس با بخش فروش' : 
                 currentLanguage === 'ps' ? 'د پلور برخې سره اړیکه' : 'Contact Sales Department';
    const subtitle = currentLanguage === 'fa' ? 'برای شروع همکاری با ما، لطفاً با یکی از دفاتر ما تماس بگیرید' : 
                    currentLanguage === 'ps' ? 'د موږ سره د همکاري پیل لپاره، مهرباني کړه د موږ د یو دفتر سره اړیکه ونیسئ' : 'To start cooperation with us, please contact one of our offices';
    const afghanistanOffice = currentLanguage === 'fa' ? 'دفتر افغانستان' : 
                             currentLanguage === 'ps' ? 'د افغانستان دفتر' : 'Afghanistan Office';
    const chinaOffice = currentLanguage === 'fa' ? 'دفتر چین' : 
                        currentLanguage === 'ps' ? 'د چین دفتر' : 'China Office';
    const backText = currentLanguage === 'fa' ? 'بازگشت' : 
                    currentLanguage === 'ps' ? 'بیرته' : 'Back';
    
    modalContent.innerHTML = `
        <div class="modal-icon">📞</div>
        <h3>${title}</h3>
        <p>${subtitle}</p>
        
        <div class="offices-container">
            <div class="office-box-modal">
                <h4><i class="fas fa-map-marker-alt"></i> ${afghanistanOffice}</h4>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <div class="phone-container">
                        <a href="tel:+93779819820" class="phone-link">+93 779 819 820</a>
                        <a href="https://wa.me/93779819820" target="_blank" class="whatsapp-link" title="WhatsApp" aria-label="واتساپ">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>info@sanaatchi.com</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-clock"></i>
                    <span>${currentLanguage === 'fa' ? 'شنبه تا چهارشنبه: ۹:۰۰ تا ۱۷:۰۰' : 
                          currentLanguage === 'ps' ? 'شنبه څخه چوارشنبه پورې: ۹:۰۰ څخه ۱۷:۰۰ پورې' : 
                          'Saturday to Wednesday: 9:00 to 17:00'}</span>
                </div>
            </div>
            
            <div class="office-box-modal">
                <h4><i class="fas fa-map-marker-alt"></i> ${chinaOffice}</h4>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <div class="phone-container">
                        <a href="tel:+8615951716867" class="phone-link">+86 159 5171 6867</a>
                        <a href="https://wa.me/8615951716867" target="_blank" class="whatsapp-link" title="WhatsApp" aria-label="واتساپ">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>china@sanaatchi.com</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-clock"></i>
                    <span>${currentLanguage === 'fa' ? 'شنبه تا جمعه: ۹:۰۰ تا ۱۸:۰۰' : 
                          currentLanguage === 'ps' ? 'شنبه څخه جمعه پورې: ۹:۰۰ څخه ۱۸:۰۰ پورې' : 
                          'Saturday to Friday: 9:00 to 18:00'}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-buttons">
            <button class="btn-primary" onclick="closeSalesContactModal()">${backText}</button>
        </div>
    `;
    
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

// Close sales contact modal
function closeSalesContactModal() {
    const modal = document.getElementById('salesContactModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Perform search
function performSearch(searchTerm) {
    const searchInput = document.getElementById('searchInput');
    const modal = document.getElementById('searchResultModal');
    const modalContent = document.getElementById('searchResultModalContent');
    
    // If searchTerm is not provided, get it from the search input
    if (!searchTerm) {
        searchTerm = searchInput.value.trim();
    }
    
    if (!searchTerm) {
        const errorMsg = currentLanguage === 'fa' ? 'لطفاً یک عبارت برای جستجو وارد کنید' : 
                       currentLanguage === 'ps' ? 'مهرباني کړه د لټون لپاره یوه جمله ننوئ' : 'Please enter a term to search';
        alert(errorMsg);
        return;
    }
    
    // Find matching categories
    const matchingCategories = [];
    
    for (const [categoryId, keywords] of Object.entries(categoryKeywords)) {
        for (const keyword of keywords) {
            if (keyword.toLowerCase().includes(searchTerm.toLowerCase())) {
                matchingCategories.push({
                    id: categoryId,
                    category: categories[categoryId]
                });
                break;
            }
        }
    }
    
    // Prepare modal content
    const title = currentLanguage === 'fa' ? 'نتایج جستجو' : 
                 currentLanguage === 'ps' ? 'د لټون پایلې' : 'Search Results';
    const subtitle = currentLanguage === 'fa' ? `برای "${searchTerm}" یافت شد:` : 
                     currentLanguage === 'ps' ? `"${searchTerm}" لپاره وموندل:` : `Found for "${searchTerm}":`;
    const noResults = currentLanguage === 'fa' ? 'هیچ نتیجه‌ای یافت نشد' : 
                    currentLanguage === 'ps' ? 'هڅه پایله ونه موندل شوه' : 'No results found';
    const viewText = currentLanguage === 'fa' ? 'مشاهده' : 
                    currentLanguage === 'ps' ? 'لیدل' : 'View';
    const backText = currentLanguage === 'fa' ? 'بازگشت' : 
                    currentLanguage === 'ps' ? 'بیرته' : 'Back';
    
    let contentHtml = `
        <div class="modal-icon">🔍</div>
        <h3>${title}</h3>
        <p>${subtitle}</p>
    `;
    
    if (matchingCategories.length > 0) {
        contentHtml += '<div class="search-results">';
        matchingCategories.forEach(match => {
            contentHtml += `
                <div class="search-result-item">
                    <h4>${match.category.title[currentLanguage]}</h4>
                    <p>${match.category.description[currentLanguage]}</p>
                    <button class="btn-primary" onclick="showRelatedEquipments('${match.id}')">${viewText}</button>
                </div>
            `;
        });
        contentHtml += '</div>';
    } else {
        contentHtml += `<p>${noResults}</p>`;
        
        // Add search suggestions
        const suggestionsTitle = currentLanguage === 'fa' ? 'پیشنهادات جستجو:' : 
                                 currentLanguage === 'ps' ? 'د لټون وړاندیزونه:' : 'Search Suggestions:';
        contentHtml += `<div class="search-suggestions"><h4>${suggestionsTitle}</h4>`;
        
        contentHtml += '<div class="suggestion-tags">';
        const popularCategories = [
            { id: 'production-lines', key: 'cat-production' },
            { id: 'printing-machines', key: 'cat-printing' },
            { id: 'metallurgy', key: 'cat-metallurgy' },
            { id: 'construction-materials', key: 'cat-construction' },
            { id: 'plastic-processing', key: 'cat-plastic' }
        ];
        
        popularCategories.forEach(cat => {
            const catName = translations[cat.key][currentLanguage];
            contentHtml += `<span class="suggestion-tag" onclick="performSearch('${catName}')">${catName}</span>`;
        });
        
        contentHtml += '</div></div>';
    }
    
    contentHtml += `
        <div class="modal-buttons">
            <button class="btn-primary" onclick="closeSearchResultModal()">${backText}</button>
        </div>
    `;
    
    modalContent.innerHTML = contentHtml;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

// Close search result modal
function closeSearchResultModal() {
    const modal = document.getElementById('searchResultModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Show related equipments modal (replaces showCategoryModal)
function showRelatedEquipments(categoryId) {
    const modal = document.getElementById('equipmentModal');
    const modalContent = document.getElementById('equipmentModalContent');
    const categoryData = categories[categoryId];
    
    if (categoryData) {
        const title = categoryData.title[currentLanguage];
        const backText = currentLanguage === 'fa' ? 'بازگشت' : 
                        currentLanguage === 'ps' ? 'بیرته' : 'Back';
        
        // Get equipment data for this category
        let categoryEquipmentData = equipmentData[categoryId] || [];

        if (categoryId === 'production-lines' && typeof productionLines !== 'undefined') {
            const aggregated = [];

            if (typeof productionLineGroups !== 'undefined') {
                productionLineGroups.forEach(group => {
                    const lines = (productionLines[group.id] && productionLines[group.id].lines) || [];
                    lines.forEach(line => {
                        aggregated.push({
                            name: line.title,
                            description: line.description,
                            pdfUrl: line.pdfUrl
                        });
                    });
                });
            } else {
                Object.values(productionLines).forEach(group => {
                    (group.lines || []).forEach(line => {
                        aggregated.push({
                            name: line.title,
                            description: line.description,
                            pdfUrl: line.pdfUrl
                        });
                    });
                });
            }

            if (aggregated.length > 0) {
                categoryEquipmentData = aggregated;
            }
        }

        let equipmentHtml = '';
        if (categoryEquipmentData.length > 0) {
            equipmentHtml = '<div class="equipment-grid">';
            categoryEquipmentData.forEach(item => {
                equipmentHtml += `
                    <div class="equipment-card">
                        <div class="equipment-icon">📄</div>
                        <h4>${item.name[currentLanguage]}</h4>
                        <p>${item.description[currentLanguage]}</p>
                        <div class="equipment-actions">
                            <a href="${item.pdfUrl}" target="_blank" class="btn-primary">
                                <i class="fas fa-file-pdf"></i> ${currentLanguage === 'fa' ? 'مشاهده PDF' : 
                                                              currentLanguage === 'ps' ? 'PDF وګورئ' : 'View PDF'}
                            </a>
                            <a href="${item.pdfUrl}" download class="btn-secondary">
                                <i class="fas fa-download"></i> ${currentLanguage === 'fa' ? 'دانلود' : 
                                                              currentLanguage === 'ps' ? 'ډاونلوډ' : 'Download'}
                            </a>
                        </div>
                    </div>
                `;
            });
            equipmentHtml += '</div>';
        } else {
            const noEquipmentText = currentLanguage === 'fa' ? 'هیچ تجهیزاتی در این دسته‌بندی یافت نشد' : 
                                  currentLanguage === 'ps' ? 'هڅه تجهیزات په دې کټګوري کې ونه موندل شوه' : 'No equipment found in this category';
            equipmentHtml = `<div class="no-equipment">${noEquipmentText}</div>`;
        }
        
        modalContent.innerHTML = `
            <div class="equipment-modal-header">
                <button class="back-btn" onclick="closeEquipmentModal()">${backText}</button>
                <h3>${title}</h3>
            </div>
            ${equipmentHtml}
        `;
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }
}

// Close equipment modal
function closeEquipmentModal() {
    const modal = document.getElementById('equipmentModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'fa' || savedLanguage === 'en' || savedLanguage === 'ps')) {
        switchLanguage(savedLanguage);
    }
    
    // Add event listener for newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value.trim();
            
            // Email validation
            if (!email) {
                const errorMsg = currentLanguage === 'fa' ? 'لطفاً آدرس ایمیل خود را وارد کنید' : 
                               currentLanguage === 'ps' ? 'مهرباني کړه خپل بریښنالیک پته ننوئ' : 'Please enter your email address';
                alert(errorMsg);
                return;
            }
            
            if (!isValidEmail(email)) {
                const errorMsg = currentLanguage === 'fa' ? 'لطفاً یک آدرس ایمیل معتبر وارد کنید' : 
                               currentLanguage === 'ps' ? 'مهرباني کړه یو معتبر بریښنالیک پته ننوئ' : 'Please enter a valid email address';
                alert(errorMsg);
                return;
            }
            
            // Success message
            const successMsg = currentLanguage === 'fa' ? 'شما با موفقیت در خبرنامه عضو شدید.' : 
                             currentLanguage === 'ps' ? 'تاسو په بریالیتوب سره د خبرنامې غړی شئ.' : 'You have successfully subscribed to the newsletter.';
            alert(successMsg);
            
            // Reset form
            this.reset();
        });
    }
    
    // Add event listener for search input (Enter key)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});