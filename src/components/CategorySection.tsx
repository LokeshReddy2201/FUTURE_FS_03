
const categories = [
  { name: 'Fashion', emoji: '👗', color: 'bg-pink-100 hover:bg-pink-200' },
  { name: 'Electronics', emoji: '📱', color: 'bg-blue-100 hover:bg-blue-200' },
  { name: 'Home & Kitchen', emoji: '🏠', color: 'bg-green-100 hover:bg-green-200' },
  { name: 'Beauty', emoji: '💄', color: 'bg-purple-100 hover:bg-purple-200' },
  { name: 'Sports', emoji: '⚽', color: 'bg-orange-100 hover:bg-orange-200' },
  { name: 'Books', emoji: '📚', color: 'bg-yellow-100 hover:bg-yellow-200' },
  { name: 'Toys', emoji: '🧸', color: 'bg-red-100 hover:bg-red-200' },
  { name: 'Automotive', emoji: '🚗', color: 'bg-gray-100 hover:bg-gray-200' },
];

const CategorySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
        <p className="text-gray-600">Discover products across all categories</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`${category.color} rounded-xl p-6 text-center cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md`}
          >
            <div className="text-3xl mb-2">{category.emoji}</div>
            <p className="font-medium text-gray-800 text-sm">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
