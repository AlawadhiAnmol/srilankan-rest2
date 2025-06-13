# Suriya Kanthi - Sri Lankan Restaurant Website

A modern, responsive, and multilingual website for a Sri Lankan restaurant in Berlin. Built with vanilla HTML, CSS, and JavaScript with a focus on performance and user experience.

## 🌟 Features

- **Multilingual Support**: German (default) and English
- **Dynamic Menu System**: Filterable menu categories with beautiful display
- **Mobile Responsive**: Optimized for all device sizes
- **Special Offers Section**: Configurable promotional content
- **Online Reservations**: Built-in booking form
- **Google Maps Integration**: Interactive location display
- **Modern UI/UX**: Elegant design with Sri Lankan color scheme
- **Fast Loading**: Optimized images and efficient code
- **SEO Optimized**: Meta tags and structured content
- **Contact Forms**: Reservation and general contact forms

## 🚀 Quick Start

### Prerequisites

- A GitHub account
- Basic knowledge of HTML/CSS/JavaScript (for customization)
- Text editor (VS Code, Sublime Text, etc.)

### Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Test all functionality** locally before deployment

### GitHub Pages Deployment

1. **Create a new GitHub repository**
   ```bash
   # If using command line
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. **Access your website**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
   - It may take a few minutes to deploy

## 📁 File Structure

```
restaurant-website/
├── config.js          # Main configuration file (MOST IMPORTANT)
├── index.html         # Main homepage
├── specialties.html   # Specialties page (if created)
├── styles.css         # All styling
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## ⚙️ Customization Guide

### 🎯 Most Important File: `config.js`

**This is the heart of your website!** Almost everything can be customized here without touching other files.

#### Restaurant Information
```javascript
// Change your restaurant details
siteName: "Your Restaurant Name",
contact: {
    phone: "+49 30 YOUR_NUMBER",
    email: "your-email@domain.com",
    address: {
        street: "Your Street Address",
        city: "Your City",
        country: "Your Country"
    }
}
```

#### Colors & Branding
```javascript
colors: {
    primary: "#8B4513",      // Main brand color
    secondary: "#DAA520",    // Accent color
    accent: "#228B22",       // Highlight color
    // Change these hex codes to match your brand
}
```

#### Menu Items
```javascript
menu: {
    starters: {
        title: { de: "Vorspeisen", en: "Starters" },
        items: [
            {
                name: { de: "German Name", en: "English Name" },
                description: { de: "German description", en: "English description" },
                price: "12.50",
                spicy: 3,           // 1-5 spice level
                vegetarian: true,   // true/false
                vegan: false,       // true/false
                popular: true,      // true/false (shows "Popular" tag)
                image: "IMAGE_URL"  // Optional image URL
            }
            // Add more items...
        ]
    }
    // Add more categories (mains, desserts, etc.)
}
```

#### Images
```javascript
images: {
    hero: [
        {
            url: "YOUR_IMAGE_URL",
            alt: "Description of image",
            credit: "Photo credit (optional)"
        }
    ],
    menuCategories: {
        starters: {
            url: "STARTERS_IMAGE_URL",
            alt: "Starters"
        }
        // Update all category images
    }
}
```

#### Special Offers
```javascript
specialOffers: [
    {
        title: { de: "German Title", en: "English Title" },
        description: { de: "German description", en: "English description" },
        price: "19.90",
        originalPrice: "25.90",  // Optional - shows savings
        validUntil: "2024-12-31", // Optional
        image: "OFFER_IMAGE_URL"
    }
]
```

### 🖼️ Changing Images

#### Option 1: Use Image URLs (Recommended for beginners)
- Use free stock photo sites like [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com)
- Search for food photography
- Right-click → "Copy image address"
- Paste the URL in `config.js`

#### Option 2: Use Your Own Images
1. **Create an `images` folder** in your project
2. **Add your images** to this folder
3. **Update `config.js`** with relative paths:
   ```javascript
   url: "./images/your-image.jpg"
   ```

#### Recommended Image Sizes
- **Hero images**: 1920x1080px
- **Menu category images**: 400x300px  
- **Menu item images**: 300x200px
- **About section images**: 800x600px
- **Special offers**: 600x400px

### 🌍 Content Translation

All text content is in `config.js`. To change any text:

```javascript
// Example: Changing section titles
navigation: {
    de: {
        home: "Startseite",      // Change German text
        menu: "Speisekarte",
        // ...
    },
    en: {
        home: "Home",            // Change English text  
        menu: "Menu",
        // ...
    }
}
```

### 🎨 Styling Changes

#### Quick Color Changes
In `config.js`, modify the `colors` object:
```javascript
colors: {
    primary: "#YOUR_COLOR",    // Main buttons, headings
    secondary: "#YOUR_COLOR",  // Accents, highlights  
    accent: "#YOUR_COLOR",     // Special elements
}
```

#### Advanced Styling
Edit `styles.css` for detailed customization:
- **Fonts**: Change Google Fonts imports and font-family declarations
- **Layout**: Modify grid layouts, spacing, sizes
- **Animations**: Adjust transitions and hover effects

