(function() {
    const content = {
        hero: {
            title: {
                fa: 'راهکارهای سرمایش و گرمایش صنعتی آماده استقرار',
                en: 'Cooling & Heating Systems Ready to Deploy',
                ps: 'د یخولو او تودوخې سیسټمونه د نصب لپاره چمتو دي'
            },
            subtitle: {
                fa: 'از چیلر و بویلر تا برج خنک‌کن و مبدل حرارتی؛ هر سیستم با طراحی، نصب و تضمین عملکرد ارائه می‌شود.',
                en: 'From chillers and boilers to cooling towers and heat exchangers—delivered with design, installation and performance assurance.',
                ps: 'له چیلرونو او بویلرونو څخه تر د یخولو برجونو او د تودوخې مبادله کوونکو پورې—د ډیزاین، نصب او د فعالیت تضمین سره برابریږي.'
            },
            quote: {
                fa: 'مهندسی بار حرارتی، نقشه‌کشی تأسیسات و آموزش تیم نگهداری در بسته کامل پروژه قرار دارد.',
                en: 'Thermal load engineering, piping layouts and maintenance team training are bundled into every project package.',
                ps: 'د حرارتي بار انجنیري، د پایپ لاین نقشې او د ساتنې د ټیم روزنه د هر پروژې په پیکج کې شامله ده.'
            },
            secondaryCta: {
                fa: 'مشاهده فهرست تجهیزات',
                en: 'View Cooling & Heating Equipment List',
                ps: 'د یخولو او تودوخې تجهیزات وګورئ'
            }
        },
        highlightsTitle: {
            fa: 'چرا سیستم سرمایش و گرمایش را با صنعتچی اجرا کنیم؟',
            en: 'Why Deliver Cooling & Heating with Sanaatchi?',
            ps: 'ولې د یخولو او تودوخې سیستمونه له صنعتچي سره پلي کړو؟'
        },
        highlightsSubtitle: {
            fa: 'تحلیل بار حرارتی، طراحی مدار، نصب و پایش عملکرد را یکپارچه به شما تحویل می‌دهیم.',
            en: 'We unify load analysis, circuit design, installation and performance monitoring under one roof.',
            ps: 'موږ د بار تحلیل، د سرکټ ډیزاین، نصب او د فعالیت څارنه په یوه مرکز کې وړاندې کوو.'
        },
        categoriesTitle: {
            fa: 'گروه‌های اصلی تجهیزات سرمایش و گرمایش',
            en: 'Core Cooling & Heating Equipment Groups',
            ps: 'د یخولو او تودوخې تجهیزاتو بنسټیزې ډلې'
        },
        categoriesSubtitle: {
            fa: 'بین چیلر، بویلر، برج خنک‌کن و مبدل حرارتی متناسب با فرآیند خود انتخاب کنید.',
            en: 'Select from chillers, boilers, cooling towers and heat exchangers to match your process.',
            ps: 'د خپل بهیر له مخې د چیلرونو، بویلرونو، د یخولو برجونو او د تودوخې مبادله کوونکو څخه انتخاب وکړئ.'
        },
        inventoryTitle: {
            fa: 'فهرست فایل‌های فنی سیستم‌های سرمایش و گرمایش',
            en: 'Cooling & Heating Technical Datasheets',
            ps: 'د یخولو او تودوخې تخنیکي معلومات'
        },
        inventorySubtitle: {
            fa: 'مشخصات هر تجهیز را بررسی کنید و فایل PDF سه‌زبانه آن را دانلود نمایید.',
            en: 'Review specifications for every unit and download the trilingual PDF datasheet.',
            ps: 'د هر تجهیز ځانګړتیاوې وګورئ او درې ژبنیز PDF ډاونلوډ کړئ.'
        },
        assuranceTitle: {
            fa: 'خدمات همراه پکیج سرمایش و گرمایش',
            en: 'Services Bundled with Every Cooling & Heating Package',
            ps: 'له هر د یخولو او تودوخې پیکج سره مل خدمات'
        },
        assuranceSubtitle: {
            fa: 'از انتخاب تجهیزات تا پایش بهره‌وری انرژی در دوره بهره‌برداری شما را همراهی می‌کنیم.',
            en: 'We accompany you from equipment selection to long-term energy performance monitoring.',
            ps: 'له تجهیزاتو د انتخاب څخه تر اوږدمهاله د انرژۍ د فعالیت څارنې پورې له تاسو سره یو ځای یو.'
        },
        processTitle: {
            fa: 'روند استقرار سیستم سرمایش و گرمایش',
            en: 'Cooling & Heating Deployment Roadmap',
            ps: 'د یخولو او تودوخې د پلي کولو نقشه'
        },
        processSubtitle: {
            fa: 'چهار گام از ممیزی سایت تا تحویل برنامه نگهداری که پایداری عملیات را تضمین می‌کند.',
            en: 'Four steps from site audit to maintenance handover that protect operational reliability.',
            ps: 'څلور ګامونه له سایټ د ارزونې څخه تر د ساتنې سپارلو پورې چې د عملیاتو اعتبار خوندي کوي.'
        }
    };

    const highlights = [
        {
            icon: '📐',
            title: {
                fa: 'تحلیل بار و طراحی مدار',
                en: 'Load Analysis & Circuit Design',
                ps: 'د بار تحلیل او د سرکټ ډیزاین'
            },
            description: {
                fa: 'مدل‌سازی ظرفیت، انتخاب کمپرسور یا بویلر و تعیین مسیر لوله‌کشی متناسب با شرایط سایت انجام می‌شود.',
                en: 'Capacity modelling, compressor or boiler sizing and piping routes are engineered for your site conditions.',
                ps: 'د ظرفیت ماډل کول، د کمپرسور یا بویلر اندازه ټاکل او د پایپ لاین لارې ستاسو د سایټ له شرایطو سره سم انجنیري کېږي.'
            }
        },
        {
            icon: '⚡',
            title: {
                fa: 'بهینه‌سازی انرژی و کنترل هوشمند',
                en: 'Energy Optimisation & Smart Control',
                ps: 'د انرژۍ اصلاح او هوښیار کنټرول'
            },
            description: {
                fa: 'کنترلرهای اینورتر، سنسورهای دما و رطوبت و سیستم مانیتورینگ آنلاین برای کاهش مصرف انرژی تنظیم می‌شود.',
                en: 'Inverter drives, temperature and humidity sensors plus online monitoring cut energy consumption.',
                ps: 'انورټر ډرایونه، د حرارت او رطوبت سینسرونه او آنلاین څارنه د انرژۍ مصرف راکموي.'
            }
        },
        {
            icon: '🛠️',
            title: {
                fa: 'نصب ایمن و راه‌اندازی مرحله‌ای',
                en: 'Safe Installation & Phased Commissioning',
                ps: 'خوندي نصب او پړاو وار کمیسیون'
            },
            description: {
                fa: 'پایه‌گذاری تجهیزات، تراز لوله‌ها، عایق‌کاری و تست نشتی طبق استانداردهای بین‌المللی انجام می‌شود.',
                en: 'Equipment anchoring, piping alignment, insulation and leak testing follow international standards.',
                ps: 'د تجهیزاتو بنسټ ایښوول، د پایپ لاین همغږي، عایق او د لیک ازموینه د نړیوالو معیارونو له مخې ترسره کېږي.'
            }
        },
        {
            icon: '📊',
            title: {
                fa: 'پایش و خدمات دوره‌ای',
                en: 'Performance Monitoring & Service',
                ps: 'د فعالیت څارنه او خدمت'
            },
            description: {
                fa: 'گزارش‌های عملکردی، برنامه تعویض قطعات و آموزش تیم بهره‌برداری برای پایداری سیستم ارائه می‌شود.',
                en: 'Performance reports, spare replacement schedules and operator coaching keep systems stable.',
                ps: 'د فعالیت راپورونه، د پرزو د بدلون مهالویش او د اپراتور روزنه سیستمونه باثباته ساتي.'
            }
        }
    ];

    const categories = [
        {
            id: 'chiller',
            icon: '❄️',
            title: {
                fa: 'چیلرهای صنعتی',
                en: 'Industrial Chillers',
                ps: 'صنعتي چیلرونه'
            },
            description: {
                fa: 'چیلر هواخنک و آب‌خنک با مدارهای فشار بالا و مدیریت انرژی برای خطوط تولید و ساختمان‌های صنعتی.',
                en: 'Air-cooled and water-cooled chillers with high-pressure circuits and energy management for plants and facilities.',
                ps: 'د هوا یخ او د اوبو یخ چیلرونه د لوړ فشار سرکټونو او د انرژۍ مدیریت سره د فابریکو او تأسیساتو لپاره.'
            }
        },
        {
            id: 'boiler',
            icon: '🔥',
            title: {
                fa: 'بویلرهای بخار و آب‌گرم',
                en: 'Steam & Hot-Water Boilers',
                ps: 'د بخار او ګرمو اوبو بویلرونه'
            },
            description: {
                fa: 'بویلر بخار و آب‌گرم با سیستم‌های ایمنی چندگانه و کنترل احتراق برای کاربردهای صنعتی و تجاری.',
                en: 'Steam and hot-water boilers with multi-layer safety and combustion control for industrial or commercial duty.',
                ps: 'د بخار او ګرمو اوبو بویلرونه د څو پوړیز خوندیتوب او د احتراق کنټرول سره د صنعتي او تجارتي کار لپاره.'
            }
        },
        {
            id: 'cooling-tower',
            icon: '🌬️',
            title: {
                fa: 'برج‌های خنک‌کن صنعتی',
                en: 'Industrial Cooling Towers',
                ps: 'صنعتي د یخولو برجونه'
            },
            description: {
                fa: 'برج خنک‌کن مدار باز و مدار بسته با فن‌های مقاوم و پکینگ ضد رسوب برای مدارهای فرآیندی.',
                en: 'Open- and closed-loop cooling towers with durable fans and anti-fouling packing for process circuits.',
                ps: 'خلاص او تړلي سرکټ د یخولو برجونه د مقاومت لرونکو فینونو او د رسوب ضد پیکنګ سره د پروسې لپاره.'
            }
        },
        {
            id: 'heat-exchanger',
            icon: '♨️',
            title: {
                fa: 'مبدل‌های حرارتی صنعتی',
                en: 'Industrial Heat Exchangers',
                ps: 'صنعتي د تودوخې مبادله کوونکي'
            },
            description: {
                fa: 'مبدل صفحه‌ای و پوسته-لوله برای انتقال گرما میان سیالات فرآیندی با طراحی بهینه فشار.',
                en: 'Plate and shell-and-tube exchangers transferring heat between process fluids with optimised pressure drops.',
                ps: 'د پلیټ او پوسته-پایپ مبادله کوونکي چې د پروسې د مایعاتو تر منځ تودوخه د فشار د مناسب کمښت سره انتقالوي.'
            }
        }
    ];

    const defaultInventory = [
        {
            name: {
                fa: 'چیلر هواخنک',
                en: 'Air-Cooled Chiller',
                ps: 'د هوا یخ چیلر'
            },
            description: {
                fa: 'چیلر هواخنک با کمپرسور اسکرال اینورتر و کندانسور فین‌دار مناسب آب‌وهوای گرم افغانستان.',
                en: 'Air-cooled chiller with inverter scroll compressors and finned condensers built for Afghanistan climates.',
                ps: 'د هوا یخ چیلر د انورټر سکرو کمپرسورونو او فین لرونکو کندنسرو سره چې د افغانستان د اقلیم لپاره جوړ شوی.'
            },
            pdfUrl: 'pdfs/cooling-heating/chiller/air-cooled-chiller.pdf',
            category: 'chiller',
            icon: '❄️'
        },
        {
            name: {
                fa: 'چیلر آب‌خنک',
                en: 'Water-Cooled Chiller',
                ps: 'د اوبو یخ چیلر'
            },
            description: {
                fa: 'چیلر آب‌خنک با اواپراتور پوسته-لوله و برج خنک‌کن سازگار برای فرآیندهای پیوسته.',
                en: 'Water-cooled chiller featuring shell-and-tube evaporator paired with cooling tower for continuous duty.',
                ps: 'د اوبو یخ چیلر د پوسته-پایپ ایواپراتور او د یخولو برج سره د دوامداره کار لپاره.'
            },
            pdfUrl: 'pdfs/cooling-heating/chiller/water-cooled-chiller.pdf',
            category: 'chiller',
            icon: '💧'
        },
        {
            name: {
                fa: 'قطعات مصرفی چیلر',
                en: 'Chiller Spare Parts Kit',
                ps: 'د چیلر اضافي پرزې'
            },
            description: {
                fa: 'ست فیلتر درایر، سنسور فشار، شیر انبساط و برد کنترل برای نگهداری دوره‌ای چیلر.',
                en: 'Filter driers, pressure sensors, expansion valves and controller boards for preventative maintenance.',
                ps: 'د فلټر ډرایرونه، د فشار سینسرونه، د پراخېدو والونه او کنټرول بورډونه د مخنیوي ساتنې لپاره.'
            },
            pdfUrl: 'pdfs/cooling-heating/chiller/chiller-parts.pdf',
            category: 'chiller',
            icon: '🧰'
        },
        {
            name: {
                fa: 'بویلر بخار',
                en: 'Steam Boiler',
                ps: 'د بخار بویلر'
            },
            description: {
                fa: 'بویلر لوله‌آتشی با مشعل دوگانه‌سوز، کنترل سطح آب و سیستم ایمنی شعله برای خطوط تولید.',
                en: 'Fire-tube steam boiler with dual-fuel burner, water level control and flame safety for production lines.',
                ps: 'د اورلوله بخار بویلر د دوه ډوله سون توکو سوځونکي، د اوبو د سطح کنټرول او د لمبې خوندیتوب سره.'
            },
            pdfUrl: 'pdfs/cooling-heating/boiler/steam-boiler.pdf',
            category: 'boiler',
            icon: '🌫️'
        },
        {
            name: {
                fa: 'بویلر آب‌گرم',
                en: 'Hot-Water Boiler',
                ps: 'د ګرمو اوبو بویلر'
            },
            description: {
                fa: 'بویلر چدنی مدولار با کنترل دمای خروجی و پمپ‌های سیرکولاسیون با راندمان بالا.',
                en: 'Modular cast-iron hot-water boiler with outlet temperature control and high-efficiency circulation pumps.',
                ps: 'مدولر چدن ګرمو اوبو بویلر د وتلو د حرارت کنټرول او لوړ موثریت دوراني پمپونو سره.'
            },
            pdfUrl: 'pdfs/cooling-heating/boiler/hot-water-boiler.pdf',
            category: 'boiler',
            icon: '🔥'
        },
        {
            name: {
                fa: 'قطعات یدکی بویلر',
                en: 'Boiler Spare Parts Kit',
                ps: 'د بویلر اضافي پرزې'
            },
            description: {
                fa: 'ست پمپ تغذیه، گیج، مشعل و لوله‌های آتشدان برای کاهش توقف سیستم.',
                en: 'Feed pumps, gauges, burners and furnace tubes packaged to minimise downtime.',
                ps: 'د فیډ پمپونه، ګیجونه، سوځونکي او د اور خونو پایپونه د سیسټم د درېدلو د کمولو لپاره.'
            },
            pdfUrl: 'pdfs/cooling-heating/boiler/boiler-parts.pdf',
            category: 'boiler',
            icon: '🔩'
        },
        {
            name: {
                fa: 'فن برج خنک‌کن',
                en: 'Cooling Tower Fan Assembly',
                ps: 'د یخولو برج فین ټولګه'
            },
            description: {
                fa: 'فن فایبرگلاس با موتور ضدزنگ و توازن دینامیکی برای گردش هوای یکنواخت.',
                en: 'Fiberglass fan set with anti-corrosion motor and dynamic balancing for uniform airflow.',
                ps: 'د فایبر ګلاس فین ټولګه د زنګ ضد موټور او متحرک توازن سره د یوشان هوا جریان لپاره.'
            },
            pdfUrl: 'pdfs/cooling-heating/cooling-tower/tower-fan.pdf',
            category: 'cooling-tower',
            icon: '🌬️'
        },
        {
            name: {
                fa: 'پکینگ و مدیا برج',
                en: 'Cooling Tower Fill Media',
                ps: 'د یخولو برج ډکول'
            },
            description: {
                fa: 'مدیا PVC ضد رسوب با سطح انتقال حرارت بالا و مقاومت در برابر اشعه UV.',
                en: 'Anti-fouling PVC fill media with high heat-transfer surface and UV resistance.',
                ps: 'د رسوب ضد PVC ډکول د لوړ تودوخې انتقال سطحې او د UV مقاومت سره.'
            },
            pdfUrl: 'pdfs/cooling-heating/cooling-tower/tower-filling.pdf',
            category: 'cooling-tower',
            icon: '🧱'
        },
        {
            name: {
                fa: 'قطعات یدکی برج خنک‌کن',
                en: 'Cooling Tower Spare Parts Kit',
                ps: 'د یخولو برج اضافي پرزې'
            },
            description: {
                fa: 'نازل پاشش، قطره‌گیر، موتور و گیربکس برای نگهداری برج خنک‌کن.',
                en: 'Spray nozzles, drift eliminators, motors and gearboxes for tower maintenance.',
                ps: 'د سپرې نوزلونه، د څاڅکو مخنیوی کوونکي، موټورونه او ګیربکسونه د برج د ساتنې لپاره.'
            },
            pdfUrl: 'pdfs/cooling-heating/cooling-tower/tower-parts.pdf',
            category: 'cooling-tower',
            icon: '⚙️'
        },
        {
            name: {
                fa: 'مبدل حرارتی صفحه‌ای',
                en: 'Plate Heat Exchanger',
                ps: 'د پلیټ د تودوخې مبادله کوونکی'
            },
            description: {
                fa: 'مبدل صفحه‌ای گسکت‌دار با قابلیت CIP و طراحی جریان مخالف برای کارایی بالا.',
                en: 'Gasketed plate exchanger with CIP capability and counterflow design for high efficiency.',
                ps: 'د ګاسکټ لرونکی پلیټ مبادله کوونکی د CIP وړتیا او د مقابل لوري جریان ډیزاین سره د لوړ موثریت لپاره.'
            },
            pdfUrl: 'pdfs/cooling-heating/heat-exchanger/plate-heat-exchanger.pdf',
            category: 'heat-exchanger',
            icon: '♨️'
        },
        {
            name: {
                fa: 'مبدل حرارتی پوسته-لوله',
                en: 'Shell & Tube Heat Exchanger',
                ps: 'د پوسته او پایپ د تودوخې مبادله کوونکی'
            },
            description: {
                fa: 'مبدل پوسته-لوله با باندل قابل تعویض، بافل ضد لرزش و تست هیدرواستاتیک کامل.',
                en: 'Shell-and-tube exchanger with removable bundle, anti-vibration baffles and full hydrostatic testing.',
                ps: 'د پوسته او پایپ مبادله کوونکی د بدلیدونکي بونډل، د لړزې ضد بفلونو او بشپړ هایدروستاتیک ازموینې سره.'
            },
            pdfUrl: 'pdfs/cooling-heating/heat-exchanger/shell-tube-exchanger.pdf',
            category: 'heat-exchanger',
            icon: '🛢️'
        },
        {
            name: {
                fa: 'قطعات یدکی مبدل حرارتی',
                en: 'Heat Exchanger Service Kit',
                ps: 'د تودوخې مبادله کوونکي خدمت کټ'
            },
            description: {
                fa: 'گسکت، پیچ و ابزار سرویس برای نگهداری دوره‌ای مبدل‌های حرارتی.',
                en: 'Gaskets, bolts and service tools keeping heat exchangers in peak condition.',
                ps: 'ګاسکټونه، بولټونه او د خدمت وسایل چې د تودوخې مبادله کوونکي په ښه حالت کې ساتي.'
            },
            pdfUrl: 'pdfs/cooling-heating/heat-exchanger/exchanger-parts.pdf',
            category: 'heat-exchanger',
            icon: '🔧'
        }
    ];

    const assuranceHighlights = [
        {
            icon: '🧠',
            title: {
                fa: 'میز مهندسی حرارتی صنعتچی',
                en: 'Sanaatchi Thermal Engineering Desk',
                ps: 'د صنعتچي حرارتي انجنیري ډیسک'
            },
            description: {
                fa: 'آنالیز CFD، انتخاب تجهیزات و مدل‌سازی مصرف انرژی توسط تیم مهندسی متخصص انجام می‌شود.',
                en: 'CFD analysis, equipment selection and energy modelling are handled by specialist engineers.',
                ps: 'د CFD تحلیل، د تجهیزاتو انتخاب او د انرژۍ ماډل کول د متخصصو انجینرانو له خوا ترسره کېږي.'
            }
        },
        {
            icon: '📚',
            title: {
                fa: 'مستندسازی و آموزش سه‌زبانه',
                en: 'Trilingual Documentation & Training',
                ps: 'درې ژبنیز اسناد او روزنه'
            },
            description: {
                fa: 'دفترچه‌های بهره‌برداری، چک‌لیست‌های نگهداری و دوره‌های آموزشی به فارسی، انگلیسی و پشتو ارائه می‌شود.',
                en: 'Operation manuals, maintenance checklists and training sessions are delivered in Farsi, English and Pashto.',
                ps: 'د عملیاتو لارښودونه، د ساتنې چک لستونه او روزنیز کورسونه په فارسي، انګلیسي او پښتو کې وړاندې کېږي.'
            }
        },
        {
            icon: '🚚',
            title: {
                fa: 'تامین قطعات و لجستیک سریع',
                en: 'Rapid Spares Supply & Logistics',
                ps: 'د اضافي پرزو چټک تامین او لوژستیک'
            },
            description: {
                fa: 'قطعات حساس از گمرک چین و انبار کابل تامین شده و جدول نگهداری پیشگیرانه برای شما تدوین می‌شود.',
                en: 'Critical parts ship from China customs and Kabul stock with preventative maintenance schedules.',
                ps: 'حساس پرزې له چین ګمرک او د کابل له ګدام څخه استول کېږي او د مخنیوي ساتنې مهالویش جوړېږي.'
            }
        },
        {
            icon: '📡',
            title: {
                fa: 'پایش از راه دور و پاسخ سریع',
                en: 'Remote Monitoring & Rapid Response',
                ps: 'لرې څارنه او چټک غبرګون'
            },
            description: {
                fa: 'سیستم مانیتورینگ آنلاین و تیم پشتیبانی ۲۴/۷ وضعیت عملکرد و هشدارها را پیگیری می‌کند.',
                en: 'Online monitoring and a 24/7 support desk track performance and respond to alerts.',
                ps: 'انلاین څارنه او ۲۴/۷ د ملاتړ ټیم د فعالیت وضعیت او خبرتیاوې تعقیبوي.'
            }
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: {
                fa: 'ممیزی سایت و پروفایل بار',
                en: 'Site Audit & Load Profiling',
                ps: 'د سایټ ارزونه او د بار پروفایل'
            },
            description: {
                fa: 'اندازه‌گیری دما، رطوبت و مصرف انرژی و تعریف سناریوهای بار برای فصل‌های مختلف انجام می‌شود.',
                en: 'Measure temperatures, humidity and energy use to define seasonal load scenarios.',
                ps: 'تودوخه، رطوبت او د انرژۍ کارول اندازه کېږي څو د موسمونو لپاره د بار سناریوګانې وټاکل شي.'
            },
            bullets: [
                { fa: 'جمع‌آوری داده‌های عملیاتی', en: 'Capture operational data', ps: 'د عملیاتو معلومات راټولول' },
                { fa: 'تعیین اهداف ظرفیت و پایداری', en: 'Set capacity and reliability goals', ps: 'د ظرفیت او باور وړ موخو ټاکل' }
            ]
        },
        {
            step: 2,
            title: {
                fa: 'طراحی سیستم و انتخاب تجهیزات',
                en: 'System Design & Equipment Selection',
                ps: 'د سیستم ډیزاین او د تجهیزاتو انتخاب'
            },
            description: {
                fa: 'چیدمان مکانیکی، انتخاب چیلر/بویلر و طراحی کنترلرها بر اساس مدل حرارتی انجام می‌شود.',
                en: 'Mechanical layouts, chiller/boiler selection and control design follow the thermal model.',
                ps: 'میکانیکي ترتیبونه، د چیلر/بویلر انتخاب او د کنټرول ډیزاین د حرارتي ماډل له مخې ترسره کېږي.'
            },
            bullets: [
                { fa: 'تهیه نقشه لوله‌کشی و سازه', en: 'Draft piping and structural drawings', ps: 'د پایپ لاین او ساختماني نقشه چمتو کول' },
                { fa: 'تعیین لیست قطعات و جدول تحویل', en: 'Define bill of materials and delivery plan', ps: 'د موادو لست او د تحویل پلان ټاکل' }
            ]
        },
        {
            step: 3,
            title: {
                fa: 'نصب، تست و راه‌اندازی',
                en: 'Installation, Testing & Commissioning',
                ps: 'نصب، ازموینه او کمیسیون'
            },
            description: {
                fa: 'نصب تجهیزات، اتصال برق و کنترل، شارژ مدار و تست نشتی با حضور تیم متخصص انجام می‌شود.',
                en: 'Install equipment, wire controls, charge circuits and perform leak tests with specialist oversight.',
                ps: 'تجهیزات نصب کړئ، کنټرولونه نښلوئ، سرکټونه چارج کړئ او د متخصصینو تر څار لاندې د لیک ازموینې ترسره کړئ.'
            },
            bullets: [
                { fa: 'اجرای تست عملکرد و ایمنی', en: 'Run performance and safety tests', ps: 'د فعالیت او خوندیتوب ازموینې ترسره کول' },
                { fa: 'تحویل گزارش راه‌اندازی و مستندات', en: 'Deliver commissioning report and documentation', ps: 'د کمیسیون راپور او اسناد سپارل' }
            ]
        },
        {
            step: 4,
            title: {
                fa: 'تحویل برنامه نگهداری و پشتیبانی',
                en: 'Maintenance Handover & Support',
                ps: 'د ساتنې سپارل او ملاتړ'
            },
            description: {
                fa: 'برنامه سرویس دوره‌ای، آموزش اپراتور و تنظیم داشبورد مانیتورینگ برای حفظ کارایی ارائه می‌شود.',
                en: 'Provide preventive service plans, operator training and monitoring dashboards to sustain efficiency.',
                ps: 'د مخنیوي خدمت پلانونه، د اپراتور روزنه او د څارلو ډشبورډونه وړاندې کېږي ترڅو موثریت وساتل شي.'
            },
            bullets: [
                { fa: 'تدوین چک‌لیست‌های نگهداری', en: 'Prepare maintenance checklists', ps: 'د ساتنې چک لستونه جوړول' },
                { fa: 'پشتیبانی ۲۴/۷ و تامین قطعات', en: '24/7 support and spare supply', ps: '۲۴/۷ ملاتړ او اضافي پرزو تامین' }
            ]
        }
    ];

    const categoryIcons = categories.reduce((acc, category) => {
        acc[category.id] = category.icon;
        return acc;
    }, {});

    const itemIcons = {
        'air-cooled-chiller': '❄️',
        'water-cooled-chiller': '💧',
        'chiller-parts': '🧰',
        'steam-boiler': '🌫️',
        'hot-water-boiler': '🔥',
        'boiler-parts': '🔩',
        'tower-fan': '🌬️',
        'tower-filling': '🧱',
        'tower-parts': '⚙️',
        'plate-heat-exchanger': '♨️',
        'shell-tube-exchanger': '🛢️',
        'exchanger-parts': '🔧'
    };

    const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fa');

    function localise(textObject, lang) {
        return textObject?.[lang] || textObject?.fa || '';
    }

    function setHero(lang) {
        const title = document.getElementById('coolingHeatingHeroTitle');
        const subtitle = document.getElementById('coolingHeatingHeroSubtitle');
        const quote = document.getElementById('coolingHeatingHeroQuote');
        const cta = document.getElementById('viewCoolingHeatingInventoryButton');

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
        const title = document.getElementById('coolingHeatingHighlightsTitle');
        const subtitle = document.getElementById('coolingHeatingHighlightsSubtitle');
        const grid = document.getElementById('coolingHeatingHighlightsGrid');

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
        const title = document.getElementById('coolingHeatingCategoriesTitle');
        const subtitle = document.getElementById('coolingHeatingCategoriesSubtitle');
        const grid = document.getElementById('coolingHeatingCategoriesGrid');

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

            const openModal = () => showCoolingHeatingCategoryModal(category.id, lang);

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
        const category = item.category || 'chiller';
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

    const globalInventory = Array.isArray(equipmentSource['cooling-heating'])
        ? equipmentSource['cooling-heating']
        : [];

    const inventory = (globalInventory.length ? globalInventory : defaultInventory)
        .map(normaliseInventoryItem);

    if (typeof window !== 'undefined') {
        window.coolingHeatingInventory = inventory;
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

    function showCoolingHeatingCategoryModal(categoryId, lang = getLanguage()) {
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

    function showCoolingHeatingInventoryModal(lang = getLanguage()) {
        const modal = document.getElementById('equipmentModal');
        const modalContent = document.getElementById('equipmentModalContent');

        if (!modal || !modalContent) {
            return;
        }

        const backText = lang === 'fa' ? 'بازگشت' : (lang === 'ps' ? 'بېرته' : 'Back');

        const sectionsHtml = categories.map(category => {
            const items = inventory.filter(item => item.category === category.id);
            const cardsHtml = buildInventoryCardsHtml(items, lang);
            return `
                <section class="inventory-section">
                    <h3>${localise(category.title, lang)}</h3>
                    ${cardsHtml}
                </section>
            `;
        }).join('');

        modalContent.innerHTML = `
            <div class="equipment-modal-header">
                <button class="back-btn" onclick="closeEquipmentModal()">${backText}</button>
                <h3>${localise(content.inventoryTitle, lang)}</h3>
            </div>
            <div class="inventory-modal-body">
                ${sectionsHtml}
            </div>
        `;

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }

    function renderInventory(lang) {
        const title = document.getElementById('coolingHeatingInventoryTitle');
        const subtitle = document.getElementById('coolingHeatingInventorySubtitle');
        const container = document.getElementById('coolingHeatingInventoryGrid');
        const section = document.getElementById('cooling-heating-inventory');

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
        const title = document.getElementById('coolingHeatingAssuranceTitle');
        const subtitle = document.getElementById('coolingHeatingAssuranceSubtitle');
        const grid = document.getElementById('coolingHeatingAssuranceGrid');

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
        const title = document.getElementById('coolingHeatingProcessTitle');
        const subtitle = document.getElementById('coolingHeatingProcessSubtitle');
        const grid = document.getElementById('coolingHeatingProcessTimeline');

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
        const cta = document.getElementById('viewCoolingHeatingInventoryButton');
        if (cta && !cta.dataset.boundModal) {
            cta.addEventListener('click', event => {
                event.preventDefault();
                showCoolingHeatingInventoryModal(getLanguage());
            });
            cta.dataset.boundModal = 'true';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        updatePage();
        setupInteractions();
    });

    window.updateCoolingHeatingPage = () => {
        updatePage();
        setupInteractions();
    };

    window.showCoolingHeatingCategoryModal = showCoolingHeatingCategoryModal;
    window.showCoolingHeatingInventoryModal = showCoolingHeatingInventoryModal;
})();
