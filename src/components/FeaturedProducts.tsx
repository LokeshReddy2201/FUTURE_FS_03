
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Stylish Summer Dress',
    price: 599,
    originalPrice: 999,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
    rating: 4.5,
    reviews: 120,
    category: 'Fashion'
  },
  {
    id: '2',
    name: 'Wireless Bluetooth Headphones',
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.7,
    reviews: 89,
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Home Decor Plant Pot Set',
    price: 299,
    originalPrice: 499,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
    rating: 4.3,
    reviews: 45,
    category: 'Home & Kitchen'
  },
  {
    id: '4',
    name: 'Premium Face Care Kit',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
    rating: 4.6,
    reviews: 67,
    category: 'Beauty'
  },
  {
    id: '5',
    name: 'Casual Sneakers',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
    rating: 4.4,
    reviews: 234,
    category: 'Fashion'
  },
  {
    id: '6',
    name: 'Smart Watch',
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    rating: 4.8,
    reviews: 156,
    category: 'Electronics'
  },
  {
    id: '7',
    name: 'Yoga Mat Premium',
    price: 799,
    originalPrice: 1299,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
    rating: 4.5,
    reviews: 78,
    category: 'Sports'
  },
  {
    id: '8',
    name: 'Kitchen Cookbook Set',
    price: 499,
    originalPrice: 799,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    rating: 4.2,
    reviews: 92,
    category: 'Books'
  },
];

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
  searchQuery?: string;
  selectedCategory?: string;
}

const FeaturedProducts = ({ onAddToCart, searchQuery = '', selectedCategory = '' }: FeaturedProductsProps) => {
  const [sortBy, setSortBy] = useState('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = featuredProducts;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'discount':
        return [...filtered].sort((a, b) => b.discount - a.discount);
      default:
        return filtered;
    }
  }, [searchQuery, selectedCategory, sortBy]);

  const getTitle = () => {
    if (searchQuery) return `Search Results for "${searchQuery}"`;
    if (selectedCategory) return `${selectedCategory} Products`;
    return 'Featured Products';
  };

  const getSubtitle = () => {
    if (searchQuery || selectedCategory) {
      return `${filteredAndSortedProducts.length} products found`;
    }
    return 'Handpicked products just for you';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{getTitle()}</h2>
          <p className="text-gray-600">{getSubtitle()}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="discount">Best Discount</option>
            </select>
          </div>
          
          <Button variant="outline" className="hidden sm:flex">
            View All
          </Button>
        </div>
      </div>
      
      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your search or browse our categories</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => onAddToCart(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
