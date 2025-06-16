import { Gift } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

import img from "@/assets/loyality/birthday.png"
import img3 from "@/assets/loyality/bonus.png"
import img2 from "@/assets/loyality/download-now.png"
import img4 from "@/assets/loyality/Capture.jpg"

export default function LoyaltyPointsBanner() {
  return (
    <React.Fragment>
        <header className="relative w-full min-h-3/4 bg-cyan-900 overflow-hidden">
            
            {/* Wavy Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg 
                viewBox="0 0 1200 120" 
                fill="none" 
                className="w-full h-20"
                preserveAspectRatio="none"
                >
                <path 
                    d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
                    fill="white"
                />
                </svg>
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Earn Points. Get <span className="text-amber-300">FREE</span> Treats
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-4xl leading-relaxed">
                Collect 100 points to get a free 2-pack of baklava. Sign up today and immediately receive 75 points!!
                </p>
                
                <button className="group bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3">
                <Gift className="w-5 h-5 text-amber-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">EARN POINTS NOW</span>
                </button>
            </div>
        </header>
        <section className="relative mx-auto container z-10 py-12 px-6">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">How It Works</h2>
                <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                Start earning points in three simple steps while enjoying the convenience of mobile ordering and quick in-store pickup.
                </p>
            </div>
            
            {/* Steps */}
            <div className="relative">
                {/* Progress Line */}
                <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-300">
                <div className="absolute inset-0 bg-slate-600"></div>
                </div>
                
                {/* Navigation Arrows */}
                <button className="absolute left-0 top-12 transform -translate-y-1/2 -translate-x-4 w-8 h-8 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors z-10">
                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                </button>
                <button className="absolute right-0 top-12 transform -translate-y-1/2 translate-x-4 w-8 h-8 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors z-10">
                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Step 1 */}
                <div className="relative">
                    {/* Step Icon */}
                    <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center relative z-10">
                        <Gift className="w-6 h-6 text-white" />
                    </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center relative">
                    {/* Arrow pointing up to icon */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-l-2 border-t-2 border-slate-200 rotate-45"></div>
                    
                    <h3 className="text-2xl font-bold text-slate-700 mb-4">Sign Up</h3>
                    <p className="text-slate-600 leading-relaxed">
                        In-store, on our website and app, or scan a QR code to get started.
                    </p>
                    </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                    {/* Step Icon */}
                    <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center relative z-10">
                        <Gift className="w-6 h-6 text-white" />
                    </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center relative">
                    {/* Arrow pointing up to icon */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-l-2 border-t-2 border-slate-200 rotate-45"></div>
                    
                    <h3 className="text-2xl font-bold text-slate-700 mb-4">Earn Points</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Get 2 points for every $1 spent. Plus, enjoy a 75-point welcome bonus just for registering.
                    </p>
                    </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                    {/* Step Icon */}
                    <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center relative z-10">
                        <Gift className="w-6 h-6 text-white" />
                    </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center relative">
                    {/* Arrow pointing up to icon */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-l-2 border-t-2 border-slate-200 rotate-45"></div>
                    
                    <h3 className="text-2xl font-bold text-slate-700 mb-4">Redeem Rewards</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Use your points to grab free treats like a Two-Pack (100 pts), Six-Pack (200 pts), or exclusive merchandise (400 pts).
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="container mx-auto flex my-10 px-5 py-12 md:flex-row flex-col items-center rounded-xl shadow-2xl">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Birthday Treat</h3>
                <p className="mb-8 leading-relaxed">Enjoy a FREE Baklava on your birthday every year! To sign up, simply visit your Yia Yias Account online.</p>
                <button className="inline-flex text-white bg-cyan-900 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded-3xl text-lg">&gt;&gt; Visit Your Account </button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image className="object-cover object-center rounded" alt="hero" src={img} />
            </div>
        </section>

        <section className="container mx-auto flex my-10 px-5 py-12 md:flex-row flex-col items-center rounded-xl shadow-2xl">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image className="object-cover object-center rounded" alt="hero" src={img3} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Bonus points & Double Points​</h3>
                <p className="mb-8 leading-relaxed">Never miss a chance to earn Double Points on select days so you can get FREE treats faster!</p>
                <button className="inline-flex text-white bg-cyan-900 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded-3xl text-lg">&gt;&gt; Visit Your Account </button>
            </div>
        </section>

        <section className="container mx-auto flex my-10 px-5 py-12 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Download the Points App For the Best Experience</h3>
                <p className="mb-8 leading-relaxed">Enjoy personalize ordering, FREE Points, birthday rewards, and more with the Points ...</p>
                <button className="inline-flex text-white bg-cyan-900 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded-3xl text-lg">Download Now</button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image className="object-cover object-center rounded" alt="hero" src={img2} />
            </div>
        </section>

        <h4 className='text-3xl text-center font-bold uppercase'>Using the Baklava Points</h4>
        <section className="max-w-3xl mx-auto flex my-10 px-5 md:flex-row flex-col items-center rounded-4xl shadow-2xl shadow-cyan-900">
            <Image className="w-48 h-auto object-center rounded" alt="hero" src={img4} />
            <div className="lg:flex-grow lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">How to use in-store</h3>
                <p className="mb-8 leading-relaxed">Enter your phone number at checkout OR tap in your Points card to reveal a QR code which you can scan at any Yia Yias location.</p>
            </div>
        </section>
    </React.Fragment>
  );
}