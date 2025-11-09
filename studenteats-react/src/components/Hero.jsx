const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Exclusive Student Discounts at Your Favorite Restaurants
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Save up to 50% with verified student coupons. Eat well, spend less.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Restaurants</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Active Coupons</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Students Saving</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
