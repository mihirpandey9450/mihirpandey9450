const HowItWorks = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          How It Works
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Browse Coupons</h4>
            <p className="text-gray-600">
              Explore hundreds of exclusive student discounts from local restaurants.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Claim Your Deal</h4>
            <p className="text-gray-600">
              Click to reveal your unique coupon code and save it to your account.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Show & Save</h4>
            <p className="text-gray-600">
              Present your coupon at checkout and enjoy instant savings on your meal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
