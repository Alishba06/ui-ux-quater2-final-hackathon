
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";


const BrandProduct = () =>{
    return(
      

        <div className="bg-white">
       
        <div className="w-full h-auto bg-white flex items-center justify-center px-4 md:px-8 py-6">
          <p className="text-center text-xl mt-20 md:text-2xl lg:text-3xl font-medium text-[#22202E] font-clash text-[24px]  leading-normal">
            What makes our brand different
          </p>
        </div>
  
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16 lg:px-36 py-10">
         
          <div>
            <TbTruckDelivery className="w-[40px]  h-[40px]  text-[#2A254B]" />
            <p className="text-lg font-semibold mt-4">Next day as standard</p>
            <p className="font-satoshi text-sm md:text-base font-normal leading-[150%] text-[#2A254B] mt-2">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
  
          
          <div>
            <CiCircleCheck className="w-[40px] h-[40px]  text-[#2A254B]" />
            <p className="text-lg font-semibold mt-4">Made by true artisans</p>
            <p className="font-satoshi text-sm md:text-base font-normal leading-[150%] text-[#2A254B] mt-2">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
  
         
          <div>
            <img
              src="Purchase.png"
              alt="purchase"
              className="w-[40px] h-[40px]"
            />
            <p className="text-lg font-semibold mt-4">Unbeatable prices</p>
            <p className="font-satoshi text-sm md:text-base font-normal leading-[150%] text-[#2A254B] mt-2">
              For our materials and quality, you won t find better prices anywhere
            </p>
          </div>
  
         
          <div>
            <LuSprout className="w-[40px] h-[40px] text-[#2A254B]" />
            <p className="text-lg font-semibold mt-4">Recycled packaging</p>
            <p className="font-satoshi text-sm md:text-base font-normal leading-[150%] text-[#2A254B] mt-2">
              We use 100 recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>

    ) 
}

export default BrandProduct