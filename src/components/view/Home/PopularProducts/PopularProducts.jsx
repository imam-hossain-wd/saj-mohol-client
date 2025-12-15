// components/popular-products.js
'use client';


import { ProductCard } from '@/components/shared/ProductCard/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import Link from 'next/link';

export function PopularProducts() {
  
  const popularProducts = [...products]
    .sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5))
    .slice(0, 10);

  return (
    <section className="py-8 md:py-4 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-3">
            Popular Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our customers' most loved beauty essentials
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="px-8 py-3">
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}