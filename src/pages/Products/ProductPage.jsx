'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, ChevronDown, ChevronUp, Star, ShoppingCart, Heart , ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Import your products data
import { products } from '@/data/products';

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    priceRange: '',
    status: ''
  });

  // Get unique categories and brands for filters
  const categories = [...new Set(products.map(product => product.category))];
  const brands = [...new Set(products.map(product => product.brand))];
  const priceRanges = [
    { label: 'Under ৳1000', value: '0-1000' },
    { label: '৳1000 - ৳1500', value: '1000-1500' },
    { label: '৳1500 - ৳2000', value: '1500-2000' },
    { label: 'Over ৳2000', value: '2000-10000' }
  ];

  // Filter products based on search term and selected filters
  useEffect(() => {
    let results = products;

    // Apply search filter
    if (searchTerm) {
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedFilters.category.length > 0) {
      results = results.filter(product =>
        selectedFilters.category.includes(product.category)
      );
    }

    // Apply brand filter
    if (selectedFilters.brand.length > 0) {
      results = results.filter(product =>
        selectedFilters.brand.includes(product.brand)
      );
    }

    // Apply price range filter
    if (selectedFilters.priceRange) {
      const [min, max] = selectedFilters.priceRange.split('-').map(Number);
      results = results.filter(product => {
        const price = product.price || 0;
        return price >= min && price <= max;
      });
    }

    // Apply status filter
    if (selectedFilters.status) {
      results = results.filter(product =>
        product.status === selectedFilters.status
      );
    }

    setFilteredProducts(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedFilters]);

  // Toggle filter selection
  const toggleFilter = (type, value) => {
    setSelectedFilters(prev => {
      if (type === 'category' || type === 'brand') {
        const currentValues = prev[type];
        return {
          ...prev,
          [type]: currentValues.includes(value)
            ? currentValues.filter(item => item !== value)
            : [...currentValues, value]
        };
      } else {
        return {
          ...prev,
          [type]: prev[type] === value ? '' : value
        };
      }
    });
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Shop Premium Korean Products</h1>
          <p className="text-xl mb-8">Discover authentic Korean skincare, cosmetics, and more</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Button (Mobile) */}
          <button
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            {showFilters ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white p-4 rounded-lg shadow-sm h-fit`}>
            <h3 className="font-bold text-lg mb-4">Filters</h3>

            {/* Categories Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Categories</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      checked={selectedFilters.category.includes(category)}
                      onChange={() => toggleFilter('category', category)}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Brands</h4>
              <div className="space-y-2">
                {brands.map(brand => (
                  <div key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`brand-${brand}`}
                      checked={selectedFilters.brand.includes(brand)}
                      onChange={() => toggleFilter('brand', brand)}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <div key={range.value} className="flex items-center">
                    <input
                      type="radio"
                      id={`price-${range.value}`}
                      name="priceRange"
                      checked={selectedFilters.priceRange === range.value}
                      onChange={() => toggleFilter('priceRange', range.value)}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                    />
                    <label htmlFor={`price-${range.value}`} className="ml-2 text-sm text-gray-700">
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Availability</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="status-instock"
                    name="status"
                    checked={selectedFilters.status === 'In Stock'}
                    onChange={() => toggleFilter('status', 'In Stock')}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label htmlFor="status-instock" className="ml-2 text-sm text-gray-700">
                    In Stock
                  </label>
                </div>
              </div>
            </div>

            {/* Clear Filters Button */}
            <button
              onClick={() => setSelectedFilters({
                category: [],
                brand: [],
                priceRange: '',
                status: ''
              })}
              className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Clear All Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Info */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
              </p>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm text-gray-600">Sort by:</label>
                <select
                  id="sort"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group">
                    {/* Product Image */}
                    <div className="relative aspect-square">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center"
                        quality={100}
                      />
                      {/* Wishlist Button */}
                      <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <Heart  className="w-5 h-5 text-gray-400 hover:text-red-500" />
                      </button>
                      {/* Discount Badge */}
                      {product.discount && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.discount}% OFF
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <Link href={`/products/${product.id}`} className="block">
                        <h3 className="text-sm font-medium text-gray-900 mb-1 hover:text-primary transition-colors line-clamp-2">
                          {product.brand} {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-1 text-xs text-gray-500">(42)</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold text-primary">
                          ৳{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ৳{product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Size and Status */}
                      <div className="flex justify-between text-xs text-gray-500 mb-3">
                        <span>{product.size}</span>
                        <span className={`font-medium ${product.status === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                          {product.status}
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedFilters({
                      category: [],
                      brand: [],
                      priceRange: '',
                      status: ''
                    });
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > productsPerPage && (
              <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
                <div>
                  <p className="text-sm text-gray-700">
                    Page <span className="font-medium">{currentPage}</span> of{' '}
                    <span className="font-medium">{totalPages}</span>
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${currentPage === number ? 'z-10 bg-primary border-primary text-white' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                    >
                      {number}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}