import localfont from "next/font/local"
import Script from 'next/script'
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


export const metadata = {
  title: {
    template: "%s | Yia Yis's Baklava",
    default: "Yia Yis's Baklava",
  },
  description: "A modern twist on a beloved classic. Our Chocolate Hazelnut Baklava features layers of crispy phyllo, a fragrant blend of cinnamon and walnuts, all enveloped",
  canonical: "https://yiayiasbaklava.com/"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${helvetica.className} antialiased scroll-smooth`}>
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
