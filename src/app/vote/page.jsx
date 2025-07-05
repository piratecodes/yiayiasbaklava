'use server'
import React from 'react'
import { cookies } from 'next/headers'

import VotingPage from '@/componant/voting/votingPage'
// export const dynamic = 'force-dynamic'



export default async function Vote(){
    const cookieStore = await cookies()
    const token = cookieStore.get('jwt_token')
     //Api Calling
    const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leaderboard`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json",
        }
    })
    const data = await responce.json()

    return <VotingPage vote={data} token={token} />
}

export async function generateMetadata({ params }) {
    return{
        title: 'Voting',
        description: "On this page user can vote their beloved product."
    }
}