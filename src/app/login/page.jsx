"use client"
import { useState } from 'react';

export default function SignInPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { firstName, lastName, phoneNumber });
  };

  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative sprinkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-8 h-2 bg-yellow-400 rounded-full rotate-45"></div>
        <div className="absolute top-32 right-1/3 w-6 h-2 bg-blue-400 rounded-full rotate-12"></div>
        <div className="absolute top-40 left-1/3 w-7 h-2 bg-green-400 rounded-full -rotate-12"></div>
        <div className="absolute top-60 right-1/4 w-5 h-2 bg-pink-500 rounded-full rotate-45"></div>
        <div className="absolute bottom-40 left-1/5 w-6 h-2 bg-orange-400 rounded-full -rotate-45"></div>
        <div className="absolute bottom-60 right-1/5 w-8 h-2 bg-purple-400 rounded-full rotate-12"></div>
        <div className="absolute top-1/3 left-1/6 w-7 h-2 bg-red-400 rounded-full -rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/6 w-6 h-2 bg-teal-400 rounded-full rotate-45"></div>
        <div className="absolute top-1/2 left-1/12 w-5 h-2 bg-indigo-400 rounded-full -rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-7 h-2 bg-lime-400 rounded-full rotate-12"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Sign In Form */}
        <div className="bg-blue-100 rounded-3xl p-8 w-full max-w-md shadow-2xl z-10">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Sign In</h1>
          <p className="text-blue-600 text-sm mb-8">We'll text you a confirmation code to get started</p>

          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="First & Last Name"
                value={`${firstName} ${lastName}`.trim()}
                onChange={(e) => {
                  const names = e.target.value.split(' ');
                  setFirstName(names[0] || '');
                  setLastName(names.slice(1).join(' ') || '');
                }}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <p className="text-red-500 text-xs mt-1">* This field is required</p>
            </div>

            <div>
              <input
                type="tel"
                placeholder="Mobile Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Send Confirmation Code
            </button>
          </div>

          <div className="mt-8 text-xs text-gray-500 text-center">
            <p>
              By proceeding you agree to our{' '}
              <a href="#" className="text-blue-600 underline">Terms and Conditions</a>{' '}
              and confirm you have read and understand our{' '}
              <a href="#" className="text-blue-600 underline">Privacy Policy</a>
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="bg-pink-200 px-4 py-2 rounded-lg">
              <span className="text-black font-bold">crumbl</span>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative">
          <svg width="400" height="400" viewBox="0 0 400 400" className="drop-shadow-xl">
            {/* Donut base */}
            <circle cx="200" cy="280" r="80" fill="#F4A460" stroke="#D2691E" strokeWidth="3"/>
            <circle cx="200" cy="280" r="30" fill="#FFB6C1"/>
            
            {/* Donut frosting */}
            <circle cx="200" cy="280" r="80" fill="#FFE4E1" fillOpacity="0.8"/>
            <circle cx="200" cy="280" r="30" fill="#FFB6C1"/>
            
            {/* Donut sprinkles */}
            <rect x="170" y="250" width="12" height="3" fill="#FF69B4" rx="1" transform="rotate(15 176 251.5)"/>
            <rect x="220" y="260" width="10" height="3" fill="#32CD32" rx="1" transform="rotate(-20 225 261.5)"/>
            <rect x="190" y="290" width="14" height="3" fill="#FFD700" rx="1" transform="rotate(45 197 291.5)"/>
            <rect x="240" y="285" width="8" height="3" fill="#FF4500" rx="1" transform="rotate(-30 244 286.5)"/>
            <rect x="160" y="280" width="11" height="3" fill="#8A2BE2" rx="1" transform="rotate(60 165.5 281.5)"/>
            
            {/* Character */}
            {/* Head */}
            <circle cx="180" cy="180" r="25" fill="#D2691E"/>
            
            {/* Hair */}
            <path d="M155 170 Q180 150 205 170 Q200 160 180 160 Q160 160 155 170" fill="#2F4F4F"/>
            
            {/* Face */}
            <circle cx="174" cy="175" r="2" fill="#000"/>
            <circle cx="186" cy="175" r="2" fill="#000"/>
            <path d="M175 185 Q180 190 185 185" stroke="#000" strokeWidth="2" fill="none"/>
            
            {/* Body */}
            <ellipse cx="180" cy="220" rx="20" ry="30" fill="#FFB6C1"/>
            
            {/* Arms */}
            <ellipse cx="155" cy="210" rx="8" ry="20" fill="#D2691E" transform="rotate(-30 155 210)"/>
            <ellipse cx="205" cy="210" rx="8" ry="20" fill="#D2691E" transform="rotate(30 205 210)"/>
            
            {/* Legs */}
            <ellipse cx="170" cy="260" rx="8" ry="25" fill="#D2691E"/>
            <ellipse cx="190" cy="260" rx="8" ry="25" fill="#D2691E"/>
            
            {/* Feet */}
            <ellipse cx="165" cy="285" rx="12" ry="6" fill="#000"/>
            <ellipse cx="195" cy="285" rx="12" ry="6" fill="#000"/>
            
            {/* Motion lines */}
            <path d="M320 280 Q340 275 360 280" stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M325 290 Q350 285 375 290" stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M330 300 Q355 295 380 300" stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}