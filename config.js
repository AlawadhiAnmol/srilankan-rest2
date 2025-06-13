const config = {
  // Site Information
  siteName: "Suriya Kanthi",
  tagline: {
    de: "Authentische Sri Lankan Küche",
    en: "Authentic Sri Lankan Cuisine"
  },
  
  // Color Scheme (Elegant Sri Lankan inspired)
  colors: {
    primary: "#8B4513", // Rich brown (like cinnamon)
    secondary: "#DAA520", // Golden yellow (like turmeric)
    accent: "#228B22", // Deep green (like curry leaves)
    dark: "#2F4F4F", // Dark slate gray
    light: "#F5F5DC", // Beige
    white: "#FFFFFF",
    text: "#333333",
    lightText: "#666666",
    background: "#FAFAFA",
    cardBackground: "#FFFFFF",
    gradient: "linear-gradient(135deg, #8B4513 0%, #DAA520 100%)"
  },

  // Contact Information
  contact: {
    phone: "+49 30 4425301",
    email: "info@suriya-kanthi.de",
    address: {
      street: "Knaackstr. 4",
      city: "10405 Berlin",
      country: "Deutschland"
    },
    googleMapsUrl: "https://maps.google.com/maps?q=Knaackstr.+4,+10405+Berlin,+Deutschland",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.5!2d13.4!3d52.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMwJzAwLjAiTiAxM8KwMjQnMDAuMCJF!5e0!3m2!1sde!2sde!4v1"
  },

  // Opening Hours
  openingHours: {
    de: {
      monday: "Montag: Geschlossen",
      tuesday: "Dienstag: 18:00 - 24:00",
      wednesday: "Mittwoch: 18:00 - 24:00", 
      thursday: "Donnerstag: 18:00 - 24:00",
      friday: "Freitag: 18:00 - 24:00",
      saturday: "Samstag: 18:00 - 24:00",
      sunday: "Sonntag: 11:00 - 24:00",
      note: "Küche bis 23:30"
    },
    en: {
      monday: "Monday: Closed",
      tuesday: "Tuesday: 6:00 PM - 12:00 AM",
      wednesday: "Wednesday: 6:00 PM - 12:00 AM",
      thursday: "Thursday: 6:00 PM - 12:00 AM", 
      friday: "Friday: 6:00 PM - 12:00 AM",
      saturday: "Saturday: 6:00 PM - 12:00 AM",
      sunday: "Sunday: 11:00 AM - 12:00 AM",
      note: "Kitchen until 11:30 PM"
    }
  },

  // External Links
  externalLinks: {
    lieferando: "https://www.lieferando.de/speisekarte/suriya-kanthi",
    facebook: "https://facebook.com/suriyakanthi",
    instagram: "https://instagram.com/suriyakanthi",
    reservationSystem: "https://bookings.suriya-kanthi.de"
  },

  // Images Configuration (Open Source - Unsplash/Pexels)
  images: {
    // Hero Section Images (1920x1080)
    hero: [
      {
        url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&h=1080&fit=crop",
        alt: "Sri Lankan vegetarian curry dishes",
        credit: "Photo by Maarten van den Heuvel on Unsplash"
      },
      {
        url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&h=1080&fit=crop",
        alt: "Traditional Sri Lankan spices and curry",
        credit: "Photo by Jay Wennington on Unsplash"
      }
    ],
    
    // Menu Category Images (400x300)
    menuCategories: {
      starters: {
        url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
        alt: "Sri Lankan appetizers"
      },
      mains: {
        url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop", 
        alt: "Sri Lankan main courses"
      },
      desserts: {
        url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
        alt: "Sri Lankan desserts"
      },
      drinks: {
        url: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        alt: "Traditional drinks"
      }
    },

    // About Us Images (800x600)
    about: {
      restaurant: {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        alt: "Restaurant interior"
      },
      chef: {
        url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=600&fit=crop",
        alt: "Chef preparing food"
      }
    },

    // Special Offers Images (600x400)
    offers: {
      url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=400&fit=crop",
      alt: "Special offer dishes"
    }
  },

  // Menu Items
  menu: {
    starters: {
      title: { de: "Vorspeisen", en: "Starters" },
      items: [
        {
          name: { de: "Vegetable Samosa", en: "Vegetable Samosa" },
          description: { 
            de: "Knusprige Teigtaschen gefüllt mit gewürztem Gemüse", 
            en: "Crispy pastry filled with spiced vegetables" 
          },
          price: "6.50",
          spicy: 2,
          vegetarian: true,
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop"
        },
        {
          name: { de: "Fish Cutlets", en: "Fish Cutlets" },
          description: { 
            de: "Traditionelle sri-lankische Fischbällchen mit Gewürzen", 
            en: "Traditional Sri Lankan spiced fish cakes" 
          },
          price: "8.90",
          spicy: 3,
          image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop"
        },
        {
          name: { de: "Chicken Tikka", en: "Chicken Tikka" },
          description: { 
            de: "Marinierte Hähnchenstücke aus dem Tandoor", 
            en: "Marinated chicken pieces from the tandoor" 
          },
          price: "9.50",
          spicy: 2,
          image: "https://images.unsplash.com/photo-1567337712970-004b0c11b26a?w=300&h=200&fit=crop"
        }
      ]
    },
    mains: {
      title: { de: "Hauptgerichte", en: "Main Courses" },
      items: [
        {
          name: { de: "Chicken Curry", en: "Chicken Curry" },
          description: { 
            de: "Authentisches sri-lankisches Hähnchen-Curry mit Kokosmilch", 
            en: "Authentic Sri Lankan chicken curry with coconut milk" 
          },
          price: "16.90",
          spicy: 4,
          popular: true,
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop"
        },
        {
          name: { de: "Fish Curry", en: "Fish Curry" },
          description: { 
            de: "Frischer Fisch in würziger Tamarind-Curry-Sauce", 
            en: "Fresh fish in spicy tamarind curry sauce" 
          },
          price: "18.50",
          spicy: 3,
          image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop"
        },
        {
          name: { de: "Vegetable Curry", en: "Vegetable Curry" },
          description: { 
            de: "Gemischtes Gemüse-Curry mit traditionellen Gewürzen", 
            en: "Mixed vegetable curry with traditional spices" 
          },
          price: "14.90",
          spicy: 2,
          vegetarian: true,
          vegan: true,
          image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop"
        },
        {
          name: { de: "Seafood Curry", en: "Seafood Curry" },
          description: { 
            de: "Meeresfrüchte in würziger Kokosmilch-Curry-Sauce", 
            en: "Fresh seafood in spicy coconut curry sauce" 
          },
          price: "19.90",
          spicy: 4,
          image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&h=200&fit=crop"
        }
      ]
    },
    rice: {
      title: { de: "Reis & Beilagen", en: "Rice & Sides" },
      items: [
        {
          name: { de: "Basmati Reis", en: "Basmati Rice" },
          description: { 
            de: "Gedämpfter Basmati-Reis", 
            en: "Steamed basmati rice" 
          },
          price: "4.50",
          vegetarian: true,
          vegan: true,
          image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop"
        },
        {
          name: { de: "Coconut Rice", en: "Coconut Rice" },
          description: { 
            de: "Basmati-Reis gekocht in Kokosmilch", 
            en: "Basmati rice cooked in coconut milk" 
          },
          price: "5.90",
          vegetarian: true,
          image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop"
        },
        {
          name: { de: "Papadam", en: "Papadam" },
          description: { 
            de: "Knusprige Linsen-Cracker", 
            en: "Crispy lentil crackers" 
          },
          price: "3.50",
          vegetarian: true,
          vegan: true,
          image: "https://images.unsplash.com/photo-1626132647523-66f473bf5a20?w=300&h=200&fit=crop"
        }
      ]
    },
    desserts: {
      title: { de: "Desserts", en: "Desserts" },
      items: [
        {
          name: { de: "Watalappan", en: "Watalappan" },
          description: { 
            de: "Traditioneller sri-lankischer Kokos-Pudding", 
            en: "Traditional Sri Lankan coconut pudding" 
          },
          price: "6.90",
          vegetarian: true,
          image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop"
        },
        {
          name: { de: "Kulfi", en: "Kulfi" },
          description: { 
            de: "Cremiges indisches Eis mit Pistazien", 
            en: "Creamy Indian ice cream with pistachios" 
          },
          price: "5.50",
          vegetarian: true,
          image: "https://images.unsplash.com/photo-1571091508533-a096b0d8c2e8?w=300&h=200&fit=crop"
        }
      ]
    },
    drinks: {
      title: { de: "Getränke", en: "Beverages" },
      items: [
        {
          name: { de: "Ceylon Tee", en: "Ceylon Tea" },
          description: { 
            de: "Authentischer sri-lankischer Schwarztee", 
            en: "Authentic Sri Lankan black tea" 
          },
          price: "3.90",
          vegetarian: true,
          vegan: true,
          image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop"
        },
        {
          name: { de: "Mango Lassi", en: "Mango Lassi" },
          description: { 
            de: "Erfrischender Joghurt-Drink mit Mango", 
            en: "Refreshing yogurt drink with mango" 
          },
          price: "4.50",
          vegetarian: true,
          image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=200&fit=crop"
        },
        {
          name: { de: "Fresh Lime Soda", en: "Fresh Lime Soda" },
          description: { 
            de: "Frische Limette mit Soda", 
            en: "Fresh lime with soda water" 
          },
          price: "3.50",
          vegetarian: true,
          vegan: true,
          image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300&h=200&fit=crop"
        }
      ]
    }
  },

  // Special Offers
  specialOffers: [
    {
      title: { 
        de: "Lunch Special", 
        en: "Lunch Special" 
      },
      description: { 
        de: "Curry + Reis + Getränk für nur 12,90€ (Mo-Fr 12-16 Uhr)", 
        en: "Curry + Rice + Drink for only €12.90 (Mon-Fri 12-4 PM)" 
      },
      price: "12.90",
      validUntil: "2024-12-31",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop"
    },
    {
      title: { 
        de: "Familie Paket", 
        en: "Family Package" 
      },
      description: { 
        de: "2 Hauptgerichte + 2 Reis + 2 Naan + 1 Dessert für 45€", 
        en: "2 Main courses + 2 Rice + 2 Naan + 1 Dessert for €45" 
      },
      price: "45.00",
      originalPrice: "52.00",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop"
    }
  ],

  // About Us Content
  about: {
    story: {
      de: "Seit 2010 bringen wir die authentischen Aromen Sri Lankas nach Berlin. Unsere Küche vereint traditionelle Rezepte mit frischen, lokalen Zutaten. Jedes Gericht wird mit Liebe und Respekt für unsere Herkunft zubereitet.",
      en: "Since 2010, we have been bringing the authentic flavors of Sri Lanka to Berlin. Our kitchen combines traditional recipes with fresh, local ingredients. Every dish is prepared with love and respect for our heritage."
    },
    mission: {
      de: "Unser Ziel ist es, Ihnen ein unvergessliches kulinarisches Erlebnis zu bieten und Sie auf eine Geschmacksreise durch Sri Lanka mitzunehmen.",
      en: "Our goal is to provide you with an unforgettable culinary experience and take you on a flavor journey through Sri Lanka."
    }
  },

  // Specialty Dishes
  specialties: [
    {
      name: { de: "Kottu Roti", en: "Kottu Roti" },
      description: { 
        de: "Sri Lankas berühmtestes Straßenessen - gehacktes Roti mit Gemüse und Fleisch", 
        en: "Sri Lanka's most famous street food - chopped roti with vegetables and meat" 
      },
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      ingredients: {
        de: ["Roti-Brot", "Zwiebeln", "Karotten", "Kohl", "Hähnchen", "Ei", "Gewürze"],
        en: ["Roti bread", "Onions", "Carrots", "Cabbage", "Chicken", "Egg", "Spices"]
      }
    },
    {
      name: { de: "Hoppers", en: "Hoppers" },
      description: { 
        de: "Traditionelle Schalen aus fermentiertem Reismehl, perfekt für Curry", 
        en: "Traditional bowl-shaped pancakes made from fermented rice flour, perfect with curry" 
      },
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      ingredients: {
        de: ["Reismehl", "Kokosmilch", "Hefe", "Zucker", "Salz"],
        en: ["Rice flour", "Coconut milk", "Yeast", "Sugar", "Salt"]
      }
    }
  ],

  // Navigation
  navigation: {
    de: {
      home: "Startseite",
      menu: "Speisekarte", 
      offers: "Angebote",
      about: "Über uns",
      specialties: "Spezialitäten",
      contact: "Kontakt",
      reservation: "Reservierung"
    },
    en: {
      home: "Home",
      menu: "Menu",
      offers: "Offers", 
      about: "About Us",
      specialties: "Specialties",
      contact: "Contact",
      reservation: "Reservation"
    }
  },

  // Form Labels
  forms: {
    de: {
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht",
      date: "Datum",
      time: "Zeit",
      guests: "Anzahl Gäste",
      submit: "Senden",
      reserve: "Reservieren",
      required: "Pflichtfeld"
    },
    en: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message", 
      date: "Date",
      time: "Time",
      guests: "Number of Guests",
      submit: "Submit",
      reserve: "Reserve",
      required: "Required field"
    }
  },

  // SEO & Meta
  seo: {
    title: {
      de: "Suriya Kanthi - Authentische Sri Lankan Küche in Berlin",
      en: "Suriya Kanthi - Authentic Sri Lankan Cuisine in Berlin"
    },
    description: {
      de: "Erleben Sie die authentischen Aromen Sri Lankas im Herzen von Berlin. Traditionelle Küche, frische Zutaten, unvergessliche Geschmackserlebnisse.",
      en: "Experience the authentic flavors of Sri Lanka in the heart of Berlin. Traditional cuisine, fresh ingredients, unforgettable taste experiences."
    },
    keywords: {
      de: "Sri Lanka Restaurant Berlin, Curry, Authentisch, Knaackstr, Prenzlauer Berg",
      en: "Sri Lankan Restaurant Berlin, Curry, Authentic, Knaackstr, Prenzlauer Berg"
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} 