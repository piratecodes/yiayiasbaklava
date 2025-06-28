"use client"
import React, { useState } from 'react';
import { Clock, MapPin, Plus, CreditCard } from 'lucide-react';

export default function BaklavaCheckout() {
  const [pickupMethod, setPickupMethod] = useState('carryout');
  const [selectedTip, setSelectedTip] = useState('2');
  const [selectedCarColor, setSelectedCarColor] = useState('gray');
  const [selectedCarModel, setSelectedCarModel] = useState('sedan');

  const carColors = [
    { name: 'Gray', value: 'gray', color: 'bg-gray-400' },
    { name: 'White', value: 'white', color: 'bg-white border-2 border-gray-300' },
    { name: 'Black', value: 'black', color: 'bg-black' },
    { name: 'Red', value: 'red', color: 'bg-red-500' },
    { name: 'Blue', value: 'blue', color: 'bg-blue-500' },
    { name: 'Green', value: 'green', color: 'bg-green-500' },
    { name: 'Yellow', value: 'yellow', color: 'bg-yellow-400' },
    { name: 'Orange', value: 'orange', color: 'bg-orange-500' },
    { name: 'Brown', value: 'brown', color: 'bg-amber-800' }
  ];

  const carModels = [
    { name: 'Sedan', value: 'sedan' },
    { name: 'SUV', value: 'suv' },
    { name: 'Truck', value: 'truck' },
    { name: 'Van', value: 'van' },
    { name: 'Hatchback', value: 'hatchback' },
    { name: 'Jeep', value: 'jeep' },
    { name: 'Convertible', value: 'convertible' },
    { name: 'Sports Car', value: 'sports' }
  ];

  return (
    <div className="min-h-screen bg-sky-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pickup Method Card */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-black mb-4">
                {pickupMethod === 'carryout' ? 'Carryout Order' : 'Curbside Order'}
              </h2>
              
              {/* Toggle Buttons */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-black mb-3">Pickup Method</h3>
                <div className="flex bg-sky-50 rounded-lg p-1">
                  <button
                    onClick={() => setPickupMethod('carryout')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      pickupMethod === 'carryout'
                        ? 'bg-sky-500 text-white'
                        : 'text-black hover:bg-white'
                    }`}
                  >
                    🥡 Carryout
                  </button>
                  <button
                    onClick={() => setPickupMethod('curbside')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      pickupMethod === 'curbside'
                        ? 'bg-sky-500 text-white'
                        : 'text-black hover:bg-white'
                    }`}
                  >
                    🚗 Curbside
                  </button>
                </div>
              </div>

              {/* Pickup Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
                <div className="flex items-center text-sm text-black">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-medium">Today</span>
                  <span className="mx-1">-</span>
                  <span>10:30 am</span>
                  <br className="sm:hidden" />
                  <span className="text-gray-600 ml-0 sm:ml-2">
                    Ready in {pickupMethod === 'carryout' ? '3' : '2'} min
                  </span>
                </div>
                <div className="flex items-start text-sm text-black">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Baklava Palace</div>
                    <div className="text-gray-600">
                      1498 Ave Roosevelt Plaza Coparra,<br />
                      Ste 14, Guaynabo, Puerto Rico 00968
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-black mb-6">
                {pickupMethod === 'carryout' 
                  ? 'Get your order at the pickup counter'
                  : 'Park outside and we\'ll bring your order to you'
                }
              </div>

              {/* Customer Info */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-black mb-3">
                  Who will be picking up the order?
                </h3>
                <input
                  type="text"
                  placeholder="First & Last name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
                <p className="text-red-500 text-xs mt-1">* This field is required</p>
              </div>

              {/* Car Details for Curbside */}
              {pickupMethod === 'curbside' && (
                <div className="space-y-6">
                  {/* Car Color */}
                  <div>
                    <h3 className="text-sm font-medium text-black mb-3">Car Color</h3>
                    <div className="flex flex-wrap gap-2">
                      {carColors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setSelectedCarColor(color.value)}
                          className={`w-8 h-8 rounded-full ${color.color} ${
                            selectedCarColor === color.value
                              ? 'ring-2 ring-sky-500 ring-offset-2'
                              : ''
                          }`}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Car Make */}
                  <div>
                    <h3 className="text-sm font-medium text-black mb-3">Car Make</h3>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
                      <option>Car Make</option>
                      <option>Toyota</option>
                      <option>Honda</option>
                      <option>Ford</option>
                      <option>Chevrolet</option>
                      <option>Nissan</option>
                    </select>
                  </div>

                  {/* Car Model */}
                  <div>
                    <h3 className="text-sm font-medium text-black mb-3">Car Model</h3>
                    <div className="grid grid-cols-4 gap-3">
                      {carModels.map((model) => (
                        <button
                          key={model.value}
                          onClick={() => setSelectedCarModel(model.value)}
                          className={`p-3 rounded-lg border text-center transition-colors ${
                            selectedCarModel === model.value
                              ? 'border-sky-500 bg-sky-50 text-sky-600'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className="w-8 h-6 bg-gray-300 rounded mx-auto mb-2"></div>
                          <div className="text-xs font-medium">{model.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* My Bag Card */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-black mb-4">My Bag</h2>
              
              <p className="text-sm text-gray-600 mb-4">
                Ordering for someone special? Add a personal note to go on the box.
              </p>
              
              <textarea
                placeholder="Add a note (optional)"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 mb-6 h-20 resize-none"
                maxLength={150}
              />
              <div className="text-right text-xs text-gray-500 mb-6">150</div>

              {/* Order Items */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-sky-50 rounded-lg">
                  <div className="w-16 h-16 bg-amber-200 rounded-lg flex-shrink-0"></div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-black">Mixed Baklava Box</h3>
                    <p className="text-sm text-gray-600">$16.49</p>
                    <p className="text-xs text-gray-500">Assorted honey baklava pieces</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">Qty: 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-black mb-6">Order Details</h2>
              
              {/* Order Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>$16.49</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Reduced State Tax (6.00%)</span>
                  <span>$0.99</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Municipal Tax (1.00%)</span>
                  <span>$0.16</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tip</span>
                  <span>$2.00</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$19.64</span>
                  </div>
                </div>
              </div>

              {/* Tip Selection */}
              <div className="mb-6">
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {['2', '3', '5'].map((tip) => (
                    <button
                      key={tip}
                      onClick={() => setSelectedTip(tip)}
                      className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        selectedTip === tip
                          ? 'bg-sky-500 text-white'
                          : 'bg-sky-50 text-black hover:bg-gray-100'
                      }`}
                    >
                      ${tip}
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedTip('other')}
                    className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                      selectedTip === 'other'
                        ? 'bg-sky-500 text-white'
                        : 'bg-sky-50 text-black hover:bg-gray-100'
                    }`}
                  >
                    Other
                  </button>
                </div>
                <p className="text-xs text-gray-600">100% of tips go to the bakers</p>
              </div>

              {/* Payment Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-black mb-4">Payment</h3>
                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Card number"
                      className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-20 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  
                  <button className="flex items-center text-sm text-sky-500 font-medium">
                    <Plus className="w-4 h-4 mr-1" />
                    Gift Card or Voucher
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="text-xs text-gray-500 mb-6">
                <p>By proceeding you agree to our <span className="text-sky-500 underline">Terms and Conditions</span> and confirm you have read and understand our <span className="text-sky-500 underline">Privacy policy</span>.</p>
                <p className="mt-2">Powered by Stripe</p>
              </div>

              {/* Sign in to earn rewards */}
              <div className="mb-6 p-3 bg-sky-50 rounded-lg">
                <div className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-amber-400 rounded-full mr-2 flex-shrink-0"></div>
                  <span className="font-medium">Sign in to earn Crumbs for this order!</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg font-medium cursor-not-allowed">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}