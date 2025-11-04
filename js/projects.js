// Projects data
const projects = [
    {
        id: 1,
        title: {
            fa: 'پروژه نمک‌گیری صنعتی',
            en: 'Industrial Salt Refinery Project',
            ps: 'د صنعت نمک تصفیه پروژه'
        },
        description: {
            fa: 'تاسیسات کامل برای تولید نمک خوراکی با ظرفیت تولید ۵۰۰ تن در ماه',
            en: 'Complete facility for producing edible salt with a production capacity of 500 tons per month',
            ps: 'د خوراک نمک تولید لپاره بشپړ تاسیسات د میاشت په ۵۰۰ ټنه تولید ظرفیت سره'
        },
        status: 'in-progress',
        pdfUrl: 'pdfs/projects/salt-refinery.pdf'
    },
    {
        id: 2,
        title: {
            fa: 'پروژه خط تولید آدامس',
            en: 'Gum Production Line Project',
            ps: 'د لوسي تولید لین پروژه'
        },
        description: {
            fa: 'خط تولید کامل برای انواع آدامس با ظرفیت تولید ۱۰۰۰ بسته در ساعت',
            en: 'Complete production line for various types of gum with a production capacity of 1000 packs per hour',
            ps: 'د مختلف ډولو لوسو لپاره بشپړ تولید لین د ساعت په ۱۰۰۰ بسته تولید ظرفیت سره'
        },
        status: 'completed',
        pdfUrl: 'pdfs/projects/gum-production.pdf'
    },
    {
        id: 3,
        title: {
            fa: 'پروژه تولید مصالح ساختمانی',
            en: 'Construction Materials Production Project',
            ps: 'د ساختماني موادو تولید پروژه'
        },
        description: {
            fa: 'تاسیسات تولید مصالح ساختمانی شامل بلوک سیمانی و آسفالت',
            en: 'Construction materials production facility including concrete blocks and asphalt',
            ps: 'د ساختماني موادو تولید تاسیسات چې کانکریټ بلاکونه او اسفالټ شامل دي'
        },
        status: 'in-progress',
        pdfUrl: 'pdfs/projects/construction-materials.pdf'
    },
    {
        id: 4,
        title: {
            fa: 'پروژه بازیافت پلاستیک',
            en: 'Plastic Recycling Project',
            ps: 'د پلاستیک بیاګرځول پروژه'
        },
        description: {
            fa: 'تاسیسات بازیافت پلاستیک با ظرفیت پردازش ۲۰۰ تن در روز',
            en: 'Plastic recycling facility with a processing capacity of 200 tons per day',
            ps: 'د پلاستیک بیاګرځونې تاسیسات د ورځ په ۲۰۰ ټنه پروسس ظرفیت سره'
        },
        status: 'in-progress',
        pdfUrl: 'pdfs/projects/plastic-recycling.pdf'
    },
    {
        id: 5,
        title: {
            fa: 'پروژه تولید قطعات الکترونیکی',
            en: 'Electronic Components Production Project',
            ps: 'د الکترونیکي برخو تولید پروژه'
        },
        description: {
            fa: 'خط تولید قطعات الکترونیکی برای صنعت مخابرات',
            en: 'Production line for electronic components for the telecommunications industry',
            ps: 'د مخابرات صنعت لپاره د الکترونیکي برخو تولید لین'
        },
        status: 'completed',
        pdfUrl: 'pdfs/projects/electronic-components.pdf'
    }
];

// Initialize projects page
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    let currentLanguage = 'fa'; // Default language
    
    if (savedLanguage && (savedLanguage === 'fa' || savedLanguage === 'en' || savedLanguage === 'ps')) {
        currentLanguage = savedLanguage;
        
        // Set HTML attributes based on language
        const html = document.documentElement;
        const body = document.body;
        
        if (currentLanguage === 'en') {
            html.setAttribute('lang', 'en');
            html.setAttribute('dir', 'ltr');
            body.style.direction = 'ltr';
            body.style.textAlign = 'left';
        } else {
            html.setAttribute('lang', currentLanguage);
            html.setAttribute('dir', 'rtl');
            body.style.direction = 'rtl';
            body.style.textAlign = 'right';
        }
    }
    
    // Load projects
    loadProjects(currentLanguage);
});

// Load projects
function loadProjects(currentLanguage) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const statusText = project.status === 'in-progress' ? 
            (currentLanguage === 'fa' ? 'در حال اجرا' : 
             currentLanguage === 'ps' ? 'په اجرا کې' : 'In Progress') : 
            (currentLanguage === 'fa' ? 'تکمیل شده' : 
             currentLanguage === 'ps' ? 'کامل شوی' : 'Completed');
        
        const viewText = currentLanguage === 'fa' ? 'مشاهده PDF' : 
                       currentLanguage === 'ps' ? 'PDF وګورئ' : 'View PDF';
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <span class="project-status ${project.status}">${statusText}</span>
            </div>
            <div class="project-body">
                <h3 class="project-title">${project.title[currentLanguage]}</h3>
                <p class="project-description">${project.description[currentLanguage]}</p>
                <div class="project-actions">
                    <a href="${project.pdfUrl}" target="_blank" class="btn-primary">
                        <i class="fas fa-file-pdf"></i> ${viewText}
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}