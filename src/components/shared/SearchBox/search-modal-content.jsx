// components/search/search-modal-content.jsx
'use client';

import { Search, Filter, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '@/context/app-context';

export function SearchModalContent({ onClose }) {
  const { searchQuery, setSearchQuery, filteredProducts } = useAppContext();
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [localQuery, setSearchQuery]);

  const categories = ['all', 'Toner', 'Cleanser', 'Moisturizer', 'Serum', 'Sunscreen', 'Kit'];
  const priceRanges = [
    { value: 'all', label: 'Any Price' },
    { value: 'under-1000', label: 'Under ৳1000' },
    { value: '1000-2000', label: '৳1000 - ৳2000' },
    { value: 'over-2000', label: 'Over ৳2000' },
  ];

  const handleClear = () => {
    setLocalQuery('');
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Search Header */}
      <div className="flex-shrink-0 p-4 border-b">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
              autoFocus
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
        </div>

        {/* Quick Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="flex-shrink-0 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
          
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="flex-shrink-0 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {priceRanges.map(range => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Results */}
      <div className="flex-1 overflow-auto">
        {localQuery ? (
          filteredProducts.length > 0 ? (
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-600">
                  Found {filteredProducts.length} products
                </p>
                <button className="flex items-center gap-1 text-sm text-primary">
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
              </div>
              
              <div className="grid gap-3">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                    onClick={onClose}
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm line-clamp-2">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {product.brand} • {product.category}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-semibold text-primary">
                          ৳{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            ৳{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6">
              <Search className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 text-center mb-4">
                We couldn't find any products matching "<span className="font-semibold">{localQuery}</span>"
              </p>
              <button
                onClick={handleClear}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )
        ) : (
          <div className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {['Toner', 'Moisturizer', 'Sunscreen', 'Serum', 'Cleanser', 'Snail', 'AHA BHA'].map((term) => (
                <button
                  key={term}
                  onClick={() => setLocalQuery(term)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}