/**
 * Cargo page plan for Codex
 *
 * GOAL:
 * Implement the "Cargo / Freight from China to Afghanistan" page
 * with three languages: Afghan Dari (fa), English (en), Pashto (ps).
 *
 * IMPORTANT RULES:
 * - In all DARI (fa) text USE «انتقال» instead of «ارسال» when talking about shipping.
 * - Use Afghan Dari terms: گدام، فابریکه، پرزه‌جات، ترانسپورت، مارکیت، ستندرد…
 * - Keep hero + cards layout similar to existing cargo page.
 * - Mention:
 *    • Warehouses in Guangzhou, Yiwu, Qingdao, Herat, Mazar, Kabul, Ghazni
 *    • Road transport with trailer trucks
 *    • Sea routes via Bandar Abbas and Chabahar
 *    • Borders: Abu Nasr Farahi (Mahiroud) and Islam Qala (Dogharoun)
 * - Time section H2 in Dari MUST be:
 *    «مدت زمان انتقال بار از چین به افغانستان»
 * - Only ONE <h1> per language page. In the React page, you render one language at a time.
 */

export type Lang = 'fa' | 'en' | 'ps';

export interface PageMeta {
  title: string;
  description: string;
}

export interface HeroContent {
  title: string;      // H1
  subtitle: string;   // under H1
  quote: string;      // hero quote
}

export interface ButtonPair {
  primary: string;
  secondary: string;
}

export interface RouteButtonLabels {
  view: string;
  download: string;
}

export interface Card {
  title: string;      // H3
  body: string;
  pdfUrl?: string;
}

export interface SectionWithCards {
  heading: string;    // H2
  intro?: string;
  cards: Card[];
}

export interface SectionWithBody {
  heading: string;    // H2
  body: string;
  illustration?: string;
  illustrationAlt?: string;
}

export interface Step {
  body: string;
}

export interface StepSection {
  heading: string;    // H2
  steps: Step[];
}

export interface FaqItem {
  question: string;   // H3
  answer: string;
}

export interface FaqSection {
  heading: string;    // H2
  items: FaqItem[];
}

export interface CtaSection {
  heading: string;    // H2
  body: string;
}

export interface CargoPageContent {
  hero: HeroContent;
  heroButtons: ButtonPair;
  integratedCargo: SectionWithCards;
  routes: SectionWithCards;
  routeButtons: RouteButtonLabels;
  routeBadge: string;
  cost: SectionWithBody;
  time: SectionWithBody;          // time H2 includes مدت زمان انتقال...
  steps: StepSection;
  warehouses: SectionWithBody;
  industries: SectionWithBody;
  faq: FaqSection;
  cta: CtaSection;
  ctaButtons: ButtonPair;
}

/**
 * SEO KEYWORDS (Dari) – for reference / Codex:
 *
 * کارگو و حمل بار از چین به افغانستان
 * باربری از چین به افغانستان
 * انتقال کالا از چین به افغانستان
 * هزینه حمل و نقل از چین به افغانستان
 * مدت زمان انتقال بار از چین به افغانستان
 * راهنمای گام به گام حمل و نقل از چین به افغانستان
 * چگونه می‌توانم یک کانتینر از چین به افغانستان انتقال دهم؟
 * انتقال بار از چین به افغانستان چقدر طول می‌کشد؟
 */

/* =========================
   2. SEO META PER LANGUAGE
   ========================= */

export const cargoPageMeta: Record<Lang, PageMeta> = {
  fa: {
    title: 'کارگو و حمل بار از چین به افغانستان | باربری، هزینه حمل و مدت زمان انتقال با صنعتچی',
    description:
      'کارگو و حمل بار از چین به افغانستان با صنعتچی؛ انتقال بار از گوانگجو، ایوو و چینگ‌داو به هرات، مزار شریف، کابل و غزنی. باربری چین–افغانستان، هزینه حمل و مدت زمان انتقال بار از چین به افغانستان و راهنمای گام‌به‌گام ترانسپورت تا درب فابریکه یا گدام شما.'
  },
  en: {
    title: 'Cargo and Freight from China to Afghanistan | Shipping Cost & Transit Time with Sanaatchi',
    description:
      'Sanaatchi provides cargo and freight services from China to Afghanistan – from Guangzhou, Yiwu and Qingdao to Herat, Mazar, Kabul and Ghazni. Learn about shipping cost from China to Afghanistan, transit time and step-by-step shipping guidance, plus support for industrial design, sourcing and implementation.'
  },
  ps: {
    title: 'له چین څخه افغانستان ته کارګو او بار وړل | لګښت، موده او باربري له صنعتچي سره',
    description:
      'صنعتچي له چین څخه افغانستان ته د کارګو او بار وړلو خدمتونه برابروي؛ له ګوانګجو، ایوو او چینګداو څخه تر هرات، مزار، کابل او غزني پورې. د لېږد لګښت، د بار لېږد موده او ګام په ګام لارښود، او د صنعتي پروژو لپاره د ډیزاین، سورسینګ او تطبیق ملاتړ.'
  }
};

/* =========================
   3. FULL CONTENT PER LANGUAGE
   ========================= */

