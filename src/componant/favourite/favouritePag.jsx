"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { showError, showSuccess, showWarning } from '@/utils/toast';

export default function Favourite({home, token}){
    const router = useRouter()
    const handleRemove = async (e,f)=>{
        e.preventDefault()
        try{
            const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/remove-from-favourite`,{
                method: "POST",
                headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token.value}`,
                "Content-Type": "application/json",
                }, body: `{ "favourite_id": ${f} }`
            })
            const data = await responce.json()
            if(responce.status == 200) {showSuccess(data.message); router.refresh()}
            else showError(data.message)
        } catch { showWarning("Something Went Wrong!!!\n Please try again later...") }
    }
    return(
        <React.Fragment>
             <header className="relative w-full min-h-3/4 bg-sky-500 overflow-hidden">
                  
                {/* Wavy Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg 
                    viewBox="0 0 1200 120" 
                    fill="none" 
                    className="w-full h-20"
                    preserveAspectRatio="none"
                    >
                    <path 
                        d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
                        fill="white"
                    />
                    </svg>
                </div>
                
                {/* Main Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"> Your Favourites </h1>
                </div>
            </header>
            <main className="container md:mt-auto lg:mt-0 ">
                <p className="lg:mt-10 text-center text-6xl font-bold text-sky-500">Favourite Products</p>
                
                {home.data ? home.data.map((p) => (
                <div key={p.shop_product.product_id} className="group mx-auto mt-10 px-5 lg:px-10 max-w-5xl rounded-3xl grid grid-cols-2 items-center justify-between hover:bg-sky-50/75 transition duration-300 ease-in">
                <figure className="relative h-40 lg:h-96 w-3/4"><Image src={p.shop_product.image} alt={p.shop_product.name} draggable="false" fill/></figure>
                <div className='items-center-safe pr-2'>
                    <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">{p.shop_product.name}</p>
                    <p className="mt-2 pl-1 text-md md:text-lg lg:text-xl font-semibold text-gray-600">Price: ${p.shop_product.price}</p>
                    <span className='flex flex-row space-x-1 md:space-x-3.5 mt-3.5 lg:mt-7'>
                    <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 transition duration-300" onClick={(e)=> handleRemove(e, p.shop_product.favourite_id)}>Remove from Favourite</button>
                    {/* <but ton className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">Order Now</but> */}
                    </span>
                </div>
                </div>
                )): <p className='my-10 text-center text-2xl md:text-4xl lg:text-5xl font-semibold'>SORRY!! No Records Found</p>}
            </main>
        </React.Fragment>
    )
}