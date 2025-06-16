'use client'
import Ract, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function GiftCardTemplate() {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const amounts = [
    { value: '10', label: '$10.00' },
    { value: '25', label: '$25.00' },
    { value: '50', label: '$50.00' },
    { value: '100', label: '$100.00' }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-screen pt-20">
        {/* Left side - Gift Card Image */}
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button className="backdrop-blur-sm p-2 rounded-full shadow-lg transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Gift Card Design */}
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-8 shadow-lg overflow-hidden">
            {/* Logo */}
            <div className="absolute top-4 left-4">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                <div className="text-white text-xs font-bold text-center">
                  <div>LADY</div>
                  <div>TING</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-amber-300 to-orange-400 rounded-full transform rotate-12"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
              <div className="w-full h-full bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-full transform -rotate-12"></div>
            </div>
            
            {/* Golden ribbon */}
            <div className="absolute top-0 right-8 w-16 h-24 bg-gradient-to-b from-amber-400 to-amber-600 transform rotate-12 shadow-lg"></div>
            <div className="absolute top-0 right-12 w-16 h-24 bg-gradient-to-b from-yellow-300 to-amber-500 transform rotate-12 shadow-md opacity-80"></div>
            
            {/* Main text */}
            <div className="mt-20 text-center">
              <h1 className="text-6xl font-bold text-slate-800 mb-2">GIFT</h1>
              <p className="text-2xl text-amber-600 font-script italic mb-8">Voucher</p>
              <p className="text-sm text-slate-600 uppercase tracking-wide mb-2">FOR ANY PURCHASE IN OUR STORE</p>
              <div className="flex items-center justify-center gap-4 text-amber-600">
                <div className="text-3xl font-script italic">Valid</div>
                <div className="text-sm text-slate-600 uppercase">FOR NEXT 30 DAYS</div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-16 right-16 w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="absolute top-24 right-12 w-1 h-1 bg-amber-300 rounded-full"></div>
            <div className="absolute bottom-16 left-16 w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="absolute bottom-24 left-12 w-1 h-1 bg-amber-300 rounded-full"></div>
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Gift Card</h1>
            <div className="flex items-center gap-2 text-2xl font-semibold text-amber-600">
              <span>$10.00</span>
              <span className="text-slate-400">–</span>
              <span>$100.00</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Gift Card Amount
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-left flex items-center justify-between hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <span className={selectedAmount ? 'text-slate-900' : 'text-slate-500'}>
                    {selectedAmount ? amounts.find(a => a.value === selectedAmount)?.label : 'Choose an amount'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-300 rounded-md shadow-lg z-10">
                    {amounts.map((amount) => (
                      <button
                        key={amount.value}
                        onClick={() => {
                          setSelectedAmount(amount.value);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-slate-50 first:rounded-t-md last:rounded-b-md"
                      >
                        {amount.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 border border-slate-300 rounded-md px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                min="1"
              />
              <button 
                disabled={!selectedAmount}
                className="flex-1 bg-purple-400 hover:bg-purple-500 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <div className="flex gap-6 text-sm text-slate-600">
              <div>
                <span className="font-medium">SKU:</span> N/A
              </div>
              <div>
                <span className="font-medium">Category:</span>{' '}
                <span className="text-pink-500">Uncategorized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}