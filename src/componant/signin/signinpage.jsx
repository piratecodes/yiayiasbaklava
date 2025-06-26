"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { signupUser, userSelector, clearState } from '@/redux/features/userSlice'
import { showError, showSuccess } from '@/utils/toast';

export default function SignInPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confrmPassword, setConfrmPassword] = useState('');
  const [verify, setVerify] = useState(true)
  const [otp, setOtp] = useState('')

  //Redux
  const dispatch = useDispatch();
  const { isSuccess, isError, errorMessage, verification } = useSelector( userSelector );

  //submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( signupUser({name: name,email: email, phone: phone, password: password, confirmPassword: confrmPassword}) )
    // console.log('Form submitted:', { email, password });
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-otp`, {method:"POST",  headers: {"Content-Type": "application/json",}, body: JSON.stringify({ "email": email, "otp": otp })})
    const data = await responce.json()
    if (data.status == 1) {setTimeout(()=>{ location.replace('/') },300)} else showError(data.message)
  };

  useEffect(() => {
        if (isError) {
            errorMessage == "User not verified!" ? setVerify(false) : showError(errorMessage)
            dispatch(clearState());
        }

        if (isSuccess) {
          verification == 1 ? setVerify(true) : setVerify(false)
          if (verification == 1) {showSuccess('Congratulation!! \n Your account has been created Successfully'); setTimeout(()=>{ location.replace('/') },300)}
        }
    }, [isError, isSuccess, dispatch, errorMessage]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-sky-50">

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Sign In Form */}
        <div className="bg-blue-100 rounded-3xl p-8 w-full max-w-md shadow-2xl z-10">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Sign Up</h1>
          <p className="text-blue-600 text-sm mb-8">We'll text you a confirmation code to get started</p>

          {verify && <form className="space-y-6">
              <input type="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <input type="number" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <input type="password" placeholder="Re Enter Password" value={confrmPassword} onChange={(e) => setConfrmPassword(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />

            <button onClick={handleSubmit} className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Register Your Account
            </button>
          </form>}

          {!verify && <form className="space-y-6">
              <input type="number" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <p className="text-red-500 text-xs mt-1">* This field is required</p>

            <button onClick={handleOtp} className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Submit OTP
            </button>
          </form>}

          <div className="mt-8 text-xs text-gray-500 text-center">
            <p className="text-gray-600 text-sm mb-8">Already have an account <Link className='text-sky-600' href="/login">Login</Link></p>
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

