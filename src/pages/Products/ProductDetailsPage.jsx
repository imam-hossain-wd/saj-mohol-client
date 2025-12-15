// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ChevronRight, ShoppingCart, Truck, CreditCard, ShieldCheck, Star } from 'lucide-react';
// import { cn } from '@/lib/utils';

// export default function ProductDetailsPage({slug}) {
//     console.log(slug)
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   // Product data
//   const product = {
//     name: "W.Skin Laboratory A.M. Cream (Anti-Melasma)",
//     code: "KSB-P0012",
//     brand: "W.skin Laboratory",
//     origin: "KOREA",
//     size: "50ML",
//     category: "Moisturizer",
//     status: "In Stock",
//     price: 1500,
//     currency: "$",
//     description: [
//       "Brightens skin and helps fade pigmentation spots like sun spots and acne scars in as little as 4 weeks",
//       "Helps smooth out fine lines, wrinkles, freckles, dark bags under the eyes, and uneven skin tone",
//       "Contains 20 kinds of plant extracts that treat, brighten, and moisturize the face",
//       "Improves skin texture by reducing wrinkles and fine lines",
//       "Addresses scars, dark circles, and uneven skin tone"
//     ],
//     ingredients: "Aqua, Niacinamide, Glycerin, Alpha-Arbutin, Hyaluronic Acid, 20 Plant Extracts",
//     howToUse: "Apply a small amount to clean face morning and night. Gently massage until fully absorbed.",
//     images: [
//       "/products/am-cream-1.jpg",
//       "/products/am-cream-2.jpg",
//       "/products/am-cream-3.jpg",
//       "/products/am-cream-4.jpg"
//     ]
//   };

//   const relatedProducts = [
//     {
//       id: 1,
//       name: "W.Skin Laboratory Night Cream",
//       price: 1800,
//       image: "/products/night-cream.jpg",
//       rating: 4.5
//     },
//     {
//       id: 2,
//       name: "W.Skin Laboratory Sunscreen",
//       price: 1200,
//       image: "/products/sunscreen.jpg",
//       rating: 4.8
//     },
//     {
//       id: 3,
//       name: "W.Skin Laboratory Serum",
//       price: 2000,
//       image: "/products/serum.jpg",
//       rating: 4.7
//     },
//     {
//       id: 4,
//       name: "W.Skin Laboratory Cleanser",
//       price: 900,
//       image: "/products/cleanser.jpg",
//       rating: 4.3
//     }
//   ];

//   const handleImageClick = (index) => {
//     setSelectedImage(index);
//     setIsModalOpen(true);
//   };

//   const incrementQuantity = () => setQuantity(prev => prev + 1);
//   const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

//   return (
//     <div className="bg-white">
//       {/* Breadcrumb */}
//       <div className="container mx-auto px-4 py-4">
//         <nav className="flex" aria-label="Breadcrumb">
//           <ol className="inline-flex items-center space-x-1 md:space-x-2">
//             <li className="inline-flex items-center">
//               <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <div className="flex items-center">
//                 <ChevronRight className="w-4 h-4 text-gray-400" />
//                 <Link href="/skincare" className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2">
//                   Skincare
//                 </Link>
//               </div>
//             </li>
//             <li aria-current="page">
//               <div className="flex items-center">
//                 <ChevronRight className="w-4 h-4 text-gray-400" />
//                 <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{product.name}</span>
//               </div>
//             </li>
//           </ol>
//         </nav>
//       </div>

//       {/* Product Section */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-8">
//           {/* Product Images */}
//           <div className="mb-8 lg:mb-0">
//             <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4 cursor-zoom-in" onClick={() => handleImageClick(selectedImage)}>
//               <Image
//                 src={product.images[selectedImage]}
//                 alt={product.name}
//                 fill
//                 className="object-cover object-center"
//                 quality={100}
//               />
//             </div>
//             <div className="grid grid-cols-4 gap-2">
//               {product.images.map((img, index) => (
//                 <div
//                   key={index}
//                   className={`relative h-24 rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === index ? 'border-primary' : 'border-transparent'}`}
//                   onClick={() => setSelectedImage(index)}
//                 >
//                   <Image
//                     src={img}
//                     alt={`${product.name} thumbnail ${index + 1}`}
//                     fill
//                     className="object-cover object-center"
//                     quality={100}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
//             <div className="flex items-center mb-4">
//               <div className="flex items-center">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star
//                     key={star}
//                     className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//                   />
//                 ))}
//               </div>
//               <span className="ml-2 text-sm text-gray-600">(42 reviews)</span>
//             </div>

