import React from "react"
import Link from 'next/link';
import Image from 'next/image';

//page imports
import deliveryTruck from '@/assets/png/deliveryTruck.png'
import deliveryShop from '@/assets/png/deliveryShop.png'
import drawer4 from '@/assets/png/drawer4.png'

export default function Orders(){
  return (
    <div className="min-h-screen p-3.5 md:p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-6xl text-center font-bold text-slate-900 mb-8">Start an Order</h1>
        
        <div className="grid grid-cols-2 gap-3.5 md:gap-6">
          {/* Delivery Card */}
          <Link href="/login" className="bg-sky-50 rounded-3xl p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
            <figure className="flex flex-col items-center text-center">
              <span className='relative flex justify-center w-[170px] h-[120px]'><Image src={deliveryTruck} alt="Delivery" fill objectFit='contain' /></span>
              <figcaption className="mt-5 text-3xl font-bold text-gray-900">Delivery</figcaption>
            </figure>
          </Link>

          {/* Pickup Card */}
          <Link href="/order/pickup" className="bg-sky-50 rounded-3xl p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
            <figure className="flex flex-col items-center text-center">
              <span className='relative flex items-center justify-center w-[170px] h-[120px]'><Image src={deliveryShop} alt="Pick Up" fill objectFit='contain' /></span>
              <figcaption className="mt-5 text-3xl font-bold text-gray-900">Pick Up</figcaption>
            </figure>
          </Link>
        </div>
        
        {/* Digital Gift Cards */}
          <Link href="/order/giftcard" className="grid mt-8 rounded-3xl p-5 md:p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
            <figure className="flex flex-row items-center text-center">
              {/* <Lottie className='flex items-center justify-center' loop animationData={delivery} play  style={{ height:120, width: 170 }}/> */}
              <span className='relative flex justify-center w-[170px] h-[120px]'><Image src={drawer4} alt="" fill objectFit='contain' /></span>
              <figcaption className="mt-5 text-3xl font-bold text-gray-900">Digital Gift Card</figcaption>
            </figure>
          </Link>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Order",
  description: "This is how a user can place their order by choosing a mode of order"
}