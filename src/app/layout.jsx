import localfont from "next/font/local"
import Script from 'next/script'
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next"
import "@/style/globals.css";




//file add
import Nav from "@/componant/nav";
import Footer from "@/componant/footer";

//Redux Provider for state Management
import Providers from "./provider"


const helvetica = localfont({
  src:[{
    path:"../../public/helvetica-255/Helvetica-Bold.ttf",
    weight: "700",
    style: "bold"
  },{
    path:"../../public/helvetica-255/Helvetica.ttf",
    weight: "400",
    style: "normal"
  },{
    path:"../../public/helvetica-255/helvetica-light-587ebe5a59211.ttf",
    weight: "300",
    style: "light"
  }],
  variable: "--font-helvetica"
})

const sofia = localfont({
  src:[{
    path:"../../public/sofia-pro/Sofia-Pro-UltraLight-Az.woff",
    weight: "100",
    style: "thin"
  },{
    path:"../../public/sofia-pro/Sofia-Pro-ExtraLight-Az.woff",
    weight: "200",
    style: "extralight"
  },{
    path:"../../public/sofia-pro/Sofia-Pro-Light-Az.woff",
    weight: "300",
    style: "light"
  },{
    path:"../../public/sofia-pro/Sofia-Pro-Regular-Az.woff",
    weight: "400",
    style: "normal"
  },{
    path:"../../public/sofia-pro/Sofia-Pro-Medium-Az.woff",
    weight: "500",
    style: "medium"
  },{
    path:"../../public/sofia-pro/Sofia-Pro-Semi-Bold-Az.woff",
    weight: "600",
    style: "semibold"
  },{
    path:"../../public/sofia-pro/Sofia-Pro-Bold-Az.woff",
    weight: "700",
    style: "bold"
  },{
    path:"../../public/sofia-pro/Sofia-Pro-Black-Az.woff",
    weight: "900",
    style: "black"
  }],
  variable: '--font-sofia',
  display: 'swap',
})


export const metadata = {
  title: {
    template: "%s | Yia Yis's Baklava",
    default: "Yia Yis's Baklava",
  },
  description: "A modern twist on a beloved classic. Our Chocolate Hazelnut Baklava features layers of crispy phyllo, a fragrant blend of cinnamon and walnuts, all enveloped",
  canonical: "https://staging.yiayiasbaklava.com/",
  sitename: "Yia Yia's Baklava",
  openGraph: {
    url: 'https://staging.yiayiasbaklava.com',
    title: "Yia Yia's Baklava",
    type: 'website',
    siteName: "Yia Yia's Baklava",
    description: 'A modern twist on a beloved classic. Our Chocolate Hazelnut Baklava features layers of crispy phyllo, a fragrant blend of cinnamon and walnuts, all enveloped',
    images: [
      {url: "https://staging.yiayiasbaklava.com/32x32.webp", alt: "yiayiasbaklava | Logo", type: 'image/webp', sizes:"32x32", fetchPriority: "auto"},
      {url: "https://staging.yiayiasbaklava.com/192x192.webp", alt: "yiayiasbaklava | Logo", type: 'image/webp', sizes:"192x192", fetchPriority: "auto"}
    ],
  },
  twitter:{
    card: "Yia Yia's Baklava",
    title: "Home - Yia Yia's Baklava",
    creator: "Yia Yia's Baklava",
    description: 'A modern twist on a beloved classic. Our Chocolate Hazelnut Baklava features layers of crispy phyllo, a fragrant blend of cinnamon and walnuts, all enveloped',
    images: [
      {url: "https://staging.yiayiasbaklava.com/32x32.webp", alt: "yiayiasbaklava | Logo", type: 'image/webp', sizes:"32x32", fetchPriority: "auto"},
      {url: "https://staging.yiayiasbaklava.com/192x192.webp", alt: "yiayiasbaklava | Logo", type: 'image/webp', sizes:"192x192", fetchPriority: "auto"}
    ],
  },
  icons:{
    icon:[
      {url: '/32x32.webp', type: "image/webp", sizes:"32x32", rel:"icon", fetchPriority: "auto"},
      {url: '/192x192.webp', type: "image/webp", sizes:"192x192", rel:"icon", fetchPriority: "auto"},
    ],
    shortcut: {url: '/192x192.webp', type: "image/webp", fetchPriority: "auto"},
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Yia Yia&#039;s Baklava" />
        <meta property="og:description" content="A modern twist on a beloved classic. Our Chocolate Hazelnut Baklava features layers of crispy phyllo, a fragrant blend of cinnamon and walnuts, all enveloped" />
        <meta property="og:url" content="https://yiayiasbaklava.com/" />
        <meta property="og:site_name" content="Yia Yia\&#039;s Baklava" />
        <meta property="og:updated_time" content="2025-06-23T13:45:26+00:00" />
        <meta property="og:image" content="https://yiayiasbaklava.com/wp-content/uploads/2025/02/unnamed.webp" />
        <meta property="og:image:secure_url" content="https://yiayiasbaklava.com/wp-content/uploads/2025/02/unnamed.webp" />
        <meta property="og:image:width" content="601" />
        <meta property="og:image:height" content="613" />
        <meta property="og:image:alt" content="Home" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="article:published_time" content="2023-12-08T12:39:44+00:00" />
        <meta property="article:modified_time" content="2025-06-23T13:45:26+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Yia Yia&#039;s Baklava" />
        <meta name="twitter:description" content="A modern twist on a beloved classic. Our Chocolate Hazelnut Baklava features layers of crispy phyllo, a fragrant blend of cinnamon and walnuts, all enveloped" />
        <meta name="twitter:image" content="https://yiayiasbaklava.com/wp-content/uploads/2025/02/unnamed.webp" />
      </head>
      <body className={`${sofia.className} antialiased scroll-smooth scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-sky-500 scrollbar-corner-sky-800 scrollbar-track-sky-200`}>
        <Providers>
          <Nav />
          {children}
          <Analytics />
          <Script id="browser-update" dangerouslySetInnerHTML={{ __html: `var $buoop = {required:{e:-4,f:-3,o:-3,s:-1,c:-3},insecure:true,api:2025.06 }; function $buo_f(){ var e = document.createElement("script"); e.src = "https://browser-update.org/update.min.js"; document.body.appendChild(e); }; try {document.addEventListener("DOMContentLoaded", $buo_f,false)} catch(e){window.attachEvent("onload", $buo_f)}` }} />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
