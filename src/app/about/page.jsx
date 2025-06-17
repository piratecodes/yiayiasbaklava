import React from "react";
import Image from 'next/image'

import img1 from "@/assets/about/dream.jpeg"
import img2 from "@/assets/about/yia.jpg"
import { Description } from "@headlessui/react";

export default function About(){
    return(
        <main className="container my-10">
            <p className="text-center text-5xl text-sky-500 font-bold mb-10">Our Sweet Beginning</p>
            <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-cyan-900">
                <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
                    <div
                    className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
                    >
                    <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                    <div className="-mt-2">
                        <time className="text-xs/none font-medium text-gray-700">2021</time>

                        <h3 className="text-lg font-bold text-gray-900">One Big Dream</h3>
                        <Image className="h-auto w-40 lg:w-auto lg:h-96" src={img1} alt="big dream" draggable="false"/>
                    </div>
                    </div>

                    <div aria-hidden="true"></div>
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
                            <Image className="h-auto w-40 lg:w-96 lg:h-auto" src={img2} alt="big dream" draggable="false"/>
                            <p className="px-2.5 py-1.5 mt-2.5 w-40 lg:w-96 text-left lg:text-justify">My mother, Christine, has a passion for baking that began in her childhood at just 5 years old. She learned recipes passed down from generations in our family, with a legacy of over 125 years. Baklava has been a staple dessert for all special moments, from family gatherings to weddings, and it’s always been a centerpiece of our family celebrations. After I was diagnosed with severe dyslexia at a young age my mother took it upon herself to find a way to pay for the very expensive ,and much needed, tutoring I needed. She began selling Greek delicacies, Baklava was her staple</p>
                        </div>
                    </div>
                    </div>

                    <div aria-hidden="true"></div>
                </li>
            </ol>
            
            <video className="w-4/5 lg:w-7/12 h-auto mx-auto my-16 rounded-2xl" controls muted playsInline loop poster="/poster-balkava.jpg">
                <source src="/baklava.mp4" type="video/mp4" />
            </video>
            
            <section className="container px-5">
                <h2 className="my-10 text-center text-sky-500 font-bold text-5xl">Why Yia Yia's Baklava</h2>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        

                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <svg aria-hidden="true" className="w-10 h-10 mb-2.5 fill-cyan-900" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M192 0C79.7 101.3 0 220.9 0 300.5 0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5zm0 448c-56.5 0-96-39-96-94.8 0-13.5 4.6-61.5 96-161.2 91.4 99.7 96 147.7 96 161.2 0 55.8-39.5 94.8-96 94.8z"></path></svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Freshly Prepared</h5>
                            <p className="mb-3 font-normal text-gray-500">All sweets are freshly prepared & delivered right from our shelves to your doorsteps for a refined dessert experience.</p>
                        </div>

                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <svg aria-hidden="true" className="w-10 h-10 mb-2.5 fill-cyan-900" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M240.6 194.1c1.9-30.8 17.3-61.2 44-79.8C279.4 103.5 268.7 96 256 96h-29.4l30.7-22c7.2-5.1 8.9-15.1 3.7-22.3l-9.3-13c-5.1-7.2-15.1-8.9-22.3-3.7l-32 22.9 11.5-30.6c3.1-8.3-1.1-17.5-9.4-20.6l-15-5.6c-8.3-3.1-17.5 1.1-20.6 9.4l-19.9 53-19.9-53.1C121 2.1 111.8-2.1 103.5 1l-15 5.6C80.2 9.7 76 19 79.2 27.2l11.5 30.6L58.6 35c-7.2-5.1-17.2-3.5-22.3 3.7l-9.3 13c-5.1 7.2-3.5 17.2 3.7 22.3l30.7 22H32c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h168.9c-5.5-9.5-8.9-20.3-8.9-32V256c0-29.9 20.8-55 48.6-61.9zM224 480c0 17.7 14.3 32 32 32h160V384H224v96zm224 32h160c17.7 0 32-14.3 32-32v-96H448v128zm160-288h-20.4c2.6-7.6 4.4-15.5 4.4-23.8 0-35.5-27-72.2-72.1-72.2-48.1 0-75.9 47.7-87.9 75.3-12.1-27.6-39.9-75.3-87.9-75.3-45.1 0-72.1 36.7-72.1 72.2 0 8.3 1.7 16.2 4.4 23.8H256c-17.7 0-32 14.3-32 32v96h192V224h15.3l.7-.2.7.2H448v128h192v-96c0-17.7-14.3-32-32-32zm-272 0c-2.7-1.4-5.1-3-7.2-4.8-7.3-6.4-8.8-13.8-8.8-19 0-9.7 6.4-24.2 24.1-24.2 18.7 0 35.6 27.4 44.5 48H336zm199.2-4.8c-2.1 1.8-4.5 3.4-7.2 4.8h-52.6c8.8-20.3 25.8-48 44.5-48 17.7 0 24.1 14.5 24.1 24.2 0 5.2-1.5 12.6-8.8 19z"></path></svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Beautiful Packaging</h5>
                            <p className="mb-3 font-normal text-gray-500">Packaging – the art that expresses joy, love, and regard, offering an exquisite and personalized gifting experience.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <svg aria-hidden="true" className="w-10 h-10 mb-2.5 fill-cyan-900" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M353.6 304.6c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-152.8-48.9c4.5 1.2 9.2-1.5 10.5-6l19.4-69.9c5.6-20.3-7.4-41.1-28.8-44.5-18.6-3-36.4 9.8-41.5 27.9l-2 7.1-7.1-1.9c-18.2-4.7-38.2 4.3-44.9 22-7.7 20.2 3.8 41.9 24.2 47.2l70.2 18.1zm188.8-65.3c-6.7-17.6-26.7-26.7-44.9-22l-7.1 1.9-2-7.1c-5-18.1-22.8-30.9-41.5-27.9-21.4 3.4-34.4 24.2-28.8 44.5l19.4 69.9c1.2 4.5 5.9 7.2 10.5 6l70.2-18.2c20.4-5.3 31.9-26.9 24.2-47.1zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200z"></path></svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Authentic Flavours</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Relish authentic flavours that narrate the story of culture, heritage, and traditions of the Middle-East in every bite.</p>
                        </div>
                    </div>
                </div>
            </section>
                
        </main>
    );
}

export const metadata = {
    title: "About",
    description: "This is how we are and what we are all about"
}