// import { Home, Search, ShoppingBag, Heart , CircleUserRound } from 'lucide-react';
// import Link from 'next/link';

// export default function BottomNavbar() {
//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-40 md:hidden shadow-lg">
//       <div className="flex justify-around items-center h-16">
//         <Link href="/" className="flex flex-col items-center justify-center p-2 text-primary">
//           <Home className="h-6 w-6" />
//           <span className="text-xs mt-1">Home</span>
//         </Link>
//         <Link href="/search" className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-primary">
//           <Search className="h-6 w-6" />
//           <span className="text-xs mt-1">Search</span>
//         </Link>
//         <Link href="/wishlist" className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-primary">
//           <Heart  className="h-6 w-6" />
//           <span className="text-xs mt-1">Wishlist</span>
//         </Link>
//         <Link href="/cart" className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-primary relative">
//           <ShoppingBag className="h-6 w-6" />
//           <span className="absolute top-0 right-4 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//             0
//           </span>
//           <span className="text-xs mt-1">Cart</span>
//         </Link>
//         <Link href="/account" className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-primary">
//           <CircleUserRound className="h-6 w-6" />
//           <span className="text-xs mt-1">Account</span>
//         </Link>
//       </div>
//     </div>
//   );
// }

// components/navbar/BottomNavbar.jsx
'use client';

import { Home, Search, Heart, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { useAppContext } from '@/context/app-context';

export default function BottomNavbar() {
  const { 
    toggleCart, 
    toggleWishlist, 
    toggleSearch,
    cartItemsCount,
    wishlistCount
  } = useAppContext();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Search, label: 'Search', onClick: toggleSearch },
    { icon: Heart, label: 'Wishlist', onClick: toggleWishlist, badge: wishlistCount },
    { icon: ShoppingCart, label: 'Cart', onClick: toggleCart, badge: cartItemsCount },
    { icon: User, label: 'Profile', href: '/profile' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex flex-col items-center py-2 px-3">
              <div className="relative">
                <Icon className="h-5 w-5 text-gray-600" />
                {item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1 text-gray-600">{item.label}</span>
            </div>
          );

          if (item.href) {
            return (
              <Link key={item.label} href={item.href} className="flex-1">
                {content}
              </Link>
            );
          }

          return (
            <button
              key={item.label}
              onClick={item.onClick}
              className="flex-1 active:bg-gray-100 transition-colors"
            >
              {content}
            </button>
          );
        })}
      </div>
    </nav>
  );
}