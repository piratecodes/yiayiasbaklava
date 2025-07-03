"use server"
import React from 'react'
import { cookies } from 'next/headers'

import Home from '@/componant/homePage/home'


export default async function HomePage(){
  const cookieStore = await cookies()
  const token = cookieStore.get('jwt_token')
  const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`)
  const home = await responce.json()

  return <Home key={Math.floor(Math.random()*10)} home={home} token={token} />
}