//             <div className="mb-6">
//               <span className="text-3xl font-bold text-primary">{product.price} {product.currency}</span>
//             </div>

//             <div className="mb-6">
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <p className="text-sm text-gray-500">Product Code</p>
//                   <p className="font-medium">{product.code}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Brand</p>
//                   <p className="font-medium">{product.brand}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Origin</p>
//                   <p className="font-medium">{product.origin}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Size</p>
//                   <p className="font-medium">{product.size}</p>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <span className={`px-2 py-1 text-xs font-semibold rounded ${product.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                   {product.status}
//                 </span>
//               </div>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-sm font-medium text-gray-900">Description</h3>
//               <ul className="mt-2 space-y-2">
//                 {product.description.map((item, index) => (
//                   <li key={index} className="text-sm text-gray-600 flex items-start">
//                     <span className="mr-2">•</span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mb-6">
//               <div className="flex items-center mb-4">
//                 <div className="flex items-center border border-gray-300 rounded-md">
//                   <button
//                     onClick={decrementQuantity}
//                     className="px-3 py-1 text-gray-600 hover:bg-gray-100"
//                   >
//                     -
//                   </button>
//                   <span className="px-3 py-1">{quantity}</span>
//                   <button
//                     onClick={incrementQuantity}
//                     className="px-3 py-1 text-gray-600 hover:bg-gray-100"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-md font-medium flex items-center justify-center">
//                   <ShoppingCart className="w-5 h-5 mr-2" />
//                   Add to Cart
//                 </button>
//                 <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-md font-medium">
//                   Buy Now
//                 </button>
//               </div>
//             </div>

//             <div className="border-t border-gray-200 pt-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex items-center">
//                   <Truck className="w-5 h-5 text-gray-500 mr-2" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Free Delivery</p>
//                     <p className="text-xs text-gray-500">All over Bangladesh</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <CreditCard className="w-5 h-5 text-gray-500 mr-2" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Cash on Delivery</p>
//                     <p className="text-xs text-gray-500">Available</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <ShieldCheck className="w-5 h-5 text-gray-500 mr-2" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Secure Payment</p>
//                     <p className="text-xs text-gray-500">100% Secure</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Info Tabs */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="border-b border-gray-200">
//           <nav className="-mb-px flex space-x-8">
//             <button className="border-b-2 border-primary text-primary px-1 py-4 text-sm font-medium">
//               Description
//             </button>
//             <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-sm font-medium">
//               Ingredients
//             </button>
//             <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-sm font-medium">
//               How to Use
//             </button>
//             <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-sm font-medium">
//               Reviews (42)
//             </button>
//           </nav>
//         </div>

