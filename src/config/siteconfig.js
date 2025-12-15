import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";


export const SiteConfig = {
    authorName: "Imam Hossain",
    brandName: "Saj Mohol",
    url: "https://sajmohol.vercel.app/",
    email: "sajmohol.shop@gmail.com",
    description: "The Authentic Beauty & Fashion Zone in Bangladesh",
    displayNumber: "+880 1624243747",
    numberCallLink: "tel:$+8801624243747",
    whatsappCallLink: "https://wa.me/01624243747",
    location: "Madunaghat , Hathazari",
    latitude: "25.2485261",
    longitude: "55.3034075",
    coordinate: "25.2485261,55.3034075",
    city: "Chattogram",
    country: "Bangladesh",
    navItems: [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
    ],
    footerhrefs: [
        { title: "About Us", href: "/about" },
        { title: "Contact", href: "/contact" },
        { title: "Blog", href: "/blog" },
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Sitemap", href: "/sitemap.xml" }
    ],

    socialLinks: [
        { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/sajmohol" },
        { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/sajmo_hol/" },
        { name: "Saj Mohol", icon: Twitter, href: "https://www.tiktok.com/@sajmohol" },
        { name: "YouTube", icon: Youtube, href: "https://youtube.com/fixcardubai" }
    ],
    contactLinks: [
        { name: "Map", icon: MapPin, href: "https://maps.app.goo.gl/SPtYU8eEz5jw8fDa7" },
        { name: "Phone", icon: Phone, href: "tel:+8801624243747" },
        { name: "Email", icon: Mail, href: "mailto:sajmohol.shop@gmail.com" }
    ]
}

const {
    authorName,
    brandName,
    url,
    email,
    description,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    location,
    latitude,
    longitude,
    coordinate,
    city,
    country,
    navItems,
    footerhrefs,
    socialLinks,
    contactLinks
} = SiteConfig;



