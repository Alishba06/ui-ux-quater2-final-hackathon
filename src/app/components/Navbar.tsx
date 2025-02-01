
"use client";
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
import SearchBarHomePage from "../searchBar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";




function Navbar() {
  
  return (
    <div>
      <div className="py-4  px-3 md:px-6 flex  lg:flex-row items-center lg:justify-between">
        <div>
          <CiSearch className="md:block  hidden"/>
        </div>
        <SearchBarHomePage categories={[]}/>

        <div className="w-full mt-4 lg:mt-0 flex flex-wrap items-center  md:justify-center space-x-4 text-sm text-gray-600">
          <div className="text-xl  text-[#22202E] font-clash text-[24px] font-normal leading-normal">
            Avion
          </div>
        </div>
        <CiSearch className="md:hidden  block  mr-2  h-[25px] w-[25px]  sm:mr-4"/>
       
        <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline"  className="md:hidden border-none  block"><RiMenuFill className="h-[30px]  w-[30px]"/> </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
     
        </SheetHeader>
         <div className="flex flex-col justify-center gap-5 mt-10">
         <Link href="/">Home</Link>
         <Link href="/category/ceramic">Ceramics</Link>
         <Link href='/category/tables'>Tables</Link>
         <Link href='/category/chairs'>Chairs</Link>
         <Link href='/category/crockery'>Crockery</Link>
         <Link href='/category/tableware'>Tableware</Link>
         <Link href='/category/cutlery'>Cutlery</Link>
         <Link href='/category/plantponts'>Plant Pots</Link>

        </div>
       
      </SheetContent>
    </Sheet>
         
         {/* <div className="flex gap-5 mr-10 text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal  ">
         <Link href='/'>About</Link>
         <Link href='/'>Contact</Link>
         <Link href='/'>Blog</Link>
         </div> */}
       <div className="flex items-center space-x-4 ml-auto"> {/* Space between icons */}
     <Link href={'/cart'}><PiShoppingCartLight className="w-[16px] h-[16px] md:block hidden" /></Link>  
       <FaRegCircleUser className="text-[16px] h-[16px] md:block hidden" />
       </div>

      <div className="flex items-center space-x-4 ml-4 "> 
       <SignedOut>
       <SignInButton>
       <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 w-32 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        Sign In
      </button>
      </SignInButton>
      </SignedOut>
      <SignedIn>
      <UserButton />
      </SignedIn>
       </div>
      </div>


      {/* ..... */}
      <hr />

      <div className="mt-4 md:block hidden">
        <ul className="flex justify-center gap-[44px]">
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
            <Link href="/category/ceramic">Ceramics</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
           <Link href='/category/tables'>Tables</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
            <Link href='/category/chairs'>Chairs</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
           <Link href='/category/crockery'>Crockery</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
            <Link href='/category/tableware'>Tableware</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
           <Link href='/category/cutlery'>Cutlery</Link>
          </li>
          <li className="text-[#726E8D] font-satoshi text-[16px] font-normal leading-normal">
           <Link href='/category/plantponts'>Plant Pots</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
