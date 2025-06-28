import React from 'react';

//page insert
import Card from '@/componant/GiftCard/card'


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

export default async function GiftCardTemplate() {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/gift-card-list`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${getCookie('jwt_token')}`,
                "Content-Type": "application/json",
            },
            redirect: 'follow'
        }
    );
    let data = await response.json();

  return (
    <div className="container p-6">
      <Card card={data.data} />
    </div>
  );
}

export const metadata = {
    title: "Gift Card",
    description: "This is that we provide gift card to your belove ones."
}