import React from 'react'
import { notFound } from 'next/navigation';

import PackSelectionPage from '@/componant/order/productSlug'

// Helper function to get cookies
function getCookie(name) {
  if (typeof document !== 'undefined') {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

export default async function Product({params}){
  //deliveryType Slug Check & productSlug Declaration
    const { deliveryType, productSlug } = await params
    if(deliveryType !== "carryout" && deliveryType !== "curbside") notFound()

    //From hare product page starts
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product-list-category-wise`,{
        method: "GET",
        headers: {
        Accept: "application/json",
        Authorization: `Bearer ${getCookie('jwt_token')}`,
        "Content-Type": "application/json",
        }
    })

    const product = await response.json()

    const slugIs = await product.data.find(i => i.slug === "all")?.shop_products.find(i => i.slug === productSlug )

    if(!slugIs) notFound();

    const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/select-flavours`,{
        method: "POST",
        headers: {
        Accept: "application/json",
        Authorization: `Bearer ${getCookie('jwt_token')}`,
        "Content-Type": "application/json",
        },
        body: `{"product_id": "${slugIs.product_id}"}`
    })

    const category = await response2.json()
    // console.log(category.data)

    //Main Structure
    return (<PackSelectionPage flavour={category.data} />)
}



// Metadata for the page
export const metadata = {
  title: "Customize Your Pack",
  description: "Select your favorite flavors to create your custom baklava pack.",
};