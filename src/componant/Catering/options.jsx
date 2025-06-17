import React from "react";
import Image from 'next/image'

import img1 from '@/assets/hazelnut.png'

export default function Option(){

    return(
        <section id="options" className='py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-8'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-slate-800 mb-6">
                Our Catering Options
            </h2>
            
            <p className="text-md lg:text-lg text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
                From intimate office gatherings to large-scale corporate galas, Yia Yia Baklava offers flexible catering solutions that fit your event style, guest count, and taste preferences.
            </p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                <Image className="w-80 h-auto transition delay-300 ease-in-out hover:scale-110" src={img1} alt="kl" draggable="false" />
                
                <ol className="relative border-s border-gray-200">                  
                    <li className="mb-10 ms-6">            
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                            <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">Signature Baklava Platters</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 ">Assorted handcrafted flavors, beautifully arranged and ready to serve - perfect for meetings, parties, or gifting.</p>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                            <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 ">Corporate Gifting</h3>
                        <p className="text-base font-normal text-gray-500 ">Elegant boxes with your company logo or message - ideal for client appreciation, festive gifting, or employee rewards.</p>
                    </li>
                    <li className="ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                            <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 ">Custom Orders</h3>
                        <p className="text-base font-normal text-gray-500 ">From dessert stations to custom orders, we offer flexible options including special packaging, dietary preferences, and bulk pricing.</p>
                    </li>
                </ol>


            </div>
        </section>
    )
}