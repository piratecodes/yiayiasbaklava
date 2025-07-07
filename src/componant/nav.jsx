'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';

//Redux profilesetup
import { useSelector } from 'react-redux';
import { userSelector } from '@/redux/features/userSlice'

import { GrCart, GrClose } from 'react-icons/gr'
import logo from '@/assets/logo.png'

export default function Nav() {
  const ref2 = React.useRef()
  const ref3 = React.useRef()
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuClick = () => {
      ref2.current.classList.remove('translate-x-0')
      ref2.current.classList.add('-translate-x-full')
      setIsMenuOpen(false)
    };

    //Event Listner for Menu
    React.useEffect(() => {
      const checkIfClickedOutside = (e) => {
        if (isMenuOpen && ref2.current && ref2.current.contains(e.target)) {
          return null
        }
        else if (isMenuOpen && ref2.current && !ref2.current.contains(e.target)) {
          console.log("outside menu")
          ref2.current.classList.remove('translate-x-0')
          ref2.current.classList.add('-translate-x-full')
          setIsMenuOpen(false)
        }
      }

      document.addEventListener('mousedown', checkIfClickedOutside)

      return () => {
         // Cleanup the event listener
         document.removeEventListener('mousedown', checkIfClickedOutside)
      }
    }, [isMenuOpen])

    //Event Listener for Cart
    React.useEffect(() => {
      const checkIfClickedOutside = (e) => {
        if (isCartOpen && ref3.current && ref3.current.contains(e.target)) {
          return null
        }
        else if (isCartOpen && ref3.current && !ref3.current.contains(e.target)) {
          ref3.current.classList.remove('translate-x-0')
          ref3.current.classList.add('translate-x-full')
          setIsCartOpen(false)
        }
      }

      document.addEventListener('mousedown', checkIfClickedOutside)

      return () => {
         // Cleanup the event listener
         document.removeEventListener('mousedown', checkIfClickedOutside)
      }
    }, [isCartOpen])

  const toogleMenu = () => {
      if (ref2.current.classList.contains('-translate-x-full')) {
         ref2.current.classList.remove('-translate-x-full')
         ref2.current.classList.add('translate-x-0')
         setIsMenuOpen(true)
      }
      else if (ref2.current.classList.contains('translate-x-0')) {
         ref2.current.classList.remove('translate-x-0')
         ref2.current.classList.add('-translate-x-full')
         setIsMenuOpen(false)
      }
   }

   const toogleCart = () => {
      if (ref3.current.classList.contains('translate-x-full')) {
         ref3.current.classList.remove('translate-x-full')
         ref3.current.classList.add('translate-x-0')
         setIsCartOpen(true)
      }
      else if (ref3.current.classList.contains('translate-x-0')) {
         ref3.current.classList.remove('translate-x-0')
         ref3.current.classList.add('translate-x-full')
         setIsCartOpen(false)
      }
   }

  //  const navClass = pathName === "/" ? scrollPosition > 50 ? 'bg-cyan-500/25 backdrop-blur-lg shadow-md' : 'bg-transparent' : 'bg-cyan-500/25 backdrop-blur-lg shadow-md'
  
  //Redux
  const { name, avtar, verification, jwt } = useSelector( userSelector );

  return (
    <React.Fragment>
      <nav className={`sticky top-0 inset-x-0 py-2 w-full max-h-20 z-50 transform transition-normal ease-initial ${pathName === "/" ? scrollPosition > 50 ? 'bg-sky-100 shadow-md' : 'bg-transparent' : 'bg-sky-100 shadow-md'}`}>
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
            <div className="relative flex-1 flex justify-center pl-3.5 lg:pl-0 w-56 md:w-72 lg:w-96 h-6 md:h-10 lg:h-12">
              <Link href="/" className="flex items-center"> <Image src={logo} alt="Yia Yia's Baklava" fill objectFit='contain' /> </Link>
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
              <button onClick={toogleCart}
                className={`inline-flex items-center px-4 py-2 text-md font-medium hover:text-gray-60 rounded-4xl transform transition-colors ease-in ${scrollPosition > 50 ? 'bg-sky-500/75 text-white' : 'bg-transparent text-gray-800'}`}
              >
                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
                  <path d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z" />
                </svg>
                Cart
              </button>
            </div>
          </div>

        </div>
        
        {/* menu bar */}
        <aside ref={ref2} className='absolute inset-y-0 flex flex-col w-full h-screen z-30 md:w-4/6 lg:w-1/4 bg-sky-500/95 md:rounded-r-4xl transition ease-linear duration-300 -translate-x-full'>
          <div className='flex justify-between h-10 w-11/12 my-4 mx-auto'>
            {!verification && !jwt && <span className='flex flex-row space-x-2.5 items-center'><Link href="/login" onClick={handleMenuClick} className='font-bold text-2xl text-white' >Sign In</Link> <Link href="#" className="px-2 py-1 rounded-3xl bg-slate-600 text-xl font-medium text-white">Download App</Link> </span>}
            {verification && jwt && <Link href="/profile" className='flex space-x-2.5 items-center'><span className='relative w-12 h-12 bg-black rounded-full border-2 border-black overflow-clip'><Image src={avtar} layout='fill' alt={`Avtar of ${name}`} draggable="false" /></span><span onClick={handleMenuClick} className='font-bold text-2xl text-white capitalize' >{name}</span> </Link>}
            <span><button aria-label="Close Cart" title="Close Cart" className="focus:shadow-outline -mr-1 rounded-full p-2 transition duration-200 hover:bg-deep-purple-50 hover:bg-opacity-30 bg-white" onClick={() => toogleMenu()}><GrClose className="w-5 text-lg text-black" /></button></span>
          </div>
          <hr className='border border-gray-400 my-1 w-11/12 mx-auto ' />
          <ol className='mt-3.5 space-y-3 text-white font-bold text-2xl w-11/12 mx-auto'>
            <li><Link href="/" onClick={handleMenuClick}>Home</Link></li>
            <li><Link href="/about" onClick={handleMenuClick}>About</Link></li>
            <li><Link href="/order" onClick={handleMenuClick}>Order</Link></li>
            <li><Link href="/catering" onClick={handleMenuClick}>Catering</Link></li>
            <li><Link href="/order/giftcard" onClick={handleMenuClick}>Gift Cards</Link></li>
            <li><Link href="/favorite" onClick={handleMenuClick}>Favorite</Link></li>
            <li><Link href="/vote" onClick={handleMenuClick}>Voting</Link></li>
            <li><Link href="/loyality" onClick={handleMenuClick}>Loyality</Link></li>
            <li><Link href="/stores" onClick={handleMenuClick}>Store Locations</Link></li>
            <li><Link href="/corporate" onClick={handleMenuClick}>Corporate Gift</Link></li>
            <li><Link href="/nutrition" onClick={handleMenuClick}>Nutrition</Link></li>
          </ol>
        </aside>

        {/* cart */}
        <aside ref={ref3} className="absolute inset-y-0 right-0 flex flex-col w-full h-screen z-30 md:w-4/6 lg:w-1/4 bg-sky-500/95 md:rounded-l-4xl transition ease-linear duration-300 translate-x-full">
          <div className='flex justify-between items-center h-10 w-5/6 my-2.5 mx-auto'>
              <span><label className='font-semibold text-2xl text-white'> Shopping Cart </label> </span>
              <span><button aria-label="Close Cart" title="Close Cart" className="rounded-full p-1 bg-sky-300 hover:bg-sky-200" onClick={toogleCart}><GrClose className="w-5 text-lg text-gray-600 dark:text-gray-100" /></button></span>
          </div>
          <hr className='border-b-1.5 border-gray-600 mb-1 mt-1 ' />
          <div className='sm:flex w-full h-10 mt-2 px-5 place-content-center items-center justify-between'>
              {/* <span className=''><label className='font-semibold text-lg'>Subtotal: {cart.length === 0 ? 0 : cart.reduce((accumulator, object) => { return accumulator + (object.quantity * object.price) }, 0)}</label></span> */}
              <div className='flex space-x-2  '>
                <button className="flex text-black bg-sky-200 font-medium rounded-lg text-base px-4 md:px-8 py-2.5 text-center">Checkout</button>
                <button className="flex text-black bg-sky-200 font-medium rounded-lg text-base px-4 md:px-8 py-2.5 text-center" onClick={() => cartAction.clearCart()}>Clear Cart</button>
              </div>
          </div>
          <div className='grow mt-4 mb-5 w-full overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 dark:scrollbar-thumb-gray-600' role="cart">
              <ol className='p-5 list-decimal'>
                {/* {cart.map((item) => {
                    return <li key={item.sku} className='mx-10'>
                      <div className="item flex items-center my-5">
                          <div className="flex items-center w-2/3 font-semibold space-x-2 ml-1"><span className='relative w-12 h-12'><Image src={process.env.NEXT_PUBLIC_API_Uri + item.image.data.attributes.formats.thumbnail.url} layout="fill" alt='Product Image' /> </span><span>{item.title}</span></div>
                          <div className="flex font-semibold items-center w-1/3 justify-end">
                            <button className="text-white bg-gradient-to-r from-[#00E0BD] via-[#00D1A2] to-[#00B58D] dark:from-[#C4C4C4] dark:via-[#999999] dark:to-[#717171] hover:bg-gradient-to-br dark:focus:ring-gray-400 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-gray-900 font-medium text-xxs align-middle rounded-full w-6 h-6"><ImMinus className='mx-auto' /></button>
                            <span className="mx-2 text-base">{item.quantity}</span>
                            <button className="text-white bg-gradient-to-r from-[#00E0BD] via-[#00D1A2] to-[#00B58D] dark:from-[#C4C4C4] dark:via-[#999999] dark:to-[#717171] hover:bg-gradient-to-br dark:focus:ring-gray-400 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-gray-900 font-medium text-xxs align-middle rounded-full w-6 h-6"><ImPlus className='mx-auto' /></button>
                          </div>
                      </div>
                    </li>
                })} */}
              </ol>
          </div>
        </aside>
      </nav>

      {/* Flying Cart button */}
      <button onClick={toogleCart} className='fixed lg:hidden z-[999] bottom-5 right-5 p-3 rounded-full bg-sky-500 text-white text-2xl'><GrCart /></button>
      
    </React.Fragment>
  );
}