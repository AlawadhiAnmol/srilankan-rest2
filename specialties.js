// Global variables
let currentLanguage = 'de';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSpecialtiesPage();
});

// Initialize all specialties page functionality
function initializeSpecialtiesPage() {
    setupLanguageToggle();
    setupNavigation();
    setupMobileMenu();
    setupScrollEffects();
    loadSpecialtiesContent();
    updateLanguage();
}

// Language toggle functionality
function setupLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const currentLangSpan = document.getElementById('currentLang');
    
    // Set initial language
    currentLanguage = localStorage.getItem('language') || 'de';
    currentLangSpan.textContent = currentLanguage.toUpperCase();
    
    langToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
        currentLangSpan.textContent = currentLanguage.toUpperCase();
        localStorage.setItem('language', currentLanguage);
        updateLanguage();
    });
}

// Navigation functionality
function setupNavigation() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Update all text content based on current language
function updateLanguage() {
    updatePageTitle();
    updateHeroSection();
    updateSpecialtiesSection();
    updateCookingProcessSection();
    updateSpiceKnowledgeSection();
    updateCTASection();
    updateFooter();
}

function updatePageTitle() {
    document.title = currentLanguage === 'de' ? 'Spezialitäten - Suriya Kanthi' : 'Specialties - Suriya Kanthi';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const description = currentLanguage === 'de' 
            ? 'Entdecken Sie unsere authentischen Sri Lankan Spezialitäten - traditionelle Gerichte mit besonderen Zutaten und jahrhundertealten Rezepten.'
            : 'Discover our authentic Sri Lankan specialties - traditional dishes with special ingredients and centuries-old recipes.';
        metaDescription.setAttribute('content', description);
    }
    
    // Update language attribute
    document.documentElement.lang = currentLanguage;
}

function updateHeroSection() {
    const heroTitle = document.getElementById('specialtiesHeroTitle');
    const heroSubtitle = document.getElementById('specialtiesHeroSubtitle');
    const viewFullMenuBtn = document.getElementById('viewFullMenuBtn');
    
    if (heroTitle) {
        heroTitle.textContent = currentLanguage === 'de' ? 'Unsere Spezialitäten' : 'Our Specialties';
    }
    
    if (heroSubtitle) {
        heroSubtitle.textContent = currentLanguage === 'de'
            ? 'Entdecken Sie die authentischen Geschmäcker Sri Lankas mit unseren traditionellen Spezialitäten, die nach jahrhundertealten Familienrezepten zubereitet werden.'
            : 'Discover the authentic flavors of Sri Lanka with our traditional specialties, prepared according to centuries-old family recipes.';
    }
    
    if (viewFullMenuBtn) {
        viewFullMenuBtn.textContent = currentLanguage === 'de' ? 'Zur Speisekarte' : 'View Full Menu';
    }
}

function updateSpecialtiesSection() {
    const ourSpecialtiesTitle = document.getElementById('ourSpecialtiesTitle');
    const ourSpecialtiesSubtitle = document.getElementById('ourSpecialtiesSubtitle');
    
    if (ourSpecialtiesTitle) {
        ourSpecialtiesTitle.textContent = currentLanguage === 'de' ? 'Unsere Signature Gerichte' : 'Our Signature Dishes';
    }
    
    if (ourSpecialtiesSubtitle) {
        ourSpecialtiesSubtitle.textContent = currentLanguage === 'de'
            ? 'Jedes Gericht erzählt eine Geschichte der sri-lankischen Tradition'
            : 'Each dish tells a story of Sri Lankan tradition';
    }
}

function updateCookingProcessSection() {
    const cookingProcessTitle = document.getElementById('cookingProcessTitle');
    const cookingProcessSubtitle = document.getElementById('cookingProcessSubtitle');
    
    if (cookingProcessTitle) {
        cookingProcessTitle.textContent = currentLanguage === 'de' ? 'Unser Kochprozess' : 'Our Cooking Process';
    }
    
    if (cookingProcessSubtitle) {
        cookingProcessSubtitle.textContent = currentLanguage === 'de'
            ? 'Traditionelle Methoden mit frischen, hochwertigen Zutaten'
            : 'Traditional methods with fresh, high-quality ingredients';
    }

    // Update process steps
    updateProcessSteps();
}

