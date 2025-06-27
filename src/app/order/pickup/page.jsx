import React from "react";

import Link from 'next/link';
import { Store, ShoppingBasket } from 'lucide-react';


export default function Colmer(){
    return(
        <div className="min-h-screen p-3.5 md:p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl lg:text-6xl text-center font-bold text-slate-900 mb-8">Start an Order</h1>
                
                <div className="grid grid-cols-2 gap-3.5 md:gap-6">
                {/* Delivery Card */}
                <Link href="/order/pickup/carryout" className="bg-sky-50 rounded-3xl p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
                    <span className="flex flex-col items-center text-center">
                    <Store className="fill-sky-500" size={100} />
                    <h2 className="mt-5 text-lg md:text-3xl font-bold text-gray-900">Carry Out</h2>
                    </span>
                </Link>

                {/* Pickup Card */}
                <Link href="/order/pickup" className="bg-sky-50 rounded-3xl p-12 border-4 border-black hover:shadow-lg transition-shadow cursor-pointer">
                    <span className="flex flex-col items-center text-center">
                    <ShoppingBasket className="fill-sky-500" size={100} />
                    <h2 className="mt-5 text-lg md:text-3xl font-bold text-gray-900">Curbside</h2>
                    </span>
                </Link>
                </div>
                
            </div>
        </div>
    )
}