"use client"
import React, { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { showError, showSuccess, showWarning } from '@/utils/toast';


import { BsFillGiftFill } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiAdminFill, RiDiscountPercentFill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";


export default function Corporate({token}){

    const people = [
        { id: 1, name: '1 -50' },
        { id: 2, name: '50 - 100' },
        { id: 3, name: '100+' },
    ]
    const preffered = [
        { id: 1, name: 'Baklava Boxes' },
        { id: 2, name: 'Custom Gift Basket' },
        { id: 3, name: 'Gift Vouchers' },
        { id: 4, name: 'Others' },
    ]
    const [companyName, setCompanyName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [postal, setPostal] = useState('')
    const [comments, setComments] = useState('')   
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [selectedPreffered, setSelectedPreffered] = useState(preffered[0])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!token) showError("Pleaase Authenticate First")
        else{
            try{
                const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/corporate-gifting`,{
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token.value}`,
                    "Content-Type": "application/json",
                }, body: `{ "company_name": "${companyName}", "name": "${name}", "email": "${email}", "phone": ${phone}, "address": "${address}", "city": "${city}", "state": "${state}", "postal_code": ${postal}, "number_of_recipients": "${selectedPerson}", "type_of_gift": "${selectedPreffered}", "comments": "${comments}"}`
                })
                const data = await responce.json()
                if (responce.status == 200) showSuccess(data.message)
                else showError(data.message)
            }catch{
                showWarning("something went wrong")
            }

        }
    }
    return (
        <>
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"> Baklava For Business </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight"> We are constantly looking to improve our offering. If we don't have what you are looking for, contact our Business Concierge to explore more personalie options! </p>
                </div>
            </header>
            <main className='mx-auto my-10'>
                <div className='container grid grid-cols-3 lg:grid-cols-6 gap-6 border-y-2 border-dashed py-5'>
                    <span className='flex flex-col items-center'>
                        <HiOutlinePencilAlt id='customizable' className='text-5xl fill-sky-500' />
                        <label htmlFor="customizable" className='text-xl text-center'>Customizable</label>
                    </span>
                    <span className='flex flex-col items-center'>
                        <RiAdminFill id='Personalization' className='text-5xl fill-sky-500' />
                        <label htmlFor="Personalization" className='text-xl text-center'>Personalization</label>
                    </span>
                    <span className='flex flex-col items-center'>
                        <BsFillGiftFill id='Premium' className='text-5xl fill-sky-500' />
                        <label htmlFor="Premium" className='text-xl text-center'>Premium Gifting</label>
                    </span>
                    <span className='flex flex-col items-center'>
                        <GiTeamIdea id='Innovation' className='text-5xl fill-sky-500' />
                        <label htmlFor="Innovation" className='text-xl text-center'>Innovation</label>
                    </span>
                    <span className='flex flex-col items-center'>
                        <FaBusinessTime id='customizable' className='text-5xl fill-sky-500' />
                        <label htmlFor="customizable" className='text-xl text-center'>WorldWide <br /> Timely Delivery</label>
                    </span>
                    <span className='flex flex-col items-center'>
                        <RiDiscountPercentFill id='customizable' className='text-5xl fill-sky-500' />
                        <label htmlFor="customizable" className='text-xl text-center'>Corporate Discount</label>
                    </span>
                </div>

                
                <form className='container px-4 mt-10' onSubmit={handleSubmit}>
                    <h2 className='my-4 text-center text-2xl md:text-3xl lg:text-4xl font-semibold'>Contact Info</h2>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-gray-900 ">Company Name</label>
                            <input type="text" id="company_name" value={companyName} onChange={e=> setCompanyName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Company name" required />
                        </div>
                        <div>
                            <label htmlFor="poc_name" className="block mb-2 text-sm font-medium text-gray-900">POC</label>
                            <input type="text" id="poc_name" value={name} onChange={e=> setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="POC" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" id="email" value={email} onChange={e=> setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Email" required />
                        </div>  
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                            <input type="tel" id="phone" value={phone} onChange={e=> setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="123-45-678"  required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                        <input type="text" id="address" value={address} onChange={e=> setAddress(e.target.value)} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="address" required />
                    </div>
                    <div className='grid gap-4 md:grid-cols-3'>
                        <div>
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
                            <input type="text" id="city" value={city} onChange={e=> setCity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="City" required />
                        </div>
                        <div>
                            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900">State</label>
                            <input type="text" id="state" value={state} onChange={e=> setState(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="post" className="block mb-2 text-sm font-medium text-gray-900">POSTAL CODE</label>
                            <input type="number" id="post" value={postal} onChange={e=> setPostal(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Postal Code" required />
                        </div>
                    </div>
                    <div className='grid gap-6 md:grid-cols-2 mb-6'>
                        <div>
                            <label htmlFor="post" className="block mb-2 text-sm font-medium text-gray-900">No of gifts Recipients</label>
                            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                <ListboxButton className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                    {selectedPerson.name}
                                </ListboxButton>
                                <ListboxOptions anchor="bottom" className="w-fit border bg-sky-50 space-y-2.5 divide-y">
                                    {people.map((person) => (
                                    <ListboxOption key={person.id} value={person} className="data-focus:bg-blue-100 px-2.5">
                                        {person.name}
                                    </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </Listbox>
                        </div>

                       <div>
                            <label htmlFor="post" className="block mb-2 text-sm font-medium text-gray-900">Type of Gift Preferred</label>
                            <Listbox value={selectedPreffered} onChange={setSelectedPreffered}>
                                <ListboxButton className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                    {selectedPreffered.name}
                                </ListboxButton>
                                <ListboxOptions anchor="bottom" className="w-fit border bg-sky-50 space-y-2.5 divide-y">
                                    {preffered.map((person) => (
                                    <ListboxOption key={person.id} value={person} className="data-focus:bg-blue-100 px-2.5">
                                        {person.name}
                                    </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </Listbox>
                        </div>

                    </div>
                    <div className="mb-6">
                        <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900">Additional Comment</label>
                        <textarea type="commentr" id="comment" value={comments} onChange={e=> setComments(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Type Additional Comment" required />
                    </div>
                    
                     
                   
                    <button type="submit" className="block text-white bg-sky-500 hover:bg-sky-600 font-medium rounded-lg text-sm lg:w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>

            </main>

        </>
    )
}