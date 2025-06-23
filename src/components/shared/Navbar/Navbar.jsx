// components/navbar.js
'use client';

import Link from 'next/link';
import { ShoppingBag, Heart, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import BottomNavbar from './BottomNavbar';
import NavDrawerTigger from './NavDrawerTigger';
import { navItems, socialIcons } from './Nav-icons-items';
import { cn } from '@/lib/utils';


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      {/* Desktop Navbar */}
      <header className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      )}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary font-playfair">Saj Mohol</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="hidden lg:flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary relative',
                      pathname === item.href && 'active-nav-item'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-4 ml-6">
                <div className="hidden lg:flex items-center gap-3">
                  {socialIcons.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="text-gray-500 hover:text-primary transition-colors social-icon"
                      aria-label={social.icon.type.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="p-2 text-gray-700 hover:text-primary transition-colors">
                    <Search className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-700 hover:text-primary transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-700 hover:text-primary transition-colors relative">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </button>
                </div>
              </div>
            </nav>

            {/* Mobile Drawer Trigger */}

            <NavDrawerTigger />
           
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <BottomNavbar />

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}