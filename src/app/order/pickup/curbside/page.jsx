import React from 'react'

import Carryout from "@/componant/pickup/crubside"

export default async function Carry(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product-list-category-wise`)
    const data = await response.json()
    return <Carryout all={data} />
}

export const metadata = {
    title: "Crubside",
    description: "User can Crubside from this Page"
}