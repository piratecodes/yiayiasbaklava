"use client"
import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '@/assets/loading.json'

const Network_Error = () => {
  return (
    
            <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
                {/* <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> */}
                <Lottie loop animationData={lottieJson} play />
                <span className="ml-2">Loading...</span>
            </main>
        
  )
}

export default Network_Error
// export const config = { amp: 'hybrid' }