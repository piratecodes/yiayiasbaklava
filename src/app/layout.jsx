import localfont from "next/font/local"
import "@/style/globals.css";
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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
