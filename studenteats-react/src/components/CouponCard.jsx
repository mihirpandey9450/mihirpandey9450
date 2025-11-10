const CouponCard = ({ coupon, onOpenModal }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
         onClick={() => onOpenModal(coupon)}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-5xl">{coupon.image}</div>
          <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
            {coupon.discount}% OFF
          </div>
        </div>
        
        <h4 className="text-xl font-bold text-gray-900 mb-2">{coupon.title}</h4>
        <p className="text-gray-600 font-medium mb-3">{coupon.restaurant}</p>
        <p className="text-gray-500 text-sm mb-4">{coupon.description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500">Valid until {coupon.expiry}</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
            View Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
