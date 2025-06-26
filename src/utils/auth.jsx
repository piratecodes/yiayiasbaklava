"use client"
// components/AuthInitializer.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeUserFromCookies, userSelector } from '@/redux/features/userSlice'; // Update path
import Lottie from 'react-lottie-player'
import lottieJson from '@/assets/loading.json'

export default function AuthInitializer({ children }) {
    const dispatch = useDispatch();
    const { isInitialized, isFetching } = useSelector(userSelector);

    useEffect(() => {
        // Initialize user from cookies when app starts
        if (!isInitialized && !isFetching) {
            dispatch(initializeUserFromCookies());
        }
    }, [dispatch, isInitialized, isFetching]);

    // Show loading while initializing
    if (!isInitialized) {
        return (
            <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
                {/* <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> */}
                <Lottie loop animationData={lottieJson} play />
                <span className="ml-2">Loading...</span>
            </main>
        );
    }

    return children;
}