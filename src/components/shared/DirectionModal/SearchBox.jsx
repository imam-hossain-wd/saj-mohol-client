// components/SearchBox/SearchBox.jsx
'use client';

import { Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '@/context/app-context';

export function SearchBox() {
    const { searchQuery, setSearchQuery, filteredProducts } = useAppContext();
    const [isFocused, setIsFocused] = useState(false);
    const [localQuery, setLocalQuery] = useState(searchQuery);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSearchQuery(localQuery);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [localQuery, setSearchQuery]);

    const handleClear = () => {
        setLocalQuery('');
        setSearchQuery('');
    };

    return (
        <div className="relative w-full">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                    type="text"
                    placeholder="Search for products, brands..."
                    value={localQuery}
                    onChange={(e) => setLocalQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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

            {/* Search Results Dropdown */}
            {isFocused && localQuery && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-96 overflow-y-auto z-50">
                    {filteredProducts.length > 0 ? (
                        <div className="py-2">
                            {filteredProducts.slice(0, 10).map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/products/${product.id}`}
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
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
                                        <p className="font-medium text-gray-900 truncate">
                                            {product.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {product.brand} • ৳{product.price.toLocaleString()}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                            {filteredProducts.length > 10 && (
                                <div className="px-3 py-2 text-center text-sm text-gray-500 border-t">
                                    +{filteredProducts.length - 10} more products
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="p-4 text-center text-gray-500">
                            No products found for "{localQuery}"
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}