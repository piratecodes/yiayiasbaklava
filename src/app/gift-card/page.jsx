import React from 'react';

//page insert
import Card from '@/componant/GiftCard/card'

export default function GiftCardTemplate() {

  return (
    <div className="container p-6">
      <Card />
    </div>
  );
}

export const metadata = {
    title: "Gift Card",
    description: "This is that we provide gift card to your belove ones."
}