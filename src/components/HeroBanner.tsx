
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Discover Amazing
              <span className="block">Products</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Shop from millions of products at unbeatable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Explore Categories
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-64 lg:h-96 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🛍️</span>
                </div>
                <p className="text-lg font-medium">Amazing Deals Await!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
