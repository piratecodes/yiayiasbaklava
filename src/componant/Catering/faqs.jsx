'use client'
import React from 'react'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import { IoIosArrowDown } from "react-icons/io";


export default function Catering(){
    

    return(
            

        <section className="cntainer mx-auto py-16 px-4 sm:px-6 lg:px-8 relative">
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
    )
}