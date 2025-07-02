"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { showError, showSuccess, showWarning } from '@/utils/toast';


import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home({home, token}) {

    const addtofav = async (id)=>{
        console.log(id)
        if(!token) showError("Pleaase Authenticate First")
        else{
            try{
                const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add-to-favourites`,{
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token.value}`,
                    "Content-Type": "application/json",
                }, body: `{ "product_id": ${id} }`
                })
                const data = await responce.json()
                if (responce.status == 200) showSuccess(data.message)
                else showError(data.message)
            }catch{
                showWarning(data.message)
            }

        }
    }

    const formatWeekRange = (dateRangeString) => {
        if (!dateRangeString) return "This Week's Special"; // Handle cases where data might be missing

        const [startDateStr, endDateStr] = dateRangeString.split(' - ');
        const parseDate = (str) => {
            const [d, m, y] = str.split('-').map(Number);
            return new Date(y, m - 1, d);
        };

        const startDate = parseDate(startDateStr);
        const endDate = parseDate(endDateStr);

        const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(startDate);

        return `Week of ${monthName} ${startDate.getDate()} - ${endDate.getDate()}`;
    };

  

  return (
    <React.Fragment>
      <header className="w-full h-screen lg:h-screen overflow-y-hidden">
        <video className="hidden lg:block absolute z-10 top-0 w-full h-auto object-cover" autoPlay muted playsInline loop>
          <source src="/Horizontal-Baklava.mp4" type="video/mp4" />
        </video>
        <video className="lg:hidden absolute z-10 inset-y-0 h-full object-cover" autoPlay muted playsInline loop>
          <source src={home.data.slider[0].image} type="video/mp4" />
        </video>
        <svg className='absolute bottom-0 md:top-auto lg:-bottom-24 z-20 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="fill-white" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path className="fill-white" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path className="fill-white" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
        {/* <svg id="wave" className='absolute z-20 -bottom-1/6' style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(62, 144.9, 243, 1)" offset="0%"></stop><stop stopColor="rgba(89.745, 235.613, 246.213, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,20L26.7,30C53.3,40,107,60,160,56.7C213.3,53,267,27,320,23.3C373.3,20,427,40,480,43.3C533.3,47,587,33,640,26.7C693.3,20,747,20,800,25C853.3,30,907,40,960,50C1013.3,60,1067,70,1120,73.3C1173.3,77,1227,73,1280,61.7C1333.3,50,1387,30,1440,23.3C1493.3,17,1547,23,1600,35C1653.3,47,1707,63,1760,63.3C1813.3,63,1867,47,1920,45C1973.3,43,2027,57,2080,56.7C2133.3,57,2187,43,2240,35C2293.3,27,2347,23,2400,20C2453.3,17,2507,13,2560,21.7C2613.3,30,2667,50,2720,55C2773.3,60,2827,50,2880,46.7C2933.3,43,2987,47,3040,46.7C3093.3,47,3147,43,3200,48.3C3253.3,53,3307,67,3360,63.3C3413.3,60,3467,40,3520,26.7C3573.3,13,3627,7,3680,16.7C3733.3,27,3787,53,3813,66.7L3840,80L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"></path></svg> */}
      </header>
      <main className="container md:mt-auto lg:mt-0 ">
        <p className="lg:mt-10 text-center text-6xl font-bold text-sky-500">Weekly Creations</p>
        <p className="mt-4 md:mt-8 mb-8 text-center p-2 rounded-3xl bg-sky-500 text-white max-w-xs mx-auto font-normal text-md">{home.data.weekly_timeline ? formatWeekRange(home.data.weekly_timeline) : "This Week's Special"}</p>
        
        {home.data.weekly_products ? home.data.weekly_products.map((p, q) => (
          (q+1)%2 == 0? <div key={p.product_id} className="group mx-auto mt-10 px-5 lg:px-10 max-w-5xl rounded-3xl grid grid-cols-2 items-center hover:bg-sky-50/75 transition duration-300 ease-in">
          <div className='items-center-safe pr-2'>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">{p.name}</p>
            <p className="mt-2 pl-1 text-md md:text-lg lg:text-xl font-semibold text-gray-600">Price: ${p.price}</p>
            <span className='flex flex-row space-x-1 md:space-x-3.5 mt-3.5 lg:mt-7'>
              <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 transition duration-300 cursor-pointer" onClick={()=> addtofav(p.product_id)}>Add to Favourite</button>
              {/* <but ton className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">Order Now</but> */}
            </span>
          </div>
          <figure className="relative h-40 lg:h-96 w-full"><Image src={p.images[0].url} alt={p.name} draggable="false" fill objectFit='contain'/></figure>
        </div>: <div key={p.product_id} className="group mx-auto mt-10 px-5 lg:px-10 max-w-5xl rounded-3xl grid grid-cols-2 items-center hover:bg-sky-50/75 transition duration-300 ease-in">
          <figure className="relative h-40 lg:h-96 w-full"><Image src={p.images[0].url} alt={p.name} draggable="false" fill objectFit='contain'/></figure>
          <div className='items-center-safe pr-2'>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">{p.name}</p>
            <p className="mt-2 pl-1 text-md md:text-lg lg:text-xl font-semibold text-gray-600">Price: ${p.price}</p>
            <span className='flex flex-row space-x-1 md:space-x-3.5 mt-3.5 lg:mt-7'>
              <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 transition duration-300 cursor-pointer" onClick={()=> addtofav(p.product_id)}>Add to Favourite</button>
              {/* <but ton className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">Order Now</but> */}
            </span>
          </div>
        </div> 
        )): <p className='text-center text-2xl md:text-4xl lg:text-5xl font-semibold'>SORRY!! No Records Found</p>}

        <p className="mt-24 ml-1/12 text-center text-6xl font-bold text-sky-500">Yia Yia's Classic</p>
        <p className="flex flex-row items-center my-3 text-center p-2 rounded-3xl max-w-xs mx-auto space-x-1.5 font-medium text-lg"><FaMapMarkerAlt className='fill-gray-900' /> <span>Visit Your Local Store Near You</span></p>
        
        {home.data.classic_products ? home.data.classic_products.map((p, q) => (
          (q+1)%2 == 0?  <div key={p.product_id} className="group mx-auto mt-10 px-5 lg:px-10 max-w-5xl rounded-3xl grid grid-cols-2 gap-10 items-center hover:bg-sky-50/75 transition duration-300 ease-in">
            <div className='items-center-safe pr-2'>
              <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">{p.name}</p>
              <p className="mt-2 pl-1 text-md md:text-lg lg:text-xl font-semibold text-gray-600">Price: ${p.price}</p>
              <span className='flex flex-row space-x-1 md:space-x-3.5 mt-3.5 lg:mt-7'>
                <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 transition duration-300 cursor-pointer" onClick={()=> addtofav(p.product_id)}>Add to Favourite</button>
                {/* <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">Order Now</button> */}
              </span>
            </div>
            <figure className="relative h-40 lg:h-96 w-3/4"><Image src={p.images[0].url} alt={p.name} draggable="false" fill objectFit='contain'/></figure>
          </div>: <div key={p.product_id} className="group mx-auto mt-10 px-5 lg:px-10 max-w-5xl rounded-3xl grid grid-cols-2 gap-10 items-center hover:bg-sky-50/75 transition duration-300 ease-in">
            <figure className="relative h-40 lg:h-96 w-3/4"><Image src={p.images[0].url} alt={p.name} draggable="false" fill objectFit='contain'/></figure>
            <div className='items-center-safe pr-2'>
              <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">{p.name}</p>
              <p className="mt-2 pl-1 text-md md:text-lg lg:text-xl font-semibold text-gray-600">Price: ${p.price}</p>
              <span className='flex flex-row space-x-1 md:space-x-3.5 mt-3.5 lg:mt-7'>
                <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 transition duration-300 cursor-pointer" onClick={()=> addtofav(p.product_id)}>Add to Favourite</button>
                {/* <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">Order Now</button> */}
              </span>
            </div>
          </div>
        )): <p className='text-center text-2xl md:text-4xl lg:text-5xl font-semibold'>No Records to display</p>}
        
        <div className='max-w-5xl mx-auto mt-24 mb-20'>
          <Link href="/nutrition" className='inline-block w-full h-full px-10 py-4 font-semibold border border-cyan-500 rounded-full'>EXPLORE NUTRITIONAL VALUE</Link>
        </div>
      </main>
    </React.Fragment>
  );
}




