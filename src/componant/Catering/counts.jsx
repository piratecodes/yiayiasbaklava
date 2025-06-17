"use client"
import React from 'react'

export default function Counters(){
    const [counts, setCounts] = React.useState({ customers: 0, repeat: 0, delivered: 0, events: 0  });
    const finalValues = { customers: 1638, repeat: 85, delivered: 7412, events: 236 };

    React.useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;

        const counters = Object.keys(finalValues).map(key => {
        const increment = finalValues[key] / steps;
        let current = 0;
        
        return setInterval(() => {
            current += increment;
            if (current >= finalValues[key]) {
            current = finalValues[key];
            clearInterval(counters.find(c => c === counters[Object.keys(finalValues).indexOf(key)]));
            }
            
            setCounts(prev => ({
            ...prev,
            [key]: Math.floor(current)
            }));
        }, stepDuration);
        });

        return () => counters.forEach(clearInterval);
    }, []);
    return(
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r relative overflow-hidden">
                        
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Happy Customers */}
                <div className="text-center">
                    <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
                    {counts.customers.toLocaleString()}
                    <span className="text-3xl lg:text-4xl xl:text-5xl">+</span>
                    </div>
                    <p className="text-gray-600 font-medium text-lg">
                    Happy Customers
                    </p>
                </div>
                
                {/* Repeat Customers */}
                <div className="text-center">
                    <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
                    {counts.repeat}
                    <span className="text-3xl lg:text-4xl xl:text-5xl">%</span>
                    </div>
                    <p className="text-gray-600 font-medium text-lg">
                    Repeat Customers
                    </p>
                </div>
                
                {/* Baklava Delivered */}
                <div className="text-center">
                    <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
                    {counts.delivered.toLocaleString()}
                    <span className="text-3xl lg:text-4xl xl:text-5xl">+</span>
                    </div>
                    <p className="text-gray-600 font-medium text-lg">
                    Baklava Delivered
                    </p>
                </div>
                
                {/* Events Catered */}
                <div className="text-center">
                    <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
                    {counts.events}
                    <span className="text-3xl lg:text-4xl xl:text-5xl">+</span>
                    </div>
                    <p className="text-gray-600 font-medium text-lg">
                    Events Catered
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}