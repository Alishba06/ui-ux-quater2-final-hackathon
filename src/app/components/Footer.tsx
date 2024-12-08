import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
    return (
      <div>
        <div className="w-full bg-[#2A254B] text-white py-10 px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 ">
  
           
            <div>
              <h3 className="font-satoshi text-lg mb-4">Menu</h3>
              <ul className="space-y-2">
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
              </ul>
            </div>
  
           
            <div>
              <h3 className="font-satoshi text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
                <li>Crockery</li>
              </ul>
            </div>
  
          
            <div>
              <h3 className="font-satoshi text-lg mb-4">Our Company</h3>
              <ul className="space-y-2">
                <li>About us</li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
              </ul>
            </div>
  
    
        <div>
        <h3 className="font-satoshi text-lg mb-4 ml-1">Join our mailing list</h3> 
        <div>
        <div className="w-[300px] h-[50px] flex items-center bg-[#3D3548]  mt-6 mr-10">
       <input
      type="text"
      placeholder="your@email.com"
      className="h-full flex-1 bg-transparent text-white px-4 placeholder-gray-300 outline-none"
    />
    <button className=" w-[400px] h-[50px] text-sm bg-white text-[#2A254B] font-medium ">
      Sign up
    </button>
  </div>
</div>
            </div>
          </div>

          <div className="mt-10 border-t border-[#4E4D93]">
  <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-6">
    <p className="text-lg">Copyright © 2024 Avion LTD</p>
    <div className="flex space-x-4">
      <a href="#" className="hover:underline">
        <FaLinkedin className="w-[25px] h-[25px]" />
      </a>
      <a href="#" className="hover:underline">
        <FaFacebookSquare className="w-[25px] h-[25px]" />
      </a>
      <a href="#" className="hover:underline">
        <FaSkype className="w-[25px] h-[25px]" />
      </a>
      <a href="#" className="hover:underline">
        <IoLogoTwitter className="w-[25px] h-[25px]" />
      </a>
      <a href="#" className="hover:underline">
        <FaInstagram className="w-[25px] h-[25px]" />
      </a>
      <a href="#" className="hover:underline">
        <FaPinterest className="w-[25px] h-[25px]" />
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
    );
  };
  
  export default Footer;
  