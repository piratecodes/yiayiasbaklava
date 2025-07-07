"use client"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Description, Dialog, DialogPanel, DialogTitle, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { RiCoinsFill, RiCameraFill, RiUploadCloudFill, RiImageFill } from "react-icons/ri";
import { showSuccess, showError } from '@/utils/toast';

//Redux profilesetup
import { useSelector, useDispatch } from 'react-redux';
import { clearState, logoutUser, userSelector, updateProfile } from '@/redux/features/userSlice'

export default function Dashboard(){
    const router = useRouter();
    //Redux
    const dispatch = useDispatch();
    const { id, name, avtar, phone, email, refresh, jwt, errorMessage, isUpdateSuccess, isError, } = useSelector( userSelector );
    console.log("user id fetching: ", id)

    //main content
    const [updateName, setUpdateName] = useState(name)
    const [UpdatePhone, setUpdatePhone] = useState(phone)
    const [updateEmail, setUpdateEmail] = useState(email)
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    let [isOpen, setIsOpen] = useState(false) //delete account dialogue box
    
    // Image upload states
    const [isImageUploadOpen, setIsImageUploadOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)
    const [isDragging, setIsDragging] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const fileInputRef = useRef(null)

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

    // Image upload handlers
    const handleImageSelect = (file) => {
      if (file && file.type.startsWith('image/')) {
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
          showError('Image size should be less than 5MB');
          return;
        }
        
        setSelectedImage(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewUrl(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        showError('Please select a valid image file');
      }
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      setIsDragging(false);
    };

    const handleDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleImageSelect(files[0]);
      }
    };

    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        handleImageSelect(file);
      }
    };

    const handleUploadImage = async () => {
      if (!selectedImage) return;
      
      setIsUploading(true);
      
      try {
        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append("folder", "profile");
        formData.append("customer_id", `${id}`);

        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store-image`, {
          method: 'POST',
          headers: {
            key: `${jwt}`,
          },
          body: formData,
        });
        
        const data = await response.json();
        
        if (response.ok) {
          showSuccess('Profile picture updated successfully!');
          // Update the avatar in Redux store if needed
          // dispatch(updateAvatar(data.avatarUrl));
          setIsImageUploadOpen(false);
          setSelectedImage(null);
          setPreviewUrl(null);
          location.reload();
        } else {
          showError(data.message || 'Failed to upload image');
        }
      } catch (error) {
        showError('Error uploading image. Please try again.');
        console.error('Upload error:', error);
      } finally {
        setIsUploading(false);
      }
    };

    const resetImageUpload = () => {
      setSelectedImage(null);
      setPreviewUrl(null);
      setIsDragging(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

    const closeImageUpload = () => {
      setIsImageUploadOpen(false);
      resetImageUpload();
    };
    
    useEffect(()=>{
      if (isError) showError(errorMessage)
      if(isUpdateSuccess == true) showSuccess(`Profile Updated Successfully`)
    },[isError, isUpdateSuccess, errorMessage])
    

     return(
        <React.Fragment>
            <header className='py-10 px-12 h-64 flex flex-col md:flex-row justify-between items-center bg-sky-500'>
                {/* Main Content */}
                <figure className='flex fle-row space-x-2 items-center'>
                    <span className='relative w-24 h-24 bg-black rounded-full border-2 border-black overflow-clip group cursor-pointer' onClick={() => setIsImageUploadOpen(true)}>
                        <Image src={avtar || '/default-avatar.png'} layout='fill' alt={`Avatar of ${name}`} draggable="false" />
                        {/* Hover overlay */}
                        <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300'>
                            <RiCameraFill className='text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </div>
                    </span>
                    <figcaption className='flex flex-col space-y-1'>
                        <label>Name: {name}</label>
                        <label>Phone: {phone}</label>
                        <label>Email: {email}</label>
                    </figcaption>
                </figure>
                <button type="button" className="text-sky-500 h-12 bg-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=> {dispatch(logoutUser()); location.replace('/') }}>Log Out</button>
            </header>

            {/* Image Upload Dialog */}
            <Dialog open={isImageUploadOpen} onClose={closeImageUpload} className="relative z-50">
                <div className="fixed inset-0 bg-black bg-opacity-50 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg w-full space-y-4 border border-sky-500 bg-white rounded-lg p-6">
                        <DialogTitle className="text-xl font-bold text-center text-gray-900">Update Profile Picture</DialogTitle>
                        
                        {!selectedImage ? (
                            <div 
                                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300 ${
                                    isDragging ? 'border-sky-500 bg-sky-50' : 'border-gray-300'
                                }`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <RiUploadCloudFill className="mx-auto text-4xl text-gray-400 mb-4" />
                                <p className="text-gray-600 mb-4">Drag and drop an image here, or</p>
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors duration-300"
                                >
                                    Select from computer
                                </button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileInputChange}
                                    className="hidden"
                                />
                                <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 5MB</p>
                            </div>
                        ) : (
                            <div className="text-center">
                                <div className="mb-4">
                                    <img 
                                        src={previewUrl} 
                                        alt="Preview" 
                                        className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-gray-300"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mb-4">{selectedImage.name}</p>
                                <div className="flex justify-center space-x-3">
                                    <button
                                        onClick={resetImageUpload}
                                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        Choose Different
                                    </button>
                                    <button
                                        onClick={handleUploadImage}
                                        disabled={isUploading}
                                        className={`px-6 py-2 rounded-lg text-white transition-colors duration-300 ${
                                            isUploading 
                                                ? 'bg-gray-400 cursor-not-allowed' 
                                                : 'bg-sky-500 hover:bg-sky-600'
                                        }`}
                                    >
                                        {isUploading ? 'Uploading...' : 'Upload'}
                                    </button>
                                </div>
                            </div>
                        )}
                        
                        <div className="flex justify-end">
                            <button
                                onClick={closeImageUpload}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

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
                                {/* Delete Account Dialogue Box */}
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