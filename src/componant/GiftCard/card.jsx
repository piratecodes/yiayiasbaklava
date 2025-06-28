'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronDown } from 'lucide-react';

export default function Cards({card}){
    const [selectedAmount, setSelectedAmount] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-screen pt-20">
        {/* Left side - Gift Card Image */}
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button className="backdrop-blur-sm p-2 rounded-full shadow-lg transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Gift Card Design */}
          <div className="relative bg-gradient-to-br h-44 md:h-56 lg:h-96 from-sky-50 to-blue-50 border border-cyan-200 rounded-lg p-8 shadow-lg overflow-hidden">
            <Image src={card.GiftCards[0].image.url} fill objectFit='contain' alt={card.GiftCards[0].name} />
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-6">

          <h1 className="text-4xl font-bold text-slate-800 mb-4">Gift Card</h1>

          <div className="space-y-3">
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
                    {selectedAmount ? card.GiftCards.find(a => a.amount === selectedAmount) : 'Choose an amount'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-300 rounded-md shadow-lg z-10">
                    {card.GiftCards.map((amount) => (
                      <button
                        key={amount.gift_card_id}
                        onClick={() => {
                          setSelectedAmount(amount.amount);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-slate-50 first:rounded-t-md last:rounded-b-md"
                      >
                        {amount.amount}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-6 my-3'>
                <div>
                    <label for="to" class="block mb-2 text-sm font-medium text-gray-900 ">To</label>
                    <input type="text" id="to" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
                </div>
                <div>
                    <label for="from" class="block mb-2 text-sm font-medium text-gray-900 ">From</label>
                    <input type="text" id="from" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Doe" required />
                </div>
            </div>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Message (optional)</label>
            <textarea type="text" id="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Doe" required />
            <button 
                disabled={!selectedAmount}
                className="flex-1 w-full bg-purple-400 hover:bg-purple-500 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Add to cart
              </button>
          </div>

        </div>
      </div>
    )
}