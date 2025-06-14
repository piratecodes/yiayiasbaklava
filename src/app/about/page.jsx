"use client"
import React from "react";
import Image from 'next/image'

import img1 from "@/assets/about/dream.jpeg"
import img2 from "@/assets/about/yia.jpg"

export default function About(){
    return(
        <main className="container mx-auto my-10">
            <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
                {/* <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
                    <div
                    className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
                    >
                    <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                    <div className="-mt-2">
                        <time className="text-xs/none font-medium text-gray-700">12/02/2025</time>

                        <h3 className="text-lg font-bold text-gray-900">Kickoff</h3>

                        <p className="mt-0.5 text-sm text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
                        adipisci tenetur sunt quae exercitationem sed pariatur porro!
                        </p>
                    </div>
                    </div>

                    <div ariaHidden="true"></div>
                </li> */}

                <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
                    <div
                    className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
                    >
                    <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                    <div className="-mt-2">
                        <time className="text-xs/none font-medium text-gray-700">2021</time>

                        <h3 className="text-lg font-bold text-gray-900">One Big Dream</h3>
                        <Image className="w-auto h-96" src={img1} alt="big dream"/>
                    </div>
                    </div>

                    <div ariaHidden="true"></div>
                </li>

                <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
                    <div
                    className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
                    >
                    <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                    <div className="-mt-2">
                        <p className="text-xs/none font-medium text-gray-700">From Our Family to Yours</p>

                        <h3 className="text-lg font-bold text-gray-900">Who Is Yia Yia?</h3>
                        <div className="bg-gray-300/50 rounded-b-xl">
                            <Image className="w-96 h-auto" src={img2} alt="big dream"/>
                            <p className="px-2.5 py-1.5 mt-2.5 w-96 text-justify">My mother, Christine, has a passion for baking that began in her childhood at just 5 years old. She learned recipes passed down from generations in our family, with a legacy of over 125 years. Baklava has been a staple dessert for all special moments, from family gatherings to weddings, and it’s always been a centerpiece of our family celebrations. After I was diagnosed with severe dyslexia at a young age my mother took it upon herself to find a way to pay for the very expensive ,and much needed, tutoring I needed. She began selling Greek delicacies, Baklava was her staple</p>
                        </div>
                    </div>
                    </div>

                    <div ariaHidden="true"></div>
                </li>
            </ol>
            {/* <video className="w-96 h-auto mx-auto" src="https://yiayiasbaklava.com/wp-content/uploads/2023/12/Yia-Yias-Baklava-Homemade-Baklava-Order-Now.mp4" controls="" preload="metadata" muted="muted" controlslist="nodownload" poster="https://yiayiasbaklava.com/wp-content/uploads/2023/12/IMG-20231215-WA0003.jpg"></video> */}
            <video className="w-7/12 h-auto mx-auto my-10 rounded-2xl" controls muted playsInline loop poster="/poster-balkava.jpg">
                <source src="/baklava.mp4" type="video/mp4" />
            </video>
            
            <section className="container px-5 mx-auto">
                <h2 className="my-8 text-center text-indigo-800 font-bold text-4xl">Why Yia Yia's Baklava</h2>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        

                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <svg className="w-7 h-7 text-gray-500 mb-3" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                            </svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Need a help in Claim?</h5>
                            <p className="mb-3 font-normal text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                        </div>

                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <svg className="w-7 h-7 text-gray-500 mb-3" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                            </svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Need a help in Claim?</h5>
                            <p className="mb-3 font-normal text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <svg className="w-7 h-7 text-gray-500 mb-3" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                            </svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Need a help in Claim?</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                        </div>
                    </div>
                </div>
            </section>
                
        </main>
    );
}