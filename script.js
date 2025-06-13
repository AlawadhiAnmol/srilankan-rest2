// Global variables
let currentLanguage = 'de';
let currentMenuCategory = 'starters';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    setupNavigation();
    setupLanguageToggle();
    setupMenuSystem();
    setupForms();
    setupScrollEffects();
    setupMobileMenu();
    loadContent();
    updateLanguage();
}

// Navigation functionality
function setupNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
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
            
            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            const hamburger = document.getElementById('hamburger');
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
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
        updateMenuDisplay();
    });
}

// Update all text content based on current language
function updateLanguage() {
    // Update navigation
    updateNavigation();
    
    // Update hero section
    updateHeroSection();
    
    // Update section headers
    updateSectionHeaders();
    
    // Update forms
    updateFormLabels();
    
    // Update footer
    updateFooter();
    
    // Update other content
    updateMiscContent();
}

function updateNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navTexts = config.navigation[currentLanguage];
    
    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        if (section && navTexts[section]) {
            link.textContent = navTexts[section];
        }
    });
}

function updateHeroSection() {
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const viewMenuBtn = document.getElementById('viewMenuBtn');
    const reserveTableBtn = document.getElementById('reserveTableBtn');
    
    if (heroTitle) heroTitle.textContent = config.tagline[currentLanguage];
    if (heroSubtitle) {
        heroSubtitle.textContent = currentLanguage === 'de' 
            ? 'Erleben Sie die reichen Aromen und lebendigen Gewürze Sri Lankas im Herzen von Berlin'
            : 'Experience the rich flavors and vibrant spices of Sri Lanka in the heart of Berlin';
    }
    if (viewMenuBtn) {
        viewMenuBtn.textContent = currentLanguage === 'de' ? 'Speisekarte ansehen' : 'View Menu';
    }
    if (reserveTableBtn) {
        reserveTableBtn.textContent = currentLanguage === 'de' ? 'Tisch reservieren' : 'Reserve Table';
    }
}

function updateSectionHeaders() {
    // Menu section
    const menuTitle = document.getElementById('menuTitle');
    const menuSubtitle = document.getElementById('menuSubtitle');
    if (menuTitle) {
        menuTitle.textContent = currentLanguage === 'de' ? 'Unsere Speisekarte' : 'Our Menu';
    }
    if (menuSubtitle) {
        menuSubtitle.textContent = currentLanguage === 'de' 
            ? 'Entdecken Sie die authentischen Aromen Sri Lankas'
            : 'Discover the authentic flavors of Sri Lanka';
    }

    // Offers section
    const offersTitle = document.getElementById('offersTitle');
    const offersSubtitle = document.getElementById('offersSubtitle');
    if (offersTitle) {
        offersTitle.textContent = currentLanguage === 'de' ? 'Besondere Angebote' : 'Special Offers';
    }
    if (offersSubtitle) {
        offersSubtitle.textContent = currentLanguage === 'de'
            ? 'Verpassen Sie nicht unsere speziellen Pakete und Angebote'
            : 'Don\'t miss our special packages and offers';
    }

    // Reservation section
    const reservationTitle = document.getElementById('reservationTitle');
    const reservationSubtitle = document.getElementById('reservationSubtitle');
    if (reservationTitle) {
        reservationTitle.textContent = currentLanguage === 'de' ? 'Reservierung & Bestellung' : 'Reservation & Ordering';
    }
    if (reservationSubtitle) {
        reservationSubtitle.textContent = currentLanguage === 'de'
            ? 'Reservieren Sie Ihren Tisch oder bestellen Sie online'
            : 'Reserve your table or order online';
    }

    // Location section
    const locationTitle = document.getElementById('locationTitle');
    const locationSubtitle = document.getElementById('locationSubtitle');
    if (locationTitle) {
        locationTitle.textContent = currentLanguage === 'de' ? 'Besuchen Sie uns' : 'Visit Us';
    }
    if (locationSubtitle) {
        locationSubtitle.textContent = currentLanguage === 'de'
            ? 'Finden Sie uns im Herzen von Prenzlauer Berg'
            : 'Find us in the heart of Prenzlauer Berg';
    }

    // About section
    const aboutTitle = document.getElementById('aboutTitle');
    if (aboutTitle) {
        aboutTitle.textContent = currentLanguage === 'de' ? 'Über uns' : 'About Us';
    }

    // Contact section
    const contactTitle = document.getElementById('contactTitle');
    const contactSubtitle = document.getElementById('contactSubtitle');
    if (contactTitle) {
        contactTitle.textContent = currentLanguage === 'de' ? 'Kontakt' : 'Contact';
    }
    if (contactSubtitle) {
        contactSubtitle.textContent = currentLanguage === 'de'
            ? 'Nehmen Sie Kontakt mit uns auf'
            : 'Get in touch with us';
    }
}

