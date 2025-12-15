'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { ReusableCarousel } from '@/components/shared/ReusableCarousel/ReusableCarousel';

const categories = [
  {
    name: 'Make Up',
    href: '/makeup',
    icon: '💄',
    bg: 'bg-gradient-to-br from-pink-50 to-primary/10',
  },
  {
    name: 'Skin Care',
    href: '/skincare',
    icon: '✨',
    bg: 'bg-gradient-to-br from-blue-50 to-primary/10',
  },
  {
    name: 'Personal Care',
    href: '/personal-care',
    icon: '🧴',
    bg: 'bg-gradient-to-br from-green-50 to-primary/10',
  },
  {
    name: 'Bags',
    href: '/bags',
    icon: '👜',
    bg: 'bg-gradient-to-br from-amber-50 to-primary/10',
  },
  {
    name: 'Jewelry',
    href: '/jewelry',
    icon: '💍',
    bg: 'bg-gradient-to-br from-purple-50 to-primary/10',
  },
  {
    name: 'Shoes',
    href: '/shoes',
    icon: '👠',
    bg: 'bg-gradient-to-br from-red-50 to-primary/10',
  },
  {
    name: 'Watch',
    href: '/watch',
    icon: '⌚',
    bg: 'bg-gradient-to-br from-gray-50 to-primary/10',
  },
  {
    name: 'Basket',
    href: '/basket',
    icon: '🧺',
    bg: 'bg-gradient-to-br from-yellow-50 to-primary/10',
  },
  {
    name: 'Serum',
    href: '/serum',
    icon: '🧪',
    bg: 'bg-gradient-to-br from-indigo-50 to-primary/10',
  },
  {
    name: 'Toner',
    href: '/toner',
    icon: '💦',
    bg: 'bg-gradient-to-br from-cyan-50 to-primary/10',
  },
]

export function CategorySection({ className }) {
  return (
    <section className={cn('py-4 md:py-8 relative', className)}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Premium Header */}
        <div className="flex md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xl font-medium text-primary mb-2 block">
              SHOP BY CATEGORY
            </span>
          </div>
          
          <Link
            href="/categories"
            className="flex items-center gap-2 group text-sm font-medium px-4 py-2.5 rounded-full border border-primary/20 hover:border-primary/40 bg-white hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span className="text-primary">Explore All</span>
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </div>

        {/* Responsive Carousel */}
        <div className="pb-8">
          <ReusableCarousel
            showButtons={true}
            className="pb-8"
            settings={{
              slidesPerView: 3,
              spaceBetween: 16,
              breakpoints: {
                640: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }
            }}
          >
            {categories.map((category) => (
              <div key={category.name} className="h-full">
                <Link
                  href={category.href}
                  className="group relative h-full block overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
                >
                  <div className={`aspect-square flex flex-col items-center justify-center p-4 ${category.bg}`}>
                    <div className="relative">
                      <span className="text-5xl z-10 relative transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                        {category.icon}
                      </span>
                      <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    </div>
                    <h3 className="mt-4 text-sm font-medium text-gray-800 text-center group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </ReusableCarousel>
        </div>
      </div>
    </section>
  );
}