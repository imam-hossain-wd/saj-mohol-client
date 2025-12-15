// components/cart/cart-content.jsx
'use client';

import { useAppContext } from '@/context/app-context';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';

export function CartContent({ onClose }) {
  const { 
    cart, 
    updateCartQuantity, 
    removeFromCart, 
    cartTotal, 
    cartItemsCount,
    clearCart 
  } = useAppContext();

  const shipping = cart.length > 0 ? 50 : 0;
  const total = cartTotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Trash2 className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
        <p className="text-gray-600 text-center mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <button 
          onClick={onClose}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">
            Shopping Cart ({cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'})
          </h3>
          <button 
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-700 transition-colors"
          >
            Clear All
          </button>
        </div>
        
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                <p className="text-lg font-semibold text-primary">
                  ৳{item.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <button 
                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="font-medium w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Footer */}
      <div className="border-t p-6 space-y-4 flex-shrink-0">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal:</span>
            <span>৳{cartTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping:</span>
            <span>৳{shipping.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t pt-2">
            <span>Total:</span>
            <span className="text-primary">৳{total.toLocaleString()}</span>
          </div>
        </div>
        <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
          Proceed to Checkout
        </button>
        <button 
          onClick={onClose}
          className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}