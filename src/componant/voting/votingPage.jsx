"use client"
import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BsFileArrowUpFill } from 'react-icons/bs';
import { showError, showSuccess, showWarning } from '@/utils/toast';


function votingPage({vote, token}) {
    const router = useRouter()
    const handleVote = async (e, id)=>{
        e.preventDefault()
        try{
            const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product-vote`,{
                method: "POST",
                headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token.value}`,
                "Content-Type": "application/json",
                }, body: `{ "product_id": ${id} }`
            })
            const data = await responce.json()
            if(responce.status == 200) {showSuccess(data.message); router.refresh()}
            else showError(data.message)
        } catch { showWarning("Something Went Wrong!!!\n Please try again later...") }
    }
  
    return (
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"> Voting System </h1>
                    <p className='text-white text-lg md:text-xl lg:text-2xl'><b>Timeline:</b> {vote.weekData}</p>
                </div>
            </header>
            <main className="flex w-full justify-center px-4 my-20 ">
                <section className="p-5 w-full max-w-6xl border-2 border-sky-500 rounded-lg space-y-2.5">
                    {vote.data.map((i, j)=>{
                        return <div key={j} className={`p-3.5 flex flex-col items-center border border-gray-200 rounded-lg shadow-sm md:flex-row ${i.is_voted == 1 ? "bg-sky-500" : "bg-white"}`}>
                            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt={i.name} /> */}
                            <figure className='relative w-32 h-28 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg overflow-hidden'><Image fill objectFit='contain' src={i.product_image} alt={i.product_name} draggable="false" /></figure>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <p className="mb-3 font-semibold text-blue-500">Vote Count: {i.vote_count}</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{i.product_name}</h5>
                                <p className="mb-3 font-normal text-gray-900">{i.description}</p>
                                <p className="mb-3 font-normal text-gray-900">$ {i.product_price}</p>
                            </div>
                            <button type="button" onClick={(e)=> handleVote(e, i.product_id)} className="ml-auto px-4 py-2 text-md font-medium text-center inline-flex items-center text-white bg-sky-300 rounded-lg hover:bg-sky-500 cursor-pointer"> <BsFileArrowUpFill /> Vote </button>
                        </div>
                    })}
                </section>
            </main>
    </React.Fragment>
  );
}

export default votingPage;
