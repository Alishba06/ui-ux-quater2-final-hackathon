
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";


const CategreNavbar = () =>{
    return(
        <div className="flex justify-between items-center mt-5 mx-20">
        
        <div className="flex gap-5">
          <Link href="/">Category</Link>
          <FaCaretDown className="w-[16px] h-[16px] mt-1 hover:cursor-pointer"/>
          <Link href="/">Product type</Link>
          <FaCaretDown className="w-[16px] h-[16px] mt-1 hover:cursor-pointer"/>
          <Link href="/">Price</Link>
          <FaCaretDown className="w-[16px] h-[16px] mt-1 hover:cursor-pointer"/>
          <Link href="/">Brand</Link>
          <FaCaretDown className="w-[16px] h-[16px] mt-1 hover:cursor-pointer"/>
        </div>
      
    
        <div className="flex items-center gap-2">
          <Link href="/">Sorting by:</Link>
          <Link href="/">Date added</Link>
          <FaCaretDown className="w-[16px] h-[16px] mt-1 hover:cursor-pointer"/>
        </div>
      </div>
      
       
    )
}

export default CategreNavbar