function updateFormLabels() {
    const formLabels = config.forms[currentLanguage];
    
    // Reservation form
    const nameLabel = document.getElementById('nameLabel');
    const emailLabel = document.getElementById('emailLabel');
    const phoneLabel = document.getElementById('phoneLabel');
    const guestsLabel = document.getElementById('guestsLabel');
    const dateLabel = document.getElementById('dateLabel');
    const timeLabel = document.getElementById('timeLabel');
    const messageLabel = document.getElementById('messageLabel');
    const submitReservation = document.getElementById('submitReservation');
    
    if (nameLabel) nameLabel.textContent = formLabels.name + ' *';
    if (emailLabel) emailLabel.textContent = formLabels.email + ' *';
    if (phoneLabel) phoneLabel.textContent = formLabels.phone;
    if (guestsLabel) guestsLabel.textContent = formLabels.guests + ' *';
    if (dateLabel) dateLabel.textContent = formLabels.date + ' *';
    if (timeLabel) timeLabel.textContent = formLabels.time + ' *';
    if (messageLabel) messageLabel.textContent = currentLanguage === 'de' ? 'Besondere Wünsche' : 'Special Requests';
    if (submitReservation) submitReservation.textContent = currentLanguage === 'de' ? 'Reservierung senden' : 'Send Reservation';

    // Contact form
    const contactNameLabel = document.getElementById('contactNameLabel');
    const contactEmailLabel = document.getElementById('contactEmailLabel');
    const contactMessageLabel = document.getElementById('contactMessageLabel');
    const submitContact = document.getElementById('submitContact');
    
    if (contactNameLabel) contactNameLabel.textContent = formLabels.name + ' *';
    if (contactEmailLabel) contactEmailLabel.textContent = formLabels.email + ' *';
    if (contactMessageLabel) contactMessageLabel.textContent = formLabels.message + ' *';
    if (submitContact) submitContact.textContent = currentLanguage === 'de' ? 'Nachricht senden' : 'Send Message';
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
    
    const hours = config.openingHours[currentLanguage];
    
    if (footerMonday) footerMonday.textContent = hours.monday;
    if (footerTueSat) {
        footerTueSat.textContent = currentLanguage === 'de' 
            ? 'Dienstag - Samstag: 18:00 - 24:00'
            : 'Tuesday - Saturday: 6:00 PM - 12:00 AM';
    }
    if (footerSunday) footerSunday.textContent = hours.sunday;
    if (footerKitchen) footerKitchen.textContent = hours.note;
}

function updateMiscContent() {
    // Update reservation cards
    updateReservationCards();
    
    // Update location info
    updateLocationInfo();
    
    // Update about section
    updateAboutSection();
    
    // Update contact info
    updateContactInfo();
}

