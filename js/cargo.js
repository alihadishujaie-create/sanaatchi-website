(function () {
    // اطمینان از وجود آبجکت ترجمه‌ها
    if (typeof window.translations === 'undefined') {
        window.translations = {};
    }

    // ترجمه‌های مخصوص صفحه کارگو
    const cargoTranslations = {
        // هیرو
        'cargo_eyebrow': {
            fa: 'کارگو و حمل‌ونقل چین – افغانستان',
            ps: 'د چین–افغانستان د کارګو د لېږد مسیرونه',
            en: 'China–Afghanistan cargo & transport'
        },
        'cargo_hero_title': {
            fa: 'کارگو و حمل‌ونقل بین‌المللی',
            ps: 'نړیوال کارګو او ترانسپورت',
            en: 'International cargo & transport'
        },
        'cargo_hero_subtitle': {
            fa: 'مسیرهای حمل و نقل چین – افغانستان',
            ps: 'د چین–افغانستان د لېږد مسیرونه',
            en: 'Transport routes China – Afghanistan'
        },
        'cargo_hero_description': {
            fa: 'در اینجا می‌توانید مسیرهای اصلی حمل کارگو، کانتینر، ماشین‌آلات و مواد اولیه از چین به افغانستان را مشاهده کنید؛ شامل حمل ریلی، دریایی و حمل جاده‌ای با کامیون از حیرتان به شهرهای افغانستان.',
            ps: 'دلته تاسو کولی شئ له چین څخه تر افغانستان پورې د کارګو، کانتینرونو، ماشینونو او خامو موادو اصلي مسیرونه ووینئ؛ پکې رېل، سمندري او د حیرتان څخه د لاریو سړکـي ترانسپورت شامل دي.',
            en: 'Here you can see the main routes for moving cargo, containers, machinery and raw materials from China to Afghanistan via rail, sea and road from Hairatan to Afghan cities.'
        },

        // بدج کارت‌ها
        'badge_active': {
            fa: 'فعال',
            ps: 'فعال',
            en: 'Active'
        },

        // کارت ۱ – ریلی
        'cargo_card_rail_title': {
            fa: 'مسیر ریلی چین – حیرتان',
            ps: 'د چین – حیرتان د رېل کارګو مسیر',
            en: 'Rail route China – Hairatan'
        },
        'cargo_card_rail_desc': {
            fa: 'حمل کانتینر و بارهای سنگین با قطار از شهرهای مختلف چین تا بندر حیرتان؛ مناسب برای ماشین‌آلات، خطوط تولید و مواد اولیه صنعتی.',
            ps: 'له بېلابېلو چینایي ښارونو څخه تر بندر حیرتان پورې د رېل له لارې د کانتینر او درنو صنعتي مالونو لېږد؛ د فابریکې ماشینونو، تولیدي کرښو او خامو موادو لپاره مناسب.',
            en: 'Rail transport of containers and heavy cargo from different Chinese cities to Hairatan; suitable for machinery, production lines and industrial raw materials.'
        },

        // کارت جدید – جاده‌ای چین تا حیرتان
        'cargo_card_road_china_hairatan_title': {
            fa: 'حمل‌ونقل جاده‌ای از چین تا حیرتان',
            ps: 'له چین څخه تر حیرتان پورې د سړک له لارې ترانسپورت',
            en: 'Road transport from China to Hairatan'
        },
        'cargo_card_road_china_hairatan_desc': {
            fa: 'سریع‌ترین و مطمئن‌ترین راه حمل‌ونقل جاده‌ای از چین به مرز حیرتان توسط موترهای تیلری؛ مناسب برای بارهایی که زمان تحویل برای شما مهم است.',
            ps: 'له چین څخه تر حیرتان پورې تر ټولو چټک او باوري سړکـي ترانسپورت د ټیلري موټرو له لارې؛ د هغو مالونو لپاره چې د سپارلو وخت پکې ډېر مهم وي.',
            en: 'The fastest and most reliable road option from China to the Hairatan border by trailer trucks, ideal when delivery time matters.'
        },

        // کارت ۲ – جاده‌ای حیرتان به شهرها
        'cargo_card_road_internal_title': {
            fa: 'حمل جاده‌ای از حیرتان به شهرهای افغانستان',
            ps: 'له حیرتان څخه د افغانستان ښارونو ته کارګو',
            en: 'Road transport from Hairatan to Afghan cities'
        },
        'cargo_card_road_internal_desc': {
            fa: 'پس از رسیدن کانتینر یا بار شما به حیرتان، تیم صنعتچی حمل جاده‌ای با لاری/کامیون به شهرهایی مانند کابل، مزار شریف، بلخ، سمنگان، هرات، قندهار و سایر نقاط افغانستان را مدیریت می‌کند.',
            ps: 'ستاسې کانتینر یا مال چې حیرتان ته ورسېږي، د صنعتچی ټیم یې د لاریو/ټراکونو په وسیله کابل، مزار شریف، بلخ، سمنگان، هرات، کندهار او نورو ښارونو ته رسوي.',
            en: 'Once your container or cargo arrives in Hairatan, the Sanaatchi team manages trucking to Kabul, Mazar-e Sharif, Balkh, Samangan, Herat, Kandahar and other Afghan cities.'
        },

        // کارت ۳ – دریایی بندر عباس
        'cargo_card_sea_bandar_title': {
            fa: 'مسیر دریایی چین – بندر عباس – افغانستان',
            ps: 'د چین – بندر عباس – افغانستان سمندري کارګو مسیر',
            en: 'Sea route China – Bandar Abbas – Afghanistan'
        },
        'cargo_card_sea_bandar_desc': {
            fa: 'حمل دریایی کانتینر از بنادر چین تا بندر عباس و سپس ترانزیت زمینی به افغانستان؛ مناسب برای کانتینرهای کامل، مواد اولیه و تجهیزات پروژه‌ای.',
            ps: 'له چین څخه تر بندر عباس پورې د کانتینر سمندري لېږد، او وروسته د سړک له لارې افغانستان ته ترانزیت؛ د بشپړ کانتینرونو، خامو موادو او پروژوي تجهیزاتو لپاره مناسب.',
            en: 'Sea freight from Chinese ports to Bandar Abbas followed by overland transit to Afghanistan; suitable for full containers, raw materials and project equipment.'
        },

        // کارت ۴ – دریایی چابهار
        'cargo_card_sea_chabahar_title': {
            fa: 'مسیر دریایی چین – چابهار – افغانستان',
            ps: 'د چین – چابهار – افغانستان سمندري کارګو مسیر',
            en: 'Sea route China – Chabahar – Afghanistan'
        },
        'cargo_card_sea_chabahar_desc': {
            fa: 'مسیر اقتصادی برای بارهای حجیم و صنعتی؛ حمل کانتینر از چین تا چابهار و سپس حمل جاده‌ای به شهرهای غرب و جنوب افغانستان مانند هرات و قندهار.',
            ps: 'د حجیم او درنو صنعتي مالونو لپاره مناسب مسیر؛ له چین څخه تر چابهار پورې سمندري کارګو او له هغه ځایه د لاریو په وسیله هرات، کندهار او نورو لوېدیځ او سوېلي ښارونو ته انتقال.',
            en: 'A cost-effective route for bulky industrial cargo; containers move from China to Chabahar and then by road to western and southern Afghan cities like Herat and Kandahar.'
        },

        // کارت ۵ – گمرک
        'cargo_card_customs_title': {
            fa: 'خدمات گمرکی و ترخیص کالا',
            ps: 'د ګمرک او مال ترخیص خدمات',
            en: 'Customs clearance services'
        },
        'cargo_card_customs_desc': {
            fa: 'ارائه مشاوره و انجام تشریفات گمرکی در مرز، ترخیص کانتینر و بارهای صنعتی از حیرتان و سایر مبادی ورودی برای کاهش زمان خواب کالا.',
            ps: 'په سرحد کې د ګمرکي مشورې او تشریفاتو ترسره کول، له حیرتان او نورو بندرونو څخه د کانتینر او صنعتي مالونو ترخیص ترڅو د مال ولاړېدل کم شي.',
            en: 'Consulting and handling customs procedures at the border, clearing containers and industrial cargo from Hairatan and other entry points to minimize dwell time.'
        },

        // کارت ۶ – بیمه
        'cargo_card_insurance_title': {
            fa: 'بیمه حمل و نقل بین‌المللی',
            ps: 'د نړیوال ترانسپورت بیمه',
            en: 'International transport insurance'
        },
        'cargo_card_insurance_desc': {
            fa: 'پوشش بیمه‌ای برای کارگو از لحظه خروج از چین تا تحویل در افغانستان؛ کاهش ریسک‌های مربوط به آسیب، سرقت یا حوادث احتمالی در مسیر حمل.',
            ps: 'له چین څخه د حرکت له لحظې تر افغانستان کې د سپارلو پورې د کارګو لپاره د بیمې پوښښ؛ د زیان، غلا او احتمالي پېښو خطرونه کموي.',
            en: 'Insurance coverage for your cargo from departure in China until delivery in Afghanistan, reducing risks of damage, theft or incidents during transit.'
        },

        // دکمه کارت‌ها
        'cargo_card_cta': {
            fa: 'مشاهده PDF نرخنامه',
            ps: 'د نرخنامې PDF کتنه',
            en: 'View rate PDF'
        },

        // تیتر سئو و CTA
        'cargo_seo_heading': {
            fa: 'چطور بهترین مسیر کارگو چین به افغانستان را انتخاب کنیم؟',
            ps: 'څنګه د چین څخه افغانستان ته د کارګو لپاره تر ټولو ښه مسیر وټاکو؟',
            en: 'How to choose the best China–Afghanistan cargo route?'
        },
        'cargo_cta_title': {
            fa: 'برای کارگو چین به افغانستان با ما تماس بگیرید',
            ps: 'د چین څخه افغانستان ته د کارګو لپاره له موږ سره اړیکه ونیسئ',
            en: 'Contact us for China–Afghanistan cargo'
        },
        'cargo_cta_desc': {
            fa: 'تیم متخصص صنعتچی مسیر مناسب برای بار شما را از میان حمل ریلی، جاده‌ای و دریایی انتخاب کرده و تمام مراحل از هماهنگی در چین تا تحویل در افغانستان را مدیریت می‌کند.',
            ps: 'د صنعتچی متخصص ټیم ستاسو د مال لپاره د رېل، سړک او سمندر له مسیرونو څخه مناسب ترکیب ټاکي او له چین څخه تر افغانستان پورې ټول پړاوونه اداره کوي.',
            en: 'The Sanaatchi team selects the best mix of rail, road and sea for your cargo and manages the whole journey from China to final delivery in Afghanistan.'
        },
        'cargo_cta_primary': {
            fa: 'درخواست قیمت و زمان حمل',
            ps: 'د بیې او د لېږد د وخت غوښتنه',
            en: 'Request price & transit time'
        },
        'cargo_cta_secondary': {
            fa: 'مشاوره رایگان',
            ps: 'وړیا مشوره',
            en: 'Free consultation'
        },

        // FAQ عنوان
        'cargo_faq_heading': {
            fa: 'پرسش‌های متداول درباره کارگو چین به افغانستان',
            ps: 'د چین څخه افغانستان ته د کارګو په اړه پرله‌پسې پوښتنې',
            en: 'Frequently asked questions about China–Afghanistan cargo'
        }
        // اگر خواستی، می‌توانیم بقیه متن‌های سئو و FAQ را هم به‌همین شکل اضافه کنیم
    };

    // ادغام ترجمه‌های این صفحه با ترجمه‌های عمومی سایت
    Object.assign(window.translations, cargoTranslations);

    // فعال کردن لینک منوی کارگو در ناوبری
    document.addEventListener('DOMContentLoaded', function () {
        var nav = document.getElementById('mainNav');
        if (!nav) return;

        var links = nav.querySelectorAll('a');
        links.forEach(function (link) {
            var href = link.getAttribute('href') || '';
            if (href.indexOf('cargo.html') !== -1) {
                link.classList.add('active');
            }
        });
    });
})();
