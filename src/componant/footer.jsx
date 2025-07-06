import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPinterestP  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-50">
      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        {/* Navigation links - side by side columns */}
        <div className="flex flex-row lg:flex-col justify-center gap-8 mb-12 max-w-4xl mx-auto">
          {/* First column of navigation links */}
          <div className="flex flex-col lg:flex-row items-start gap-4 mx-auto">
            <Link href="/order" className="text-black hover:text-gray-600 font-medium">
              Order
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 font-medium">
              Our story
            </Link>
            <Link href="/nutrition" className="text-black hover:text-gray-600 font-medium">
              Nutrition & Allergy
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 font-medium">
              Support
            </Link>
            <Link href="/login" className="text-black hover:text-gray-600 font-medium">
              Login
            </Link>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
          <Link href="https://www.facebook.com/yiayiasbaklavallc" target='_blank' className="text-black hover:text-gray-600">
            <FaFacebookF className="sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://www.instagram.com/yiayias_baklava/" target='_blank' className="text-black hover:text-gray-600">
            <FaInstagram className="sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://in.pinterest.com/yiayiasbaklava/" target='_blank' className="text-black hover:text-gray-600">
            <FaPinterestP  className="sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500" />

      {/* Bottom section with pink background */}
      <div className="bg-sky-100 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-black text-sm mb-4">© {new Date().getFullYear()} Yia Yia's Baklava. All rights reserved.</p>
          <div className="flex flex-row justify-center space-x-2.5 md:space-x-8 text-sm">
            <Link href="#" className="text-black hover:text-gray-600">
              Privacy policy
            </Link>
            <Link href="#" className="text-black hover:text-gray-600">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;