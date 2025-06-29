"use server"
import React from 'react'
import { cookies } from 'next/headers'

import FavouritePage from '@/componant/favourite/favouritePag'



export default async function Favourite(){
    const cookieStore = await cookies()
    const token = cookieStore.get('jwt_token')
     //Api Calling
    const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/favourite-list`,{
        method: "GET",
        headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
        }
    })
    const home = await responce.json()

    return <FavouritePage home={home} token={token} />
}