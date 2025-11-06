(function() {
    const heroContent = {
        title: {
            fa: 'ماشین‌آلات دست دوم تایید شده برای خطوط تولید افغانستان',
            en: 'Certified Second-Hand Machinery for Afghan Production Lines',
            ps: 'د افغانستان د تولیدي لینونو لپاره تایید شوي دوهم لاس ماشینونه'
        },
        subtitle: {
            fa: 'از چاپ و بسته‌بندی تا تجهیزات سنگین؛ هر دستگاه با گزارش فنی، سرویس کامل و تضمین راه‌اندازی تحویل می‌شود.',
            en: 'From printing and packaging to heavy equipment—each asset arrives with technical reports, full servicing, and commissioning support.',
            ps: 'له چاپ او بسته بندۍ څخه تر درندو تجهیزاتو پورې — هر ماشین له تخنیکي راپور، بشپړ سرویس او د فعالولو ملاتړ سره سپارل کېږي.'
        },
        quote: {
            fa: 'پیش از ارسال، ماشین‌آلات توسط تیم بازرسی Sanaatchi در کارخانه فروشنده تست، به‌روزرسانی و آماده نصب می‌شوند.',
            en: 'Before shipping, every machine is inspected, upgraded, and prepared for installation by Sanaatchi’s on-site auditors.',
            ps: 'د لېږد وړاندې هر ماشین زموږ د صنعتچي د پلټنې ټیم له خوا ازمویل، نوى کېږي او د نصب لپاره چمتو کېږي.'
        },
        points: [
            {
                fa: 'گزارش سلامت فنی و ویدیو از تست عملکرد پیش از خرید',
                en: 'Full mechanical health report and pre-purchase test video',
                ps: 'د میخانیکي حالت بشپړ راپور او د پېر مخکینی ټسټ ویډیو'
            },
            {
                fa: 'امکان رزرو کارشناسان Sanaatchi برای بازدید حضوری کارخانه فروشنده',
                en: 'Reserve Sanaatchi inspectors for on-site seller factory visits',
                ps: 'د صنعتچي د تفتیش ټیم له خوا د پلورونکي فابریکې حضوري کتنه'
            },
            {
                fa: 'هماهنگی حمل، گمرک و نصب دوباره در افغانستان',
                en: 'Coordinated logistics, customs clearance, and re-installation in Afghanistan',
                ps: 'همغږي ترانسپورت، ګمرک او په افغانستان کې بیا نصب'
            }
        ],
        secondaryCta: {
            fa: 'مشاهده موجودی دست دوم',
            en: 'Browse Available Inventory',
            ps: 'شته دوهم لاس وسایل وګورئ'
        }
    };

    const categories = [
        {
            id: 'printing-packaging',
            icon: '🖨️',
            title: {
                fa: 'چاپ و بسته‌بندی',
                en: 'Printing & Packaging',
                ps: 'چاپ او بسته بندي'
            },
            description: {
                fa: 'ماشین‌آلات چاپ افست، فلکسو، بسته‌بندی مایع و جامد همراه با تجهیزات تکمیل.',
                en: 'Offset, flexo, and liquid/solid packaging machinery with finishing equipment.',
                ps: 'د افست او فلیکسو چاپ ماشینونه او د مايع او جامد بسته بندۍ تجهیزات.'
            }
        },
        {
            id: 'food-beverage',
            icon: '🥘',
            title: {
                fa: 'فرآوری غذا و نوشیدنی',
                en: 'Food & Beverage Processing',
                ps: 'د خوړو او مشروباتو پروسس'
            },
            description: {
                fa: 'خطوط پرکن، UHT، پاستوریزاسیون و بسته‌بندی برای محصولات لبنی و نوشیدنی.',
                en: 'Filling, UHT, pasteurisation, and packaging lines for dairy and beverages.',
                ps: 'د ډکولو، UHT، پاستور او د لبنیاتو او مشروباتو د بسته بندۍ لینونه.'
            }
        },
        {
            id: 'plastic-recycling',
            icon: '♻️',
            title: {
                fa: 'پلاستیک و بازیافت',
                en: 'Plastics & Recycling',
                ps: 'پلاستیک او ریسایکل'
            },
            description: {
                fa: 'سیستم‌های شست‌وشو، خردایش و گرانول‌سازی برای PET، PP و PE.',
                en: 'Washing, shredding, and pelletising systems for PET, PP, and PE.',
                ps: 'د PET، PP او PE لپاره د مینځلو، پرې کولو او ګرانول کولو سیستمونه.'
            }
        },
        {
            id: 'textile-garments',
            icon: '👕',
            title: {
                fa: 'نساجی و پوشاک',
                en: 'Textile & Garments',
                ps: 'نساجي او کالي'
            },
            description: {
                fa: 'ماشین‌آلات بافندگی، دوخت اتومات و تجهیزات تکمیل پوشاک.',
                en: 'Knitting, automated sewing, and garment finishing equipment.',
                ps: 'د اوبدلو، اتومات ګنډلو او د کالیو د بشپړولو تجهیزات.'
            }
        },
        {
            id: 'construction-heavy',
            icon: '🏗️',
            title: {
                fa: 'ماشین‌آلات سنگین ساختمانی',
                en: 'Construction Heavy Equipment',
                ps: 'د ودانیزو درنو ماشینونه'
            },
            description: {
                fa: 'اکسکاویتور، جرثقیل، لودر و ماشین‌آلات عمرانی آماده کار.',
                en: 'Excavators, cranes, loaders, and construction-ready fleets.',
                ps: 'اکسکاویټرونه، کرینونه، لوډرونه او د ساختماني چارو لپاره چمتو ماشینونه.'
            }
        },
        {
            id: 'logistics-utilities',
            icon: '🚚',
            title: {
                fa: 'لجستیک و نیروگاهی',
                en: 'Logistics & Utilities',
                ps: 'لوژستیک او انرژي'
            },
            description: {
                fa: 'کامیون، لیفتراک، ژنراتور و کمپرسورهای صنعتی آماده بهره‌برداری.',
                en: 'Truck fleets, forklifts, generators, and industrial compressors.',
                ps: 'د ټرکونو بېړۍ، فورک لیفټونه، جنراتورونه او صنعتي کمپرسورونه.'
            }
        }
    ];

    const inventory = {
        'printing-packaging': [
            {
                icon: '🖶',
                name: {
                    fa: 'Heidelberg SM74 پنج رنگ',
                    en: 'Heidelberg SM74 Five-Colour',
                    ps: 'هايدلبرګ SM74 پنځه رنګه'
                },
                summary: {
                    fa: 'دستگاه چاپ افست ۲۰۱8 با سرویس کامل و اتوماسیون صفحه‌گذاری.',
                    en: '2018 offset press with full service history and automated plate change.',
                    ps: 'د ۲۰۱۸ افست چاپ ماشین چې بشپړ خدمت تاریخچه او اتومات پلیټ بدلون لري.'
                },
                meta: [
                    {
                        label: { fa: 'سال ساخت', en: 'Year', ps: 'د جوړېدو کال' },
                        value: { fa: '2018 (اروپا)', en: '2018 (EU)', ps: '۲۰۱۸ (اروپا)' }
                    },
                    {
                        label: { fa: 'ساعت کارکرد', en: 'Run Hours', ps: 'کاري ساعتونه' },
                        value: { fa: '۴۵۰۰ ساعت', en: '4,500 h', ps: '۴۵۰۰ ساعته' }
                    },
                    {
                        label: { fa: 'همراه با', en: 'Includes', ps: 'شامل' },
                        value: { fa: 'CIP3، کولر پلیت، ست کامل غلتک', en: 'CIP3, plate chiller, full roller set', ps: 'CIP3، د پلیټ یخچال، د رولر بشپړ سیټ' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/heidelberg-speedmaster.pdf'
            },
            {
                icon: '📦',
                name: {
                    fa: 'دستگاه پرکن آسپتیک Combibloc',
                    en: 'Combibloc Aseptic Filler',
                    ps: 'کمبی بلاک سترېل ډکونکی'
                },
                summary: {
                    fa: 'پرکن آسپتیک ۱۲۰۰۰ بطری/ساعت با CIP و استریلیزاسیون بخار.',
                    en: '12,000 bph aseptic filler with CIP and steam sterilisation.',
                    ps: '۱۲٬۰۰۰ بوتله/ساعت سترېل ډکونکی د CIP او د بخار سترېلایزېشن سره.'
                },
                meta: [
                    {
                        label: { fa: 'ظرفیت', en: 'Capacity', ps: 'ظرفیت' },
                        value: { fa: '۱۲٬۰۰۰ بطری/ساعت', en: '12,000 bph', ps: '۱۲٬۰۰۰ بوتله/ساعت' }
                    },
                    {
                        label: { fa: 'مدارک', en: 'Documentation', ps: 'اسناد' },
                        value: { fa: 'Manual, Validation IQ/OQ', en: 'Manual, IQ/OQ validation', ps: 'لارښود، د IQ/OQ تایید' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/aseptic-filler.pdf'
            }
        ],
        'food-beverage': [
            {
                icon: '🥛',
                name: {
                    fa: 'خط کامل UHT لبنیات',
                    en: 'Complete Dairy UHT Line',
                    ps: 'د لبنیاتو بشپړ UHT لاین'
                },
                summary: {
                    fa: 'پاستور، استریلیزاسیون و بسته‌بندی تتراپک برای شیر و شیر طعم‌دار.',
                    en: 'Pasteurisation, sterilisation, and Tetra Pak packaging for milk products.',
                    ps: 'د شیدو لپاره پاستور، سترېلایز او ټیټراپک بسته بندي.'
                },
                meta: [
                    {
                        label: { fa: 'ظرفیت', en: 'Capacity', ps: 'ظرفیت' },
                        value: { fa: '۸٬۰۰۰ لیتر/ساعت', en: '8,000 L/h', ps: '۸٬۰۰۰ لیتر/ساعت' }
                    },
                    {
                        label: { fa: 'سال ساخت', en: 'Year', ps: 'کال' },
                        value: { fa: '2016', en: '2016', ps: '۲۰۱۶' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/dairy-uht-line.pdf'
            },
            {
                icon: '🍾',
                name: {
                    fa: 'لاین نوشابه گازدار Krones',
                    en: 'Krones Carbonated Beverage Line',
                    ps: 'د کرونیس ګاز لرونکي مشروباتو لاین'
                },
                summary: {
                    fa: 'بلندر، پرکن ایزوبر و بسته‌بندی کارتن برای نوشابه و انرژی‌درینک.',
                    en: 'Blending, isobaric filling, and carton packing for soft drinks and energy beverages.',
                    ps: 'د نرم مشروباتو لپاره مخلوط، ایزو باریک ډکول او د کارتن بسته بندي.'
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
                pdfUrl: 'pdfs/second-hand/carbonated-beverage-line.pdf'
            }
        ],
        'plastic-recycling': [
            {
                icon: '🆗',
                name: {
                    fa: 'لاین گرانول‌سازی PP/PE',
                    en: 'PP/PE Pelletising Line',
                    ps: 'د PP/PE ګرانول لاین'
                },
                summary: {
                    fa: 'خردکن، شست‌وشو، اکسترودر و گرانولایزر دو مرحله‌ای بازبینی شده.',
                    en: 'Refurbished shredder, washer, twin-stage extruder, and pelletiser.',
                    ps: 'تعمیر شوی پرېکوونکی، مینځونکی، دوه پړاوه اکسترودر او ګرانول جوړوونکی.'
                },
                meta: [
                    {
                        label: { fa: 'ظرفیت', en: 'Output', ps: 'حاصل' },
                        value: { fa: '۶۰۰ کیلوگرم/ساعت', en: '600 kg/h', ps: '۶۰۰ کیلو/ساعت' }
                    },
                    {
                        label: { fa: 'تجهیزات تکمیلی', en: 'Auxiliaries', ps: 'مرستندویه' },
                        value: { fa: 'سیلو ذخیره، سیستم خشک‌کن گازگرم', en: 'Storage silos, hot-air dryer', ps: 'د ذخیرې سایلونه، د ګرمو هوا وچوونکی' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/plastic-pelletizing.pdf'
            },
            {
                icon: '🧼',
                name: {
                    fa: 'خط شست‌وشوی PET',
                    en: 'PET Washing Line',
                    ps: 'د PET د مینځلو لاین'
                },
                summary: {
                    fa: 'شامل تفکیک، آسیاب، وان شست‌وشو و خشک‌کن سانتریفیوژی.',
                    en: 'Includes sorting, grinding, hot washing, and centrifugal drying.',
                    ps: 'د جلا کولو، ګراینډر، ګرمو مینځلو او سانتریفیوژ وچولو سره.'
                },
                meta: [
                    {
                        label: { fa: 'مصرف آب', en: 'Water Usage', ps: 'د اوبو مصرف' },
                        value: { fa: 'قابل بازیافت تا ۷۰٪', en: 'Up to 70% recycling loop', ps: 'تر ۷۰٪ پورې بېرته کارېدونکې اوبه' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/pet-washing.pdf'
            }
        ],
        'textile-garments': [
            {
                icon: '🧵',
                name: {
                    fa: 'ماشین بافندگی گردباف Santoni',
                    en: 'Santoni Circular Knitting Machine',
                    ps: 'سانتوني دایروي اوبدلو ماشین'
                },
                summary: {
                    fa: 'قطر ۳۰ اینچ، گیج ۲۸، بازبینی کامل و تعویض سوزن و جک.',
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
                        value: { fa: 'Jumbo Roll Taker, سیستم روغن‌کاری اتومات', en: 'Jumbo roll taker, automatic lubrication', ps: 'د جمبو رول اخیستونکی، اتومات غوړول' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/circular-knitting.pdf'
            },
            {
                icon: '✂️',
                name: {
                    fa: 'کاتر اتومات اسپردر + CAD',
                    en: 'Automatic Cutter with Spreader & CAD',
                    ps: 'اتومات پرېکوونکی له سپریډر او CAD سره'
                },
                summary: {
                    fa: 'سیستم برش ۹۰ میلی‌متری، میز ۱۸ متری و نرم‌افزار مارکرینگ.',
                    en: '90 mm cutting system, 18 m table, integrated CAD marker making.',
                    ps: '۹۰ ملي متري پرې کولو سیسټم، ۱۸ متره مېز او یوځای CAD مارکر جوړونه.'
                },
                meta: [
                    {
                        label: { fa: 'سازنده', en: 'Manufacturer', ps: 'جوړونکی' },
                        value: { fa: 'Lectra - فرانسه', en: 'Lectra - France', ps: 'لیکټرا - فرانسه' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/garment-cutting.pdf'
            }
        ],
        'construction-heavy': [
            {
                icon: '🚜',
                name: {
                    fa: 'اکسکاویتور Hyundai R220LC-9S',
                    en: 'Hyundai R220LC-9S Excavator',
                    ps: 'د هیونډای R220LC-9S اکسکاویټر'
                },
                summary: {
                    fa: 'مدل ۲۰۱7 با بوم بلند، سیستم هیدرولیک اوریجینال و آماده کار.',
                    en: '2017 model with long boom, original hydraulics, and ready-for-work status.',
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
                pdfUrl: 'pdfs/second-hand/excavator.pdf'
            },
            {
                icon: '🏗️',
                name: {
                    fa: 'جرثقیل برجی Liebherr 132 EC-H',
                    en: 'Liebherr 132 EC-H Tower Crane',
                    ps: 'لیبهیر 132 EC-H د برج کرین'
                },
                summary: {
                    fa: 'بازه ۶۰ متری، ظرفیت ۸ تن، سرویس کامل و تمامی سکشن‌ها موجود.',
                    en: '60 m jib, 8 t capacity, fully serviced with complete mast sections.',
                    ps: '۶۰ متره بازه، ۸ ټنه ظرفیت، بشپړ سرویس او ټول ماست برخې لري.'
                },
                meta: [
                    {
                        label: { fa: 'ارتفاع آزاد', en: 'Free Height', ps: 'ازاد لوړوالی' },
                        value: { fa: '۴۵ متر', en: '45 m', ps: '۴۵ متره' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/crane.pdf'
            }
        ],
        'logistics-utilities': [
            {
                icon: '🚚',
                name: {
                    fa: 'کامیونت‌های Hino Euro IV',
                    en: 'Hino Euro IV Trucks',
                    ps: 'د هینو Euro IV لاري'
                },
                summary: {
                    fa: 'بیست دستگاه ۶ تن با سرویس کامل، آماده حمل بین‌شهری.',
                    en: 'Fleet of twenty 6-ton trucks with complete service records, ready for haulage.',
                    ps: 'د شلو ۶ ټنه لاریو بېړۍ د بشپړ خدمت ریکارډونو سره.'
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
                pdfUrl: 'pdfs/second-hand/trucks-lorries.pdf'
            },
            {
                icon: '🔌',
                name: {
                    fa: 'ژنراتور دیزلی Cummins 500kVA',
                    en: 'Cummins 500 kVA Diesel Generator',
                    ps: 'د کمینز ۵۰۰ kVA ډیزلي جنراتور'
                },
                summary: {
                    fa: 'اورهال کامل، کنترل هوشمند، مناسب برای کارخانه و پروژه‌های معدنی.',
                    en: 'Fully overhauled with smart control, ideal for plants and mining sites.',
                    ps: 'بشپړ ترمیم شوی د هوښیار کنټرول سره، د فابریکو او کانونو لپاره مناسب.'
                },
                meta: [
                    {
                        label: { fa: 'ساعت کارکرد', en: 'Run Hours', ps: 'کاري ساعتونه' },
                        value: { fa: '۳٬۲۰۰ ساعت پس از اورهال', en: '3,200 h after overhaul', ps: '۳٬۲۰۰ ساعته د ترمیم وروسته' }
                    },
                    {
                        label: { fa: 'شامل', en: 'Includes', ps: 'شامل' },
                        value: { fa: 'ATS، تانک سوخت دو جداره، صداگیر', en: 'ATS, double-wall fuel tank, sound enclosure', ps: 'ATS، دوه جداره د تېلو ټانک، غږ بندول' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/diesel-generator.pdf'
            },
            {
                icon: '⚙️',
                name: {
                    fa: 'ایستگاه کمپرسور هوای Atlas Copco',
                    en: 'Atlas Copco Air Compressor Station',
                    ps: 'د اټلس کوپکو د هوا کمپرسور سټېشن'
                },
                summary: {
                    fa: 'دو دستگاه GA90 با خشک‌کن جذبی و مخزن ۳۰۰۰ لیتری آماده بهره‌برداری.',
                    en: 'Twin GA90 compressors with adsorption dryer and 3000 L receiver tank.',
                    ps: 'د GA90 دوه کمپرسورونه د جذب وچوونکي او ۳۰۰۰ لیتره ټانک سره.'
                },
                meta: [
                    {
                        label: { fa: 'فشار کاری', en: 'Working Pressure', ps: 'کاري فشار' },
                        value: { fa: '۱۲ بار', en: '12 bar', ps: '۱۲ بار' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/air-compressor.pdf'
            },
            {
                icon: '🪜',
                name: {
                    fa: 'فورک‌لیف برقی ۳ تن Toyota',
                    en: 'Toyota 3 Ton Electric Forklifts',
                    ps: 'د تویوتا درې ټنه برقي فورک لیفټونه'
                },
                summary: {
                    fa: '۱۲ دستگاه بازسازی شده با باتری لیتیومی و شارژر سریع.',
                    en: '12 refurbished units with lithium batteries and fast chargers.',
                    ps: '۱۲ ترمیم شوي واحدونه د لیتیوم بیټرۍ او چټک چارجرو سره.'
                },
                meta: [
                    {
                        label: { fa: 'ارتفاع لیفت', en: 'Lift Height', ps: 'د پورته کولو لوړوالی' },
                        value: { fa: '۶ متر', en: '6 m', ps: '۶ متره' }
                    }
                ],
                pdfUrl: 'pdfs/second-hand/electric-forklift.pdf'
            }
        ]
    };

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
                en: 'Machines are delivered after replacing consumables and performing standard servicing with a documented checklist.',
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
                fa: 'کارشناسان Sanaatchi وضعیت فنی، لرزش، آلودگی روغن و عمر باقیمانده قطعات کلیدی را مستند می‌کنند.',
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
                fa: 'تکنسین‌های Sanaatchi نصب، هم‌راستایی، تست تولید و انتقال دانش به اپراتورها را انجام می‌دهند.',
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
                    ps: 'څو ژبی تخنیکي راپور برابرول'
                },
                {
                    fa: 'مذاکره قیمت و شرایط تحویل با فروشنده',
                    en: 'Negotiate pricing and delivery terms with the seller',
                    ps: 'له پلورونکي سره د بیې او سپارلو شرایطو خبرې اترې'
                }
            ]
        },
        {
            step: '03',
            title: {
                fa: 'حمل، نصب و راه‌اندازی',
                en: 'Shipping, Installation & Start-up',
                ps: 'لېږد، نصب او فعالول'
            },
            description: {
                fa: 'مدیریت حمل دریایی/زمینی، ترخیص در افغانستان و نصب دوباره تا تحویل خط فعال.',
                en: 'Manage sea/land logistics, Afghan customs clearance, and reinstall lines until production-ready.',
                ps: 'د سمندري/ځمکني لېږد، د افغانستان ګمرکي تصفیه او بیا نصب تر تولید پورې مدیریت.'
            },
            bullets: [
                {
                    fa: 'آموزش تیم بهره‌بردار و تحویل مستندات',
                    en: 'Train operating team and handover documentation',
                    ps: 'د عملیاتو ټیم روزل او اسناد سپارل'
                },
                {
                    fa: 'پشتیبانی پس از راه‌اندازی و تامین قطعات یدکی',
                    en: 'Post-start-up support and spare part sourcing',
                    ps: 'د فعالېدو وروسته ملاتړ او د پرزو برابرول'
                }
            ]
        }
    ];

    let activeCategory = categories.length ? categories[0].id : null;

    function getLanguage() {
        if (typeof currentLanguage !== 'undefined') {
            return currentLanguage;
        }
        const htmlLang = document.documentElement.getAttribute('lang');
        return htmlLang === 'en' || htmlLang === 'ps' ? htmlLang : 'fa';
    }

    function updateHero(lang) {
        const title = document.getElementById('secondHandHeroTitle');
        const subtitle = document.getElementById('secondHandHeroSubtitle');
        const quote = document.getElementById('secondHandHeroQuote');
        const pointsList = document.getElementById('secondHandHeroPoints');
        const inventoryButton = document.getElementById('viewInventoryButton');

        if (title) {
            title.textContent = heroContent.title[lang];
        }
        if (subtitle) {
            subtitle.textContent = heroContent.subtitle[lang];
        }
        if (quote) {
            quote.textContent = heroContent.quote[lang];
        }
        if (pointsList) {
            pointsList.innerHTML = '';
            heroContent.points.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point[lang];
                pointsList.appendChild(li);
            });
        }
        if (inventoryButton) {
            inventoryButton.textContent = heroContent.secondaryCta[lang];
            inventoryButton.onclick = function() {
                scrollToSection('second-hand-inventory');
            };
        }
    }

    function renderCategories(lang) {
        const grid = document.getElementById('secondHandCategories');
        if (!grid) return;

        grid.innerHTML = '';

        categories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            if (category.id === activeCategory) {
                card.classList.add('is-active');
            }
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.dataset.categoryId = category.id;

            card.innerHTML = `
                <span class="icon">${category.icon}</span>
                <h4>${category.title[lang]}</h4>
                <p>${category.description[lang]}</p>
            `;

            card.addEventListener('click', () => {
                activeCategory = category.id;
                renderCategories(lang);
                renderInventory(lang);
            });

            card.addEventListener('keypress', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    activeCategory = category.id;
                    renderCategories(lang);
                    renderInventory(lang);
                }
            });

            grid.appendChild(card);
        });
    }

    function renderInventory(lang) {
        const grid = document.getElementById('secondHandInventoryGrid');
        if (!grid) return;

        const items = inventory[activeCategory] || [];
        grid.innerHTML = '';

        if (!items.length) {
            const empty = document.createElement('div');
            empty.className = 'no-equipment';
            empty.textContent = lang === 'fa' ? 'در حال حاضر موجودی برای این دسته ثبت نشده است.' :
                                 lang === 'ps' ? 'اوس مهال په دې کټګورۍ کې کوم موجودي نشته.' :
                                 'Inventory for this category is not yet available.';
            grid.appendChild(empty);
            return;
        }

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'equipment-card second-hand-card';

            const metaList = (item.meta || []).map(meta => `
                <li>
                    <span>${meta.label[lang]}</span>
                    <strong>${meta.value[lang]}</strong>
                </li>
            `).join('');

            const viewLabel = lang === 'fa' ? 'جزئیات فنی' : lang === 'ps' ? 'تخنیکي معلومات' : 'Technical Dossier';
            const downloadLabel = lang === 'fa' ? 'دانلود' : lang === 'ps' ? 'ډاونلوډ' : 'Download';

            card.innerHTML = `
                <div class="equipment-icon">${item.icon || '🏭'}</div>
                <h4>${item.name[lang]}</h4>
                <p>${item.summary[lang]}</p>
                ${metaList ? `<ul class="second-hand-meta">${metaList}</ul>` : ''}
                <div class="equipment-actions">
                    <a href="${item.pdfUrl}" target="_blank" class="btn-primary">
                        <i class="fas fa-file-alt"></i> ${viewLabel}
                    </a>
                    <a href="${item.pdfUrl}" download class="btn-secondary">
                        <i class="fas fa-download"></i> ${downloadLabel}
                    </a>
                </div>
            `;

            grid.appendChild(card);
        });
    }

    function renderAssurance(lang) {
        const grid = document.getElementById('secondHandAssuranceGrid');
        if (!grid) return;

        grid.innerHTML = '';
        assuranceHighlights.forEach(highlight => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            card.innerHTML = `
                <span class="feature-icon">${highlight.icon}</span>
                <h3>${highlight.title[lang]}</h3>
                <p>${highlight.description[lang]}</p>
            `;
            grid.appendChild(card);
        });
    }

    function renderProcess(lang) {
        const timeline = document.getElementById('secondHandProcessTimeline');
        if (!timeline) return;

        timeline.innerHTML = '';
        processStages.forEach(stage => {
            const card = document.createElement('div');
            card.className = 'process-card';

            const bullets = (stage.bullets || []).map(bullet => `<li>${bullet[lang]}</li>`).join('');

            card.innerHTML = `
                <div class="step">${stage.step}</div>
                <h3>${stage.title[lang]}</h3>
                <p>${stage.description[lang]}</p>
                ${bullets ? `<ul>${bullets}</ul>` : ''}
            `;

            timeline.appendChild(card);
        });
    }

    function updateSectionTitles(lang) {
        const categoriesTitle = document.getElementById('secondHandCategoriesTitle');
        const categoriesSubtitle = document.getElementById('secondHandCategoriesSubtitle');
        const inventoryTitle = document.getElementById('secondHandInventoryTitle');
        const inventorySubtitle = document.getElementById('secondHandInventorySubtitle');
        const assuranceTitle = document.getElementById('secondHandAssuranceTitle');
        const assuranceSubtitle = document.getElementById('secondHandAssuranceSubtitle');
        const processTitle = document.getElementById('secondHandProcessTitle');
        const processSubtitle = document.getElementById('secondHandProcessSubtitle');

        if (categoriesTitle) {
            categoriesTitle.textContent = lang === 'fa' ? 'گروه‌های ماشین‌آلات دست دوم' :
                                           lang === 'ps' ? 'د دوهم لاس ماشین آلات ډلې' :
                                           'Second-Hand Machinery Groups';
        }
        if (categoriesSubtitle) {
            categoriesSubtitle.textContent = lang === 'fa' ? 'دسته مناسب را انتخاب کنید تا فهرست کامل ماشین‌آلات آماده تحویل نمایش داده شود.' :
                                                 lang === 'ps' ? 'مناسبه ډله وټاکئ تر څو د سپارلو لپاره چمتو ماشینونه ووینئ.' :
                                                 'Choose a category to review the ready-to-ship machinery.';
        }
        if (inventoryTitle) {
            inventoryTitle.textContent = lang === 'fa' ? 'فهرست ماشین‌آلات بازبینی‌شده' :
                                            lang === 'ps' ? 'د بیاکتل شویو ماشینونو لست' :
                                            'Refurbished Inventory';
        }
        if (inventorySubtitle) {
            inventorySubtitle.textContent = lang === 'fa' ? 'هر مورد با مشخصات فنی، گزینه‌های تحویل و فایل PDF ارائه شده است.' :
                                                  lang === 'ps' ? 'هر توکی له تخنیکي ځانګړتیاوو، د سپارلو انتخابونو او PDF فایل سره وړاندې کېږي.' :
                                                  'Each listing includes technical specs, delivery options, and a PDF dossier.';
        }
        if (assuranceTitle) {
            assuranceTitle.textContent = lang === 'fa' ? 'چطور کیفیت ماشین‌آلات دست دوم را تضمین می‌کنیم' :
                                            lang === 'ps' ? 'موږ د دوهم لاس ماشینونو کیفیت څنګه تضمینوو' :
                                            'How We Guarantee Second-Hand Quality';
        }
        if (assuranceSubtitle) {
            assuranceSubtitle.textContent = lang === 'fa' ? 'پروتکل‌های فنی Sanaatchi برای بازسازی، بازرسی و پشتیبانی را مشاهده کنید.' :
                                                  lang === 'ps' ? 'د صنعتچي تخنیکي پروتوکولونه د رغونې، پلټنې او ملاتړ لپاره وګورئ.' :
                                                  'Explore Sanaatchi protocols for refurbishment, inspection, and support.';
        }
        if (processTitle) {
            processTitle.textContent = lang === 'fa' ? 'مراحل تأمین ماشین‌آلات دست دوم' :
                                          lang === 'ps' ? 'د دوهم لاس ماشین آلاتو د تدارک مراحلو' :
                                          'Second-Hand Procurement Stages';
        }
        if (processSubtitle) {
            processSubtitle.textContent = lang === 'fa' ? 'سه گام عملی از تعریف نیاز تا نصب نهایی با مدیریت Sanaatchi.' :
                                                   lang === 'ps' ? 'له اړتیا څخه تر نصب پورې درې عملي ګامونه د صنعتچي په مدیریت.' :
                                                   'Three practical phases from requirements to commissioning under Sanaatchi management.';
        }
    }

    function updateSecondHandPageInternal() {
        const lang = getLanguage();
        updateHero(lang);
        updateSectionTitles(lang);
        renderCategories(lang);
        renderInventory(lang);
        renderAssurance(lang);
        renderProcess(lang);
    }

    window.updateSecondHandPage = function() {
        if (!document.body.classList.contains('second-hand-page')) {
            return;
        }
        updateSecondHandPageInternal();
    };

    document.addEventListener('DOMContentLoaded', function() {
        if (document.body.classList.contains('second-hand-page')) {
            updateSecondHandPageInternal();
        }
    });
})();
