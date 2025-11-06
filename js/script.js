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
        'د خوراکي غوړ د تولید لین'
    ],
    'printing-machines': ['دستگاه های چاپ', 'Printing Machines', 'چاپ', 'printing', 'چاپ ماشینونه', 'Printing Machines'],
    'sports-equipment': ['تجهیزات ورزشی', 'Sports Equipment', 'ورزشی', 'sports', 'ورزشي تجهیزات', 'Sports Equipment'],
    'metallurgy': ['متالورژی و فلزکاری', 'Metallurgy & Metalworking', 'متالورژی', 'metallurgy', 'فلزکاری', 'metalworking', 'د فلزاتو علم', 'metallurgy', 'فلزکاري', 'metalworking'],
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
    'packaging': ['بسته بندی', 'Packaging', 'بسته', 'package', 'بسته بندي', 'Packaging'],
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
    'paper-pulp': ['ماشین آلات کاغذ و سلولوز', 'Paper & Pulp Machinery', 'کاغذ', 'paper', 'د کاغذ او پالپ ماشینونه', 'Paper & Pulp Machinery'],
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
    if (typeof updateIndustrialRawMaterialsPage === 'function') {
        updateIndustrialRawMaterialsPage();
    }
    if (typeof updateMachineryPartsPage === 'function') {
        updateMachineryPartsPage();
    }
    if (typeof updateConstructionMaterialsPage === 'function') {
        updateConstructionMaterialsPage();
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

function navigateToConstructionMaterials() {
    window.location.href = 'construction-materials.html';
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