function updateProcessSteps() {
    const steps = [
        {
            titleId: 'step1Title',
            descId: 'step1Description',
            title: { de: 'Frische Zutaten', en: 'Fresh Ingredients' },
            desc: { 
                de: 'Wir verwenden nur die frischesten Gewürze und Zutaten, viele davon direkt aus Sri Lanka importiert.',
                en: 'We use only the freshest spices and ingredients, many of them imported directly from Sri Lanka.'
            }
        },
        {
            titleId: 'step2Title',
            descId: 'step2Description',
            title: { de: 'Traditionelle Zubereitung', en: 'Traditional Preparation' },
            desc: { 
                de: 'Unsere Gewürzmischungen werden täglich frisch gemahlen und nach traditionellen Methoden zubereitet.',
                en: 'Our spice blends are freshly ground daily and prepared using traditional methods.'
            }
        },
        {
            titleId: 'step3Title',
            descId: 'step3Description',
            title: { de: 'Langsames Kochen', en: 'Slow Cooking' },
            desc: { 
                de: 'Viele unserer Gerichte werden stundenlang bei niedriger Hitze gekocht, um die perfekte Geschmacksharmonie zu erreichen.',
                en: 'Many of our dishes are cooked for hours at low heat to achieve the perfect harmony of flavors.'
            }
        },
        {
            titleId: 'step4Title',
            descId: 'step4Description',
            title: { de: 'Mit Liebe serviert', en: 'Served with Love' },
            desc: { 
                de: 'Jedes Gericht wird mit Stolz und Leidenschaft für die sri-lankische Küche zubereitet und serviert.',
                en: 'Every dish is prepared and served with pride and passion for Sri Lankan cuisine.'
            }
        }
    ];

    steps.forEach(step => {
        const titleElement = document.getElementById(step.titleId);
        const descElement = document.getElementById(step.descId);
        
        if (titleElement) titleElement.textContent = step.title[currentLanguage];
        if (descElement) descElement.textContent = step.desc[currentLanguage];
    });
}

function updateSpiceKnowledgeSection() {
    const spiceKnowledgeTitle = document.getElementById('spiceKnowledgeTitle');
    const spiceKnowledgeSubtitle = document.getElementById('spiceKnowledgeSubtitle');
    
    if (spiceKnowledgeTitle) {
        spiceKnowledgeTitle.textContent = currentLanguage === 'de' ? 'Gewürz-Wissen' : 'Spice Knowledge';
    }
    
    if (spiceKnowledgeSubtitle) {
        spiceKnowledgeSubtitle.textContent = currentLanguage === 'de'
            ? 'Die Geheimnisse der sri-lankischen Gewürzküche'
            : 'The secrets of Sri Lankan spice cuisine';
    }

    // Update spice cards
    updateSpiceCards();
}

function updateSpiceCards() {
    const spices = [
        {
            titleId: 'cinnamonTitle',
            descId: 'cinnamonDescription',
            title: { de: 'Ceylon Zimt', en: 'Ceylon Cinnamon' },
            desc: {
                de: 'Der echte Zimt aus Sri Lanka ist süßer und milder als Cassia-Zimt und verleiht unseren Desserts und Currys eine besondere Note.',
                en: 'True cinnamon from Sri Lanka is sweeter and milder than Cassia cinnamon, giving our desserts and curries a special touch.'
            }
        },
        {
            titleId: 'cardamomTitle',
            descId: 'cardamomDescription',
            title: { de: 'Kardamom', en: 'Cardamom' },
            desc: {
                de: 'Das "Königin der Gewürze" verleiht unseren Gerichten ein intensives, leicht süßliches Aroma mit zitrusartigen Noten.',
                en: 'The "Queen of Spices" gives our dishes an intense, slightly sweet aroma with citrusy notes.'
            }
        },
        {
            titleId: 'curryLeavesTitle',
            descId: 'curryLeavesDescription',
            title: { de: 'Curry Blätter', en: 'Curry Leaves' },
            desc: {
                de: 'Frische Curry-Blätter sind unverzichtbar für authentische sri-lankische Gerichte und geben einen unverwechselbaren Geschmack.',
                en: 'Fresh curry leaves are essential for authentic Sri Lankan dishes and provide a distinctive taste.'
            }
        },
        {
            titleId: 'turmericTitle',
            descId: 'turmericDescription',
            title: { de: 'Kurkuma', en: 'Turmeric' },
            desc: {
                de: 'Frischer Kurkuma verleiht unseren Gerichten nicht nur die charakteristische goldene Farbe, sondern auch gesundheitsfördernde Eigenschaften.',
                en: 'Fresh turmeric not only gives our dishes their characteristic golden color but also health-promoting properties.'
            }
        }
    ];

    spices.forEach(spice => {
        const titleElement = document.getElementById(spice.titleId);
        const descElement = document.getElementById(spice.descId);
        
        if (titleElement) titleElement.textContent = spice.title[currentLanguage];
        if (descElement) descElement.textContent = spice.desc[currentLanguage];
    });
}

