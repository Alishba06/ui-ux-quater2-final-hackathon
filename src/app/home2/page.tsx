import Image from "next/image"
import Brand from "./brand"
import CardTwo from "./cardsTwo"
import Idea from "./idea"
import Join from "./join"

const hometwo = () =>{
    return (
        <div>
           <div>
           <Image src={'/HeroBlock.png'} 
           alt="heroimage" width={1440} 
           height={704} className="flex mt-4"/>
           </div>
           <Brand />
           <CardTwo />
           <Idea />
           <Join />
        </div>
    )
}

export default hometwo