(function() {
    const categoryPageRoutes = window.productionLineCategoryRoutes || {
        'food-processing-lines': 'food-processing-lines.html',
        'consumer-goods-lines': 'consumer-goods-lines.html',
        'construction-materials-lines': 'construction-materials-lines.html',
        'textile-garments-lines': 'textile-garments-lines.html',
        'fiberglas-production': 'production-lines.html#fiberglas-production',
        'recycling-lines': 'recycling-lines.html',
        'disposable-products-lines': 'disposable-products-lines.html',
        'light-industry-lines': 'light-industry-lines.html'
    };

    window.productionLineCategoryRoutes = categoryPageRoutes;

    const categoryPageTexts = {
        highlightsTitle: {
            fa: 'مزیت‌های کلیدی این دسته',
            en: 'Key Advantages of This Category',
            ps: 'د دې کټګورۍ مهمې ګټې'
        },
        highlightsSubtitle: {
            fa: 'تجربه صنعتچی در طراحی و اجرای این خطوط را مرور کنید.',
            en: 'Explore how Sanaatchi delivers these production capabilities.',
            ps: 'وګورئ چې صنعتچي څنګه دا تولیدي وړتیاوې برابروي.'
        },
        linesTitle: {
            fa: 'خطوط تخصصی آماده اجرا',
            en: 'Turnkey Lines Ready for Deployment',
            ps: 'چمتو تولیدي لینونه'
        },
        linesSubtitle: {
            fa: 'فایل‌های فنی و توضیحات هر خط تولید در دسترس است.',
            en: 'Access technical dossiers and descriptions for each production line.',
            ps: 'د هر تولیدي لاین تخنیکي معلومات او وضاحت ته لاسرسی.'
        },
        relatedTitle: {
            fa: 'دسته‌های مرتبط',
            en: 'Related Categories',
            ps: 'اړوند کټګورۍ'
        },
        relatedSubtitle: {
            fa: 'سایر حوزه‌های صنعتی را که توسط صنعتچی پوشش داده می‌شود بررسی کنید.',
            en: 'Discover other industrial domains supported by Sanaatchi.',
            ps: 'نور صنعتي سکتورونه وپلټئ چې صنعتچي یې پوښي.'
        },
        backToAll: {
            fa: 'بازگشت به تمام خطوط تولید',
            en: 'Back to All Production Lines',
            ps: 'بیا ټولو تولیدي لاینونو ته ستنېدل'
        },
        noLines: {
            fa: 'در حال حاضر خط تولیدی برای نمایش موجود نیست.',
            en: 'No production lines are available at the moment.',
            ps: 'اوس مهال د ښودلو لپاره کوم تولیدي لاین شتون نه لري.'
        },
        heroQuoteDefault: {
            fa: 'از ایده تا بهره‌برداری، تیم ما همراه شماست.',
            en: 'From concept to commissioning, our team is by your side.',
            ps: 'له مفکورې څخه تر فعالېدو پورې، زموږ ټیم له تاسو سره دی.'
        }
    };

    const categoryDetails = {
        'food-processing-lines': {
            heroQuote: {
                fa: 'از توسعه فرمولاسیون تا بسته‌بندی استریل، تیم صنعتچی کیفیت و ایمنی مواد غذایی شما را تضمین می‌کند.',
                en: 'From formulation development to sterile packaging, Sanaatchi safeguards the quality and safety of your food brands.',
                ps: 'له فارمول جوړولو څخه تر سترېل بسته بندۍ پورې، صنعتچي د ستاسو د خوراکي محصولاتو کیفیت او خوندیتوب تضمینوي.'
            },
            highlightsSubtitle: {
                fa: 'بهینه‌سازی فرآیندهای صنایع غذایی با رعایت استانداردهای بهداشتی جهانی.',
                en: 'Optimising food manufacturing processes while meeting international hygiene benchmarks.',
                ps: 'د نړیوالو حفظ الصحې معیارونو په مراعاتولو سره د خوراکي تولید پروسې اصلاح.'
            },
            linesDescription: {
                fa: 'هر خط تولید با جزئیات فنی، ظرفیت و مسیر تأمین تجهیزات برای راه‌اندازی در افغانستان ارائه شده است.',
                en: 'Each production line includes technical specs, capacity insights, and procurement routes tailored for Afghanistan.',
                ps: 'هر تولیدي لاین تخنیکي ځانګړتیاوې، ظرفیت او د افغانستان لپاره د تجهیزاتو د تدارک لارښوونې لري.'
            },
            highlights: [
                {
                    icon: '🧪',
                    title: {
                        fa: 'فرمولاسیون و استانداردهای غذایی',
                        en: 'Formulation & Food Standards',
                        ps: 'فارمول جوړونه او د خوراک معیارونه'
                    },
                    description: {
                        fa: 'همراهی در تدوین فرمول، رعایت HACCP و مستندسازی GMP برای صدور مجوز.',
                        en: 'Support for recipe development, HACCP compliance, and GMP documentation for approvals.',
                        ps: 'د نسخو په جوړولو، د HACCP مراعات او د GMP مستنداتو په برابرولو کې ملاتړ د اجازې لپاره.'
                    }
                },
                {
                    icon: '🥶',
                    title: {
                        fa: 'کنترل زنجیره سرد و فرآیند',
                        en: 'Cold Chain & Process Control',
                        ps: 'سړه زنځیر او د بهیر کنټرول'
                    },
                    description: {
                        fa: 'طراحی خطوط با پایش دما، سیستم‌های CIP و اتوماسیون برای تولید پایدار.',
                        en: 'Designing lines with temperature monitoring, CIP systems, and automation for stable production.',
                        ps: 'لاینونه د تودوخې څارنې، د CIP سیسټمونو او اتومات له لارې د دوامدار تولید لپاره طرحه کوو.'
                    }
                },
                {
                    icon: '📦',
                    title: {
                        fa: 'بسته‌بندی و ردیابی محصول',
                        en: 'Packaging & Product Traceability',
                        ps: 'بسته بندي او د محصول تعقیب'
                    },
                    description: {
                        fa: 'انتخاب ماشین‌آلات بسته‌بندی استریل، لیبل‌زنی و سیستم رهگیری برای کنترل کیفی.',
                        en: 'Selecting sterile packaging, labelling, and traceability systems to secure quality assurance.',
                        ps: 'د سترېل بسته بندۍ، لیبل کولو او د تعقیب سیسټمونو ټاکنه د کیفیت د تضمین لپاره.'
                    }
                }
            ]
        },
        'consumer-goods-lines': {
            heroQuote: {
                fa: 'محصولات بهداشتی و آرایشی شما با فرمولاسیون دقیق و خطوط استاندارد جهانی تولید می‌شوند.',
                en: 'Your hygiene and cosmetic products are produced with precise formulations and globally compliant lines.',
                ps: 'ستاسو حفظ الصحې او ښکلايي محصولات د دقیقو فارمولونو او نړیوالو معیارونو سره تولیدیږي.'
            },
            highlightsSubtitle: {
                fa: 'از شوینده تا محصولات آرایشی، چابک‌سازی تولید و بسته‌بندی را تجربه کنید.',
                en: 'From detergents to cosmetics, streamline formulation, production, and packaging.',
                ps: 'له صابون څخه تر سینګار پورې، د تولید او بسته بندۍ چټکتیا تجربه کړئ.'
            },
            linesDescription: {
                fa: 'با بررسی هر خط می‌توانید تجهیزات اختلاط، پرکن و بسته‌بندی مناسب بازار افغانستان را شناسایی کنید.',
                en: 'Review each line to identify mixing, filling, and packaging equipment aligned with Afghan market needs.',
                ps: 'هر لاین ته کتنه وکړئ تر څو د افغانستان بازار لپاره مناسب مخلوط، ډکولو او بسته بندۍ تجهیزات وپیژنئ.'
            },
            highlights: [
                {
                    icon: '🧼',
                    title: {
                        fa: 'توسعه فرمولاسیون قابل تکرار',
                        en: 'Repeatable Formulation Development',
                        ps: 'د تکرار وړ فارمول جوړونه'
                    },
                    description: {
                        fa: 'پشتیبانی در فرمول شوینده و آرایشی با کنترل کیفیت پیوسته و مستندسازی.',
                        en: 'Support for detergent and cosmetic formulas with continuous quality control and documentation.',
                        ps: 'د صابون او ښکلايي فارمولونو ملاتړ د دوامدار کیفیت کنټرول او مستنداتو سره.'
                    }
                },
                {
                    icon: '🏷️',
                    title: {
                        fa: 'بسته‌بندی منعطف و برندینگ',
                        en: 'Flexible Packaging & Branding',
                        ps: 'انعطاف منونکی بسته بندي او برانډنګ'
                    },
                    description: {
                        fa: 'چیدمان ماشین‌آلات پرکن، درب‌بند و لیبل‌زن متناسب با هویت برند و حجم تولید.',
                        en: 'Configuring filling, capping, and labelling machines aligned with brand identity and volumes.',
                        ps: 'د ډکولو، سرپوښ او لیبل ماشینونه د برانډ هویت او حجم سره سم تنظیم کوو.'
                    }
                },
                {
                    icon: '🧪',
                    title: {
                        fa: 'آزمایشگاه QC و مستندسازی',
                        en: 'QC Laboratory & Documentation',
                        ps: 'د QC لابراتوار او مستندسازي'
                    },
                    description: {
                        fa: 'استقرار آزمایشگاه‌های کنترل کیفیت، SOPها و آموزش تیم برای تضمین ثبات محصول.',
                        en: 'Establishing QC labs, SOPs, and team training to guarantee consistent products.',
                        ps: 'د QC لابراتوار جوړول، SOP ګانې او د ټیم روزنه د ثابت محصول لپاره.'
                    }
                }
            ]
        },
        'construction-materials-lines': {
            heroQuote: {
                fa: 'زیرساخت تولید مصالح ساختمانی را با طراحی مقاوم و بهره‌وری انرژی شکل می‌دهیم.',
                en: 'We engineer construction material facilities with resilient design and energy-efficient operations.',
                ps: 'موږ د ساختماني موادو فابریکې د دوامدار ډیزاین او د انرژۍ موثریت سره انجنیري کوو.'
            },
            highlightsSubtitle: {
                fa: 'راهکارهای صنعتی برای تولید پایدار مصالح سازه‌ای و ساختمانی.',
                en: 'Industrial solutions for sustainable construction material production.',
                ps: 'د ساختماني موادو د دوامدار تولید لپاره صنعتي حل لارې.'
            },
            linesDescription: {
                fa: 'مجموعه خطوط شامل تولید سیمان، آجر، بلوک، سازه فولادی و پنل‌های گچی برای پروژه‌های عمرانی است.',
                en: 'The portfolio covers cement, brick, concrete block, steel structure, and gypsum panel lines for construction projects.',
                ps: 'دا ټولګه د سمنټو، خښتو، کانکریټ بلاک، فولادي جوړښت او جپسم تختو تولیدي لینونه رانغاړي.'
            },
            highlights: [
                {
                    icon: '🧱',
                    title: {
                        fa: 'طراحی متناسب با اقلیم افغانستان',
                        en: 'Design Suited to Afghanistan’s Climate',
                        ps: 'د افغانستان د اقلیم لپاره مناسب ډیزاین'
                    },
                    description: {
                        fa: 'تجهیز خطوط مقاوم در برابر گرد و غبار، دما و شرایط کارگاهی محلی برای بهره‌برداری مطمئن.',
                        en: 'Deploying lines built to withstand dust, temperature swings, and local job-site conditions.',
                        ps: 'لاینونه چې د دوړو، تودوخې او محلي کاري شرایطو پر وړاندې مقاومت ولري برابرول.'
                    }
                },
                {
                    icon: '⚙️',
                    title: {
                        fa: 'اتوماسیون و کنترل کیفیت سازه',
                        en: 'Automation & Structural QC',
                        ps: 'اتومات او د جوړښت کیفیت کنټرول'
                    },
                    description: {
                        fa: 'ادغام سیستم‌های توزین، عمل‌آوری و آزمایش برای رعایت استانداردهای ساختمانی.',
                        en: 'Integrating weighing, curing, and testing systems to meet building standards.',
                        ps: 'د وزن، درملنې او ازموینې سیستمونه یو ځای کوو څو د ساختماني معیارونو اړتیا پوره شي.'
                    }
                },
                {
                    icon: '🚚',
                    title: {
                        fa: 'لجستیک تأمین مواد اولیه سنگین',
                        en: 'Heavy Raw Material Logistics',
                        ps: 'د درنو خامو موادو لوژستیک'
                    },
                    description: {
                        fa: 'برنامه‌ریزی برای تأمین سنگ، سیمان و فولاد با تکیه بر شبکه حمل‌ونقل صنعتچی.',
                        en: 'Planning stone, cement, and steel supply leveraging Sanaatchi’s logistics network.',
                        ps: 'د صنعتچي د لوژستیک شبکې په مرسته د ډبرو، سمنټو او فولادو د تدارک پلان جوړونه.'
                    }
                }
            ]
        },
        'textile-garments-lines': {
            heroQuote: {
                fa: 'از نخ تا پوشاک آماده، خطوط نساجی صنعتچی سرعت، کیفیت و تنوع را یکجا می‌کند.',
                en: 'From yarn to finished apparel, Sanaatchi textile lines unite speed, quality, and versatility.',
                ps: 'له تار څخه تر چمتو جامو پورې، د صنعتچي نساجي لینونه چټکتیا، کیفیت او تنوع یو ځای کوي.'
            },
            highlightsSubtitle: {
                fa: 'زنجیره کامل تولید پوشاک با امکان سفارشی‌سازی برای برندهای محلی.',
                en: 'A complete apparel supply chain with customisation options for local brands.',
                ps: 'د جامو بشپړه عرضه زنځیر د محلي برانډونو د ځانګړتیا لپاره.'
            },
            linesDescription: {
                fa: 'خطوط شامل ریسندگی، بافندگی، تی‌شرت، جین، حوله و فرش ماشینی برای توسعه صنعت نساجی افغانستان است.',
                en: 'Lines include spinning, weaving, T-shirt, denim, towel, and industrial carpet production tailored to Afghanistan.',
                ps: 'لینونه د سپننې، اوبدلو، ټي شرټ، جین، تولیو او صنعتي غالۍ تولید لپاره برابر شوي.'
            },
            highlights: [
                {
                    icon: '🧵',
                    title: {
                        fa: 'یکپارچگی نخ تا دوخت',
                        en: 'End-to-End Yarn-to-Sew Integration',
                        ps: 'له تار څخه تر ګنډلو پورې یوځایوالی'
                    },
                    description: {
                        fa: 'طراحی جریان کاری از ریسندگی و بافندگی تا برش و دوخت اتوماتیک برای افزایش بهره‌وری.',
                        en: 'Designing workflows from spinning and weaving to automated cutting and sewing for higher efficiency.',
                        ps: 'له سپننې او اوبدلو څخه تر اتومات پرې کولو او ګنډلو پورې د کار بهیر طرحه کوو.'
                    }
                },
                {
                    icon: '🎨',
                    title: {
                        fa: 'پشتیبانی چاپ و تکمیل پارچه',
                        en: 'Printing & Finishing Support',
                        ps: 'د چاپ او بشپړونې ملاتړ'
                    },
                    description: {
                        fa: 'ارائه ماشین‌آلات چاپ، رنگرزی و فینیشینگ برای ایجاد ارزش افزوده پارچه و پوشاک.',
                        en: 'Providing printing, dyeing, and finishing machines to add value to fabrics and garments.',
                        ps: 'د چاپ، رنګولو او بشپړونې ماشینونه وړاندې کوو څو جامو او پارچو ته ارزښت ورکړي.'
                    }
                },
                {
                    icon: '👗',
                    title: {
                        fa: 'مدیریت کیفیت و سایزبندی',
                        en: 'Quality & Sizing Management',
                        ps: 'د کیفیت او اندازه مدیریت'
                    },
                    description: {
                        fa: 'پیاده‌سازی سیستم‌های QC، مانکن‌های اندازه‌گیری و بسته‌بندی دقیق برای بازارهای صادراتی.',
                        en: 'Implementing QC systems, sizing mannequins, and precise packaging for export markets.',
                        ps: 'د QC سیسټمونه، د اندازې مانکنونه او دقیق بسته بندي د صادراتو بازار لپاره پلي کوو.'
                    }
                }
            ]
        },
        'recycling-lines': {
            heroQuote: {
                fa: 'با خطوط بازیافت صنعتچی، پسماند به سرمایه پایدار تبدیل می‌شود.',
                en: 'With Sanaatchi recycling lines, waste turns into sustainable value.',
                ps: 'د صنعتچي د بیاکارونې لینونو سره، کثافات په دوامدار ارزښت بدلیږي.'
            },
            highlightsSubtitle: {
                fa: 'بازیافت هدفمند برای ایجاد ارزش افزوده و حفاظت از محیط زیست.',
                en: 'Purpose-built recycling to generate value while protecting the environment.',
                ps: 'د چاپیریال د ساتنې په مهال د ارزښت رامنځته کولو لپاره هدفمند بیاکارونه.'
            },
            linesDescription: {
                fa: 'از بازیافت پلاستیک و کاغذ تا تایر و فلز، خطوط کامل با مستندات فنی ارائه شده است.',
                en: 'From plastics and paper to tyres and metals, complete recycling lines come with technical documentation.',
                ps: 'له پلاستیک او کاغذ څخه تر ټایر او فلزاتو پورې، بشپړ د بیاکارونې لینونه له تخنیکي اسنادو سره وړاندې کیږي.'
            },
            highlights: [
                {
                    icon: '♻️',
                    title: {
                        fa: 'مدیریت چرخه مواد',
                        en: 'Material Loop Management',
                        ps: 'د موادو دوراني مدیریت'
                    },
                    description: {
                        fa: 'طراحی خردایش، شستشو و گرانول‌سازی برای بازیافت اقتصادی و پایدار.',
                        en: 'Designing shredding, washing, and pelletising systems for economical, sustainable recycling.',
                        ps: 'د پرې کولو، مینځلو او ګرینول کولو سیستمونه د اقتصادي او دوامدار بیاکارونې لپاره طرحه کوو.'
                    }
                },
                {
                    icon: '🌱',
                    title: {
                        fa: 'کاهش اثرات زیست‌محیطی',
                        en: 'Environmental Impact Reduction',
                        ps: 'د چاپیریال د اغیز کمول'
                    },
                    description: {
                        fa: 'استفاده از سیستم‌های تصفیه آب و کنترل بو مطابق استانداردهای محیط زیست.',
                        en: 'Applying water treatment and odour control systems that meet environmental standards.',
                        ps: 'د اوبو د تصفیې او د بوی د کنټرول سیسټمونه د چاپیریال معیارونو سره سم کاروو.'
                    }
                },
                {
                    icon: '📊',
                    title: {
                        fa: 'تحلیل بازگشت سرمایه',
                        en: 'Return-on-Investment Analysis',
                        ps: 'د پانګې ستنیدو تحلیل'
                    },
                    description: {
                        fa: 'پشتیبانی در تحلیل بازار، مصرف انرژی و مدل‌های فروش محصولات بازیافتی.',
                        en: 'Support with market analysis, energy consumption, and sales models for recycled outputs.',
                        ps: 'د بازار تحلیل، د انرژۍ مصرف او د بیاکار شویو محصولاتو د پلور ماډلونو کې مرسته.'
                    }
                }
            ]
        },
        'disposable-products-lines': {
            heroQuote: {
                fa: 'خطوط محصولات یکبارمصرف صنعتچی کیفیت، سرعت و ایمنی تولید را تضمین می‌کند.',
                en: 'Sanaatchi disposable product lines deliver assured quality, speed, and hygiene.',
                ps: 'د صنعتچي د یو ځل کارېدونکو محصولاتو لینونه کیفیت، چټکتیا او حفظ الصحې تضمینوي.'
            },
            highlightsSubtitle: {
                fa: 'پشتیبانی کامل از تولید تا انبارداری محصولات یکبارمصرف.',
                en: 'Comprehensive support from production to warehousing for disposable goods.',
                ps: 'د یو ځل کارېدونکو توکو لپاره له تولید څخه تر ګودام پورې بشپړ ملاتړ.'
            },
            linesDescription: {
                fa: 'لیست خطوط شامل تولید لیوان، بشقاب، قاشق، بطری و بسته‌بندی خدماتی است.',
                en: 'The listed lines cover cup, plate, cutlery, bottle, and service packaging production.',
                ps: 'لیست شوي لینونه د پیالو، پشقابونو، قاشقونو، بوتلونو او د خدمتونو بسته بندۍ تولید رانغاړي.'
            },
            highlights: [
                {
                    icon: '🥤',
                    title: {
                        fa: 'طراحی قالب و ترموفرمینگ دقیق',
                        en: 'Precision Moulding & Thermoforming',
                        ps: 'دقیق قالب جوړونه او ترموفرمینګ'
                    },
                    description: {
                        fa: 'طراحی قالب، ترموفرمینگ و تزریق با مواد تأیید شده غذایی و کنترل ضخامت.',
                        en: 'Designing moulds, thermoforming, and injection setups with food-grade certified materials.',
                        ps: 'قالبونه، ترموفرمینګ او انجکشن د خوړو د تصدیق شوو موادو او د ضخامت کنټرول سره طرحه کوو.'
                    }
                },
                {
                    icon: '📦',
                    title: {
                        fa: 'بسته‌بندی فشرده و انبارش',
                        en: 'Compact Packaging & Warehousing',
                        ps: 'فشرده بسته بندي او ګودامداري'
                    },
                    description: {
                        fa: 'برنامه‌ریزی بسته‌بندی و ذخیره‌سازی برای کاهش فضای انبار و حفظ استانداردهای بهداشتی.',
                        en: 'Planning packaging and storage to save warehouse space while keeping hygiene standards.',
                        ps: 'بسته بندي او ذخیره داسې پلان کوو چې د ګودام ځای کم کړي او حفظ الصحې وساتي.'
                    }
                },
                {
                    icon: '🛠️',
                    title: {
                        fa: 'نگهداری و تأمین قطعات',
                        en: 'Maintenance & Spare Parts Support',
                        ps: 'ساتنه او د پرزو ملاتړ'
                    },
                    description: {
                        fa: 'تدارک قطعات یدکی و برنامه نگهداری پیشگیرانه برای کاهش توقف خط و افزایش عمر تجهیزات.',
                        en: 'Supplying spare parts and preventive maintenance plans to minimise downtime and extend equipment life.',
                        ps: 'د پرزو برابرول او د مخنیوي ساتنې پلانونه د توقف د کمولو او د تجهیزاتو د عمر زیاتولو لپاره.'
                    }
                }
            ]
        },
        'light-industry-lines': {
            heroQuote: {
                fa: 'صنایع سبک و چوبی با خطوط صنعتچی به تولید منعطف و رقابتی می‌رسند.',
                en: 'Sanaatchi light-industry lines deliver flexible, competitive manufacturing for wood and soft goods.',
                ps: 'د صنعتچي د سپکو صنعتونو لینونه د لرګي او نورو محصولاتو لپاره انعطاف منونکی او سیال تولید برابروي.'
            },
            highlightsSubtitle: {
                fa: 'چیدمان‌های ماژولار برای توسعه صنایع سبک و چوبی.',
                en: 'Modular layouts to scale light and wood industries.',
                ps: 'د سپکو او لرګیو صنعتونو د پراختیا لپاره ماډولر ترتیبات.'
            },
            linesDescription: {
                fa: 'از مبلمان و کابینت تا تجهیزات ورزشی نرم، خطوط کامل با مسیر تأمین معرفی شده است.',
                en: 'From furniture and cabinetry to soft sports gear, complete lines with sourcing pathways are presented.',
                ps: 'له فرنیچر او المارۍ څخه تر نرمو ورزشي تجهیزاتو پورې، بشپړ لینونه او د تدارک لارې ښودل شوي.'
            },
            highlights: [
                {
                    icon: '🪑',
                    title: {
                        fa: 'طراحی کارگاه‌های چندمنظوره',
                        en: 'Multi-purpose Workshop Layouts',
                        ps: 'ګڼ مهاله کاري خونې ترتیب'
                    },
                    description: {
                        fa: 'چیدمان خطوط برای مبلمان خانگی، اداری و آموزشی با گردش کار روان و بهره‌وری بالا.',
                        en: 'Configuring lines for home, office, and school furniture with smooth workflows and high productivity.',
                        ps: 'لاینونه د کور، دفتر او ښوونځي فرنیچر لپاره ترتیب کوو چې روان بهیر او لوړه تولید ولري.'
                    }
                },
                {
                    icon: '🧰',
                    title: {
                        fa: 'ماشین‌آلات CNC و اتوماسیون',
                        en: 'CNC Machinery & Automation',
                        ps: 'د CNC ماشینونه او اتومات'
                    },
                    description: {
                        fa: 'انتخاب دستگاه‌های CNC، سنباده‌زنی و روکش برای کیفیت ثابت و تولید سریع.',
                        en: 'Selecting CNC, sanding, and finishing machines to ensure consistent quality and quick output.',
                        ps: 'د CNC، سنګ وهلو او بشپړونې ماشینونه ټاکو څو ثابت کیفیت او چټک تولید یقیني کړي.'
                    }
                },
                {
                    icon: '🛡️',
                    title: {
                        fa: 'ایمنی و استانداردسازی تولید',
                        en: 'Safety & Production Standardisation',
                        ps: 'خوندیتوب او د تولید معیاري کول'
                    },
                    description: {
                        fa: 'پیاده‌سازی استانداردهای ایمنی کارگاهی و فرآیندهای QC دوره‌ای برای حفظ کیفیت.',
                        en: 'Implementing workshop safety standards and periodic QC to maintain quality.',
                        ps: 'د کار خونې د خوندیتوب معیارونه او دوره ای QC پروسې پلي کوو څو کیفیت وساتو.'
                    }
                }
            ]
        }
    };

    function getCurrentLanguage() {
        if (typeof currentLanguage !== 'undefined') {
            return currentLanguage;
        }
        return 'fa';
    }

    function getText(map, lang) {
        if (!map) {
            return '';
        }
        return map[lang] || map.fa || '';
    }

    function renderHighlights(highlights, lang) {
        const container = document.getElementById('categoryHighlightsGrid');
        if (!container) {
            return;
        }

        const section = container.closest('.category-overview');
        if (section) {
            section.style.display = '';
        }

        container.innerHTML = '';

        if (!Array.isArray(highlights) || highlights.length === 0) {
            if (section) {
                section.style.display = 'none';
            }
            return;
        }

        highlights.forEach(item => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            card.innerHTML = `
                <span class="feature-icon">${item.icon || '⭐'}</span>
                <h3>${getText(item.title, lang)}</h3>
                <p>${getText(item.description, lang)}</p>
            `;
            container.appendChild(card);
        });
    }

    function renderLines(lines, lang, groupId) {
        const container = document.getElementById('categoryLinesGrid');
        if (!container) {
            return;
        }

        container.innerHTML = '';

        if (!Array.isArray(lines) || lines.length === 0) {
            const message = document.createElement('div');
            message.className = 'no-equipment';
            message.textContent = getText(categoryPageTexts.noLines, lang);
            container.appendChild(message);
            return;
        }

        const viewText = lang === 'fa' ? 'مشاهده PDF' : (lang === 'ps' ? 'PDF وګورئ' : 'View PDF');
        const downloadText = lang === 'fa' ? 'دانلود' : (lang === 'ps' ? 'ډاونلوډ' : 'Download');

        lines.forEach(line => {
            const card = document.createElement('div');
            card.className = 'equipment-card';
            const lineTitle = getText(line.title, lang);
            const lineDescription = getText(line.description, lang);
            const lineIconSource = typeof window !== 'undefined' && typeof window.getProductionLineIcon === 'function'
                ? (window.getProductionLineIcon(line.iconId || line.id) || window.getProductionLineIcon(groupId))
                : null;
            const lineFallbackIcon = typeof window !== 'undefined' && typeof window.getProductionLineIconFallback === 'function'
                ? (window.getProductionLineIconFallback(line.iconId || line.id) || window.getProductionLineIconFallback(groupId) || null)
                : null;
            const resolvedLineIcon = lineIconSource || lineFallbackIcon;
            const lineIconMarkup = (typeof window !== 'undefined' && typeof window.renderIconMarkup === 'function')
                ? window.renderIconMarkup(resolvedLineIcon, 'equipment-icon', lineTitle, 'div', lineFallbackIcon || '📄')
                : `<div class="equipment-icon">${resolvedLineIcon || lineFallbackIcon || '📄'}</div>`;
            card.innerHTML = `
                ${lineIconMarkup}
                <h4>${lineTitle}</h4>
                <p>${lineDescription}</p>
                <div class="equipment-actions">
                    <a href="${line.pdfUrl}" target="_blank" class="btn-primary">
                        <i class="fas fa-file-pdf"></i> ${viewText}
                    </a>
                    <a href="${line.pdfUrl}" download class="btn-secondary">
                        <i class="fas fa-download"></i> ${downloadText}
                    </a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function renderRelatedCategories(currentId, lang) {
        if (typeof productionLineGroups === 'undefined') {
            return;
        }

        const container = document.getElementById('relatedCategoriesGrid');
        if (!container) {
            return;
        }

        container.innerHTML = '';

        productionLineGroups
            .filter(group => group.id !== currentId)
            .slice(0, 4)
            .forEach(group => {
                const link = document.createElement('a');
                link.className = 'category-card';
                const route = categoryPageRoutes[group.id];
                if (route) {
                    link.href = route;
                } else {
                    link.href = 'production-lines.html';
                }
                const iconSource = typeof window !== 'undefined' && typeof window.getProductionLineIcon === 'function'
                    ? window.getProductionLineIcon(group.id)
                    : null;
                const fallbackIcon = typeof window !== 'undefined' && typeof window.getProductionLineIconFallback === 'function'
                    ? (window.getProductionLineIconFallback(group.id) || null)
                    : null;
                const resolvedIcon = iconSource || fallbackIcon || group.icon;
                const iconMarkup = (typeof window !== 'undefined' && typeof window.renderIconMarkup === 'function')
                    ? window.renderIconMarkup(resolvedIcon, 'icon', getText(group.title, lang), 'span', fallbackIcon || group.icon || '🏭')
                    : `<span class="icon">${resolvedIcon || ''}</span>`;
                link.innerHTML = `
                    ${iconMarkup}
                    <h4>${getText(group.title, lang)}</h4>
                    <p>${getText(group.description, lang)}</p>
                `;
                container.appendChild(link);
            });
    }

    function renderCategoryPage() {
        const body = document.body;
        const groupId = body ? body.dataset.groupId : '';
        if (!groupId || typeof productionLines === 'undefined') {
            return;
        }

        const lang = getCurrentLanguage();
        const group = Array.isArray(productionLineGroups)
            ? productionLineGroups.find(item => item.id === groupId)
            : null;
        const data = productionLines[groupId];
        const details = categoryDetails[groupId] || {};

        if (!group || !data) {
            return;
        }

        const heroTitleEl = document.getElementById('categoryHeroTitle');
        if (heroTitleEl) {
            heroTitleEl.textContent = getText(group.title, lang);
        }

        const heroSubtitleEl = document.getElementById('categoryHeroSubtitle');
        if (heroSubtitleEl) {
            heroSubtitleEl.textContent = getText(group.description, lang);
        }

        const heroQuoteEl = document.getElementById('categoryHeroQuote');
        if (heroQuoteEl) {
            const quote = details.heroQuote ? getText(details.heroQuote, lang) : getText(categoryPageTexts.heroQuoteDefault, lang);
            heroQuoteEl.textContent = quote;
        }

        const backButton = document.getElementById('backToAllLines');
        if (backButton) {
            backButton.textContent = getText(categoryPageTexts.backToAll, lang);
        }

        const highlightsTitleEl = document.getElementById('categoryHighlightsTitle');
        if (highlightsTitleEl) {
            const title = details.highlightsTitle ? getText(details.highlightsTitle, lang) : getText(categoryPageTexts.highlightsTitle, lang);
            highlightsTitleEl.textContent = title;
        }

        const highlightsSubtitleEl = document.getElementById('categoryHighlightsSubtitle');
        if (highlightsSubtitleEl) {
            const subtitle = details.highlightsSubtitle ? getText(details.highlightsSubtitle, lang) : getText(categoryPageTexts.highlightsSubtitle, lang);
            highlightsSubtitleEl.textContent = subtitle;
        }

        renderHighlights(details.highlights || [], lang);

        const linesHeadingEl = document.getElementById('categoryLinesHeading');
        if (linesHeadingEl) {
            const heading = details.linesTitle ? getText(details.linesTitle, lang) : getText(categoryPageTexts.linesTitle, lang);
            linesHeadingEl.textContent = heading;
        }

        const linesDescriptionEl = document.getElementById('categoryLinesDescription');
        if (linesDescriptionEl) {
            const description = details.linesDescription ? getText(details.linesDescription, lang) : getText(categoryPageTexts.linesSubtitle, lang);
            linesDescriptionEl.textContent = description;
        }

        renderLines(data.lines || [], lang, groupId);

        const relatedTitleEl = document.getElementById('relatedCategoriesTitle');
        if (relatedTitleEl) {
            relatedTitleEl.textContent = getText(categoryPageTexts.relatedTitle, lang);
        }

        const relatedSubtitleEl = document.getElementById('relatedCategoriesSubtitle');
        if (relatedSubtitleEl) {
            relatedSubtitleEl.textContent = getText(categoryPageTexts.relatedSubtitle, lang);
        }

        renderRelatedCategories(groupId, lang);
    }

    document.addEventListener('DOMContentLoaded', renderCategoryPage);

    window.updateProductionCategoryPage = renderCategoryPage;
})();
