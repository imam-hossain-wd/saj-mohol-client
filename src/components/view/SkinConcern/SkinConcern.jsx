// components/sections/skin-concern-section.tsx
'use client';

import { Droplets, CircleDot, Zap, Wind, Shield, Sun } from 'lucide-react';
import Link from 'next/link';

export default function SkinConcern() {
  const concerns = [
    {
      icon: Droplets,
      title: 'Acne & Pimples',
      description: 'Clear stubborn acne',
      color: 'from-pink-500 to-rose-500',
      href: '/skin-concerns/acne',
    },
    {
      icon: CircleDot,
      title: 'Dark Spots',
      description: 'Reduce pigmentation',
      color: 'from-purple-500 to-indigo-500',
      href: '/skin-concerns/dark-spots',
    },
    {
      icon: Zap,
      title: 'Dull Skin',
      description: 'Brighten & glow',
      color: 'from-amber-500 to-orange-500',
      href: '/skin-concerns/dull-skin',
    },
    {
      icon: Wind,
      title: 'Dry Skin',
      description: 'Deep hydration',
      color: 'from-blue-500 to-cyan-500',
      href: '/skin-concerns/dry-skin',
    },
    {
      icon: Shield,
      title: 'Oily & Sensitive',
      description: 'Balance & soothe',
      color: 'from-emerald-500 to-green-500',
      href: '/skin-concerns/oily-sensitive',
    },
    {
      icon: Sun,
      title: 'Sun Protection',
      description: 'UV damage care',
      color: 'from-red-500 to-pink-500',
      href: '/skin-concerns/sun-protection',
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - Minimal */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Solve Your Skin Concerns
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Expert solutions for Bangladeshi skin
          </p>
        </div>

        {/* Concerns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {concerns.map((concern) => {
            const Icon = concern.icon;
            return (
              <Link
                key={concern.title}
                href={concern.href}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-3 hover:border-primary hover:shadow-sm transition-all duration-200">
                  {/* Icon with gradient */}
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${concern.color} flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Text content */}
                  <div className="text-center space-y-0.5">
                    <h3 className="font-medium text-gray-900 text-sm leading-tight">
                      {concern.title}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {concern.description}
                    </p>
                  </div>
                  
                  {/* Minimal CTA */}
                  <div className="mt-2 flex justify-center">
                    <span className="text-primary text-xs font-medium group-hover:underline">
                      See Solutions
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}