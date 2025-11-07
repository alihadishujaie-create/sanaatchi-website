(function() {
    const content = {
        hero: {
            title: {
                fa: 'راهکارهای بسته‌بندی صنعتی آماده استقرار',
                en: 'Industrial Packaging Solutions Ready to Deploy',
                ps: 'صنعتي بسته بندۍ حل لارې د نصب لپاره چمتو دي'
            },
            subtitle: {
                fa: 'از پرکن و درزگیر تا وکیوم و شرینک‌پک؛ خطوط کامل با نصب، آموزش و تضمین کیفیت ارائه می‌شود.',
                en: 'From fillers and sealers to vacuum and shrink wrapping—complete lines delivered with installation, training and QA.',
                ps: 'له ډکونکو او سیلرونو څخه تر وکیوم او شرینک پورې—بشپړې لینونه د نصب، روزنې او کیفیت تضمین سره برابریږي.'
            },
            quote: {
                fa: 'هر پروژه بسته‌بندی با تنظیمات محصول، مستندسازی سه‌زبانه و برنامه خدمات پس از فروش همراه است.',
                en: 'Every packaging project ships with product configuration, trilingual documentation and after-sales service plans.',
                ps: 'هر د بسته بندۍ پروژه د محصول ترتیب، درې ژبني اسنادو او د پلور وروسته د خدمتونو پروګرام سره وړاندې کېږي.'
            },
            secondaryCta: {
                fa: 'مشاهده فهرست تجهیزات',
                en: 'View Packaging Equipment List',
                ps: 'د بسته بندۍ تجهیزات وګورئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا بسته‌بندی را با صنعتچی اجرا کنیم؟',
            en: 'Why Deliver Packaging Lines with Sanaatchi?',
            ps: 'ولې د بسته بندۍ لینونه له صنعتچي سره پلي کړو؟'
        },
        highlightsSubtitle: {
            fa: 'طراحی، تامین و راه‌اندازی با تمرکز بر کیفیت محصول، سرعت تولید و انطباق بهداشتی.',
            en: 'Design, sourcing and commissioning focused on product quality, throughput and hygiene compliance.',
            ps: 'ډیزاین، تدارک او فعالول چې د محصول کیفیت، تولید سرعت او د حفظ الصحې معیارونو ته پام کوي.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی تجهیزات بسته‌بندی',
            en: 'Core Packaging Equipment Groups',
            ps: 'د بسته بندۍ تجهیزاتو بنسټیزې ډلې'
        },
        categoriesSubtitle: {
            fa: 'بسته به محصول و ظرفیت، از سیستم‌های اتوماتیک تا وکیوم، لفافه و چاپ انتخاب کنید.',
            en: 'Select automated packaging, vacuum solutions, wrapping or printing based on your capacity.',
            ps: 'د خپلې اړتیا له مخې اتومات بسته بندي، وکیوم حلونه، لفافه کول یا چاپ انتخاب کړئ.'
        },
        inventoryTitle: {
            fa: 'فهرست فایل‌های فنی آماده دانلود',
            en: 'Downloadable Technical Datasheets',
            ps: 'د ډاونلوډ لپاره تخنیکي معلومات'
        },
        inventorySubtitle: {
            fa: 'جزئیات فنی هر دستگاه را بررسی کرده و فایل PDF سه‌زبانه را دریافت کنید.',
            en: 'Review specifications for each machine and download the trilingual PDF datasheet.',
            ps: 'د هر ماشین ځانګړتیاوې وګورئ او درې ژبنیز PDF ډاونلوډ کړئ.'
        },
        assuranceTitle: {
            fa: 'خدمات همراه سیستم‌های بسته‌بندی',
            en: 'Services Bundled with Every Packaging System',
            ps: 'له هر بسته بندۍ سیسټم سره مل خدمات'
        },
        assuranceSubtitle: {
            fa: 'از طراحی قالب تا آموزش اپراتور، تمام مراحل توسط تیم صنعتچی پشتیبانی می‌شود.',
            en: 'From tooling design to operator coaching, Sanaatchi supports every stage.',
            ps: 'له مولډ جوړولو څخه تر اپراتور روزنې پورې، صنعتچي ټول پړاوونه ملاتړ کوي.'
        },
        processTitle: {
            fa: 'روند راه‌اندازی خط بسته‌بندی',
            en: 'Packaging Line Deployment Roadmap',
            ps: 'د بسته بندۍ لاین د پلي کولو نقشه'
        },
        processSubtitle: {
            fa: 'چهار گام از تحلیل محصول تا آموزش بهره‌برداری که پروژه شما را تضمین می‌کند.',
            en: 'Four steps from product analysis to operations training that safeguard your investment.',
            ps: 'څلور ګامونه له د محصول تحلیل څخه تر عملیاتو روزنې پورې چې ستاسو پانګونه خوندي کوي.'
        }
    };

    const highlights = [
        {
            icon: '🧪',
            title: {
                fa: 'فرمولاسیون و نمونه‌سازی محصول',
                en: 'Product Formulation & Prototyping',
                ps: 'د محصول فورمول او نمونه جوړونه'
            },
            description: {
                fa: 'ویسکوزیته، دما و خواص محصول شما بررسی می‌شود تا دستگاه مناسب انتخاب گردد.',
                en: 'Viscosity, temperature and product characteristics are analysed to match the right machinery.',
                ps: 'ستاسو د محصول ویسکوزیت، تودوخه او ځانګړتیاوې ارزول کېږي څو مناسب ماشین وټاکل شي.'
            }
        },
        {
            icon: '🧼',
            title: {
                fa: 'استانداردهای بهداشتی و GMP',
                en: 'Hygiene & GMP Compliance',
                ps: 'د حفظ الصحې او GMP معیارونه'
            },
            description: {
                fa: 'سطوح تماس، مواد غذایی و پاکسازی CIP براساس استانداردهای هدف طراحی می‌شود.',
                en: 'Contact surfaces, food-grade materials and CIP cleaning are engineered to your compliance needs.',
                ps: 'د تماس سطحونه، د خوراکي موادو درجې او د CIP پاکول ستاسو د معیارونو پر بنسټ ډیزاین کېږي.'
            }
        },
        {
            icon: '🔄',
            title: {
                fa: 'یکپارچگی با خطوط تولید موجود',
                en: 'Integration with Existing Lines',
                ps: 'له موجوده لینونو سره یوځای کېدل'
            },
            description: {
                fa: 'کانوایر، سنسور و PLC با سیستم‌های فعلی شما هماهنگ و تست می‌شود.',
                en: 'Conveyors, sensors and PLC logic are harmonised and tested with your current systems.',
                ps: 'کونوییرونه، سنسرونه او PLC منطق له ستاسو له اوسنیو سیسټمونو سره یو ځای او ازمویل کېږي.'
            }
        },
        {
            icon: '🧰',
            title: {
                fa: 'پشتیبانی خدمات پس از فروش',
                en: 'After-Sales Service Programme',
                ps: 'د پلور وروسته د خدمت پروګرام'
            },
            description: {
                fa: 'قطعات یدکی حیاتی، آموزش اپراتور و برنامه نگهداری دوره‌ای فراهم می‌شود.',
                en: 'Critical spares, operator training and preventative maintenance schedules are provided.',
                ps: 'مهم اضافي پرزې، د اپراتور روزنه او د مخنیوي ساتنې مهالویش برابرېږي.'
            }
        }
    ];

    const categories = [
        {
            id: 'automatic-packaging',
            icon: '🤖',
            title: {
                fa: 'سیستم‌های بسته‌بندی اتوماتیک',
                en: 'Automatic Packaging Systems',
                ps: 'اتومات بسته بندۍ سیستمونه'
            },
            description: {
                fa: 'خطوط پرکن، درزگیر و لیبل‌زن برای مایعات، پودر و محصولات مصرفی.',
                en: 'Filling, sealing and labelling lines for liquids, powders and consumer goods.',
                ps: 'د مایعاتو، پوډرو او مصرفي محصولاتو لپاره د ډکولو، سیل کولو او لیبل کولو لینونه.'
            }
        },
        {
            id: 'vacuum-packaging',
            icon: '🧊',
            title: {
                fa: 'وکیوم و بسته‌بندی محافظتی',
                en: 'Vacuum & Protective Packaging',
                ps: 'وکیوم او محافظتي بسته بندي'
            },
            description: {
                fa: 'وکیوم سیلر رومیزی و اتاقکی برای افزایش ماندگاری مواد غذایی و صنعتی.',
                en: 'Tabletop and chamber vacuum sealers extend shelf life for food and industrial goods.',
                ps: 'ټيبل او چیمبر وکیوم سیلرونه د خوراکي او صنعتي توکو عمر زیاتوي.'
            }
        },
        {
            id: 'wrapping-packaging',
            icon: '📦',
            title: {
                fa: 'بسته‌بندی کشسان و تسمه‌کشی',
                en: 'Wrapping & Strapping Lines',
                ps: 'لفافه او تسمه بندي لینونه'
            },
            description: {
                fa: 'ماشین‌های استرچ، شرینک و تسمه‌کشی برای آماده‌سازی حمل و انبارداری.',
                en: 'Stretch, shrink and strapping machines prepare loads for logistics and warehousing.',
                ps: 'د سټریچ، شرینک او تسمه ماشینونه بارونه د لوژستیک او ګودام لپاره چمتو کوي.'
            }
        },
        {
            id: 'printing-packaging',
            icon: '🖨️',
            title: {
                fa: 'چاپ و تبدیل بسته‌بندی',
                en: 'Packaging Printing & Converting',
                ps: 'د بسته بندۍ چاپ او بدلون'
            },
            description: {
                fa: 'فلکسو، پاکت‌سازی و خطوط دوخت و برش برای آماده‌سازی بسته‌های نهایی.',
                en: 'Flexo printing, bag making and sealing-cutting lines finish final packaging.',
                ps: 'د فلکسو چاپ، بکس جوړولو او سیل کولو او پرې کولو لینونه وروستۍ بسته بندي بشپړوي.'
            }
        },
        {
            id: 'tobacco-processing',
            icon: '🍂',
            title: {
                fa: 'پردازش و بسته‌بندی تنباکو',
                en: 'Tobacco Processing & Packaging',
                ps: 'د تنباکو پروسس او بسته بندي'
            },
            description: {
                fa: 'ماشین‌آلات تولید سیگار، بسته‌بندی پاکتی و آماده‌سازی برگ و تنباکو با کنترل رطوبت.',
                en: 'Cigarette making, pouch packing and leaf conditioning systems with moisture control.',
                ps: 'د سیګار جوړولو، د کڅوړې بسته بندۍ او د تنباکو د پاڼو د رطوبت کنټرول سیسټمونه.'
            }
        }
    ];

    const defaultInventory = [
        {
            name: {
                fa: 'ماشین پرکن اتوماتیک',
                en: 'Automatic Filling Machine',
                ps: 'اتومات ډکولو ماشین'
            },
            description: {
                fa: 'پرکن پیستونی با PLC و نازل‌های قابل تنظیم برای مایعات غلیظ و رقیق.',
                en: 'Piston filler with PLC control and adjustable nozzles for viscous or free-flowing liquids.',
                ps: 'د PLC کنټرول لرونکی پیستوني ډکونکی د غلیظ او روانو مایعاتو لپاره.'
            },
            pdfUrl: 'pdfs/packaging/automatic-packaging/filling-machine.pdf',
            category: 'automatic-packaging',
            icon: '🧴'
        },
        {
            name: {
                fa: 'ماشین درزگیر اتوماتیک',
                en: 'Automatic Sealing Machine',
                ps: 'اتومات سیلر ماشین'
            },
            description: {
                fa: 'سیستم درزگیری حرارتی با کنترل دما و تسمه انتقال ضد چروک.',
                en: 'Thermal sealing system with precision temperature control and wrinkle-free conveyors.',
                ps: 'حرارتي سیلر د دقت تودوخې کنټرول او بې چین تسمې سره.'
            },
            pdfUrl: 'pdfs/packaging/automatic-packaging/sealing-machine.pdf',
            category: 'automatic-packaging',
            icon: '🔥'
        },
        {
            name: {
                fa: 'ماشین برچسب‌زن اتوماتیک',
                en: 'Automatic Labelling Machine',
                ps: 'اتومات لیبل ماشین'
            },
            description: {
                fa: 'لیبل‌زن روتاری با سیستم سنجش موقعیت و تنظیم سرعت هماهنگ با خط تولید.',
                en: 'Rotary labeller with position sensing and synchronised speed control with the production line.',
                ps: 'د موقعیت سنجونې او د تولید له لین سره همغږي سرعت کنټرول لرونکی روتري لیبلر.'
            },
            pdfUrl: 'pdfs/packaging/automatic-packaging/labeling-machine.pdf',
            category: 'automatic-packaging',
            icon: '🏷️'
        },
        {
            name: {
                fa: 'وکیوم سیلر رومیزی',
                en: 'Tabletop Vacuum Sealer',
                ps: 'میز وړ وکیوم سیلر'
            },
            description: {
                fa: 'مناسب بسته‌بندی کوچک با پمپ قدرتمند و تنظیم زمان و دما.',
                en: 'Compact vacuum sealing with high-performance pump and adjustable time and heat.',
                ps: 'د ځواکمن پمپ او د وخت او تودوخې د تنظیم وړ کوچنی وکیوم سیلر.'
            },
            pdfUrl: 'pdfs/packaging/vacuum-packaging/vacuum-sealer.pdf',
            category: 'vacuum-packaging',
            icon: '🪫'
        },
        {
            name: {
                fa: 'دستگاه وکیوم اتاقکی',
                en: 'Vacuum Chamber Machine',
                ps: 'د وکیوم چیمبر ماشین'
            },
            description: {
                fa: 'چمبر استیل دو محفظه با برنامه‌ریزی گاز تزریق و کنترل سنسور.',
                en: 'Dual-chamber stainless unit with gas flushing programmes and sensor controls.',
                ps: 'دوه خونې لرونکی سټینلیس یونټ د ګاز د داخلېدو پروګرام او سینسر کنټرول سره.'
            },
            pdfUrl: 'pdfs/packaging/vacuum-packaging/vacuum-chamber.pdf',
            category: 'vacuum-packaging',
            icon: '🏢'
        },
        {
            name: {
                fa: 'کیسه وکیوم چندلایه',
                en: 'Multi-Layer Vacuum Bag',
                ps: 'چند پوړیز وکیوم کڅوړه'
            },
            description: {
                fa: 'کیسه‌های چندلایه مقاوم در برابر سوراخ، مناسب مواد غذایی و صنعتی.',
                en: 'Puncture-resistant multilayer bags suitable for food and industrial packaging.',
                ps: 'څو پوړیزې سوراخ ضد کڅوړې چې د خوراکي او صنعتي بسته بندۍ لپاره مناسبې دي.'
            },
            pdfUrl: 'pdfs/packaging/vacuum-packaging/vacuum-bag.pdf',
            category: 'vacuum-packaging',
            icon: '🛍️'
        },
        {
            name: {
                fa: 'ماشین استرچ رپینگ',
                en: 'Stretch Wrapping Machine',
                ps: 'سټریچ لفافه ماشین'
            },
            description: {
                fa: 'پالت‌پیچ خودکار با ترمز فیلم قابل تنظیم و حسگر ارتفاع بار.',
                en: 'Automatic pallet wrapper with adjustable film tension and load height sensors.',
                ps: 'اتومات پالت لفاف د فلم د تاوولو د تنظیم او د بار د ارتفاع سینسرونو سره.'
            },
            pdfUrl: 'pdfs/packaging/wrapping-packaging/stretch-wrapping.pdf',
            category: 'wrapping-packaging',
            icon: '🌀'
        },
        {
            name: {
                fa: 'ماشین شرینک تونلی',
                en: 'Tunnel Shrink Wrapper',
                ps: 'ټنل شرینک ماشین'
            },
            description: {
                fa: 'تونل حرارتی با جریان هوای یکنواخت و کانویور مقاوم به حرارت.',
                en: 'Heat tunnel with uniform airflow and heat-resistant conveyor for retail packs.',
                ps: 'حرارتي تونل د یوشان هوا جریان او د تودوخې پر وړاندې مقاومت لرونکي کونوییر سره.'
            },
            pdfUrl: 'pdfs/packaging/wrapping-packaging/shrink-wrapping.pdf',
            category: 'wrapping-packaging',
            icon: '🔥'
        },
        {
            name: {
                fa: 'ماشین تسمه‌کشی صنعتی',
                en: 'Industrial Strapping Machine',
                ps: 'صنعتي تسمه ماشین'
            },
            description: {
                fa: 'سیستم تسمه‌کشی فول اتومات با هدایت تسمه و کشش قابل برنامه‌ریزی.',
                en: 'Fully automatic strapping with programmable tension and strap guidance.',
                ps: 'په بشپړ ډول اتومات تسمه ماشین د پروګرام وړ کشش او تسمې لارښود سره.'
            },
            pdfUrl: 'pdfs/packaging/wrapping-packaging/strapping-machine.pdf',
            category: 'wrapping-packaging',
            icon: '➰'
        },
            name: {
                fa: 'ماشین چاپ فلکسو',
                en: 'Flexographic Printing Machine',
                ps: 'د فلکسو چاپ ماشین'
            },
            description: {
                fa: 'ماشین فلکسو رول به رول با رجیستر دقیق و خشک‌کن هوای گرم برای چاپ بسته‌بندی.',
                en: 'Roll-to-roll flexo press with precise registration and hot-air dryers for packaging films.',
                ps: 'رول په رول فلکسو پریس د دقیق رجسټر او د ګرمې هوا وچولو سره د بسته بندۍ فلمونو لپاره.'
            },
            pdfUrl: 'pdfs/plastic-processing/printing-packaging/flexo-printing.pdf',
            category: 'printing-packaging',
            icon: '🖨️'
        },
        {
            name: {
                fa: 'خط پاکت‌سازی',
                en: 'Bag Making Line',
                ps: 'د کڅوړې جوړولو لاین'
            },
            description: {
                fa: 'از رول تا پاکت با ایستگاه‌های تا، دوخت و پانچ برای تولید پاکت‌های چندلایه.',
                en: 'From roll to finished bag with folding, sealing and punching stations for multilayer bags.',
                ps: 'له رول څخه تر بشپړې کڅوړې پورې د تا کولو، سیل کولو او پنچ کولو سټېشنونو سره.'
            },
            pdfUrl: 'pdfs/plastic-processing/printing-packaging/bag-making.pdf',
            category: 'printing-packaging',
            icon: '🛍️'
        },
        {
            name: {
                fa: 'خط درزگیری و برش',
                en: 'Sealing & Cutting Line',
                ps: 'د سیل کولو او پرې کولو لاین'
            },
            description: {
                fa: 'سیستم برش و درزگیری با کنترل سروو برای تولید رول‌های بسته‌بندی باکیفیت.',
                en: 'Servo-controlled sealing and cutting modules delivering precise packaging rolls.',
                ps: 'د سرو کنټرول لرونکي سیل او پرې کولو ماډلونه چې دقیق بسته بندۍ رولونه جوړوي.'
            },
            pdfUrl: 'pdfs/plastic-processing/printing-packaging/sealing-cutting.pdf',
            category: 'printing-packaging',
            icon: '✂️'
        },
        {
            name: {
                fa: 'خط تولید سیگار',
                en: 'Cigarette Making Line',
                ps: 'د سیګار جوړولو لاین'
            },
            description: {
                fa: 'تغذیه توتون، رول‌سازی، چسب‌زنی و برش اتوماتیک برای تولید سیگار باکیفیت.',
                en: 'Automatic tobacco feeding, rod forming, gluing and cutting for consistent cigarettes.',
                ps: 'اتومات توتون تغذیه، لاستي جوړونه، ګلو لګول او پرې کول د ثابتو سیګارتونو لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/cigarette-making.pdf',
            category: 'tobacco-processing',
            icon: '🚬'
        },
        {
            name: {
                fa: 'ماشین بسته‌بندی سیگار',
                en: 'Cigarette Packing Machine',
                ps: 'د سیګار بسته بندۍ ماشین'
            },
            description: {
                fa: 'چیدمان، لفاف و سلفون‌پیچ اتوماتیک با کنترل وزن و چاپ تاریخ تولید بسته.',
                en: 'Automatic carton loading, wrapping and cellophane with weight and date coding control.',
                ps: 'اتومات کڅوړه اچول، لفاف او سیلوفان د وزن او نیټې کوډ کنټرول سره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/cigarette-packing.pdf',
            category: 'tobacco-processing',
            icon: '📦'
        },
        {
            name: {
                fa: 'واحد تولید فیلتر سیگار',
                en: 'Cigarette Filter Production Unit',
                ps: 'د سیګار فلټر تولید واحد'
            },
            description: {
                fa: 'فرم‌دهی استیک، برش طولی و الصاق کاغذ برای ساخت فیلترهای فیبر سلولزی.',
                en: 'Tow opening, rod forming and paper tipping to produce cellulose fibre cigarette filters.',
                ps: 'د فایبر پرانیستلو، لاستي جوړولو او د کاغذ لګولو پروسې د سلولوز فلټرونو لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/cigarette-filter.pdf',
            category: 'tobacco-processing',
            icon: '🪶'
        },
        {
            name: {
                fa: 'پرکن پاکت تنباکو',
                en: 'Tobacco Pouch Filling Machine',
                ps: 'د تنباکو د کڅوړې ډکولو ماشین'
            },
            description: {
                fa: 'توزین دقیق، ویبره و پرکن چنددهانه برای بسته‌بندی پاکت‌های تنباکو و نیکوتین.',
                en: 'Multi-head weighers with vibration feed fill tobacco and nicotine pouches accurately.',
                ps: 'چند سری وزن سنج د ویبرېشن فیډ سره تنباکو او نیکوتین کڅوړې په دقیقه توګه ډکوي.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/pouch-filling.pdf',
            category: 'tobacco-processing',
            icon: '🧴'
        },
        {
            name: {
                fa: 'دستگاه سیل پاکت تنباکو',
                en: 'Tobacco Pouch Sealing Machine',
                ps: 'د تنباکو د کڅوړې سیل کولو ماشین'
            },
            description: {
                fa: 'سیل حرارتی یا التراسونیک با کنترل فشار و سیستم کدزن برای بسته‌های سفارشی.',
                en: 'Thermal or ultrasonic sealing with pressure control and coding for customised pouches.',
                ps: 'حرارتي یا الټراسونیک سیل کول د فشار کنټرول او کوډینګ سره د ځانګړو کڅوړو لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/pouch-sealing.pdf',
            category: 'tobacco-processing',
            icon: '🔒'
        },
        {
            name: {
                fa: 'ماشین چاپ روی پاکت تنباکو',
                en: 'Tobacco Pouch Printing Machine',
                ps: 'د تنباکو د کڅوړې چاپ ماشین'
            },
            description: {
                fa: 'چاپ فلکسو/دیجیتال با رجیستر دقیق و خشک‌کن UV برای پاکت‌های فویل و کاغذی.',
                en: 'Flexo or digital printers with tight register and UV drying for foil and paper pouches.',
                ps: 'فلکسو یا ډیجیټل چاپګر د دقیق رجسټر او UV وچولو سره د فویل او کاغذي کڅوړو لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/pouch-printing.pdf',
            category: 'tobacco-processing',
            icon: '🖨️'
        },
        {
            name: {
                fa: 'خشک‌کن برگ تنباکو',
                en: 'Tobacco Leaf Dryer',
                ps: 'د تنباکو د پاڼې وچوونکی'
            },
            description: {
                fa: 'خشک‌کن طبقه‌ای با کنترل دما و رطوبت برای تثبیت کیفیت برگ‌های تنباکو.',
                en: 'Multi-tier dryer with temperature and humidity control stabilises tobacco leaf quality.',
                ps: 'چند پوړیز وچوونکی د تودوخې او رطوبت کنټرول سره د تنباکو پاڼو کیفیت ثابتوي.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/tobacco-drying.pdf',
            category: 'tobacco-processing',
            icon: '🌬️'
        },
        {
            name: {
                fa: 'خط برش تنباکو',
                en: 'Tobacco Cutting Line',
                ps: 'د تنباکو پرې کولو لاین'
            },
            description: {
                fa: 'خردکن و اسلایسر با تنظیم ضخامت و جداساز الیاف برای تهیه برش یکنواخت توتون.',
                en: 'Shredders and slicers with adjustable cut width and fibre separation for uniform tobacco.',
                ps: 'شریدر او سلایسر د قطع عرض د تنظیم او فایبر بېلولو سره د یوشان توتون لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/tobacco-cutting.pdf',
            category: 'tobacco-processing',
            icon: '🔪'
        },
        {
            name: {
                fa: 'واحد طعم‌دهی تنباکو',
                en: 'Tobacco Flavouring Unit',
                ps: 'د تنباکو خوند ورکولو واحد'
            },
            description: {
                fa: 'میکسر درام و اسپری دوزینگ با کنترل رطوبت برای افزودن اسانس و مواد افزودنی.',
                en: 'Drum mixers with spray dosing and humidity control to apply flavours and casings.',
                ps: 'د ډرم مکسرونه د سپرې ډوزینګ او د رطوبت کنټرول سره د خوند او کوټینګ لپاره.'
            },
            pdfUrl: 'pdfs/packaging/tobacco-processing/tobacco-flavoring.pdf',
            category: 'tobacco-processing',
            icon: '🍯'
        }
    ];

    const assuranceHighlights = [
        {
            icon: '📋',
            title: {
                fa: 'مستندسازی و تاییدیه کیفیت',
                en: 'Documentation & Quality Certification',
                ps: 'اسناد او د کیفیت تایید'
            },
            description: {
                fa: 'SOP، نقشه‌های نصب و تاییدیه مواد غذایی یا صنعتی برای هر خط ارائه می‌شود.',
                en: 'SOPs, installation drawings and food or industrial grade certificates accompany each line.',
                ps: 'SOPs، د نصب نقاشي او د خوراکي یا صنعتي درجې سندونه له هر لاین سره وړاندې کېږي.'
            }
        },
        {
            icon: '🧑‍🏫',
            title: {
                fa: 'آموزش اپراتور و تیم نگهداری',
                en: 'Operator & Maintenance Training',
                ps: 'د اپراتور او ساتنې ټیم روزنه'
            },
            description: {
                fa: 'دوره‌های عملی در محل، راه‌اندازی آزمایشی و تهیه چک‌لیست نگهداری دوره‌ای.',
                en: 'On-site practical sessions, trial runs and preventative maintenance checklists.',
                ps: 'په ساحه کې عملي کورسونه، ازمایښتي چلول او د مخنیوي ساتنې چک لیستونه.'
            }
        },
        {
            icon: '🧯',
            title: {
                fa: 'ایمنی و بهداشت خطوط',
                en: 'Line Safety & Hygiene Assurance',
                ps: 'د لاین خوندیتوب او حفظ الصحه'
            },
            description: {
                fa: 'مطابقت با استانداردهای HACCP، محافظ‌های ایمنی و طرح پاکسازی سریع تضمین می‌شود.',
                en: 'Compliance with HACCP, safety guarding and rapid cleaning plans are ensured.',
                ps: 'له HACCP سره مطابقت، د خوندیتوب ساتونکي او د چټک پاکولو پلانونه تضمین کېږي.'
            }
        },
        {
            icon: '🔁',
            title: {
                fa: 'تامین قطعات و پشتیبانی مداوم',
                en: 'Spare Parts Supply & Ongoing Support',
                ps: 'د اضافي پرزو برابرول او دوامداره ملاتړ'
            },
            description: {
                fa: 'قطعات یدکی حیاتی، پشتیبانی راه دور و سرویس میدانی برای حفظ تولید فراهم است.',
                en: 'Critical spares, remote assistance and field servicing keep production stable.',
                ps: 'مهم اضافي پرزې، لرې ملاتړ او میداني خدمت د تولید ثبات یقیني کوي.'
            }
        }
    ];

    const processSteps = [
        {
            step: '01',
            title: {
                fa: 'تحلیل محصول و الزامات',
                en: 'Product & Requirement Analysis',
                ps: 'د محصول او اړتیاوو ارزونه'
            },
            description: {
                fa: 'نمونه‌گیری، اندازه‌گیری ویسکوزیته، وزن و شرایط نگهداری برای انتخاب راهکار مناسب.',
                en: 'Sampling, viscosity, weight and storage assessments guide the right solution.',
                ps: 'نمونې اخیستل، ویسکوزیت، وزن او د ساتنې شرایط ارزول د سم حل رهنمايي کوي.'
            },
            bullets: [
                { fa: 'بازدید میدانی از خط فعلی و برنامه ظرفیت آینده', en: 'Site survey of current line and future capacity roadmap', ps: 'د اوسني لاین ساحوي سروې او د راتلونکي ظرفیت نقشه' },
                { fa: 'آزمایش سازگاری بسته‌بندی با بازار هدف', en: 'Packaging compatibility tests for target market', ps: 'د هدف بازار لپاره د بسته بندۍ د سازګارۍ ازموینې' }
            ]
        },
        {
            step: '02',
            title: {
                fa: 'طراحی و پیکربندی خط',
                en: 'Line Design & Configuration',
                ps: 'د لاین ډیزاین او پیکر جوړونه'
            },
            description: {
                fa: 'چیدمان سه‌بعدی، انتخاب ماشین‌آلات و برآورد مصرف انرژی و نیروی انسانی انجام می‌شود.',
                en: '3D layouts, machine selection and energy and manpower estimates are prepared.',
                ps: 'د درې بعدي ترتیب، د ماشینونو انتخاب او د انرژۍ او کارکوونکو اټکلونه چمتو کېږي.'
            },
            bullets: [
                { fa: 'تعریف لیست قطعات یدکی اولیه', en: 'Define initial spare parts list', ps: 'د لومړنیو اضافي پرزو لست ټاکل' },
                { fa: 'تهیه جدول زمان‌بندی تولید و نصب', en: 'Prepare manufacturing and installation schedule', ps: 'د تولید او نصب مهالویش جوړول' }
            ]
        },
        {
            step: '03',
            title: {
                fa: 'تامین، ساخت و آزمون',
                en: 'Procurement, Fabrication & Testing',
                ps: 'تدارک، جوړښت او ازموینه'
            },
            description: {
                fa: 'ماشین‌آلات ساخته، مونتاژ و تحت آزمون FAT و SAT قرار می‌گیرند و حمل برنامه‌ریزی می‌شود.',
                en: 'Equipment is built, assembled and run through FAT and SAT with logistics scheduled.',
                ps: 'تجهیزات جوړېږي، اسمبل کېږي او د FAT او SAT ازموینې ترسره کېږي او لوژستیک پلان کېږي.'
            },
            bullets: [
                { fa: 'ارائه گزارش QC و فیلم آزمون عملکرد', en: 'Deliver QC reports and performance test videos', ps: 'د QC راپورونه او د فعالیت د ازموینې ویډیوګانې ورکول' },
                { fa: 'هماهنگی حمل دریایی و زمینی با بیمه کامل', en: 'Coordinate sea and land freight with full insurance', ps: 'د سمندري او ځمکني بار وړلو بشپړه بیمه همغږي' }
            ]
        },
        {
            step: '04',
            title: {
                fa: 'نصب، آموزش و تحویل',
                en: 'Installation, Training & Handover',
                ps: 'نصب، روزنه او سپارنه'
            },
            description: {
                fa: 'نصب کامل، تولید آزمایشی، آموزش تیم بهره‌برداری و تحویل مستندات انجام می‌شود.',
                en: 'Complete installation, trial production, team coaching and documentation handover.',
                ps: 'بشپړ نصب، ازمایښتي تولید، د ټیم روزنه او د اسنادو سپارل ترسره کېږي.'
            },
            bullets: [
                { fa: 'راه‌اندازی و تنظیمات نهایی خطوط', en: 'Commissioning and final line tuning', ps: 'د لینونو کمیسیون او وروستي تنظیمات' },
                { fa: 'برنامه پشتیبانی دوره‌ای و تأمین قطعات', en: 'Plan periodic support and spare supply', ps: 'د منظم ملاتړ او اضافي پرزو پلان' }
            ]
        }
    ];

    const categoryIcons = categories.reduce((acc, category) => {
        acc[category.id] = category.icon;
        return acc;
    }, {});

    const itemIcons = {
        'filling-machine': '🧴',
        'sealing-machine': '🔥',
        'labeling-machine': '🏷️',
        'vacuum-sealer': '🪫',
        'vacuum-chamber': '🏢',
        'vacuum-bag': '🛍️',
        'stretch-wrapping': '🌀',
        'shrink-wrapping': '🔥',
        'strapping-machine': '➰',
        'flexo-printing': '🖨️',
        'bag-making': '🛍️',
        'sealing-cutting': '✂️',
        'cigarette-making': '🚬',
        'cigarette-packing': '📦',
        'cigarette-filter': '🪶',
        'pouch-filling': '🧴',
        'pouch-sealing': '🔒',
        'pouch-printing': '🖨️',
        'tobacco-drying': '🌬️',
        'tobacco-cutting': '🔪',
        'tobacco-flavoring': '🍯'
    };

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function setHero(lang) {
        const title = document.getElementById('packagingHeroTitle');
        const subtitle = document.getElementById('packagingHeroSubtitle');
        const quote = document.getElementById('packagingHeroQuote');
        const cta = document.getElementById('viewPackagingInventoryButton');

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
        const title = document.getElementById('packagingHighlightsTitle');
        const subtitle = document.getElementById('packagingHighlightsSubtitle');
        const grid = document.getElementById('packagingHighlightsGrid');

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
        const title = document.getElementById('packagingCategoriesTitle');
        const subtitle = document.getElementById('packagingCategoriesSubtitle');
        const grid = document.getElementById('packagingCategoriesGrid');

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

            const openModal = () => showPackagingCategoryModal(category.id, lang);

            card.addEventListener('click', openModal);
            card.addEventListener('keypress', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openModal();
                }
            });

            const link = card.querySelector('.category-card-link');
            if (link) {
                const handleInteraction = event => {
                    event.preventDefault();
                    event.stopPropagation();
                    openModal();
                };
                link.addEventListener('click', handleInteraction);
                link.addEventListener('keypress', event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        handleInteraction(event);
                    }
                });
            }

            grid.appendChild(card);
        });
    }

    function normaliseInventoryItem(item) {
        const pdfName = item.pdfUrl ? item.pdfUrl.split('/').pop().replace('.pdf', '') : '';
        const category = item.category || 'automatic-packaging';
        return {
            category,
            name: item.name,
            description: item.description,
            pdfUrl: item.pdfUrl,
            icon: item.icon || itemIcons[pdfName] || categoryIcons[category] || '📄'
        };
    }

    const equipmentSource = typeof equipmentData !== 'undefined'
        ? equipmentData
        : (typeof window !== 'undefined' ? (window.equipmentData || {}) : {});

    const globalInventory = [
        ...(Array.isArray(equipmentSource.packaging) ? equipmentSource.packaging : [])
    ];

    const inventory = (globalInventory.length ? globalInventory : defaultInventory)
        .map(normaliseInventoryItem);

    if (typeof window !== 'undefined') {
        window.packagingInventory = inventory;
    }

    function buildInventoryCardsHtml(items, lang) {
        if (!items || !items.length) {
            const emptyText = lang === 'fa'
                ? 'هیچ تجهیزی برای این دسته ثبت نشده است.'
                : (lang === 'ps' ? 'په دې ډله کې کوم تجهیزات نشته.' : 'No items are currently registered for this group.');
            return `<div class="no-equipment">${emptyText}</div>`;
        }

        const viewText = lang === 'fa' ? 'مشاهده PDF' : (lang === 'ps' ? 'PDF وګورئ' : 'View PDF');
        const downloadText = lang === 'fa' ? 'دانلود' : (lang === 'ps' ? 'ډاونلوډ' : 'Download');

        const cards = items.map(item => `
            <div class="equipment-card">
                <div class="equipment-icon">${item.icon || '📄'}</div>
                <h4>${localise(item.name, lang)}</h4>
                <p>${localise(item.description, lang)}</p>
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

    function showPackagingCategoryModal(categoryId, lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');
        const category = categories.find(entry => entry.id === categoryId);
        const items = inventory.filter(item => item.category === categoryId);

        if (!modal || !modalContent || !category) {
            return;
        }

        const title = localise(category.title, lang);
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

    function showPackagingInventoryModal(lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');

        if (!modal || !modalContent) {
            return;
        }

        const backText = lang === 'fa' ? 'بازگشت' : (lang === 'ps' ? 'بېرته' : 'Back');
        const sectionTitle = localise(content.inventoryTitle, lang);

        const sectionsHtml = categories.map(category => {
            const items = inventory.filter(item => item.category === category.id);
            const categoryTitle = `${category.icon} ${localise(category.title, lang)}`;
            const description = localise(category.description, lang);
            const descriptionMarkup = description ? `<p class="inventory-category-description">${description}</p>` : '';
            return `
                <section class="second-hand-inventory-category">
                    <h4 class="inventory-category-title">${categoryTitle}</h4>
                    ${descriptionMarkup}
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

    function renderInventory(lang) {
        const title = document.getElementById('packagingInventoryTitle');
        const subtitle = document.getElementById('packagingInventorySubtitle');
        const container = document.getElementById('packagingInventoryGrid');
        const section = document.getElementById('packaging-inventory');

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
        const title = document.getElementById('packagingAssuranceTitle');
        const subtitle = document.getElementById('packagingAssuranceSubtitle');
        const grid = document.getElementById('packagingAssuranceGrid');

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
        const title = document.getElementById('packagingProcessTitle');
        const subtitle = document.getElementById('packagingProcessSubtitle');
        const grid = document.getElementById('packagingProcessTimeline');

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
        processSteps.forEach(stage => {
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
        const cta = document.getElementById('viewPackagingInventoryButton');
        if (cta && !cta.dataset.boundModal) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showPackagingInventoryModal(getLanguage());
            });
            cta.dataset.boundModal = 'true';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updatePage();
        setupInteractions();
    });

    window.updatePackagingPage = () => {
        updatePage();
        setupInteractions();
    };

    window.showPackagingCategoryModal = showPackagingCategoryModal;
    window.showPackagingInventoryModal = showPackagingInventoryModal;
})();