### 📍 Google Maps Integration

1. **Get your location coordinates**:
   - Go to [Google Maps](https://maps.google.com)
   - Search for your address
   - Right-click on the location → "What's here?"
   - Copy the coordinates

2. **Update in `config.js`**:
   ```javascript
   contact: {
       googleMapsUrl: "https://maps.google.com/maps?q=YOUR_ADDRESS",
       googleMapsEmbed: "EMBED_URL_FROM_GOOGLE_MAPS"
   }
   ```

3. **Get embed URL**:
   - Go to Google Maps
   - Search your location
   - Click "Share" → "Embed a map"
   - Copy the `src` URL from the iframe code

## 🔧 Common Customizations

### Adding New Menu Categories

1. **In `config.js`**, add to the `menu` object:
```javascript
menu: {
    // existing categories...
    drinks: {
        title: { de: "Getränke", en: "Beverages" },
        items: [
            // your drink items...
        ]
    }
}
```

2. **In `index.html`**, add a new category button:
```html
<button class="category-btn" data-category="drinks">
    <img src="DRINKS_IMAGE_URL" alt="Drinks">
    <span>Getränke</span>
</button>
```

### Changing Opening Hours

In `config.js`:
```javascript
openingHours: {
    de: {
        monday: "Montag: Geschlossen",
        tuesday: "Dienstag: 17:00 - 23:00",
        // Update all days...
    }
}
```

### Adding Social Media Links

In `config.js`:
```javascript
externalLinks: {
    facebook: "https://facebook.com/your-page",
    instagram: "https://instagram.com/your-account",
    // Add more platforms...
}
```

### Modifying Contact Information

```javascript
contact: {
    phone: "YOUR_PHONE_NUMBER",
    email: "your-email@domain.com",
    address: {
        street: "Your Street",
        city: "Your City", 
        country: "Your Country"
    }
}
```

## 🎯 SEO Optimization

### Update Meta Information
In `config.js`:
```javascript
seo: {
    title: {
        de: "Your Restaurant - German Title",
        en: "Your Restaurant - English Title"
    },
    description: {
        de: "German description for search engines",
        en: "English description for search engines"  
    },
    keywords: {
        de: "German, keywords, restaurant, city",
        en: "English, keywords, restaurant, city"
    }
}
```

### Google Business Profile
1. **Create/claim** your Google Business Profile
2. **Add your website URL** to your profile
3. **Keep information consistent** between website and profile

## 📱 Mobile Optimization

The website is already mobile-responsive, but you can test:

1. **Browser Developer Tools**: Press F12, toggle device toolbar
2. **Real Device Testing**: Test on actual phones/tablets
3. **Google Mobile-Friendly Test**: Use Google's testing tool

## 🚀 Performance Tips

### Image Optimization
- **Use WebP format** when possible
- **Compress images** before uploading
- **Use appropriate sizes** (don't use 4K images for thumbnails)

### Loading Speed
- **Minimize changes** to `styles.css` and `script.js`
- **Use CDN URLs** for images when possible
- **Test with Google PageSpeed Insights**

## 🛠️ Troubleshooting

### Common Issues

**Website not displaying correctly:**
- Check browser console (F12) for JavaScript errors
- Validate HTML and CSS
- Clear browser cache

**Forms not working:**
- Forms currently show success messages but don't send emails
- For real email functionality, you'll need a backend service or form handler

**Images not loading:**
- Check image URLs are correct and accessible
- Try opening image URLs directly in browser
- Ensure images are under 10MB

**Mobile display issues:**
- Test in browser developer tools
- Check CSS media queries
- Validate responsive design

### Getting Help

1. **Check browser console** for error messages
2. **Validate your HTML** at [W3C Markup Validator](https://validator.w3.org/)
3. **Test CSS** at [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

## 📈 Analytics Setup

### Google Analytics (Optional)
1. **Create Google Analytics account**
2. **Get tracking ID**
3. **Add to `index.html`** before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🔄 Regular Maintenance

### Monthly Tasks
- **Update special offers** in `config.js`
- **Check all links** work correctly
- **Update menu items/prices** as needed
- **Review and respond** to any form submissions

### When Adding New Features
1. **Test locally** first
2. **Make small changes** at a time
3. **Keep backups** of working versions
4. **Test on mobile** after changes

## 📞 Support

### For Content Changes
- Edit `config.js` for most changes
- No programming knowledge required

### For Design/Functionality Changes
- Basic HTML/CSS/JavaScript knowledge helpful
- Consider hiring a web developer for major changes

### Hosting Alternatives to GitHub Pages
- **Netlify**: Easy drag-and-drop deployment
- **Vercel**: Great for static sites
- **Firebase Hosting**: Google's hosting solution

## 📄 License

This project is open source. Feel free to modify and use for your restaurant.

---

**Happy customizing! 🍛✨**

For questions or issues, create a GitHub issue in your repository or consult the browser console for error messages. 