
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
];

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
}

const FeaturedProducts = ({ onAddToCart }: FeaturedProductsProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Handpicked products just for you</p>
        </div>
        <Button variant="outline" className="hidden sm:flex">
          View All
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
