
const AddProduct = () => {
    return (
        <div className="flex items-start gap-28 ">
            {/* Left Side Image */}
             
            <img src="/imageLeft.png" alt="productimage" className="w-[721pxpx] h-[759px] py-10"/>

            {/* Right Side Text */}
            <div className="flex flex-col mt-10">
                <h2 className="text-2xl font-bold mb-4 text-[#2A254B] font-clash-display text-[36px]  leading-normal">The Dandy Chair</h2>
                <p className="text-xl font-semibold mb-4 text-[#12131A] font-satoshi text-24  leading-normal">£250</p>
                <div className="mt-5">
                    <span className="font-bold text-lg text-[#2A254B] font-clash-display text-16  leading-normal">Description</span>
                    <p className="mb-5 clamp mt-4 text-[#505977] font-satoshi text-16 font-normal leading-normal">
                      A timeless design, with premium materials features as <br /> one of our most
                      popular and iconic The dandy chair is <br /> perfect for any stylish
                     living space with beech legs and <br /> lambskin leather upholstery.
                     </p>

                    <ul className="list-disc list-inside text-[#505977] font-satoshi text-16 font-normal leading-normal">
                        <li>Premium material</li>
                        <li>Handmade upholstery</li>
                        <li>Quality timeless classic</li>
                    </ul>
                </div>
                <div className="mt-10 mb-5">
                <p><span className="text-[#2A254B] font-clash-display text-16  leading-normal">Dimensions</span></p>
               </div>
               <div className="flex flex-col gap-5">
            <div className="flex justify-between gap-5 text-[#505977] font-satoshi text-16 font-normal leading-normal">
                <p>Height</p>
                <p>Width</p>
                <p>Depth</p>
              </div>
           <div className="flex justify-between gap-5 text-[#505977] font-satoshi text-16 font-normal leading-normal">
               <p>110cm</p>
               <p>75cm</p>
               <p>50cm</p>
             </div>
             </div>
             
          <div className="w-[300px] h-[40px] lg:flex hidden mt-10 mb-10">
          <input type="text" placeholder="" className="h-full w-full text-center" />
          <span className="w-[150px]  text-sm   bg-[#2A254B] text-white flex justify-center items-center ">
           Add to card
          </span>
          </div> 
            </div>
        </div>
    );
};

export default AddProduct;
