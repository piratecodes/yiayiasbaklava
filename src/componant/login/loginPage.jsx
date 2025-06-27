"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { showInfo, showError } from '@/utils/toast';
import { loginUser, userSelector, clearState } from '@/redux/features/userSlice'

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState(true)
  const [otp, setOtp] = useState(0)

  //Redux
  const dispatch = useDispatch();
  const { isSuccess, isError, errorMessage, verification } = useSelector( userSelector );

  //submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( loginUser({email: email, password: password}) )
    // console.log('Form submitted:', { email, password });
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-otp`, {method:"POST",  headers: {"Content-Type": "application/json",}, body: JSON.stringify({ "email": email, "otp": otp })})
    const data = await responce.json()
    if (data.status == 1) {showInfo("Otp Validate Successfully, Please Login Again"); setVerify(true)} else showError(data.message)
  };

  useEffect(() => {
        if (isError) {
            errorMessage == "User not verified!" ? setVerify(false) : showError(errorMessage)
            dispatch(clearState());
        }

        if (isSuccess) {
          verification == 1 ? setVerify(true) : setVerify(false)
          if (verify === true) setTimeout(()=>{ location.replace('/') }, 300)
        }
    }, [isError, isSuccess, dispatch, errorMessage]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Sign In Form */}
        <div className="bg-blue-100 rounded-3xl p-8 w-full max-w-md shadow-2xl z-10">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Sign In</h1>
          <p className="text-blue-600 text-sm mb-8">We'll text you a confirmation code to get started</p>

          {verify && <form className="space-y-6">
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <p className="text-red-500 text-xs mt-1">* This field is required</p>

              <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />

            <button onClick={handleSubmit} className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Login
            </button>
            <Link href="/login/forgot-password" className="block text-sky-800 text-sm text-right">Forgot Password </Link>
          </form>}

          {!verify && <form className="space-y-6">
              <input type="number" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <p className="text-red-500 text-xs mt-1">* This field is required</p>

            <button onClick={handleOtp} className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"> Submit OTP </button>
          </form>}

          <div className="mt-8 text-xs text-gray-500 text-center">
            <p className="text-gray-600 text-sm mb-8">Don't have account <Link className='text-sky-600' href="/signup">Signup</Link></p>
            <p>
              By proceeding you agree to our{' '}
              <Link href="#" className="text-blue-600 underline">Terms and Conditions</Link>{' '}
              and confirm you have read and understand our{' '}
              <Link href="#" className="text-blue-600 underline">Privacy Policy</Link>
            </p>
          </div>

        </div>
        
      </div>
    </div>
  );
}

