'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import { IoIosArrowDown } from "react-icons/io";

import img1 from '@/assets/hazelnut.png'

export default function Catering(){
    const [counts, setCounts] = useState({ customers: 0, repeat: 0, delivered: 0, events: 0  });
    const finalValues = { customers: 1638, repeat: 85, delivered: 7412, events: 236 };

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;

        const counters = Object.keys(finalValues).map(key => {
        const increment = finalValues[key] / steps;
        let current = 0;
        
        return setInterval(() => {
            current += increment;
            if (current >= finalValues[key]) {
            current = finalValues[key];
            clearInterval(counters.find(c => c === counters[Object.keys(finalValues).indexOf(key)]));
            }
            
            setCounts(prev => ({
            ...prev,
            [key]: Math.floor(current)
            }));
        }, stepDuration);
        });

        return () => counters.forEach(clearInterval);
    }, []);

    return(
    <React.Fragment>
        <header className="bg-linear-to-r from-cyan-100 to-blue-100">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-slate-300 rounded-full hover:bg-gray-200" role="alert">
                    <span className="text-xs bg-gray-400 rounded-full text-slate-900 px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Our Catering Service is out! See what's new</span> 
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Impress Your Guests with Sweetness</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Whether you're planning a team lunch, a festive holiday party, or an executive retreat - each bite offers a taste of rich tradition, crafted to create meaningful moments and lasting impressions.</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800">
                        Explore 
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>  
                </div>
            </div>
        </header>

        <main className=' container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
            <section className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* <!-- Left Content --> */}
                <div className="space-y-8">
                    {/* <!-- Decorative Circle --> */}
                    <div className="relative">
                        <div className="absolute -top-8 -left-8 w-48 h-48 bg-purple-100 rounded-full opacity-50"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Elevate Your Events With
                                <br />
                                <span className="text-gray-800">Irresistible Flavors</span>
                            </h2>
                        </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 max-w-md">
                        From small office gatherings to large-scale corporate galas, Yia Yia Baklava brings handcrafted perfection to your table.
                    </p>
                    
                    <button className="inline-flex items-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Schedule Your Order
                    </button>
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



            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Happy Customers */}
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
                        {counts.customers.toLocaleString()}
                        <span className="text-3xl lg:text-4xl xl:text-5xl">+</span>
                        </div>
                        <p className="text-gray-600 font-medium text-lg">
                        Happy Customers
                        </p>
                    </div>
                    
                    {/* Repeat Customers */}
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
                        {counts.repeat}
                        <span className="text-3xl lg:text-4xl xl:text-5xl">%</span>
                        </div>
                        <p className="text-gray-600 font-medium text-lg">
                        Repeat Customers
                        </p>
                    </div>
                    
                    {/* Baklava Delivered */}
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
                        {counts.delivered.toLocaleString()}
                        <span className="text-3xl lg:text-4xl xl:text-5xl">+</span>
                        </div>
                        <p className="text-gray-600 font-medium text-lg">
                        Baklava Delivered
                        </p>
                    </div>
                    
                    {/* Events Catered */}
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
                        {counts.events}
                        <span className="text-3xl lg:text-4xl xl:text-5xl">+</span>
                        </div>
                        <p className="text-gray-600 font-medium text-lg">
                        Events Catered
                        </p>
                    </div>
                    </div>
                </div>
            </section>





            <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
                <h2 className="text-4xl lg:text-5xl text-center font-bold text-slate-800 mb-6">
                    Our Catering Options
                </h2>
                
                <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
                    From intimate office gatherings to large-scale corporate galas, Yia Yia Baklava offers flexible catering solutions that fit your event style, guest count, and taste preferences.
                </p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                    <Image className="w-80 h-auto transition delay-300 ease-in-out hover:scale-110" src={img1} alt="kl" />
                    
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

            <section className="cntainer mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* <!-- Left Content --> */}
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Frequently Asked Questions
                        </h2>
                        
                        <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                            Planning an event should feel exciting, not overwhelming. So we've put together answers to the most common questions - so you can book with confidence, clarity, and zero stress.
                        </p>
                        
                        <button className="inline-flex items-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            Schedule Your Order
                        </button>
                    </div>
                    
                    {/* <!-- Right FAQ Accordion --> */}

                    <div className="space-y-5 rounded-xl">
                        <Disclosure as="div" className="px-4 py-2.5 bg-slate-800 rounded-xl" defaultOpen={true}>
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                                1. What types of events do you cater to?
                                </span>
                                <IoIosArrowDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel transition className="mt-2 text-sm/5 text-white/50 origin-top transition duration-500 ease-out">
                                We cater to a wide range of events including office lunches, corporate parties, holiday celebrations, product launches, conferences, weddings, and more.
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure as="div" className="px-4 py-2.5 bg-slate-800 rounded-xl">
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                                2. Do you offer custom packaging or branding?
                                </span>
                                <IoIosArrowDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel transition className="mt-2 text-sm/5 text-white/50">Yes! We can customize boxes with your company’s logo, message, or branding — perfect for client gifting or branded events.</DisclosurePanel>
                        </Disclosure>
                        <Disclosure as="div" className="px-4 py-2.5 bg-slate-800 rounded-xl">
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                                3. What's the minimum order for catering or bulk delivery?
                                </span>
                                <IoIosArrowDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel transition className="mt-2 text-sm/5 text-white/50">Our minimum order typically starts at 25 pieces or one full platter. For larger or custom orders, please contact us for a tailored quote.</DisclosurePanel>
                        </Disclosure>
                        <Disclosure as="div" className="px-4 py-2.5 bg-slate-800 rounded-xl">
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                                4. Can we mix and match baklava flavors?
                                </span>
                                <IoIosArrowDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel transition className="mt-2 text-sm/5 text-white/50">Absolutely! You can choose from our range of flavors and we’ll create a customized platter or box to suit your event.</DisclosurePanel>
                        </Disclosure>
                        <Disclosure as="div" className="px-4 py-2.5 bg-slate-800 rounded-xl">
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                                5. Do you offer tastings for corporate event planning?
                                </span>
                                <IoIosArrowDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel transition className="mt-2 text-sm/5 text-white/50">Yes, we do offer tasting boxes for large or recurring corporate clients. Contact us to schedule a sample delivery.</DisclosurePanel>
                        </Disclosure>
                    </div>
                    
                </div>

            </section>
        </main>
    </React.Fragment>
    )
}