import React from 'react'
import { notFound } from 'next/navigation';

import Carryout from "@/componant/order/deliveryType"

export default async function Carry({params}){
    // console.log("param", await params)
    const { deliveryType } = await params
    // console.log("param", deliveryType !== "carryout" || deliveryType !== "curbside")
    // if(deliveryType !== "carryout" && deliveryType !== "curbside") notFound()

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product-list-category-wise`)
    const data = await response.json()
    return <Carryout all={data} />
}

export const metadata = {
    title: "Carryout",
    description: "User can Carryout from this Page"
}