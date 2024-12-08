
const CardTwo = () =>{
   return(
    <div>
           
    <h1 className="text-[#2A254B] font-clash text-2xl font-normal leading-normal mx-36 mt-24">
    Our popular products
    </h1>

    
    <div className="flex mx-36 gap-3 mt-6">
        <div>
            <img src="Sofa.png" alt="chair" className="w-[670px] h-[300px]"/>
            <p className="text-[#2A254B] font-clash text-[20px] font-normal leading-[140%] mt-3 mb-3">The Poplar suede sofa</p>
            <p className="text-[#2A254B] font-satoshi text-[18px] font-normal leading-[150%]">£980</p>
        </div>
        <div>
            <img src="DanyChier.png" alt="chair" className="w-[350px] h-[300px]"/>
            <p className="text-[#2A254B] font-clash text-[20px] font-normal leading-[140%] mt-3 mb-3">The Dandy chair</p>
            <p className="text-[#2A254B] font-satoshi text-[18px] font-normal leading-[150%]">£250</p>
        </div>
        <div>
            <img src="DanyChir2.png" alt="chair" className="w-[350px] h-[300px]" />
            <p className="text-[#2A254B] font-clash text-[20px] font-normal leading-[140%] mt-3 mb-3">The Dandy chair</p>
            <p className="text-[#2A254B] font-satoshi text-[18px] font-normal leading-[150%]">£250</p>
        </div>

    </div>
        <div className="flex justify-center items-center mt-10">
        <button className="text-black bg-[#F9F9F9]  bg-opacity-15 font-medium px-4 py-2 rounded hover:bg-gray-300">
        View collection
        </button>
        </div>
</div>
   )
}

export default CardTwo