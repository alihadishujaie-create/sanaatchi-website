let currentLanguage = 'fa';
window.currentLanguage = currentLanguage;

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
    'metallurgy-coating': {
        icon: '🔩',
        title: {
            fa: 'متالورژی و کوتینگ صنعتی',
            en: 'Metallurgy & Coating Systems',
            ps: 'صنعتي متالورژي او پوښښ سیستمونه'
        },
        description: {
            fa: 'کوره‌های ذوب، خطوط نورد، گالوانیزه و رنگ صنعتی با طراحی مهندسی و نصب کامل.',
            en: 'Melting furnaces, rolling mills, galvanizing and industrial coating lines with full engineering and installation.',
            ps: 'د ذوب کوره ګانې، رولینګ ملونه، ګالوانایز او صنعتي پوښښ کرښې د بشپړ انجینري او نصب سره.'
        }
    },
    'mixing-equipments': {
        icon: '⚗️',
        title: {
            fa: 'تجهیزات میکسینگ و تانک‌سازی',
            en: 'Mixing Equipment & Process Tanks',
            ps: 'د مکسینګ تجهیزات او پروسې ټانکونه'
        },
        description: {
            fa: 'میکسرهای صنعتی، راکتورهای شیمیایی و تانک‌های ذخیره با طراحی سفارشی و نصب کامل برای تولید پیوسته.',
            en: 'Industrial mixers, chemical reactors and storage tanks delivered with custom engineering and turnkey installation for continuous production.',
            ps: 'صنعتي مکسېرونه، کیمیاوي ریکټورونه او د ذخیرې ټانکونه د دودیز انجینري او بشپړ نصب سره د دوامدار تولید لپاره.'
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
    'electronics-energy-systems': {
        icon: '⚡',
        title: {
            fa: 'الکترونیک و سیستم‌های انرژی',
            en: 'Electronics & Energy Systems',
            ps: 'برېښنایي او د انرژۍ سیستمونه'
        },
        description: {
            fa: 'راهکارهای مونتاژ PCB، تست، لیزر صنعتی، انرژی خورشیدی و بادی و شبکه برای کارخانه‌های افغانستان.',
            en: 'PCB assembly, testing, industrial laser, solar & wind energy and networking solutions for Afghan factories.',
            ps: 'د PCB اسمبلۍ، ټېسټ، صنعتي لېزر، لمریز او د باد انرژي او د شبکې حلونه د افغانستان فابریکو لپاره.'
        }
    },
    'plastic-industry': {
        icon: '🧴',
        title: {
            fa: 'صنعت پلاستیک و بازیافت',
            en: 'Plastic Industry & Recycling',
            ps: 'د پلاستیک صنعت او ریسایکل'
        },
        description: {
            fa: 'خطوط اکسترودر، تزریق و بازیافت پلاستیک با طراحی قالب، اتوماسیون و خدمات پس از فروش کامل.',
            en: 'Extrusion, injection and recycling lines with tooling design, automation and full after-sales support.',
            ps: 'د اکسترودر، انجکشن او د پلاستیک ریسایکل لینونه د قالب ډیزاین، اتومات او بشپړ پلور وروسته ملاتړ سره.'
        }
    },
    'tires': {
        icon: '🛞',
        title: {
            fa: 'تایرهای صنعتی و ناوگان',
            en: 'Industrial & Fleet Tyres',
            ps: 'صنعتي او ناوګان ټایرونه'
        },
        description: {
            fa: 'تایر تخصصی برای تریلر، کامیون، ماشین‌آلات سنگین، کشاورزی و وسایل صنعتی با خدمات نصب و بالانس.',
            en: 'Specialist tyres for trailers, trucks, heavy machinery, agricultural and industrial vehicles with installation and balancing services.',
            ps: 'د ټریلر، لاریو، درنو ماشینونو، کرنیزو او صنعتي وسایطو لپاره ځانګړي ټایرونه د نصب او بالانس خدمتونو سره.'
        }
    },
    'transportation': {
        icon: '🚛',
        title: {
            fa: 'ماشین آلات حمل‌ونقل',
            en: 'Transportation Machinery',
            ps: 'د ترانسپورت ماشینونه'
        },
        description: {
            fa: 'ناوگان تریلر، کامیون و لیفتراک با پشتیبانی فنی، لجستیک و آموزش برای عملیات حمل‌ونقل افغانستان.',
            en: 'Trailer, truck and forklift fleets delivered with engineering support, logistics and training for Afghan transport operations.',
            ps: 'د ټریلر، لارۍ او فورک لیفټ ناوګان د انجینري ملاتړ، لوژستیک او روزنې سره د افغانستان د ترانسپورت لپاره.'
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
    'paper-pulp': {
        icon: '📄',
        title: {
            fa: 'خطوط پالپ و کاغذ',
            en: 'Pulp & Paper Lines',
            ps: 'د پالپ او کاغذ کرښې'
        },
        description: {
            fa: 'خطوط خمیرسازی، ماشین کاغذ و تبدیل نهایی با مهندسی، نصب و پشتیبانی کامل برای کارخانجات کاغذ.',
            en: 'Pulping, paper machine and converting lines delivered with engineering, installation and full operational support.',
            ps: 'د خمیر جوړولو، د کاغذ ماشین او د بدلون کرښې د انجینري، نصب او بشپړ عملیاتي ملاتړ سره وړاندې کېږي.'
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
    },
    'industrial-raw-materials': {
        icon: '⛏️',
        title: {
            fa: 'مواد اولیه صنعتی',
            en: 'Industrial Raw Materials',
            ps: 'صنعتي خام مواد'
        },
        description: {
            fa: 'فولاد، پلیمر، مواد شیمیایی و مواد معدنی استاندارد جهانی برای تغذیه خطوط تولید افغانستان.',
            en: 'Global-standard steel, polymers, chemicals and minerals to feed Afghan production lines.',
            ps: 'نړیوال معیار لرونکي فولاد، پولیمرونه، کیمیاوي او معدني مواد د افغانستان د تولید لینونو لپاره.'
        }
    }
};

const secondHandDefaultDescription = {
    fa: 'برای مشخصات فنی کامل، فایل PDF ضمیمه را بررسی کنید.',
    en: 'Refer to the attached PDF dossier for detailed specifications.',
    ps: 'د بشپړو تخنیکي ځانګړنو لپاره ضمیمه PDF وګورئ.'
};

const secondHandCatalog = {
    'printing-machines': {
        icon: '🖨️',
        title: {
            fa: 'ماشین‌آلات چاپ دست دوم',
            en: 'Second-Hand Printing Machines',
            ps: 'د چاپ دوهم لاس ماشینونه'
        },
        description: {
            fa: 'انتخابی از دستگاه‌های افست، دیجیتال و فلکسو که بازبینی فنی شده‌اند و آماده نصب می‌باشند.',
            en: 'Curated offset, digital, and flexo presses inspected and ready for installation.',
            ps: 'د افست، ډیجیټل او فلیکسو تایید شوي چاپ ماشینونه چې د نصب لپاره چمتو دي.'
        },
        items: [
            {
                id: 'offset-printing-machine',
                name: {
                    fa: 'ماشین چاپ افست دست دوم',
                    en: 'Second-Hand Offset Printing Machine',
                    ps: 'دوهم ځل افست چاپ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/printing-machines/offset-printing-machine.pdf'
            },
            {
                id: 'digital-printing-machine',
                name: {
                    fa: 'ماشین چاپ دیجیتال دست دوم',
                    en: 'Second-Hand Digital Printing Machine',
                    ps: 'دوهم ځل ډیجیټل چاپ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/printing-machines/digital-printing-machine.pdf'
            },
            {
                id: 'flexo-printing-machine',
                name: {
                    fa: 'ماشین چاپ فلکسو دست دوم',
                    en: 'Second-Hand Flexo Printing Machine',
                    ps: 'دوهم ځل فلکسو چاپ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/printing-machines/flexo-printing-machine.pdf'
            }
        ]
    },
    'plastic-processing': {
        icon: '♻️',
        title: {
            fa: 'ماشین‌آلات فرآوری پلاستیک دست دوم',
            en: 'Second-Hand Plastic Processing Machinery',
            ps: 'د پلاستیک د پروسس دوهم لاس ماشینونه'
        },
        description: {
            fa: 'اکسترودر، تزریق، دمشی و خطوط بازیافت با گزارش سلامت کامل.',
            en: 'Extruders, injection, blow moulding, and recycling lines with full inspection reports.',
            ps: 'اکسترودرونه، انجکشن، بلو مولډینګ او د بیا کارونې لینونه د بشپړ تفتیش راپورونو سره.'
        },
        items: [
            {
                id: 'extruder-machine',
                name: {
                    fa: 'ماشین اکسترودر دست دوم',
                    en: 'Second-Hand Extruder Machine',
                    ps: 'دوهم ځل اکسترودر ماشین'
                },
                pdfUrl: 'pdfs/second-hand/plastic-processing/extruder-machine.pdf'
            },
            {
                id: 'injection-molding-machine',
                name: {
                    fa: 'ماشین تزریق دست دوم',
                    en: 'Second-Hand Injection Moulding Machine',
                    ps: 'دوهم ځل انجکشن ماشین'
                },
                pdfUrl: 'pdfs/second-hand/plastic-processing/injection-molding-machine.pdf'
            },
            {
                id: 'blow-molding-machine',
                name: {
                    fa: 'ماشین دمشی دست دوم',
                    en: 'Second-Hand Blow Moulding Machine',
                    ps: 'دوهم ځل بلو مولډینګ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/plastic-processing/blow-molding-machine.pdf'
            },
            {
                id: 'plastic-recycling-line',
                name: {
                    fa: 'خط بازیافت پلاستیک دست دوم',
                    en: 'Second-Hand Plastic Recycling Line',
                    ps: 'دوهم ځل پلاستیک بیا کارول لین'
                },
                pdfUrl: 'pdfs/second-hand/plastic-processing/plastic-recycling-line.pdf'
            },
            {
                id: 'shredder-machine',
                name: {
                    fa: 'ماشین خردکن دست دوم',
                    en: 'Second-Hand Shredder Machine',
                    ps: 'دوهم ځل خوردګر ماشین'
                },
                pdfUrl: 'pdfs/second-hand/plastic-processing/shredder-machine.pdf'
            },
            {
                id: 'pelletizing-line',
                name: {
                    fa: 'خط پلت‌سازی دست دوم',
                    en: 'Second-Hand Pelletizing Line',
                    ps: 'دوهم ځل پلیټ لین'
                },
                pdfUrl: 'pdfs/second-hand/plastic-processing/pelletizing-line.pdf'
            }
        ]
    },
    'construction-machinery': {
        icon: '🏗️',
        title: {
            fa: 'ماشین‌آلات ساختمانی دست دوم',
            en: 'Second-Hand Construction Machinery',
            ps: 'د ساختماني دوهم لاس ماشینونه'
        },
        description: {
            fa: 'بیل مکانیکی، جرثقیل، لودر و تجهیزات راهسازی با پشتیبانی نصب مجدد.',
            en: 'Excavators, cranes, loaders, and roadwork equipment with recommissioning support.',
            ps: 'اکسکاویټرونه، کرینونه، لوډرونه او د سړک جوړونې تجهیزات د بیا فعالولو ملاتړ سره.'
        },
        items: [
            {
                id: 'excavator',
                name: {
                    fa: 'بیل مکانیکی دست دوم',
                    en: 'Second-Hand Excavator',
                    ps: 'دوهم ځل بیل مکانیکی'
                },
                pdfUrl: 'pdfs/second-hand/construction-machinery/excavator.pdf'
            },
            {
                id: 'mini-excavator',
                name: {
                    fa: 'بیل مکانیکی کوچک دست دوم',
                    en: 'Second-Hand Mini Excavator',
                    ps: 'دوهم ځل کوچنی بیل مکانیکی'
                },
                pdfUrl: 'pdfs/second-hand/construction-machinery/mini-excavator.pdf'
            },
            {
                id: 'loader',
                name: {
                    fa: 'لودر دست دوم',
                    en: 'Second-Hand Loader',
                    ps: 'دوهم ځل لودر'
                },
                pdfUrl: 'pdfs/second-hand/construction-machinery/loader.pdf'
            },
            {
                id: 'backhoe-loader',
                name: {
                    fa: 'لودر بکهو دست دوم',
                    en: 'Second-Hand Backhoe Loader',
                    ps: 'دوهم ځل بکهو لودر'
                },
                pdfUrl: 'pdfs/second-hand/construction-machinery/backhoe-loader.pdf'
            },
            {
                id: 'crane',
                name: {
                    fa: 'جرثقیل دست دوم',
                    en: 'Second-Hand Crane',
                    ps: 'دوهم ځل جرثقیل'
                },
                pdfUrl: 'pdfs/second-hand/construction-machinery/crane.pdf'
            },
            {
                id: 'tower-crane',
                name: {
                    fa: 'جرثقیل برجی دست دوم',
                    en: 'Second-Hand Tower Crane',
                    ps: 'دوهم ځل برجي جرثقیل'
                },
                pdfUrl: 'pdfs/second-hand/construction-machinery/tower-crane.pdf'
            },
            {
                id: 'mobile-crane',
                name: {
                    fa: 'جرثقیل متحرک دست دوم',
                    en: 'Second-Hand Mobile Crane',
                    ps: 'دوهم ځل متحرک جرثقیل'
                },
                pdfUrl: 'pdfs/second-hand/construction-machinery/mobile-crane.pdf'
            },
            {
                id: 'concrete-mixer',
                name: {
                    fa: 'بتن‌ساز دست دوم',
                    en: 'Second-Hand Concrete Mixer',
                    ps: 'دوهم ځل بټن جوړونکی'
                },
                pdfUrl: 'pdfs/second-hand/construction-machinery/concrete-mixer.pdf'
            },
            {
                id: 'road-roller',
                name: {
                    fa: 'غلتک دست دوم',
                    en: 'Second-Hand Road Roller',
                    ps: 'دوهم ځل غلتک'
                },
                pdfUrl: 'pdfs/second-hand/construction-machinery/road-roller.pdf'
            },
            {
                id: 'asphalt-paver',
                name: {
                    fa: 'آسفالت‌پخش‌کن دست دوم',
                    en: 'Second-Hand Asphalt Paver',
                    ps: 'دوهم ځل اسفالت پخشونکی'
                },
                pdfUrl: 'pdfs/second-hand/construction-machinery/asphalt-paver.pdf'
            }
        ]
    },
    'metallurgy-equipment': {
        icon: '⚙️',
        title: {
            fa: 'تجهیزات متالورژی دست دوم',
            en: 'Second-Hand Metallurgy Equipment',
            ps: 'د متالورژۍ دوهم لاس تجهیزات'
        },
        description: {
            fa: 'کوره‌های القایی و قوس، خطوط نورد و ماشین‌آلات برش فلز بازرسی شده.',
            en: 'Induction and arc furnaces, rolling lines, and metal cutting machines with inspection reports.',
            ps: 'القایي او قوسي کوره، د نورد لینونه او د فلز پرې کولو ماشینونه د تفتیش راپورونو سره.'
        },
        items: [
            {
                id: 'induction-furnace',
                name: {
                    fa: 'کوره القایی دست دوم',
                    en: 'Second-Hand Induction Furnace',
                    ps: 'دوهم ځل القایی کوره'
                },
                pdfUrl: 'pdfs/second-hand/metallurgy-equipment/induction-furnace.pdf'
            },
            {
                id: 'arc-furnace',
                name: {
                    fa: 'کوره قوس الکتریکی دست دوم',
                    en: 'Second-Hand Electric Arc Furnace',
                    ps: 'دوهم ځل قوس الکتریک کوره'
                },
                pdfUrl: 'pdfs/second-hand/metallurgy-equipment/arc-furnace.pdf'
            },
            {
                id: 'rolling-mill',
                name: {
                    fa: 'نورد دست دوم',
                    en: 'Second-Hand Rolling Mill',
                    ps: 'دوهم ځل نورد'
                },
                pdfUrl: 'pdfs/second-hand/metallurgy-equipment/rolling-mill.pdf'
            },
            {
                id: 'hot-rolling-machine',
                name: {
                    fa: 'ماشین نورد گرم دست دوم',
                    en: 'Second-Hand Hot Rolling Machine',
                    ps: 'دوهم ځل گرم نورد ماشین'
                },
                pdfUrl: 'pdfs/second-hand/metallurgy-equipment/hot-rolling-machine.pdf'
            },
            {
                id: 'cold-rolling-machine',
                name: {
                    fa: 'ماشین نورد سرد دست دوم',
                    en: 'Second-Hand Cold Rolling Machine',
                    ps: 'دوهم ځل سرد نورد ماشین'
                },
                pdfUrl: 'pdfs/second-hand/metallurgy-equipment/cold-rolling-machine.pdf'
            },
            {
                id: 'band-saw-machine',
                name: {
                    fa: 'ماشین اره نواری دست دوم',
                    en: 'Second-Hand Band Saw Machine',
                    ps: 'دوهم ځل بانډ سا ماشین'
                },
                pdfUrl: 'pdfs/second-hand/metallurgy-equipment/band-saw-machine.pdf'
            },
            {
                id: 'metal-cutting-machine',
                name: {
                    fa: 'ماشین برش فلز دست دوم',
                    en: 'Second-Hand Metal Cutting Machine',
                    ps: 'دوهم ځل فلز برش ماشین'
                },
                pdfUrl: 'pdfs/second-hand/metallurgy-equipment/metal-cutting-machine.pdf'
            }
        ]
    },
    'textile-machinery': {
        icon: '🧵',
        title: {
            fa: 'ماشین‌آلات نساجی دست دوم',
            en: 'Second-Hand Textile Machinery',
            ps: 'د نساجۍ دوهم لاس ماشینونه'
        },
        description: {
            fa: 'ریسندگی، بافندگی، رنگرزی و تکمیل پارچه با گزارش فنی تایید شده.',
            en: 'Spinning, weaving, dyeing, and finishing equipment with certified inspections.',
            ps: 'د سپنلو، اوبدلو، رنګولو او بشپړولو تجهیزات د تایید شويو راپورونو سره.'
        },
        items: [
            {
                id: 'spinning-machine',
                name: {
                    fa: 'ماشین ریسندگی دست دوم',
                    en: 'Second-Hand Spinning Machine',
                    ps: 'دوهم ځل ریسندل ماشین'
                },
                pdfUrl: 'pdfs/second-hand/textile-machinery/spinning-machine.pdf'
            },
            {
                id: 'weaving-machine',
                name: {
                    fa: 'ماشین بافندگی دست دوم',
                    en: 'Second-Hand Weaving Machine',
                    ps: 'دوهم ځل بافتل ماشین'
                },
                pdfUrl: 'pdfs/second-hand/textile-machinery/weaving-machine.pdf'
            },
            {
                id: 'knitting-machine',
                name: {
                    fa: 'ماشین بافنی دست دوم',
                    en: 'Second-Hand Knitting Machine',
                    ps: 'دوهم ځل نیتینګ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/textile-machinery/knitting-machine.pdf'
            },
            {
                id: 'dyeing-machine',
                name: {
                    fa: 'ماشین رنگ‌آمیزی دست دوم',
                    en: 'Second-Hand Dyeing Machine',
                    ps: 'دوهم ځل رنګول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/textile-machinery/dyeing-machine.pdf'
            },
            {
                id: 'stenter-frame',
                name: {
                    fa: 'استنتر فریم دست دوم',
                    en: 'Second-Hand Stenter Frame',
                    ps: 'دوهم ځل سټنټر فریم'
                },
                pdfUrl: 'pdfs/second-hand/textile-machinery/stenter-frame.pdf'
            },
            {
                id: 'carding-machine',
                name: {
                    fa: 'ماشین کاردینگ دست دوم',
                    en: 'Second-Hand Carding Machine',
                    ps: 'دوهم ځل کارډینګ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/textile-machinery/carding-machine.pdf'
            }
        ]
    },
    'food-processing': {
        icon: '🥘',
        title: {
            fa: 'ماشین‌آلات فرآوری غذا دست دوم',
            en: 'Second-Hand Food Processing Machinery',
            ps: 'د خوړو د پروسس دوهم لاس ماشینونه'
        },
        description: {
            fa: 'تجهیزات نانوایی، لبنیات، نوشیدنی و فرآوری مواد غذایی آماده بهره‌برداری.',
            en: 'Bakery, dairy, beverage, and food processing equipment ready to deploy.',
            ps: 'د نانوايي، لبنیاتو، مشروباتو او د خوړو د پروسس تجهیزات د کار لپاره چمتو.'
        },
        items: [
            {
                id: 'bread-oven',
                name: {
                    fa: 'فر نان دست دوم',
                    en: 'Second-Hand Bread Oven',
                    ps: 'دوهم ځل نان فر'
                },
                pdfUrl: 'pdfs/second-hand/food-processing/bread-oven.pdf'
            },
            {
                id: 'dough-mixer',
                name: {
                    fa: 'خمیرزن دست دوم',
                    en: 'Second-Hand Dough Mixer',
                    ps: 'دوهم ځل خمیر زن'
                },
                pdfUrl: 'pdfs/second-hand/food-processing/dough-mixer.pdf'
            },
            {
                id: 'bread-slicer',
                name: {
                    fa: 'نان‌بر دست دوم',
                    en: 'Second-Hand Bread Slicer',
                    ps: 'دوهم ځل نان بر'
                },
                pdfUrl: 'pdfs/second-hand/food-processing/bread-slicer.pdf'
            },
            {
                id: 'milk-pasteurizer',
                name: {
                    fa: 'پاستوریزاتور شیر دست دوم',
                    en: 'Second-Hand Milk Pasteurizer',
                    ps: 'دوهم ځل شیر پاستوریزر'
                },
                pdfUrl: 'pdfs/second-hand/food-processing/milk-pasteurizer.pdf'
            },
            {
                id: 'cheese-press',
                name: {
                    fa: 'پرس پنیر دست دوم',
                    en: 'Second-Hand Cheese Press',
                    ps: 'دوهم ځل پنیر پریس'
                },
                pdfUrl: 'pdfs/second-hand/food-processing/cheese-press.pdf'
            },
            {
                id: 'yogurt-machine',
                name: {
                    fa: 'ماشین ماست دست دوم',
                    en: 'Second-Hand Yogurt Machine',
                    ps: 'دوهم ځل ماست ماشین'
                },
                pdfUrl: 'pdfs/second-hand/food-processing/yogurt-machine.pdf'
            },
            {
                id: 'juice-filling-machine',
                name: {
                    fa: 'ماشین پرکن آبمیوه دست دوم',
                    en: 'Second-Hand Juice Filling Machine',
                    ps: 'دوهم ځل آبمیوه ډکول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/food-processing/juice-filling-machine.pdf'
            },
            {
                id: 'water-treatment-plant',
                name: {
                    fa: 'تصفیه‌خانه آب دست دوم',
                    en: 'Second-Hand Water Treatment Plant',
                    ps: 'دوهم ځل اوبه تصفیه کوونکی'
                },
                pdfUrl: 'pdfs/second-hand/food-processing/water-treatment-plant.pdf'
            }
        ]
    },
    'packaging-machinery': {
        icon: '📦',
        title: {
            fa: 'ماشین‌آلات بسته‌بندی دست دوم',
            en: 'Second-Hand Packaging Machinery',
            ps: 'د بسته بندۍ دوهم لاس ماشینونه'
        },
        description: {
            fa: 'ماشین‌های پرکن، درزگیر، لیبل‌زن و وکیوم با سرویس کامل.',
            en: 'Filling, sealing, labelling, and vacuum packaging systems with full servicing.',
            ps: 'د ډکولو، سیل کولو، لیبل کولو او ویکیوم بسته بندۍ سیسټمونه د بشپړ خدمت سره.'
        },
        items: [
            {
                id: 'filling-machine',
                name: {
                    fa: 'ماشین پرکن دست دوم',
                    en: 'Second-Hand Filling Machine',
                    ps: 'دوهم ځل ډکول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/packaging-machinery/filling-machine.pdf'
            },
            {
                id: 'sealing-machine',
                name: {
                    fa: 'ماشین درزگیر دست دوم',
                    en: 'Second-Hand Sealing Machine',
                    ps: 'دوهم ځل سیلر ماشین'
                },
                pdfUrl: 'pdfs/second-hand/packaging-machinery/sealing-machine.pdf'
            },
            {
                id: 'labeling-machine',
                name: {
                    fa: 'ماشین برچسب‌زن دست دوم',
                    en: 'Second-Hand Labelling Machine',
                    ps: 'دوهم ځل ليبل ماشین'
                },
                pdfUrl: 'pdfs/second-hand/packaging-machinery/labeling-machine.pdf'
            },
            {
                id: 'vacuum-packaging-machine',
                name: {
                    fa: 'ماشین بسته‌بندی وکیوم دست دوم',
                    en: 'Second-Hand Vacuum Packaging Machine',
                    ps: 'دوهم ځل وکیوم بسته‌بندي ماشین'
                },
                pdfUrl: 'pdfs/second-hand/packaging-machinery/vacuum-packaging-machine.pdf'
            },
            {
                id: 'shrink-wrapping-machine',
                name: {
                    fa: 'ماشین بسته‌بندی انقباضی دست دوم',
                    en: 'Second-Hand Shrink Wrapping Machine',
                    ps: 'دوهم ځل شرنک رپینګ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/packaging-machinery/shrink-wrapping-machine.pdf'
            },
            {
                id: 'strapping-machine',
                name: {
                    fa: 'ماشین تسمه‌کشی دست دوم',
                    en: 'Second-Hand Strapping Machine',
                    ps: 'دوهم ځل تسمه ماشین'
                },
                pdfUrl: 'pdfs/second-hand/packaging-machinery/strapping-machine.pdf'
            }
        ]
    },
    'chemical-pharma': {
        icon: '⚗️',
        title: {
            fa: 'ماشین‌آلات شیمیایی و دارویی دست دوم',
            en: 'Second-Hand Chemical & Pharma Machinery',
            ps: 'د کیمیا او درمل جوړولو دوهم لاس ماشینونه'
        },
        description: {
            fa: 'راکتور، میکسر، گرانولاتور و ماشین‌آلات قرص‌سازی با تضمین عملکرد.',
            en: 'Reactors, mixers, granulators, and tablet equipment delivered with performance assurance.',
            ps: 'ری اکشن ټانکونه، مکسرونه، ګرینولیټرونه او د ګولیو ماشینونه د تضمین سره.'
        },
        items: [
            {
                id: 'reaction-tank',
                name: {
                    fa: 'تانک واکنش دست دوم',
                    en: 'Second-Hand Reaction Tank',
                    ps: 'دوهم ځل ری اکشن ټانک'
                },
                pdfUrl: 'pdfs/second-hand/chemical-pharma/reaction-tank.pdf'
            },
            {
                id: 'mixer',
                name: {
                    fa: 'مخلوط‌کن دست دوم',
                    en: 'Second-Hand Mixer',
                    ps: 'دوهم ځل مخلوط کن'
                },
                pdfUrl: 'pdfs/second-hand/chemical-pharma/mixer.pdf'
            },
            {
                id: 'granulator',
                name: {
                    fa: 'دانه‌ساز دست دوم',
                    en: 'Second-Hand Granulator',
                    ps: 'دوهم ځل ګرینولیټر'
                },
                pdfUrl: 'pdfs/second-hand/chemical-pharma/granulator.pdf'
            },
            {
                id: 'tablet-press',
                name: {
                    fa: 'پرس قرص دست دوم',
                    en: 'Second-Hand Tablet Press',
                    ps: 'دوهم ځل قرص پریس'
                },
                pdfUrl: 'pdfs/second-hand/chemical-pharma/tablet-press.pdf'
            },
            {
                id: 'capsule-filling-machine',
                name: {
                    fa: 'ماشین پرکن کپسول دست دوم',
                    en: 'Second-Hand Capsule Filling Machine',
                    ps: 'دوهم ځل کپسول ډکول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/chemical-pharma/capsule-filling-machine.pdf'
            },
            {
                id: 'blister-packing-machine',
                name: {
                    fa: 'ماشین بسته‌بندی بلستر دست دوم',
                    en: 'Second-Hand Blister Packing Machine',
                    ps: 'دوهم ځل بلستر بسته‌بندي ماشین'
                },
                pdfUrl: 'pdfs/second-hand/chemical-pharma/blister-packing-machine.pdf'
            }
        ]
    },
    'paper-pulp': {
        icon: '📄',
        title: {
            fa: 'ماشین‌آلات کاغذ و سلولوز دست دوم',
            en: 'Second-Hand Paper & Pulp Machinery',
            ps: 'د کاغذ او سلولوز دوهم لاس ماشینونه'
        },
        description: {
            fa: 'پالپر، ماشین کاغذ، برش و خطوط ساخت کیسه و پاکت بازرسی شده.',
            en: 'Pulper, paper machines, cutting, and bag or envelope lines with inspection reports.',
            ps: 'پالپرونه، د کاغذ ماشینونه، پرې کول او د کڅوړې او لفافې جوړولو لینونه د تفتیش راپورونو سره.'
        },
        items: [
            {
                id: 'pulping-machine',
                name: {
                    fa: 'ماشین خمیرسازی دست دوم',
                    en: 'Second-Hand Pulping Machine',
                    ps: 'دوهم ځل پلپ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/paper-pulp/pulping-machine.pdf'
            },
            {
                id: 'paper-machine',
                name: {
                    fa: 'ماشین کاغذسازی دست دوم',
                    en: 'Second-Hand Paper Machine',
                    ps: 'دوهم ځل کاغذ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/paper-pulp/paper-machine.pdf'
            },
            {
                id: 'paper-cutting-machine',
                name: {
                    fa: 'ماشین برش کاغذ دست دوم',
                    en: 'Second-Hand Paper Cutting Machine',
                    ps: 'دوهم ځل کاغذ برش ماشین'
                },
                pdfUrl: 'pdfs/second-hand/paper-pulp/paper-cutting-machine.pdf'
            },
            {
                id: 'paper-bag-making-machine',
                name: {
                    fa: 'ماشین ساخت کیسه کاغذی دست دوم',
                    en: 'Second-Hand Paper Bag Making Machine',
                    ps: 'دوهم ځل کاغذي کيسه جوړول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/paper-pulp/paper-bag-making-machine.pdf'
            },
            {
                id: 'envelope-making-machine',
                name: {
                    fa: 'ماشین ساخت پاکت نامه دست دوم',
                    en: 'Second-Hand Envelope Making Machine',
                    ps: 'دوهم ځل پاکت جوړول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/paper-pulp/envelope-making-machine.pdf'
            }
        ]
    },
    'electronic-machinery': {
        icon: '💡',
        title: {
            fa: 'ماشین‌آلات الکترونیکی دست دوم',
            en: 'Second-Hand Electronic Machinery',
            ps: 'د الکترونیک دوهم لاس ماشینونه'
        },
        description: {
            fa: 'خطوط مونتاژ SMT، لحیم‌کاری موجی و تست مدارهای چاپی تایید شده.',
            en: 'Certified SMT assembly, wave soldering, and PCB or IC testing equipment.',
            ps: 'د SMT اسمبلۍ، ویو سولډرینګ او د PCB او IC د ازموینې تایید شوي تجهیزات.'
        },
        items: [
            {
                id: 'smt-machine',
                name: {
                    fa: 'ماشین SMT دست دوم',
                    en: 'Second-Hand SMT Machine',
                    ps: 'دوهم ځل SMT ماشین'
                },
                pdfUrl: 'pdfs/second-hand/electronic-machinery/smt-machine.pdf'
            },
            {
                id: 'wave-soldering-machine',
                name: {
                    fa: 'ماشین جوشکاری موجی دست دوم',
                    en: 'Second-Hand Wave Soldering Machine',
                    ps: 'دوهم ځل ویو سولډرینګ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/electronic-machinery/wave-soldering-machine.pdf'
            },
            {
                id: 'pcb-testing-machine',
                name: {
                    fa: 'ماشین تست PCB دست دوم',
                    en: 'Second-Hand PCB Testing Machine',
                    ps: 'دوهم ځل PCB ازمول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/electronic-machinery/pcb-testing-machine.pdf'
            },
            {
                id: 'ic-testing-machine',
                name: {
                    fa: 'ماشین تست IC دست دوم',
                    en: 'Second-Hand IC Testing Machine',
                    ps: 'دوهم ځل IC ازمول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/electronic-machinery/ic-testing-machine.pdf'
            },
            {
                id: 'cable-assembly-machine',
                name: {
                    fa: 'ماشین مونتاژ کابل دست دوم',
                    en: 'Second-Hand Cable Assembly Machine',
                    ps: 'دوهم ځل کابل مونټاژ ماشین'
                },
                pdfUrl: 'pdfs/second-hand/electronic-machinery/cable-assembly-machine.pdf'
            }
        ]
    },
    'cooling-heating': {
        icon: '❄️',
        title: {
            fa: 'تجهیزات سرمایش و گرمایش دست دوم',
            en: 'Second-Hand Cooling & Heating Equipment',
            ps: 'د سړولو او تودوخې دوهم لاس تجهیزات'
        },
        description: {
            fa: 'چیلر، بویلر، برج خنک‌کن و مبدل حرارتی با سرویس و آماده راه‌اندازی.',
            en: 'Serviced chillers, boilers, cooling towers, and heat exchangers ready for deployment.',
            ps: 'چیلرونه، بویلرونه، د یخولو برجونه او د تودوخې تبادله کوونکي د کار لپاره چمتو.'
        },
        items: [
            {
                id: 'chiller',
                name: {
                    fa: 'چیلر دست دوم',
                    en: 'Second-Hand Chiller',
                    ps: 'دوهم ځل چیلر'
                },
                pdfUrl: 'pdfs/second-hand/cooling-heating/chiller.pdf'
            },
            {
                id: 'boiler',
                name: {
                    fa: 'بویلر دست دوم',
                    en: 'Second-Hand Boiler',
                    ps: 'دوهم ځل بویلر'
                },
                pdfUrl: 'pdfs/second-hand/cooling-heating/boiler.pdf'
            },
            {
                id: 'cooling-tower',
                name: {
                    fa: 'برج خنک‌کن دست دوم',
                    en: 'Second-Hand Cooling Tower',
                    ps: 'دوهم ځل برج خنک کن'
                },
                pdfUrl: 'pdfs/second-hand/cooling-heating/cooling-tower.pdf'
            },
            {
                id: 'heat-exchanger',
                name: {
                    fa: 'مبدل حرارتی دست دوم',
                    en: 'Second-Hand Heat Exchanger',
                    ps: 'دوهم ځل هیټ ایکسچنجر'
                },
                pdfUrl: 'pdfs/second-hand/cooling-heating/heat-exchanger.pdf'
            }
        ]
    },
    'pumps-compressors': {
        icon: '🧰',
        title: {
            fa: 'پمپ‌ها و کمپرسورهای دست دوم',
            en: 'Second-Hand Pumps & Compressors',
            ps: 'دوهم لاس پمپونه او کمپرسورونه'
        },
        description: {
            fa: 'پمپ‌های آب، چاهی، هوا، پیچ و وکیوم بازبینی‌شده و آماده بهره‌برداری.',
            en: 'Inspected water, submersible, air, screw, and vacuum pumps ready to run.',
            ps: 'د اوبو، سبمرسیبل، هوا، سکرو او ویکیوم پمپونه چې د کار لپاره چمتو دي.'
        },
        items: [
            {
                id: 'water-pump',
                name: {
                    fa: 'پمپ آب دست دوم',
                    en: 'Second-Hand Water Pump',
                    ps: 'دوهم ځل اوبه پمپ'
                },
                pdfUrl: 'pdfs/second-hand/pumps-compressors/water-pump.pdf'
            },
            {
                id: 'submersible-pump',
                name: {
                    fa: 'پمپ غوطه‌رو دست دوم',
                    en: 'Second-Hand Submersible Pump',
                    ps: 'دوهم ځل غوطه رو پمپ'
                },
                pdfUrl: 'pdfs/second-hand/pumps-compressors/submersible-pump.pdf'
            },
            {
                id: 'air-compressor',
                name: {
                    fa: 'کمپرسور هوا دست دوم',
                    en: 'Second-Hand Air Compressor',
                    ps: 'دوهم ځل هوا کمپرسور'
                },
                pdfUrl: 'pdfs/second-hand/pumps-compressors/air-compressor.pdf'
            },
            {
                id: 'screw-compressor',
                name: {
                    fa: 'کمپرسور مارپیچی دست دوم',
                    en: 'Second-Hand Screw Compressor',
                    ps: 'دوهم ځل مارپیچي کمپرسور'
                },
                pdfUrl: 'pdfs/second-hand/pumps-compressors/screw-compressor.pdf'
            },
            {
                id: 'vacuum-pump',
                name: {
                    fa: 'پمپ وکیوم دست دوم',
                    en: 'Second-Hand Vacuum Pump',
                    ps: 'دوهم ځل وکیوم پمپ'
                },
                pdfUrl: 'pdfs/second-hand/pumps-compressors/vacuum-pump.pdf'
            }
        ]
    },
    'industrial-laser': {
        icon: '🔦',
        title: {
            fa: 'لیزر صنعتی دست دوم',
            en: 'Second-Hand Industrial Laser Systems',
            ps: 'د صنعت لیزر دوهم لاس سیستمونه'
        },
        description: {
            fa: 'ماشین‌های برش، حکاکی و جوشکاری لیزری با سرویس کامل.',
            en: 'Laser cutting, engraving, and welding machines delivered after full servicing.',
            ps: 'د لیزر پرې کولو، کندلو او ویلډنګ ماشینونه د بشپړ خدمت وروسته سپارل کېږي.'
        },
        items: [
            {
                id: 'laser-cutting-machine',
                name: {
                    fa: 'ماشین برش لیزری دست دوم',
                    en: 'Second-Hand Laser Cutting Machine',
                    ps: 'دوهم ځل لیزر برش ماشین'
                },
                pdfUrl: 'pdfs/second-hand/industrial-laser/laser-cutting-machine.pdf'
            },
            {
                id: 'laser-engraving-machine',
                name: {
                    fa: 'ماشین حکاکی لیزری دست دوم',
                    en: 'Second-Hand Laser Engraving Machine',
                    ps: 'دوهم ځل ليزر حکاکي ماشین'
                },
                pdfUrl: 'pdfs/second-hand/industrial-laser/laser-engraving-machine.pdf'
            },
            {
                id: 'laser-welding-machine',
                name: {
                    fa: 'ماشین جوشکاری لیزری دست دوم',
                    en: 'Second-Hand Laser Welding Machine',
                    ps: 'دوهم ځل ليزر جوشکاري ماشین'
                },
                pdfUrl: 'pdfs/second-hand/industrial-laser/laser-welding-machine.pdf'
            }
        ]
    },
    'foam-sponge': {
        icon: '🧽',
        title: {
            fa: 'ماشین‌آلات فوم و اسفنج دست دوم',
            en: 'Second-Hand Foam & Sponge Machinery',
            ps: 'د فوم او اسفنج دوهم لاس ماشینونه'
        },
        description: {
            fa: 'سیستم‌های تولید و برش فوم و اسفنج با تضمین عملکرد.',
            en: 'Foam production and cutting systems supplied with performance guarantees.',
            ps: 'د فوم تولید او پرې کولو سیستمونه د تضمین شوې کړنې سره وړاندې کېږي.'
        },
        items: [
            {
                id: 'foam-production-machine',
                name: {
                    fa: 'ماشین تولید فوم دست دوم',
                    en: 'Second-Hand Foam Production Machine',
                    ps: 'دوهم ځل فوم جوړول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/foam-sponge/foam-production-machine.pdf'
            },
            {
                id: 'foam-cutting-machine',
                name: {
                    fa: 'ماشین برش فوم دست دوم',
                    en: 'Second-Hand Foam Cutting Machine',
                    ps: 'دوهم ځل فوم برش ماشین'
                },
                pdfUrl: 'pdfs/second-hand/foam-sponge/foam-cutting-machine.pdf'
            },
            {
                id: 'sponge-cutting-machine',
                name: {
                    fa: 'ماشین برش اسفنج دست دوم',
                    en: 'Second-Hand Sponge Cutting Machine',
                    ps: 'دوهم ځل اسفنج برش ماشین'
                },
                pdfUrl: 'pdfs/second-hand/foam-sponge/sponge-cutting-machine.pdf'
            }
        ]
    },
    'tobacco': {
        icon: '🚬',
        title: {
            fa: 'ماشین‌آلات تنباکو و سیگار دست دوم',
            en: 'Second-Hand Tobacco & Cigarette Machinery',
            ps: 'د تنباکو او سیګار دوهم لاس ماشینونه'
        },
        description: {
            fa: 'ماشین‌های ساخت سیگار و بسته‌بندی تنباکو با پشتیبانی فنی.',
            en: 'Cigarette making and tobacco packaging machines supplied with technical support.',
            ps: 'د سیګار جوړولو او د تنباکو بسته بندۍ ماشینونه د تخنیکي ملاتړ سره.'
        },
        items: [
            {
                id: 'cigarette-making-machine',
                name: {
                    fa: 'ماشین ساخت سیگار دست دوم',
                    en: 'Second-Hand Cigarette Making Machine',
                    ps: 'دوهم ځل سیګار جوړول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/tobacco/cigarette-making-machine.pdf'
            },
            {
                id: 'cigarette-packing-machine',
                name: {
                    fa: 'ماشین بسته‌بندی سیگار دست دوم',
                    en: 'Second-Hand Cigarette Packing Machine',
                    ps: 'دوهم ځل سیګار بسته‌بندي ماشین'
                },
                pdfUrl: 'pdfs/second-hand/tobacco/cigarette-packing-machine.pdf'
            },
            {
                id: 'tobacco-packaging-machine',
                name: {
                    fa: 'ماشین بسته‌بندی تنباکو دست دوم',
                    en: 'Second-Hand Tobacco Packaging Machine',
                    ps: 'دوهم ځل تنباکو بسته‌بندي ماشین'
                },
                pdfUrl: 'pdfs/second-hand/tobacco/tobacco-packaging-machine.pdf'
            }
        ]
    },
    'paint-coating': {
        icon: '🎨',
        title: {
            fa: 'ماشین‌آلات رنگ و کوتینگ دست دوم',
            en: 'Second-Hand Paint & Coating Machinery',
            ps: 'د رنګ او پوښښ دوهم لاس ماشینونه'
        },
        description: {
            fa: 'سیستم‌های پاشش پودر و رنگ، کابین و میکسر بازرسی شده.',
            en: 'Inspected powder coating, spray booths, guns, and paint mixing systems.',
            ps: 'د پوډر پوښښ، سپرې خونې، تفنګچې او د رنګ مخلوط کولو سیستمونه تفتیش شوي.'
        },
        items: [
            {
                id: 'powder-coating-machine',
                name: {
                    fa: 'ماشین پوشش پودری دست دوم',
                    en: 'Second-Hand Powder Coating Machine',
                    ps: 'دوهم ځل پوډر پوشش ماشین'
                },
                pdfUrl: 'pdfs/second-hand/paint-coating/powder-coating-machine.pdf'
            },
            {
                id: 'spray-booth',
                name: {
                    fa: 'کابین پاشش دست دوم',
                    en: 'Second-Hand Spray Booth',
                    ps: 'دوهم ځل پاشش کابین'
                },
                pdfUrl: 'pdfs/second-hand/paint-coating/spray-booth.pdf'
            },
            {
                id: 'spray-gun',
                name: {
                    fa: 'تفنگ پاشش دست دوم',
                    en: 'Second-Hand Spray Gun',
                    ps: 'دوهم ځل پاشش تفڼه'
                },
                pdfUrl: 'pdfs/second-hand/paint-coating/spray-gun.pdf'
            },
            {
                id: 'paint-mixing-machine',
                name: {
                    fa: 'ماشین مخلوط رنگ دست دوم',
                    en: 'Second-Hand Paint Mixing Machine',
                    ps: 'دوهم ځل رنګ مخلوط ماشین'
                },
                pdfUrl: 'pdfs/second-hand/paint-coating/paint-mixing-machine.pdf'
            }
        ]
    },
    'agricultural-machinery': {
        icon: '🚜',
        title: {
            fa: 'ماشین‌آلات کشاورزی دست دوم',
            en: 'Second-Hand Agricultural Machinery',
            ps: 'د کرنې دوهم لاس ماشینونه'
        },
        description: {
            fa: 'تراکتور، کمباین، بذرکار و سمپاش بازسازی‌شده برای مزارع افغانستان.',
            en: 'Refurbished tractors, harvesters, seed drills, and sprayers for Afghan farms.',
            ps: 'ترمیم شوي ټرکټورونه، کمباینونه، تخم شیندونکي او سپرې کوونکي د افغان فارمونو لپاره.'
        },
        items: [
            {
                id: 'tractor',
                name: {
                    fa: 'تراکتور دست دوم',
                    en: 'Second-Hand Tractor',
                    ps: 'دوهم ځل ټرکټر'
                },
                pdfUrl: 'pdfs/second-hand/agricultural-machinery/tractor.pdf'
            },
            {
                id: 'mini-tractor',
                name: {
                    fa: 'تراکتور کوچک دست دوم',
                    en: 'Second-Hand Mini Tractor',
                    ps: 'دوهم ځل کوچنی ټرکټر'
                },
                pdfUrl: 'pdfs/second-hand/agricultural-machinery/mini-tractor.pdf'
            },
            {
                id: 'combine-harvester',
                name: {
                    fa: 'دروگر کمباین دست دوم',
                    en: 'Second-Hand Combine Harvester',
                    ps: 'دوهم ځل کمباین دروگر'
                },
                pdfUrl: 'pdfs/second-hand/agricultural-machinery/combine-harvester.pdf'
            },
            {
                id: 'seed-drill',
                name: {
                    fa: 'بذرپاش دست دوم',
                    en: 'Second-Hand Seed Drill',
                    ps: 'دوهم ځل بذرپاش'
                },
                pdfUrl: 'pdfs/second-hand/agricultural-machinery/seed-drill.pdf'
            },
            {
                id: 'sprayer',
                name: {
                    fa: 'سمپاش دست دوم',
                    en: 'Second-Hand Sprayer',
                    ps: 'دوهم ځل سمپاش'
                },
                pdfUrl: 'pdfs/second-hand/agricultural-machinery/sprayer.pdf'
            },
            {
                id: 'agri-water-pump',
                name: {
                    fa: 'پمپ آب کشاورزی دست دوم',
                    en: 'Second-Hand Agricultural Water Pump',
                    ps: 'دوهم ځل د کرنې د اوبو پمپ'
                },
                pdfUrl: 'pdfs/second-hand/agricultural-machinery/water-pump.pdf'
            }
        ]
    },
    'laboratory-equipment': {
        icon: '🧪',
        title: {
            fa: 'تجهیزات آزمایشگاهی دست دوم',
            en: 'Second-Hand Laboratory Equipment',
            ps: 'د لابراتوار دوهم لاس تجهیزات'
        },
        description: {
            fa: 'دستگاه‌های تست کشش، سختی‌سنج، پی‌اچ‌متر و میکروسکوپ با دقت کالیبره.',
            en: 'Calibrated tensile testers, hardness testers, pH meters, spectrophotometers, and microscopes.',
            ps: 'کالیبره شوي د کشش ټیسټرونه، سختي سنجونه، pH میترونه، سپیکټروفوتومیټرونه او مایکروسکوپونه.'
        },
        items: [
            {
                id: 'tensile-testing-machine',
                name: {
                    fa: 'ماشین تست کششی دست دوم',
                    en: 'Second-Hand Tensile Testing Machine',
                    ps: 'دوهم ځل کششي ازمول ماشین'
                },
                pdfUrl: 'pdfs/second-hand/laboratory-equipment/tensile-testing-machine.pdf'
            },
            {
                id: 'hardness-tester',
                name: {
                    fa: 'سختی‌سنج دست دوم',
                    en: 'Second-Hand Hardness Tester',
                    ps: 'دوهم ځل سختی سنج'
                },
                pdfUrl: 'pdfs/second-hand/laboratory-equipment/hardness-tester.pdf'
            },
            {
                id: 'ph-meter',
                name: {
                    fa: 'پی‌اچ‌متر دست دوم',
                    en: 'Second-Hand pH Meter',
                    ps: 'دوهم ځل پی ایچ میټر'
                },
                pdfUrl: 'pdfs/second-hand/laboratory-equipment/ph-meter.pdf'
            },
            {
                id: 'spectrophotometer',
                name: {
                    fa: 'اسپکتروفتومتر دست دوم',
                    en: 'Second-Hand Spectrophotometer',
                    ps: 'دوهم ځل اسپکټروفتوميټر'
                },
                pdfUrl: 'pdfs/second-hand/laboratory-equipment/spectrophotometer.pdf'
            },
            {
                id: 'microscope',
                name: {
                    fa: 'میکروسکوپ دست دوم',
                    en: 'Second-Hand Microscope',
                    ps: 'دوهم ځل مایکروسکوپ'
                },
                pdfUrl: 'pdfs/second-hand/laboratory-equipment/microscope.pdf'
            }
        ]
    },
    'material-handling': {
        icon: '🏗️',
        title: {
            fa: 'تجهیزات جابجایی مواد دست دوم',
            en: 'Second-Hand Material Handling Equipment',
            ps: 'د موادو د لېږد دوهم لاس تجهیزات'
        },
        description: {
            fa: 'لیفتراک، پالت تراک، نقاله و جرثقیل سقفی آماده بهره‌برداری.',
            en: 'Forklifts, pallet trucks, conveyors, and overhead cranes ready for deployment.',
            ps: 'فورک لیفټونه، پالټ ټرکونه، کنویرونه او د چت کرینونه د کار لپاره چمتو.'
        },
        items: [
            {
                id: 'forklift',
                name: {
                    fa: 'لیفتراک دست دوم',
                    en: 'Second-Hand Forklift',
                    ps: 'دوهم ځل لیفتراک'
                },
                pdfUrl: 'pdfs/second-hand/material-handling/forklift.pdf'
            },
            {
                id: 'pallet-truck',
                name: {
                    fa: 'پالت تراک دست دوم',
                    en: 'Second-Hand Pallet Truck',
                    ps: 'دوهم ځل پالټر ټرک'
                },
                pdfUrl: 'pdfs/second-hand/material-handling/pallet-truck.pdf'
            },
            {
                id: 'stacker',
                name: {
                    fa: 'انبارکن دست دوم',
                    en: 'Second-Hand Stacker',
                    ps: 'دوهم ځل سټیکر'
                },
                pdfUrl: 'pdfs/second-hand/material-handling/stacker.pdf'
            },
            {
                id: 'conveyor-belt',
                name: {
                    fa: 'تسمه نقاله دست دوم',
                    en: 'Second-Hand Conveyor Belt',
                    ps: 'دوهم ځل کنویر بیلټ'
                },
                pdfUrl: 'pdfs/second-hand/material-handling/conveyor-belt.pdf'
            },
            {
                id: 'roller-conveyor',
                name: {
                    fa: 'نقاله غلتکی دست دوم',
                    en: 'Second-Hand Roller Conveyor',
                    ps: 'دوهم ځل رولر کنویر'
                },
                pdfUrl: 'pdfs/second-hand/material-handling/roller-conveyor.pdf'
            },
            {
                id: 'overhead-crane',
                name: {
                    fa: 'جرثقیل سقفی دست دوم',
                    en: 'Second-Hand Overhead Crane',
                    ps: 'دوهم ځل سقفي جرثقیل'
                },
                pdfUrl: 'pdfs/second-hand/material-handling/overhead-crane.pdf'
            }
        ]
    },
    'wood-working': {
        icon: '🪚',
        title: {
            fa: 'ماشین‌آلات نجاری دست دوم',
            en: 'Second-Hand Wood Working Machinery',
            ps: 'د لرګیو د کار دوهم لاس ماشینونه'
        },
        description: {
            fa: 'اره گردبر، نواری، رنده، روتر و سنباده با تنظیم و آماده نصب.',
            en: 'Circular saws, band saws, planers, routers, and sanders tuned for installation.',
            ps: 'دایروي ارې، بانډ سا، رنده، روټر او سنډرونه د نصب لپاره برابري شوي.'
        },
        items: [
            {
                id: 'circular-saw',
                name: {
                    fa: 'اره گردبر دست دوم',
                    en: 'Second-Hand Circular Saw',
                    ps: 'دوهم ځل دایري اره'
                },
                pdfUrl: 'pdfs/second-hand/wood-working/circular-saw.pdf'
            },
            {
                id: 'band-saw',
                name: {
                    fa: 'اره نواری دست دوم',
                    en: 'Second-Hand Band Saw',
                    ps: 'دوهم ځل بانډ سا'
                },
                pdfUrl: 'pdfs/second-hand/wood-working/band-saw.pdf'
            },
            {
                id: 'wood-planer',
                name: {
                    fa: 'سابنده چوب دست دوم',
                    en: 'Second-Hand Wood Planer',
                    ps: 'دوهم ځل چوب سابنده'
                },
                pdfUrl: 'pdfs/second-hand/wood-working/wood-planer.pdf'
            },
            {
                id: 'wood-router',
                name: {
                    fa: 'روتر چوب دست دوم',
                    en: 'Second-Hand Wood Router',
                    ps: 'دوهم ځل چوب روټر'
                },
                pdfUrl: 'pdfs/second-hand/wood-working/wood-router.pdf'
            },
            {
                id: 'sanding-machine',
                name: {
                    fa: 'ماشین سنباده دست دوم',
                    en: 'Second-Hand Sanding Machine',
                    ps: 'دوهم ځل سنباده ماشین'
                },
                pdfUrl: 'pdfs/second-hand/wood-working/sanding-machine.pdf'
            }
        ]
    },
    'rubber-processing': {
        icon: '🛞',
        title: {
            fa: 'ماشین‌آلات فرآوری لاستیک دست دوم',
            en: 'Second-Hand Rubber Processing Machinery',
            ps: 'د ربړ د پروسس دوهم لاس ماشینونه'
        },
        description: {
            fa: 'میکسر بنبوری، دو رول میل و پرس ولکانیزه با گزارش سرویس.',
            en: 'Banbury mixers, two-roll mills, vulcanizing presses, and moulding machines with service records.',
            ps: 'بنبوري مکسرونه، دوه رول ملونه، ولکانیزه پریسونه او د ربړ مولډینګ ماشینونه د خدمت ریکارډونو سره.'
        },
        items: [
            {
                id: 'banbury-mixer',
                name: {
                    fa: 'مخلوط‌کن بنبوری دست دوم',
                    en: 'Second-Hand Banbury Mixer',
                    ps: 'دوهم ځل بنبوري مخلوط کن'
                },
                pdfUrl: 'pdfs/second-hand/rubber-processing/banbury-mixer.pdf'
            },
            {
                id: 'two-roll-mill',
                name: {
                    fa: 'غلتک دوغوله دست دوم',
                    en: 'Second-Hand Two Roll Mill',
                    ps: 'دوهم ځل دو رول میل'
                },
                pdfUrl: 'pdfs/second-hand/rubber-processing/two-roll-mill.pdf'
            },
            {
                id: 'vulcanizing-press',
                name: {
                    fa: 'پرس ولکانیزه دست دوم',
                    en: 'Second-Hand Vulcanizing Press',
                    ps: 'دوهم ځل ولکانیزه پریس'
                },
                pdfUrl: 'pdfs/second-hand/rubber-processing/vulcanizing-press.pdf'
            },
            {
                id: 'rubber-molding-machine',
                name: {
                    fa: 'ماشین قالب‌گیری لاستیک دست دوم',
                    en: 'Second-Hand Rubber Molding Machine',
                    ps: 'دوهم ځل لاستیک قالب ماشین'
                },
                pdfUrl: 'pdfs/second-hand/rubber-processing/rubber-molding-machine.pdf'
            }
        ]
    },
    'glass-ceramics': {
        icon: '🪟',
        title: {
            fa: 'ماشین‌آلات شیشه و سرامیک دست دوم',
            en: 'Second-Hand Glass & Ceramics Machinery',
            ps: 'د ښیښې او سیرامیک دوهم لاس ماشینونه'
        },
        description: {
            fa: 'کوره‌های ذوب و پخت، ماشین برش شیشه و پرس کاشی با بازسازی کامل.',
            en: 'Refurbished glass melting furnaces, cutting machines, tile presses, and kilns.',
            ps: 'د ښیښې د ذوب کوره، د پرې کولو ماشین، د ټایلو پریس او کوره په بشپړه توګه ترمیم شوي.'
        },
        items: [
            {
                id: 'glass-melting-furnace',
                name: {
                    fa: 'کوره ذوب شیشه دست دوم',
                    en: 'Second-Hand Glass Melting Furnace',
                    ps: 'دوهم ځل شیشه ذوب کوره'
                },
                pdfUrl: 'pdfs/second-hand/glass-ceramics/glass-melting-furnace.pdf'
            },
            {
                id: 'glass-cutting-machine',
                name: {
                    fa: 'ماشین برش شیشه دست دوم',
                    en: 'Second-Hand Glass Cutting Machine',
                    ps: 'دوهم ځل شیشه برش ماشین'
                },
                pdfUrl: 'pdfs/second-hand/glass-ceramics/glass-cutting-machine.pdf'
            },
            {
                id: 'tile-press',
                name: {
                    fa: 'پرس کاشی دست دوم',
                    en: 'Second-Hand Tile Press',
                    ps: 'دوهم ځل کاشي پریس'
                },
                pdfUrl: 'pdfs/second-hand/glass-ceramics/tile-press.pdf'
            },
            {
                id: 'kiln-furnace',
                name: {
                    fa: 'کوره پخت دست دوم',
                    en: 'Second-Hand Kiln Furnace',
                    ps: 'دوهم ځل پخت کوره'
                },
                pdfUrl: 'pdfs/second-hand/glass-ceramics/kiln-furnace.pdf'
            }
        ]
    },
    'leather-footwear': {
        icon: '👞',
        title: {
            fa: 'ماشین‌آلات چرم و کفش دست دوم',
            en: 'Second-Hand Leather & Footwear Machinery',
            ps: 'د چرم او بوټانو دوهم لاس ماشینونه'
        },
        description: {
            fa: 'دستگاه‌های پوست‌کنی، دباغی، کفش‌دوزی و پرس کفش آماده تولید.',
            en: 'Fleshing drums, tanning equipment, shoe lasting, and sole pressing machines ready for production.',
            ps: 'د پوست کینلو، دباغۍ، د بوټ جوړولو او د تلي د پرس ماشینونه د تولید لپاره چمتو.'
        },
        items: [
            {
                id: 'fleshing-machine',
                name: {
                    fa: 'ماشین پوست‌کنی دست دوم',
                    en: 'Second-Hand Fleshing Machine',
                    ps: 'دوهم ځل پوست کني ماشین'
                },
                pdfUrl: 'pdfs/second-hand/leather-footwear/fleshing-machine.pdf'
            },
            {
                id: 'tanning-drum',
                name: {
                    fa: 'دباغی درام دست دوم',
                    en: 'Second-Hand Tanning Drum',
                    ps: 'دوهم ځل چرم جوړول ډرم'
                },
                pdfUrl: 'pdfs/second-hand/leather-footwear/tanning-drum.pdf'
            },
            {
                id: 'shoe-lasting-machine',
                name: {
                    fa: 'ماشین کفش‌دوزی دست دوم',
                    en: 'Second-Hand Shoe Lasting Machine',
                    ps: 'دوهم ځل کفش دوختل ماشین'
                },
                pdfUrl: 'pdfs/second-hand/leather-footwear/shoe-lasting-machine.pdf'
            },
            {
                id: 'sole-press',
                name: {
                    fa: 'پرس کفش دست دوم',
                    en: 'Second-Hand Sole Press',
                    ps: 'دوهم ځل کفش پریس'
                },
                pdfUrl: 'pdfs/second-hand/leather-footwear/sole-press.pdf'
            }
        ]
    },
    'trucks-lorries': {
        icon: '🚚',
        title: {
            fa: 'کامیون و لاری دست دوم',
            en: 'Second-Hand Trucks & Lorries',
            ps: 'دوهم لاس لارۍ او لاریون'
        },
        description: {
            fa: 'دامپر، باری، یدک‌کش، تانکر و یخچالدار با سرویس کامل.',
            en: 'Dump, cargo, tow, tanker, and refrigerated trucks supplied fully serviced.',
            ps: 'ډمپر، باردار، کششي، ټانکر او یخچالي لارۍ د بشپړ خدماتو سره سپارل کېږي.'
        },
        items: [
            {
                id: 'dump-truck',
                name: {
                    fa: 'کامیون دامپر دست دوم',
                    en: 'Second-Hand Dump Truck',
                    ps: 'دوهم ځل ډمپر کامیون'
                },
                pdfUrl: 'pdfs/second-hand/trucks-lorries/dump-truck.pdf'
            },
            {
                id: 'cargo-truck',
                name: {
                    fa: 'کامیون بارکش دست دوم',
                    en: 'Second-Hand Cargo Truck',
                    ps: 'دوهم ځل بارکش کامیون'
                },
                pdfUrl: 'pdfs/second-hand/trucks-lorries/cargo-truck.pdf'
            },
            {
                id: 'tow-truck',
                name: {
                    fa: 'کامیون یدک‌کش دست دوم',
                    en: 'Second-Hand Tow Truck',
                    ps: 'دوهم ځل ډکړ کامیون'
                },
                pdfUrl: 'pdfs/second-hand/trucks-lorries/tow-truck.pdf'
            },
            {
                id: 'tanker-truck',
                name: {
                    fa: 'کامیون تانکر دست دوم',
                    en: 'Second-Hand Tanker Truck',
                    ps: 'دوهم ځل تانکر کامیون'
                },
                pdfUrl: 'pdfs/second-hand/trucks-lorries/tanker-truck.pdf'
            },
            {
                id: 'refrigerated-truck',
                name: {
                    fa: 'کامیون یخچالدار دست دوم',
                    en: 'Second-Hand Refrigerated Truck',
                    ps: 'دوهم ځل یخچال لرونکی کامیون'
                },
                pdfUrl: 'pdfs/second-hand/trucks-lorries/refrigerated-truck.pdf'
            }
        ]
    },
    'generators': {
        icon: '🔌',
        title: {
            fa: 'ژنراتورهای دست دوم',
            en: 'Second-Hand Generators',
            ps: 'دوهم لاس جنراتورونه'
        },
        description: {
            fa: 'ژنراتورهای دیزلی، گازی و بی‌صدا با تست بار کامل و ضمانت راه‌اندازی.',
            en: 'Diesel, gas, and silent generators load-tested with commissioning support.',
            ps: 'د ډیزلي، ګازي او ارامه جنراتورونه د بشپړ بار ازموینې او د فعالولو ملاتړ سره.'
        },
        items: [
            {
                id: 'diesel-generator',
                name: {
                    fa: 'ژنراتور دیزلی دست دوم',
                    en: 'Second-Hand Diesel Generator',
                    ps: 'دوهم ځل دیزلي جنریټر'
                },
                pdfUrl: 'pdfs/second-hand/generators/diesel-generator.pdf'
            },
            {
                id: 'gas-generator',
                name: {
                    fa: 'ژنراتور گازی دست دوم',
                    en: 'Second-Hand Gas Generator',
                    ps: 'دوهم ځل ګازي جنریټر'
                },
                pdfUrl: 'pdfs/second-hand/generators/gas-generator.pdf'
            },
            {
                id: 'silent-generator',
                name: {
                    fa: 'ژنراتور بی‌صدا دست دوم',
                    en: 'Second-Hand Silent Generator',
                    ps: 'دوهم ځل خاموش جنریټر'
                },
                pdfUrl: 'pdfs/second-hand/generators/silent-generator.pdf'
            }
        ]
    }
};

const secondHandItemIcons = {
    'offset-printing-machine': '🖨️',
    'digital-printing-machine': '💻',
    'flexo-printing-machine': '📰',
    'extruder-machine': '🌀',
    'injection-molding-machine': '🧩',
    'blow-molding-machine': '🎈',
    'plastic-recycling-line': '♻️',
    'shredder-machine': '🪚',
    'pelletizing-line': '⚙️',
    'excavator': '🚜',
    'mini-excavator': '🚧',
    'loader': '🚚',
    'backhoe-loader': '🛠️',
    'crane': '🏗️',
    'tower-crane': '🗼',
    'mobile-crane': '🚛',
    'concrete-mixer': '🧱',
    'road-roller': '🛞',
    'asphalt-paver': '🛣️',
    'induction-furnace': '🔥',
    'arc-furnace': '⚡',
    'rolling-mill': '🏭',
    'hot-rolling-machine': '🔥',
    'cold-rolling-machine': '❄️',
    'band-saw-machine': '🪚',
    'metal-cutting-machine': '✂️',
    'spinning-machine': '🧵',
    'weaving-machine': '🪡',
    'knitting-machine': '🧶',
    'dyeing-machine': '🎨',
    'stenter-frame': '🧦',
    'carding-machine': '🪮',
    'bread-oven': '🍞',
    'dough-mixer': '🥣',
    'bread-slicer': '🔪',
    'milk-pasteurizer': '🥛',
    'cheese-press': '🧀',
    'yogurt-machine': '🍶',
    'juice-filling-machine': '🧃',
    'water-treatment-plant': '💧',
    'filling-machine': '🧴',
    'sealing-machine': '🔒',
    'labeling-machine': '🏷️',
    'vacuum-packaging-machine': '📦',
    'shrink-wrapping-machine': '🎁',
    'strapping-machine': '🪢',
    'reaction-tank': '⚗️',
    'mixer': '🌀',
    'granulator': '🟢',
    'tablet-press': '💊',
    'capsule-filling-machine': '🧪',
    'blister-packing-machine': '🩹',
    'pulping-machine': '🍊',
    'paper-machine': '📄',
    'paper-cutting-machine': '✂️',
    'paper-bag-making-machine': '🛍️',
    'envelope-making-machine': '✉️',
    'smt-machine': '🔌',
    'wave-soldering-machine': '🌊',
    'pcb-testing-machine': '🧫',
    'ic-testing-machine': '💾',
    'cable-assembly-machine': '🔗',
    'chiller': '❄️',
    'boiler': '🔥',
    'cooling-tower': '🌬️',
    'heat-exchanger': '♨️',
    'water-pump': '💧',
    'submersible-pump': '🌊',
    'air-compressor': '🌬️',
    'screw-compressor': '⚙️',
    'vacuum-pump': '🌀',
    'laser-cutting-machine': '🔦',
    'laser-engraving-machine': '✏️',
    'laser-welding-machine': '🔥',
    'foam-production-machine': '🧽',
    'foam-cutting-machine': '✂️',
    'sponge-cutting-machine': '🧼',
    'cigarette-making-machine': '🚬',
    'cigarette-packing-machine': '📦',
    'tobacco-packaging-machine': '🧺',
    'powder-coating-machine': '🎨',
    'spray-booth': '🚿',
    'spray-gun': '💨',
    'paint-mixing-machine': '🌀',
    'tractor': '🚜',
    'mini-tractor': '👨‍🌾',
    'combine-harvester': '🌾',
    'seed-drill': '🌱',
    'sprayer': '💦',
    'agri-water-pump': '🚰',
    'tensile-testing-machine': '📏',
    'hardness-tester': '🪨',
    'ph-meter': '🧪',
    'spectrophotometer': '🌈',
    'microscope': '🔬',
    'forklift': '🏗️',
    'pallet-truck': '🛒',
    'stacker': '📦',
    'conveyor-belt': '🔄',
    'roller-conveyor': '🎢',
    'overhead-crane': '🪝',
    'circular-saw': '🪚',
    'band-saw': '🪚',
    'wood-planer': '🪵',
    'wood-router': '🛠️',
    'sanding-machine': '🧹',
    'banbury-mixer': '🌀',
    'two-roll-mill': '🛞',
    'vulcanizing-press': '🔥',
    'rubber-molding-machine': '🧱',
    'glass-melting-furnace': '🔥',
    'glass-cutting-machine': '✂️',
    'tile-press': '🧱',
    'kiln-furnace': '♨️',
    'fleshing-machine': '🐄',
    'tanning-drum': '🛢️',
    'shoe-lasting-machine': '👞',
    'sole-press': '🥾',
    'dump-truck': '🚚',
    'cargo-truck': '🚛',
    'tow-truck': '🪝',
    'tanker-truck': '🛢️',
    'refrigerated-truck': '🧊',
    'diesel-generator': '⚡',
    'gas-generator': '🔥',
    'silent-generator': '🔇'
};

const secondHandCategories = Object.entries(secondHandCatalog).map(([id, config]) => ({
    id,
    icon: config.icon,
    title: config.title,
    description: config.description
}));

const secondHandInventoryData = Object.entries(secondHandCatalog).flatMap(([categoryId, config]) =>
    config.items.map(item => ({
        id: item.id,
        category: categoryId,
        icon: secondHandItemIcons[item.id] || item.icon || config.icon,
        name: item.name,
        description: item.description || secondHandDefaultDescription,
        meta: item.meta || [],
        pdfUrl: item.pdfUrl
    }))
);

window.secondHandCategories = secondHandCategories;
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
        'د خوراکي غوړ د تولید لین',
        'Fiberglass Wool Production Lines',
        'خطوط تولید پشم شیشه',
        'د فایبر ګلاس وړۍ د تولید لینونه',
        'PET Bottle Washing System',
        'شستشوی بطری PET',
        'د PET بوتل د مینځلو سیستم',
        'Needle Punching Line',
        'ماشین نیدل پانچ',
        'د نیدل پانچ لاین'
    ],
    'printing-machines': ['دستگاه های چاپ', 'Printing Machines', 'چاپ', 'printing', 'چاپ ماشینونه', 'Printing Machines'],
    'sports-equipment': ['تجهیزات ورزشی', 'Sports Equipment', 'ورزشی', 'sports', 'ورزشي تجهیزات', 'Sports Equipment'],
    'metallurgy': ['متالورژی و فلزکاری', 'Metallurgy & Metalworking', 'متالورژی', 'metallurgy', 'فلزکاری', 'metalworking', 'د فلزاتو علم', 'metallurgy', 'فلزکاري', 'metalworking'],
    'metallurgy-coating': [
        'متالورژی و کوتینگ صنعتی',
        'Metallurgy & Coating Systems',
        'خط گالوانیزه',
        'galvanizing line',
        'پوشش پودری',
        'powder coating',
        'رنگ پاشی صنعتی',
        'industrial paint booth',
        'تیمار سطح',
        'surface treatment',
        'metal coating',
        'coating equipment'
    ],
    'mixing-equipments': [
        'تجهیزات میکسینگ و تانک‌سازی',
        'Mixing Equipment & Process Tanks',
        'میکسر صنعتی',
        'industrial mixer',
        'راکتور شیمیایی',
        'chemical reactor',
        'تانک ذخیره',
        'storage tank',
        'تجهیزات فوم',
        'foam mixing',
        'process tank',
        'mixing equipment'
    ],
    'construction-materials': [
        'ماشین آلات مصالح ساخت',
        'Construction Materials Machinery',
        'مصالح ساختمانی',
        'construction materials',
        'د ساختماني موادو ماشینونه',
        'Construction Materials Machinery',
        'Concrete Block Machines',
        'قالب بلوک بتنی',
        'بچینگ آسفالت',
        'Asphalt Plant',
        'جرثقیل کارگاهی',
        'لودر ساختمانی',
        'میلگرد فولادی',
        'Waterproofing Systems'
    ],
    'transportation': [
        'ماشین آلات حمل‌ونقل',
        'Transportation Machinery',
        'ناوگان حمل و نقل',
        'Logistics Fleet',
        'تریلر',
        'Trailer',
        'کامیون',
        'Truck',
        'لیفتراک',
        'Forklift',
        'حمل جاده‌ای',
        'Road Logistics',
        'ترانسپورت افغانستان',
        'Afghanistan Transport'
    ],
    'electronics-energy-systems': [
        'الکترونیک و سیستم‌های انرژی',
        'Electronics & Energy Systems',
        'سیستم‌های انرژی',
        'electronics',
        'energy systems',
        'renewable energy',
        'solar power',
        'wind turbine',
        'industrial laser',
        'networking equipment',
        'pcb assembly',
        'مونتاژ PCB',
        'لیزر صنعتی',
        'انرژی خورشیدی',
        'توربین بادی',
        'تجهیزات شبکه',
        'د برېښنا او انرژۍ سیستمونه',
        'لمریزه انرژي',
        'د باد توربین'
    ],
    'tires': [
        'تایرهای صنعتی',
        'Industrial Tyres',
        'تایر ناوگان',
        'Fleet Tyres',
        'تایر تریلر',
        'Trailer Tyre',
        'تایر کامیون',
        'Truck Tyre',
        'تایر ماشین آلات سنگین',
        'Heavy Equipment Tyre',
        'تایر کشاورزی',
        'Agricultural Tyre',
        'تایر لیفتراک',
        'Forklift Tyre',
        'ټایر',
        'Tyre',
        'ټایر ناوګان',
        'Fleet Tire',
        'Sanaatchi Tires'
    ],
    'plastic-processing': ['دستگاه های فرآوری پلاستیک', 'Plastic Processing Machines', 'پلاستیک', 'plastic', 'د پلاستیک پروسس ماشینونه', 'Plastic Processing Machines'],
    'plastic-industry': ['صنعت پلاستیک', 'Plastic Industry', 'اکسترودر پلاستیک', 'plastic extrusion', 'تزریق پلاستیک', 'plastic injection', 'بازیافت پلاستیک', 'plastic recycling'],
    'paint-coating': ['ماشین آلات رنگ و کوتینگ', 'Paint & Coating Machinery', 'رنگ', 'paint', 'کوتینگ', 'coating', 'د رنګ او پوښښت ماشینونه', 'Paint & Coating Machinery'],
    'foam-sponge': ['ماشین آلات لوم و اسفنج', 'Foam & Sponge Machinery', 'اسفنج', 'foam', 'لوم', 'sponge', 'د فوم او اسفنج ماشینونه', 'Foam & Sponge Machinery'],
    'tobacco': ['ماشین آلات تناکو و سیگار', 'Tobacco & Cigarette Machinery', 'تناکو', 'tobacco', 'سیگار', 'cigarette', 'د توتون او سیګر ماشینونه', 'Tobacco & Cigarette Machinery'],
    'cooling-heating': ['دستگاه های سرمایش و گرمایش', 'Cooling & Heating Equipment', 'سرمایش', 'cooling', 'گرمایش', 'heating', 'د سړښت او تودوخه تجهیزات', 'Cooling & Heating Equipment'],
    'pumps-compressors': ['پمپ ها و کمپرسور ها صنعتی', 'Industrial Pumps & Compressors', 'پمپ', 'pump', 'کمپرسور', 'compressor', 'د صنعت پمپونه او کمپرسورونه', 'Industrial Pumps & Compressors'],
    'industrial-laser': ['لیزر صنعتی', 'Industrial Laser', 'لیزر', 'laser', 'صنعت لیزر', 'Industrial Laser'],
    'metallurgy-equipment': ['تجهیزات متالورژی دست دوم', 'Metallurgy Equipment', 'متالورژی', 'metallurgy', 'فلزکاری', 'metal working', 'د فلزاتو تجهیزات', 'Metallurgy Equipment'],
    'textile-machinery': ['ماشین آلات نساجی دست دوم', 'Textile Machinery', 'نساجی', 'textile', 'ماشین بافندگی', 'weaving', 'د نساجۍ ماشینونه', 'Textile Machinery'],
    'food-processing': ['ماشین آلات فرآوری غذا', 'Food Processing Machinery', 'غذا', 'food', 'فرآوری', 'processing', 'د خوړو پروسس', 'Food Processing Machinery'],
    'packaging-machinery': ['ماشین آلات بسته بندی', 'Packaging Machinery', 'بسته بندی', 'packaging', 'پرکن', 'filling', 'د بسته بندۍ ماشینونه', 'Packaging Machinery'],
    'agricultural-machinery': ['ماشین آلات کشاورزی', 'Agricultural Machinery', 'کشاورزی', 'agriculture', 'تراکتور', 'tractor', 'د کرنې ماشینونه', 'Agricultural Machinery'],
    'laboratory-equipment': ['تجهیزات آزمایشگاهی', 'Laboratory Equipment', 'آزمایشگاه', 'laboratory', 'آزمایش', 'testing', 'لابراتوار تجهیزات', 'Laboratory Equipment'],
    'material-handling': ['تجهیزات جابجایی مواد', 'Material Handling Equipment', 'جابجایی', 'material handling', 'لیفتراک', 'forklift', 'د موادو لېږد', 'Material Handling Equipment'],
    'wood-working': ['ماشین آلات نجاری', 'Wood Working Machinery', 'چوب', 'wood', 'نجاری', 'carpentry', 'د لرګيو ماشینونه', 'Wood Working Machinery'],
    'rubber-processing': ['ماشین آلات لاستیک', 'Rubber Processing Machinery', 'لاستیک', 'rubber', 'ولکانیزه', 'vulcanizing', 'د ربړ پروسس', 'Rubber Processing Machinery'],
    'glass-ceramics': ['ماشین آلات شیشه و سرامیک', 'Glass & Ceramics Machinery', 'شیشه', 'glass', 'سرامیک', 'ceramics', 'د ښیښې او سرامیک ماشینونه', 'Glass & Ceramics Machinery'],
    'leather-footwear': ['ماشین آلات چرم و کفش', 'Leather & Footwear Machinery', 'چرم', 'leather', 'کفش', 'footwear', 'د چرم او بوټانو ماشینونه', 'Leather & Footwear Machinery'],
    'trucks-lorries': ['کامیون و لاری', 'Trucks & Lorries', 'کامیون', 'truck', 'لاری', 'lorry', 'لارۍ', 'trucks'],
    'generators': ['ژنراتور دست دوم', 'Generators', 'ژنراتور', 'generator', 'برق اضطراری', 'backup power', 'جنراتورونه', 'Generators'],
    'tanks': ['مخازن', 'Tanks', 'مخزن', 'tank', 'تنکونه', 'Tanks'],
    'packaging': [
        'بسته بندی',
        'Packaging',
        'بسته',
        'package',
        'بسته بندي',
        'Packaging',
        'پردازش و بسته‌بندی تنباکو',
        'Tobacco Processing & Packaging',
        'تنباکو',
        'tobacco',
        'سیگار',
        'cigarette',
        'پاکت تنباکو',
        'tobacco pouch'
    ],
    'chemical-pharma': ['ماشین آلات شیمیایی و دارویی', 'Chemical & Pharmaceutical Machinery', 'شیمیایی', 'chemical', 'دارویی', 'pharmaceutical', 'د کیمیاوي او درملو ماشینونه', 'Chemical & Pharmaceutical Machinery'],
    'machinery-parts': [
        'پرزه‌جات ماشین‌آلات', 'Machinery Spare Parts', 'پرزه‌جات', 'spare parts', 'د ماشینونو پرزې', 'Machinery Spare Parts',
        'باکت بیل مکانیکی', 'Excavator Bucket', 'د اکسکاویټر باکت',
        'شیلنگ هیدرولیک', 'Hydraulic Hose', 'هایډرولیک نلۍ',
        'زنجیر شنی', 'Track Chain', 'د ټراک زنځیر',
        'قطعات موتور دیزلی', 'Diesel Engine Parts', 'د ډیزل انجن پرزې',
        'قالب تزریق', 'Injection Mold', 'د انجکشن قالب',
        'تیغه برش', 'Cutting Blade', 'د پرې کولو تیغ',
        'کنترلر CNC', 'CNC Controller', 'د CNC کنټرولر',
        'موتور و گیربکس', 'Motor Gearbox', 'موټر او ګیرباکس',
        'شفت تراکتور', 'Tractor Shaft', 'د ټراکټر شافټ',
        'تیغه دروگر', 'Harvester Blade', 'د دروګر تیغه',
        'پمپ آب کشاورزی', 'Irrigation Pump', 'د اوبه خور پمپ',
        'بذرپاش', 'Seed Drill', 'د بذرپاش سیسټم',
        'یاتاقان صنعتی', 'Industrial Bearings', 'صنعتي یاتاقانونه',
        'فیلتر صنعتی', 'Industrial Filters', 'صنعتي فلټرونه',
        'باتری صنعتی', 'Industrial Batteries', 'صنعتي بیټرۍ',
        'تسمه انتقال نیرو', 'Power Transmission Belt', 'د ځواک لېږد تسمه'
    ],

    'paper-pulp': ['ماشین آلات کاغذ و سلولوز', 'Paper & Pulp Machinery', 'کاغذ', 'paper', 'د کاغذ او پالپ ماشینونه', 'Paper & Pulp Machinery', 'خطوط پالپ و کاغذ', 'Pulp & Paper Lines', 'پالپ', 'pulp', 'کاغذسازی', 'paper mill', 'د پالپ او کاغذ کرښې', 'Paper & Pulp'],
    'electronic-machinery': ['ماشین آلات الکترونیکی', 'Electronic Machinery', 'الکترونیک', 'electronic', 'د الکترونیک ماشینونه', 'Electronic Machinery'],
    'telecom-parts': ['قطعات و لوازم اینترنتی و مخابراتی', 'Internet & Telecommunication Parts', 'مخابراتی', 'telecom', 'اینترنت', 'internet', 'د انترنت او مخابراتي برخې', 'Internet & Telecommunication Parts'],
    'second-hand': ['ماشین آلات دست دوم', 'Second Hand Machinery', 'دست دوم', 'second hand', 'د دوهم لاس ماشینونه', 'Second Hand Machinery'],
    'industrial-raw-materials': [
        'مواد اولیه صنعتی',
        'Industrial Raw Materials',
        'خام مواد',
        'raw materials',
        'مواد خام',
        'feedstock',
        'فولاد',
        'steel',
        'پلیمر',
        'polymer',
        'مواد شیمیایی',
        'chemicals',
        'مواد معدنی',
        'minerals',
        'صنعتي خام مواد'
    ]
};

// Equipment data for each category
const equipmentData = {
    'production-lines': [
        {
            name: { fa: 'قالب‌گیری بلوک بتنی', en: 'Concrete Block Molding Station', ps: 'د کانکریټ بلاک قالب جوړولو سټېشن' },
            description: { fa: 'پرس هیدرولیک، قالب‌های استاندارد و سیستم تغذیه مواد برای تولید بلوک توپر و توخالی.', en: 'Hydraulic press, standard mould sets and aggregate feed system for solid and hollow block production.', ps: 'هایډرولیک پرس، معیاري قالبونه او د موادو تغذیه سیستم د کلک او تشو بلاکونو تولید لپاره.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-molding.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'عمل‌آوری و بخاردهی بلوک', en: 'Concrete Block Curing System', ps: 'د کانکریټ بلاک د عمل آوري سیستم' },
            description: { fa: 'تونل عمل‌آوری با کنترل رطوبت و دما برای تسریع مقاومت نهایی بلوک.', en: 'Curing tunnel with humidity and temperature control to accelerate final block strength.', ps: 'د رطوبت او تودوخې کنټرول لرونکی تونل چې د بلاک وروستۍ مقاومت چټکوي.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-curing.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'سیستم پالت‌گذاری و بسته‌بندی بلوک', en: 'Concrete Block Palletising Line', ps: 'د کانکریټ بلاک د پالت کولو لاین' },
            description: { fa: 'انتقال، چیدمان و تسمه‌پیچی خودکار برای آماده‌سازی حمل بلوک.', en: 'Automated transfer, stacking and strapping for dispatch-ready block bundles.', ps: 'د بلاکونو د لېږلو لپاره اتومات انتقال، څپېړل او تسمه کول.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-palletizing.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'بچینگ و میکسینگ آسفالت', en: 'Asphalt Mixing Plant', ps: 'د اسفالټ د مخلوط فابریکه' },
            description: { fa: 'بچینگ گرم با سیستم توزین دقیق، کنترل PLC و فیلتر کیسه‌ای برای کاهش آلودگی.', en: 'Hot-mix batching plant with precise weighing, PLC control and baghouse filtration.', ps: 'د دقیق وزن، PLC کنټرول او د دوړو د فلټر کولو سیسټم لرونکې ګرمې مخلوط فابریکه.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-mixing.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'فینیشر و آسفالت‌ریز', en: 'Asphalt Paver', ps: 'د اسفالټ ایښودلو ماشین' },
            description: { fa: 'فینیشر زنجیری با سیستم توزیع یکنواخت و کنترل ضخامت لایه آسفالت.', en: 'Tracked asphalt paver with uniform distribution and layer thickness control.', ps: 'د زنځیر لرونکی اسفالټ فینیشر چې یکنواخت توزیع او د طبقي ضخامت کنټرول لري.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-paving.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'غلتک فشرده‌سازی آسفالت', en: 'Asphalt Compaction Roller', ps: 'د اسفالټ کمپکشن رولر' },
            description: { fa: 'غلتک ویبره‌ای دو درام با سیستم پاشش آب و مانیتورینگ تراکم.', en: 'Dual-drum vibratory roller with water spray and compaction monitoring.', ps: 'دوه ډرم لرونکی ویبرېشن رولر د اوبو د شیندلو او تراکم څارنې سره.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-compacting.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'بیل مکانیکی ۲۰ تنی', en: '20-Ton Crawler Excavator', ps: '۲۰ ټنه چینجي اکسکاویټر' },
            description: { fa: 'بیل مکانیکی استاندارد با موتور کم‌مصرف، سیستم هیدرولیک پیشرفته و کابین محافظ.', en: 'Standard crawler excavator featuring fuel-efficient engine, advanced hydraulics and ROPS cabin.', ps: 'معیاري چینجي اکسکاویټر د کم مصرف انجن، پرمختللي هایدرولیک او خوندي کابین سره.' },
            pdfUrl: 'pdfs/construction-materials/excavator/excavator.pdf',
            category: 'excavator'
        },
        {
            name: { fa: 'مینی بیل مکانیکی', en: 'Mini Excavator 5-Ton', ps: '۵ ټنه میني اکسکاویټر' },
            description: { fa: 'مناسب برای پروژه‌های شهری با شعاع چرخش کم، قابلیت حمل آسان و ابزار متنوع.', en: 'Compact excavator with tight swing radius, easy transport and versatile attachments for urban jobs.', ps: 'کمپکټ اکسکاویټر چې کوچنی تاو، اسانه لېږد او بېلابېل ملحقات د ښاري پروژو لپاره لري.' },
            pdfUrl: 'pdfs/construction-materials/excavator/mini-excavator.pdf',
            category: 'excavator'
        },
        {
            name: { fa: 'کیت و قطعات بیل مکانیکی', en: 'Excavator Wear Parts Kit', ps: 'د اکسکاویټر د استهلاکي پرزو کټ' },
            description: { fa: 'ست کامل بوش، باکت، دندانه و شیلنگ هیدرولیک برای نگهداری دوره‌ای.', en: 'Complete kit of bushes, buckets, teeth and hydraulic hoses for planned maintenance.', ps: 'د بوشونو، باکت، غاښونو او هایدرولیک نلونو بشپړ کټ د منظم ساتنې لپاره.' },
            pdfUrl: 'pdfs/construction-materials/excavator/excavator-parts.pdf',
            category: 'excavator'
        },
        {
            name: { fa: 'جرثقیل کارگاهی ۵۰ تنی', en: '50-Ton Mobile Crane', ps: '۵۰ ټنه ګرځنده جرثقیل' },
            description: { fa: 'جرثقیل بوم تلسکوپی با سیستم تثبیت، کنترل ایمنی لحظه‌ای و کابین دوگانه.', en: 'Telescopic mobile crane with outrigger stabilisation, real-time safety control and dual cab.', ps: 'د تلسکوپي بوم ګرځنده جرثقیل د تثبیت برښو، د خوندیتوب سمدستي کنټرول او دوه ګونه کابین سره.' },
            pdfUrl: 'pdfs/construction-materials/crane/crane.pdf',
            category: 'crane'
        },
        {
            name: { fa: 'تاور کرین پروژه‌های بلندمرتبه', en: 'Tower Crane for High-Rise Projects', ps: 'د لوړ پوړو پروژو لپاره تاور کرین' },
            description: { fa: 'تاورکرین با طول فلش متغیر، کابین اپراتوری پیشرفته و سیستم ضد باد.', en: 'Tower crane with variable jib lengths, advanced operator cabin and wind resistance system.', ps: 'تاور کرین د بدلېدونکي بازو، پرمختللي کابین او د باد پر وړاندې د خوندیتوب سیستم سره.' },
            pdfUrl: 'pdfs/construction-materials/crane/tower-crane.pdf',
            category: 'crane'
        },
        {
            name: { fa: 'قطعات و اسلیو جرثقیل', en: 'Crane Spare Parts & Slewing Rings', ps: 'د جرثقیل سپیر پرزې او سلوی رینګونه' },
            description: { fa: 'مجموعه گیربکس، موتور، اسلیو و کابل‌های جرثقیل برای کاهش توقف پروژه.', en: 'Gearboxes, motors, slewing rings and cabling packages to minimise crane downtime.', ps: 'ګیربکسونه، موټورونه، سلوی رینګونه او کیبل پیکجونه د جرثقیل د درېدو مخنیوي لپاره.' },
            pdfUrl: 'pdfs/construction-materials/crane/crane-parts.pdf',
            category: 'crane'
        },
        {
            name: { fa: 'لودر چرخ‌دار صنعتی', en: 'Industrial Wheel Loader', ps: 'صنعتي څرخ لرونکی لوډر' },
            description: { fa: 'لودر با سطل چندمنظوره، سیستم توزین دیجیتال و محور تقویت‌شده.', en: 'Wheel loader with multi-purpose bucket, digital weighing and reinforced axles.', ps: 'د څو منظوره سطل، ډیجیټل وزن او پیاوړي محورونو لرونکی څرخ لرونکی لوډر.' },
            pdfUrl: 'pdfs/construction-materials/loader/loader.pdf',
            category: 'loader'
        },
        {
            name: { fa: 'لودر چرخ‌دار معدنی', en: 'Heavy-Duty Wheel Loader', ps: 'دروند څرخ لرونکی لوډر' },
            description: { fa: 'لودر پرقدرت برای معادن و پروژه‌های حجیم با سیستم خنک‌کاری تقویت‌شده.', en: 'High-power loader for mining and bulk projects with reinforced cooling system.', ps: 'د کانونو او درنو پروژو لپاره قوي لوډر د پیاوړي یخول سیستم سره.' },
            pdfUrl: 'pdfs/construction-materials/loader/wheel-loader.pdf',
            category: 'loader'
        },
        {
            name: { fa: 'قطعات و الحاقات لودر', en: 'Loader Attachments & Spares', ps: 'د لوډر ملحقات او سپیر پرزې' },
            description: { fa: 'ست کامل تایر، جک، بوش و الحاقات ویژه برای کاربری‌های مختلف.', en: 'Full kit of tyres, cylinders, bushings and specialised attachments for varied operations.', ps: 'د ټایرونو، جکونو، بوشونو او ځانګړو ملحقاتو بشپړ کټ د بېلابېلو کارونو لپاره.' },
            pdfUrl: 'pdfs/construction-materials/loader/loader-parts.pdf',
            category: 'loader'
        },
        {
            name: { fa: 'قالب‌گیری بلوک بتنی', en: 'Concrete Block Molding Station', ps: 'د کانکریټ بلاک قالب جوړولو سټېشن' },
            description: { fa: 'پرس هیدرولیک، قالب‌های استاندارد و سیستم تغذیه مواد برای تولید بلوک توپر و توخالی.', en: 'Hydraulic press, standard mould sets and aggregate feed system for solid and hollow block production.', ps: 'هایډرولیک پرس، معیاري قالبونه او د موادو تغذیه سیستم د کلک او تشو بلاکونو تولید لپاره.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-molding.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'عمل‌آوری و بخاردهی بلوک', en: 'Concrete Block Curing System', ps: 'د کانکریټ بلاک د عمل آوري سیستم' },
            description: { fa: 'تونل عمل‌آوری با کنترل رطوبت و دما برای تسریع مقاومت نهایی بلوک.', en: 'Curing tunnel with humidity and temperature control to accelerate final block strength.', ps: 'د رطوبت او تودوخې کنټرول لرونکی تونل چې د بلاک وروستۍ مقاومت چټکوي.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-curing.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'سیستم پالت‌گذاری و بسته‌بندی بلوک', en: 'Concrete Block Palletising Line', ps: 'د کانکریټ بلاک د پالت کولو لاین' },
            description: { fa: 'انتقال، چیدمان و تسمه‌پیچی خودکار برای آماده‌سازی حمل بلوک.', en: 'Automated transfer, stacking and strapping for dispatch-ready block bundles.', ps: 'د بلاکونو د لېږلو لپاره اتومات انتقال، څپېړل او تسمه کول.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-palletizing.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'بچینگ و میکسینگ آسفالت', en: 'Asphalt Mixing Plant', ps: 'د اسفالټ د مخلوط فابریکه' },
            description: { fa: 'بچینگ گرم با سیستم توزین دقیق، کنترل PLC و فیلتر کیسه‌ای برای کاهش آلودگی.', en: 'Hot-mix batching plant with precise weighing, PLC control and baghouse filtration.', ps: 'د دقیق وزن، PLC کنټرول او د دوړو د فلټر کولو سیستم لرونکې ګرمې مخلوط فابریکه.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-mixing.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'فینیشر و آسفالت‌ریز', en: 'Asphalt Paver', ps: 'د اسفالټ ایښودلو ماشین' },
            description: { fa: 'فینیشر زنجیری با سیستم توزیع یکنواخت و کنترل ضخامت لایه آسفالت.', en: 'Tracked asphalt paver with uniform distribution and layer thickness control.', ps: 'د زنځیر لرونکی اسفالټ فینیشر چې یکنواخت توزیع او د طبقي ضخامت کنټرول لري.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-paving.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'قالب‌گیری بلوک بتنی', en: 'Concrete Block Molding Station', ps: 'د کانکریټ بلاک قالب جوړولو سټېشن' },
            description: { fa: 'پرس هیدرولیک، قالب‌های استاندارد و سیستم تغذیه مواد برای تولید بلوک توپر و توخالی.', en: 'Hydraulic press, standard mould sets and aggregate feed system for solid and hollow block production.', ps: 'هایډرولیک پرس، معیاري قالبونه او د موادو تغذیه سیستم د کلک او تشو بلاکونو تولید لپاره.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-molding.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'عمل‌آوری و بخاردهی بلوک', en: 'Concrete Block Curing System', ps: 'د کانکریټ بلاک د عمل آوري سیستم' },
            description: { fa: 'تونل عمل‌آوری با کنترل رطوبت و دما برای تسریع مقاومت نهایی بلوک.', en: 'Curing tunnel with humidity and temperature control to accelerate final block strength.', ps: 'د رطوبت او تودوخې کنټرول لرونکی تونل چې د بلاک وروستۍ مقاومت چټکوي.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-curing.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'سیستم پالت‌گذاری و بسته‌بندی بلوک', en: 'Concrete Block Palletising Line', ps: 'د کانکریټ بلاک د پالت کولو لاین' },
            description: { fa: 'انتقال، چیدمان و تسمه‌پیچی خودکار برای آماده‌سازی حمل بلوک.', en: 'Automated transfer, stacking and strapping for dispatch-ready block bundles.', ps: 'د بلاکونو د لېږلو لپاره اتومات انتقال، څپېړل او تسمه کول.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-palletizing.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'بچینگ و میکسینگ آسفالت', en: 'Asphalt Mixing Plant', ps: 'د اسفالټ د مخلوط فابریکه' },
            description: { fa: 'بچینگ گرم با سیستم توزین دقیق، کنترل PLC و فیلتر کیسه‌ای برای کاهش آلودگی.', en: 'Hot-mix batching plant with precise weighing, PLC control and baghouse filtration.', ps: 'د دقیق وزن، PLC کنټرول او د دوړو د فلټر کولو سیستم لرونکې ګرمې مخلوط فابریکه.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-mixing.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'فینیشر و آسفالت‌ریز', en: 'Asphalt Paver', ps: 'د اسفالټ ایښودلو ماشین' },
            description: { fa: 'فینیشر زنجیری با سیستم توزیع یکنواخت و کنترل ضخامت لایه آسفالت.', en: 'Tracked asphalt paver with uniform distribution and layer thickness control.', ps: 'د زنځیر لرونکی اسفالټ فینیشر چې یکنواخت توزیع او د طبقي ضخامت کنټرول لري.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-paving.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'غلتک فشرده‌سازی آسفالت', en: 'Asphalt Compaction Roller', ps: 'د اسفالټ کمپکشن رولر' },
            description: { fa: 'غلتک ویبره‌ای دو درام با سیستم پاشش آب و مانیتورینگ تراکم.', en: 'Dual-drum vibratory roller with water spray and compaction monitoring.', ps: 'دوه ډرم لرونکی ویبرېشن رولر د اوبو د شیندلو او تراکم څارنې سره.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-compacting.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'بیل مکانیکی ۲۰ تنی', en: '20-Ton Crawler Excavator', ps: '۲۰ ټنه چینجي اکسکاویټر' },
            description: { fa: 'بیل مکانیکی استاندارد با موتور کم‌مصرف، سیستم هیدرولیک پیشرفته و کابین محافظ.', en: 'Standard crawler excavator featuring fuel-efficient engine, advanced hydraulics and ROPS cabin.', ps: 'معیاري چینجي اکسکاویټر د کم مصرف انجن، پرمختللي هایدرولیک او خوندي کابین سره.' },
            pdfUrl: 'pdfs/construction-materials/excavator/excavator.pdf',
            category: 'excavator'
        },
        {
            name: { fa: 'مینی بیل مکانیکی', en: 'Mini Excavator 5-Ton', ps: '۵ ټنه میني اکسکاویټر' },
            description: { fa: 'مناسب برای پروژه‌های شهری با شعاع چرخش کم، قابلیت حمل آسان و ابزار متنوع.', en: 'Compact excavator with tight swing radius, easy transport and versatile attachments for urban jobs.', ps: 'کمپکټ اکسکاویټر چې کوچنی تاو، اسانه لېږد او بېلابېل ملحقات د ښاري پروژو لپاره لري.' },
            pdfUrl: 'pdfs/construction-materials/excavator/mini-excavator.pdf',
            category: 'excavator'
        },
        {
            name: { fa: 'کیت و قطعات بیل مکانیکی', en: 'Excavator Wear Parts Kit', ps: 'د اکسکاویټر د استهلاکي پرزو کټ' },
            description: { fa: 'ست کامل بوش، باکت، دندانه و شیلنگ هیدرولیک برای نگهداری دوره‌ای.', en: 'Complete kit of bushes, buckets, teeth and hydraulic hoses for planned maintenance.', ps: 'د بوشونو، باکت، غاښونو او هایدرولیک نلونو بشپړ کټ د منظم ساتنې لپاره.' },
            pdfUrl: 'pdfs/construction-materials/excavator/excavator-parts.pdf',
            category: 'excavator'
        },
        {
            name: { fa: 'جرثقیل کارگاهی ۵۰ تنی', en: '50-Ton Mobile Crane', ps: '۵۰ ټنه ګرځنده جرثقیل' },
            description: { fa: 'جرثقیل بوم تلسکوپی با سیستم تثبیت، کنترل ایمنی لحظه‌ای و کابین دوگانه.', en: 'Telescopic mobile crane with outrigger stabilisation, real-time safety control and dual cab.', ps: 'د تلسکوپي بوم ګرځنده جرثقیل د تثبیت برښو، د خوندیتوب سمدستي کنټرول او دوه ګونه کابین سره.' },
            pdfUrl: 'pdfs/construction-materials/crane/crane.pdf',
            category: 'crane'
        },
        {
            name: { fa: 'قالب‌گیری بلوک بتنی', en: 'Concrete Block Molding Station', ps: 'د کانکریټ بلاک قالب جوړولو سټېشن' },
            description: { fa: 'پرس هیدرولیک، قالب‌های استاندارد و سیستم تغذیه مواد برای تولید بلوک توپر و توخالی.', en: 'Hydraulic press, standard mould sets and aggregate feed system for solid and hollow block production.', ps: 'هایډرولیک پرس، معیاري قالبونه او د موادو تغذیه سیستم د کلک او تشو بلاکونو تولید لپاره.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-molding.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'عمل‌آوری و بخاردهی بلوک', en: 'Concrete Block Curing System', ps: 'د کانکریټ بلاک د عمل آوري سیستم' },
            description: { fa: 'تونل عمل‌آوری با کنترل رطوبت و دما برای تسریع مقاومت نهایی بلوک.', en: 'Curing tunnel with humidity and temperature control to accelerate final block strength.', ps: 'د رطوبت او تودوخې کنټرول لرونکی تونل چې د بلاک وروستۍ مقاومت چټکوي.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-curing.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'سیستم پالت‌گذاری و بسته‌بندی بلوک', en: 'Concrete Block Palletising Line', ps: 'د کانکریټ بلاک د پالت کولو لاین' },
            description: { fa: 'انتقال، چیدمان و تسمه‌پیچی خودکار برای آماده‌سازی حمل بلوک.', en: 'Automated transfer, stacking and strapping for dispatch-ready block bundles.', ps: 'د بلاکونو د لېږلو لپاره اتومات انتقال، څپېړل او تسمه کول.' },
            pdfUrl: 'pdfs/construction-materials/concrete-block/block-palletizing.pdf',
            category: 'concrete-block'
        },
        {
            name: { fa: 'بچینگ و میکسینگ آسفالت', en: 'Asphalt Mixing Plant', ps: 'د اسفالټ د مخلوط فابریکه' },
            description: { fa: 'بچینگ گرم با سیستم توزین دقیق، کنترل PLC و فیلتر کیسه‌ای برای کاهش آلودگی.', en: 'Hot-mix batching plant with precise weighing, PLC control and baghouse filtration.', ps: 'د دقیق وزن، PLC کنټرول او د دوړو د فلټر کولو سیستم لرونکې ګرمې مخلوط فابریکه.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-mixing.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'فینیشر و آسفالت‌ریز', en: 'Asphalt Paver', ps: 'د اسفالټ ایښودلو ماشین' },
            description: { fa: 'فینیشر زنجیری با سیستم توزیع یکنواخت و کنترل ضخامت لایه آسفالت.', en: 'Tracked asphalt paver with uniform distribution and layer thickness control.', ps: 'د زنځیر لرونکی اسفالټ فینیشر چې یکنواخت توزیع او د طبقي ضخامت کنټرول لري.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-paving.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'غلتک فشرده‌سازی آسفالت', en: 'Asphalt Compaction Roller', ps: 'د اسفالټ کمپکشن رولر' },
            description: { fa: 'غلتک ویبره‌ای دو درام با سیستم پاشش آب و مانیتورینگ تراکم.', en: 'Dual-drum vibratory roller with water spray and compaction monitoring.', ps: 'دوه ډرم لرونکی ویبرېشن رولر د اوبو د شیندلو او تراکم څارنې سره.' },
            pdfUrl: 'pdfs/construction-materials/asphalt/asphalt-compacting.pdf',
            category: 'asphalt'
        },
        {
            name: { fa: 'بیل مکانیکی ۲۰ تنی', en: '20-Ton Crawler Excavator', ps: '۲۰ ټنه چینجي اکسکاویټر' },
            description: { fa: 'بیل مکانیکی استاندارد با موتور کم‌مصرف، سیستم هیدرولیک پیشرفته و کابین محافظ.', en: 'Standard crawler excavator featuring fuel-efficient engine, advanced hydraulics and ROPS cabin.', ps: 'معیاري چینجي اکسکاویټر د کم مصرف انجن، پرمختللي هایدرولیک او خوندي کابین سره.' },
            pdfUrl: 'pdfs/construction-materials/excavator/excavator.pdf',
            category: 'excavator'
        },
        {
            name: { fa: 'مینی بیل مکانیکی', en: 'Mini Excavator 5-Ton', ps: '۵ ټنه میني اکسکاویټر' },
            description: { fa: 'مناسب برای پروژه‌های شهری با شعاع چرخش کم، قابلیت حمل آسان و ابزار متنوع.', en: 'Compact excavator with tight swing radius, easy transport and versatile attachments for urban jobs.', ps: 'کمپکټ اکسکاویټر چې کوچنی تاو، اسانه لېږد او بېلابېل ملحقات د ښاري پروژو لپاره لري.' },
            pdfUrl: 'pdfs/construction-materials/excavator/mini-excavator.pdf',
            category: 'excavator'
        },
        {
            name: { fa: 'کیت و قطعات بیل مکانیکی', en: 'Excavator Wear Parts Kit', ps: 'د اکسکاویټر د استهلاکي پرزو کټ' },
            description: { fa: 'ست کامل بوش، باکت، دندانه و شیلنگ هیدرولیک برای نگهداری دوره‌ای.', en: 'Complete kit of bushes, buckets, teeth and hydraulic hoses for planned maintenance.', ps: 'د بوشونو، باکت، غاښونو او هایدرولیک نلونو بشپړ کټ د منظم ساتنې لپاره.' },
            pdfUrl: 'pdfs/construction-materials/excavator/excavator-parts.pdf',
            category: 'excavator'
        },
        {
            name: { fa: 'جرثقیل کارگاهی ۵۰ تنی', en: '50-Ton Mobile Crane', ps: '۵۰ ټنه ګرځنده جرثقیل' },
            description: { fa: 'جرثقیل بوم تلسکوپی با سیستم تثبیت، کنترل ایمنی لحظه‌ای و کابین دوگانه.', en: 'Telescopic mobile crane with outrigger stabilisation, real-time safety control and dual cab.', ps: 'د تلسکوپي بوم ګرځنده جرثقیل د تثبیت برښو، د خوندیتوب سمدستي کنټرول او دوه ګونه کابین سره.' },
            pdfUrl: 'pdfs/construction-materials/crane/crane.pdf',
            category: 'crane'
        },
        {
            name: { fa: 'تاور کرین پروژه‌های بلندمرتبه', en: 'Tower Crane for High-Rise Projects', ps: 'د لوړ پوړو پروژو لپاره تاور کرین' },
            description: { fa: 'تاورکرین با طول فلش متغیر، کابین اپراتوری پیشرفته و سیستم ضد باد.', en: 'Tower crane with variable jib lengths, advanced operator cabin and wind resistance system.', ps: 'تاور کرین د بدلېدونکي بازو، پرمختللي کابین او د باد پر وړاندې د خوندیتوب سیستم سره.' },
            pdfUrl: 'pdfs/construction-materials/crane/tower-crane.pdf',
            category: 'crane'
        },
        {
            name: { fa: 'قطعات و اسلیو جرثقیل', en: 'Crane Spare Parts & Slewing Rings', ps: 'د جرثقیل سپیر پرزې او سلوی رینګونه' },
            description: { fa: 'مجموعه گیربکس، موتور، اسلیو و کابل‌های جرثقیل برای کاهش توقف پروژه.', en: 'Gearboxes, motors, slewing rings and cabling packages to minimise crane downtime.', ps: 'ګیربکسونه، موټورونه، سلوی رینګونه او کیبل پیکجونه د جرثقیل د درېدو مخنیوي لپاره.' },
            pdfUrl: 'pdfs/construction-materials/crane/crane-parts.pdf',
            category: 'crane'
        },
        {
            name: { fa: 'لودر چرخ‌دار صنعتی', en: 'Industrial Wheel Loader', ps: 'صنعتي څرخ لرونکی لوډر' },
            description: { fa: 'لودر با سطل چندمنظوره، سیستم توزین دیجیتال و محور تقویت‌شده.', en: 'Wheel loader with multi-purpose bucket, digital weighing and reinforced axles.', ps: 'د څو منظوره سطل، ډیجیټل وزن او پیاوړي محورونو لرونکی څرخ لرونکی لوډر.' },
            pdfUrl: 'pdfs/construction-materials/loader/loader.pdf',
            category: 'loader'
        },
        {
            name: { fa: 'لودر چرخ‌دار معدنی', en: 'Heavy-Duty Wheel Loader', ps: 'دروند څرخ لرونکی لوډر' },
            description: { fa: 'لودر پرقدرت برای معادن و پروژه‌های حجیم با سیستم خنک‌کاری تقویت‌شده.', en: 'High-power loader for mining and bulk projects with reinforced cooling system.', ps: 'د کانونو او درنو پروژو لپاره قوي لوډر د پیاوړي یخول سیستم سره.' },
            pdfUrl: 'pdfs/construction-materials/loader/wheel-loader.pdf',
            category: 'loader'
        },
        {
            name: { fa: 'قطعات و الحاقات لودر', en: 'Loader Attachments & Spares', ps: 'د لوډر ملحقات او سپیر پرزې' },
            description: { fa: 'ست کامل تایر، جک، بوش و الحاقات ویژه برای کاربری‌های مختلف.', en: 'Full kit of tyres, cylinders, bushings and specialised attachments for varied operations.', ps: 'د ټایرونو، جکونو، بوشونو او ځانګړو ملحقاتو بشپړ کټ د بېلابېلو کاروو لپاره.' },
            pdfUrl: 'pdfs/construction-materials/loader/loader-parts.pdf',
            category: 'loader'
        },
        {
            name: { fa: 'سیمان پرتلند تیپ ۱/۲', en: 'Portland Cement Type 1/2', ps: 'د پورټلنډ سمنټ ۱/۲ ډول' },
            description: { fa: 'کیسه و بگ‌های فله‌ای سیمان مطابق استاندارد ASTM با گواهی کیفیت.', en: 'Bagged and bulk Portland cement meeting ASTM standards with quality certification.', ps: 'بوجۍ او بلک پورټلنډ سمنټ چې د ASTM معیارونه پوره کوي او د کیفیت سند لري.' },
            pdfUrl: 'pdfs/construction-materials/materials/cement.pdf',
            category: 'materials'
        },
        {
            name: { fa: 'میلگرد و فولاد تقویتی', en: 'Steel Rebar & Reinforcement', ps: 'د فولادو میلونه او ارمر' },
            description: { fa: 'میلگرد آجدار در سایزهای مختلف با تست کشش و خم برای سازه‌های بتنی.', en: 'Deformed steel rebar in multiple sizes supplied with tensile and bend tests for RC structures.', ps: 'اېښکل شوي فولادي میلونه په بېلابېلو اندازو کې د کشش او تاو ازموینو سره د کانکریټ جوړښتونو لپاره.' },
            pdfUrl: 'pdfs/construction-materials/materials/steel-rebar.pdf',
            category: 'materials'
        },
        {
            name: { fa: 'شن و ماسه شسته و دانه‌بندی', en: 'Washed Sand & Aggregates', ps: 'منځل شوي شګه او جغل' },
            description: { fa: 'شن و ماسه شسته، دانه‌بندی شده و کنترل شده برای بتن‌ریزی و راهسازی.', en: 'Washed, graded aggregates ensuring consistent mix design for concrete and road works.', ps: 'منځل شوي او درجه بندي شوی جغل چې د کانکریټ او سړک جوړولو لپاره ثابت ترکیب برابروي.' },
            pdfUrl: 'pdfs/construction-materials/materials/sand-aggregate.pdf',
            category: 'materials'
        },
        {
            name: { fa: 'سیستم‌های عایق رطوبتی', en: 'Waterproofing Systems', ps: 'د اوبو ضد کولو سیستمونه' },
            description: { fa: 'ایزوگام، پوشش‌های مایع و افزودنی‌های ضد رطوبت برای فونداسیون و سقف.', en: 'Membranes, liquid coatings and additives for waterproofing foundations and roofs.', ps: 'د ایزوګام ورقې، مایع پوښونه او اضافي مواد د بنسټ او چت د اوبو ضد کولو لپاره.' },
            pdfUrl: 'pdfs/construction-materials/materials/waterproofing.pdf',
            category: 'materials'
        },
        {
            name: { fa: 'قالب‌بندی فولادی مدولار', en: 'Modular Steel Formwork', ps: 'مدولر فولادي فارم ورک' },
            description: { fa: 'سیستم قالب‌بندی فولادی با پانل‌های مدولار، قفل و پشت‌بند برای سازه‌های سنگین.', en: 'Modular steel formwork panels with locks and bracing for heavy structural pours.', ps: 'د فولادي مدولر قالب پینلونه د قلفونو او سپورټونو سره د درنو کانکریټ کارونو لپاره.' },
            pdfUrl: 'pdfs/construction-materials/formwork/steel-formwork.pdf',
            category: 'formwork'
        },
        {
            name: { fa: 'قالب‌بندی پلاستیکی سبک', en: 'Lightweight Plastic Formwork', ps: 'ساده پلاستیکي فارم ورک' },
            description: { fa: 'پانل‌های پلیمری سبک، قابل حمل و مقاوم در برابر خوردگی برای اجرای سریع.', en: 'Lightweight polymer panels that are portable, corrosion-resistant and quick to erect.', ps: 'سپک پلیمري پینلونه چې وړونکي، د زنګ پر وړاندې مقاومت او د چټک نصب وړ دي.' },
            pdfUrl: 'pdfs/construction-materials/formwork/plastic-formwork.pdf',
            category: 'formwork'
        },
        {
            name: { fa: 'متعلقات و اکسسوری قالب‌بندی', en: 'Formwork Accessories & Hardware', ps: 'د فارم ورک لوازمات او هارډویر' },
            description: { fa: 'گیره، بولت، اسپیسر و روغن قالب برای نگهداری و افزایش عمر سیستم.', en: 'Clamps, bolts, spacers and release oils to maintain and extend formwork life.', ps: 'کلپونه، بولټونه، سپېسرونه او د قالب غوړي د سیستم د ساتنې او اوږد عمر لپاره.' },
            pdfUrl: 'pdfs/construction-materials/formwork/formwork-accessories.pdf',
            category: 'formwork'
        }
    ],
    'transportation': [
        {
            name: { fa: 'تریلر مسطح', en: 'Flatbed Trailer', ps: 'مسحه ټریلر' },
            description: { fa: 'کفی تقویت‌شده با قفل کانتینر و تسمه‌بند برای حمل بار عمومی و سازه‌ای.', en: 'Reinforced deck with container locks and tie-down gear for general cargo and steel structures.', ps: 'پیاوړی پوړ د کانتینر قلفونو او د بار تړلو تجهیزاتو سره د عمومي او فولادي بار لپاره.' },
            pdfUrl: 'pdfs/transportation/trailers/flatbed-trailer.pdf',
            category: 'trailers'
        },
        {
            name: { fa: 'تریلر کم‌ارتفاع', en: 'Lowbed Trailer', ps: 'لوېد ټریلر' },
            description: { fa: 'سطح بارگیری پایین با رمپ هیدرولیک برای حمل ماشین‌آلات سنگین و بارهای ارتفاع‌دار.', en: 'Low loading deck with hydraulic ramps to move heavy machinery and over-height equipment.', ps: 'ټیټ بار بردار پوړ د هایدرولیک رمپونو سره د درنو ماشینونو او لوړ تجهیزاتو لېږد لپاره.' },
            pdfUrl: 'pdfs/transportation/trailers/lowbed-trailer.pdf',
            category: 'trailers'
        },
        {
            name: { fa: 'تریلر تانکر', en: 'Tanker Trailer', ps: 'تانکر ټریلر' },
            description: { fa: 'تانکر چندمحفظه با سیستم پمپ و سنجش سطح برای حمل سوخت و مایعات صنعتی.', en: 'Multi-compartment tanker with pumping and level monitoring for fuel and industrial liquids.', ps: 'څو خونې لرونکی تانکر د پمپ او د سطحې د څارنې سیستم سره د سون توکو او صنعتي مایعاتو لپاره.' },
            pdfUrl: 'pdfs/transportation/trailers/tanker-trailer.pdf',
            category: 'trailers'
        },
        {
            name: { fa: 'تریلر کانتینربر', en: 'Container Carrier Trailer', ps: 'کانتینر ټریلر' },
            description: { fa: 'شاسی کانتینری با قفل‌های Twist-Lock و سیستم تعلیق بادی برای حمل ۲۰ و ۴۰ فوت.', en: 'Container chassis with twist-locks and air suspension for 20ft and 40ft units.', ps: 'د کانتینر چاسیس د ټویسټ لاکونو او د هوا تعلیق سره د ۲۰ او ۴۰ فوټو کانتینرونو لپاره.' },
            pdfUrl: 'pdfs/transportation/trailers/container-trailer.pdf',
            category: 'trailers'
        },
        {
            name: { fa: 'تریلر یخچالدار', en: 'Refrigerated Trailer', ps: 'یخچال لرونکی ټریلر' },
            description: { fa: 'اتاق عایق با یونیت سردخانه، ثبت دما و برق کمکی برای حمل زنجیره سرد.', en: 'Insulated van with refrigeration unit, temperature logging and standby power for cold-chain loads.', ps: 'عایق بکس د یخچال یونټ، د تودوخې ثبت او د برېښنا ملاتړ سره د سړې زنځیر بار لپاره.' },
            pdfUrl: 'pdfs/transportation/trailers/refrigerated-trailer.pdf',
            category: 'trailers'
        },
        {
            name: { fa: 'کامیون دامپر', en: 'Dump Truck', ps: 'ډمپر کامیون' },
            description: { fa: 'کابین تقویت‌شده با جعبه تخلیه هیدرولیک برای عملیات معدنی و پروژه‌های عمرانی.', en: 'Reinforced cab with hydraulic tipping body for mining and construction haulage.', ps: 'پیاوړی کابین د هایدرولیک ټیپنګ باډۍ سره د کان کیندنې او ساختماني بار لپاره.' },
            pdfUrl: 'pdfs/transportation/trucks/dump-truck.pdf',
            category: 'trucks'
        },
        {
            name: { fa: 'کامیون بارکش', en: 'Cargo Haulage Truck', ps: 'بارکش کامیون' },
            description: { fa: 'شاسی طولانی با سیستم بادی، تلمبه سوخت ذخیره و جعبه ابزار برای حمل بار عمومی.', en: 'Long-wheelbase chassis with air system, auxiliary fuel tank and tool storage for general freight.', ps: 'اوږده چاسیس د هوا سیستم، اضافي د سون ټانک او د وسیلو بکس سره د عمومي بار لپاره.' },
            pdfUrl: 'pdfs/transportation/trucks/cargo-truck.pdf',
            category: 'trucks'
        },
        {
            name: { fa: 'کامیون یدک‌کش', en: 'Tow Recovery Truck', ps: 'ډکړ کامیون' },
            description: { fa: 'وینچ هیدرولیک، بازوی جرثقیل و بوم متحرک برای امداد و حمل وسایل نقلیه.', en: 'Hydraulic winch, crane boom and adjustable underlift for vehicle recovery operations.', ps: 'هایډرولیک وینچ، د کرین بازو او متحرک انډرلفټ سره د وسایطو د ژغورنې لپاره.' },
            pdfUrl: 'pdfs/transportation/trucks/tow-truck.pdf',
            category: 'trucks'
        },
        {
            name: { fa: 'لیفتراک برقی', en: 'Electric Forklift', ps: 'برقي لیفتراک' },
            description: { fa: 'سیستم باتری لیتیوم، شارژر سریع و فرمان ارگونومیک برای محیط‌های بسته.', en: 'Lithium battery system, fast charger and ergonomic steering ideal for indoor terminals.', ps: 'د لیتیوم بیټرۍ سیستم، چټک چارج او ارګونومیک سټیرنګ د سالون کار لپاره.' },
            pdfUrl: 'pdfs/transportation/forklifts/electric-forklift.pdf',
            category: 'forklifts'
        },
        {
            name: { fa: 'لیفتراک دیزلی', en: 'Diesel Forklift', ps: 'دیزلي لیفتراک' },
            description: { fa: 'موتور پرقدرت، دکل برق و دکل مقاوم برای عملیات بیرونی و بار سنگین.', en: 'High-torque engine with robust mast and lighting kit for outdoor heavy-duty handling.', ps: 'لوړ تورک انجن د قوي مَست او څراغونو سره د درنو بهرنیو عملیاتو لپاره.' },
            pdfUrl: 'pdfs/transportation/forklifts/diesel-forklift.pdf',
            category: 'forklifts'
        },
        {
            name: { fa: 'لیفتراک خاکی', en: 'Rough Terrain Forklift', ps: 'خاکی لیفتراک' },
            description: { fa: 'محور چهارچرخ محرک، لاستیک آفرود و گارد محافظ برای سایت‌های ساخت و معادن.', en: 'Four-wheel drive axles, off-road tyres and protective guard for construction and mining sites.', ps: 'څلور څرخ محرک، د ناهموارو ټایرونه او محافظتي چوکاټ د ساختماني او کانونو ساحو لپاره.' },
            pdfUrl: 'pdfs/transportation/forklifts/rough-terrain-forklift.pdf',
            category: 'forklifts'
        }
    ],
    'tires': [
        {
            name: { fa: 'تایر نیمه تریلر', en: 'Semi-Trailer Tyre', ps: 'نیمه ټریلر ټایر' },
            description: { fa: 'شاخص بار بالا و طراحی برای محورهای محرک و یدک برای مسیرهای طولانی.', en: 'High load index casing engineered for drive and trailer axles on long-haul routes.', ps: 'لوړ بار شاخص لرونکی قشر د اوږده سفر لپاره د محرک او ټریلر اکسلو لپاره.' },
            pdfUrl: 'pdfs/tires/transportation-trailers/semi-trailer-tire.pdf',
            category: 'transportation-trailers'
        },
        {
            name: { fa: 'تایر تریلر مسطح', en: 'Flatbed Trailer Tyre', ps: 'مسحه ټریلر ټایر' },
            description: { fa: 'الگوی آج مقاوم در برابر بریدگی با شانه تقویت‌شده برای حمل بار فولادی و کانتینری.', en: 'Cut-resistant tread with reinforced shoulders for steel and container haulage.', ps: 'د پرې کېدو ضد نقش د پیاوړو اوږو سره د فولادو او کانتینر بار لپاره.' },
            pdfUrl: 'pdfs/tires/transportation-trailers/flatbed-trailer-tire.pdf',
            category: 'transportation-trailers'
        },
        {
            name: { fa: 'تایر تریلر تانکر', en: 'Tanker Trailer Tyre', ps: 'تانکر ټریلر ټایر' },
            description: { fa: 'دیواره تقویت‌شده و ترکیب ضد لغزش برای حمل مایعات و مواد خطرناک.', en: 'Reinforced casing and anti-slip compound for liquid and hazardous freight.', ps: 'پیاوړی قشر او د خطا ضد مرکب د مایعاتو او خطرناکو بارونو لپاره.' },
            pdfUrl: 'pdfs/tires/transportation-trailers/tanker-trailer-tire.pdf',
            category: 'transportation-trailers'
        },
        {
            name: { fa: 'تایر تریلر کانتینر', en: 'Container Trailer Tyre', ps: 'کانتینر ټریلر ټایر' },
            description: { fa: 'پروفیل ویژه پیچ و خم با دیواره جانبی مقاوم برای حمل کانتینر ۲۰ و ۴۰ فوت.', en: 'Twist-resistant profile with strong sidewalls for 20ft and 40ft container haulage.', ps: 'د تاو پر وړاندې مقاومت لرونکی نقش د قوي اړخونو سره د ۲۰ او ۴۰ فوټ کانتینر لپاره.' },
            pdfUrl: 'pdfs/tires/transportation-trailers/container-trailer-tire.pdf',
            category: 'transportation-trailers'
        },
        {
            name: { fa: 'تایر کامیون سنگین', en: 'Heavy-Duty Truck Tyre', ps: 'دروند کامیون ټایر' },
            description: { fa: 'آج عمقی با ترکیب مقاوم در برابر حرارت و دیواره چندلایه برای بارهای سنگین.', en: 'Deep lug tread with heat-resistant compound and multi-ply casing for heavy loads.', ps: 'ژور نقش د تودوخې ضد مرکب او څو پرت قشر سره د درنو بارونو لپاره.' },
            pdfUrl: 'pdfs/tires/truck-bus/heavy-duty-truck-tire.pdf',
            category: 'truck-bus'
        },
        {
            name: { fa: 'تایر کامیون سبک', en: 'Light Truck Tyre', ps: 'سپک کامیون ټایر' },
            description: { fa: 'آج چندمنظوره شهری با مقاومت بالا در برابر سوراخ شدن.', en: 'Multi-purpose urban tread delivering high puncture resistance.', ps: 'چندګونې ښاري نقش چې لوړ د سوري ضد وړتیا لري.' },
            pdfUrl: 'pdfs/tires/truck-bus/light-truck-tire.pdf',
            category: 'truck-bus'
        },
        {
            name: { fa: 'تایر اتوبوس', en: 'Bus Tyre', ps: 'بس ټایر' },
            description: { fa: 'شانه سرد با نویز پایین و دیواره تقویت‌شده برای خطوط مسافری.', en: 'Cool running shoulder, low noise and reinforced casing for passenger routes.', ps: 'سړه اوږه، کم شور او پیاوړی قشر د مسافر وړونکو کرښو لپاره.' },
            pdfUrl: 'pdfs/tires/truck-bus/bus-tire.pdf',
            category: 'truck-bus'
        },
        {
            name: { fa: 'تایر بیل مکانیکی', en: 'Excavator Tyre', ps: 'بیل مکانیکی ټایر' },
            description: { fa: 'آج بلوکی با ترکیب ضد پارگی و دیواره ضخیم برای سایت‌های معدنی.', en: 'Block tread with tear-resistant compound and thick sidewalls for mining sites.', ps: 'بلوکي نقش د څیرې ضد مرکب او غټ اړخونو سره د کانونو ساحو لپاره.' },
            pdfUrl: 'pdfs/tires/heavy-construction-machinery/excavator-tire.pdf',
            category: 'heavy-construction-machinery'
        },
        {
            name: { fa: 'تایر لودر', en: 'Loader Tyre', ps: 'لودر ټایر' },
            description: { fa: 'الگوی L-5 با عمق زیاد و مقاومت در برابر سایش برای باربرداری سنگین.', en: 'Deep L-5 pattern delivering extreme wear resistance for heavy loading.', ps: 'ژور L-5 نقش چې د درنو پورته کولو لپاره لوړ سايښ ضد وړتیا لري.' },
            pdfUrl: 'pdfs/tires/heavy-construction-machinery/loader-tire.pdf',
            category: 'heavy-construction-machinery'
        },
        {
            name: { fa: 'تایر جرثقیل', en: 'Crane Tyre', ps: 'جرثقیل ټایر' },
            description: { fa: 'پروفیل صاف با ساختار مقاوم جانبی برای پایداری در حین بلند کردن بار.', en: 'Smooth tread with reinforced side structure for stability during lifts.', ps: 'هوار نقش د پیاوړي اړخ جوړښت سره د پورته کولو پر مهال ثبات لپاره.' },
            pdfUrl: 'pdfs/tires/heavy-construction-machinery/crane-tire.pdf',
            category: 'heavy-construction-machinery'
        },
        {
            name: { fa: 'تایر تراکتور', en: 'Tractor Tyre', ps: 'ټرکټر ټایر' },
            description: { fa: 'آج عمیق V شکل با چسبندگی بالا برای خاک نرم و زمین‌های کشاورزی.', en: 'Deep V-lug delivering high traction on soft soil and farmland.', ps: 'ژور V نقش چې په نرمه خاوره او کرنیزه ځمکه کې لوړه نیونه برابروي.' },
            pdfUrl: 'pdfs/tires/agricultural-machineries/tractor-tire.pdf',
            category: 'agricultural-machineries'
        },
        {
            name: { fa: 'تایر دروگر', en: 'Harvester Tyre', ps: 'دروګر ټایر' },
            description: { fa: 'پروفیل مخصوص وزن توزیع شده و دیواره تقویت‌شده برای جلوگیری از فشردگی خاک.', en: 'Special profile spreading load with reinforced carcass to limit soil compaction.', ps: 'ځانګړی نقش چې وزن وېشي او پیاوړی قشر د خاورې د فشار مخه نیسي.' },
            pdfUrl: 'pdfs/tires/agricultural-machineries/harvester-tire.pdf',
            category: 'agricultural-machineries'
        },
        {
            name: { fa: 'تایر سمپاش', en: 'Sprayer Tyre', ps: 'سمپاش ټایر' },
            description: { fa: 'ردیف باریک با مقاومت شیمیایی بالا و فشار زمین کم برای ماشین‌های سمپاش.', en: 'Narrow row tyre with high chemical resistance and low ground pressure for sprayers.', ps: 'تنګ قطار ټایر د کیمیاوي مقاومت او د ځمکې ټیټ فشار سره د سپرې ماشینونو لپاره.' },
            pdfUrl: 'pdfs/tires/agricultural-machineries/sprayer-tire.pdf',
            category: 'agricultural-machineries'
        },
        {
            name: { fa: 'تایر لیفتراک', en: 'Forklift Tyre', ps: 'لیفتراک ټایر' },
            description: { fa: 'ترکیب ضدسوراخ با دیواره مستحکم برای عملیات انبار و محوطه صنعتی.', en: 'Puncture-resistant compound with sturdy sidewalls for warehouse and yard work.', ps: 'سوري ضد مرکب د قوي اړخونو سره د ګودام او صنعتي انګړ لپاره.' },
            pdfUrl: 'pdfs/tires/industrial-vehicles/forklift-tire.pdf',
            category: 'industrial-vehicles'
        },
        {
            name: { fa: 'تایر اسکید استیر', en: 'Skid Steer Tyre', ps: 'اسکيد استیر ټایر' },
            description: { fa: 'آج تهاجمی و ترکیب مقاوم در برابر بریدگی برای محوطه‌های ساختمانی.', en: 'Aggressive tread with cut-resistant compound for construction yards.', ps: 'تیز نقش د پرې کېدو ضد مرکب سره د ساختماني انګړ لپاره.' },
            pdfUrl: 'pdfs/tires/industrial-vehicles/skid-steer-tire.pdf',
            category: 'industrial-vehicles'
        },
        {
            name: { fa: 'تایر تلهندلر', en: 'Telehandler Tyre', ps: 'تلهندلر ټایر' },
            description: { fa: 'آج چندمنظوره و دیواره مستحکم برای کار در ارتفاع و محیط‌های ناهموار.', en: 'Multi-purpose tread with strong carcass for elevated and uneven terrain work.', ps: 'چند مهار نقش د قوي قشر سره د لوړوالي او ناهموارو ځایونو لپاره.' },
            pdfUrl: 'pdfs/tires/industrial-vehicles/telehandler-tire.pdf',
            category: 'industrial-vehicles'
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
            name: { fa: 'چیلر هواخنک', en: 'Air-Cooled Chiller', ps: 'د هوا یخ چیلر' },
            description: { fa: 'چیلر هواخنک با کمپرسور اینورتر و کندانسور فین‌دار برای اقلیم گرم و خشک.', en: 'Air-cooled chiller with inverter compressors and finned condensers for hot, dry climates.', ps: 'د هوا یخ چیلر د انورټر کمپرسورونو او فین لرونکو کندنسرو سره د ګرم وچ اقلیم لپاره.' },
            pdfUrl: 'pdfs/cooling-heating/chiller/air-cooled-chiller.pdf',
            category: 'chiller',
            icon: '❄️'
        },
        {
            name: { fa: 'چیلر آب‌خنک', en: 'Water-Cooled Chiller', ps: 'د اوبو یخ چیلر' },
            description: { fa: 'چیلر آب‌خنک با اواپراتور پوسته-لوله و برج خنک‌کن هماهنگ برای فرآیندهای پیوسته.', en: 'Water-cooled chiller pairing shell-and-tube evaporators with matched cooling towers for continuous duty.', ps: 'د اوبو یخ چیلر د پوسته-پایپ ایواپراتور او د یخولو برج سره د دوامداره کار لپاره.' },
            pdfUrl: 'pdfs/cooling-heating/chiller/water-cooled-chiller.pdf',
            category: 'chiller',
            icon: '💧'
        },
        {
            name: { fa: 'قطعات یدکی چیلر', en: 'Chiller Spare Parts Kit', ps: 'د چیلر اضافي پرزې' },
            description: { fa: 'فیلتر درایر، سنسور فشار، شیر انبساط و برد کنترل برای سرویس دوره‌ای چیلر.', en: 'Filter driers, pressure sensors, expansion valves and control boards for planned chiller maintenance.', ps: 'فلټر ډرایرونه، د فشار سینسرونه، د پراخېدو والونه او کنټرول بورډونه د چیلر منظم ساتنې لپاره.' },
            pdfUrl: 'pdfs/cooling-heating/chiller/chiller-parts.pdf',
            category: 'chiller',
            icon: '🧰'
        },
        {
            name: { fa: 'بویلر بخار', en: 'Steam Boiler', ps: 'د بخار بویلر' },
            description: { fa: 'بویلر لوله‌آتشی با مشعل دوگانه‌سوز، کنترل سطح آب و سیستم ایمنی شعله برای خطوط صنعتی.', en: 'Fire-tube steam boiler with dual-fuel burner, water level control and flame safety for industrial lines.', ps: 'اورلوله بخار بویلر د دوه ډوله سون سوځونکي، د اوبو د سطح کنټرول او د لمبې خوندیتوب سره د صنعتي لینونو لپاره.' },
            pdfUrl: 'pdfs/cooling-heating/boiler/steam-boiler.pdf',
            category: 'boiler',
            icon: '🌫️'
        },
        {
            name: { fa: 'بویلر آب‌گرم', en: 'Hot-Water Boiler', ps: 'د ګرمو اوبو بویلر' },
            description: { fa: 'بویلر مدولار آب‌گرم با پمپ سیرکولاسیون کم‌مصرف و کنترل دمای خروجی.', en: 'Modular hot-water boiler with efficient circulation pumps and outlet temperature control.', ps: 'مدولر د ګرمو اوبو بویلر د موثرو دوراني پمپونو او د وتلو د حرارت کنټرول سره.' },
            pdfUrl: 'pdfs/cooling-heating/boiler/hot-water-boiler.pdf',
            category: 'boiler',
            icon: '🔥'
        },
        {
            name: { fa: 'قطعات یدکی بویلر', en: 'Boiler Spare Parts Kit', ps: 'د بویلر اضافي پرزې' },
            description: { fa: 'پمپ تغذیه، مشعل، گیج و لوله‌های آتشدان برای حفظ پایداری سیستم گرمایش.', en: 'Feed pumps, burners, gauges and furnace tubes keeping heating systems reliable.', ps: 'فیډ پمپونه، سوځونکي، ګیجونه او د اور خونو پایپونه د تودوخې سیستم باثباته ساتي.' },
            pdfUrl: 'pdfs/cooling-heating/boiler/boiler-parts.pdf',
            category: 'boiler',
            icon: '🔩'
        },
        {
            name: { fa: 'فن برج خنک‌کن', en: 'Cooling Tower Fan Assembly', ps: 'د یخولو برج فین ټولګه' },
            description: { fa: 'فن فایبرگلاس با موتور ضدزنگ و توازن دینامیکی برای گردش هوای یکنواخت.', en: 'Fiberglass fan with anti-corrosion motor and dynamic balancing for uniform airflow.', ps: 'د فایبر ګلاس فین د زنګ ضد موټور او متحرک توازن سره د یوشان هوا جریان لپاره.' },
            pdfUrl: 'pdfs/cooling-heating/cooling-tower/tower-fan.pdf',
            category: 'cooling-tower',
            icon: '🌬️'
        },
        {
            name: { fa: 'پکینگ و مدیا برج', en: 'Cooling Tower Fill Media', ps: 'د یخولو برج ډکول' },
            description: { fa: 'مدیا PVC ضد رسوب با سطح انتقال حرارت بالا و مقاومت UV.', en: 'Anti-fouling PVC fill media with large heat-transfer surface and UV resistance.', ps: 'د رسوب ضد PVC ډکول د پراخ تودوخې د انتقال سطحې او د UV مقاومت سره.' },
            pdfUrl: 'pdfs/cooling-heating/cooling-tower/tower-filling.pdf',
            category: 'cooling-tower',
            icon: '🧱'
        },
        {
            name: { fa: 'قطعات یدکی برج خنک‌کن', en: 'Cooling Tower Spare Parts Kit', ps: 'د یخولو برج اضافي پرزې' },
            description: { fa: 'نازل پاشش، قطره‌گیر، موتور و گیربکس برای نگهداری برج خنک‌کن.', en: 'Spray nozzles, drift eliminators, motors and gearboxes for tower upkeep.', ps: 'د سپرې نوزلونه، د څاڅکو مخنیوی کوونکي، موټورونه او ګیربکسونه د برج د ساتنې لپاره.' },
            pdfUrl: 'pdfs/cooling-heating/cooling-tower/tower-parts.pdf',
            category: 'cooling-tower',
            icon: '⚙️'
        },
        {
            name: { fa: 'مبدل حرارتی صفحه‌ای', en: 'Plate Heat Exchanger', ps: 'د پلیټ د تودوخې مبادله کوونکی' },
            description: { fa: 'مبدل صفحه‌ای گسکت‌دار با قابلیت CIP و طراحی جریان مخالف برای راندمان بالا.', en: 'Gasketed plate heat exchanger with CIP capability and counterflow design for high efficiency.', ps: 'د ګاسکټ لرونکی پلیټ مبادله کوونکی د CIP وړتیا او د مقابل جریان ډیزاین سره د لوړې موثریت لپاره.' },
            pdfUrl: 'pdfs/cooling-heating/heat-exchanger/plate-heat-exchanger.pdf',
            category: 'heat-exchanger',
            icon: '♨️'
        },
        {
            name: { fa: 'مبدل حرارتی پوسته-لوله', en: 'Shell & Tube Heat Exchanger', ps: 'د پوسته او پایپ د تودوخې مبادله کوونکی' },
            description: { fa: 'مبدل پوسته-لوله با باندل قابل تعویض، بافل ضد لرزش و تست هیدرواستاتیک کامل.', en: 'Shell-and-tube exchanger with removable bundle, anti-vibration baffles and complete hydrostatic testing.', ps: 'د پوسته او پایپ مبادله کوونکی د بدلیدونکي بونډل، د لړزې ضد بفلونو او بشپړې هایدروستاتیک ازموینې سره.' },
            pdfUrl: 'pdfs/cooling-heating/heat-exchanger/shell-tube-exchanger.pdf',
            category: 'heat-exchanger',
            icon: '🛢️'
        },
        {
            name: { fa: 'قطعات یدکی مبدل حرارتی', en: 'Heat Exchanger Service Kit', ps: 'د تودوخې مبادله کوونکي خدمت کټ' },
            description: { fa: 'گسکت، پیچ و ابزار سرویس برای نگهداری دوره‌ای مبدل‌های حرارتی.', en: 'Gaskets, bolts and service tools supporting planned exchanger maintenance.', ps: 'ګاسکټونه، بولټونه او د خدمت وسایل چې د مبدلونو منظم ساتنه اسانه کوي.' },
            pdfUrl: 'pdfs/cooling-heating/heat-exchanger/exchanger-parts.pdf',
            category: 'heat-exchanger',
            icon: '🔧'
        }
    ],
    'pumps-compressors': [
        {
            category: 'water-pump',
            name: {
                fa: 'پمپ سانتریفیوژ چندمرحله',
                en: 'Multistage Centrifugal Pump',
                ps: 'چند پړاو سنټرفیوګ پمپ'
            },
            description: {
                fa: 'پمپ افقی چندمرحله با بدنه چدنی و آب‌بندی مکانیکال سیل مناسب خطوط آبرسانی و صنعتی.',
                en: 'Horizontal multistage unit with cast-iron casing and mechanical seal for distribution and process water.',
                ps: 'افقي څو پړاوه واحد د کاسټ اوسپنې بدنه او میخانیک سیل سره د اوبو وېش او پروسې لپاره.'
            },
            pdfUrl: 'pdfs/pumps-compressors/water-pump/centrifugal-pump.pdf'
        },
        {
            category: 'water-pump',
            name: {
                fa: 'پمپ غوطه‌ور چاهی',
                en: 'Deep-Well Submersible Pump',
                ps: 'د څاه غوطه پمپ'
            },
            description: {
                fa: 'پمپ استنلس استیل با موتور IP68 و کابل سه‌لایه برای چاه‌های عمیق و کشاورزی.',
                en: 'Stainless submersible pump with IP68 motor and triple-shield cable for deep wells and irrigation.',
                ps: 'سټینلیس سبمرسیبل پمپ د IP68 موټور او درې پوړیز کیبل سره د ژورو څاهګانو او خړوبولو لپاره.'
            },
            pdfUrl: 'pdfs/pumps-compressors/water-pump/submersible-pump.pdf'
        },
        {
            category: 'water-pump',
            name: {
                fa: 'بوستر پمپ چند پمپی',
                en: 'Multi-Pump Booster Set',
                ps: 'د څو پمپونو بوستر سیټ'
            },
            description: {
                fa: 'بوسترست چند پمپی بر روی شاسی استیل با کنترلر PLC و اینورتر برای حفظ فشار ثابت شبکه.',
                en: 'Multi-pump booster skid with stainless frame, PLC controller and inverters to maintain constant network pressure.',
                ps: 'د څو پمپونو بوستر سیټ د سټینلیس چوکاټ، PLC کنټرولر او انورټرونو سره د ثابت فشار لپاره.'
            },
            pdfUrl: 'pdfs/pumps-compressors/water-pump/booster-pump.pdf'
        },
        {
            category: 'air-compressor',
            name: {
                fa: 'کمپرسور پیچ دور متغیر',
                en: 'Variable Speed Screw Compressor',
                ps: 'د سرعت بدلېدونکی سکرو کمپرسور'
            },
            description: {
                fa: 'کمپرسور اسکرو دور متغیر با روتور نامتقارن، درایر تبریدی و سیستم بازیافت حرارت.',
                en: 'Variable speed screw compressor with asymmetric rotors, refrigerated dryer and heat recovery package.',
                ps: 'د سرعت بدلولو سکرو کمپرسور د غیر متقارن روتورونو، یخچالي وچوونکي او د تودوخې د بیا ترلاسه کولو پیکج سره.'
            },
            pdfUrl: 'pdfs/pumps-compressors/air-compressor/screw-compressor.pdf'
        },
        {
            category: 'air-compressor',
            name: {
                fa: 'کمپرسور پیستونی صنعتی',
                en: 'Industrial Piston Compressor',
                ps: 'صنعتي پسټوني کمپرسور'
            },
            description: {
                fa: 'کمپرسور پیستونی دو مرحله با سیلندر چدنی، مخزن ۵۰۰ لیتری و کنترل اتومات تخلیه.',
                en: 'Two-stage piston compressor with cast-iron cylinders, 500L receiver and automatic unload control.',
                ps: 'دوه پړاوه پسټوني کمپرسور د کاسټ اوسپنې سلنډرونو، ۵۰۰ لیټره ټانک او اتومات تخلیه کنټرول سره.'
            },
            pdfUrl: 'pdfs/pumps-compressors/air-compressor/piston-compressor.pdf'
        },
        {
            category: 'air-compressor',
            name: {
                fa: 'کمپرسور سیار دیزلی',
                en: 'Diesel Portable Compressor',
                ps: 'دیزلي ګرځنده کمپرسور'
            },
            description: {
                fa: 'کمپرسور دیزلی یدک‌کش با کاور عایق صدا و خروجی چندگانه برای پروژه‌های ساختمانی و معدنی.',
                en: 'Towable diesel compressor with sound-insulated canopy and multi-outlet manifold for construction and mining.',
                ps: 'د یدک وړ دیزلي کمپرسور د غږ عایق پوښ او څو برخي والو سره د ساختماني او کان کیندنې پروژو لپاره.'
            },
            pdfUrl: 'pdfs/pumps-compressors/air-compressor/portable-compressor.pdf'
        },
        {
            category: 'vacuum-pump',
            name: {
                fa: 'پمپ وکیوم پره‌ای روغنی',
                en: 'Oil-Lubricated Rotary Vane Pump',
                ps: 'د تېلو روټري وین پمپ'
            },
            description: {
                fa: 'پمپ وکیوم پره‌ای روغنی با پره‌های گرافیتی و فیلتر بخار روغن برای خطوط بسته‌بندی.',
                en: 'Oil-lubricated rotary vane pump with graphite blades and oil mist filter for packaging lines.',
                ps: 'د تېلو روټري وین پمپ د ګرافایټ پرخو او د تېلو بخار فلټر سره د بسته بندۍ لینونو لپاره.'
            },
            pdfUrl: 'pdfs/pumps-compressors/vacuum-pump/rotary-vane-pump.pdf'
        },
        {
            category: 'vacuum-pump',
            name: {
                fa: 'پمپ وکیوم رینگ مایع',
                en: 'Liquid Ring Vacuum Pump',
                ps: 'د مایع حلقه ویکیوم پمپ'
            },
            description: {
                fa: 'پمپ رینگ مایع با بدنه استیل و سیستم جداسازی مایع برای گازهای مرطوب و فرایندی.',
                en: 'Stainless liquid ring pump with integrated separator for moist process gases.',
                ps: 'سټینلیس د مایع حلقه پمپ د مدغم جداکوونکي سره د لمدو پروسې ګازونو لپاره.'
            },
            pdfUrl: 'pdfs/pumps-compressors/vacuum-pump/liquid-ring-pump.pdf'
        },
        {
            category: 'vacuum-pump',
            name: {
                fa: 'پمپ وکیوم دیافراگمی خشک',
                en: 'Dry Diaphragm Vacuum Pump',
                ps: 'وچ ډایافرام ویکیوم پمپ'
            },
            description: {
                fa: 'پمپ وکیوم دیافراگمی خشک بدون نیاز به روغن برای آزمایشگاه و بسته‌بندی حساس.',
                en: 'Dry diaphragm vacuum pump requiring no oil, ideal for labs and sensitive packaging.',
                ps: 'وچ ډایافرام ویکیوم پمپ چې تېل نه غواړي، د لابراتوار او حساسو بسته بندیو لپاره مناسب.'
            },
            pdfUrl: 'pdfs/pumps-compressors/vacuum-pump/diaphragm-pump.pdf'
        },
        {
            category: 'pump-parts',
            name: {
                fa: 'ایمپلر و کیت سایش پمپ',
                en: 'Pump Impeller & Wear Kit',
                ps: 'د پمپ ایمپلر او استهلاکي کټ'
            },
            description: {
                fa: 'ایمپلر برنزی بالانس‌شده به همراه رینگ‌های سایش و پیچ‌های استیل ضد خوردگی.',
                en: 'Balanced bronze impeller supplied with wear rings and corrosion-resistant hardware.',
                ps: 'متعادل برونزي ایمپلر د سایش کړیو او د زنګ ضد فټنرونو سره وړاندې کېږي.'
            },
            pdfUrl: 'pdfs/pumps-compressors/pump-parts/pump-impeller.pdf'
        },
        {
            category: 'pump-parts',
            name: {
                fa: 'ست مکانیکال سیل',
                en: 'Mechanical Seal Service Kit',
                ps: 'د میخانیک سیل خدمت کټ'
            },
            description: {
                fa: 'ست مکانیکال سیل با سطوح سیلیکون کاربید و الاستومر وایتون برای سیالات خورنده.',
                en: 'Mechanical seal kit featuring silicon carbide faces and Viton elastomers for corrosive fluids.',
                ps: 'د میخانیک سیل کټ د سیلیکون کاربایډ سطحو او ویټون الاستومرونو سره د زهرجنو سیالاتو لپاره.'
            },
            pdfUrl: 'pdfs/pumps-compressors/pump-parts/pump-seal.pdf'
        },
        {
            category: 'pump-parts',
            name: {
                fa: 'کیت ولو کنترل پمپ',
                en: 'Pump Control Valve Set',
                ps: 'د پمپ کنټرول والو سیټ'
            },
            description: {
                fa: 'کیت ولو شامل چک ولو، ولو کنترل و گیج فشار برنجی برای خطوط پمپاژ.',
                en: 'Valve kit including check valve, control valve and brass pressure gauge for pumping lines.',
                ps: 'د والو کټ چې چک والو، کنټرول والو او د برنج فشار ګیج لري د پمپ لاینونو لپاره.'
            },
            pdfUrl: 'pdfs/pumps-compressors/pump-parts/pump-valve.pdf'
        }
    ],
    'metallurgy-coating': [
        {
            category: 'iron-melting',
            name: { fa: 'کوره القایی ذوب فولاد', en: 'Induction Furnace for Steel Melting', ps: 'د فولادو د ذوب انډکشن کوره' },
            description: {
                fa: 'کوره القایی با بوته نسوز، مبدل توان IGBT و سیستم همزن الکترومغناطیسی برای مذاب یکنواخت.',
                en: 'Induction furnace with refractory crucible, IGBT power converter and electromagnetic stirring for uniform melts.',
                ps: 'انډکشن کوره د نسوز بوټي، د IGBT ځواک کنورټر او برېښنایي ګډوډونکي سره د یکنواخت مذاب لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/iron-melting/induction-furnace.pdf'
        },
        {
            category: 'iron-melting',
            name: { fa: 'کوره قوس الکتریکی فولادسازی', en: 'Electric Arc Furnace Steelmaking', ps: 'د فولادو جوړولو برقي قوسي کوره' },
            description: {
                fa: 'کوره قوس با الکترود گرافیتی، سیستم تخلیه پاتیل و غبارگیر برای تولید فولاد آلیاژی.',
                en: 'Arc furnace with graphite electrodes, ladle tapping system and fume extraction for alloy steel production.',
                ps: 'قوسي کوره د ګرافایټ الکترودونو، د پاتیلو تشولو سیستم او د لوګي ایستلو سره د الیاژ فولاد تولید لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/iron-melting/arc-furnace.pdf'
        },
        {
            category: 'iron-melting',
            name: { fa: 'ماشین ریخته‌گری پیوسته', en: 'Continuous Casting Machine', ps: 'پرله پسې اچولو ماشین' },
            description: {
                fa: 'ماشین ریخته‌گری با قالب مسی آبگرد، سیستم برش و کنترل سطح مذاب برای شمش یکنواخت.',
                en: 'Continuous caster with water-cooled copper mould, cut-off system and melt level control for uniform billets.',
                ps: 'پرله پسې اچولو ماشین د اوبو یخ شوي مسو قالب، د پرې کولو سیستم او د مذاب د سطح کنټرول سره د یکنواخت بلیتونو لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/iron-melting/casting-machine.pdf'
        },
        {
            category: 'rolling-mill',
            name: { fa: 'خط نورد گرم ورق', en: 'Hot Rolling Mill Line', ps: 'د ګرم رولینګ مل لاین' },
            description: {
                fa: 'قفسه‌های نورد، کوره پیشگرم و سیستم خنک‌کاری برای تولید ورق گرم با کنترل ضخامت.',
                en: 'Rolling stands, reheating furnace and cooling beds to produce hot rolled sheet with thickness control.',
                ps: 'د رولینګ سټېنډونه، د بیا تودولو کوره او د یخولو بسترونه د ضخامت کنټرول سره ګرم شیټ تولیدوي.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/rolling-mill/hot-rolling.pdf'
        },
        {
            category: 'rolling-mill',
            name: { fa: 'خط نورد سرد دقیق', en: 'Cold Rolling Mill Stand', ps: 'د دقیق یخ رولینګ مل' },
            description: {
                fa: 'استند نورد چهار غلطکه با تاند و سیستم روغن‌کاری برای رسیدن به دقت سطح و سختی مورد نظر.',
                en: 'Four-high stand with tension control and lubrication to achieve target gauge and surface finish.',
                ps: 'څلور رول سټېنډ د تناو کنټرول او غوړولو سره د ټاکلې ضخامت او سطح کیفیت لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/rolling-mill/cold-rolling.pdf'
        },
        {
            category: 'rolling-mill',
            name: { fa: 'ماشین سنگ‌زنی غلتک', en: 'Roll Grinding Machine', ps: 'د رول ګراینډنګ ماشین' },
            description: {
                fa: 'ماشین سنگ‌زنی CNC با بالانس دینامیکی و سیستم اندازه‌گیری آنلاین برای احیای غلتک‌ها.',
                en: 'CNC roll grinder with dynamic balancing and in-process gauging to refurbish mill rolls.',
                ps: 'د CNC رول ګراینډر د دینامیک بالانس او د پروسې پر مهال اندازه کولو سره د مل رولونو بیا رغونه کوي.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/rolling-mill/roll-grinding.pdf'
        },
        {
            category: 'steel-structure',
            name: { fa: 'خط جوش تیر و ستون H', en: 'H-Beam Welding Line', ps: 'د H بیم ویلډنګ لاین' },
            description: {
                fa: 'سیستم جوش اتومات تیر با زیرپودری، میز تنظیم و صافکن برای سازه‌های سنگین.',
                en: 'Automatic submerged arc beam welding with alignment tables and straighteners for heavy structures.',
                ps: 'اتومات د سبمرجد قوس بیم ویلډنګ د الاین میزونو او ستریتنرونو سره د درنو جوړښتونو لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/steel-structure/beam-welding.pdf'
        },
        {
            category: 'steel-structure',
            name: { fa: 'دستگاه برش CNC سازه', en: 'CNC Structure Cutting Machine', ps: 'د جوړښت CNC پرې کولو ماشین' },
            description: {
                fa: 'ماشین برش گانتری با مشعل پلاسما/اکسی و نرم‌افزار نِست برای برش دقیق قطعات فولادی.',
                en: 'Gantry CNC cutting with plasma/oxy torches and nesting software for precise steel components.',
                ps: 'د ګینټري CNC پرې کولو ماشین د پلازما/اکسي مشعلونو او نېسټینګ سافټویر سره د دقیق فولادي پرزو لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/steel-structure/structure-cutting.pdf'
        },
        {
            category: 'steel-structure',
            name: { fa: 'ایستگاه مونتاژ و رگلاژ سازه', en: 'Steel Structure Assembly Station', ps: 'د فولادي جوړښت اسمبل سټېشن' },
            description: {
                fa: 'ایستگاه مونتاژ با جرثقیل سقفی، گیره هیدرولیک و سیستم اندازه‌گیری لیزری برای نصب سریع.',
                en: 'Assembly bay with overhead cranes, hydraulic clamps and laser measurement for rapid erection.',
                ps: 'اسمبل خونه د اوورهد کرینونو، هایدرولیک کلیمپونو او لیزري اندازه کولو سره د چټک نصب لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/steel-structure/structure-assembly.pdf'
        },
        {
            category: 'metal-coating',
            name: { fa: 'خط گالوانیزه گرم', en: 'Hot-Dip Galvanizing Line', ps: 'د ګرم ګالوانایز لاین' },
            description: {
                fa: 'خط گالوانیزه با وان روی، پیش‌درمانی شیمیایی و سیستم کنترل دما برای پوشش ضدخوردگی.',
                en: 'Galvanizing line with zinc kettle, chemical pretreatment and temperature control for corrosion protection.',
                ps: 'د زنک حوض، کیمیاوي مخکې درملنې او د تودوخې کنټرول سره ګالوانایز لاین د زنګ پر وړاندې ساتنې لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/metal-coating/galvanizing.pdf'
        },
        {
            category: 'metal-coating',
            name: { fa: 'سیستم پوشش پودری فلزی', en: 'Metal Powder Coating System', ps: 'د فلزي پوډر پوښښ سیستم' },
            description: {
                fa: 'کابین پاشش، بازیافت پودر و کوره پخت برای پوشش قطعات فلزی با دوام بالا.',
                en: 'Powder spray booth, recovery cyclones and curing oven for durable metal component coating.',
                ps: 'د پوډر شیندلو کابین، د بېرته راټولولو سایکلونونه او د پخېدو تنور د فلزي پرزو د دوامدار پوښښ لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/metal-coating/powder-coating.pdf'
        },
        {
            category: 'metal-coating',
            name: { fa: 'خط آبکاری الکتریکی', en: 'Electroplating Line', ps: 'د الکترپلېټینګ لاین' },
            description: {
                fa: 'وان‌های آبکاری، رکتیفایر و سیستم فیلتراسیون برای پوشش نیکل/کروم با کنترل ضخامت.',
                en: 'Electroplating tanks, rectifier and filtration system to deposit nickel/chrome with thickness control.',
                ps: 'د الکترپلېټینګ ټانکونه، ریکتیفایر او د فلټر سیستم د نیکل/کروم د پوښښ د ضخامت کنټرول سره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/metallurgy/metal-coating/electroplating.pdf'
        },
        {
            category: 'powder-coating',
            name: { fa: 'سیستم مخلوط پودر رنگ', en: 'Powder Coating Mix System', ps: 'د رنګ پوډر مکس سیستم' },
            description: {
                fa: 'میکسر دوزینگ، غربال و ذخیره سیلو برای آماده‌سازی یکنواخت پودر پوشش.',
                en: 'Dosing mixers, sieving and silo storage to prepare uniform powder coating batches.',
                ps: 'د دوزینګ میکسرونه، جالۍ او سیلو ذخیره د یکنواخت پوډر پوښښ د چمتو کولو لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/powder-coating/powder-mixing.pdf'
        },
        {
            category: 'powder-coating',
            name: { fa: 'دستگاه پاشش پودر الکترواستاتیک', en: 'Electrostatic Powder Spraying Booth', ps: 'د الکترواستاتیک پوډر شیندلو کابین' },
            description: {
                fa: 'گان الکترواستاتیک، کابین پاشش و ربات انتقال برای پوشش یکنواخت قطعات.',
                en: 'Electrostatic guns, spray booth and transfer conveyor for uniform powder deposition.',
                ps: 'الکترواستاتیک ټوپکونه، د شیندلو کابین او د انتقال کنوېیر د یکنواخت پوډر پوښښ لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/powder-coating/powder-spraying.pdf'
        },
        {
            category: 'powder-coating',
            name: { fa: 'کوره عمل‌آوری پودر', en: 'Powder Curing Oven', ps: 'د پوډر پخېدو تنور' },
            description: {
                fa: 'کوره هوای گرم با کنترل PID، گردش فن و ثبت منحنی پخت برای چسبندگی پایدار.',
                en: 'Hot-air oven with PID control, recirculation fans and cure logging for consistent adhesion.',
                ps: 'د ګرمې هوا تنور د PID کنټرول، د هوا گردش مینه وال او د پخېدو ثبتولو سره د ثابت چسپېدو لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/powder-coating/powder-curing.pdf'
        },
        {
            category: 'spray-painting',
            name: { fa: 'کابین رنگ پاشی صنعتی', en: 'Industrial Spray Paint Booth', ps: 'صنعتي د رنګ شیندلو کابین' },
            description: {
                fa: 'کابین با فیلتر چندمرحله، چراغ ضدانفجار و سیستم تهویه برای رنگ‌آمیزی تمیز.',
                en: 'Spray booth with multi-stage filtration, explosion-proof lighting and ventilation for clean painting.',
                ps: 'د څو پړاوه فلټر، د چاودنې ضد څراغونو او هوايي سیستم سره د رنګ شیندلو کابین د پاک کار لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/spray-painting/spray-booth.pdf'
        },
        {
            category: 'spray-painting',
            name: { fa: 'گان رنگ پاش فشار بالا', en: 'High-Pressure Spray Gun Package', ps: 'د لوړ فشار رنګ ټوپک کټ' },
            description: {
                fa: 'گان ایرلس، پمپ فشار بالا و شیلنگ ضدحلال برای پوشش سطوح بزرگ.',
                en: 'Airless gun, high-pressure pump and solvent-resistant hoses for coating large surfaces.',
                ps: 'ایرلس ټوپک، د لوړ فشار پمپ او د محلول ضد نلونه د لویو سطحو د پوښښ لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/spray-painting/spray-gun.pdf'
        },
        {
            category: 'spray-painting',
            name: { fa: 'خشک‌کن رنگ پاشی', en: 'Spray Paint Drying Tunnel', ps: 'د رنګ شیندلو وچوونکی تونل' },
            description: {
                fa: 'تونل خشک‌کن با جریان هوای گرم، رطوبت‌گیر و کنترل سرعت نوار نقاله.',
                en: 'Drying tunnel with heated airflow, dehumidification and conveyor speed control.',
                ps: 'د ګرمې هوا جریان، رطوبت ایستلو او د کنوېیر د سرعت کنټرول سره وچوونکی تونل.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/spray-painting/spray-drying.pdf'
        },
        {
            category: 'liquid-paint',
            name: { fa: 'سیستم مخلوط رنگ مایع', en: 'Liquid Paint Mixing System', ps: 'د مایع رنګ مکس سیستم' },
            description: {
                fa: 'مخازن استیل، همزن ضدانفجار و اندازه‌گیری ویسکوزیته برای فرمولاسیون دقیق.',
                en: 'Stainless tanks, explosion-proof agitators and viscosity measurement for precise formulations.',
                ps: 'سټینلیس ټانکونه، د چاودنې ضد همزنونه او د واسکوزیتې اندازه کول د دقیق فورمول لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/liquid-paint/paint-mixing.pdf'
        },
        {
            category: 'liquid-paint',
            name: { fa: 'دستگاه پرکن رنگ مایع', en: 'Liquid Paint Filling Machine', ps: 'د مایع رنګ ډکولو ماشین' },
            description: {
                fa: 'پرکن وزنی/حجمی با نازل ضدچکه و دربند برای قوطی و سطل رنگ.',
                en: 'Weight/volume filler with anti-drip nozzles and capping for paint cans and pails.',
                ps: 'د وزن/حجم ډکونکی د ضد څاڅکو نوزلونو او د سر بندولو سره د رنګ قوطیو لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/liquid-paint/paint-filling.pdf'
        },
        {
            category: 'liquid-paint',
            name: { fa: 'خط لیبل‌زنی قوطی رنگ', en: 'Paint Can Labelling Line', ps: 'د رنګ قوطۍ لیبل لاین' },
            description: {
                fa: 'ماشین لیبل‌زن، جت‌پرینتر و سیستم بازرسی کد برای بسته‌بندی حرفه‌ای.',
                en: 'Labelling machine with inkjet printer and code inspection for professional packaging.',
                ps: 'د لیبل ماشین د انک جېټ چاپګر او د کوډ تفتیش سره د مسلکي بسته بندۍ لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/liquid-paint/paint-labeling.pdf'
        },
        {
            category: 'surface-treatment',
            name: { fa: 'خط چربی‌زدایی صنعتی', en: 'Industrial Degreasing Line', ps: 'صنعتي د غوړ لرې کولو لاین' },
            description: {
                fa: 'حوض چربی‌زدایی، شست‌وشوی پرفشار و خشک‌کن هوایی برای آماده‌سازی سطح.',
                en: 'Degreasing tanks, high-pressure washing and air dryers to prepare surfaces.',
                ps: 'د غوړ لرې کولو ټانکونه، لوړ فشار مینځل او هوايي وچوونکي د سطح چمتو کولو لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/surface-treatment/degreasing.pdf'
        },
        {
            category: 'surface-treatment',
            name: { fa: 'سیستم فسفاته چندمرحله‌ای', en: 'Multi-Stage Phosphating System', ps: 'د څو پړاو فاسفېټ کولو سیستم' },
            description: {
                fa: 'اسپری یا غوطه‌وری فسفاته با کنترل دما و PH برای افزایش چسبندگی پوشش.',
                en: 'Spray or dip phosphating with temperature and pH control to boost coating adhesion.',
                ps: 'د سپرې یا ډوبولو فاسفېټ کول د تودوخې او PH کنټرول سره د پوښ چسپېدو زیاتولو لپاره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/surface-treatment/phosphating.pdf'
        },
        {
            category: 'surface-treatment',
            name: { fa: 'دستگاه شات/سندبلاست', en: 'Sandblasting Machine', ps: 'د شګه پاشلو ماشین' },
            description: {
                fa: 'اتاق شات‌بلاست با توربین ساینده، سیستم بازیافت و فیلتراسیون گرد و غبار.',
                en: 'Blast room with abrasive turbines, media recovery and dust filtration.',
                ps: 'د بلاسټ خونه د سایندې توربینونو، د موادو بېرته راټولولو او دوړو فلټر کولو سره.'
            },
            pdfUrl: 'pdfs/metallurgy-coating/paint-coating/surface-treatment/sandblasting.pdf'
        }
    ],
    'paper-pulp': [
        {
            category: 'pulp-production',
            name: {
                fa: 'ماشین خمیرسازی پیوسته',
                en: 'Continuous Pulping Machine',
                ps: 'د دوامداره خمیر جوړولو ماشین'
            },
            description: {
                fa: 'دیفیوزر فشار با کنترل دما و تزریق شیمی برای تولید پالپ یکنواخت از چیپس چوب.',
                en: 'Pressure diffuser with temperature control and chemical dosing for uniform pulp from wood chips.',
                ps: 'د فشار ډیفیوزر د تودوخې کنټرول او د کیمیاوي انجیکشن سره چې له لرګي چپس څخه یکنواخت پالپ برابروي.'
            },
            pdfUrl: 'pdfs/paper-pulp/pulp-production/pulping-machine.pdf'
        },
        {
            category: 'pulp-production',
            name: {
                fa: 'خط شست‌وشوی پالپ چندمرحله‌ای',
                en: 'Multi-Stage Pulp Washing Line',
                ps: 'د پالپ څو پړاوه مینځلو لاین'
            },
            description: {
                fa: 'پرس واشر، فیلتر و سیستم بازیافت مایع سفید برای کاهش مصرف آب و حفظ کیفیت الیاف.',
                en: 'Press washers, filters and white liquor recovery system to cut water use and preserve fibre quality.',
                ps: 'پرس واشرونه، فلټرونه او د سپین مایع د بیا راټولولو سیستم د اوبو مصرف د کمولو او د فایبر کیفیت ساتلو لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/pulp-production/pulp-washing.pdf'
        },
        {
            category: 'pulp-production',
            name: {
                fa: 'برج سفیدکننده پالپ',
                en: 'Pulp Bleaching Tower',
                ps: 'د پالپ سپینولو برج'
            },
            description: {
                fa: 'واحد سفیدکننده کلر دی‌اکسید یا پراکساید با کنترل آنلاین قلیائیت و میزان سفیدی خروجی.',
                en: 'Chlorine dioxide or peroxide bleaching stage with online alkalinity and brightness control.',
                ps: 'د کلورین ډای اکساید یا پراکسايد سپینولو واحد د آنلاین الکلاینیت او روښانتیا کنټرول سره.'
            },
            pdfUrl: 'pdfs/paper-pulp/pulp-production/pulp-bleaching.pdf'
        },
        {
            category: 'paper-production',
            name: {
                fa: 'ماشین کاغذ فوردرینیه',
                en: 'Fourdrinier Paper Machine',
                ps: 'د فوردرینیر کاغذ ماشین'
            },
            description: {
                fa: 'هدباکس، سکشن و پرس، خشک‌کن سیلندر و کنترل پروفایل ضخامت و رطوبت برای تولید رول پایدار.',
                en: 'Headbox, vacuum section, press and cylinder dryers with thickness and moisture profile control for stable rolls.',
                ps: 'هدباکس، د ویکیوم برخه، پرس او سلنډري وچوونکي د ضخامت او رطوبت پروفایل کنټرول سره د ثابت رول تولید لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-production/paper-machine.pdf'
        },
        {
            category: 'paper-production',
            name: {
                fa: 'خط کوتینگ و سایز پرس',
                en: 'Paper Coating & Size Press Line',
                ps: 'د کاغذ کوټینګ او سایز پرېس لاین'
            },
            description: {
                fa: 'اپلیکاتور دوطرفه، خشک‌کن هوای داغ و سیستم کنترل ویسکوزیته برای بهبود کیفیت سطح.',
                en: 'Dual-side applicators, hot-air dryers and viscosity control system to upgrade surface quality.',
                ps: 'د دواړو خواوو اپلیکاتورونه، د ګرمو هوا وچوونکي او د واسکوزیتې کنټرول سیستم د سطحې کیفیت ښه کولو لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-production/paper-coating.pdf'
        },
        {
            category: 'paper-production',
            name: {
                fa: 'سیستم برش و رول‌رَو',
                en: 'Sheeter & Rewinder System',
                ps: 'د پرې کولو او ریوایندر سیستم'
            },
            description: {
                fa: 'ماشین برش عرضی و وایندر خودکار برای تنظیم طول، عرض و قطر رول‌های خروجی.',
                en: 'Cross-cut sheeter and automatic rewinder to adjust finished roll length, width and diameter.',
                ps: 'د عرضي پرې کولو ماشین او اتومات ریوایندر د وروستي رول اوږدوالی، پلنوالی او قطر عیارولو لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-production/paper-cutting.pdf'
        },
        {
            category: 'paper-converting',
            name: {
                fa: 'دستگاه کیسه کاغذی با ته مربعی',
                en: 'Square Bottom Paper Bag Machine',
                ps: 'د مربع تل لرونکي کاغذي کڅوړې ماشین'
            },
            description: {
                fa: 'فرم‌دهی، چسب‌زنی و شمارش اتوماتیک برای تولید کیسه‌های حمل فروشگاهی و بسته‌بندی صنعتی.',
                en: 'Automatic forming, gluing and counting to produce retail carrier and industrial paper bags.',
                ps: 'اتومات شکل ورکول، ګنډل او شمېرنه د پلورنځیو د وړونکو او صنعتي کاغذي کڅوړو د تولید لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-converting/paper-bag-making.pdf'
        },
        {
            category: 'paper-converting',
            name: {
                fa: 'دستگاه تولید پاکت نامه',
                en: 'Envelope Making Machine',
                ps: 'د لفاف جوړولو ماشین'
            },
            description: {
                fa: 'برش، تا، چسب گرم و خشک‌کن برای تولید پاکت‌های اداری و اختصاصی با ظرفیت بالا.',
                en: 'Cutting, folding, hot glue and drying stages for high-volume office and bespoke envelopes.',
                ps: 'د پرې کولو، تا کولو، ګرم ګلو او وچولو مرحلې د اداري او ځانګړو لفافو د لوړ ظرفیت تولید لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-converting/envelope-making.pdf'
        },
        {
            category: 'paper-converting',
            name: {
                fa: 'خط تبدیل دستمال کاغذی',
                en: 'Tissue Converting Line',
                ps: 'د دستمال کاغذ بدلون لاین'
            },
            description: {
                fa: 'امباس و تا زن، رولر برش و بسته‌بندی شرینک برای تولید رول دستمال و دستمال جیبی.',
                en: 'Embossing and folding, log saw cutting and shrink packaging to produce tissue rolls and pocket packs.',
                ps: 'امباس او تا کول، د لاګ پرې کول او شرینک بسته بندي د دستمال رولونو او جېبي بسته بندیو د تولید لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-converting/tissue-converting.pdf'
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
            category: 'automatic-packaging',
            name: { fa: 'ماشین پرکن اتوماتیک', en: 'Automatic Filling Machine', ps: 'اتومات ډکولو ماشین' },
            description: {
                fa: 'پرکن پیستونی با PLC و نازل‌های قابل تنظیم برای مایعات غلیظ و رقیق.',
                en: 'Piston filler with PLC control and adjustable nozzles for viscous or free-flowing liquids.',
                ps: 'د PLC کنټرول لرونکی پیستوني ډکونکی د غلیظ او روانو مایعاتو لپاره.'
            },
            pdfUrl: 'pdfs/packaging/automatic-packaging/filling-machine.pdf'
        },
        {
            category: 'automatic-packaging',
            name: { fa: 'ماشین درزگیر اتوماتیک', en: 'Automatic Sealing Machine', ps: 'اتومات سیلر ماشین' },
            description: {
                fa: 'سیستم درزگیری حرارتی با کنترل دما و تسمه انتقال ضد چروک.',
                en: 'Thermal sealing system with precision temperature control and wrinkle-free conveyors.',
                ps: 'حرارتي سیلر د دقیق تودوخې کنټرول او بې چین تسمې سره.'
            },
            pdfUrl: 'pdfs/packaging/automatic-packaging/sealing-machine.pdf'
        },
        {
            category: 'automatic-packaging',
            name: { fa: 'ماشین برچسب‌زن اتوماتیک', en: 'Automatic Labelling Machine', ps: 'اتومات لیبل ماشین' },
            description: {
                fa: 'لیبل‌زن روتاری با سیستم سنجش موقعیت و تنظیم سرعت هماهنگ با خط تولید.',
                en: 'Rotary labeller with position sensing and synchronised speed control with the production line.',
                ps: 'د موقعیت سنجونې او د تولید له لین سره همغږي سرعت کنټرول لرونکی روتري لیبلر.'
            },
            pdfUrl: 'pdfs/packaging/automatic-packaging/labeling-machine.pdf'
        },
        {
            category: 'vacuum-packaging',
            name: { fa: 'وکیوم سیلر رومیزی', en: 'Tabletop Vacuum Sealer', ps: 'میز وړ وکیوم سیلر' },
            description: {
                fa: 'مناسب بسته‌بندی کوچک با پمپ قدرتمند و تنظیم زمان و دما.',
                en: 'Compact vacuum sealing with high-performance pump and adjustable time and heat.',
                ps: 'د ځواکمن پمپ او د وخت او تودوخې د تنظیم وړ کوچنی وکیوم سیلر.'
            },
            pdfUrl: 'pdfs/packaging/vacuum-packaging/vacuum-sealer.pdf'
        },
        {
            category: 'vacuum-packaging',
            name: { fa: 'دستگاه وکیوم اتاقکی', en: 'Vacuum Chamber Machine', ps: 'د وکیوم چیمبر ماشین' },
            description: {
                fa: 'چمبر استیل دو محفظه با برنامه‌ریزی گاز تزریق و کنترل سنسور.',
                en: 'Dual-chamber stainless unit with gas flushing programmes and sensor controls.',
                ps: 'دوه خونې لرونکی سټینلیس یونټ د ګاز د داخلېدو پروګرام او سینسر کنټرول سره.'
            },
            pdfUrl: 'pdfs/packaging/vacuum-packaging/vacuum-chamber.pdf'
        },
        {
            category: 'vacuum-packaging',
            name: { fa: 'کیسه وکیوم چندلایه', en: 'Multi-Layer Vacuum Bag', ps: 'چند پوړیز وکیوم کڅوړه' },
            description: {
                fa: 'کیسه‌های چندلایه مقاوم در برابر سوراخ، مناسب مواد غذایی و صنعتی.',
                en: 'Puncture-resistant multilayer bags suitable for food and industrial packaging.',
                ps: 'څو پوړیزې سوراخ ضد کڅوړې چې د خوراکي او صنعتي بسته بندۍ لپاره مناسبې دي.'
            },
            pdfUrl: 'pdfs/packaging/vacuum-packaging/vacuum-bag.pdf'
        },
        {
            category: 'wrapping-packaging',
            name: { fa: 'ماشین استرچ رپینگ', en: 'Stretch Wrapping Machine', ps: 'سټریچ لفافه ماشین' },
            description: {
                fa: 'پالت‌پیچ خودکار با ترمز فیلم قابل تنظیم و حسگر ارتفاع بار.',
                en: 'Automatic pallet wrapper with adjustable film tension and load height sensors.',
                ps: 'اتومات پالت لفاف د فلم د تاوولو د تنظیم او د بار د ارتفاع سینسرونو سره.'
            },
            pdfUrl: 'pdfs/packaging/wrapping-packaging/stretch-wrapping.pdf'
        },
        {
            category: 'wrapping-packaging',
            name: { fa: 'ماشین شرینک تونلی', en: 'Tunnel Shrink Wrapper', ps: 'ټنل شرینک ماشین' },
            description: {
                fa: 'تونل حرارتی با جریان هوای یکنواخت و کانویور مقاوم به حرارت.',
                en: 'Heat tunnel with uniform airflow and heat-resistant conveyor for retail packs.',
                ps: 'حرارتي تونل د یوشان هوا جریان او د تودوخې پر وړاندې مقاومت لرونکي کونوییر سره.'
            },
            pdfUrl: 'pdfs/packaging/wrapping-packaging/shrink-wrapping.pdf'
        },
        {
            category: 'wrapping-packaging',
            name: { fa: 'ماشین تسمه‌کشی صنعتی', en: 'Industrial Strapping Machine', ps: 'صنعتي تسمه ماشین' },
            description: {
                fa: 'سیستم تسمه‌کشی فول اتومات با هدایت تسمه و کشش قابل برنامه‌ریزی.',
                en: 'Fully automatic strapping with programmable tension and strap guidance.',
                ps: 'په بشپړ ډول اتومات تسمه ماشین د پروګرام وړ کشش او تسمې لارښود سره.'
            },
            pdfUrl: 'pdfs/packaging/wrapping-packaging/strapping-machine.pdf'
        },
        {
            category: 'printing-packaging',
            name: { fa: 'ماشین چاپ فلکسو', en: 'Flexographic Printing Machine', ps: 'د فلکسو چاپ ماشین' },
            description: {
                fa: 'ماشین فلکسو رول به رول با رجیستر دقیق و خشک‌کن هوای گرم برای چاپ بسته‌بندی.',
                en: 'Roll-to-roll flexo press with precise registration and hot-air dryers for packaging films.',
                ps: 'رول په رول فلکسو پریس د دقیق رجسټر او د ګرمې هوا وچولو سره د بسته بندۍ فلمونو لپاره.'
            },
            pdfUrl: 'pdfs/plastic-processing/printing-packaging/flexo-printing.pdf'
        },
        {
            category: 'printing-packaging',
            name: { fa: 'خط پاکت‌سازی', en: 'Bag Making Line', ps: 'د کڅوړې جوړولو لاین' },
            description: {
                fa: 'از رول تا پاکت با ایستگاه‌های تا، دوخت و پانچ برای تولید پاکت‌های چندلایه.',
                en: 'From roll to finished bag with folding, sealing and punching stations for multilayer bags.',
                ps: 'له رول څخه تر بشپړې کڅوړې پورې د تا کولو، سیل کولو او پنچ کولو سټېشنونو سره.'
            },
            pdfUrl: 'pdfs/plastic-processing/printing-packaging/bag-making.pdf'
        },
        {
            category: 'printing-packaging',
            name: { fa: 'خط درزگیری و برش', en: 'Sealing & Cutting Line', ps: 'د سیل کولو او پرې کولو لاین' },
            description: {
                fa: 'سیستم برش و درزگیری با کنترل سروو برای تولید رول‌های بسته‌بندی باکیفیت.',
                en: 'Servo-controlled sealing and cutting modules delivering precise packaging rolls.',
                ps: 'د سرو کنټرول لرونکي سیل او پرې کولو ماډلونه چې دقیق بسته بندۍ رولونه جوړوي.'
            },
            pdfUrl: 'pdfs/plastic-processing/printing-packaging/sealing-cutting.pdf'
        },
        {
            category: 'tobacco-processing',
            name: { fa: 'خط تولید سیگار', en: 'Cigarette Making Line', ps: 'د سیګار جوړولو لاین' },
            description: {
                fa: 'تغذیه توتون، رول‌سازی، چسب‌زنی و برش اتوماتیک برای تولید سیگار باکیفیت.',
                en: 'Automatic tobacco feeding, rod forming, gluing and cutting for consistent cigarettes.',
                ps: 'اتومات توتون تغذیه، لاستي جوړونه، ګلو لګول او پرې کول د ثابتو سیګارتونو لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/cigarette-making.pdf'
        },
        {
            category: 'tobacco-processing',
            name: { fa: 'ماشین بسته‌بندی سیگار', en: 'Cigarette Packing Machine', ps: 'د سیګار بسته بندۍ ماشین' },
            description: {
                fa: 'چیدمان، لفاف و سلفون‌پیچ اتوماتیک با کنترل وزن و چاپ تاریخ تولید بسته.',
                en: 'Automatic carton loading, wrapping and cellophane with weight and date coding control.',
                ps: 'اتومات کڅوړه اچول، لفاف او سیلوفان د وزن او نیټې کوډ کنټرول سره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/cigarette-packing.pdf'
        },
        {
            category: 'tobacco-processing',
            name: { fa: 'واحد تولید فیلتر سیگار', en: 'Cigarette Filter Production Unit', ps: 'د سیګار فلټر تولید واحد' },
            description: {
                fa: 'فرم‌دهی استیک، برش طولی و الصاق کاغذ برای ساخت فیلترهای فیبر سلولزی.',
                en: 'Tow opening, rod forming and paper tipping to produce cellulose fibre cigarette filters.',
                ps: 'د فایبر پرانیستلو، لاستي جوړولو او د کاغذ لګولو پروسې د سلولوز فلټرونو لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/cigarette-filter.pdf'
        },
        {
            category: 'tobacco-processing',
            name: { fa: 'پرکن پاکت تنباکو', en: 'Tobacco Pouch Filling Machine', ps: 'د تنباکو د کڅوړې ډکولو ماشین' },
            description: {
                fa: 'توزین دقیق، ویبره و پرکن چنددهانه برای بسته‌بندی پاکت‌های تنباکو و نیکوتین.',
                en: 'Multi-head weighers with vibration feed fill tobacco and nicotine pouches accurately.',
                ps: 'چند سری وزن سنج د ویبرېشن فیډ سره تنباکو او نیکوتین کڅوړې په دقیقه توګه ډکوي.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/pouch-filling.pdf'
        },
        {
            category: 'tobacco-processing',
            name: { fa: 'دستگاه سیل پاکت تنباکو', en: 'Tobacco Pouch Sealing Machine', ps: 'د تنباکو د کڅوړې سیل کولو ماشین' },
            description: {
                fa: 'سیل حرارتی یا التراسونیک با کنترل فشار و سیستم کدزن برای بسته‌های سفارشی.',
                en: 'Thermal or ultrasonic sealing with pressure control and coding for customised pouches.',
                ps: 'حرارتي یا الټراسونیک سیل کول د فشار کنټرول او کوډینګ سره د ځانګړو کڅوړو لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/pouch-sealing.pdf'
        },
        {
            category: 'tobacco-processing',
            name: { fa: 'ماشین چاپ روی پاکت تنباکو', en: 'Tobacco Pouch Printing Machine', ps: 'د تنباکو د کڅوړې چاپ ماشین' },
            description: {
                fa: 'چاپ فلکسو/دیجیتال با رجیستر دقیق و خشک‌کن UV برای پاکت‌های فویل و کاغذی.',
                en: 'Flexo or digital printers with tight register and UV drying for foil and paper pouches.',
                ps: 'فلکسو یا ډیجیټل چاپګر د دقیق رجسټر او UV وچولو سره د فویل او کاغذي کڅوړو لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/pouch-printing.pdf'
        },
        {
            category: 'tobacco-processing',
            name: { fa: 'خشک‌کن برگ تنباکو', en: 'Tobacco Leaf Dryer', ps: 'د تنباکو د پاڼې وچوونکی' },
            description: {
                fa: 'خشک‌کن طبقه‌ای با کنترل دما و رطوبت برای تثبیت کیفیت برگ‌های تنباکو.',
                en: 'Multi-tier dryer with temperature and humidity control stabilises tobacco leaf quality.',
                ps: 'چند پوړیز وچوونکی د تودوخې او رطوبت کنټرول سره د تنباکو پاڼو کیفیت ثابتوي.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/tobacco-drying.pdf'
        },
        {
            category: 'tobacco-processing',
            name: { fa: 'خط برش تنباکو', en: 'Tobacco Cutting Line', ps: 'د تنباکو پرې کولو لاین' },
            description: {
                fa: 'خردکن و اسلایسر با تنظیم ضخامت و جداساز الیاف برای تهیه برش یکنواخت توتون.',
                en: 'Shredders and slicers with adjustable cut width and fibre separation for uniform tobacco.',
                ps: 'شریدر او سلایسر د قطع عرض د تنظیم او فایبر بېلولو سره د یوشان توتون لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/tobacco-cutting.pdf'
        },
        {
            category: 'tobacco-processing',
            name: { fa: 'واحد طعم‌دهی تنباکو', en: 'Tobacco Flavouring Unit', ps: 'د تنباکو خوند ورکولو واحد' },
            description: {
                fa: 'میکسر درام و اسپری دوزینگ با کنترل رطوبت برای افزودن اسانس و مواد افزودنی.',
                en: 'Drum mixers with spray dosing and humidity control to apply flavours and casings.',
                ps: 'د ډرم مکسرونه د سپرې ډوزینګ او د رطوبت کنټرول سره د خوند او کوټینګ لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/tobacco-flavoring.pdf'
        }
    ],
    'plastic-processing': [
        {
            category: 'extruder',
            name: { fa: 'اکسترودر لوله پلاستیکی', en: 'Plastic Pipe Extruder', ps: 'د پلاستیک پایپ اکسترودر' },
            description: {
                fa: 'خط اکسترودر همراه با کالیبراتور، تانک خلأ و کشنده برای تولید لوله.',
                en: 'Extrusion line with calibrator, vacuum tank and haul-off for pipe production.',
                ps: 'د کالیبریټر، وکیوم ټانک او کشولو واحد سره اکسترودر د پایپ تولید لپاره.'
            },
            pdfUrl: 'pdfs/plastic-processing/extruder/pipe-extruder.pdf'
        },
        {
            category: 'extruder',
            name: { fa: 'اکسترودر فیلم پلاستیکی', en: 'Plastic Film Extruder', ps: 'د پلاستیک فلم اکسترودر' },
            description: {
                fa: 'اکسترودر دمشی یا تخت برای تولید رول فیلم بسته‌بندی با ضخامت یکنواخت.',
                en: 'Blown or cast film extruder delivering consistent gauge packaging films.',
                ps: 'د بلو یا کاسټ فلم اکسترودر چې همغږي ضخامت لرونکي بسته بندۍ فلمونه تولیدوي.'
            },
            pdfUrl: 'pdfs/plastic-processing/extruder/film-extruder.pdf'
        },
        {
            category: 'extruder',
            name: { fa: 'اکسترودر پروفایل پلاستیکی', en: 'Plastic Profile Extruder', ps: 'د پلاستیک پروفایل اکسترودر' },
            description: {
                fa: 'تولید پروفایل و قطعات فنی با قالب‌های قابل تعویض و کنترل دقیق دما.',
                en: 'Profile extrusion with interchangeable dies and precise temperature zoning.',
                ps: 'د بدلېدونکو قالبونو او دقیق تودوخې زونونو سره د پروفایل اکسترودر.'
            },
            pdfUrl: 'pdfs/plastic-processing/extruder/profile-extruder.pdf'
        },
        {
            category: 'injection',
            name: { fa: 'ماشین تزریق پلاستیک', en: 'Plastic Injection Moulding Machine', ps: 'د پلاستیک انجکشن مولډنګ ماشین' },
            description: {
                fa: 'ماشین تزریق با کنترل سروو و واحد گیره قوی برای قالب‌های چند حفره.',
                en: 'Servo-controlled injection unit with high clamping force for multi-cavity moulds.',
                ps: 'د سرو کنټرول لرونکی انجکشن یونټ د څو حفره لرونکو قالبونو لپاره د قوي کلمپینګ ځواک سره.'
            },
            pdfUrl: 'pdfs/plastic-processing/injection/injection-molding.pdf'
        },
        {
            category: 'injection',
            name: { fa: 'ماشین دمشی پلاستیک', en: 'Plastic Blow Moulding Machine', ps: 'د پلاستیک بلو مولډنګ ماشین' },
            description: {
                fa: 'سیستم دمشی برای تولید بطری، مخزن و قطعات توخالی با کنترل ضخامت دیواره.',
                en: 'Blow moulding system for bottles, tanks and hollow parts with wall-thickness control.',
                ps: 'د بوتلونو، ټانکونو او تشو پرزو لپاره بلو مولډنګ د دیوال ضخامت کنټرول سره.'
            },
            pdfUrl: 'pdfs/plastic-processing/injection/blow-molding.pdf'
        },
        {
            category: 'injection',
            name: { fa: 'قطعات مصرفی تزریق', en: 'Injection Moulding Spare Parts', ps: 'د انجکشن مولډنګ اضافي پرزې' },
            description: {
                fa: 'ست نازل، پیچ، بوش و حلقه‌های آب‌بندی برای نگهداری دوره‌ای ماشین تزریق.',
                en: 'Nozzle, screw, bushing and seal kits that keep injection moulding machines running.',
                ps: 'د نوزل، پیچ، بوش او سیل کټونه چې د انجکشن ماشینونه فعال ساتي.'
            },
            pdfUrl: 'pdfs/plastic-processing/injection/injection-parts.pdf'
        },
        {
            category: 'recycling',
            name: { fa: 'خط بازیافت پلاستیک', en: 'Plastic Recycling Line', ps: 'د پلاستیک ریسایکل لاین' },
            description: {
                fa: 'از تفکیک تا خشک‌کن سانتریفیوژ برای بازیافت ضایعات بسته‌بندی و تولید گرانول.',
                en: 'Complete recycling line from sorting to centrifugal drying for pellet output.',
                ps: 'بشپړ ریسایکل لاین له تفکیک څخه تر سنټرفیوژ وچولو پورې د پلېټ تولید لپاره.'
            },
            pdfUrl: 'pdfs/plastic-processing/recycling/plastic-recycling.pdf'
        },
        {
            category: 'recycling',
            name: { fa: 'شردر پلاستیک صنعتی', en: 'Industrial Plastic Shredder', ps: 'صنعتي پلاستیک شریدر' },
            description: {
                fa: 'شردر دو شافت با تیغه‌های آلیاژی و کنترل سرعت برای آماده‌سازی خوراک بازیافت.',
                en: 'Twin-shaft shredder with alloy blades and variable speed for recycling feedstock.',
                ps: 'دوه شافټ لرونکی شریدر د الیاژ تیغونو او د سرعت تنظیم سره د ریسایکل موادو لپاره.'
            },
            pdfUrl: 'pdfs/plastic-processing/recycling/shredder.pdf'
        },
        {
            category: 'recycling',
            name: { fa: 'خط شستشو و خشک‌کن پلاستیک', en: 'Plastic Washing & Drying Line', ps: 'د پلاستیک مینځلو او وچولو لاین' },
            description: {
                fa: 'حوض شستشو، اسکرو انتقال و خشک‌کن حرارتی برای کاهش آلودگی ضایعات.',
                en: 'Washing tanks, screw conveyors and thermal dryers reduce contamination before extrusion.',
                ps: 'د مینځلو حوضونه، سکرو انتقال او حرارتي وچوونکي د اکسترودر دمخه ککړتیا کموي.'
            },
            pdfUrl: 'pdfs/plastic-processing/recycling/washing-line.pdf'
        },
        {
            category: 'recycling',
            name: { fa: 'خط پلت‌سازی پلاستیک', en: 'Plastic Pelletizing Line', ps: 'د پلاستیک پلېټ جوړولو لاین' },
            description: {
                fa: 'گرانولایزر و کاتر با سیستم خنک‌کاری برای تبدیل ضایعات به گرانول باکیفیت.',
                en: 'Granulator and cutter with cooling loop converting scrap into uniform pellets.',
                ps: 'ګرانیولیټر او کټر د یخولو سیسټم سره د ضایعاتو څخه منظم پلېټونه جوړوي.'
            },
            pdfUrl: 'pdfs/plastic-processing/recycling/pelletizing-line.pdf'
        },
        {
            category: 'printing-packaging',
            name: { fa: 'ماشین چاپ فلکسو', en: 'Flexographic Printing Machine', ps: 'د فلکسو چاپ ماشین' },
            description: {
                fa: 'ماشین فلکسو رول به رول با رجیستر دقیق و خشک‌کن هوای گرم برای چاپ بسته‌بندی.',
                en: 'Roll-to-roll flexo press with precise registration and hot-air dryers for packaging films.',
                ps: 'رول په رول فلکسو پریس د دقیق رجسټر او د ګرمې هوا وچولو سره د بسته بندۍ فلمونو لپاره.'
            },
            pdfUrl: 'pdfs/plastic-processing/printing-packaging/flexo-printing.pdf'
        },
        {
            category: 'printing-packaging',
            name: { fa: 'خط پاکت‌سازی', en: 'Bag Making Line', ps: 'د کڅوړې جوړولو لاین' },
            description: {
                fa: 'از رول تا پاکت با ایستگاه‌های تا، دوخت و پانچ برای تولید پاکت‌های چندلایه.',
                en: 'From roll to finished bag with folding, sealing and punching stations for multilayer bags.',
                ps: 'له رول څخه تر بشپړې کڅوړې پورې د تا کولو، سیل کولو او پنچ کولو سټېشنونو سره.'
            },
            pdfUrl: 'pdfs/plastic-processing/printing-packaging/bag-making.pdf'
        },
        {
            category: 'printing-packaging',
            name: { fa: 'خط درزگیری و برش', en: 'Sealing & Cutting Line', ps: 'د سیل کولو او پرې کولو لاین' },
            description: {
                fa: 'سیستم برش و درزگیری با کنترل سروو برای تولید رول‌های بسته‌بندی باکیفیت.',
                en: 'Servo-controlled sealing and cutting modules delivering precise packaging rolls.',
                ps: 'د سرو کنټرول لرونکي سیل او پرې کولو ماډلونه چې دقیق بسته بندۍ رولونه جوړوي.'
            },
            pdfUrl: 'pdfs/plastic-processing/printing-packaging/sealing-cutting.pdf'
        }
    ],
    'plastic-industry': [
        {
            category: 'extruder',
            name: { fa: 'اکسترودر لوله پلاستیکی', en: 'Plastic Pipe Extruder', ps: 'د پلاستیک پایپ اکسترودر' },
            description: {
                fa: 'خط اکسترودر همراه با کالیبراتور، تانک خلأ و کشنده برای تولید لوله.',
                en: 'Extrusion line with calibrator, vacuum tank and haul-off for pipe production.',
                ps: 'د کالیبریټر، وکیوم ټانک او کشولو واحد سره اکسترودر د پایپ تولید لپاره.'
            },
            pdfUrl: 'pdfs/plastic-processing/extruder/pipe-extruder.pdf'
        },
        {
            category: 'extruder',
            name: { fa: 'اکسترودر فیلم پلاستیکی', en: 'Plastic Film Extruder', ps: 'د پلاستیک فلم اکسترودر' },
            description: {
                fa: 'اکسترودر دمشی یا تخت برای تولید رول فیلم بسته‌بندی با ضخامت یکنواخت.',
                en: 'Blown or cast film extruder delivering consistent gauge packaging films.',
                ps: 'د بلو یا کاسټ فلم اکسترودر چې همغږي ضخامت لرونکي بسته بندۍ فلمونه تولیدوي.'
            },
            pdfUrl: 'pdfs/plastic-processing/extruder/film-extruder.pdf'
        },
        {
            category: 'extruder',
            name: { fa: 'اکسترودر پروفایل پلاستیکی', en: 'Plastic Profile Extruder', ps: 'د پلاستیک پروفایل اکسترودر' },
            description: {
                fa: 'تولید پروفایل و قطعات فنی با قالب‌های قابل تعویض و کنترل دقیق دما.',
                en: 'Profile extrusion with interchangeable dies and precise temperature zoning.',
                ps: 'د بدلېدونکو قالبونو او دقیق تودوخې زونونو سره د پروفایل اکسترودر.'
            },
            pdfUrl: 'pdfs/plastic-processing/extruder/profile-extruder.pdf'
        },
        {
            category: 'injection',
            name: { fa: 'ماشین تزریق پلاستیک', en: 'Plastic Injection Moulding Machine', ps: 'د پلاستیک انجکشن مولډنګ ماشین' },
            description: {
                fa: 'ماشین تزریق با کنترل سروو و واحد گیره قوی برای قالب‌های چند حفره.',
                en: 'Servo-controlled injection unit with high clamping force for multi-cavity moulds.',
                ps: 'د سرو کنټرول لرونکی انجکشن یونټ د څو حفره لرونکو قالبونو لپاره د قوي کلمپینګ ځواک سره.'
            },
            pdfUrl: 'pdfs/plastic-processing/injection/injection-molding.pdf'
        },
        {
            category: 'injection',
            name: { fa: 'ماشین دمشی پلاستیک', en: 'Plastic Blow Moulding Machine', ps: 'د پلاستیک بلو مولډنګ ماشین' },
            description: {
                fa: 'سیستم دمشی برای تولید بطری، مخزن و قطعات توخالی با کنترل ضخامت دیواره.',
                en: 'Blow moulding system for bottles, tanks and hollow parts with wall-thickness control.',
                ps: 'د بوتلونو، ټانکونو او تشو پرزو لپاره بلو مولډنګ د دیوال ضخامت کنټرول سره.'
            },
            pdfUrl: 'pdfs/plastic-processing/injection/blow-molding.pdf'
        },
        {
            category: 'injection',
            name: { fa: 'قطعات مصرفی تزریق', en: 'Injection Moulding Spare Parts', ps: 'د انجکشن مولډنګ اضافي پرزې' },
            description: {
                fa: 'ست نازل، پیچ، بوش و حلقه‌های آب‌بندی برای نگهداری دوره‌ای ماشین تزریق.',
                en: 'Nozzle, screw, bushing and seal kits that keep injection moulding machines running.',
                ps: 'د نوزل، پیچ، بوش او سیل کټونه چې د انجکشن ماشینونه فعال ساتي.'
            },
            pdfUrl: 'pdfs/plastic-processing/injection/injection-parts.pdf'
        },
        {
            category: 'recycling',
            name: { fa: 'خط بازیافت پلاستیک', en: 'Plastic Recycling Line', ps: 'د پلاستیک ریسایکل لاین' },
            description: {
                fa: 'از تفکیک تا خشک‌کن سانتریفیوژ برای بازیافت ضایعات بسته‌بندی و تولید گرانول.',
                en: 'Complete recycling line from sorting to centrifugal drying for pellet output.',
                ps: 'بشپړ ریسایکل لاین له تفکیک څخه تر سنټرفیوژ وچولو پورې د پلېټ تولید لپاره.'
            },
            pdfUrl: 'pdfs/plastic-processing/recycling/plastic-recycling.pdf'
        },
        {
            category: 'recycling',
            name: { fa: 'شردر پلاستیک صنعتی', en: 'Industrial Plastic Shredder', ps: 'صنعتي پلاستیک شریدر' },
            description: {
                fa: 'شردر دو شافت با تیغه‌های آلیاژی و کنترل سرعت برای آماده‌سازی خوراک بازیافت.',
                en: 'Twin-shaft shredder with alloy blades and variable speed for recycling feedstock.',
                ps: 'دوه شافټ لرونکی شریدر د الیاژ تیغونو او د سرعت تنظیم سره د ریسایکل موادو لپاره.'
            },
            pdfUrl: 'pdfs/plastic-processing/recycling/shredder.pdf'
        },
        {
            category: 'recycling',
            name: { fa: 'خط شستشو و خشک‌کن پلاستیک', en: 'Plastic Washing & Drying Line', ps: 'د پلاستیک مینځلو او وچولو لاین' },
            description: {
                fa: 'حوض شستشو، اسکرو انتقال و خشک‌کن حرارتی برای کاهش آلودگی ضایعات.',
                en: 'Washing tanks, screw conveyors and thermal dryers reduce contamination before extrusion.',
                ps: 'د مینځلو حوضونه، سکرو انتقال او حرارتي وچوونکي د اکسترودر دمخه ککړتیا کموي.'
            },
            pdfUrl: 'pdfs/plastic-processing/recycling/washing-line.pdf'
        },
        {
            category: 'recycling',
            name: { fa: 'خط پلت‌سازی پلاستیک', en: 'Plastic Pelletizing Line', ps: 'د پلاستیک پلېټ جوړولو لاین' },
            description: {
                fa: 'گرانولایزر و کاتر با سیستم خنک‌کاری برای تبدیل ضایعات به گرانول باکیفیت.',
                en: 'Granulator and cutter with cooling loop converting scrap into uniform pellets.',
                ps: 'ګرانیولیټر او کټر د یخولو سیسټم سره د ضایعاتو څخه منظم پلېټونه جوړوي.'
            },
            pdfUrl: 'pdfs/plastic-processing/recycling/pelletizing-line.pdf'
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
            category: 'construction-parts',
            name: { fa: 'باکت بیل مکانیکی', en: 'Excavator Bucket', ps: 'د اکسکاویټر باکت' },
            description: {
                fa: 'باکت‌های ضدسایش برای حفاری، بارگیری و استخراج معدن.',
                en: 'Wear-resistant excavator buckets for digging, loading and quarry duties.',
                ps: 'د اغوستلو پر وړاندې مقاومت لرونکي باکتونه د کیندلو، بارولو او کان کیندنې لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/construction-parts/excavator-bucket.pdf'
        },
        {
            category: 'construction-parts',
            name: { fa: 'شیلنگ هیدرولیک فشارقوی', en: 'High-Pressure Hydraulic Hose', ps: 'د لوړ فشار هایدرولیک نلۍ' },
            description: {
                fa: 'شیلنگ‌های چندلایه با اتصالات استاندارد برای سیستم‌های هیدرولیک سنگین.',
                en: 'Multilayer hoses with standard fittings for heavy-duty hydraulic systems.',
                ps: 'څو پوړیز هایدرولیک نلونه د معیاري نښلونکو سره د درنو سیسټمونو لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/construction-parts/hydraulic-hose.pdf'
        },
        {
            category: 'construction-parts',
            name: { fa: 'زنجیر شنی ماشین‌آلات', en: 'Crawler Track Chain', ps: 'د ټراک زنځیر' },
            description: {
                fa: 'زنجیر کامل بولدوزر و بیل مکانیکی با پین سخت‌کاری‌شده و بوش ضدسایش.',
                en: 'Complete dozer and excavator chains with hardened pins and wear-resistant bushes.',
                ps: 'د بلدوزر او اکسکاویټر بشپړ زنځیرونه د سختو پینو او ضد اغوستلو بوشونو سره.'
            },
            pdfUrl: 'pdfs/machinery-parts/construction-parts/track-chain.pdf'
        },
        {
            category: 'construction-parts',
            name: { fa: 'قطعات موتور دیزلی سنگین', en: 'Heavy-Duty Engine Parts', ps: 'د درنو ډیزل انجن پرزې' },
            description: {
                fa: 'لوازم اورهال موتور شامل پیستون، رینگ، یاتاقان و سوپاپ برای ماشین‌آلات راهسازی.',
                en: 'Overhaul kits with pistons, rings, bearings and valves for construction engines.',
                ps: 'د اورهال کڅوړې چې پستونونه، رینګونه، یاتاقانونه او والوګان د ساختماني انجنونو لپاره لري.'
            },
            pdfUrl: 'pdfs/machinery-parts/construction-parts/engine-parts.pdf'
        },
        {
            category: 'production-parts',
            name: { fa: 'قالب تزریق پلاستیک', en: 'Plastic Injection Mold', ps: 'د پلاستیک انجکشن قالب' },
            description: {
                fa: 'قالب‌های چندحفره فولادی با خنک‌کننده کانفورمال برای تولید سریع قطعات.',
                en: 'Multi-cavity steel molds with conformal cooling for rapid plastic part production.',
                ps: 'چند حفره لرونکي فولادي قالبونه د کانفورمال یخولو سره د چټک پلاستیک تولید لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/production-parts/injection-mold.pdf'
        },
        {
            category: 'production-parts',
            name: { fa: 'تیغه برش صنعتی', en: 'Industrial Cutting Blade', ps: 'صنعتي د پرې کولو تیغ' },
            description: {
                fa: 'تیغه‌های فولادی آلیاژی برای خطوط برش ورق، چوب و مواد غذایی.',
                en: 'Alloy-steel blades engineered for sheet, wood and food cutting lines.',
                ps: 'د مصر فولادو تیغونه د پاڼې، لرګي او خوړو د پرې کولو لینونو لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/production-parts/cutting-blade.pdf'
        },
        {
            category: 'production-parts',
            name: { fa: 'کنترلر CNC صنعتی', en: 'Industrial CNC Controller', ps: 'صنعتي د CNC کنټرولر' },
            description: {
                fa: 'کنترلر چندمحوره با نرم‌افزار به‌روزرسانی‌شده برای مراکز ماشینکاری و برش.',
                en: 'Multi-axis controller with updated software for machining centres and cutting systems.',
                ps: 'چند محوره کنټرولر د نوې سافټویر سره د ماشینکارۍ مرکزونو او پرې کولو سیسټمونو لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/production-parts/cnc-controller.pdf'
        },
        {
            category: 'production-parts',
            name: { fa: 'موتور و گیربکس صنعتی', en: 'Industrial Motor & Gearbox', ps: 'صنعتي موټر او ګیرباکس' },
            description: {
                fa: 'ست‌های الکتروگیربکس با نسبت‌های مختلف برای نوار نقاله و ماشین‌آلات بسته‌بندی.',
                en: 'Electro-gearbox sets in multiple ratios for conveyors and packaging machinery.',
                ps: 'برقي ګیربکس سیټونه د بېلابېلو نسبتونو سره د نوار نقاله او بسته بندۍ ماشینونو لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/production-parts/motor-gearbox.pdf'
        },
        {
            category: 'agricultural-parts',
            name: { fa: 'شفت PTO تراکتور', en: 'Tractor PTO Shaft', ps: 'د ټراکټر PTO شافټ' },
            description: {
                fa: 'شفت‌های تلسکوپی با مفصل‌های ایمن برای انتقال توان ادوات کشاورزی.',
                en: 'Telescopic shafts with guarded joints for powering farm implements.',
                ps: 'تلسکوپي شافټونه د خوندي مفصلونو سره د کرنیزو وسایلو د ځواک لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/agricultural-parts/tractor-shaft.pdf'
        },
        {
            category: 'agricultural-parts',
            name: { fa: 'تیغه دروگر کمباین', en: 'Combine Harvester Blade', ps: 'د کمباین د درو تیغه' },
            description: {
                fa: 'تیغه‌های سخت‌کاری‌شده با تراز بالانس برای برداشت گندم، برنج و جو.',
                en: 'Hardened blades with balanced alignment for wheat, rice and barley harvesting.',
                ps: 'سخت کړل شوي تیغونه د توازون سره د غنمو، وریجو او اوربشو د راټولولو لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/agricultural-parts/harvester-blade.pdf'
        },
        {
            category: 'agricultural-parts',
            name: { fa: 'پمپ آب آبیاری', en: 'Irrigation Water Pump', ps: 'د اوبه خور پمپ' },
            description: {
                fa: 'پمپ‌های گریز از مرکز و دیزلی با هد بالا برای سیستم‌های آبیاری مزرعه.',
                en: 'Centrifugal and diesel-driven pumps delivering high head for field irrigation.',
                ps: 'سنټرفیوګ او ډیزلي پمپونه د لوړې سرکښې سره د کرنیزو اوبه خور سیستمونو لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/agricultural-parts/water-pump.pdf'
        },
        {
            category: 'agricultural-parts',
            name: { fa: 'سامانه بذرپاش', en: 'Seed Drill Assembly', ps: 'د بذرپاش سیسټم' },
            description: {
                fa: 'کیت کامل بذرپاش ردیفی با جعبه دنده، دیسک و لوله بذر رسان.',
                en: 'Complete row seeder kits with gearbox, discs and seed tubes.',
                ps: 'بشپړ د کرلو کټونه د ګیر بکس، ډیسکونو او د تخم لولیو سره.'
            },
            pdfUrl: 'pdfs/machinery-parts/agricultural-parts/seed-drill.pdf'
        },
        {
            category: 'general-parts',
            name: { fa: 'یاتاقان صنعتی سنگین', en: 'Heavy Industrial Bearings', ps: 'د درنو ماشینونو یاتاقانونه' },
            description: {
                fa: 'یاتاقان‌های شفت و بلبرینگ غلتکی با گریس نسوز برای خطوط تولید مداوم.',
                en: 'Shaft bearings and roller assemblies with high-temperature grease for continuous lines.',
                ps: 'د شافټ یاتاقانونه او رولرونه د لوړ تودوخې ګریس سره د دوامدارو لینونو لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/general-parts/industrial-bearings.pdf'
        },
        {
            category: 'general-parts',
            name: { fa: 'فیلترهای صنعتی', en: 'Industrial Filtration Set', ps: 'صنعتي فلټر سیټ' },
            description: {
                fa: 'فیلتر هوا، روغن و هیدرولیک برای کمپرسور، ژنراتور و ماشین‌آلات تولیدی.',
                en: 'Air, oil and hydraulic filters tailored for compressors, generators and processing machines.',
                ps: 'د هوا، تیلو او هایدرولیک فلټرونه د کمپرسورونو، جنراتورونو او پروسس ماشینونو لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/general-parts/filters.pdf'
        },
        {
            category: 'general-parts',
            name: { fa: 'باتری صنعتی عمیق‌چرخه', en: 'Deep-Cycle Industrial Batteries', ps: 'صنعتي ژور دورې بیټرۍ' },
            description: {
                fa: 'باتری‌های AGM و ژل برای لیفتراک، UPS و سیستم‌های برق پشتیبان.',
                en: 'AGM and gel batteries powering forklifts, UPS units and backup systems.',
                ps: 'د AGM او جیل بیټرۍ د فورک لیفټ، UPS او شاتړ بریښنا سیسټمونو لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/general-parts/batteries.pdf'
        },
        {
            category: 'general-parts',
            name: { fa: 'تسمه‌های انتقال نیرو', en: 'Power Transmission Belts', ps: 'د ځواک لېږد تسمې' },
            description: {
                fa: 'تسمه‌های V، تایمینگ و تخت با ترکیب لاستیک تقویت‌شده برای موتورها و نقاله‌ها.',
                en: 'V, timing and flat belts reinforced for motors, conveyors and fabrication lines.',
                ps: 'V، ټایمینګ او فلیټ تسمې د پیاوړي ربړ سره د موترو، نوار نقالو او تولیدي لینونو لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/general-parts/belts.pdf'
        }
    ],
    'electronics-energy-systems': [
        {
            category: 'electronic-machinery',
            name: { fa: 'ماشین SMT', en: 'SMT Pick-and-Place Line', ps: 'SMT ماشین' },
            description: {
                fa: 'خط SMT با فیڈر هوشمند، چاپ خمیر قلع و کوره ریفلو برای تولید بردهای پرتیراژ.',
                en: 'SMT line with smart feeders, solder paste printing and reflow oven for high-volume PCB production.',
                ps: 'د SMT لاین د هوښیار فیډرونو، د سولډر پیسټ چاپ او ريفلو تنور سره د لوړې کچې PCB تولید لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/electronic-machinery/pcb-assembly/smt-machine.pdf'
        },
        {
            category: 'electronic-machinery',
            name: { fa: 'ماشین لحیم‌کاری موجی', en: 'Wave Soldering Machine', ps: 'ویو سولډرینګ ماشین' },
            description: {
                fa: 'سیستم لحیم‌کاری موجی با کنترل دما، فلوکس و نوار نقاله پالتی برای مونتاژ بردهای THT.',
                en: 'Wave soldering system with controlled temperature, fluxing and pallet conveyor for THT assemblies.',
                ps: 'د موجي سولډر کولو سیستم د تودوخې، فلوکس او پالت نقالې کنټرول سره د THT اسمبلۍ لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/electronic-machinery/pcb-assembly/wave-soldering.pdf'
        },
        {
            category: 'electronic-machinery',
            name: { fa: 'تستر مدار ICT', en: 'IC In-Circuit Tester', ps: 'د IC ازموینې سټېشن' },
            description: {
                fa: 'تستر ICT با فیکسچر چندنقطه، سنجش پیوستگی و گزارش خودکار برای کنترل کیفیت برد.',
                en: 'ICT tester with multi-point fixtures, continuity measurement and automated reporting for board QA.',
                ps: 'د ICT ټېسټ ماشین د څو نقطه فکچرونو، د تسلسل اندازه کولو او اتومات راپور ورکولو سره د بورډ کیفیت لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/electronic-machinery/electronic-testing/ic-testing.pdf'
        },
        {
            category: 'electronic-machinery',
            name: { fa: 'ایستگاه تست عملکردی', en: 'Functional Test Bench', ps: 'فانکشنل ټېسټ بنچ' },
            description: {
                fa: 'ایستگاه تست عملکردی با رک ابزار، سناریوهای نرم‌افزاری و ثبت داده برای محصولات الکترونیکی.',
                en: 'Functional test bench with instrument rack, software scenarios and data capture for electronic products.',
                ps: 'د وظیفوي ټېسټ بنچ د وسایلو رېک، سافټویر سناریوګانو او د معلوماتو ثبت سره د الکترونیکي محصولاتو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/electronic-machinery/electronic-testing/functional-testing.pdf'
        },
        {
            category: 'electronic-machinery',
            name: { fa: 'خط مونتاژ وایر هارنس', en: 'Wire Harness Assembly Line', ps: 'د وایر هارنس اسمبلۍ لاین' },
            description: {
                fa: 'کاتینگ، لخت‌سازی، کرمپ و تست پیوستگی برای تولید دسته سیم خودرو و صنعت.',
                en: 'Cutting, stripping, crimping and continuity testing for automotive and industrial wire harnesses.',
                ps: 'د پرې کولو، پوست کولو، کرمپس کولو او د تسلسل ټېسټ د موټرو او صنعتي وایر هارنس لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/electronic-machinery/cable-assembly/wire-harness.pdf'
        },
        {
            category: 'electronic-machinery',
            name: { fa: 'ایستگاه تست کابل', en: 'Cable Testing Station', ps: 'د کابل ټېسټ سټېشن' },
            description: {
                fa: 'ایستگاه تست ولتاژ بالا، مقاومت عایقی و نشتی جریان برای کابل و دسته سیم.',
                en: 'High-voltage, insulation resistance and leakage current testing station for cables and harnesses.',
                ps: 'د لوړ ولتاژ، د عایق مقاومت او د جریان د لیک ازموینې سټېشن د کیبله او هارنسونو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/electronic-machinery/cable-assembly/cable-testing.pdf'
        },
        {
            category: 'telecom-parts',
            name: { fa: 'خط مونتاژ آنتن', en: 'Antenna Assembly Line', ps: 'د انتن اسمبلۍ لاین' },
            description: {
                fa: 'مونتاژ رفلکتور، فیدر و مدولایر با گشتاور کنترل‌شده و تست VSWR برای آنتن‌های مخابراتی.',
                en: 'Antenna line assembling reflectors, feeders and modulators with torque control and VSWR testing.',
                ps: 'د انتن لاین چې رفلکټر، فیدر او ماډول جوړوي د تورک کنټرول او VSWR ټېسټ سره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/telecom-parts/antenna-production/antenna-assembly.pdf'
        },
        {
            category: 'telecom-parts',
            name: { fa: 'تست آنتن', en: 'Antenna Testing Chamber', ps: 'د انتن ازموینې خونه' },
            description: {
                fa: 'اتاق تست آنتن با محدوده فرکانسی، چرخش موتوری و تحلیل الگو برای تضمین عملکرد رادیویی.',
                en: 'Antenna test chamber with frequency range, motorised rotation and pattern analysis for RF assurance.',
                ps: 'د انتن د ټېسټ خونه د فریکونسۍ رینج، موتري څرخول او د بڼې تحلیل سره د RF ډاډ لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/telecom-parts/antenna-production/antenna-testing.pdf'
        },
        {
            category: 'telecom-parts',
            name: { fa: 'پوشش‌دهی آنتن', en: 'Antenna Coating Line', ps: 'د انتن کوټینګ لاین' },
            description: {
                fa: 'فرآیند پوشش و آب‌بندی قطعات آنتن با کابین اسپری، خشک‌کن و کنترل ضخامت.',
                en: 'Coating and sealing process with spray booth, curing oven and thickness monitoring for antenna parts.',
                ps: 'د سپرې کیبن، وچوونکي تنور او د ضخامت څارنې سره د انتن پرزو کوټینګ او سیل کولو پروسه.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/telecom-parts/antenna-production/antenna-coating.pdf'
        },
        {
            category: 'telecom-parts',
            name: { fa: 'تولید کابل فیبر نوری', en: 'Fiber Optic Cable Line', ps: 'د فایبر نوري کیبل لاین' },
            description: {
                fa: 'تولید فیبر با کشش دقیق، روکش UV و تست OTDR برای شبکه‌های پرسرعت.',
                en: 'Fiber production with precise drawing, UV coating and OTDR testing for high-speed networks.',
                ps: 'د فایبر تولید د دقیق کشولو، UV کوټینګ او د OTDR ټېسټ سره د چټکو شبکو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/telecom-parts/network-cable/fiber-optic-cable.pdf'
        },
        {
            category: 'telecom-parts',
            name: { fa: 'تولید کابل کواکسیال', en: 'Coaxial Cable Extrusion Line', ps: 'د کوکسیا کابل تولید لاین' },
            description: {
                fa: 'اکسترودر، شیلد بافت و تست امپدانس برای کابل‌های RF و تلویزیونی.',
                en: 'Extrusion, braided shielding and impedance testing for RF and broadcast coaxial cables.',
                ps: 'اکسترودر، اوبدل شوی شیلډ او د امپیدانس ټېسټ د RF او خپرونو کواکسیال کیبله لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/telecom-parts/network-cable/coaxial-cable.pdf'
        },
        {
            category: 'telecom-parts',
            name: { fa: 'مونتاژ کانکتور کابل', en: 'Cable Connector Assembly', ps: 'د کابل نښلونکي اسمبلۍ' },
            description: {
                fa: 'ماشین‌کاری، آبکاری و تست هدایت الکتریکی برای کانکتورهای صنعتی و مخابراتی.',
                en: 'Machining, plating and electrical continuity testing for industrial and telecom connectors.',
                ps: 'ماشین کاري، الکترولیت پوښښ او د برقي تسلسل ټېسټ د صنعتي او مخابراتي نښلونو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/telecom-parts/network-cable/cable-connector.pdf'
        },
        {
            category: 'telecom-parts',
            name: { fa: 'مونتاژ برج مخابراتی', en: 'Telecom Tower Assembly', ps: 'د مخابراتي برجه اسمبلۍ' },
            description: {
                fa: 'مونتاژ سکشن‌های فولادی، پیچ‌کاری و سیستم بالابری برای نصب برج‌های مخابراتی.',
                en: 'Steel section assembly, bolting and lifting systems for telecom tower erection.',
                ps: 'د فولادو سکشن اسمبلۍ، بولټ لګول او د پورته کولو سیستمونه د مخابراتي برجه درولو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/telecom-parts/telecom-tower/tower-assembly.pdf'
        },
        {
            category: 'telecom-parts',
            name: { fa: 'فونداسیون برج مخابراتی', en: 'Tower Foundation Works', ps: 'د برج بنسټ جوړول' },
            description: {
                fa: 'قالب‌بندی، آرماتور و بتن‌ریزی پایه‌های برج با آنالیز ژئوتکنیک و بولت آنکر.',
                en: 'Formwork, rebar and concrete casting for tower bases with geotechnical analysis and anchor bolts.',
                ps: 'د فارم ورک، اوسپنې میش او کانکریټ اچول د برج د بنسټ لپاره د جیوتخنیکي تحلیل او انکر بولټونو سره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/telecom-parts/telecom-tower/tower-foundation.pdf'
        },
        {
            category: 'telecom-parts',
            name: { fa: 'نگهداری برج مخابراتی', en: 'Telecom Tower Maintenance', ps: 'د مخابراتي برجه ساتنه' },
            description: {
                fa: 'بازرسی طناب‌کار، تعویض کابل، پوشش ضدزنگ و تست پایداری ساختار برج.',
                en: 'Rope access inspections, cable replacement, anti-corrosion coating and structural stability checks.',
                ps: 'د رسی له لارې معاینات، د کابل بدلول، د زنګ ضد کوټینګ او د جوړښت ثبات معاینات.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/telecom-parts/telecom-tower/tower-maintenance.pdf'
        },
        {
            category: 'industrial-laser',
            name: { fa: 'لیزر فیبری برش', en: 'Fiber Laser Cutting Machine', ps: 'د فایبر لیزر پرې کوونکی' },
            description: {
                fa: 'لیزر فیبری با هد اتوفوکوس، میز تبادل و کنترل CNC برای برش استیل و آلومینیوم.',
                en: 'Fiber laser cutter with auto-focus head, shuttle table and CNC control for stainless and aluminium.',
                ps: 'د فایبر لیزر پرې کوونکی د اتومات فوکس سر، شاتل مېز او CNC کنټرول سره د سټینلیس او المونیم لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/industrial-laser/laser-cutting/fiber-laser.pdf'
        },
        {
            category: 'industrial-laser',
            name: { fa: 'لیزر CO2 برش', en: 'CO₂ Laser Cutting Machine', ps: 'د CO₂ لیزر پرې کولو ماشین' },
            description: {
                fa: 'لیزر CO₂ با میز بزرگ، کنترل گالوانومتر و سیستم اگزوز برای مواد غیر فلزی.',
                en: 'CO₂ laser with large bed, galvanometer control and exhaust system for non-metal materials.',
                ps: 'د CO₂ لیزر د لوی بستر، ګالوانومیټر کنټرول او د ایستلو سیستم سره د غیر فلزي موادو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/industrial-laser/laser-cutting/co2-laser.pdf'
        },
        {
            category: 'industrial-laser',
            name: { fa: 'علامت‌زنی لیزری', en: 'Laser Marking Station', ps: 'د لیزري نښان وهلو سټېشن' },
            description: {
                fa: 'ایستگاه مارکینگ فیبری با فیکسچر چرخشی، نرم‌افزار کدگذاری و کنترل کیفیت آنلاین.',
                en: 'Fiber marking station with rotary fixtures, coding software and inline quality monitoring.',
                ps: 'د فایبر نښان وهلو سټېشن د څرخول فکچرونو، کوډ سافټویر او آنلاین کیفیت څارنې سره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/industrial-laser/laser-engraving/laser-marking.pdf'
        },
        {
            category: 'industrial-laser',
            name: { fa: 'حکاکی لیزری', en: 'Laser Etching Machine', ps: 'د لیزر حکاکۍ ماشین' },
            description: {
                fa: 'دستگاه حکاکی دقیق برای پلاستیک و فلز با محورهای XYZ و کنترل عمق پرتو.',
                en: 'Precision etching system for plastics and metals with XYZ axes and beam depth control.',
                ps: 'د پلاستیک او فلز لپاره دقیق حکاکي سیستم د XYZ محورونو او د وړانګې د ژورتیا کنټرول سره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/industrial-laser/laser-engraving/laser-etching.pdf'
        },
        {
            category: 'industrial-laser',
            name: { fa: 'سلول برازینگ لیزری', en: 'Laser Brazing Cell', ps: 'د لیزر بریزینګ سیل' },
            description: {
                fa: 'سلول برازینگ لیزری با منبع تغذیه روباتی، سیم تغذیه و کنترل جوش برای قطعات خودرویی.',
                en: 'Laser brazing cell with robotic power source, wire feed and weld control for automotive parts.',
                ps: 'د لیزر بریزینګ سیل د روبوټ ځواک سرچینې، د تار خوراک او د ویلډ کنټرول سره د موټرو پرزو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/industrial-laser/laser-welding/laser-brazing.pdf'
        },
        {
            category: 'industrial-laser',
            name: { fa: 'پوشش‌دهی لیزری', en: 'Laser Cladding System', ps: 'د لیزر کلډینګ سیستم' },
            description: {
                fa: 'سیستم کلڈینگ با نازل پودر، لیزر پرقدرت و اسکنر برای بازسازی سطوح صنعتی.',
                en: 'Cladding system with powder nozzle, high-power laser and scanner for industrial surface repair.',
                ps: 'د پودر نوزل، لوړ ځواک لیزر او سکینر سره کلډینګ سیستم د صنعتي سطحو ترمیم لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/industrial-laser/laser-welding/laser-cladding.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'دستگاه افست ورقی', en: 'Sheet-Fed Offset Press', ps: 'ورقي افست پریس' },
            description: {
                fa: 'ماشین افست ورقی با واحد چهاررنگ، سیستم رجیستر خودکار و کنترل رطوبت برای چاپ تجاری.',
                en: 'Sheet-fed offset press with four-colour units, automatic register and dampening control for commercial print.',
                ps: 'ورقي افست پریس د څلور رنګه واحدونو، اتومات راجسټر او د رطوبت کنټرول سره د تجارتي چاپ لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/offset-printing/sheet-fed-offset.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'پرس افست رولی', en: 'Web Offset Press', ps: 'رولي افست پریس' },
            description: {
                fa: 'پرس رولی با دوات، خشک‌کن وب و فولدر برای مجلات، روزنامه و بسته‌بندی انعطاف‌پذیر.',
                en: 'Web offset press with inking, web dryer and folder for magazines, newspapers and flexible packaging.',
                ps: 'رولي افست پریس د رنګ ورکولو، ویب وچوونکي او فولډر سره د مجلو، ورځپاڼو او انعطاف وړ بسته بندۍ لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/offset-printing/web-offset.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'سیستم خشک‌کن افست', en: 'Offset Drying System', ps: 'د افست وچولو سیستم' },
            description: {
                fa: 'خشک‌کن IR/هوای گرم با کنترل انرژی و بازیافت گرما برای خطوط چاپ افست.',
                en: 'IR/hot-air dryer with energy control and heat recovery for offset printing lines.',
                ps: 'د IR/ګرمې هوا وچوونکی د انرژۍ کنټرول او د تودوخې بیا راټولولو سره د افست چاپ لینونو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/offset-printing/offset-drying.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'چاپگر جوهرافشان صنعتی', en: 'Industrial Inkjet Printer', ps: 'صنعتي انکجټ چاپګر' },
            description: {
                fa: 'پرینتر جوهرافشان صنعتی با هد پیزو، مدیریت رنگ و RIP برای چاپ دیجیتال سریع.',
                en: 'Industrial inkjet printer with piezo heads, colour management and RIP for fast digital runs.',
                ps: 'صنعتي انکجټ چاپګر د پیزو سری، د رنګ مدیریت او RIP سره د چټکو ډیجیټل چاپونو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/digital-printing/inkjet-printing.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'پرینتر لیزری صنعتی', en: 'Digital Laser Printer', ps: 'ډیجیټل لیزري چاپګر' },
            description: {
                fa: 'پرینتر لیزری با کیفیت بالا، تونر با ثبات و فینیشینگ خودکار برای چاپ بر اساس تقاضا.',
                en: 'High-quality laser printer with durable toner and automated finishing for print-on-demand.',
                ps: 'لوړ کیفیت لیزري چاپګر د دوامدار ټونر او اتومات فینشینګ سره د غوښتنې پر اساس چاپ لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/digital-printing/laser-printing.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'سیستم چاپ فرمت بزرگ', en: 'Large Format Printing System', ps: 'لوی فارمیټ چاپ سیستم' },
            description: {
                fa: 'سیستم چاپ فرمت بزرگ با هد UV، میز خلأ و مدیریت مدیا برای بنر و گرافیک فضای باز.',
                en: 'Large-format UV printing system with vacuum table and media management for banners and outdoor graphics.',
                ps: 'لوی فارمیټ UV چاپ سیستم د ویکیوم مېز او د میډیا مدیریت سره د بنر او بهرني ګرافیک لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/digital-printing/large-format-printing.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'پرس چاپ فلکسو', en: 'Flexographic Printing Press', ps: 'فلیکسو چاپ پریس' },
            description: {
                fa: 'پرس فلکسو CI با واحدهای آنیلوکس، خشک‌کن هوا و کنترل کشش برای بسته‌بندی انعطاف‌پذیر.',
                en: 'CI flexo press with anilox stations, hot-air dryers and tension control for flexible packaging.',
                ps: 'CI فلیکسو پریس د انیلوکس واحدونو، ګرمې هوا وچوونکو او د کشش کنټرول سره د انعطاف وړ بسته بندۍ لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/flexo-printing/flexo-printing.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'سیستم ساخت کلیشه فلکسو', en: 'Flexo Plate Making System', ps: 'د فلیکسو پلیټ جوړولو سیستم' },
            description: {
                fa: 'سیستم شست‌وشو، نوردهی و پلیمر برای تولید کلیشه فلکسو با دقت بالا.',
                en: 'Washout, exposure and polymer processing system for high-precision flexo plates.',
                ps: 'د مینځلو، روښانولو او پولیمر پروسس سیستم د لوړ دقیق فلیکسو پلیټونو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/flexo-printing/flexo-plate-making.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'لاین برش و ریوایند فلکسو', en: 'Flexo Slitting & Rewinding Line', ps: 'د فلیکسو پرې او ریوایند لاین' },
            description: {
                fa: 'لاین برش و ریوایند با کنترل تنشن و تیغه دقیق برای رول‌های چاپ فلکسو.',
                en: 'Slitting and rewinding line with tension control and precision blades for flexo printed rolls.',
                ps: 'د پرې کولو او ریوایند لاین د تنشن کنټرول او دقیق تیغونو سره د فلیکسو چاپ رولونو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/flexo-printing/flexo-slitting.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'پرس چاپ سیلک', en: 'Screen Printing Press', ps: 'سیلک چاپ پریس' },
            description: {
                fa: 'ماشین چاپ سیلک با میز وکیوم، ثبات رجیستر و خشک‌کن UV برای منسوجات و تبلیغات.',
                en: 'Screen printing press with vacuum table, register stability and UV dryer for textiles and signage.',
                ps: 'د سیلک چاپ پریس د ویکیوم مېز، د راجسټر ثبات او UV وچوونکي سره د ټوکر او اعلانونو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/screen-printing/screen-printing.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'تجهیزات ساخت شابلون سیلک', en: 'Screen Making Equipment', ps: 'د سکرین جوړولو تجهیزات' },
            description: {
                fa: 'تجهیزات پوشش امولسیون، نوردهی و شست‌وشو برای آماده‌سازی شابلون چاپ سیلک.',
                en: 'Emulsion coating, exposure and washout equipment for preparing screen printing stencils.',
                ps: 'د امولشن کوټ، روښانولو او مینځلو تجهیزات د سیلک چاپ د شابلون چمتو کولو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/screen-printing/screen-making.pdf'
        },
        {
            category: 'printing-machines',
            name: { fa: 'سیستم شست‌وشوی سیلک', en: 'Screen Cleaning System', ps: 'د سکرین پاکولو سیستم' },
            description: {
                fa: 'سیستم شست‌وشو و بازسازی توری چاپ با پمپ فشار، مواد شوینده و خشک‌کن.',
                en: 'Screen reclaim system with pressure pumps, detergents and drying for reusable mesh.',
                ps: 'د سکرین بیا رغونې سیستم د فشار پمپونو، پاکوونکو او وچوونکي سره د بیا کارېدونکي جال لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/printing-machines/screen-printing/screen-cleaning.pdf'
        },
        {
            category: 'renewable-energy',
            name: { fa: 'پنل خورشیدی', en: 'Solar PV Module Package', ps: 'لمریز پینل پکیج' },
            description: {
                fa: 'ماژول‌های خورشیدی با راندمان بالا، فریم آلومینیومی و گارانتی عملکرد برای نیروگاه‌های تجاری.',
                en: 'High-efficiency PV modules with aluminium frames and performance warranty for commercial plants.',
                ps: 'د لوړ موثریت لمریز ماډولونه د المونیم چوکاټ او د کارکرد ضمانت سره د تجارتي فابریکو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/renewable-energy/solar-power/solar-panel.pdf'
        },
        {
            category: 'renewable-energy',
            name: { fa: 'اینورتر خورشیدی', en: 'Solar Inverter System', ps: 'لمریز انورټر سیستم' },
            description: {
                fa: 'اینورتر استرینگ/سنترال با MPPT چندگانه، مانیتورینگ آنلاین و حفاظت شبکه.',
                en: 'String/central inverters with multi-MPPT, online monitoring and grid protection.',
                ps: 'د سترینګ/سنټرل انورټرونه د څو MPPT، آنلاین څارنې او د شبکې خوندیتوب سره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/renewable-energy/solar-power/solar-inverter.pdf'
        },
        {
            category: 'renewable-energy',
            name: { fa: 'سازه نصب پنل خورشیدی', en: 'Solar Mounting Structure', ps: 'د لمریز پینل د نصب جوړښت' },
            description: {
                fa: 'استراکچر گالوانیزه یا آلومینیومی با طراحی استاتیکی و کیت نصب برای پشت‌بام و زمین.',
                en: 'Galvanised or aluminium mounting structures with static design and installation kits for roof and ground.',
                ps: 'ګلوانیز یا المونیم جوړښتونه د سټېټیک ډیزاین او د نصب کټونو سره د بام او ځمکې لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/renewable-energy/solar-power/solar-mounting-structure.pdf'
        },
        {
            category: 'renewable-energy',
            name: { fa: 'توربین بادی', en: 'Wind Turbine Package', ps: 'د باد توربین پکیج' },
            description: {
                fa: 'توربین بادی با ژنراتور، کنترل زاویه پره و سیستم ترمز برای تولید برق پایدار.',
                en: 'Wind turbine with generator, blade pitch control and braking system for stable power generation.',
                ps: 'د باد توربین د جنراتور، د بلیډ زاویې کنټرول او د بریک سیستم سره د ثابتې برېښنا لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/renewable-energy/wind-power/wind-turbine.pdf'
        },
        {
            category: 'renewable-energy',
            name: { fa: 'سازه برج بادی', en: 'Wind Tower Structure', ps: 'د باد برج جوړښت' },
            description: {
                fa: 'ستون فولادی ماژولار با پلتفرم دسترسی، نردبان و آسانسور سرویس برای نصب توربین.',
                en: 'Modular steel tower with access platforms, ladders and service lift for turbine installation.',
                ps: 'ماډولر فولادي برج د لاسرسي پلیټفارمونو، زینو او د خدمت لفټ سره د توربین نصب لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/renewable-energy/wind-power/wind-tower-structure.pdf'
        },
        {
            category: 'renewable-energy',
            name: { fa: 'کنترلر توربین بادی', en: 'Wind Turbine Controller', ps: 'د باد توربین کنټرولر' },
            description: {
                fa: 'کنترلر توربین با مانیتورینگ SCADA، حفاظت ولتاژ و مدیریت شارژ باتری.',
                en: 'Turbine controller with SCADA monitoring, voltage protection and battery charge management.',
                ps: 'د توربین کنټرولر د SCADA څارنې، د ولتاژ خوندیتوب او د بیټرۍ د چارج مدیریت سره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/renewable-energy/wind-power/wind-controller.pdf'
        },
        {
            category: 'electrical-distribution',
            name: { fa: 'تابلو برق فشار ضعیف', en: 'LV Switchgear Panel', ps: 'د ټیټ فشار سویچ ګیر' },
            description: {
                fa: 'تابلو LV با بریکر هوایی/قالبی، باس‌داکت و مدارک تست روتین برای کارخانه.',
                en: 'LV switchgear with ACB/MCCB breakers, bus ducts and routine test dossiers for plants.',
                ps: 'د ټیټ فشار سویچ ګیر د ACB/MCCB بریکرونو، بس ډکټ او د منظم ټېسټ اسنادو سره د فابریکو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/electrical-distribution/lv-switchgear.pdf'
        },
        {
            category: 'electrical-distribution',
            name: { fa: 'تابلو توزیع برق', en: 'Power Distribution Panel', ps: 'د برېښنا وېش پینل' },
            description: {
                fa: 'تابلو توزیع با مدول‌های MCC، اندازه‌گیری انرژی و حفاظت اضافه‌بار برای خطوط تولید.',
                en: 'Distribution panel with MCC modules, energy metering and overload protection for production lines.',
                ps: 'د وېش پینل د MCC ماډولونو، د انرژۍ اندازه کولو او د اضافه بار خوندیتوب سره د تولید لینونو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/electrical-distribution/distribution-panel.pdf'
        },
        {
            category: 'electrical-distribution',
            name: { fa: 'کلید ATS', en: 'Automatic Transfer Switch', ps: 'اتومات لیږد سویچ' },
            description: {
                fa: 'کلید ATS با کنترلر میکروپروسسوری، مانیتورینگ ژنراتور و حفاظت سنکرون.',
                en: 'ATS unit with microprocessor controller, generator monitoring and synchronisation protection.',
                ps: 'ATS واحد د مایکروپروسسر کنټرولر، د جنراتور څارنې او د سنکرون خوندیتوب سره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/electrical-distribution/ats-switch.pdf'
        },
        {
            category: 'networking-equipment',
            name: { fa: 'سوئیچ شبکه مدیریت‌شونده', en: 'Managed Network Switch', ps: 'د شبکې مدیر سوئچ' },
            description: {
                fa: 'سوئیچ لایه 2/3 با پورت گیگابیت، PoE و مدیریت از راه دور برای دیتاسنتر و کارخانه.',
                en: 'Layer 2/3 switch with gigabit ports, PoE and remote management for data centers and plants.',
                ps: 'د ۲/۳ طبقې سوئچ د ګیګابېټ بندرونو، PoE او لرې مدیریت سره د ډیټا سنتر او فابریکو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/networking-equipment/network-switch.pdf'
        },
        {
            category: 'networking-equipment',
            name: { fa: 'روتر صنعتی', en: 'Industrial Router', ps: 'صنعتي روټر' },
            description: {
                fa: 'روتر صنعتی با VPN، فایروال و پورت‌های WAN/LTE برای اتصال ایمن سایت‌های تولیدی.',
                en: 'Industrial router with VPN, firewall and WAN/LTE ports for secure plant connectivity.',
                ps: 'صنعتي روټر د VPN، فایروال او د WAN/LTE بندرونو سره د فابریکې خوندي نښلولو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/networking-equipment/router.pdf'
        },
        {
            category: 'networking-equipment',
            name: { fa: 'اکسس پوینت وای‌فای', en: 'Enterprise Wi-Fi Access Point', ps: 'د وای فای اکسس پواینټ' },
            description: {
                fa: 'اکسس‌پوینت دوبانده با PoE، مدیریت مرکزی و Roaming یکپارچه برای سالن‌های تولید.',
                en: 'Dual-band access point with PoE, central management and seamless roaming for production halls.',
                ps: 'دوه بانده اکسس پواینټ د PoE، مرکزي مدیریت او بې خنډه رومینګ سره د تولید هالونو لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/networking-equipment/wifi-access-point.pdf'
        },
        {
            category: 'networking-equipment',
            name: { fa: 'رک شبکه', en: 'Network Rack & Cabling Kit', ps: 'د شبکې رېک او کیبل کټ' },
            description: {
                fa: 'رک 19 اینچ با تهویه، پاور ماژول و اکسسوری کابل‌کشی ساخت‌یافته برای دیتاسنتر.',
                en: '19-inch rack with ventilation, power modules and structured cabling accessories for data centers.',
                ps: '۱۹ انچ رېک د هواخور، د بریښنا ماډولونو او د جوړښتي کیبل لوازمو سره د ډیټا سنتر لپاره.'
            },
            pdfUrl: 'pdfs/electronics-energy-systems/networking-equipment/network-rack.pdf'
        }
    ],
    'mixing-equipments': [
        {
            category: 'chemical-pharma',
            name: { fa: 'راکتور جکت‌دار فرایندی', en: 'Jacketed Process Reactor', ps: 'د جاکټ لرونکی پروسې ریکټور' },
            description: {
                fa: 'راکتور استیل با جکت حرارتی، کنترل دما و همزن سیل مکانیکی برای فرآیندهای شیمیایی و دارویی.',
                en: 'Stainless steel reactor with heating jacket, temperature control and mechanical seal agitator for chemical and pharma batches.',
                ps: 'سټینلیس ریکټور د تودوخې جاکټ، د تودوخې کنټرول او میخانیکي سیل همزن سره د کیمیاوي او درملو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/chemical-pharma/reaction-tank/jacketed-reactor.pdf',
            meta: [
                {
                    label: { fa: 'حجم کاری', en: 'Working Volume', ps: 'کاري حجم' },
                    value: { fa: '۵۰۰ تا ۵۰۰۰ لیتر', en: '500–5000 L', ps: '۵۰۰ تر ۵۰۰۰ لیتر' }
                },
                {
                    label: { fa: 'فشار طراحی', en: 'Design Pressure', ps: 'دیزاین فشار' },
                    value: { fa: 'تا ۶ بار', en: 'Up to 6 bar', ps: 'تر ۶ بار پورې' }
                }
            ]
        },
        {
            category: 'chemical-pharma',
            name: { fa: 'راکتور شیشه‌ای', en: 'Glass-Lined Reactor', ps: 'د شیشې لاین لرونکی ریکټور' },
            description: {
                fa: 'راکتور پوشش شیشه‌ای با مقاومت شیمیایی بالا و قابلیت CIP برای تولید دارو و مواد حساس.',
                en: 'Glass-lined reactor offering high chemical resistance and CIP capability for sensitive formulations.',
                ps: 'شیشه پوښ ریکټور د لوړې کیمیاوي مقاومت او د CIP وړتیا سره د حساسو فورمولونو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/chemical-pharma/reaction-tank/glass-lined-reactor.pdf'
        },
        {
            category: 'chemical-pharma',
            name: { fa: 'همزن راکتور', en: 'Reactor Agitator Package', ps: 'د ریکټور د همزن سیټ' },
            description: {
                fa: 'پکج همزن با پروانه، گیربکس و سیل مکانیکی متناسب با ویسکوزیته و فرآیند.',
                en: 'Agitator package with impeller, gearbox and mechanical seal sized to process viscosity.',
                ps: 'د امپیلر، ګیربکس او میخانیکي سیل لرونکی همزن چې د ویسکوسیتي سره سم جوړ شوی.'
            },
            pdfUrl: 'pdfs/mixing-equipments/chemical-pharma/reaction-tank/reactor-agitator.pdf'
        },
        {
            category: 'chemical-pharma',
            name: { fa: 'دستگاه بسته‌بندی بلستر', en: 'Blister Packing Machine', ps: 'د درملو د بلستر بسته بندي ماشین' },
            description: {
                fa: 'خط بلستر اتومات با دوزینگ دقیق، سیل حرارتی و چاپ مشخصات دارویی.',
                en: 'Automatic blister line with precise dosing, heat sealing and pharma-grade printing.',
                ps: 'اتومات بلستر لاین د دقیق ډوزینګ، حرارتي سیل او د درملو چاپ سره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/chemical-pharma/pharma-packaging/blister-packing.pdf'
        },
        {
            category: 'chemical-pharma',
            name: { fa: 'دستگاه پرکن بطری دارویی', en: 'Pharma Bottle Filling Machine', ps: 'د درملو بوتل ډکولو ماشین' },
            description: {
                fa: 'پرکن بطری با سیستم CIP، دربندی اتومات و کنترل وزن برای شربت و محلول‌های دارویی.',
                en: 'Bottle filler with CIP system, automatic capping and weight control for syrups and liquid medicines.',
                ps: 'د بوتل ډکولو ماشین د CIP سیستم، اتومات سر پوښ او د وزن کنټرول سره د شربت او مایعاتو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/chemical-pharma/pharma-packaging/bottle-filling.pdf'
        },
        {
            category: 'chemical-pharma',
            name: { fa: 'ماشین کارتن‌سازی دارویی', en: 'Pharma Cartoning Machine', ps: 'د درملو د کارتن جوړولو ماشین' },
            description: {
                fa: 'کارتیجر اتومات برای بسته‌بندی ثانویه با تشخیص کد و سیستم رد محصول معیوب.',
                en: 'Automatic cartoner for secondary packaging with code detection and reject system.',
                ps: 'اتومات کارتونې ماشین د دوهمي بسته بندۍ لپاره د کوډ کشف او د نیمګړي محصول ردولو سره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/chemical-pharma/pharma-packaging/cartoning-machine.pdf'
        },
        {
            category: 'chemical-pharma',
            name: { fa: 'میکسر هموژنایزر', en: 'Industrial Homogenising Mixer', ps: 'صنعتي همجن ساز مکسەر' },
            description: {
                fa: 'میکسر با سرعت بالا و سیستم هموژنایزر برای کرم، سس و محصولات دارویی نیمه‌جامد.',
                en: 'High-shear mixer with homogeniser for creams, sauces and semi-solid pharma products.',
                ps: 'لوړ سرعت همجن کوونکی مکسېر د کریم، ساس او نیمه جامدو درملو محصولاتو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/chemical-pharma/mixing-grinding/mixer.pdf'
        },
        {
            category: 'chemical-pharma',
            name: { fa: 'دانه‌ساز مرطوب', en: 'Wet Granulator System', ps: 'د لوند ګرینولیټر سیستم' },
            description: {
                fa: 'گرینولاتور دارویی با برش دقیق و خشک‌کن متصل برای تولید گرانول یکنواخت.',
                en: 'Pharma granulator with precision cutter and integrated dryer for uniform granules.',
                ps: 'د درملو ګرینولیټر د دقیق پرې کوونکي او وصل وچولو سره د یکنواخت ګرینول لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/chemical-pharma/mixing-grinding/granulator.pdf'
        },
        {
            category: 'chemical-pharma',
            name: { fa: 'ریبون بلندر', en: 'Ribbon Blender', ps: 'ربن بلنډر' },
            description: {
                fa: 'مخلوط‌کن نواری با طراحی U شکل و درب آب‌بند برای پودر و گرانول غذایی و شیمیایی.',
                en: 'U-shaped ribbon blender with dust-tight cover for food and chemical powders.',
                ps: 'د U شکل ربن بلنډر د دوړو تړلي سرپوښ سره د خوړو او کیمیاوي پوډرو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/chemical-pharma/mixing-grinding/ribbon-blender.pdf'
        },
        {
            category: 'tanks',
            name: { fa: 'تانک آب استیل', en: 'Stainless Water Tank', ps: 'سټینلیس د اوبو ټانک' },
            description: {
                fa: 'تانک استیل ۳۰۴/۳۱۶ با پلیسه داخلی و خروجی‌های سفارشی برای آب آشامیدنی و صنعتی.',
                en: '304/316 stainless steel water tank with polished interior and custom outlets for potable and process use.',
                ps: 'د 304/316 سټینلیس اوبو ټانک د صیقل شوې داخلې او دودیزو والوګانو سره د څښاک او صنعتي کارونې لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/tanks/water-tank/stainless-tank.pdf'
        },
        {
            category: 'tanks',
            name: { fa: 'تانک پلاستیکی تقویت‌شده', en: 'Reinforced Plastic Tank', ps: 'پیاوړی پلاستیکي ټانک' },
            description: {
                fa: 'تانک پلی‌اتیلن چندلایه با تقویت فیبر و دریچه بازدید برای سیالات خورنده یا آب.',
                en: 'Multilayer polyethylene tank with fibreglass reinforcement and manway for corrosive fluids or water.',
                ps: 'چند پوړیز پولی ایتیلین ټانک د فایبر ګلاس پیاوړتیا او د معاینې دروازې سره د زهرجن مایعاتو یا اوبو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/tanks/water-tank/plastic-tank.pdf'
        },
        {
            category: 'tanks',
            name: { fa: 'تانک ذخیره اسید', en: 'Acid Storage Tank', ps: 'د اسید ذخیرې ټانک' },
            description: {
                fa: 'تانک مقاوم در برابر خوردگی با آستر خاص و تجهیزات ایمنی برای ذخیره اسیدهای صنعتی.',
                en: 'Corrosion-resistant tank with specialised lining and safety fittings for industrial acids.',
                ps: 'د زنګ پر وړاندې مقاومت لرونکی ټانک د ځانګړي آستر او د خوندیتوب تجهیزاتو سره د صنعتي اسیدونو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/tanks/chemical-tank/acid-tank.pdf'
        },
        {
            category: 'tanks',
            name: { fa: 'تانک ذخیره سوخت', en: 'Fuel Storage Tank', ps: 'د سونګ ذخیرې ټانک' },
            description: {
                fa: 'تانک دو جداره با سیستم تهویه و نشانگر سطح برای ذخیره دیزل و بنزین.',
                en: 'Double-wall tank with venting and level gauging for diesel and petrol storage.',
                ps: 'دوه پوړیز ټانک د هوا ایستلو او د سطحې ښودلو سیسټم سره د ډیزلو او پطرولو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/tanks/chemical-tank/fuel-tank.pdf'
        },
        {
            category: 'tanks',
            name: { fa: 'آسترکاری و تعمیر تانک', en: 'Tank Lining & Refurbishment', ps: 'د ټانک آستر او ترمیم' },
            description: {
                fa: 'خدمات آستر اپوکسی، گلس‌فلیک یا رابرلاینینگ و تعمیر نشتی تانک‌های فلزی.',
                en: 'Epoxy, glass-flake or rubber lining services with leak repair for metal tanks.',
                ps: 'د اپوکسي، ګلز فلیک یا رابر آستر خدمتونه او د فلزي ټانکونو د لیک ترمیم.'
            },
            pdfUrl: 'pdfs/mixing-equipments/tanks/chemical-tank/tank-lining.pdf'
        },
        {
            category: 'tanks',
            name: { fa: 'تانک عمودی ذخیره‌سازی', en: 'Vertical Storage Tank', ps: 'عمودي ذخیره ټانک' },
            description: {
                fa: 'تانک عمودی با پایه تقویت‌شده، نردبان و پلتفرم ایمن برای ذخیره حجمی.',
                en: 'Vertical tank with reinforced base, ladder and safe platform for bulk storage.',
                ps: 'عمودي ټانک د پیاوړي بنسټ، زینې او خوندي پلیټفارم سره د ډله ییزې ذخیرې لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/tanks/storage-tank/vertical-tank.pdf'
        },
        {
            category: 'tanks',
            name: { fa: 'تانک افقی ذخیره‌سازی', en: 'Horizontal Storage Tank', ps: 'افقي ذخیره ټانک' },
            description: {
                fa: 'تانک افقی برای نصب روی فریم یا پایه بتنی با محاسبات استحکام و نازل‌گذاری.',
                en: 'Horizontal tank engineered for skid or concrete foundation with nozzle layout design.',
                ps: 'افقي ټانک د فریم یا کانکریټ بنسټ لپاره د قوت محاسبې او نوزل ترتیب سره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/tanks/storage-tank/horizontal-tank.pdf'
        },
        {
            category: 'foam-sponge',
            name: { fa: 'میکسینگ تولید فوم', en: 'Foam Mixing Station', ps: 'د فوم د مخلوط کولو سټېشن' },
            description: {
                fa: 'سیستم میکسینگ با دوزینگ ایزو و پلیول، کنترل دما و ثبت داده برای تولید فوم انعطاف‌پذیر.',
                en: 'Mixing skid with ISO and polyol dosing, temperature control and data logging for flexible foam.',
                ps: 'د ایزو او پولیول دوزینګ، د تودوخې کنټرول او د معلوماتو ثبت سره د فوم مخلوط کولو سکیډ.'
            },
            pdfUrl: 'pdfs/mixing-equipments/foam-sponge/foam-production/foam-mixing.pdf'
        },
        {
            category: 'foam-sponge',
            name: { fa: 'قالب‌گیری بلوک فوم', en: 'Foam Block Moulding Machine', ps: 'د فوم بلاک قالب ماشین' },
            description: {
                fa: 'خط قالب‌گیری فوم با کنترل تراکم، سیستم بخار و برش اولیه برای تولید بلوک مبلمان.',
                en: 'Foam block moulding line with density control, steam system and pre-cut for furniture blocks.',
                ps: 'د فوم بلاک قالب لاین د کثافت کنټرول، بخار سیستم او لومړني پرې کولو سره د فرنیچر بلاکونو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/foam-sponge/foam-production/foam-molding.pdf'
        },
        {
            category: 'foam-sponge',
            name: { fa: 'دستگاه برش فوم پیوسته', en: 'Continuous Foam Cutting Line', ps: 'د فوم د دوامداره پرې کولو لاین' },
            description: {
                fa: 'سیستم برش پیوسته با تیغه متحرک و میز نقاله برای برش دقیق فوم‌های ورقی.',
                en: 'Continuous cutting system with moving blade and conveyor table for accurate slab cutting.',
                ps: 'د خوځنده تیغ او نقاله میز لرونکی دوامدار پرې کولو سیستم د فوم پاڼو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/foam-sponge/foam-production/foam-cutting.pdf'
        },
        {
            category: 'foam-sponge',
            name: { fa: 'برش کانتور اسفنج', en: 'Contour Sponge Cutter', ps: 'د سپنچ کانتور پرې کوونکی' },
            description: {
                fa: 'ماشین برش CNC با سیم یا تیغه برای تولید قطعات کانتور مبلمان و پشتی صندلی.',
                en: 'CNC contour cutter using wire or blade for shaped furniture and seat backs.',
                ps: 'د وایر یا تیغ کاروونکی CNC کانتور پرې کوونکی د فرنیچر او څوکۍ شاګانو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/foam-sponge/sponge-cutting/contour-cutting.pdf'
        },
        {
            category: 'foam-sponge',
            name: { fa: 'برش افقی فوم', en: 'Horizontal Foam Cutter', ps: 'افقي د فوم پرې کوونکی' },
            description: {
                fa: 'دستگاه برش افقی با میز دوار یا رفت و برگشتی برای تولید ورق‌های فوم با ضخامت دقیق.',
                en: 'Horizontal cutting machine with rotary or reciprocating table for precision foam sheets.',
                ps: 'افقي پرې کوونکی ماشین د تاوېدونکې یا تګ راتګ مېز سره د دقیق فوم شیټونو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/foam-sponge/sponge-cutting/horizontal-cutting.pdf'
        },
        {
            category: 'foam-sponge',
            name: { fa: 'برش عمودی فوم', en: 'Vertical Foam Saw', ps: 'عمودي د فوم پرې کولو اره' },
            description: {
                fa: 'اره عمودی با گاید دقیق و سیستم مکش برای برش بلوک‌های فوم به قطعات کوچکتر.',
                en: 'Vertical band saw with precise guide and dust extraction for cutting foam blocks into smaller parts.',
                ps: 'عمودي بانډ اره د دقیق لارښود او دوړو ایستلو سره د فوم بلاکونو د کوچنیو ټوټو کولو لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/foam-sponge/sponge-cutting/vertical-cutting.pdf'
        },
        {
            category: 'foam-sponge',
            name: { fa: 'لمینه‌کردن فوم', en: 'Foam Lamination Line', ps: 'د فوم لامینېټ لاین' },
            description: {
                fa: 'خط لمینه با چسب گرم، رول پرس و برش کناره برای تولید فوم‌های چندلایه.',
                en: 'Lamination line with hot-melt adhesive, roll press and edge trimming for multi-layer foam.',
                ps: 'د ګرم چسب، رول پرس او غاړې پرې کولو سره لامینېټ لاین د څو پوړیز فوم لپاره.'
            },
            pdfUrl: 'pdfs/mixing-equipments/foam-sponge/foam-packaging/foam-lamination.pdf'
        },
        {
            category: 'foam-sponge',
            name: { fa: 'شکل‌دهی و بسته‌بندی فوم', en: 'Foam Shaping & Packaging Cell', ps: 'د فوم شکل ورکولو او بسته بندۍ سیل' },
            description: {
                fa: 'سلول شکل‌دهی با پرس گرم، برش CNC و بسته‌بندی نهایی برای قطعات فوم شکل‌دار.',
                en: 'Shaping cell with hot press, CNC trimming and final packaging for contoured foam parts.',
                ps: 'د ګرم پرس، CNC پرې کولو او وروستي بسته بندۍ سره د فوم شکل ورکولو سیل.'
            },
            pdfUrl: 'pdfs/mixing-equipments/foam-sponge/foam-packaging/foam-shaping.pdf'
        }
    ],
    'paper-pulp': [
        {
            category: 'pulp-production',
            name: {
                fa: 'ماشین خمیرسازی پیوسته',
                en: 'Continuous Pulping Machine',
                ps: 'د دوامداره خمیر جوړولو ماشین'
            },
            description: {
                fa: 'دیفیوزر فشار با کنترل دما و تزریق شیمی برای تولید پالپ یکنواخت از چیپس چوب.',
                en: 'Pressure diffuser with temperature control and chemical dosing for uniform pulp from wood chips.',
                ps: 'د فشار ډیفیوزر د تودوخې کنټرول او د کیمیاوي انجیکشن سره چې له لرګي چپس څخه یکنواخت پالپ برابروي.'
            },
            pdfUrl: 'pdfs/paper-pulp/pulp-production/pulping-machine.pdf'
        },
        {
            category: 'pulp-production',
            name: {
                fa: 'خط شست‌وشوی پالپ چندمرحله‌ای',
                en: 'Multi-Stage Pulp Washing Line',
                ps: 'د پالپ څو پړاوه مینځلو لاین'
            },
            description: {
                fa: 'پرس واشر، فیلتر و سیستم بازیافت مایع سفید برای کاهش مصرف آب و حفظ کیفیت الیاف.',
                en: 'Press washers, filters and white liquor recovery system to cut water use and preserve fibre quality.',
                ps: 'پرس واشرونه، فلټرونه او د سپین مایع د بیا راټولولو سیستم د اوبو مصرف د کمولو او د فایبر کیفیت ساتلو لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/pulp-production/pulp-washing.pdf'
        },
        {
            category: 'pulp-production',
            name: {
                fa: 'برج سفیدکننده پالپ',
                en: 'Pulp Bleaching Tower',
                ps: 'د پالپ سپینولو برج'
            },
            description: {
                fa: 'واحد سفیدکننده کلر دی‌اکسید یا پراکساید با کنترل آنلاین قلیائیت و میزان سفیدی خروجی.',
                en: 'Chlorine dioxide or peroxide bleaching stage with online alkalinity and brightness control.',
                ps: 'د کلورین ډای اکساید یا پراکسايد سپینولو واحد د آنلاین الکلاینیت او روښانتیا کنټرول سره.'
            },
            pdfUrl: 'pdfs/paper-pulp/pulp-production/pulp-bleaching.pdf'
        },
        {
            category: 'paper-production',
            name: {
                fa: 'ماشین کاغذ فوردرینیه',
                en: 'Fourdrinier Paper Machine',
                ps: 'د فوردرینیر کاغذ ماشین'
            },
            description: {
                fa: 'هدباکس، سکشن و پرس، خشک‌کن سیلندر و کنترل پروفایل ضخامت و رطوبت برای تولید رول پایدار.',
                en: 'Headbox, vacuum section, press and cylinder dryers with thickness and moisture profile control for stable rolls.',
                ps: 'هدباکس، د ویکیوم برخه، پرس او سلنډري وچوونکي د ضخامت او رطوبت پروفایل کنټرول سره د ثابت رول تولید لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-production/paper-machine.pdf'
        },
        {
            category: 'paper-production',
            name: {
                fa: 'خط کوتینگ و سایز پرس',
                en: 'Paper Coating & Size Press Line',
                ps: 'د کاغذ کوټینګ او سایز پرېس لاین'
            },
            description: {
                fa: 'اپلیکاتور دوطرفه، خشک‌کن هوای داغ و سیستم کنترل ویسکوزیته برای بهبود کیفیت سطح.',
                en: 'Dual-side applicators, hot-air dryers and viscosity control system to upgrade surface quality.',
                ps: 'د دواړو خواوو اپلیکاتورونه، د ګرمو هوا وچوونکي او د واسکوزیتې کنټرول سیستم د سطحې کیفیت ښه کولو لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-production/paper-coating.pdf'
        },
        {
            category: 'paper-production',
            name: {
                fa: 'سیستم برش و رول‌رَو',
                en: 'Sheeter & Rewinder System',
                ps: 'د پرې کولو او ریوایندر سیستم'
            },
            description: {
                fa: 'ماشین برش عرضی و وایندر خودکار برای تنظیم طول، عرض و قطر رول‌های خروجی.',
                en: 'Cross-cut sheeter and automatic rewinder to adjust finished roll length, width and diameter.',
                ps: 'د عرضي پرې کولو ماشین او اتومات ریوایندر د وروستي رول اوږدوالی، پلنوالی او قطر عیارولو لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-production/paper-cutting.pdf'
        },
        {
            category: 'paper-converting',
            name: {
                fa: 'دستگاه کیسه کاغذی با ته مربعی',
                en: 'Square Bottom Paper Bag Machine',
                ps: 'د مربع تل لرونکي کاغذي کڅوړې ماشین'
            },
            description: {
                fa: 'فرم‌دهی، چسب‌زنی و شمارش اتوماتیک برای تولید کیسه‌های حمل فروشگاهی و بسته‌بندی صنعتی.',
                en: 'Automatic forming, gluing and counting to produce retail carrier and industrial paper bags.',
                ps: 'اتومات شکل ورکول، ګنډل او شمېرنه د پلورنځیو د وړونکو او صنعتي کاغذي کڅوړو د تولید لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-converting/paper-bag-making.pdf'
        },
        {
            category: 'paper-converting',
            name: {
                fa: 'دستگاه تولید پاکت نامه',
                en: 'Envelope Making Machine',
                ps: 'د لفاف جوړولو ماشین'
            },
            description: {
                fa: 'برش، تا، چسب گرم و خشک‌کن برای تولید پاکت‌های اداری و اختصاصی با ظرفیت بالا.',
                en: 'Cutting, folding, hot glue and drying stages for high-volume office and bespoke envelopes.',
                ps: 'د پرې کولو، تا کولو، ګرم ګلو او وچولو مرحلې د اداري او ځانګړو لفافو د لوړ ظرفیت تولید لپاره.'
            },
            pdfUrl: 'pdfs/paper-pulp/paper-converting/envelope-making.pdf'
        },
        {
            category: 'paper-converting',
            name: {
                fa: 'خط تبدیل دستمال کاغذی',
                en: 'Tissue Converting Line',
                ps: 'د دستمال کاغذ بدلون لاین'
            },
            description: {
                fa: 'امباس و تا زن، رولر برش و بسته‌بندی شرینک برای تولید رول دستمال و دستمال جیبی.',
                en: 'Embossing and folding, log saw cutting and shrink packaging to produce tissue rolls and pocket packs.',
                ps: 'امباس او تا کول، د لاګ پرې کول او شرینک بسته بندي د دستمال رولونو او جېبي بسته بندیو د تولید لپاره.'
            },
            pdfUrl: 'pdfs/machinery-parts/general-parts/belts.pdf'
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
    'industrial-raw-materials': [
        {
            name: { fa: 'کویل‌های فولادی', en: 'Steel Coils', ps: 'د فولادو کويلونه' },
            description: {
                fa: 'کویل گرم و سرد با ضخامت ۰.۸ تا 8 میلی‌متر برای ساخت قطعات و پروفیل.',
                en: 'Hot and cold rolled coils ranging 0.8–8 mm for fabrication and profiling.',
                ps: 'ګرم او سوړ کویلونه د ۰.۸ تر ۸ ملي مترو پورې د پرزو جوړولو لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/metals/steel-coils.pdf'
        },
        {
            name: { fa: 'ورق‌های آلومینیومی', en: 'Aluminium Sheets', ps: 'د المونیم ورقونه' },
            description: {
                fa: 'ورق آلیاژی سری 3003 و 5052 با پرداخت آینه‌ای و مات برای صنایع غذایی و ساختمانی.',
                en: 'Alloy 3003/5052 sheets in mirror and matte finishes for food and construction uses.',
                ps: 'د 3003/5052 الیاژ پاڼې په مټ او انعکاسي پای سره د خوړو او ودانۍ لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/metals/aluminum-sheets.pdf'
        },
        {
            name: { fa: 'سیم مسی', en: 'Copper Wire', ps: 'د مسو تار' },
            description: {
                fa: 'کاتد الکترولیتیک با خلوص 99.97٪ مناسب برای کابل‌سازی و تجهیزات برقی.',
                en: 'Electrolytic cathode copper at 99.97% purity for cabling and electrical hardware.',
                ps: '۹۹.۹۷٪ خالص الکترولیتیک مس د کیبل او برقي تجهیزاتو لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/metals/copper-wire.pdf'
        },
        {
            name: { fa: 'سنگ آهن', en: 'Iron Ore (62% Fe)', ps: 'د اوسپنې کان (۶۲٪)' },
            description: {
                fa: 'کلوخه و دانه‌بندی شده ۰ تا ۱۰ میلی‌متر با عیار ۶۲ درصد برای واحدهای احیای مستقیم.',
                en: 'Lump and fines 0–10 mm at 62% Fe grade for direct reduction plants.',
                ps: '۰ تر ۱۰ ملي مترو دانې او ټوټې د ۶۲٪ اوسپنې درجې سره د مستقیم احیا فابریکو لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/metals/iron-ore.pdf'
        },
        {
            name: { fa: 'گرانول پت (PET)', en: 'PET Pellets', ps: 'پت ګرینول' },
            description: {
                fa: 'گرانول بطری درجه A برای تولید پریفرم، الیاف و ورق‌های شفاف.',
                en: 'Bottle-grade PET pellets for preforms, fibres and clear sheets.',
                ps: 'د بوتل درجې PET ګرینول د پریفرم، فایبر او شفاف پاڼو لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/plastics/pet-pellets.pdf'
        },
        {
            name: { fa: 'گرانول اچ‌دی‌پی‌ای (HDPE)', en: 'HDPE Granules', ps: 'اچ ډي پي اې ګرينول' },
            description: {
                fa: 'گرید بادی و تزریقی برای تولید مخازن، بطری و قطعات صنعتی مقاوم.',
                en: 'Blow and injection grades for tanks, bottles and robust industrial parts.',
                ps: 'د بلو او انجکشن ګریډونه د ټانکونو، بوتلونو او قوي صنعتي پرزو لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/plastics/hdpe-granules.pdf'
        },
        {
            name: { fa: 'لوله‌های پی‌وی‌سی', en: 'PVC Pipes', ps: 'د پی وي سي لولې' },
            description: {
                fa: 'لوله U-PVC و C-PVC در سایز 20 تا 250 میلی‌متر با اتصالات کامل.',
                en: 'U-PVC and C-PVC pipes from 20 to 250 mm with matching fittings.',
                ps: 'د U-PVC او C-PVC پایپونه د ۲۰ تر ۲۵۰ ملي مترو پورې له بشپړو فټینګونو سره.'
            },
            pdfUrl: 'pdfs/raw-materials/plastics/pvc-pipes.pdf'
        },
        {
            name: { fa: 'گرانول پی‌پی (PP)', en: 'PP Granules', ps: 'پی پي ګرينول' },
            description: {
                fa: 'گرید تزریق، الیاف و فیلم با شاخص مذاب متفاوت برای بسته‌بندی و قطعات.',
                en: 'Injection, fibre and film grades with tailored melt flow for packaging and components.',
                ps: 'د انجکشن، فایبر او فلم ګریډونه د بسته بندۍ او پرزو لپاره د ځانګړي مذاب جریان سره.'
            },
            pdfUrl: 'pdfs/raw-materials/plastics/pp-granules.pdf'
        },
        {
            name: { fa: 'گرانول ای‌بی‌اس (ABS)', en: 'ABS Granules', ps: 'اې بي ايس ګرينول' },
            description: {
                fa: 'گرید مقاوم به ضربه و حرارت برای تزریق قطعات لوازم خانگی و الکترونیک.',
                en: 'Impact and heat resistant grades for appliance and electronics moulding.',
                ps: 'د ضربې او تودوخې پر وړاندې مقاومت لرونکي ګریډونه د کورنیو وسایلو او برقي پرزو لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/plastics/abs-granules.pdf'
        },
        {
            name: { fa: 'رزین ای‌وی‌ای (EVA)', en: 'EVA Resin', ps: 'اې وي اې رزين' },
            description: {
                fa: 'گرید 18% و 28% برای کفش، چسب حرارتی و فیلم‌های لمینتی.',
                en: '18% and 28% grades for footwear foam, hot-melt adhesives and lamination films.',
                ps: '۱۸٪ او ۲۸٪ ګریډونه د بوټونو فوم، ګرم چسپ او لامینیشن فلمونو لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/plastics/eva-resin.pdf'
        },
        {
            name: { fa: 'اسید سولفوریک', en: 'Sulfuric Acid 98%', ps: 'سلفوریک اسيد ۹۸٪' },
            description: {
                fa: 'اسید سولفوریک غلیظ برای صنایع باتری‌سازی، استخراج فلزات و کود شیمیایی.',
                en: 'Concentrated sulfuric acid for battery, metal extraction and fertiliser industries.',
                ps: 'متمرکز سلفوریک اسید د بیټرۍ، فلز استخراج او سرې صنعت لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/chemicals/sulfuric-acid.pdf'
        },
        {
            name: { fa: 'سود سوزآور', en: 'Sodium Hydroxide (Caustic Soda)', ps: 'سود سوزآور' },
            description: {
                fa: 'پرک و مایع 50٪ برای صابون‌سازی، تصفیه آب و صنایع کاغذ.',
                en: 'Flakes and 50% liquid for soap making, water treatment and pulp industries.',
                ps: 'فلیکي او ۵۰٪ مایع د صابون جوړولو، د اوبو تصفیه او پالپ صنعت لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/chemicals/sodium-hydroxide.pdf'
        },
        {
            name: { fa: 'آمونیاک', en: 'Anhydrous Ammonia', ps: 'امونيا' },
            description: {
                fa: 'آمونیاک بی‌آب با فشار بالا برای کود شیمیایی و سیستم‌های تبرید صنعتی.',
                en: 'Anhydrous ammonia supplied under pressure for fertiliser and industrial refrigeration.',
                ps: 'بې اوبو امونیا د سرې او صنعتي یخچال سیستمونو لپاره تر فشار لاندې برابریږي.'
            },
            pdfUrl: 'pdfs/raw-materials/chemicals/ammonia.pdf'
        },
        {
            name: { fa: 'متانول', en: 'Methanol 99.9%', ps: 'میتانول ۹۹.۹٪' },
            description: {
                fa: 'متانول خالص برای تولید رزین، حلال‌ها و سوخت سبز با بسته‌بندی تانکری.',
                en: 'High-purity methanol for resins, solvents and green fuel supplied in tankers.',
                ps: 'لوړ خالص میتانول د رالونو، محلولو او شین سونګ لپاره په ټانکرونو کې.'
            },
            pdfUrl: 'pdfs/raw-materials/chemicals/methanol.pdf'
        },
        {
            name: { fa: 'سنگ آهک', en: 'Limestone', ps: 'د اهک ډبره' },
            description: {
                fa: 'سنگ آهک خرد شده CaCO₃ 95٪ برای تولید سیمان و آهک هیدراته.',
                en: 'Crushed limestone at 95% CaCO₃ for cement and hydrated lime plants.',
                ps: 'ماتو شوی اهک ډبره د ۹۵٪ CaCO₃ سره د سمنټو او هیدرېټ شوی اهک فابریکو لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/industrial-minerals/limestone.pdf'
        },
        {
            name: { fa: 'گچ ساختمانی', en: 'Gypsum', ps: 'ګچ' },
            description: {
                fa: 'سنگ گچ با خلوص 90٪ برای تولید پنل، سیمان و ملات‌های ویژه.',
                en: 'Gypsum stone at 90% purity for panels, cement and speciality plasters.',
                ps: '۹۰٪ خالص ګچ د تختو، سمنټو او ځانګړو ملاتونو لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/industrial-minerals/gypsum.pdf'
        },
        {
            name: { fa: 'شن سیلیسی', en: 'Silica Sand', ps: 'سيليکا خږه' },
            description: {
                fa: 'شن سیلیسی شسته شده با SiO₂ بالای 97٪ برای شیشه و ریخته‌گری.',
                en: 'Washed silica sand with >97% SiO₂ for glassmaking and foundry.',
                ps: 'مینځل شوې سیلیکا شګه له ۹۷٪ څخه لوړه SiO₂ سره د ښیښې او کاسټینګ لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/industrial-minerals/silica-sand.pdf'
        },
        {
            name: { fa: 'خاک کائولن', en: 'Kaolin Clay', ps: 'کاولن خاوره' },
            description: {
                fa: 'کائولن سفید با روشنایی 86٪ برای سرامیک، کاغذ و رنگ.',
                en: 'White kaolin clay with 86% brightness for ceramics, paper and coatings.',
                ps: 'سپین کایولن خاوره د ۸۶٪ روښانتیا سره د سرامیک، کاغذ او رنګ لپاره.'
            },
            pdfUrl: 'pdfs/raw-materials/industrial-minerals/kaolin-clay.pdf'
        }
    ],
    'second-hand': secondHandInventoryData.map(item => ({
        name: item.name,
        description: item.description,
        pdfUrl: item.pdfUrl
    }))
};

window.industrialRawMaterialsInventory = window.industrialRawMaterialsInventory || equipmentData['industrial-raw-materials'];

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
    'categories': { fa: 'دسته‌بندی‌ها', en: 'Categories', ps: 'کټګورۍ' },
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
        ps: 'خپل غوښتلي تجهیزات یا توکي د صنعتي کتګوریو څخه ولټوئ'
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
    'category-intro-prefix': {
        fa: 'سایت صنعتی صنعتچی دسترسی مستقیم به ',
        en: 'Sanaatchi Industrial Vision gives you direct access to ',
        ps: 'د صنعتچي صنعتي وېبپاڼه تاسو ته مستقیم لاسرسی برابروي '
    },
    'category-intro-production': {
        fa: 'خطوط تولید تخصصی',
        en: 'specialised production lines',
        ps: 'د تخصصي تولیدي لینونه'
    },
    'category-intro-separator1': {
        fa: '، ',
        en: ', ',
        ps: '، '
    },
    'category-intro-second-hand': {
        fa: 'ماشین‌آلات دست دوم',
        en: 'second-hand machinery',
        ps: 'د دوهم لاس ماشینونه'
    },
    'category-intro-and': {
        fa: ' و ',
        en: ' and ',
        ps: ' او '
    },
    'category-intro-raw-materials': {
        fa: 'مواد اولیه صنعتی',
        en: 'industrial raw materials',
        ps: 'صنعتي خام مواد'
    },
    'category-intro-suffix': {
        fa: ' در کنار ده‌ها گروه تخصصی دیگر فراهم می‌کند.',
        en: ' alongside dozens of other specialist groups.',
        ps: ' د نورو لسګونو ځانګړو ډلو تر څنګ برابروي.'
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
    'cat-tires': { fa: 'تایرهای صنعتی', en: 'Industrial Tyres', ps: 'صنعتي ټایرونه' },
    'cat-transportation': { fa: 'ماشین آلات حمل‌ونقل', en: 'Transportation Machinery', ps: 'د ترانسپورت ماشینونه' },
    'cat-plastic-processing': { fa: 'دستگاه های فرآوری پلاستیک', en: 'Plastic Processing Machines', ps: 'د پلاستیک پروسس ماشینونه' },
    'cat-plastic-industry': { fa: 'صنعت پلاستیک', en: 'Plastic Industry', ps: 'د پلاستیک صنعت' },
    'cat-paint-coating': { fa: 'ماشین آلات رنگ و کوتینگ', en: 'Paint & Coating Machinery', ps: 'د رنګ او پوښښت ماشینونه' },
    'cat-foam-sponge': { fa: 'ماشین آلات لوم و اسفنج', en: 'Foam & Sponge Machinery', ps: 'د فوم او اسفنج ماشینونه' },
    'cat-tobacco': { fa: 'ماشین آلات تناکو و سیگار', en: 'Tobacco & Cigarette Machinery', ps: 'د توتون او سیګر ماشینونه' },
    'cat-cooling-heating': { fa: 'دستگاه های سرمایش و گرمایش', en: 'Cooling & Heating Equipment', ps: 'د سړښت او تودوخه تجهیزات' },
    'cat-pumps-compressors': { fa: 'پمپ ها و کمپرسور ها صنعتی', en: 'Industrial Pumps & Compressors', ps: 'د صنعت پمپونه او کمپرسورونه' },
    'cat-paper-pulp': { fa: 'خطوط پالپ و کاغذ', en: 'Pulp & Paper Lines', ps: 'د پالپ او کاغذ کرښې' },
    'cat-industrial-laser': { fa: 'لیزر صنعتی', en: 'Industrial Laser', ps: 'صنعت لیزر' },
    'cat-tanks': { fa: 'مخازن', en: 'Tanks', ps: 'تنکونه' },
    'cat-packaging': { fa: 'بسته بندی', en: 'Packaging', ps: 'بسته بندي' },
    'cat-chemical-pharma': { fa: 'ماشین آلات شیمیایی و دارویی', en: 'Chemical & Pharmaceutical Machinery', ps: 'د کیمیاوي او درملو ماشینونه' },
    'cat-machinery-parts': { fa: 'پرزه‌جات ماشین‌آلات', en: 'Machinery Spare Parts', ps: 'د ماشینونو پرزې' },
    'cat-mixing-equipments': { fa: 'تجهیزات میکسینگ و تانک‌سازی', en: 'Mixing Equipment & Process Tanks', ps: 'د مکسینګ تجهیزات او پروسې ټانکونه' },
    'cat-metallurgy-coating': { fa: 'متالورژی و کوتینگ', en: 'Metallurgy & Coating', ps: 'د متالورژۍ او پوښښ' },
    'cat-electronics-energy-systems': { fa: 'الکترونیک و سیستم‌های انرژی', en: 'Electronics & Energy Systems', ps: 'برېښنایي او د انرژۍ سیستمونه' },
    'cat-electronic-machinery': { fa: 'ماشین آلات الکترونیکی', en: 'Electronic Machinery', ps: 'د الکترونیک ماشینونه' },
    'cat-telecom-parts': { fa: 'قطعات و لوازم اینترنتی و مخابراتی', en: 'Internet & Telecommunication Parts', ps: 'د انترنت او مخابراتي برخې' },
    'cat-second-hand': { fa: 'ماشین آلات دست دوم', en: 'Second Hand Machinery', ps: 'د دوهم لاس ماشینونه' },
    'cat-industrial-raw-materials': { fa: 'مواد اولیه صنعتی', en: 'Industrial Raw Materials', ps: 'صنعتي خام مواد' },

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
    'footer-production-lines': { fa: 'خطوط تولید', en: 'Production Lines', ps: 'د تولید لینونه' },
    'footer-second-hand': { fa: 'ماشین آلات دست دوم', en: 'Second Hand Machinery', ps: 'د دوهم لاس ماشینونه' },
    'footer-raw-materials': { fa: 'مواد اولیه صنعتی', en: 'Industrial Raw Materials', ps: 'صنعتي خام مواد' },
    'footer-cargo': { fa: 'کارگو و حمل‌ونقل', en: 'Cargo & Logistics', ps: 'کارګو او ترانسپورټ' },
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
    'transportation-afghanistan-phone': {
        fa: '+93 799 999 0000',
        en: '+93 799 999 0000',
        ps: '+93 799 999 0000'
    },
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
    'transportation-china-phone': {
        fa: '+86 138 0000 0000',
        en: '+86 138 0000 0000',
        ps: '+86 138 0000 0000'
    },
    'china-hours': { 
        fa: 'شنبه تا جمعه: ۹:۰۰ تا ۱۸:۰۰', 
        en: 'Saturday to Friday: 9:00 to 18:00',
        ps: 'شنبه څخه جمعه پورې: ۹:۰۰ څخه ۱۸:۰۰ پورې'
    },
    'copyright': {
        fa: '&copy; 2024 صنعتچی Industrial Vision. تمامی حقوق محفوظ است.',
        en: '&copy; 2024 Sanaatchi Industrial Vision. All rights reserved.',
        ps: '&copy; 2024 صنعتچي Industrial Vision. ټول حقونه خوندي دي.'
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
    window.currentLanguage = lang;
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
        const translationEntry = translations[key];
        if (translationEntry && translationEntry[lang]) {
            const translation = translationEntry[lang];
            if (element.classList.contains('phone-link')) {
                element.textContent = translation;
                element.setAttribute('href', `tel:${formatPhoneNumberForHref(translation)}`);

                const phoneContainer = element.closest('.phone-container');
                if (phoneContainer) {
                    const whatsappLink = phoneContainer.querySelector('.whatsapp-link');
                    if (whatsappLink) {
                        whatsappLink.setAttribute('href', getWhatsAppUrl(translation));
                    }
                }
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[key] && translations[key][lang]) {
            element.setAttribute('placeholder', translations[key][lang]);
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
    if (typeof updateIndustrialRawMaterialsPage === 'function') {
        updateIndustrialRawMaterialsPage();
    }
    if (typeof updateMachineryPartsPage === 'function') {
        updateMachineryPartsPage();
    }
    if (typeof updateMixingEquipmentsPage === 'function') {
        updateMixingEquipmentsPage();
    }
    if (typeof updateMetallurgyCoatingPage === 'function') {
        updateMetallurgyCoatingPage();
    }
    if (typeof updateElectronicsEnergySystemsPage === 'function') {
        updateElectronicsEnergySystemsPage();
    }
    if (typeof updatePaperPulpPage === 'function') {
        updatePaperPulpPage();
    }
    if (typeof updateConstructionMaterialsPage === 'function') {
        updateConstructionMaterialsPage();
    }
    if (typeof updatePackagingPage === 'function') {
        updatePackagingPage();
    }
    if (typeof updatePlasticIndustryPage === 'function') {
        updatePlasticIndustryPage();
    }
    if (typeof updateCoolingHeatingPage === 'function') {
        updateCoolingHeatingPage();
    }
    if (typeof updatePumpsCompressorsPage === 'function') {
        updatePumpsCompressorsPage();
    }
    if (typeof updateTransportationPage === 'function') {
        updateTransportationPage();
    }
    if (typeof updateTiresPage === 'function') {
        updateTiresPage();
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

function navigateToIndustrialRawMaterials() {
    window.location.href = 'industrial-raw-materials.html';
}

function navigateToMachineryParts() {
    window.location.href = 'machinery-parts.html';
}

function navigateToMixingEquipments() {
    window.location.href = 'mixing-equipments.html';
}

function navigateToMetallurgyCoating() {
    window.location.href = 'metallurgy-coating.html';
}

function navigateToElectronicsEnergySystems() {
    window.location.href = 'electronics-energy-systems.html';
}

function navigateToConstructionMaterials() {
    window.location.href = 'construction-materials.html';
}

function navigateToPlasticIndustry() {
    window.location.href = 'plastic-industry.html';
}

function navigateToPackaging() {
    window.location.href = 'packaging.html';
}

function navigateToCoolingHeating() {
    window.location.href = 'cooling-heating.html';
}

function navigateToPumpsCompressors() {
    window.location.href = 'pumps-compressors.html';
}

function navigateToPaperPulp() {
    window.location.href = 'paper-pulp.html';
}

function navigateToTires() {
    window.location.href = 'tires.html';
}

function navigateToTransportation() {
    window.location.href = 'transportation-machineries.html';
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
        <form id="contactForm" action="/consultation.php" method="POST">
            <div style="margin-bottom: 15px;">
                <label for="consultation-full-name">${nameLabel}:</label>
                <input id="consultation-full-name" type="text" name="full_name" style="width: 100%; padding: 8px; margin-top: 5px;" required>
            </div>
            <div style="margin-bottom: 15px;">
                <label for="consultation-phone">${phoneLabel}:</label>
                <input id="consultation-phone" type="tel" name="phone" style="width: 100%; padding: 8px; margin-top: 5px;" required>
            </div>
            <div style="margin-bottom: 15px;">
                <label for="consultation-email">${emailLabel}:</label>
                <input id="consultation-email" type="email" name="email" style="width: 100%; padding: 8px; margin-top: 5px;" aria-describedby="consultation-email-help">
                <small id="consultation-email-help" style="display:block; margin-top:4px;">${currentLanguage === 'fa' ? 'اختیاری' : currentLanguage === 'ps' ? 'اختیاري' : 'Optional'}</small>
            </div>
            <div style="margin-bottom: 15px;">
                <label for="consultation-description">${descLabel}:</label>
                <textarea id="consultation-description" name="request_description" style="width: 100%; padding: 8px; margin-top: 5px; height: 100px;" required></textarea>
            </div>
            <button type="submit" class="btn-primary" style="width: 100%;">${submitText}</button>
        </form>
    `;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');

    const contactForm = modalContent.querySelector('#contactForm');
    attachConsultationFormHandler(contactForm);

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
            { id: 'metallurgy-coating', key: 'cat-metallurgy-coating' },
            { id: 'construction-materials', key: 'cat-construction' },
            { id: 'plastic-industry', key: 'cat-plastic-industry' }
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

const SITE_ORIGIN_FALLBACK = 'https://sanaatchi.com';

function getSiteOrigin() {
    if (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin !== 'null') {
        return window.location.origin;
    }
    return SITE_ORIGIN_FALLBACK;
}

function toAbsoluteUrl(path) {
    if (!path) {
        return getSiteOrigin();
    }
    if (/^https?:/i.test(path)) {
        return path;
    }
    if (path.startsWith('//')) {
        return `${(typeof window !== 'undefined' && window.location ? window.location.protocol : 'https:')}${path}`;
    }
    const origin = getSiteOrigin();
    if (path.startsWith('/')) {
        return `${origin}${path}`;
    }
    return `${origin}/${path}`;
}

function appendJsonLd(data) {
    if (!data || typeof document === 'undefined' || !document.head) {
        return;
    }
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(script);
}

function publishItemListStructuredData(options) {
    if (!options || typeof appendJsonLd !== 'function') {
        return;
    }

    const items = Array.isArray(options.items) ? options.items : [];
    if (items.length === 0) {
        return;
    }

    const itemListElements = items.map((item, index) => {
        const entity = {
            '@type': item.schemaType || 'CreativeWork',
            'name': item.name,
            'url': toAbsoluteUrl(item.url || ''),
        };
        if (item.description) {
            entity.description = item.description;
        }

        if (item.identifier) {
            entity.identifier = item.identifier;
        }

        return {
            '@type': 'ListItem',
            position: index + 1,
            item: entity
        };
    });

    const collectionData = {
        '@context': 'https://schema.org',
        '@type': options.pageType || 'CollectionPage',
        name: options.collectionName || document.title || 'Sanaatchi Catalog',
        url: toAbsoluteUrl(options.pageUrl || window.location.pathname),
        inLanguage: options.languages || ['fa', 'en', 'ps'],
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: itemListElements
        }
    };

    if (options.collectionDescription) {
        collectionData.description = options.collectionDescription;
    }

    appendJsonLd(collectionData);

    if (Array.isArray(options.breadcrumbs) && options.breadcrumbs.length > 0) {
        const breadcrumbItems = options.breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: toAbsoluteUrl(crumb.url)
        }));

        appendJsonLd({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbItems
        });
    }
}

function publishEquipmentStructuredData(categoryKey, options = {}) {
    if (typeof publishItemListStructuredData !== 'function') {
        return;
    }

    const records = (equipmentData && equipmentData[categoryKey]) || [];
    if (!Array.isArray(records) || records.length === 0) {
        return;
    }

    const items = records.map(record => ({
        name: record.name?.en || record.name?.fa || record.name || '',
        description: record.description?.en || record.description?.fa || record.description || '',
        url: record.pdfUrl,
        schemaType: options.schemaType || 'Product',
        identifier: record.category ? `${categoryKey}-${record.category}` : undefined
    }));

    publishItemListStructuredData({
        collectionName: options.collectionName,
        collectionDescription: options.collectionDescription,
        pageUrl: options.pageUrl,
        items,
        breadcrumbs: options.breadcrumbs,
        languages: options.languages,
        pageType: options.pageType
    });
}

function attachConsultationFormHandler(form) {
    if (!form || form.dataset.bound === 'true') {
        return;
    }

    form.dataset.bound = 'true';

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const submitButton = form.querySelector('[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
        }

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                credentials: 'same-origin'
            });

            const responseText = (await response.text()).trim();

            if (response.ok) {
                alert(responseText || 'Thank you, your request has been sent.');
                form.reset();
                closeContactModal();
            } else {
                const fallbackMessage = 'Sorry, there was a problem sending your request.';
                const githubNotice = response.status === 405
                    ? ' (If you are previewing the site on GitHub Pages, PHP submissions are disabled and will return this error.)'
                    : '';
                alert((responseText || fallbackMessage) + githubNotice);
            }
        } catch (error) {
            alert('Unable to send your request due to a network error. Please try again.');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
            }
        }
    });
}

function attachNewsletterFormHandler(form) {
    if (!form || form.dataset.bound === 'true') {
        return;
    }

    form.dataset.bound = 'true';

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const submitButton = form.querySelector('[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
        }

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                credentials: 'same-origin'
            });

            const responseText = (await response.text()).trim();

            if (response.ok) {
                alert(responseText || 'Thank you for subscribing!');
                form.reset();
            } else {
                const fallbackMessage = 'Subscription failed. Please try again.';
                const githubNotice = response.status === 405
                    ? ' (If you are previewing the site on GitHub Pages, PHP submissions are disabled and will return this error.)'
                    : '';
                alert((responseText || fallbackMessage) + githubNotice);
            }
        } catch (error) {
            alert('Subscription failed because of a network error. Please try again later.');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
            }
        }
    });
}

function initializeNewsletterForms() {
    const newsletterForms = document.querySelectorAll('form.newsletter-form');
    newsletterForms.forEach(attachNewsletterFormHandler);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Ensure category detail pages stay off the primary navigation
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        ['production-lines', 'second-hand', 'industrial-raw-materials'].forEach((pattern) => {
            let navLink = mainNav.querySelector(`a[href*="${pattern}"]`);
            while (navLink) {
                navLink.remove();
                navLink = mainNav.querySelector(`a[href*="${pattern}"]`);
            }
        });
    }

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'fa' || savedLanguage === 'en' || savedLanguage === 'ps')) {
        switchLanguage(savedLanguage);
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

    initializeNewsletterForms();
});