//         <div className="py-8">
//           <h3 className="text-lg font-medium text-gray-900 mb-4">Detailed Description</h3>
//           <div className="prose prose-sm text-gray-500">
//             <p>
//               When you use the {product.name}, it makes your skin brighter and helps fade pigmentation spots like sun spots and acne scars in as little as 4 weeks! Additionally, it will help smooth out fine lines, wrinkles, freckles, dark bags under the eyes, and uneven skin tone.
//             </p>
//             <p className="mt-4">
//               This cream does more than just make your skin look better; it also makes it feel better by getting rid of wrinkles and fine lines. The cream retains and releases moisture, leaving the face hydrated, dewy, and full. 20 kinds of plant extracts work together to treat, brighten, and moisturize the face. Say goodbye to rough, uneven spots and hello to silky smooth skin.
//             </p>
//             <p className="mt-4">
//               This cream addresses a wide range of skin issues and provides comprehensive care to ensure a flawless outcome. It improves the appearance of fine lines and wrinkles by making the skin firmer and more flexible. If you use it regularly, you can achieve a healthy, glowing skin tone.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="bg-gray-50 py-12">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {relatedProducts.map((product) => (
//               <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
//                 <div className="relative h-48">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-cover object-center"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
//                   <div className="flex items-center mb-2">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star
//                         key={star}
//                         className={`w-4 h-4 ${star <= Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//                       />
//                     ))}
//                     <span className="ml-1 text-xs text-gray-500">({product.rating})</span>
//                   </div>
//                   <p className="text-lg font-bold text-primary mb-3">{product.price} {product.currency}</p>
//                   <button className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md text-sm font-medium">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Image Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
//           <div className="relative max-w-4xl w-full max-h-screen">
//             <button
//               className="absolute -top-10 right-0 text-white hover:text-gray-300"
//               onClick={() => setIsModalOpen(false)}
//             >
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//             <div className="relative h-full w-full aspect-square">
//               <Image
//                 src={product.images[selectedImage]}
//                 alt={product.name}
//                 fill
//                 className="object-contain"
//                 quality={100}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ShoppingCart, Truck, CreditCard, ShieldCheck, Star, Pulse  } from 'lucide-react';
import { cn } from '@/lib/utils';
import { products } from '@/data/products';

export default function ProductDetailsPage({ slug }) {
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Find the product by slug or ID
  const product = products.find(p => p.id.toString() === slug || p.name.toLowerCase().replace(/ /g, '-') === slug);
  
  if (!product) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Get related products from the same brand
  const relatedProducts = products
    .filter(p => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const toggleWishlist = () => setIsWishlisted(!isWishlisted);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Link href={`/category/${product.category.toLowerCase()}`} className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2">
                  {product.category}
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Images */}
          <div className="mb-8 lg:mb-0">
            <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4 cursor-zoom-in" onClick={() => handleImageClick(selectedImage)}>
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover object-center"
                quality={100}
              />
              {/* Wishlist Button */}
              <button 
                onClick={toggleWishlist}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <Heart  className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}% OFF
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`relative h-24 rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === index ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    quality={100}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= Math.round(product.rating || 4) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">({product.rating ? Math.floor(product.rating * 10) : 42} reviews)</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">{product.price} {product.currency || '৳'}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice} {product.currency || '৳'}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Product Code</p>
                  <p className="font-medium">{product.code}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Brand</p>
                  <Link href={product.brandLink} className="font-medium hover:text-primary">
                    {product.brand}
                  </Link>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Origin</p>
                  <p className="font-medium">{product.origin}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Size</p>
                  <p className="font-medium">{product.size}</p>
                </div>
              </div>
              <div className="mt-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded ${product.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {product.status}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <ul className="mt-2 space-y-2">
                {product.description.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-md font-medium flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-md font-medium">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Free Delivery</p>
                    <p className="text-xs text-gray-500">All over Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Cash on Delivery</p>
                    <p className="text-xs text-gray-500">Available</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="w-5 h-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Secure Payment</p>
                    <p className="text-xs text-gray-500">100% Secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button className="border-b-2 border-primary text-primary px-1 py-4 text-sm font-medium">
              Description
            </button>
            <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-sm font-medium">
              Ingredients
            </button>
            <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-sm font-medium">
              How to Use
            </button>
            <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-sm font-medium">
              Reviews ({product.rating ? Math.floor(product.rating * 10) : 42})
            </button>
          </nav>
        </div>

        <div className="py-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Detailed Description</h3>
          <div className="prose prose-sm text-gray-500">
            {product.description.map((paragraph, index) => (
              <p key={index} className="mt-4 first:mt-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow group">
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="relative h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center"
                      />
                      {/* Discount Badge */}
                      {product.discount && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.discount}% OFF
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {product.brand} {product.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= Math.round(product.rating || 4) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-1 text-xs text-gray-500">({product.rating || 4})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-bold text-primary">
                          {product.price} {product.currency || '৳'}
                        </p>
                        {product.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">
                            {product.originalPrice} {product.currency || '৳'}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="relative max-w-4xl w-full max-h-screen">
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full w-full aspect-square">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
