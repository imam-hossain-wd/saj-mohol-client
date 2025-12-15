// components/sections/trust-section.tsx
'use client';

import { Shield, Globe, Truck, RefreshCw, MessageCircle } from 'lucide-react';

export function TrustSection() {
  const trustItems = [
    {
      icon: Shield,
      title: '100% Authentic',
      description: 'Guaranteed original Korean products',
    },
    {
      icon: Globe,
      title: 'Imported from Korea',
      description: 'Directly sourced from Korea',
    },
    {
      icon: Truck,
      title: 'Cash on Delivery',
      description: 'Pay when you receive',
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: '7-day return policy',
    },
    {
      icon: MessageCircle,
      title: 'Expert Guidance',
      description: 'Free skin consultation',
    },
  ];

  return (
    <section className="border-t border-b border-gray-100 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-gray-100">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className={`group px-4 py-6 hover:bg-gray-50/50 transition-colors ${
                  index === 0 ? '' : ''
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon with subtle background */}
                  <div className="relative mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    {/* Optional subtle ring on hover */}
                    <div className="absolute inset-0 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Text content - ultra compact */}
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}