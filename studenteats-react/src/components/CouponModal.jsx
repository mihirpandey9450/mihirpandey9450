import { useState } from 'react';

const CouponModal = ({ coupon, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!coupon) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl font-light leading-none"
        >
          ×
        </button>
        
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{coupon.image}</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{coupon.title}</h3>
          <p className="text-lg text-gray-600 font-medium">{coupon.restaurant}</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Coupon Code</div>
              <div className="text-2xl font-bold text-indigo-600 tracking-wider">{coupon.code}</div>
            </div>
            <button
              onClick={handleCopyCode}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">{coupon.description}</p>
        
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-semibold text-gray-900">Valid Until:</span>
            <span className="text-gray-600 ml-2">{coupon.expiry}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900">Terms:</span>
            <span className="text-gray-600 ml-2">{coupon.terms}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;