function updateReservationCards() {
    const onlineReservationTitle = document.getElementById('onlineReservationTitle');
    const phoneReservationTitle = document.getElementById('phoneReservationTitle');
    const deliveryTitle = document.getElementById('deliveryTitle');
    
    if (onlineReservationTitle) {
        onlineReservationTitle.textContent = currentLanguage === 'de' ? 'Online Tisch reservieren' : 'Reserve Table Online';
    }
    if (phoneReservationTitle) {
        phoneReservationTitle.textContent = currentLanguage === 'de' ? 'Telefonisch reservieren' : 'Reserve by Phone';
    }
    if (deliveryTitle) {
        deliveryTitle.textContent = currentLanguage === 'de' ? 'Bei Lieferando bestellen' : 'Order on Lieferando';
    }
}

function updateLocationInfo() {
    const addressTitle = document.getElementById('addressTitle');
    const hoursTitle = document.getElementById('hoursTitle');
    const phoneTitle = document.getElementById('phoneTitle');
    const directionsBtn = document.getElementById('directionsBtn');
    
    if (addressTitle) addressTitle.textContent = currentLanguage === 'de' ? 'Adresse' : 'Address';
    if (hoursTitle) hoursTitle.textContent = currentLanguage === 'de' ? 'Öffnungszeiten' : 'Opening Hours';
    if (phoneTitle) phoneTitle.textContent = currentLanguage === 'de' ? 'Telefon' : 'Phone';
    if (directionsBtn) {
        directionsBtn.innerHTML = `<i class="fas fa-directions"></i> ${currentLanguage === 'de' ? 'Route berechnen' : 'Get Directions'}`;
    }

    // Update opening hours display
    updateOpeningHoursDisplay();
}

function updateOpeningHoursDisplay() {
    const openingHours = document.getElementById('openingHours');
    if (openingHours) {
        const hours = config.openingHours[currentLanguage];
        openingHours.innerHTML = `
            <p>${hours.monday}</p>
            <p>${hours.tuesday}</p>
            <p>${hours.wednesday}</p>
            <p>${hours.thursday}</p>
            <p>${hours.friday}</p>
            <p>${hours.saturday}</p>
            <p>${hours.sunday}</p>
            <p><small>${hours.note}</small></p>
        `;
    }
}

function updateAboutSection() {
    const ourStoryTitle = document.getElementById('ourStoryTitle');
    const ourStoryText = document.getElementById('ourStoryText');
    const ourMissionTitle = document.getElementById('ourMissionTitle');
    const ourMissionText = document.getElementById('ourMissionText');
    const specialtiesBtn = document.getElementById('specialtiesBtn');
    
    if (ourStoryTitle) {
        ourStoryTitle.textContent = currentLanguage === 'de' ? 'Unsere Geschichte' : 'Our Story';
    }
    if (ourStoryText) {
        ourStoryText.textContent = config.about.story[currentLanguage];
    }
    if (ourMissionTitle) {
        ourMissionTitle.textContent = currentLanguage === 'de' ? 'Unsere Mission' : 'Our Mission';
    }
    if (ourMissionText) {
        ourMissionText.textContent = config.about.mission[currentLanguage];
    }
    if (specialtiesBtn) {
        specialtiesBtn.textContent = currentLanguage === 'de' ? 'Unsere Spezialitäten entdecken' : 'Discover Our Specialties';
    }
}

function updateContactInfo() {
    const contactInfoTitle = document.getElementById('contactInfoTitle');
    const contactFormTitle = document.getElementById('contactFormTitle');
    
    if (contactInfoTitle) {
        contactInfoTitle.textContent = currentLanguage === 'de' ? 'Kontaktinformationen' : 'Contact Information';
    }
    if (contactFormTitle) {
        contactFormTitle.textContent = currentLanguage === 'de' ? 'Nachricht senden' : 'Send Message';
    }
}

// Menu system functionality
function setupMenuSystem() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected category
            const category = this.getAttribute('data-category');
            currentMenuCategory = category;
            
            // Update menu display
            updateMenuDisplay();
        });
    });
    
    // Initial menu load
    updateMenuDisplay();
}

