import AddProduct from "./addcard"
import BrandProduct from "./Brand"
import ProductCard from "./productcard"
import ProductInformation from "./Productinfor"

const Productone = ()=>{
    return(
       <div>
        <AddProduct />
        <ProductCard />
         <BrandProduct/>
        <ProductInformation />
       </div>
    )
}

export default Productone

