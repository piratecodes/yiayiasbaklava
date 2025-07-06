import React from 'react';

import StoreLocator from'@/componant/storeLocator/storePage'

async function storePage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store-locations`,{
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: `{ "search": "Kimberton Whole Foods" }`,
        redirect: "follow"
    })

    const data = await res.json()

  return <StoreLocator storeApi={data} />
}

export default storePage;