function updateMenuDisplay() {
    const menuItemsContainer = document.getElementById('menuItems');
    const categoryData = config.menu[currentMenuCategory];
    
    if (!categoryData || !menuItemsContainer) return;
    
    // Update category button texts
    updateCategoryButtonTexts();
    
    // Clear existing items
    menuItemsContainer.innerHTML = '';
    
    // Add category title
    const categoryTitle = document.createElement('h3');
    categoryTitle.className = 'category-title';
    categoryTitle.textContent = categoryData.title[currentLanguage];
    categoryTitle.style.cssText = `
        grid-column: 1 / -1;
        text-align: center;
        color: var(--primary-color);
        margin-bottom: 2rem;
        font-size: 2rem;
    `;
    menuItemsContainer.appendChild(categoryTitle);
    
    // Add menu items
    categoryData.items.forEach(item => {
        const menuItem = createMenuItemElement(item);
        menuItemsContainer.appendChild(menuItem);
    });
}

function updateCategoryButtonTexts() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        const category = button.getAttribute('data-category');
        const span = button.querySelector('span');
        if (span && config.menu[category]) {
            span.textContent = config.menu[category].title[currentLanguage];
        }
    });
}

function createMenuItemElement(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    
    // Create image element if image exists
    let imageHTML = '';
    if (item.image) {
        imageHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name[currentLanguage]}" loading="lazy">
            </div>
        `;
    }
    
    // Create spicy level indicators
    let spicyHTML = '';
    if (item.spicy) {
        const peppers = '🌶️'.repeat(item.spicy);
        spicyHTML = `<div class="spicy-level">${peppers}</div>`;
    }
    
    // Create tags
    let tagsHTML = '';
    const tags = [];
    
    if (item.popular) {
        tags.push(`<span class="menu-tag tag-popular">${currentLanguage === 'de' ? 'Beliebt' : 'Popular'}</span>`);
    }
    if (item.vegetarian) {
        tags.push(`<span class="menu-tag tag-vegetarian">${currentLanguage === 'de' ? 'Vegetarisch' : 'Vegetarian'}</span>`);
    }
    if (item.vegan) {
        tags.push(`<span class="menu-tag tag-vegan">${currentLanguage === 'de' ? 'Vegan' : 'Vegan'}</span>`);
    }
    if (item.spicy) {
        tags.push(`<span class="menu-tag tag-spicy">${currentLanguage === 'de' ? 'Scharf' : 'Spicy'}${spicyHTML}</span>`);
    }
    
    if (tags.length > 0) {
        tagsHTML = `<div class="menu-item-tags">${tags.join('')}</div>`;
    }
    
    menuItem.innerHTML = `
        ${imageHTML}
        <div class="menu-item-content">
            <div class="menu-item-header">
                <h4 class="menu-item-name">${item.name[currentLanguage]}</h4>
                <span class="menu-item-price">€${item.price}</span>
            </div>
            <p class="menu-item-description">${item.description[currentLanguage]}</p>
            ${tagsHTML}
        </div>
    `;
    
    return menuItem;
}

// Load and display content
function loadContent() {
    loadSpecialOffers();
    updateSEO();
}

function loadSpecialOffers() {
    const offersGrid = document.getElementById('offersGrid');
    if (!offersGrid) return;
    
    offersGrid.innerHTML = '';
    
    config.specialOffers.forEach(offer => {
        const offerCard = createOfferElement(offer);
        offersGrid.appendChild(offerCard);
    });
}

function createOfferElement(offer) {
    const offerCard = document.createElement('div');
    offerCard.className = 'offer-card';
    
    let priceHTML = `<span class="current-price">€${offer.price}</span>`;
    
    if (offer.originalPrice) {
        const savings = (parseFloat(offer.originalPrice) - parseFloat(offer.price)).toFixed(2);
        priceHTML += `
            <span class="original-price">€${offer.originalPrice}</span>
            <span class="savings">${currentLanguage === 'de' ? 'Sparen' : 'Save'} €${savings}</span>
        `;
    }
    
    offerCard.innerHTML = `
        <div class="offer-image">
            <img src="${offer.image}" alt="${offer.title[currentLanguage]}" loading="lazy">
        </div>
        <div class="offer-content">
            <h3 class="offer-title">${offer.title[currentLanguage]}</h3>
            <p class="offer-description">${offer.description[currentLanguage]}</p>
            <div class="offer-price">
                ${priceHTML}
            </div>
        </div>
    `;
    
    return offerCard;
}

function updateSEO() {
    // Update page title
    document.title = config.seo.title[currentLanguage];
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', config.seo.description[currentLanguage]);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', config.seo.keywords[currentLanguage]);
    }
    
    // Update language attribute
    document.documentElement.lang = currentLanguage;
}

// Form handling
function setupForms() {
    // Reservation form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleReservationSubmit);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Set minimum date for reservation
    const bookingDate = document.getElementById('bookingDate');
    if (bookingDate) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        bookingDate.min = tomorrow.toISOString().split('T')[0];
    }
}

function handleReservationSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const reservationData = Object.fromEntries(formData);
    
    // Validate form
    if (!validateReservationForm(reservationData)) {
        return;
    }
    
    // Show success message
    showNotification(
        currentLanguage === 'de' 
            ? 'Vielen Dank für Ihre Reservierungsanfrage. Wir werden uns bald bei Ihnen melden!'
            : 'Thank you for your reservation request. We will contact you soon!',
        'success'
    );
    
    // Reset form
    e.target.reset();
    
    // In a real application, you would send this data to a server
    console.log('Reservation data:', reservationData);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const contactData = Object.fromEntries(formData);
    
    // Validate form
    if (!validateContactForm(contactData)) {
        return;
    }
    
    // Show success message
    showNotification(
        currentLanguage === 'de'
            ? 'Ihre Nachricht wurde gesendet. Wir werden uns bald bei Ihnen melden!'
            : 'Your message has been sent. We will get back to you soon!',
        'success'
    );
    
    // Reset form
    e.target.reset();
    
    // In a real application, you would send this data to a server
    console.log('Contact data:', contactData);
}

function validateReservationForm(data) {
    const requiredFields = ['name', 'email', 'guests', 'date', 'time'];
    
    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            showNotification(
                currentLanguage === 'de'
                    ? `Bitte füllen Sie das Feld "${field}" aus.`
                    : `Please fill in the "${field}" field.`,
                'error'
            );
            return false;
        }
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification(
            currentLanguage === 'de'
                ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
                : 'Please enter a valid email address.',
            'error'
        );
        return false;
    }
    
    return true;
}

function validateContactForm(data) {
    const requiredFields = ['name', 'email', 'message'];
    
    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            showNotification(
                currentLanguage === 'de'
                    ? `Bitte füllen Sie das Feld "${field}" aus.`
                    : `Please fill in the "${field}" field.`,
                'error'
            );
            return false;
        }
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification(
            currentLanguage === 'de'
                ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
                : 'Please enter a valid email address.',
            'error'
        );
        return false;
    }
    
    return true;
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 500;
        max-width: 300px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
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
    
    // Scroll arrow in hero section
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function() {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }
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
    const animatedElements = document.querySelectorAll('.menu-item, .offer-card, .reservation-card, .about-image');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Analytics (placeholder for Google Analytics or other tracking)
function trackEvent(action, category, label) {
    // In a real application, you would implement analytics tracking here
    console.log('Event tracked:', { action, category, label });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In a real application, you might want to report errors to a logging service
});

// Performance monitoring
window.addEventListener('load', function() {
    // Log page load time
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateLanguage,
        updateMenuDisplay,
        validateReservationForm,
        validateContactForm
    };
} 