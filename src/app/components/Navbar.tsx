import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";



function Navbar() {
  return (
     <div>
    <div className="  py-4 px-6 flex flex-col lg:flex-row items-center lg:justify-between">
      
      <div>
      <CiSearch />
      </div>
      
      <div className="w-full mt-4 lg:mt-0 flex flex-wrap justify-center space-x-4 text-sm text-gray-600">
      <div className="text-xl  text-[#22202E] font-clash text-[24px] font-normal leading-normal">Avion</div>
      </div>

    <div className="flex items-center space-x-3 ml-auto">
    <PiShoppingCartLight className="w-[16px] h-[16px]" />
    <FaRegCircleUser className="text-[16px] h-[16px]" />
    </div>
    
    </div>
    <hr />
  
    <div className="mt-4 ">
    <ul className="flex justify-center gap-[44px]">
    <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">Plant pots</li>
    <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">Ceramics</li>
    <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">Tables</li>
    <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">Chairs</li>
    <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">Crockery</li>
    <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">Tableware</li>
    <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">Cutlery</li>
  </ul>
  </div>


    </div>
   
  );
}

export default Navbar;
