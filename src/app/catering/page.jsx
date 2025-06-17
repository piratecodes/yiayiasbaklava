import React from 'react'

//page Insert
import Header from '@/componant/Catering/header'
import Evulate from '@/componant/Catering/evulate'
import Counts from '@/componant/Catering/counts'
import Options from '@/componant/Catering/options'
import Faqs from '@/componant/Catering/faqs'

export default function Catering(){
    

    return(
    <React.Fragment>
        
        <Header />
        <main className=' container py-16 px-4 sm:px-6 lg:px-8'>
            
            <Evulate />
            <Counts />
            <Options />
            <Faqs />
        </main>
    </React.Fragment>
    )
}

export const metadata = {
    title: "Catering",
    description: "We also provide the catering services"
}