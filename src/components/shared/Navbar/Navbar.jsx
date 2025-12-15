
'use client';

import Link from 'next/link';
import { Heart, ShoppingCart, Search, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useAppContext } from '@/context/app-context';
import { SearchBox } from '../SearchBox/SearchBox';
import BottomNavbar from './BottomNavbar';
import { DirectionModal } from '../DirectionModal/DirectionModal';
import { WishlistContent } from '../DirectionModal/WishlistContent';
import { CartContent } from '../DirectionModal/CartContent';
import { SearchModalContent } from '../SearchBox/search-modal-content';
import { brandlogo } from '@/utils/assets';
import Image from 'next/image';

export function Navbar() {
  const {
    toggleCart,
    toggleWishlist,
    toggleSearch,
    isCartOpen,
    isWishlistOpen,
    isSearchOpen,
    cartItemsCount,
    wishlistCount
  } = useAppContext();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <header className={cn(
        'fixed top-0 z-50 w-full bg-white transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm',
      )}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">

            {/* Left Side - Mobile Menu & Logo */}
            <div className="flex items-center flex-1 lg:flex-none">
              {/* Mobile Menu Button - Visible only on small devices */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>

              {/* Logo */}
              {/* <Link href="/" className="flex items-center gap-2 group ml-2 lg:ml-0">
                <span className="text-4xl font-serif font-bold text-primary relative">
                  S
                  <span className="absolute -bottom-1 right-0 w-3 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xl font-serif font-medium text-gray-800">aj</span>
                  <span className="text-sm font-serif font-light text-gray-500 tracking-widest">Mohol</span>
                </div>
              </Link> */}

              <Link href="/" className="flex items-center gap-2 group">
                <Image className='w-20 h-20' src={brandlogo.logo} width={100} height={100} quality={100} alt="saj mohol logo" />
              </Link>

            </div>

            {/* Center - Search Box - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block lg:flex-1 lg:max-w-2xl px-4">
              <div className="w-full flex gap-2">
                <SearchBox />
              </div>
            </div>

            {/* Right Side - Icons */}
            <div className="flex items-center justify-end gap-4">
              {/* Search Button - Visible only on mobile */}
              <button
                onClick={toggleSearch}
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Wishlist Button - Hidden on mobile (in bottom nav), visible on desktop */}
              <button
                onClick={toggleWishlist}
                className="hidden lg:flex p-2 text-gray-700 hover:text-primary transition-colors relative"
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Button - Hidden on mobile (in bottom nav), visible on desktop */}
              <button
                onClick={toggleCart}
                className="hidden lg:flex p-2 text-gray-700 hover:text-primary transition-colors relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Shows when search is active on mobile */}
          {(isSearchOpen) && (
            <div className="lg:hidden pb-4">
              <SearchBox />
            </div>
          )}
        </div>
      </header>

      {/* Mobile Bottom Navbar - Only visible on small devices */}
      <BottomNavbar />

      {/* Mobile Menu Modal */}
      <DirectionModal
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        direction="left"
        title="Menu"
        size="sm"
        hideHeader={true}
      >
        <MobileMenuContent onClose={() => setIsMobileMenuOpen(false)} />
      </DirectionModal>

      {/* Wishlist Modal */}
      <DirectionModal
        isOpen={isWishlistOpen}
        onClose={toggleWishlist}
        direction="right"
        title="My Wishlist"
        description="Items you've saved for later"
        size="md"
      >
        <WishlistContent onClose={toggleWishlist} />
      </DirectionModal>

      {/* Cart Modal */}
      <DirectionModal
        isOpen={isCartOpen}
        onClose={toggleCart}
        direction="right"
        title="Shopping Cart"
        size="md"
      >
        <CartContent onClose={toggleCart} />
      </DirectionModal>

      {/* Search Modal - Full screen on mobile */}
      <DirectionModal
        isOpen={isSearchOpen}
        onClose={toggleSearch}
        direction="top"
        title="Search Products"
        size="full"
        className="lg:hidden" // Only show as modal on mobile
      >
        <SearchModalContent onClose={toggleSearch} />
      </DirectionModal>
    </>
  );
}

// Mobile Menu Content Component
function MobileMenuContent({ onClose }) {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'New Arrivals', href: '/new' },
    { name: 'Best Sellers', href: '/bestsellers' },
    { name: 'Sale', href: '/sale' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="p-6">
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block py-3 px-4 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 pt-6 border-t">
        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Account</h3>
        <div className="space-y-1">
          <Link
            href="/profile"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
          >
            My Account
          </Link>
          <Link
            href="/orders"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
          >
            My Orders
          </Link>
          <Link
            href="/wishlist"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
          >
            My Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
}


