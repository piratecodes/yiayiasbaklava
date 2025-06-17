import React from "react";
import Link from "next/link"

export default function Evulate(){
    return(
        <section className="grid lg:grid-cols-2 gap-12 items-center">
                        
            {/* <!-- Left Content --> */}
            <div id="explore" className="space-y-8 scroll-mt-30">
                {/* <!-- Decorative Circle --> */}
                <div className="relative">
                    <div className="absolute -top-8 -left-8 w-40 h-40 md:w-48 md:h-48 bg-purple-100 rounded-full opacity-50"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Elevate Your Events With
                            <br />
                            <span className="text-gray-800">Irresistible Flavors</span>
                        </h2>
                    </div>
                </div>
                
                <p className="text-md lg:text-lg text-gray-600 max-w-md">
                    From small office gatherings to large-scale corporate galas, Yia Yia Baklava brings handcrafted perfection to your table.
                </p>
                
                <Link href="/order" className="inline-flex items-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Schedule Your Order
                </Link>
            </div>
            
            {/* <!-- Right Grid --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* <!-- Healthy & Yummi Card --> */}
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthy & Yummi</h3>
                    <p className="text-gray-600 text-sm">
                        Our baklava, free from preservatives and handmade with love!
                    </p>
                </div>
                
                {/* <!-- Veg-Friendly Card --> */}
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Veg-Friendly</h3>
                    <p className="text-gray-600 text-sm">
                        Made with plant-based ingredients and no animal by-products!
                    </p>
                </div>
                
                {/* <!-- Fully Customizable Card --> */}
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Customizable</h3>
                    <p className="text-gray-600 text-sm">
                        Choose from a variety of packaging options, flavors, and quantities!
                    </p>
                </div>
                
                {/* <!-- All Occassions Card --> */}
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">All Occassions</h3>
                    <p className="text-gray-600 text-sm">
                        From holiday parties to conferences - fits seamlessly into any event.
                    </p>
                </div>
            </div>
                
        </section>
    )
}