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
//     image: 'https://img.freepik.com/free-vector/footwear-colored-icons-set_98292-3308.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740',
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


// components/compact-category-section.js
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

const categories = [
  {
    name: 'Make Up',
    href: '/makeup',
    image: '/images/categories/makeup.jpg',
    icon: '💄',
  },
  {
    name: 'Skin Care',
    href: '/skincare',
    image: '/images/categories/skincare.jpg',
    icon: '✨',
  },
  {
    name: 'Personal Care',
    href: '/personal-care',
    image: '/images/categories/personal-care.jpg',
    icon: '🧴',
  },
  {
    name: 'Bags',
    href: '/bags',
    image: '/images/categories/bags.jpg',
    icon: '👜',
  },
  {
    name: 'Jewelry',
    href: '/jewelry',
    image: '/images/categories/jewelry.jpg',
    icon: '💍',
  },
  {
    name: 'Shoes',
    href: '/shoes',
    image: '/images/categories/shoes.jpg',
    icon: '👠',
  },
];

export function CategorySection({ className }) {
  return (
    <section className={cn('py-4 md:py-4', className)}>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-6 px-4">
          Shop Categories
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 px-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="aspect-square bg-gray-50 flex flex-col items-center justify-center p-4">
                <span className="text-3xl mb-2 transition-transform group-hover:scale-110">
                  {category.icon}
                </span>
                <h3 className="text-sm font-medium text-gray-800 text-center">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}