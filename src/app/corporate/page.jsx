"use server"
import React from 'react'
import { cookies } from 'next/headers'

import CorporateGift from "@/componant/corporate/corporate-gift"

export default async function Corporate(){
    const cookieStore = await cookies()
    const token = cookieStore.get('jwt_token')
    return <CorporateGift token={token} />
}