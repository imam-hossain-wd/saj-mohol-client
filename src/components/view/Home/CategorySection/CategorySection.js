// // components/category-section.js
// 'use client';

// import Link from 'next/link';
// import { cn } from '@/lib/utils';
// import { ArrowRight } from 'lucide-react';

// const categories = [
//   {
//     name: 'Make Up',
//     href: '/makeup',
//     image: 'https://img.freepik.com/premium-photo/white-round-copy-space-set-beauty-products-flat-laytop-view_279659-995.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740',
//     description: 'Enhance your natural beauty with our premium cosmetics',
//     bgColor: 'bg-pink-50',
//   },
//   {
//     name: 'Skin Care',
//     href: '/skincare',
//     image: 'https://img.freepik.com/free-photo/front-view-woman-applying-face-cream_23-2148708051.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740',
//     description: 'Nourish and protect your skin with our expert formulations',
//     bgColor: 'bg-blue-50',
//   },
//   {
//     name: 'Personal Care',
//     href: '/personal-care',
//     image: 'https://img.freepik.com/free-photo/organic-body-oil-variety-soaps_23-2148796377.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740',
//     description: 'Pamper yourself with our luxurious care products',
//     bgColor: 'bg-purple-50',
//   },
//   {
//     name: 'Bags',
//     href: '/bags',
//     image: 'https://img.freepik.com/premium-photo/set-summer-clothes_93675-29.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740',
//     description: 'Stylish accessories to complement your look',
//     bgColor: 'bg-amber-50',
//   },
//   {
//     name: 'Jewelry',
//     href: '/jewelry',
//     image: 'https://img.freepik.com/premium-photo/jewelry-photography_808279-7.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740',
//     description: 'Elegant pieces to elevate your style',
//     bgColor: 'bg-rose-50',
//   },
//   {
//     name: 'Shoes',
//     href: '/shoes',
    // image: 'https://img.freepik.com/free-vector/footwear-colored-icons-set_98292-3308.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740',
//     description: 'Comfort meets fashion in our curated collection',
//     bgColor: 'bg-teal-50',
//   },
// ];

