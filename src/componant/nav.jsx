'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';

import { GrClose } from 'react-icons/gr'
import logo from '@/assets/logo.png'

export default function Nav() {
  const ref3 = React.useRef()
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuClick = () => {
      ref3.current.classList.remove('translate-x-0')
      ref3.current.classList.add('-translate-x-full')
      setIsMenuOpen(false)
    };

    React.useEffect(() => {
      const checkIfClickedOutside = (e) => {
        if (isMenuOpen && ref3.current && ref3.current.contains(e.target)) {
            return null
         }
        else if (isMenuOpen && ref3.current && !ref3.current.contains(e.target)) {
         ref3.current.classList.remove('translate-x-0')
         ref3.current.classList.add('-translate-x-full')
         setIsMenuOpen(false)
        }
      }

      document.addEventListener('mousedown', checkIfClickedOutside)

      return () => {
         // Cleanup the event listener
         document.removeEventListener('mousedown', checkIfClickedOutside)
      }
    }, [isMenuOpen])

  const toogleMenu = () => {
      if (ref3.current.classList.contains('-translate-x-full')) {
         ref3.current.classList.remove('-translate-x-full')
         ref3.current.classList.add('translate-x-0')
         setIsMenuOpen(true)
      }
      else if (ref3.current.classList.contains('translate-x-0')) {
         ref3.current.classList.remove('translate-x-0')
         ref3.current.classList.add('-translate-x-full')
         setIsMenuOpen(false)
      }
   }

  //  const navClass = pathName === "/" ? scrollPosition > 50 ? 'bg-cyan-500/25 backdrop-blur-lg shadow-md' : 'bg-transparent' : 'bg-cyan-500/25 backdrop-blur-lg shadow-md'

  return (
    <nav className={`sticky top-0 left-0 py-2 w-full z-50 transform transition-normal ease-initial ${pathName === "/" ? scrollPosition > 50 ? 'bg-cyan-100 shadow-md' : 'bg-transparent' : 'bg-cyan-100 shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger Menu Icon */}
          <button
            onClick={() => toogleMenu()}
            className="text-gray-800 hover:text-gray-600 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" className="w-6 h-6">
              <path d="M0.25 1C0.25 0.586 0.586 0.25 1 0.25H19C19.414 0.25 19.75 0.586 19.75 1C19.75 1.414 19.414 1.75 19 1.75H1C0.586 1.75 0.25 1.414 0.25 1ZM19 6.25H1C0.586 6.25 0.25 6.586 0.25 7C0.25 7.414 0.586 7.75 1 7.75H19C19.414 7.75 19.75 7.414 19.75 7C19.75 6.586 19.414 6.25 19 6.25ZM19 12.25H1C0.586 12.25 0.25 12.586 0.25 13C0.25 13.414 0.586 13.75 1 13.75H19C19.414 13.75 19.75 13.414 19.75 13C19.75 12.586 19.414 12.25 19 12.25Z" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center"> <Image src={logo} alt="Yia Yia's Baklava" width={539} height={39} className="h-10 w-auto" /> </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 text-md font-medium text-gray-800 hover:text-gray-600"
            >
              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
              </svg>
              Download App
            </Link>
            <Link
              href="/order"
              className={`inline-flex items-center px-4 py-2 text-md font-medium hover:text-gray-60 rounded-4xl transform transition-colors ease-in ${scrollPosition > 50 ? 'bg-cyan-900/75 text-white' : 'bg-transparent text-gray-800'}`}
            >
              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
                <path d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z" />
              </svg>
              Order Now
            </Link>
          </div>
        </div>

      </div>
      <aside ref={ref3} className='absolute inset-y-0 flex flex-col w-full h-screen z-30 md:w-4/6 lg:w-1/4 bg-cyan-900/95 md:rounded-r-4xl transition ease-linear duration-300 -translate-x-full'>
        <div className='flex justify-between h-10 w-11/12 my-4 mx-auto'>
          <span><Link href="/login" className='font-bold text-2xl text-white' >Sign In</Link> </span>
          <span><button aria-label="Close Cart" title="Close Cart" className="focus:shadow-outline -mr-1 rounded-full p-2 transition duration-200 hover:bg-deep-purple-50 hover:bg-opacity-30 bg-white" onClick={() => toogleMenu()}><GrClose className="w-5 text-lg text-black" /></button></span>
        </div>
        <hr className='border border-gray-400 my-1 w-11/12 mx-auto ' />
        <ol className='mt-5 space-y-6 text-white font-bold text-4xl w-11/12 mx-auto'>
          <li><Link href="/" onClick={handleMenuClick}>Home</Link></li>
          <li><Link href="/about" onClick={handleMenuClick}>About</Link></li>
          <li><Link href="/order" onClick={handleMenuClick}>Order</Link></li>
          <li><Link href="/catering" onClick={handleMenuClick}>Catering</Link></li>
          <li><Link href="/gift-card" onClick={handleMenuClick}>Gift Cards</Link></li>
          <li><Link href="/loyality" onClick={handleMenuClick}>Loyality</Link></li>
          <li><Link href="/nutrition" onClick={handleMenuClick}>Nutrition</Link></li>
          <li className="flex flex-row space-x-1.5 lg:hidden">
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
              </svg>
              Download App
            </Link>
            <Link
              href="/order-now"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium hover:text-gray-60 rounded-4xl transform transition-colors delay-300 ease-in ${scrollPosition > 50 ? 'bg-cyan-900/75 text-white' : 'bg-transparent text-gray-800'}`}
            >
              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
                <path d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z" />
              </svg>
              Order Now
            </Link>
          </li>
        </ol>
      </aside>
    </nav>
  );
}