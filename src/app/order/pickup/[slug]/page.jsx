import React from 'react'
import { cookies } from 'next/headers'
import { useSelector } from 'react-redux';
import { userSelector } from '@/redux/features/userSlice'

import StoreData from "@/componant/order/orderSlug"

export default async function StoreSlug(){
    const cookieStore = await cookies()
    const token = cookieStore.get('jwt_token').value
    //Redux
    // const {  jwt } = useSelector( userSelector );

    const addonProductResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add-on-product-list`,{
        method: "GET",
        headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        }
    })
    const addonProductData = await addonProductResponse.json()
    return <StoreData addon={addonProductData} />
}