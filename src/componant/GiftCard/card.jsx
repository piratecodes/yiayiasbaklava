'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Search, ChevronDown } from 'lucide-react';

export default function Cards({card}){
    let cardValue = card.data
    const [selectedValue, setSelectedValue] = useState('Choose an amount')
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
            <Image src={cardValue.GiftCards[0].image.url} fill objectFit='contain' alt={cardValue.GiftCards[0].name} />
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-6">

          <h1 className="text-4xl font-bold text-slate-800 mb-4">Gift Card</h1>
          <p>From ofice Celebrations to family gatherings, Yia's Yia's gift card turn any occasions into a sweet memory. share the love-one flaky layer at a time. </p>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Gift Card Amount
              </label>
            </div>
            <Listbox as={'div'} value={selectedValue} onChange={setSelectedValue} className="relative">
              <ListboxButton className="relative w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-left flex items-center justify-between hover:border-slate-400 focus:border-transparent">{selectedValue} <ChevronDown className="group pointer-events-none size-5 fill-white/60" aria-hidden="true" /></ListboxButton>
              <ListboxOptions anchor="bottom" className={"w-(--button-width) rounded-xl border border-black bg-white p-1 [--anchor-gap:--spacing(1)] focus:outline-none transition duration-100 ease-in data-leave:data-closed:opacity-0"}>
                {cardValue.GiftCards.map((amount) => (
                  <ListboxOption key={amount.gift_card_id} value={amount.amount} className="data-focus:bg-blue-100 px-5">
                    {amount.amount}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
            <div className='grid md:grid-cols-2 gap-6 my-3'>
                <div>
                    <label htmlFor="to" className="block mb-2 text-sm font-medium text-gray-900 ">To</label>
                    <input type="text" id="to" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
                </div>
                <div>
                    <label htmlFor="from" className="block mb-2 text-sm font-medium text-gray-900 ">From</label>
                    <input type="text" id="from" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Doe" required />
                </div>
            </div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Message (optional)</label>
            <textarea type="text" id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Doe" required />
            <button 
                disabled={isNaN(selectedValue)}
                className="flex-1 w-full bg-sky-300 hover:bg-sky-500 hover:cursor-pointer disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Add to cart
              </button>
          </div>

        </div>
      </div>
    )
}