// export function CategorySection({ className }) {
//   return (
//     <section className={cn('py-12 md:py-16 lg:py-20', className)}>
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-4">
//             Shop By Category
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover our carefully curated collections for your beauty and fashion needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {categories.map((category) => (
//             <Link
//               key={category.name}
//               href={category.href}
//               className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               <div className={cn(
//                 "aspect-square overflow-hidden relative",
//                 category.bgColor
//               )}>
//                 {/* Replace with your actual image */}
//                 <div 
//                   className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
//                   style={{ backgroundImage: `url(${category.image})` }}
//                 >
//                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
//                 </div>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
//                 <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
//                 <p className="text-sm text-white/80 mb-3">{category.description}</p>
//                 <div className="flex items-center text-primary-200 group-hover:text-white transition-colors">
//                   <span className="text-sm font-medium">Shop Now</span>
//                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             href="/shop"
//             className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-sm transition-colors"
//           >
//             View All Categories
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';

// import Link from 'next/link';
// import { cn } from '@/lib/utils';
// import { ArrowRight } from 'lucide-react';

// const categories = [
//   {
//     name: 'Make Up',
//     href: '/makeup',
//     icon: '💄',
//     bg: 'bg-gradient-to-br from-pink-50 to-primary/10',
//   },
//   {
//     name: 'Skin Care',
//     href: '/skincare',
//     icon: '✨',
//     bg: 'bg-gradient-to-br from-blue-50 to-primary/10',
//   },
//   {
//     name: 'Personal Care',
//     href: '/personal-care',
//     icon: '🧴',
//     bg: 'bg-gradient-to-br from-green-50 to-primary/10',
//   },
//   {
//     name: 'Bags',
//     href: '/bags',
//     icon: '👜',
//     bg: 'bg-gradient-to-br from-amber-50 to-primary/10',
//   },
//   {
//     name: 'Jewelry',
//     href: '/jewelry',
//     icon: '💍',
//     bg: 'bg-gradient-to-br from-purple-50 to-primary/10',
//   },
//   {
//     name: 'Shoes',
//     href: '/shoes',
//     icon: '👠',
//     bg: 'bg-gradient-to-br from-red-50 to-primary/10',
//   },
// ];

// export function CategorySection({ className }) {
//   return (
//     <section className={cn('py-4 md:py-2 relative', className)}>
//       {/* Decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         {/* Premium Header */}
//         <div className="flex  md:flex-row md:items-end justify-between mb-10 gap-4">
//           <div>
//             <span className="text-sm font-medium text-primary mb-2 block">
//               SHOP BY CATEGORY
//             </span>
//             {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair tracking-tight">
//               Featured Collections
//             </h2> */}
//           </div>
          
//           <Link
//             href="/categories"
//             className="flex items-center gap-2 group text-sm font-medium px-4 py-2.5 rounded-full border border-primary/20 hover:border-primary/40 bg-white hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
//           >
//             <span className="text-primary">Explore All</span>
//             <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
//               <ArrowRight className="w-3 h-3" />
//             </div>
//           </Link>
//         </div>

//         {/* Luxury Category Grid */}
//         <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-6 gap-3 h-[280px]">
//           {categories.map((category) => (
//             <Link
//               key={category.name}
//               href={category.href}
//               className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
//             >
//               <div className={`aspect-square flex flex-col  items-center justify-center p-4 ${category.bg}`}>
//                 <div className="relative">
//                   <span className="text-5xl z-10 relative transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
//                     {category.icon}
//                   </span>
//                   <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
//                 </div>
//                 <h3 className="mt-4 text-sm font-medium text-gray-800 text-center group-hover:text-primary transition-colors duration-300">
//                   {category.name}
//                 </h3>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';

// import Link from 'next/link';
// import { cn } from '@/lib/utils';
// import { ArrowRight } from 'lucide-react';
// import { ReusableCarousel } from '@/components/shared/ReusableCarousel/ReusableCarousel';


// const categories = [
//   {
//     name: 'Make Up',
//     href: '/makeup',
//     icon: '💄',
//     bg: 'bg-gradient-to-br from-pink-50 to-primary/10',
//   },
//   {
//     name: 'Skin Care',
//     href: '/skincare',
//     icon: '✨',
//     bg: 'bg-gradient-to-br from-blue-50 to-primary/10',
//   },
//   {
//     name: 'Personal Care',
//     href: '/personal-care',
//     icon: '🧴',
//     bg: 'bg-gradient-to-br from-green-50 to-primary/10',
//   },
//   {
//     name: 'Bags',
//     href: '/bags',
//     icon: '👜',
//     bg: 'bg-gradient-to-br from-amber-50 to-primary/10',
//   },
//   {
//     name: 'Jewelry',
//     href: '/jewelry',
//     icon: '💍',
//     bg: 'bg-gradient-to-br from-purple-50 to-primary/10',
//   },
//   {
//     name: 'Shoes',
//     href: '/shoes',
//     icon: '👠',
//     bg: 'bg-gradient-to-br from-red-50 to-primary/10',
//   },
// ];

// export function CategorySection({ className }) {
//   return (
//     <section className={cn('py-4 md:py-16 relative', className)}>
//       {/* Decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         {/* Premium Header */}
//         <div className="flex md:flex-row md:items-end justify-between mb-10 gap-4">
//           <div>
//             <span className="text-sm font-medium text-primary mb-2 block">
//               SHOP BY CATEGORY
//             </span>
//           </div>
          
//           <Link
//             href="/categories"
//             className="flex items-center gap-2 group text-sm font-medium px-4 py-2.5 rounded-full border border-primary/20 hover:border-primary/40 bg-white hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
//           >
//             <span className="text-primary">Explore All</span>
//             <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
//               <ArrowRight className="w-3 h-3" />
//             </div>
//           </Link>
//         </div>

//         {/* Carousel for mobile, Grid for desktop */}
//         <div className="block md:hidden">
//           <ReusableCarousel
//             showButtons={true}
//             className="pb-8"
//             settings={{
//               slidesPerView: 4,
//               spaceBetween: 12,
//               breakpoints: {
//                 640: {
//                   slidesPerView: 5,
//                 },
//                 768: {
//                   slidesPerView: 6,
//                 }
//               }
//             }}
//           >
//             {categories.map((category) => (
//               <div key={category.name} className="h-full">
//                 <Link
//                   href={category.href}
//                   className="group relative h-full block overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
//                 >
//                   <div className={`aspect-square flex flex-col items-center justify-center p-4 ${category.bg}`}>
//                     <div className="relative">
//                       <span className="text-5xl z-10 relative transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
//                         {category.icon}
//                       </span>
//                       <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
//                     </div>
//                     <h3 className="mt-4 text-sm font-medium text-gray-800 text-center group-hover:text-primary transition-colors duration-300">
//                       {category.name}
//                     </h3>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </ReusableCarousel>
//         </div>

//         {/* Grid for desktop */}
//         <div className="hidden md:grid grid-cols-5 lg:grid-cols-6 gap-3 h-[280px]">
//           {categories.map((category) => (
//             <Link
//               key={category.name}
//               href={category.href}
//               className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
//             >
//               <div className={`aspect-square flex flex-col items-center justify-center p-4 ${category.bg}`}>
//                 <div className="relative">
//                   <span className="text-5xl z-10 relative transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
//                     {category.icon}
//                   </span>
//                   <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
//                 </div>
//                 <h3 className="mt-4 text-sm font-medium text-gray-800 text-center group-hover:text-primary transition-colors duration-300">
//                   {category.name}
//                 </h3>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { ReusableCarousel } from '@/components/shared/ReusableCarousel/ReusableCarousel';

const categories = [
  {
    name: 'Make Up',
    href: '/makeup',
    icon: '💄',
    bg: 'bg-gradient-to-br from-pink-50 to-primary/10',
  },
  {
    name: 'Skin Care',
    href: '/skincare',
    icon: '✨',
    bg: 'bg-gradient-to-br from-blue-50 to-primary/10',
  },
  {
    name: 'Personal Care',
    href: '/personal-care',
    icon: '🧴',
    bg: 'bg-gradient-to-br from-green-50 to-primary/10',
  },
  {
    name: 'Bags',
    href: '/bags',
    icon: '👜',
    bg: 'bg-gradient-to-br from-amber-50 to-primary/10',
  },
  {
    name: 'Jewelry',
    href: '/jewelry',
    icon: '💍',
    bg: 'bg-gradient-to-br from-purple-50 to-primary/10',
  },
  {
    name: 'Shoes',
    href: '/shoes',
    icon: '👠',
    bg: 'bg-gradient-to-br from-red-50 to-primary/10',
  },
  {
    name: 'Watch',
    href: '/watch',
    icon: '⌚',
    bg: 'bg-gradient-to-br from-gray-50 to-primary/10',
  },
  {
    name: 'Basket',
    href: '/basket',
    icon: '🧺',
    bg: 'bg-gradient-to-br from-yellow-50 to-primary/10',
  },
  {
    name: 'Serum',
    href: '/serum',
    icon: '🧪',
    bg: 'bg-gradient-to-br from-indigo-50 to-primary/10',
  },
  {
    name: 'Toner',
    href: '/toner',
    icon: '💦',
    bg: 'bg-gradient-to-br from-cyan-50 to-primary/10',
  },
]

export function CategorySection({ className }) {
  return (
    <section className={cn('py-4 md:py-8 relative', className)}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Premium Header */}
        <div className="flex md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xl font-medium text-primary mb-2 block">
              SHOP BY CATEGORY
            </span>
          </div>
          
          <Link
            href="/categories"
            className="flex items-center gap-2 group text-sm font-medium px-4 py-2.5 rounded-full border border-primary/20 hover:border-primary/40 bg-white hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span className="text-primary">Explore All</span>
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </div>

        {/* Responsive Carousel */}
        <div className="pb-8">
          <ReusableCarousel
            showButtons={true}
            className="pb-8"
            settings={{
              slidesPerView: 3,
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
            {categories.map((category) => (
              <div key={category.name} className="h-full">
                <Link
                  href={category.href}
                  className="group relative h-full block overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
                >
                  <div className={`aspect-square flex flex-col items-center justify-center p-4 ${category.bg}`}>
                    <div className="relative">
                      <span className="text-5xl z-10 relative transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                        {category.icon}
                      </span>
                      <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    </div>
                    <h3 className="mt-4 text-sm font-medium text-gray-800 text-center group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </ReusableCarousel>
        </div>
      </div>
    </section>
  );
}