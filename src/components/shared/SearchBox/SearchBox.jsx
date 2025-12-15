// 'use client';

// import { Search, X } from 'lucide-react';
// import { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export function SearchBox({ products }) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showResults, setShowResults] = useState(false);
//   const [topSearches, setTopSearches] = useState([]);
//   const searchRef = useRef(null);

//   // Get top products for initial display
//   useEffect(() => {
//     const topProducts = products
//       .sort((a, b) => b.rating - a.rating)
//       .slice(0, 2);
//     setTopSearches(topProducts);
//   }, [products]);

//   // Close results when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setShowResults(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     setShowResults(e.target.value.length > 0);
//   };

//   const clearSearch = () => {
//     setSearchQuery('');
//     setShowResults(false);
//   };

//   // Filter products based on search query
//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     product.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Common search terms
//   const popularSearches = [
//     'hair care',
//     'skin care',
//     'serums',
//     'moisturizers',
//     'cerave'
//   ];

//   return (
//     <div className="relative w-full max-w-xl mx-4" ref={searchRef}>
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//         <input
//           type="text"
//           placeholder="What are you looking for?"
//           className="w-full pl-10 pr-10 py-2 lg:py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
//           value={searchQuery}
//           onChange={handleSearch}
//           onFocus={() => setShowResults(true)}
//         />
//         {searchQuery && (
//           <button
//             onClick={clearSearch}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//           >
//             <X className="h-5 w-5" />
//           </button>
//         )}
//       </div>

//       {/* Search Results Dropdown */}
//       {showResults && (
//         <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-[500px] overflow-y-auto">
//           {searchQuery ? (
//             <div className="p-4">
//               <h2 className="text-lg font-semibold mb-4">
//                 Results for "{searchQuery}"
//               </h2>
              
//               {filteredProducts.length > 0 ? (
//                 <div className="space-y-4">
//                   <h3 className="text-md font-medium text-gray-700">Products</h3>
//                   <div className="space-y-3">
//                     {filteredProducts.slice(0, 8).map((product) => (
//                       <Link
//                         key={product.id}
//                         href={`/products/${product.id}`}
//                         className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                         onClick={() => setShowResults(false)}
//                       >
//                         <div className="relative w-12 h-12 flex-shrink-0">
//                           <Image
//                             src={product.image}
//                             alt={product.name}
//                             fill
//                             className="rounded-md object-cover"
//                           />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-sm font-medium text-gray-900 truncate">
//                             {product.brand} {product.name}
//                           </h4>
//                           <p className="text-xs text-gray-500 truncate">
//                             {product.category}
//                           </p>
//                         </div>
//                         <div className="text-sm font-medium text-primary">
//                           ৳{product.price}
//                           {product.originalPrice && (
//                             <span className="ml-1 text-xs text-gray-400 line-through">
//                               ৳{product.originalPrice}
//                             </span>
//                           )}
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-6">
//                   <p className="text-gray-500">No products found</p>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="p-4">
//               <h3 className="text-md font-semibold mb-3">Top Products</h3>
//               <div className="space-y-3 mb-4">
//                 {topSearches.map((product) => (
//                   <Link
//                     key={product.id}
//                     href={`/products/${product.id}`}
//                     className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                     onClick={() => setShowResults(false)}
//                   >
//                     <div className="relative w-12 h-12 flex-shrink-0">
//                       <Image
//                         src={product.image}
//                         alt={product.name}
//                         fill
//                         className="rounded-md object-cover"
//                       />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h4 className="text-sm font-medium text-gray-900 truncate">
//                         {product.brand} {product.name}
//                       </h4>
//                       <p className="text-xs text-gray-500 truncate">
//                         {product.category}
//                       </p>
//                     </div>
//                     <div className="text-sm font-medium text-primary">
//                       ৳{product.price}
//                     </div>
//                   </Link>
//                 ))}
//               </div>

//               <h3 className="text-md font-semibold mb-2">Top Search</h3>
//               <div className="space-y-2">
//                 {popularSearches.map((term, index) => (
//                   <button
//                     key={index}
//                     onClick={() => {
//                       setSearchQuery(term);
//                       setShowResults(true);
//                     }}
//                     className="block w-full text-left px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded"
//                   >
//                     {term}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }


// components/SearchBox/SearchBox.jsx
'use client';

import { Search, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '@/context/app-context';

export function SearchBox() {
  const { searchQuery, setSearchQuery, filteredProducts } = useAppContext();
  const [isFocused, setIsFocused] = useState(false);
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const inputRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [localQuery, setSearchQuery]);

  const handleClear = () => {
    setLocalQuery('');
    setSearchQuery('');
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for products, brands..."
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm lg:text-base"
        />
        {localQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown - Enhanced for mobile */}
      {isFocused && localQuery && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-96 overflow-y-auto z-50">
          <div className="p-3 border-b border-gray-100">
            <p className="text-sm text-gray-600">
              {filteredProducts.length} results for "<span className="font-semibold">{localQuery}</span>"
            </p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="py-2">
              {filteredProducts.slice(0, 8).map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {product.brand}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      ৳{product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
              {filteredProducts.length > 8 && (
                <div className="px-3 py-2 text-center text-sm text-gray-500 border-t">
                  <Link 
                    href={`/search?q=${encodeURIComponent(localQuery)}`}
                    className="text-primary hover:underline"
                  >
                    View all {filteredProducts.length} products
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm">No products found for</p>
              <p className="font-semibold">"{localQuery}"</p>
              <p className="text-xs text-gray-400 mt-2">Try different keywords</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}