'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

import { FaAngleDown } from "react-icons/fa";
import Img2 from "@/assets/hazelnut.png"

export default function StoreData(addon){
    let addonData = addon.addon.data
    
    
    const orderType = [
        { id: 1, name: 'Carry Out' },
        { id: 2, name: 'Pick Up' },
    ]
    const orderDate = [
        { id: 1, name: 'Today' },
        { id: 2, name: 'Tomorrow' },
    ]

    const [selectedOrderType, setSelectedOrderType] = React.useState(orderType[0])
    const [selectedOrderDate, setSelectedOrderDate] = React.useState(orderDate[0])

    return(
        <React.Fragment>
            <header className="container px-5 flex flex-row items-center space-x-3.5">
                <Listbox value={selectedOrderType} onChange={setSelectedOrderType}>
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
            </header>
            <main className="container my-10 px-8 space-y-20">
                    <section className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Large Dessert</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
                            {[...Array(4)].map((k,i)=>(
                                <Link key={i} href="#" className="flex flex-col items-start">
                                <figure>
                                    <Image src={Img2} className="h-44 lg:h-64 w-auto" alt="ki6u na" draggable="false" />
                                    <figcaption className="text-xl md:text-2xl lg:text-3xl">Single</figcaption>
                                    $3.99
                                </figure>
                            </Link>
                            ))}
                        </div>
                    </section>

                    <section className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Mini Dessert</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
                            {[...Array(4)].map((k,i)=>(
                                <Link key={i} href="#" className="flex flex-col items-start">
                                <figure>
                                    <Image src={Img2} className="h-44 lg:h-64 w-auto" alt="ki6u na" draggable="false" />
                                    <figcaption className="text-xl md:text-2xl lg:text-3xl">Single</figcaption>
                                    $3.99
                                </figure>
                            </Link>
                            ))}
                        </div>
                    </section>

                    <section className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Drinks</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
                            {[...Array(3)].map((k,i)=>(
                                <Link key={i} href="#" className="flex flex-col items-start">
                                <figure>
                                    <Image src={Img2} className="h-44 lg:h-64 w-auto" alt="ki6u na" draggable="false" />
                                    <figcaption className="text-xl md:text-2xl lg:text-3xl">Single</figcaption>
                                    $3.99
                                </figure>
                            </Link>
                            ))}
                        </div>
                    </section>

                    <section className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Extras</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
                            {addonData.map((i)=>(
                                <Link key={i.product_id} href={`/${i.slug}`} className="flex flex-col items-start">
                                <figure>
                                    <div className="relative h-24 lg:h-46 lg:w-46 w-24"><Image src={i.images} alt={i.name} draggable="false" fill objectFit="cover"/></div>
                                    <figcaption className="text-xl md:text-2xl lg:text-3xl">{i.name}</figcaption>
                                    ${i.price}
                                </figure>
                            </Link>
                            ))}
                        </div>
                    </section>
            </main>
        </React.Fragment>
    )
}