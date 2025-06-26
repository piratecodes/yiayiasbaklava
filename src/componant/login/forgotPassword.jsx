"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [verify, setVerify] = useState(true);

  //submit button
  const handleSubmit = async(e) => {
    e.preventDefault();
    const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forget-password`, {method:"POST",  headers: {"Content-Type": "application/json",}, body: JSON.stringify({ "email": email })})
    const data = await responce.json()
    data.status == 1 ? setVerify(false) : alert(data.message)
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        
        {verify && <div className="bg-blue-100 rounded-3xl p-8 w-full max-w-md shadow-2xl z-10">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Forgot Password</h1>
          <p className="text-blue-600 text-sm mb-8">We'll send you a reset link to change</p>

          <form className="space-y-6">
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <p className="text-red-500 text-xs mt-1">* This field is required</p>

            <button onClick={handleSubmit} className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Reset Password
            </button>
          </form>

          <div className="mt-8 text-xs text-gray-500 text-center">
            <p>
              By proceeding you agree to our{' '}
              <a href="#" className="text-blue-600 underline">Terms and Conditions</a>{' '}
              and confirm you have read and understand our{' '}
              <a href="#" className="text-blue-600 underline">Privacy Policy</a>
            </p>
          </div>

        </div>}

        { !verify &&
             <div className="bg-blue-100 rounded-3xl p-8 w-full max-w-xl shadow-2xl z-10">
                <p className='text-gray-500 text-xl md:text-2xl lg:text-3xl'>We've sent a password reset link to: <label className='text-gray-700'>{email}</label></p>
                <p className='my-2.5 text-gray-500 text-xl md:text-2xl lg:text-3xl'>Please check your inbox (and spam folder) for an email from us with instructions to reset your password.</p>
                <p className=' my-3.5 text-gray-500 text-lg md:text-xl lg:text-2xl'>Go back to <Link href="/login" className='text-sky-500'>Login Page</Link></p>
             </div>
        }
        
      </div>
    </div>
  )
}

