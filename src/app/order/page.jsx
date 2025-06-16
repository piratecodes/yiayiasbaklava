import { Truck, Store, CreditCard, UtensilsCrossed } from 'lucide-react';

export default function StartOrderPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl lg:text-6xl text-center font-bold text-slate-900 mb-8">Start an Order</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Delivery Card */}
          <div className="bg-cyan-100 rounded-3xl p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="w-24 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                <Truck className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Delivery</h2>
            </div>
          </div>

          {/* Pickup Card */}
          <div className="bg-cyan-100 rounded-3xl p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="relative">
                  <div className="w-20 h-16 bg-white rounded-lg border-2 border-gray-300 mb-2 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-4 bg-pink-400 rounded-full"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 bg-pink-300 rounded-tl-lg"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-6 bg-gray-200 rounded"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-6 bg-red-300 rounded"></div>
                  </div>
                  <div className="w-24 h-3 bg-pink-300 rounded-full"></div>
                  <div className="absolute top-4 -right-4 w-12 h-12 bg-orange-300 rounded-full">
                    <div className="absolute inset-2 border-2 border-orange-600 rounded-full"></div>
                    <div className="absolute inset-4 bg-orange-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Pickup</h2>
            </div>
          </div>

          {/* Digital Gift Cards */}
          <div className="rounded-3xl p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <CreditCard className="w-16 h-16 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Digital Gift Cards</h2>
            </div>
          </div>

          {/* Catering */}
          <div className="rounded-3xl p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <UtensilsCrossed className="w-16 h-16 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Catering</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}