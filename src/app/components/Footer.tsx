
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrPinterest } from "react-icons/gr";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] md:h-[380px] mx-auto bg-[#2A254B] text-white md:pt-10 pt-8 gap-5">
      <div className="flex flex-col md:flex-row md:justify-center max-w-[1280px] mx-auto px-5">
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6  md:pl-0  md:mb-0 mb-5">
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 satoshi text-[14px]">
              <li>
                <Link
                  href="/crockery"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Crockery
                </Link>
              </li>
              <li>
                <Link
                  href="/furniture"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/homeware"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Homeware
                </Link>
              </li>
              <li>
                <Link
                  href="/plant-pots"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Plant pots
                </Link>
              </li>
              <li>
                <Link
                  href="/chairs"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Chairs
                </Link>
              </li>
              <li>
                <Link
                  href="/crockery"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Crockery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 satoshi text-[14px]">
              <li>
                <Link
                  href="/new-arrivals"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  New arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/best-sellers"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Best sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/recently-viewed"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Recently viewed
                </Link>
              </li>
              <li>
                <Link
                  href="/popular-this-week"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Popular this week
                </Link>
              </li>
              <li>
                <Link
                  href="/all-products"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  All products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Our company</h3>
            <ul className="space-y-2 satoshi text-[14px]">
              <li>
                <Link
                  href="/about-us"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/vacancies"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                >
                  Vacancies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns-policy"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                >
                  Returns policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="font-semibold mb-3">Join our mailing list</h3>

          <div className="flex items-center  h-[56px] w-full">
            <input
              type="email"
              placeholder="your@email.com"
              className="md:w-[509px] h-[56px] outline-none bg-[#FFFFFF26] pb-1 w-[70%] pl-4 "
            />
            <button className="text-[#2A254B] w-[30%] md:w-[118px] h-[56px]  bg-[#FFFFFF] ">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 py-5 md:pt-10 flex justify-center md:justify-between items-center max-w-[1280px] mx-auto text-center px-5 xl:px-5 ">
        <p className="text-sm satoshi justify-self-center md:pr-5">
          &copy; Copyright 2022 Avion LTD
        </p>
        <div className="md:flex justify-center space-x-4 text-2xl hidden">
          <FaLinkedin className="hover:text-blue-700 transition-all duration-300 cursor-pointer" />
          <FaFacebookSquare className="hover:text-blue-600 transition-all duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 transition-all duration-300 cursor-pointer" />
          <FaSkype className="hover:text-[#00aff0] transition-all duration-300 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 transition-all duration-300 cursor-pointer" />
          <GrPinterest className="hover:text-red-600 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;






// import { FaLinkedin } from "react-icons/fa6";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaSkype } from "react-icons/fa";
// import { IoLogoTwitter } from "react-icons/io";
// import { FaPinterest } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div>
//       <div className="w-full bg-[#2A254B] text-white py-10 px-6 md:px-16 h-full">
//   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

//     <div className="flex gap-10 justify-center md:justify-start">
//       <div>
//         <h3 className="font-satoshi text-lg pb-4 text-center md:text-left">Menu</h3>
//         <ul className="space-y-2 text-center md:text-left">
//           <li>New arrivals</li>
//           <li>Best sellers</li>
//           <li>Recently viewed</li>
//           <li>Popular this week</li>
//           <li>All products</li>
//         </ul>
//       </div>

//       <div>
//         <h3 className="font-satoshi text-lg pb-4 text-center md:text-left">Categories</h3>
//         <ul className="space-y-2 text-center md:text-left">
//           <li>Crockery</li>
//           <li>Furniture</li>
//           <li>Homeware</li>
//           <li>Plant pots</li>
//           <li>Chairs</li>
//           <li>Crockery</li>
//         </ul>
//       </div>
//     </div>

//     <div>
//       <h3 className="font-satoshi text-lg mb-4 text-center md:text-left">Our Company</h3>
//       <ul className="space-y-2 text-center md:text-left">
//         <li>About us</li>
//         <li>Vacancies</li>
//         <li>Contact us</li>
//         <li>Privacy</li>
//         <li>Returns policy</li>
//       </ul>
//     </div>

//     <div className="flex flex-col ">
//       <h3 className="font-satoshi text-lg mb-4 ">
//         Join our mailing list
//       </h3>
//       <div className="w-[300px] md:w-[400px] h-[50px] flex items-center bg-[#3D3548]  overflow-hidden">
//         <input
//           type="text"
//           placeholder="your@email.com"
//           className="h-full flex-1 bg-transparent text-white px-4 placeholder-gray-300 outline-none"
//         />
//         <button className="w-[120px] h-full text-sm bg-white text-[#2A254B] font-medium hover:bg-gray-200 transition-all">
//           Sign up
//         </button>
//       </div>
//     </div>
//   </div>

//   <div className="mt-10 border-t border-[#4E4D93]">
//     <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-6">
//       <p className="text-lg text-center md:text-left">Copyright 2024 Avion LTD</p>
//       <div className="flex space-x-4 mt-4 md:mt-0">
//         <a href="#" className="hover:underline">
//           <FaLinkedin className="w-[25px] h-[25px]" />
//         </a>
//         <a href="#" className="hover:underline">
//           <FaFacebookSquare className="w-[25px] h-[25px]" />
//         </a>
//         <a href="#" className="hover:underline">
//           <FaSkype className="w-[25px] h-[25px]" />
//         </a>
//         <a href="#" className="hover:underline">
//           <IoLogoTwitter className="w-[25px] h-[25px]" />
//         </a>
//         <a href="#" className="hover:underline">
//           <FaInstagram className="w-[25px] h-[25px]" />
//         </a>
//         <a href="#" className="hover:underline">
//           <FaPinterest className="w-[25px] h-[25px]" />
//         </a>
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//   );
// };

// export default Footer;