export const cargoPageContent: Record<Lang, CargoPageContent> = {
  /* ---------- DARI (fa) ---------- */
  fa: {
    hero: {
      title: 'کارگو و حمل بار از چین به افغانستان',
      subtitle:
        'انتقال بار از چین به افغانستان از راه ریل، دریا و سرک، با مدیریت کامل تمام مراحل توسط صنعتچی و گدام‌ها در گوانگجو، ایوو، چینگ‌داو، هرات، مزار شریف، کابل و غزنی.',
      quote:
        'از تحویل‌گیری مال در چین تا رساندن آن به درب فابریکه یا گدام شما در افغانستان، تیم صنعتچی هر قدم سفر کارگو چین–افغانستان را برای شما مدیریت می‌کند.'
    },
    heroButtons: {
      primary: 'درخواست نرخ حمل',
      secondary: 'مشاهده مسیرها'
    },

    integratedCargo: {
      heading: 'مدیریت یک‌پارچه کارگو چین به افغانستان',
      intro:
        'صنعتچی کارگو و حمل بار از چین به افغانستان را به‌گونه‌ای مدیریت می‌کند که تمام حلقه‌های زنجیرۀ لوژستیک – از طراحی مسیر و هم‌آهنگی با عرضه‌کننده‌گان در چین، تا ترخیص گمرکی و تحویل در افغانستان – در یک چارچوب واحد و شفاف قرار می‌گیرد. تمرکز ما بر کارگو چین–افغانستان برای ماشین‌آلات، خطوط تولید، پرزه‌جات، مواد خام و مال عمومی تجارتی است.',
      cards: [
        {
          title: 'سه دهلیز اصلی ترانسپورتی',
          body:
            'ریل تا حیرتان، حمل دریایی از طریق بندر عباس و چابهار، و گزینه‌های ترانسپورت سرکی از چین به افغانستان؛ تمام این دهلیزها بر اساس نوع مال، وزن، حجم و وقت تحویل شما انتخاب و طرح می‌شود.'
        },
        {
          title: 'ماشین‌آلات، مواد خام و مال عمومی',
          body:
            'تمرکز ما بر انتقال ماشین‌آلات صنعتی، خطوط تولید، پرزه‌جات و مواد خام می‌باشد، و در کنار آن جنسات مصرفی و مال عمومی برای مارکیت‌ها و فروشگاه‌ها را نیز از چین به افغانستان انتقال می‌دهیم.'
        },
        {
          title: 'طراحی، سورسینگ و پشتیبانی پروژه‌های صنعتی',
          body:
            'برای پروژه‌های صنعتی، از مراحل نخست طراحی پروسه تولید، انتخاب و سورسینگ ماشین‌آلات در چین، تا زمان‌بندی انتقال برای نصب در فابریکۀ شما در افغانستان، در کنار شما هستیم تا پروژه با کمترین ریسک و بیشترین بهره‌وری اجرا شود.'
        },
        {
          title: 'زمان‌بندی، رهگیری و اسناد کامل',
          body:
            'زمان‌بندی حرکت محموله‌ها، گزارش‌های رهگیری و تمام اسناد – از بل تجارتی و پکینگ لست تا کاغذهای گمرکی – در یک مسیر منظم و شفاف در اختیار تیم شما قرار می‌گیرد تا بتوانید پلان فروش و تولید خود را دقیق تنظیم کنید.'
        }
      ]
    },

    routes: {
      heading: 'مسیرهای ترانسپورت چین به افغانستان',
      intro:
        'دهلیز ریلی چین–حیرتان، ترانسپورت سرکی با تریلر تراک‌ها، و مسیرهای دریایی از بندرهای چین به بندر عباس و چابهار، با عبور از سرحدهای ابو نصر فراهی (ماهیرود) و اسلام‌قلعه (دوغارون)، اساس شبکۀ حمل چین–افغانستان را می‌سازد.',
      cards: [
        {
          title: 'دهلیز ریلی چین – حیرتان',
          body:
            'دهلیز ریل برای انتقال کانتینر و مال پروژه‌ای از شهرهای داخل چین تا حیرتان؛ مناسب فابریکه‌ها و پروژه‌هایی که به وقت انتقال ثابت و قیمت مناسب ضرورت دارند.',
          pdfUrl: 'pdf/route-rail-china-hairatan-rate.pdf'
        },
        {
          title: 'ترانسپورت سرکی از چین تا حیرتان (تریلر تراک‌ها)',
          body:
            'ترانسپورت مستقیم سرکی از چین تا سرحد افغانستان با استفاده از تریلر تراک‌ها (موترهای تریلری)؛ مناسب برای مال‌هایی که حساس به وقت هستند یا امکان حرکت با ریل را ندارند.',
          pdfUrl: 'pdf/route-road-china-hairatan-rate.pdf'
        },
        {
          title: 'ترانسپورت داخلی از حیرتان به شهرهای افغانستان',
          body:
            'ترانسپورت موترهای باربری از حیرتان به شهرهایی چون مزار شریف، کابل، هرات، غزنی و سایر ساحات صنعتی افغانستان برای توزیع منظم مال در داخل کشور.',
          pdfUrl: 'pdf/route-road-hairatan-afghanistan-rate.pdf'
        },
        {
          title: 'مسیر دریایی چین – بندر عباس – افغانستان',
          body:
            'حمل دریایی از بندرهای چین تا بندر عباس و بعد ترانسپورت سرکی با تریلر تراک‌ها از داخل ایران و عبور از سرحد ابو نصر فراهی (ماهیرود) و سرحد اسلام‌قلعه (دوغارون) به داخل افغانستان؛ مناسب برای مال‌های حجیم و مواد خام با اولویت قیمت مناسب است.',
          pdfUrl: 'pdf/route-sea-china-bandar-abbas-rate.pdf'
        },
        {
          title: 'مسیر دریایی چین – چابهار – افغانستان',
          body:
            'مسیر ترکیبی دریا و سرک از طریق چابهار، با استفاده از تریلر تراک‌ها از داخل ایران و عبور از سرحد ابو نصر فراهی (ماهیرود) و سرحد اسلام‌قلعه (دوغارون) به داخل افغانستان؛ انتخاب بسیار مناسب برای مال‌هایی است که مقصد اصلی‌شان هرات و شهرهای غرب و جنوب افغانستان می‌باشد.',
          pdfUrl: 'pdf/route-sea-china-chabahar-rate.pdf'
        },
        {
          title: 'خدمات گمرک و ترخیص محموله‌ها',
          body:
            'انجام کامل تشریفات گمرکی برای محموله‌های چین–افغانستان، شامل آماده‌سازی اسناد، HS Code و هم‌آهنگی با ادارات گمرک در نقطۀ سرحدی، تا مال شما بدون تأخیر غیرضروری وارد افغانستان شود.',
          pdfUrl: 'pdf/customs-services-rate.pdf'
        },
        {
          title: 'بیمۀ بین‌المللی ترانسپورت',
          body:
            'برای محموله‌های چین به افغانستان گزینه‌های مختلف بیمۀ حمل‌ونقل فراهم می‌کنیم تا ماشین‌آلات، مواد خام و جنس نهایی شما در طول راه محافظت شود.',
          pdfUrl: 'pdf/insurance-coverage-rate.pdf'
        }
      ]
    },

    routeButtons: {
      view: 'مشاهده PDF نرخنامه',
      download: 'دانلود PDF نرخنامه'
    },

    routeBadge: 'فعال',

    cost: {
      heading: 'هزینه حمل و نقل از چین به افغانستان – چه چیزها قیمت را تعیین می‌کند؟',
      body:
        'هزینه حمل و نقل از چین به افغانستان به چند نکته اصلی وابسته است: وزن و حجم مال، نوع جنس، مسیر انتخاب‌شده (ریل، دریا یا سرک)، شهر مبدأ و مقصد، و خدمات اضافی مثل معاینه، گدام‌داری، بیمه و پشتیبانی پروژه. با شریک ساختن این جزئیات، ما برای شما یک پیش‌نهاد واضح و جزئی می‌فرستیم تا دقیق بدانید انتقال بار از چین به افغانستان چقدر قیمت می‌شود.',
      illustration: 'images/storyset-transport.svg',
      illustrationAlt: 'تصویر هزینه‌های حمل و نقل'
    },

    time: {
      heading: 'مدت زمان انتقال بار از چین به افغانستان',
      body:
        'وقت انتقال بار از چین به افغانستان معمولاً بین ۱۲ تا ۴۰ روز است. ریل چین–حیرتان در حدود ۱۵ تا ۲۵ روز، ترانسپورت مستقیم سرکی با تریلر تراک‌ها حدود ۱۲ تا ۲۰ روز، و مسیرهای دریایی + سرکی از طریق بندر عباس یا چابهار – با عبور از سرحدهای ابو نصر فراهی (ماهیرود) و اسلام‌قلعه (دوغارون) – در مجموع حدود ۲۵ تا ۴۰ روز وقت می‌گیرد. در هر پیش‌نهاد، ما یک بازۀ زمانی واقعی می‌دهیم تا بدانید مدت زمان انتقال بار از چین به افغانستان چقدر است و بتوانید پلان دقیق برای تجارت خود تنظیم کنید.',
      illustration: 'images/storyset-event.svg',
      illustrationAlt: 'تصویر زمان‌بندی حمل بار'
    },

    steps: {
      heading: 'راهنمای گام‌به‌گام برای حمل مال از چین به افغانستان',
      steps: [
        {
          body:
            'انتقال معلومات مال – نوع جنس، وزن، حجم، شهر مبدأ در چین و شهر مقصد در افغانستان را برای ما می‌فرستید.'
        },
        {
          body:
            'دریافت مشوره مسیر و قیمت – ما میان گزینه‌های ریل، دریا و سرک مقایسه کرده و مسیر و قیمت مناسب را پیشنهاد می‌کنیم.'
        },
        {
          body:
            'رساندن مال به گدام‌های ما در چین – عرضه‌کننده‌گان شما مال را به گوانگجو، ایوو یا چینگ‌داو انتقال می‌دهند.'
        },
        {
          body:
            'چک، گدام و تجمیع – ما مال را چک و گدام کرده، و در صورت نیاز خرده‌بارها را با هم یک‌جا ساخته و در کانتینر یا محموله بزرگ‌تر آماده می‌کنیم.'
        },
        {
          body:
            'ترانسپورت بین‌المللی – حرکت مال از طریق دهلیز ریلی، مسیر دریایی یا سرکی تا حیرتان، بندر عباس، چابهار یا سرحد توافق‌شده انجام می‌شود.'
        },
        {
          body:
            'ترخیص گمرکی و ترانسپورت داخلی – تیم ما تشریفات گمرکی را انجام داده و موترهای باربری داخل افغانستان را تا شهر مقصد هماهنگ می‌سازد.'
        },
        {
          body:
            'تحویل نهایی و پشتیبانی نصب – مال در فابریکه، گدام یا ساحۀ پروژه تسلیم داده می‌شود و برای ماشین‌آلات صنعتی، در هماهنگی نصب و راه‌اندازی نیز کمک می‌کنیم.'
        }
      ]
    },

    warehouses: {
      heading: 'گدام‌های ما در گوانگجو، ایوو، چینگ‌داو، هرات، مزار شریف، کابل و غزنی',
      body:
        'صنعتچی یک شبکۀ دوطرفه گدام را فعال ساخته است: در چین، گدام‌های ما در گوانگجو برای سفارش‌های تکراری و پرزه‌جات، در ایوو برای خرده‌بارهای مخلوط و خرید از مارکیت‌های عمده‌فروشی، و در چینگ‌داو برای مال صنعتی و پروژه‌ای از شمال و شرق چین استفاده می‌شود. در افغانستان، گدام‌های ما در هرات (برای مسیر چابهار و سرحد غرب)، مزار شریف (نزدیک ریل حیرتان)، کابل (مرکز تجارتی کشور) و غزنی (برای پروژه‌های صنعتی در مناطق مرکزی و جنوبی) قرار دارند و توزیع مال را آسان می‌سازند.',
      illustration: 'images/storyset-work.svg',
      illustrationAlt: 'تصویر شبکه گدام‌ها'
    },

    industries: {
      heading: 'کدام نوع مال و کدام سکتورهای صنعتی را پوشش می‌دهیم؟',
      body:
        'ما ماشین‌آلات و خطوط تولید صنعتی، پرزه‌جات و قطعات، تجهیزات کارگاهی و ساختمانی، خطوط پروسس مواد غذایی و نوشیدنی، مواد بسته‌بندی، اجناس برقی و الکترونیکی و مال عمومی مصرفی را از چین به افغانستان حمل می‌کنیم. برای جنساتی که حساس یا محدودیت دارند، قبل از انتقال، شرایط و امکان آن را با شما بررسی می‌کنیم تا مطابق قانون و با کمترین ریسک حرکت داده شود.',
      illustration: 'images/storyset-people.svg',
      illustrationAlt: 'تصویر سکتورهای صنعتی'
    },

    faq: {
      heading: 'سوالات متداول درباره کارگو و حمل بار از چین به افغانستان',
      items: [
        {
          question: 'چگونه می‌توانم یک کانتینر از چین به افغانستان انتقال دهم؟',
          answer:
            'جزئیات مال و شهر مقصد را با ما شریک بسازید. عرضه‌کنندۀ شما جنس را به یکی از گدام‌های ما در گوانگجو، ایوو یا چینگ‌داو انتقال می‌دهد. ما کانتینر را بارگیری کرده، ترانسپورت بین‌المللی، ترخیص گمرکی و رساندن آن تا فابریکه یا گدام شما در افغانستان را یک‌جا مدیریت می‌کنیم، بدون این‌که مجبور باشید با چندین واسطه کار کنید.'
        },
        {
          question: 'انتقال بار از چین به افغانستان چقدر طول می‌کشد؟',
          answer:
            'بسته به مسیر، معمولاً بین ۱۲ تا ۴۰ روز. ریل چین–حیرتان حدود ۱۵ تا ۲۵ روز، ترانسپورت سرکی با تریلر تراک‌ها حدود ۱۲ تا ۲۰ روز و مسیرهای دریایی + سرکی از طریق بندر عباس یا چابهار معمولاً ۲۵ تا ۴۰ روز وقت می‌گیرد. در هر آفر، بازۀ زمانی واقعی برای محمولۀ شما نوشته می‌شود.'
        },
        {
          question: 'برای انتقال مال از چین به افغانستان چه مدارکی لازم است؟',
          answer:
            'معمولاً بل تجارتی، پکینگ لست، HS Code و اسناد شرکت یا شخص گیرنده در افغانستان لازم است. برای بعضی اجناس، جوازهای اضافی مانند صحی یا ستندرد نیز مورد نیاز می‌باشد که قبل از انتقال توسط تیم ما برای شما تشریح می‌گردد.'
        },
        {
          question: 'آیا خرده‌بار را هم می‌گیرید یا فقط کانتینر کامل؟',
          answer:
            'بلی، ما هم خرده‌بار (LCL) و هم کانتینر کامل (FCL) را می‌پذیریم. مال خورد شما می‌تواند در گدام‌های ما در چین جمع و با محموله‌های دیگر یک‌جا شده تا قیمت حمل برای شما مناسب‌تر شود.'
        },
        {
          question: 'کدام نوع مال را نمی‌توان انتقال داد؟',
          answer:
            'اجناس ممنوعه مانند کیمیاویات خطرناک، سلاح و چیزهایی که زیر تحریم‌های بین‌المللی قرار دارند قابل انتقال نیستند. برای هر جنس حساس، لطفاً HS Code و تشریح آن را برای ما بفرستید تا معلوم شود انتقال آن ممکن است یا نه.'
        }
      ]
    },

    cta: {
      heading: 'درخواست نرخ کارگو از چین به افغانستان',
      body:
        'آماده هستید مال را از چین به افغانستان انتقال دهید یا یک پروژۀ صنعتی را شروع نمایید؟ جزئیات مال یا پروژه را از طریق واتس‌اپ، تماس تلیفون یا فارم تماس ویب‌سایت برای ما بفرستید؛ ما برای شما گزینه‌های مسیر، هزینه حمل و مدت زمان انتقال بار از چین به افغانستان را به زودی شریک می‌سازیم.'
    },

    ctaButtons: {
      primary: 'درخواست مشاوره حمل',
      secondary: 'هماهنگی با تیم فروش'
    }
  },

  /* ---------- ENGLISH (en) ---------- */
  en: {
    hero: {
      title: 'Cargo & Freight from China to Afghanistan',
      subtitle:
        'Shipping goods from China to Afghanistan by rail, sea and road, with end-to-end management by Sanaatchi and warehouse hubs in Guangzhou, Yiwu, Qingdao, Herat, Mazar, Kabul and Ghazni.',
      quote:
        'From supplier pickup in China to factory delivery in Afghanistan, the Sanaatchi team manages every step of your China–Afghanistan cargo journey.'
    },
    heroButtons: {
      primary: 'Request freight quote',
      secondary: 'View routes'
    },

    integratedCargo: {
      heading: 'Integrated China–Afghanistan cargo management',
      intro:
        'Sanaatchi manages your entire cargo and freight flow from China to Afghanistan in one integrated chain – route design, coordination with suppliers in China, international shipping, customs clearance and final delivery across Afghanistan.',
      cards: [
        {
          title: 'Three core transport corridors',
          body:
            'Rail to Hairatan, sea freight via Bandar Abbas and Chabahar, and road options from China to Afghanistan – selected based on your cargo type, weight, volume and delivery deadline.'
        },
        {
          title: 'Machinery, raw materials & general cargo',
          body:
            'We handle industrial machinery, production lines, spare parts and raw materials as well as consumer and retail cargo from China to Afghanistan.'
        },
        {
          title: 'Design, sourcing & project support',
          body:
            'For industrial projects, we support you from early process design and equipment sourcing in China to scheduling deliveries for installation at your factory in Afghanistan.'
        },
        {
          title: 'Scheduling, tracking & documentation',
          body:
            'Shipment schedules, tracking updates and all documentation – invoice, packing list and customs papers – are kept organised and transparent for your team.'
        }
      ]
    },

    routes: {
      heading: 'China–Afghanistan transport routes',
      intro:
        'The main routes moving containers, machinery and raw materials from China to Afghanistan include the China–Hairatan rail corridor, direct road by trailer trucks, and sea routes via Bandar Abbas and Chabahar entering Afghanistan through the Abu Nasr Farahi (Mahiroud) and Islam Qala (Dogharoun) borders.',
      cards: [
        {
          title: 'China – Hairatan rail corridor',
          body:
            'Rail freight corridor for containers and project cargo from inland China to Hairatan, ideal for factories that need stable transit times and competitive cost.',
          pdfUrl: 'pdf/route-rail-china-hairatan-rate.pdf'
        },
        {
          title: 'Road transport China – Hairatan (trailer trucks)',
          body:
            'Direct road transport from China to the Afghan border using long-haul trailer trucks, suitable for time-sensitive cargo or goods that cannot use rail.',
          pdfUrl: 'pdf/route-road-china-hairatan-rate.pdf'
        },
        {
          title: 'Hairatan – Afghan cities trucking',
          body:
            'Domestic trucking from Hairatan to Afghan cities including Mazar-e-Sharif, Kabul, Herat, Ghazni and other industrial zones.',
          pdfUrl: 'pdf/route-road-hairatan-afghanistan-rate.pdf'
        },
        {
          title: 'China – Bandar Abbas – Afghanistan sea route',
          body:
            'Sea freight from Chinese ports to Bandar Abbas with onward trailer-truck transport through Iran via the Abu Nasr Farahi (Mahiroud) and Islam Qala (Dogharoun) borders into Afghanistan, ideal for bulky cargo and raw materials.',
          pdfUrl: 'pdf/route-sea-china-bandar-abbas-rate.pdf'
        },
        {
          title: 'China – Chabahar – Afghanistan sea route',
          body:
            'Combined sea and road route via Chabahar, using trailer trucks through Iran via the Abu Nasr Farahi (Mahiroud) and Islam Qala (Dogharoun) borders into Afghanistan – a strong option for cargo destined mainly for Herat and western or southern Afghanistan.',
          pdfUrl: 'pdf/route-sea-china-chabahar-rate.pdf'
        },
        {
          title: 'Customs & clearance services',
          body:
            'Full customs handling for China–Afghanistan shipments, including document preparation, HS codes and coordination with border authorities.',
          pdfUrl: 'pdf/customs-services-rate.pdf'
        },
        {
          title: 'International transport insurance',
          body:
            'Cargo insurance options for shipments from China to Afghanistan, protecting machinery, raw materials and finished goods in transit.',
          pdfUrl: 'pdf/insurance-coverage-rate.pdf'
        }
      ]
    },

    routeButtons: {
      view: 'View rate PDF',
      download: 'Download rate PDF'
    },

    routeBadge: 'Active',

    cost: {
      heading: 'Shipping cost from China to Afghanistan – what affects the price?',
      body:
        'Shipping cost from China to Afghanistan depends on weight and volume, cargo type, chosen route (rail, sea or road), origin and destination cities, and extra services such as inspection, storage, insurance or project support. Share these details and we will send a clear, itemised quote so you know exactly how much it costs.',
      illustration: 'images/storyset-transport.svg',
      illustrationAlt: 'Illustration of shipping cost planning'
    },

    time: {
      heading: 'Transit time for cargo from China to Afghanistan',
      body:
        'Transit time from China to Afghanistan usually ranges between 12 and 40 days. Rail China–Hairatan often takes 15–25 days, direct road by trailer trucks around 12–20 days, and sea plus road via Bandar Abbas or Chabahar – entering Afghanistan through the Abu Nasr Farahi (Mahiroud) or Islam Qala (Dogharoun) borders – around 25–40 days in total. Every quotation includes a realistic time window so you can plan confidently.',
      illustration: 'images/storyset-event.svg',
      illustrationAlt: 'Illustration showing transit time planning'
    },

    steps: {
      heading: 'Step-by-step guide to shipping from China to Afghanistan',
      steps: [
        {
          body:
            'You send us cargo details – type of goods, weight, volume, origin city in China and destination in Afghanistan.'
        },
        {
          body:
            'We compare rail, sea and road options and send you route and price suggestions.'
        },
        {
          body:
            'Your suppliers deliver goods to our warehouses in Guangzhou, Yiwu or Qingdao.'
        },
        {
          body:
            'We check, store and, if needed, consolidate your shipments into LCL or full containers.'
        },
        {
          body:
            'We arrange international transport to Hairatan, Bandar Abbas, Chabahar or another agreed border.'
        },
        {
          body:
            'Our team handles customs clearance and organises trucking inside Afghanistan.'
        },
        {
          body:
            'We deliver to your factory, warehouse or project site and, for industrial equipment, help coordinate installation and start-up.'
        }
      ]
    },

    warehouses: {
      heading: 'Warehouses in Guangzhou, Yiwu, Qingdao, Herat, Mazar, Kabul and Ghazni',
      body:
        'Sanaatchi operates a two-way warehouse network: in China (Guangzhou for repeat orders and spare parts, Yiwu for mixed LCL and wholesale purchases, and Qingdao for industrial and project cargo from North and East China) and in Afghanistan (Herat for cargo via Chabahar and western borders, Mazar-e-Sharif near Hairatan rail, Kabul as the commercial centre, and Ghazni serving central and southern projects).',
      illustration: 'images/storyset-work.svg',
      illustrationAlt: 'Illustration of the Sanaatchi warehouse network'
    },

    industries: {
      heading: 'What types of cargo and industries do we support?',
      body:
        'We move industrial machinery and production lines, spare parts and components, workshop and construction equipment, food and beverage processing lines, packaging materials, electrical and electronic goods and general consumer products. For restricted or sensitive cargo we first check feasibility and conditions with you so that everything complies with regulations.',
      illustration: 'images/storyset-people.svg',
      illustrationAlt: 'Illustration of industries and teams we support'
    },

    faq: {
      heading: 'Frequently asked questions about cargo and freight from China to Afghanistan',
      items: [
        {
          question: 'How can I send a full container from China to Afghanistan?',
          answer:
            'Share your cargo details and destination with us. Your supplier delivers the goods to one of our warehouses in Guangzhou, Yiwu or Qingdao. We load the container, arrange international transport, handle customs clearance and organise delivery to your factory or warehouse in Afghanistan, so you do not need separate agents for each step.'
        },
        {
          question: 'How long does shipping from China to Afghanistan take?',
          answer:
            'Depending on route and season, transit time is typically 12–40 days. Rail China–Hairatan often takes 15–25 days, direct road by trailer trucks around 12–20 days, and sea plus road via Bandar Abbas or Chabahar about 25–40 days. We always provide a realistic time window in your quotation.'
        },
        {
          question: 'What documents are required?',
          answer:
            'Normally a commercial invoice, packing list, HS codes and consignee/company documents in Afghanistan are required. Some goods need extra permits such as health or standards; we will inform you before shipment.'
        },
        {
          question: 'Can you handle small shipments, not only full containers?',
          answer:
            'Yes. We handle both LCL (small shipments) and FCL (full containers). Small cargo can be consolidated in our China warehouses so you still get efficient rates.'
        },
        {
          question: 'What types of cargo can you not ship?',
          answer:
            'We cannot ship prohibited items such as dangerous chemicals, weapons and goods under international sanctions. For any sensitive cargo, please send us the HS code and description so we can confirm if it is allowed.'
        }
      ]
    },

    cta: {
      heading: 'Request a China–Afghanistan cargo quote',
      body:
        'Ready to ship from China to Afghanistan or start an industrial project? Send us your cargo or project details via WhatsApp, phone or the contact form, and we’ll reply with route options, shipping cost and realistic transit time.'
    },

    ctaButtons: {
      primary: 'Request logistics consultation',
      secondary: 'Coordinate with sales team'
    }
  },

  /* ---------- PASHTO (ps) ---------- */
  ps: {
    hero: {
      title: 'له چین څخه افغانستان ته کارګو او بار وړل',
      subtitle:
        'مال له چین څخه افغانستان ته د رېل، سمندر او سړک له لارې لېږدوو، د صنعتچي د ټیم په بشپړ مدیریت سره، له ګوانګجو، ایوو او چینګداو څخه تر هرات، مزار، کابل او غزني پورې.',
      quote:
        'له عرضه کوونکي څخه د مال راخستل، تر فابریکې او ګدام پورې تحویل، د چین–افغانستان د کارګو ټول پړاوونه د صنعتچي ټیم څاري او پر مخ وړي.'
    },
    heroButtons: {
      primary: 'د لېږد بیه وغواړئ',
      secondary: 'مسیرونه وګورئ'
    },

    integratedCargo: {
      heading: 'د چین–افغانستان د کارګو یوځای مدیریت',
      intro:
        'صنعتچي ستاسو د چین–افغانستان د کارګو ټول بهیر په یوه سلسله کې سمبالوي؛ له مسیر ټاکنې او له عرضه کوونکو سره له همغږۍ څخه، تر نړیوال ترانسپورت، ګمرکي ترخیص او په افغانستان کې تر وروستي تحویله پورې.',
      cards: [
        {
          title: 'درې اساسي د ترانسپورت لارې',
          body:
            'رېل تر حیرتان، د بندر عباس او چابهار له لارې سمندري لېږد، او د چین–افغانستان د سړک لارې؛ ټول د مال د ډول، وزن، حجم او د تحویل د وخت له مخې ټاکل کېږي.'
        },
        {
          title: 'ماشين آلات، خام مواد او عمومي مالونه',
          body:
            'موږ په صنعتي ماشین آلاتو، تولیدي لاینونو، پرزو او خامو موادو تمرکز لرو، او له چین څخه مصرفي او دوکانې مالونه هم افغانستان ته لېږدوو.'
        },
        {
          title: 'ډیزاین، سورسینګ او د پروژې ملاتړ',
          body:
            'د صنعتي پروژو لپاره له پیل څخه د پروسې ډیزاین، په چین کې د تجهیزاتو سورسینګ، او د فابریکې د نصب لپاره د تحویلي مهالویش په برابرولو کې مرسته کوو.'
        },
        {
          title: 'مهالویش، تعقیب او بشپړ اسناد',
          body:
            'د لېږد مهالویش، د تعقیب راپورونه او ټول اسناد – له انویس او پیکنګ لست څخه نیولې تر ګمرکي کاغذونو – ستاسو له ټیم سره په روڼ ډول شریکېږي.'
        }
      ]
    },

    routes: {
      heading: 'د چین–افغانستان د ترانسپورت مسیرونه',
      intro:
        'اصلي لارې په کې د چین–حیرتان د رېل دهلیز، د ټریلر ټرکونو له لارې مستقیم سړک، او د بندر عباس او چابهار له لارې سمندري + سړک لاره شامله ده، چې د ابو نصر فراهی (ماهیرود) او د اسلام قلعه (دوغارون) له سرحدونو افغانستان ته ننوځي.',
      cards: [
        {
          title: 'د چین – حیرتان د رېل دهلیز',
          body:
            'د رېل دهلیز چې کانتینرونه او پروژوي مالونه له چیني ښارونو څخه تر حیرتان پورې لېږدوي؛ د هغو فابریکو لپاره مناسب دی چې ثابته موده او مناسب لګښت غواړي.',
          pdfUrl: 'pdf/route-rail-china-hairatan-rate.pdf'
        },
        {
          title: 'د چین – حیرتان سرک ترانسپورت (ټریلر ټرکونه)',
          body:
            'مستقیم سړکيز ترانسپورت له چین څخه تر د افغانستان تر پوله، د اوږدمهاله ټریلر ټرکونو په وسیله؛ د هغه مال لپاره چې وخت ورته مهم وي یا د رېل له لارې نه شي تلای، ښه حل دی.',
          pdfUrl: 'pdf/route-road-china-hairatan-rate.pdf'
        },
        {
          title: 'له حیرتان څخه تر افغان ښارونو موټري ترانسپورت',
          body:
            'د موټر ترانسپورت خدمتونه له حیرتان څخه مزار شریف، کابل، هرات، غزني او نورو صنعتي سیمو ته برابروو.',
          pdfUrl: 'pdf/route-road-hairatan-afghanistan-rate.pdf'
        },
        {
          title: 'د چین – بندر عباس – افغانستان سمندري لاره',
          body:
            'له چیني بندرونو څخه بندر عباس ته سمندري لېږد، او وروسته د ټریلر ټرکونو په وسیله د ایران له لارې د ابو نصر فراهی (ماهیرود) او د اسلام قلعه (دوغارون) له پولې افغانستان ته داخلېږي؛ د درنو او خامو موادو لپاره ارزانه او مناسب انتخاب دی.',
          pdfUrl: 'pdf/route-sea-china-bandar-abbas-rate.pdf'
        },
        {
          title: 'د چین – چابهار – افغانستان ګډه سمندري او سرکي لاره',
          body:
            'د چابهار له لارې د سمندر او سړک ګډ مسیر، چې ټریلر ټرکونه د ایران له لارې د ابو نصر فراهی (ماهیرود) او د اسلام قلعه (دوغارون) له پولې افغانستان ته راولي؛ د هغه مال لپاره ډېر قوي انتخاب دی چې اساسي هدف یې هرات او د افغانستان لوېدیځ او جنوبي سیمې وي.',
          pdfUrl: 'pdf/route-sea-china-chabahar-rate.pdf'
        },
        {
          title: 'د ګمرک او ترخیص خدمتونه',
          body:
            'د چین–افغانستان محمولو لپاره د ګمرک ټول تشریفات ترسره کوو؛ اسناد چمتو کوو، HS کودونه تنظیموو او له سرحدي ادارو سره همغږي کوو.',
          pdfUrl: 'pdf/customs-services-rate.pdf'
        },
        {
          title: 'نړیوال د ترانسپورت بیمه',
          body:
            'له چین څخه افغانستان ته د محمولو لپاره د ترانسپورت بیمه برابروو، څو ماشین آلات، خام مواد او پای مال مو په سفر کې خوندي وي.',
          pdfUrl: 'pdf/insurance-coverage-rate.pdf'
        }
      ]
    },

    routeButtons: {
      view: 'د نرخنامې PDF کتنه',
      download: 'د نرخنامې PDF ښکته کول'
    },

    routeBadge: 'فعال',

    cost: {
      heading: 'له چین څخه افغانستان ته د لېږد لګښت – کوم څه په قیمت اغېزه کوي؟',
      body:
        'د چین څخه افغانستان ته د بار وړلو لګښت په وزن او حجم، د مال په ډول، د لارې په انتخاب (رېل، سمندر یا سړک)، د مبدأ او هدف په ښارونو او اضافي خدمتونو لکه تفتیش، ګدام، بیمه او د پروژې ملاتړ پورې تړلی دی. کله چې دا معلومات راکړئ، موږ درته روښانه او مفصل آفر لېږو.',
      illustration: 'images/storyset-transport.svg',
      illustrationAlt: 'د لېږد لګښت انځور'
    },

    time: {
      heading: 'د چین څخه افغانستان ته د بار لېږد موده',
      body:
        'عموماً له ۱۲ تر ۴۰ ورځو پورې وخت نیسي. د چین–حیرتان رېل شاوخوا ۱۵–۲۵ ورځې، د ټریلر ټرکونو مستقیم سړک شاوخوا ۱۲–۲۰ ورځې، او د بندر عباس یا چابهار له لارې د سمندر او سړک ګډ لېږد – چې د ابو نصر فراهی (ماهیرود) او اسلام قلعه (دوغارون) له سرحدونو افغانستان ته ننوځي – نږدې ۲۵–۴۰ ورځې وخت اخلي. په هر آفر کې واقعي موده درته لیکو څو وکولای شئ خپل کاروباري پلان جوړ کړئ.',
      illustration: 'images/storyset-event.svg',
      illustrationAlt: 'د لېږد مودې انځور'
    },

    steps: {
      heading: 'له چین څخه افغانستان ته د بار لېږد ګام په ګام لارښود',
      steps: [
        {
          body:
            'تاسو د مال معلومات رااستوئ – د جنس ډول، وزن، حجم، په چین کې مبدأ او په افغانستان کې هدف ښار.'
        },
        {
          body:
            'موږ د رېل، سمندر او سړک لارې پرتله کوو او مناسب مسیر او قیمت درته وړاندیز کوو.'
        },
        {
          body:
            'ستاسو عرضه کوونکي مال زموږ کوم یو ګدام ته په ګوانګجو، ایوو یا چینګداو کې را لېږي.'
        },
        {
          body:
            'موږ مال معاینه او ګدام کوو او که اړتیا وي څو محموله په یو کانتینر یا LCL کې سره یو ځای کوو.'
        },
        {
          body:
            'نړیوال ترانسپورت تر حیرتان، بندر عباس، چابهار یا بل موافق شوي سرحد پورې تنظیموو.'
        },
        {
          body:
            'زموږ ټیم ګمرکي ترخیص ترسره کوي او د افغانستان دننه د لاریو ترانسپورت برابروي.'
        },
        {
          body:
            'مال ستاسو فابریکې، ګدام یا د پروژې ساحې ته سپارو او د صنعتي ماشین آلاتو لپاره د نصب او د کار د پیل په همغږۍ کې مرسته کوو.'
        }
      ]
    },

    warehouses: {
      heading: 'زموږ ګدامونه په ګوانګجو، ایوو، چینګداو، هرات، مزار، کابل او غزني کې',
      body:
        'صنعتچي د دوو خواوو د ګدامونو شبکه لري: په چین کې ګوانګجو د دوامدارو فرمایشونو او پرزو لپاره، ایوو د ګډو LCL او د عمده بازار د اخیستنو لپاره، او چینګداو د صنعتي او پروژوي مال لپاره، په ځانګړي ډول له شمال او ختیځ چین څخه راتلونکی مال. په افغانستان کې هرات د چابهار او لوېدیځو پولې له لارې د راتلونکي مال لپاره، مزار شریف د حیرتان د رېل تر څنګ، کابل د هېواد تجارتي زړه، او غزني د مرکزي او جنوبي پروژو لپاره کاروو.',
      illustration: 'images/storyset-work.svg',
      illustrationAlt: 'د ګدامونو د شبکې انځور'
    },

    industries: {
      heading: 'کوم ډول مال او کوم صنعتونه پوښوو؟',
      body:
        'موږ صنعتي ماشین آلات او تولیدي لاینونه، پرزې، د ورکشاپ او ساختماني وسایل، د خوړو او مشروباتو پروسس لاینونه، د بسته بندۍ مواد، برقي او الکترونیکي اجناس او عمومي مصرفي مالونه لېږدوو. د حساس یا محدود مال لپاره، له لېږد مخکې له تاسو سره شرایط روښانه کوو څو هر څه له قانون سره سم او د امکان تر حده بې‌ریسکه وي.',
      illustration: 'images/storyset-people.svg',
      illustrationAlt: 'د صنعتونو د ملاتړ انځور'
    },

    faq: {
      heading: 'عامې پوښتنې',
      items: [
        {
          question: 'څنګه یو بشپړ کانتینر له چین څخه افغانستان ته ولېږم؟',
          answer:
            'د مال معلومات او هدف ښار له موږ سره شریک کړئ، عرضه کوونکی مو مال زموږ ګدام ته په ګوانګجو، ایوو یا چینګداو کې لېږي، موږ کانتینر باروو، نړیوال ترانسپورت، ګمرکي ترخیص او تر افغانستان پورې تحویل تنظیموو، نو تاسو ته د هر پړاو لپاره جلا واسطې ته اړتیا نه وي.'
        },
        {
          question: 'له چین څخه افغانستان ته لېږد څومره وخت نیسي؟',
          answer:
            'معمولاً د ۱۲ تر ۴۰ ورځو پورې، چې د لارې او فصل په اساس بدلېږي. د چین–حیرتان رېل شاوخوا ۱۵–۲۵ ورځې، د ټریلر ټرکونو مستقیم سړک شاوخوا ۱۲–۲۰ ورځې، او د بندر عباس یا چابهار له لارې سمندري + سرک لاره شاوخوا ۲۵–۴۰ ورځې وخت اخلي.'
        },
        {
          question: 'کوم اسناد ته اړتیا ده؟',
          answer:
            'عموماً تجارتي انویس، پیکنګ لست، HS کودونه او د ترلاسه کوونکي یا شرکت اسناد په افغانستان کې ضروري وي، او د ځینو مالونو لپاره اضافي صحي یا ستندرد جوازونه غوښتل کېږي چې مخکې له لېږده درته وایو.'
        },
        {
          question: 'یوازې کانتینر یې وړئ که واړه محموله‌ګانې هم؟',
          answer:
            'موږ هم واړه محموله‌ګانې (LCL) او هم بشپړ کانتینرونه (FCL) لېږدوو. واړه مالونه مو په چین کې زموږ په ګدامونو کې سره ټولېږي او له نورو سره یوځای کېږي، څو د لېږد قیمت درته مناسب شي.'
        },
        {
          question: 'کوم ډول مال نه شي لېږدولای؟',
          answer:
            'ممنوع مالونه لکه خطرناک کیمیاوي مواد، وسله او هغه توکي چې تر نړيوالو بندیزونو لاندې وي نه شو لېږدولای. د هر حساس مال لپاره HS کود او تشریح یې راولیږئ څو وګورو چې د لېږد اجازه لري که نه.'
        }
      ]
    },

    cta: {
      heading: 'د چین–افغانستان کارګو لپاره د آفر غوښتنه',
      body:
        'غواړئ له چین څخه افغانستان ته مال ولېږدئ او که صنعتي پروژه پیل کړئ؟ د مال یا پروژې معلومات مو د وېټساپ، تلفون یا د وېب‌سایټ د اړیکې فورمې له لارې راولېږئ؛ موږ به درته د لارې انتخابونه، د لېږد لګښت او اټکلي موده ژر در واستوو.'
    },

    ctaButtons: {
      primary: 'د لېږد مشوره وغواړئ',
      secondary: 'له د پلور ټیم سره همغږي'
    }
  }
};
