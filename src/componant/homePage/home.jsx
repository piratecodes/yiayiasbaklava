"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Slide } from "react-awesome-reveal";
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
      {/* <header className="w-full h-screen lg:h-screen overflow-y-hidden">
        <video className="hidden lg:block absolute z-10 top-0 w-full h-auto object-cover" autoPlay muted playsInline loop>
          <source src="/Horizontal-Baklava.mp4" type="video/mp4" />
        </video>
        <video className="lg:hidden absolute z-10 inset-y-0 h-full object-cover" autoPlay muted playsInline loop>
          <source src={home.data.slider[0].image} type="video/mp4" />
        </video>
        <svg className='absolute bottom-0 md:top-auto lg:-bottom-28 z-20 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="fill-white" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path className="fill-white" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path className="fill-white" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
      </header> */}
      <header className="w-full h-full relative -translate-y-20">
        <video className="hidden lg:block z-10 w-full h-auto object-cover brightness-90" autoPlay muted playsInline loop>
          <source src="/Horizontal-Baklava.webm" type="video/mp4" />
        </video>
        <video className="lg:hidden z-10 w-auto h-screen object-cover brightness-90" autoPlay muted playsInline loop>
          <source src={home.data.slider[0].image} type="video/mp4" />
        </video>
        <svg className='absolute inset-x-0 lg:h-24 w-full -bottom-2 z-20 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="fill-white" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path className="fill-white" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path className="fill-white" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
        <div className='absolute left-5 md:left-10 md:inset-x-10 bottom-1/6 z-30'>
          <p className='font-semibold text-md md:text-xl lg:text-2xl text-left text-white'>Retail pieces are larger than shown</p>
          <Link href="/order" className={`mt-2.5 flex items-center w-fit px-4 py-2 text-md font-medium hover:text-gray-60 rounded-4xl bg-black text-white`}>
              <svg className="w-4 h-4 mr-2 fill-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
                <path d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z" />
              </svg>
              Order Now
            </Link>
        </div>
      </header>

      <main className="container md:mt-10 lg:mt-0 ">
        <h1 className="mt-4 md:mt-8 mb-8 text-center py-2 px-4 rounded-3xl bg-sky-500 text-white w-full max-w-xs mx-auto font-normal text-xl">{home.data.weekly_timeline ? formatWeekRange(home.data.weekly_timeline) : "This Week's Special"}</h1>
        <p className=" text-center text-[45px] lg:text-6xl font-bold text-sky-500">Weekly Creations</p>
        
        {home.data.weekly_products ? home.data.weekly_products.map((p, q) => (
          (q+1)%2 == 0? <Slide key={q} triggerOnce direction='right'><div className="group mx-auto mt-10 px-5 lg:px-8 max-w-5xl rounded-3xl grid grid-cols-2 gap-10 items-center hover:bg-sky-50/75 transition duration-300 ease-in">
          <div className='items-center-safe pl-2'>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">{p.name}</p>
            {/* <p className="mt-2 pl-1 text-md md:text-lg lg:text-xl font-semibold text-gray-600">Price: ${p.price}</p> */}
            <span className='flex flex-row space-x-1 md:space-x-3.5 mt-3.5 lg:mt-7'>
              <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 hover:bg-sky-500 transition duration-300 cursor-pointer" onClick={()=> addtofav(p.product_id)}>Add to Favourite</button>
              <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 hover:bg-sky-300 hover:text-black transition duration-300 group-hover:bg-sky-500 group-hover:text-white cursor-pointer">Know More</button>
            </span>
          </div>
          <figure className="relative h-40 lg:h-96 w-full rounded-full radial"><Image src={p.images[0].url} alt={p.name} draggable="false" fill objectFit='contain'/></figure>
        </div></Slide> : <Slide key={q} triggerOnce direction='left'><div className="group mx-auto mt-10 px-5 lg:px-8 max-w-5xl rounded-3xl grid grid-cols-2 gap-10 items-center hover:bg-sky-50/75 transition duration-300 ease-in">
          <figure className="relative h-40 lg:h-96 w-full rounded-full radial"><Image src={p.images[0].url} alt={p.name} draggable="false" fill objectFit='contain'/></figure>
          <div className='items-center-safe pr-2'>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">{p.name}</p>
            {/* <p className="mt-2 pl-1 text-md md:text-lg lg:text-xl font-semibold text-gray-600">Price: ${p.price}</p> */}
            <span className='flex flex-row space-x-1 md:space-x-3.5 mt-3.5 lg:mt-7'>
              <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 hover:bg-sky-500 transition duration-300 cursor-pointer" onClick={()=> addtofav(p.product_id)}>Add to Favourite</button>
              <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 hover:bg-sky-300 hover:text-black transition duration-300 group-hover:bg-sky-500 group-hover:text-white cursor-pointer">Know More</button>
            </span>
          </div>
        </div></Slide>
        )): <p className='text-center text-2xl md:text-4xl lg:text-5xl font-semibold'>SORRY!! No Records Found</p>}

        <p className="mt-24 ml-1/12 text-center text-5xl lg:text-6xl font-bold text-sky-500">Yia Yia's Classic</p>
        <Link href={"https://maps.app.goo.gl/1PVrpTAXcL7siYKP6"} target='_blank' className="flex flex-row items-center my-3 text-center p-2 rounded-3xl max-w-xs mx-auto space-x-1.5 font-medium text-lg"><FaMapMarkerAlt className='fill-gray-900' /> <span>Visit Your Local Store Near You</span></Link>
        
        {home.data.classic_products ? home.data.classic_products.map((p, q) => (
          (q+1)%2 == 0?  <Slide key={q} triggerOnce direction="right"><div className="group mx-auto mt-10 px-5 lg:px-10 max-w-5xl rounded-3xl grid grid-cols-2 gap-10 items-center hover:bg-sky-50/75 transition duration-300 ease-in">
            <div className='items-center-safe pr-2'>
              <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">{p.name}</p>
              {/* <p className="mt-2 pl-1 text-md md:text-lg lg:text-xl font-semibold text-gray-600">Price: ${p.price}</p> */}
              <span className='flex flex-row space-x-1 md:space-x-3.5 mt-3.5 lg:mt-7'>
                <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 hover:bg-sky-500 hover:text-white transition duration-300 cursor-pointer" onClick={()=> addtofav(p.product_id)}>Add to Favourite</button>
                <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 hover:bg-sky-300 hover:text-black transition duration-300 group-hover:bg-sky-500 group-hover:text-white cursor-pointer">Know More</button>
              </span>
            </div>
            <figure className="relative h-40 lg:h-96 w-full rounded-full radial"><Image src={p.images[0].url} alt={p.name} draggable="false" fill objectFit='contain'/></figure>
          </div></Slide>: <Slide key={q} triggerOnce direction="left"><div className="group mx-auto mt-10 px-5 lg:px-10 max-w-5xl rounded-3xl grid grid-cols-2 gap-10 items-center hover:bg-sky-50/75 transition duration-300 ease-in">
            <figure className="relative h-40 lg:h-96 w-full rounded-full radial"><Image src={p.images[0].url} alt={p.name} draggable="false" fill objectFit='contain'/></figure>
            <div className='items-center-safe pr-2'>
              <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">{p.name}</p>
              {/* <p className="mt-2 pl-1 text-md md:text-lg lg:text-xl font-semibold text-gray-600">Price: ${p.price}</p> */}
              <span className='flex flex-row space-x-1 md:space-x-3.5 mt-3.5 lg:mt-7'>
                <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 hover:bg-sky-500 hover:text-white transition duration-300 cursor-pointer" onClick={()=> addtofav(p.product_id)}>Add to Favourite</button>
                <button className="px-1.5 md:px-3 py-1 rounded-2xl text-[10px] md:text-md lg:text-lg border border-cyan-800 group-hover:border group-hover:border-cyan-800 group-hover:translate-x-5 hover:bg-sky-300 hover:text-black transition duration-300 group-hover:bg-sky-500 group-hover:text-white cursor-pointer">Know More</button>
              </span>
            </div>
          </div></Slide>
        )): <p className='text-center text-2xl md:text-4xl lg:text-5xl font-semibold'>No Records to display</p>}
        
        <div className='max-w-5xl mx-2 md:mx-auto mt-24 mb-20 '>
          <Link href="/nutrition" className='inline-block w-full h-full px-10 py-4 font-semibold border border-cyan-500 rounded-full'>EXPLORE NUTRITIONAL VALUE</Link>
        </div>
      </main>
    </React.Fragment>
  );
}




