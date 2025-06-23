// components/layout/Footer.tsx
"use client";

import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Shop",
    links: ["All Products", "Korean Skincare", "Makeup", "New Arrivals"],
  },
  {
    title: "Solutions",
    links: ["Acne", "Pigmentation", "Dry Skin", "Dark Circles"],
  },
  {
    title: "Fashion",
    links: ["Bags", "Shoes", "Jewelry", "Offers"],
  },
  {
    title: "Support",
    links: ["About Us", "Contact", "FAQs", "Return Policy"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-gray-700 border-t border-pink-200 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* Brand + Contact */}
        <div className="col-span-1 sm:col-span-2">
          <Link href="/" className="text-2xl font-bold text-pink-500">
            Saj Mohol
          </Link>
          <p className="mt-2 text-sm">The Authentic Beauty & Fashion Zone in Bangladesh</p>
          <div className="mt-4 space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-pink-500" />
              <span>support@sajmohol.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-pink-500" />
              <span>+880 1700-XXXXXX</span>
            </div>
          </div>
        </div>

        {/* Link Groups */}
        {footerLinks.map((group, idx) => (
          <div key={idx}>
            <h4 className="text-lg font-semibold mb-2 text-pink-500">{group.title}</h4>
            <ul className="space-y-1 text-sm">
              {group.links.map((link, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-pink-600 transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-pink-100 pt-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Socials */}
          <div className="flex items-center gap-4 text-pink-500">
            <Link href="#"><Facebook className="w-5 h-5 hover:scale-110 transition" /></Link>
            <Link href="#"><Instagram className="w-5 h-5 hover:scale-110 transition" /></Link>
            <Link href="#"><Youtube className="w-5 h-5 hover:scale-110 transition" /></Link>
          </div>

          {/* Payments / Trust icons */}
          <div className="flex items-center gap-4">
            <Image src="/icons/cod.svg" alt="Cash on Delivery" width={40} height={40} />
            <Image src="/icons/bkash.svg" alt="Bkash" width={40} height={40} />
            <Image src="/icons/nagad.svg" alt="Nagad" width={40} height={40} />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">&copy; 2025 Saj Mohol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
