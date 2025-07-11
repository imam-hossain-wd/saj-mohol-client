// components/product-card.js
'use client';

import { Star, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      <div className="relative flex-1">
        {/* Product Image with Link */}
        <Link href={`/products/${product.id}`} className="block h-full">
          <div className="aspect-square bg-gray-100 relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                {product?.discount}% OFF
              </div>
            )}
            
            {/* Wishlist Button */}
            <button 
              className="absolute top-3 right-3 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-primary hover:text-white transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </Link>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating || 4.5) ? 'fill-current' : ''}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.rating || 4.5})
          </span>
        </div>

        {/* Product Name with Link */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Size */}
        {product.size && (
          <p className="text-sm text-gray-500 mb-3">{product.size}</p>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-4 mt-auto">
          <span className="text-lg font-bold text-primary">
            ৳{product?.price?.toLocaleString()}
          </span>
          {product?.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ৳{product?.originalPrice?.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full gap-2 mt-auto">
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}