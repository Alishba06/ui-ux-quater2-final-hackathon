import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { RiMenuFill } from "react-icons/ri";

import {
  Sheet,
 
  SheetContent,
 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";



function Navbar() {
  return (
    <div>
      <div className="py-4  px-3 md:px-6 flex  lg:flex-row items-center lg:justify-between">
        <div>
          <CiSearch className="md:block  hidden"/>
        </div>


        <div className="w-full mt-4 lg:mt-0 flex flex-wrap items-center  md:justify-center space-x-4 text-sm text-gray-600">
          <div className="text-xl  text-[#22202E] font-clash text-[24px] font-normal leading-normal">
            Avion
          </div>
        </div>

        <CiSearch className="md:hidden  block  mr-2  h-[25px] w-[25px]  sm:mr-4"/>
        <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline"  className="md:hidden border-none  block"><RiMenuFill className="h-[30px] w-[30px]"/> </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
     
        </SheetHeader>
         <div className="flex flex-col justify-center gap-5 mt-10">
         <Link href="/">Plant pots</Link>
         <Link href="/home2">Ceramics</Link>
         <Link href='/category/tables'>Tables</Link>
         <Link href='/AllProduct'>Chairs</Link>
         <Link href='/category/crockery'>Crockery</Link>
         <Link href=''>Tableware</Link>
         <Link href=''>Cutlery</Link>

        </div>
       
      </SheetContent>
    </Sheet>
         
         {/* <div className="flex gap-5 mr-10 text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal  ">
         <Link href='/'>About</Link>
         <Link href='/'>Contact</Link>
         <Link href='/'>Blog</Link>
         </div> */}
        <div className="flex items-center space-x-3 ml-auto">
          <PiShoppingCartLight className="w-[16px] h-[16px]  md:block  hidden" />
          <FaRegCircleUser className="text-[16px] h-[16px]  md:block  hidden" />
        </div>
      </div>


      {/* ..... */}
      <hr />

      <div className="mt-4 md:block hidden">
        <ul className="flex justify-center gap-[44px]">
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
            <Link href="/">Plant pots</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
            <Link href="/home2">Ceramics</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
           <Link href='/category/tables'>Tables</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
            <Link href='/AllProduct'>Chairs</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
           <Link href='/category/crockery'>Crockery</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
            <Link href='/'>Tableware</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
           <Link href='/'>Cutlery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