function updateCTASection() {
    const ctaTitle = document.getElementById('ctaTitle');
    const ctaDescription = document.getElementById('ctaDescription');
    const ctaReserveBtn = document.getElementById('ctaReserveBtn');
    const ctaContactBtn = document.getElementById('ctaContactBtn');
    
    if (ctaTitle) {
        ctaTitle.textContent = currentLanguage === 'de' ? 'Bereit für eine kulinarische Reise?' : 'Ready for a culinary journey?';
    }
    
    if (ctaDescription) {
        ctaDescription.textContent = currentLanguage === 'de'
            ? 'Reservieren Sie noch heute einen Tisch und lassen Sie sich von unseren authentischen sri-lankischen Spezialitäten verzaubern.'
            : 'Reserve a table today and let yourself be enchanted by our authentic Sri Lankan specialties.';
    }
    
    if (ctaReserveBtn) {
        ctaReserveBtn.textContent = currentLanguage === 'de' ? 'Tisch reservieren' : 'Reserve Table';
    }
    
    if (ctaContactBtn) {
        ctaContactBtn.textContent = currentLanguage === 'de' ? 'Kontakt aufnehmen' : 'Contact Us';
    }
}

function updateFooter() {
    const footerDescription = document.getElementById('footerDescription');
    const quickLinksTitle = document.getElementById('quickLinksTitle');
    const footerHoursTitle = document.getElementById('footerHoursTitle');
    const rightsReserved = document.getElementById('rightsReserved');
    
    if (footerDescription) {
        footerDescription.textContent = currentLanguage === 'de'
            ? 'Authentische Sri Lankan Küche im Herzen von Berlin. Erleben Sie die reichen Aromen und traditionellen Kochmethoden, die über Generationen weitergegeben wurden.'
            : 'Authentic Sri Lankan cuisine in the heart of Berlin. Experience the rich flavors and traditional cooking methods passed down through generations.';
    }
    
    if (quickLinksTitle) {
        quickLinksTitle.textContent = currentLanguage === 'de' ? 'Schnelle Links' : 'Quick Links';
    }
    
    if (footerHoursTitle) {
        footerHoursTitle.textContent = currentLanguage === 'de' ? 'Öffnungszeiten' : 'Opening Hours';
    }
    
    if (rightsReserved) {
        rightsReserved.textContent = currentLanguage === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.';
    }

    // Update opening hours in footer
    updateFooterHours();
}

function updateFooterHours() {
    const footerMonday = document.getElementById('footerMonday');
    const footerTueSat = document.getElementById('footerTueSat');
    const footerSunday = document.getElementById('footerSunday');
    const footerKitchen = document.getElementById('footerKitchen');
    
    if (currentLanguage === 'de') {
        if (footerMonday) footerMonday.textContent = 'Montag: Geschlossen';
        if (footerTueSat) footerTueSat.textContent = 'Dienstag - Samstag: 18:00 - 24:00';
        if (footerSunday) footerSunday.textContent = 'Sonntag: 11:00 - 24:00';
        if (footerKitchen) footerKitchen.textContent = 'Küche bis 23:30';
    } else {
        if (footerMonday) footerMonday.textContent = 'Monday: Closed';
        if (footerTueSat) footerTueSat.textContent = 'Tuesday - Saturday: 6:00 PM - 12:00 AM';
        if (footerSunday) footerSunday.textContent = 'Sunday: 11:00 AM - 12:00 AM';
        if (footerKitchen) footerKitchen.textContent = 'Kitchen until 11:30 PM';
    }
}

// Load specialties content from config
function loadSpecialtiesContent() {
    const specialtiesGrid = document.getElementById('specialtiesGrid');
    if (!specialtiesGrid || !config.specialties) return;
    
    specialtiesGrid.innerHTML = '';
    
    config.specialties.forEach(specialty => {
        const specialtyCard = createSpecialtyCard(specialty);
        specialtiesGrid.appendChild(specialtyCard);
    });
}

function createSpecialtyCard(specialty) {
    const card = document.createElement('div');
    card.className = 'specialty-card';
    
    // Create ingredients list
    const ingredientsList = specialty.ingredients[currentLanguage]
        .map(ingredient => `<span class="ingredient-tag">${ingredient}</span>`)
        .join('');
    
    card.innerHTML = `
        <div class="specialty-image">
            <img src="${specialty.image}" alt="${specialty.name[currentLanguage]}" loading="lazy">
        </div>
        <div class="specialty-content">
            <h3 class="specialty-name">${specialty.name[currentLanguage]}</h3>
            <p class="specialty-description">${specialty.description[currentLanguage]}</p>
            <div class="specialty-ingredients">
                <h4>${currentLanguage === 'de' ? 'Zutaten:' : 'Ingredients:'}</h4>
                <div class="ingredients-list">
                    ${ingredientsList}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Scroll effects
function setupScrollEffects() {
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Intersection Observer for animations
    setupScrollAnimations();
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.specialty-card, .process-step, .spice-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Specialties page loaded in ${loadTime.toFixed(2)}ms`);
}); 