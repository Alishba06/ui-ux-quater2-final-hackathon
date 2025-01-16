
const ProductInformation = () =>{
    return(
        <div className="w-[1200px] h-[370px]">
        <div className=" bg-white  w-[1100px] h-[364px]  flex flex-col justify-center items-center space-y-4 mt-10">
          <h1 className="w-[571px] text-center text-[#2A254B] font-clash text-[36px] font-normal">
            Join the club and get the benefits
          </h1>
          <div className="text-center">
            <p>Sign up for our newsletter and receive exclusive offers on new</p>
            <p>ranges sales pop up stores and more</p>
          </div>

          <div >
          <div className="w-[300px] h-[40px] lg:flex hidden mt-9">
          <input type="text" placeholder="your@email.com" className="h-full w-full text-center" />
          <span className="w-[150px]  text-sm   bg-[#2A254B] text-white flex justify-center items-center ">
           Sign Up
          </span>
          </div>
          </div>
          
        </div>
      </div>
    )
}

export default ProductInformation