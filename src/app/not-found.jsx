"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft, Utensils } from 'lucide-react';

export default function NotFound() {
  const router = useRouter()
  return (
    <main className="my-8 bg-gradient-to-br from-sky-50 to-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Decorative Pattern Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sky-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-sky-500/15 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-sky-500/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 bg-sky-500/12 rounded-full blur-xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Decorative Baklava Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-sky-500 rounded-2xl rotate-45 shadow-2xl opacity-90"></div>
              <div className="absolute inset-4 bg-sky-50 rounded-xl rotate-45"></div>
              <div className="absolute inset-8 bg-sky-500 rounded-lg rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Utensils className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* 404 Number */}
          <div className="mb-6">
            <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-black text-sky-500 leading-none tracking-tight">
              404
            </h1>
            <div className="h-2 w-32 bg-sky-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Error Message */}
          <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              Oops! This page is as missing as<br />
              <span className="text-sky-500">the last piece of baklava</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have been eaten up! Don't worry, 
              our delicious baklava collection is still waiting for you on our homepage.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mb-12 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-sky-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <button 
              onClick={() => router.back()}
              className="group flex items-center gap-3 px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Go Back
            </button>
            
            <button 
              onClick={() => router.push('/')}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-sky-500 font-semibold rounded-xl border-2 border-sky-500 hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Home Sweet Home
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </main>
  );
}