"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Description, Dialog, DialogPanel, DialogTitle, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { RiCoinsFill } from "react-icons/ri";
import { showSuccess, showError } from '@/utils/toast';

//Redux profilesetup
import { useSelector, useDispatch } from 'react-redux';
import { clearState, logoutUser, userSelector, updateProfile } from '@/redux/features/userSlice'


export default function Dashboard(){
    const router = useRouter();
    //Redux
    const dispatch = useDispatch();
    const { name, avtar, phone, email, refresh, jwt, errorMessage, isUpdateSuccess, isError, } = useSelector( userSelector );

    //main content
    const [updateName, setUpdateName] = useState(name)
    const [UpdatePhone, setUpdatePhone] = useState(phone)
    const [updateEmail, setUpdateEmail] = useState(email)
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    let [isOpen, setIsOpen] = useState(false) //deleate account dialogue box

    const updateProfileButton = (e)=>{
      e.preventDefault()
      dispatch( updateProfile({ name: updateName, email: updateEmail, phone: UpdatePhone }) );
    }

    const updatePassword = async (e)=>{
      e.preventDefault()
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/change-password`,{
        method: "POST",
        headers: {
        Accept: "application/json",
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
        },
        body: `{ "password": "${newPassword}", "confirm_password": "${confirmPassword}" }`,
      })
      const data = await response.json()
      if (response.status == 200) { showSuccess(data.message); setNewPassword(''); setconfirmPassword('') }
      else showError(data.message)
    }
    const deleteAccount = async (e)=>{
      e.preventDefault()
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/delete-account`,{
        method: "POST",
        headers: {
        Accept: "application/json",
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
        },
        body: `{ "refresh_token": "${refresh}" }`,
      })
      const data = await response.json()
      if (response.status == 200) { 
        showSuccess(data.message); 
        dispatch(clearState()) 
        location.replace('/')
      } else showError(data.message)
    }
    
    useEffect(()=>{
      if (isError) showError(errorMessage)
      if(isUpdateSuccess == true) showSuccess(`Profile Updated Successfully`)
    },[isError, isUpdateSuccess, errorMessage])
    

     return(
        <React.Fragment>
            <header className='py-10 px-12 h-64 flex flex-col md:flex-row justify-between items-center bg-sky-500'>
                {/* Wavy Bottom Border */}
                {/* <div className="absolute bottom-0 left-0 right-0">
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
                </div> */}

                {/* Main Content */}
                <figure className='flex fle-row space-x-2 items-center'>
                    <span className='relative w-24 h-24 bg-black rounded-full border-2 border-black overflow-clip'><Image src={avtar || null} layout='fill' alt={`Avtar of ${name}`} draggable="false" /></span>
                    <figcaption className='flex flex-col space-y-1'><label>Name: {name}</label><label>Phone: {phone}</label><label>Email: {email}</label></figcaption>
                </figure>
                <button type="button" className="text-sky-500 h-12 bg-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=> {dispatch(logoutUser()); location.replace('/') }}>Log Out</button>
            
            </header>
            <main className="flex w-full justify-center px-4 my-20 ">
                    <div className="w-full max-w-6xl">
                      <TabGroup>
                        <TabList className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-content-center">
                            <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                              My Profile
                            </Tab>
                            <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                              My Rewards
                            </Tab>
                            <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                              My Wallt
                            </Tab>
                            <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                              Biling Address
                            </Tab>
                        </TabList>
                        <TabPanels className="mt-3 border-2 border-sky-500 rounded-lg">
                            <TabPanel as={"form"} className="rounded-xl bg-sky-50 p-8">
                                
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <span>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Name" required value={updateName} onChange={e => setUpdateName(e.target.value)}  />
                                    </span>
                                    <span>
                                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                                        <input type="text" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Name" required value={UpdatePhone} onChange={e => setUpdatePhone(e.target.value)} />
                                    </span>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="john.doe@company.com" required value={updateEmail} onChange={e => setUpdateEmail(e.target.value)} />
                                </div> 
                                
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={updateProfileButton}>Update</button>

                                <h2 className='text-2xl text-sky-500 text-center font-semibold mt-10 mb-6'>Change Password</h2>

                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <span>
                                        <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900">New Password</label>
                                        <input type="password" id="new_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Password" required value={newPassword} onChange={e => setNewPassword(e.target.value)}  />
                                    </span>
                                    <span>
                                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                                        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Confirm Your Passwrd" required value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)} />
                                    </span>
                                </div>
                                <div className='flex flex-row justify-between'>
                                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center" onClick={updatePassword}>Change Password</button>
                                  <button type="submit" className="text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center" onClick={() => setIsOpen(true)}>Delete Account</button>
                                </div>
                                {/* Deleate Account Dialogue Box */}
                                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                                  <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                                    <DialogPanel className="max-w-lg space-y-4 border border-sky-500 bg-sky-100 rounded-lg p-12">
                                      <DialogTitle className="text-xl font-bold text-center">Delete account</DialogTitle>
                                      <Description className='font-normal text-gray-700'>This will permanently delete your account</Description>
                                      <p className='font-normal text-gray-700'>Are you sure you want to delete your account? All of your data will be permanently removed.</p>
                                      <div className="flex justify-between">
                                        <button className='p-2 border border-sky-400 rounded-xl font-medium text-slate-200 bg-green-600' onClick={() => setIsOpen(false)}>Cancel</button>
                                        <button className='p-2 border border-sky-400 rounded-xl font-medium text-slate-200 bg-pink-600' onClick={e => deleteAccount(e)}>Deactivate</button>
                                      </div>
                                    </DialogPanel>
                                  </div>
                                </Dialog>

                            </TabPanel>
                            <TabPanel className="rounded-xl bg-sky-50 p-3">
                              No Rewards
                            </TabPanel>
                            <TabPanel className="rounded-xl bg-sky-50 p-3">
                              <div className='bg-sky-400 rounded-xl flex flex-row space-x-3.5 items-center p-12 mb-8'>
                                <RiCoinsFill  className="fill-amber-600 text-3xl"/>
                                <label>reward value</label>
                              </div>
                              <div className=''>

                              </div>
                            </TabPanel>
                            <TabPanel className="rounded-xl bg-sky-50 p-3">
                              no value
                            </TabPanel>
                        </TabPanels>
                      </TabGroup>
                    </div>
                  </main>
        </React.Fragment>
     )
}