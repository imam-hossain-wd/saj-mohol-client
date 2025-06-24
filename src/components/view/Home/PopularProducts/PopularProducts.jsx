// // components/popular-products.js
// 'use client';

// import { Star, ShoppingBag, Heart } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { products } from '@/data/products';



// export function PopularProducts() {
//   return (
//     <section className="py-12 md:py-16 bg-gradient-to-b from-white to-pink-50">
//       <div className="w-[90%] mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-3">
//             Popular Products
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Our customers' most loved beauty essentials
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {products.map((product) => (
//             <div 
//               key={product.id}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
//             >
//               <div className="relative">
//                 {/* Product Image */}
//                 <div 
//                   className="aspect-square bg-gray-100 bg-cover bg-center w-40 mx-auto h-auto"
//                   style={{ backgroundImage: `url(${product.image})` }}
//                 >
//                   {/* Discount Badge */}
//                   <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
//                     {product.discount}% OFF
//                   </div>
                  
//                   {/* Wishlist Button */}
//                   <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-primary hover:text-white transition-colors">
//                     <Heart className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>

//               <div className="p-4">
//                 {/* Rating */}
//                 <div className="flex items-center mb-2">
//                   <div className="flex text-amber-400">
//                     {[...Array(5)].map((_, i) => (
//                       <Star 
//                         key={i}
//                         className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
//                       />
//                     ))}
//                   </div>
//                   <span className="text-xs text-gray-500 ml-1">
//                     ({product.rating})
//                   </span>
//                 </div>

//                 {/* Product Name */}
//                 <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
//                   {product.name}
//                 </h3>

//                 {/* Size */}
//                 <p className="text-sm text-gray-500 mb-3">{product.size}</p>

//                 {/* Price */}
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-lg font-bold text-primary">
//                     ৳{product.price.toLocaleString()}
//                   </span>
//                   <span className="text-sm text-gray-400 line-through">
//                     ৳{product.originalPrice.toLocaleString()}
//                   </span>
//                 </div>

//                 {/* Features */}
//                 <ul className="text-xs text-gray-600 space-y-1 mb-4">
//                   {product.features.map((feature, i) => (
//                     <li key={i} className="flex items-center">
//                       <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Add to Cart Button */}
//                 <Button className="w-full gap-2">
//                   <ShoppingBag className="h-4 w-4" />
//                   Add to Cart
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-10">
//           <Button variant="outline" className="px-8 py-3">
//             View All Products
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


// components/popular-products.js
'use client';


import { ProductCard } from '@/components/shared/ProductCard/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import Link from 'next/link';

export function PopularProducts() {
  
  const popularProducts = [...products]
    .sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5))
    .slice(0, 10);

  return (
    <section className="py-8 md:py-4 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-3">
            Popular Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our customers' most loved beauty essentials
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="px-8 py-3">
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}