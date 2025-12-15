// components/wishlist/wishlist-content.jsx
'use client';

import { useAppContext } from '@/context/app-context';
import { Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export function WishlistContent({ onClose }) {
  const { wishlist, addToCart, removeFromWishlist, wishlistCount } = useAppContext();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
        <p className="text-gray-600 mb-6">Save items you love for later</p>
        <button 
          onClick={onClose}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">
            My Wishlist ({wishlistCount} {wishlistCount === 1 ? 'item' : 'items'})
          </h3>
        </div>
        
        {wishlist.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
              <p className="text-lg font-semibold text-primary">
                ৳{item.price.toLocaleString()}
              </p>
              {item.size && (
                <p className="text-sm text-gray-500">{item.size}</p>
              )}
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button 
                onClick={() => handleAddToCart(item)}
                className="bg-primary text-white px-3 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors flex items-center gap-1"
              >
                <ShoppingBag className="h-3 w-3" />
                Add to Cart
              </button>
              <button 
                onClick={() => removeFromWishlist(item.id)}
                className="border border-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                <Heart className="h-4 w-4 fill-current text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}