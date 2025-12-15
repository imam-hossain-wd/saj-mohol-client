'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight, Filter, Search } from 'lucide-react';
import { ReusableCarousel } from '@/components/shared/ReusableCarousel/ReusableCarousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const categories = [
  {
    name: 'Toner',
    href: '/categories/toner',
    icon: '💦',
    bg: 'bg-gradient-to-br from-cyan-50 to-primary/10',
    count: 12,
    description: 'Balance and prep your skin with our hydrating toners'
  },
  {
    name: 'Cleanser',
    href: '/categories/cleanser',
    icon: '🧼',
    bg: 'bg-gradient-to-br from-blue-50 to-primary/10',
    count: 8,
    description: 'Gentle formulas to remove impurities without stripping'
  },
  {
    name: 'Moisturizer',
    href: '/categories/moisturizer',
    icon: '🧴',
    bg: 'bg-gradient-to-br from-green-50 to-primary/10',
    count: 15,
    description: 'Hydration solutions for every skin type'
  },
  {
    name: 'Serum',
    href: '/categories/serum',
    icon: '🧪',
    bg: 'bg-gradient-to-br from-indigo-50 to-primary/10',
    count: 9,
    description: 'Targeted treatments for specific skin concerns'
  },
  {
    name: 'Sunscreen',
    href: '/categories/sunscreen',
    icon: '☀️',
    bg: 'bg-gradient-to-br from-yellow-50 to-primary/10',
    count: 7,
    description: 'Essential UV protection for healthy skin'
  },
  {
    name: 'Sheet Mask',
    href: '/categories/sheet-mask',
    icon: '🎭',
    bg: 'bg-gradient-to-br from-pink-50 to-primary/10',
    count: 5,
    description: 'Instant hydration and treatment masks'
  },
  {
    name: 'Wash-off Mask',
    href: '/categories/wash-off-mask',
    icon: '🧖‍♀️',
    bg: 'bg-gradient-to-br from-purple-50 to-primary/10',
    count: 3,
    description: 'Deep cleansing and treatment masks'
  },
  {
    name: 'Sleeping Mask',
    href: '/categories/sleeping-mask',
    icon: '😴',
    bg: 'bg-gradient-to-br from-amber-50 to-primary/10',
    count: 4,
    description: 'Overnight treatments for waking up to radiant skin'
  },
  {
    name: 'Lip Sleeping Mask',
    href: '/categories/lip-sleeping-mask',
    icon: '👄',
    bg: 'bg-gradient-to-br from-red-50 to-primary/10',
    count: 2,
    description: 'Nourish and repair dry lips overnight'
  },
  {
    name: 'Kit',
    href: '/categories/kit',
    icon: '🎁',
    bg: 'bg-gradient-to-br from-teal-50 to-primary/10',
    count: 6,
    description: 'Curated sets for complete skincare routines'
  }
];

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary/5 to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Your Perfect Skincare
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Browse our carefully curated categories to find products tailored to your skin's needs
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search categories..."
                className="pl-10 pr-4 py-6 rounded-full border-gray-300 focus-visible:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 rounded-full">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary">Categories</span>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
          
          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`aspect-square flex flex-col items-center justify-center p-6 ${category.bg}`}>
                  <div className="relative">
                    <span className="text-6xl z-10 relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                      {category.icon}
                    </span>
                    <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                </div>
                
                <div className="p-6 pt-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500">
                      {category.count} items
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
                
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <div className="mx-auto max-w-md">
                <Search className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">No categories found</h3>
                <p className="mt-2 text-gray-500">
                  We couldn't find any categories matching "{searchTerm}". Try a different search term.
                </p>
                <Button
                  onClick={() => setSearchTerm('')}
                  className="mt-4"
                >
                  Clear search
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Popular Categories Carousel */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Popular Categories</h2>
            <Link href="/categories" className="flex items-center gap-1 text-primary hover:underline">
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <ReusableCarousel
            showButtons={true}
            className="pb-2"
            settings={{
              slidesPerView: 2,
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
            {categories.slice(0, 6).map((category) => (
              <div key={category.name} className="h-full">
                <Link
                  href={category.href}
                  className="group relative h-full block overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                >
                  <div className={`aspect-square flex flex-col items-center justify-center p-4 ${category.bg}`}>
                    <div className="relative">
                      <span className="text-5xl z-10 relative transition-all duration-300 group-hover:scale-110">
                        {category.icon}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {category.count} products
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </ReusableCarousel>
        </div>
      </section>
    </div>
  );
}