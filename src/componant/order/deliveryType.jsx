"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaAngleDown } from "react-icons/fa";
import { useRouter, usePathname } from 'next/navigation';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


export default function Nutrition({all}) {
    const router = useRouter(); 
    const pathname = usePathname(); 
    const orderType = [
        { id: 1, name: 'Carry Out', path: '/order/pickup/carryout' },
        { id: 2, name: 'Curbside', path: '/order/pickup/curbside' },
    ]
    const orderDate = [
        { id: 1, name: 'Today' },
        { id: 2, name: 'Tomorrow' },
    ]
    const initialOrderType = orderType.find(type => pathname.includes(type.path)) || orderType[0];
    const [selectedOrderType, setSelectedOrderType] = React.useState(initialOrderType);
    const [selectedOrderDate, setSelectedOrderDate] = React.useState(orderDate[0])

    // Function to handle order type change
    const handleOrderTypeChange = (selected) => {
        setSelectedOrderType(selected);
        router.push(selected.path); // Navigate to the selected path
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"> Colmar </h1>
          </div>
      </header>
      <aside className="container px-5 flex flex-row items-center space-x-3.5">
            <Listbox value={selectedOrderType} onChange={handleOrderTypeChange}>
                <ListboxButton className={`p-3.5 font-bold flex items-center space-x-2.5`}><label>{selectedOrderType.name}</label><FaAngleDown /></ListboxButton>
                <ListboxOptions anchor="bottom" className={`p-1.5 bg-sky-500/50 rounded-2xl`}>
                    {orderType.map((order) => (
                    <ListboxOption key={order.id} value={order} className="py-1 px-3.5 rounded-lg data-focus:bg-gray-400 data-focus:text-black">
                        {order.name}
                    </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
            <Listbox value={selectedOrderDate} onChange={setSelectedOrderDate}>
                <ListboxButton className={`p-3.5 font-bold flex items-center space-x-2.5`}><label>{selectedOrderDate.name}</label><FaAngleDown /></ListboxButton>
                <ListboxOptions anchor="bottom" className={`p-1.5 bg-sky-500/50 rounded-2xl`}>
                    {orderDate.map((order) => (
                    <ListboxOption key={order.id} value={order} className="py-1 px-3.5 rounded-lg data-focus:bg-gray-400 data-focus:text-black">
                        {order.name}
                    </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </aside>
      <main id={'product-category'} className="flex w-full justify-center px-4 my-20 scroll-mt-52">
        <div className="w-full max-w-6xl">
          <TabGroup>
            <TabList className="grid grid-cols-3 lg:grid-cols-5 gap-4 place-content-center  max-w-5xl mx-auto">
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  All
                </Tab>
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  Party Pack
                </Tab>
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  Large
                </Tab>
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  Medium
                </Tab>
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  Single
                </Tab>
            </TabList>
            <TabPanels className="mt-3 border-2 border-sky-500 rounded-lg">
                <TabPanel className="rounded-xl bg-sky-50 p-3 space-y-5">    
                    {all.data.filter(i => i.slug === "all")[0]?.shop_products.map((i, j)=>{
                        return <Link key={j} href={`${pathname}/${i.slug}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100">
                            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" /> */}
                            <figure className='relative w-32 h-28 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg overflow-hidden'><Image fill objectFit='contain' src={i.images[0].url} alt="" /></figure>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <p className="mb-3 font-semibold text-blue-500">{i.discount_or_extra}</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{i.name}</h5>
                                <p className="mb-3 font-normal text-gray-900">{i.description}</p>
                                <span className='flex flex-row items-center space-x-2.5'><p className="mb-3 font-normal text-gray-900">$ {i.price}</p><p className="mb-3 font-normal text-gray-900 line-through decoration-red-500 decoration-2">$ {i.old_price}</p></span>
                            </div>
                        </Link>
                    })}
                </TabPanel>
                <TabPanel className="rounded-xl bg-sky-50 p-3">
                     {all.data.filter(i => i.slug === "party-pack")[0]?.shop_products.map((i, j)=>{
                        return <Link key={j} href={`${pathname}/${i.slug}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100">
                            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" /> */}
                            <figure className='relative w-32 h-28 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg overflow-hidden'><Image fill objectFit='contain' src={i.images[0].url} alt="" /></figure>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <p className="mb-3 font-semibold text-blue-500">{i.discount_or_extra}</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{i.name}</h5>
                                <p className="mb-3 font-normal text-gray-900">{i.description}</p>
                                <span className='flex flex-row items-center space-x-2.5'><p className="mb-3 font-normal text-gray-900">$ {i.price}</p><p className="mb-3 font-normal text-gray-900 line-through decoration-red-500 decoration-2">$ {i.old_price}</p></span>
                            </div>
                        </Link>
                    })}
                </TabPanel>
                <TabPanel className="rounded-xl bg-sky-50 p-3">
                     {all.data.filter(i => i.slug === "large")[0]?.shop_products.map((i, j)=>{
                        return <Link key={j} href={`${pathname}/${i.slug}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100">
                            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" /> */}
                            <figure className='relative w-32 h-28 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg overflow-hidden'><Image fill objectFit='contain' src={i.images[0].url} alt="" /></figure>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <p className="mb-3 font-semibold text-blue-500">{i.discount_or_extra}</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{i.name}</h5>
                                <p className="mb-3 font-normal text-gray-900">{i.description}</p>
                                <span className='flex flex-row items-center space-x-2.5'><p className="mb-3 font-normal text-gray-900">$ {i.price}</p><p className="mb-3 font-normal text-gray-900 line-through decoration-red-500 decoration-2">$ {i.old_price}</p></span>
                            </div>
                        </Link>
                    })}
                </TabPanel>
                <TabPanel className="rounded-xl bg-sky-50 p-3">
                     {all.data.filter(i => i.slug === "medium")[0]?.shop_products.map((i, j)=>{
                        return <Link key={j} href={`${pathname}/${i.slug}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100">
                            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" /> */}
                            <figure className='relative w-32 h-28 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg overflow-hidden'><Image fill objectFit='contain' src={i.images[0].url} alt="" /></figure>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <p className="mb-3 font-semibold text-blue-500">{i.discount_or_extra}</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{i.name}</h5>
                                <p className="mb-3 font-normal text-gray-900">{i.description}</p>
                                <span className='flex flex-row items-center space-x-2.5'><p className="mb-3 font-normal text-gray-900">$ {i.price}</p><p className="mb-3 font-normal text-gray-900 line-through decoration-red-500 decoration-2">$ {i.old_price}</p></span>
                            </div>
                        </Link>
                    })}
                </TabPanel>
                <TabPanel className="rounded-xl bg-sky-50 p-3">
                     {all.data.filter(i => i.slug === "single")[0]?.shop_products.map((i, j)=>{
                        return <Link key={j} href={`${pathname}/${i.slug}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100">
                            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" /> */}
                            <figure className='relative w-32 h-28 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg overflow-hidden'><Image fill objectFit='contain' src={i.images[0].url} alt="" /></figure>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <p className="mb-3 font-semibold text-blue-500">{i.discount_or_extra}</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{i.name}</h5>
                                <p className="mb-3 font-normal text-gray-900">{i.description}</p>
                                <span className='flex flex-row items-center space-x-2.5'><p className="mb-3 font-normal text-gray-900">$ {i.price}</p><p className="mb-3 font-normal text-gray-900 line-through decoration-red-500 decoration-2">$ {i.old_price}</p></span>
                            </div>
                        </Link>
                    })}
                </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>
    </React.Fragment>
  )
}