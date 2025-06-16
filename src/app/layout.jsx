import { Poppins } from "next/font/google";
import "@/style/globals.css";
import Nav from "@/componant/nav";
import Footer from "@/componant/footer";

//Redux Provider for state Management
import Providers from "./provider"

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
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
      <body className={`${poppins.className} antialiased scroll-smooth`}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
