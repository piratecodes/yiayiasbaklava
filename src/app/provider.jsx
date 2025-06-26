"use client"
import React from "react";
import AuthInitializer from "@/utils/auth"
// import { useReportWebVitals } from 'next/web-vitals';
// import {onLCP, onINP, onCLS} from 'web-vitals';


// Redux
import { Provider } from "react-redux"
import store from "@/redux/store"


export default function Providers({children}){
    // useReportWebVitals((metric)=>{
    //     onCLS(console.log)
    //     onINP(console.log)
    //     onLCP(console.log)
    // })
    
    return(
        <Provider store={store}>
            <AuthInitializer>
                {children}
            </AuthInitializer>    
        </Provider>
    )
}