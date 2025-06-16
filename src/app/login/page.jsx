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
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">

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

        </div>
        
      </div>
    </div>
  );
}