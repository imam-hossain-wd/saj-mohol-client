// components/navigation/nav-menu-content.jsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function NavMenuContent({ onClose }) {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories', children: [
      'Men', 'Women', 'Kids', 'Accessories'
    ]},
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.children ? (
              <div className="py-3 border-b">
                <div className="flex items-center justify-between font-medium text-gray-900">
                  {item.name}
                  <ChevronRight className="h-4 w-4" />
                </div>
                <div className="mt-2 space-y-2 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child}
                      href={`/category/${child.toLowerCase()}`}
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={onClose}
                    >
                      {child}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={item.href}
                className="block py-3 border-b font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={onClose}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}