import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import CouponCard from './components/CouponCard';
import CouponModal from './components/CouponModal';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { coupons } from './data/coupons';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [discountFilter, setDiscountFilter] = useState('all');
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const filteredCoupons = useMemo(() => {
    return coupons.filter(coupon => {
      const matchesSearch = coupon.restaurant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           coupon.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = categoryFilter === 'all' || coupon.category === categoryFilter;
      
      let matchesDiscount = true;
      if (discountFilter === 'high') {
        matchesDiscount = coupon.discount >= 30;
      } else if (discountFilter === 'medium') {
        matchesDiscount = coupon.discount >= 20 && coupon.discount < 30;
      } else if (discountFilter === 'low') {
        matchesDiscount = coupon.discount >= 10 && coupon.discount < 20;
      }
      
      return matchesSearch && matchesCategory && matchesDiscount;
    });
  }, [searchTerm, categoryFilter, discountFilter]);

  const handleOpenModal = (coupon) => {
    setSelectedCoupon(coupon);
  };

  const handleCloseModal = () => {
    setSelectedCoupon(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        discountFilter={discountFilter}
        setDiscountFilter={setDiscountFilter}
      />
      
      <section id="restaurants" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredCoupons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoupons.map(coupon => (
                <CouponCard
                  key={coupon.id}
                  coupon={coupon}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No coupons found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <HowItWorks />
      <Footer />
      
      {selectedCoupon && (
        <CouponModal
          coupon={selectedCoupon}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
