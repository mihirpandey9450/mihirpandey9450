const Filters = ({ searchTerm, setSearchTerm, categoryFilter, setCategoryFilter, discountFilter, setDiscountFilter }) => {
  return (
    <section id="coupons" className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Browse Coupons</h3>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search restaurants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              <option value="all">All Categories</option>
              <option value="pizza">Pizza</option>
              <option value="burger">Burgers</option>
              <option value="asian">Asian</option>
              <option value="mexican">Mexican</option>
              <option value="cafe">Café</option>
              <option value="healthy">Healthy</option>
            </select>
            
            <select
              value={discountFilter}
              onChange={(e) => setDiscountFilter(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              <option value="all">All Discounts</option>
              <option value="high">30%+ Off</option>
              <option value="medium">20-29% Off</option>
              <option value="low">10-19% Off</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
