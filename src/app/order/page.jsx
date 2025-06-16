"use client"

import Lottie from 'react-lottie-player'
import { Truck, Store, CreditCard, UtensilsCrossed } from 'lucide-react';


import delivery from "@/assets/order/deliveryguy.json"
import pickup from "@/assets/order/pickup.json"

export default function StartOrderPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-6xl text-center font-bold text-slate-900 mb-8">Start an Order</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Delivery Card */}
          <div className="bg-cyan-100 rounded-3xl p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <Lottie className='flex items-center justify-center' loop animationData={delivery} play  style={{ height:120, width: 180 }}/>
              <h2 className="mt-5 text-3xl font-bold text-gray-900">Delivery</h2>
            </div>
          </div>

          {/* Pickup Card */}
          <div className="bg-cyan-100 rounded-3xl p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <Lottie className='flex items-center justify-center' loop animationData={pickup} play  style={{ height:120, width: 180 }}/>
              <h2 className="mt-5 text-3xl font-bold text-gray-900">Pickup</h2>
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