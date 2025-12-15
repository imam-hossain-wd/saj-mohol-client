"use client";

import { SiteConfig } from "@/config/siteconfig";
import { brandlogo } from "@/utils/assets";
import {
  Mail, 
  Phone, 
  MapPin, 
  Shield,
  Truck,
  RefreshCw,
  CreditCard,
  ChevronRight,
  Heart
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-pink-50/30 border-t border-pink-100">
      {/* Trust Badges */}
      <div className="border-b border-pink-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                <p className="text-sm text-gray-600">On orders over ৳1500</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Easy Returns</h4>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">100% Authentic</h4>
                <p className="text-sm text-gray-600">Guaranteed genuine products</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Secure Payment</h4>
                <p className="text-sm text-gray-600">SSL encrypted checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group -mb-8">
                <Image src={brandlogo.logo}  width={100} height={100} quality={100} alt="saj mohol logo"/>
              </Link>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              The Authentic Beauty, Skincare & Fashion Zone in Bangladesh. 
              We bring you the finest Korean beauty products and fashion essentials.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400"
                />
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Subscribe to get updates on new arrivals & exclusive offers
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Shop</h4>
                <ul className="space-y-3">
                  {["Korean Skincare", "Makeup", "Fashion", "New Arrivals", "Best Sellers", "Sale"].map((item) => (
                    <li key={item}>
                      <Link 
                        href="#" 
                        className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Help</h4>
                <ul className="space-y-3">
                  {["Track Order", "Shipping Info", "Returns & Exchanges", "Size Guide", "FAQs", "Contact Us"].map((item) => (
                    <li key={item}>
                      <Link 
                        href="#" 
                        className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Company</h4>
                <ul className="space-y-3">
                  {["About Us", "Our Story", "Blog", "Careers", "Press", "Store Locations"].map((item) => (
                    <li key={item}>
                      <Link 
                        href="#" 
                        className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Legal</h4>
                <ul className="space-y-3">
                  {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility", "Sitemap"].map((item) => (
                    <li key={item}>
                      <Link 
                        href="#" 
                        className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Social */}
      <div className="border-t border-pink-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{SiteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-primary" />
                <a href={SiteConfig.numberCallLink} className="hover:text-primary transition-colors">
                  {SiteConfig.displayNumber}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${SiteConfig.email}`} className="hover:text-primary transition-colors">
                  {SiteConfig.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {SiteConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>© {currentYear} Saj Mohol.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
              <span className="sm:hidden">All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in Bangladesh</span>
              </div>
              <div className="hidden md:block">
                <span>•</span>
              </div>
              <div className="flex items-center gap-4">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/217/217425.png" 
                  alt="Visa" 
                  className="h-6 w-auto opacity-70"
                />
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/217/217426.png" 
                  alt="Mastercard" 
                  className="h-6 w-auto opacity-70"
                />
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/179/179253.png" 
                  alt="American Express" 
                  className="h-6 w-auto opacity-70"
                />
                <span className="text-xs">Secure payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
