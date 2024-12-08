const Cards = () => {
    return (
      <div className="px-4 md:px-8 lg:px-36"> 
       
        <h1 className="text-[#2A254B] font-clash text-2xl md:text-3xl lg:text-4xl font-normal leading-normal mt-16">
          New ceramics
        </h1>
  
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"> 
          
          <div>
            <img
              src="nextchair.png"
              alt="chair"
              className="w-full h-[250px] lg:h-[350px] object-cover rounded-sm"
            />
            <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
              The Dandy chair
            </p>
            <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
              £250
            </p>
          </div>
  
          
          <div>
            <img
              src="photo.png"
              alt="chair"
              className="w-full h-[250px] lg:h-[350px] object-cover rounded-sm"
            />
            <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
              The Dandy chair
            </p>
            <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
              £160
            </p>
          </div>
  
        
          <div>
            <img
              src="drink.png"
              alt="chair"
              className="w-full h-[250px] lg:h-[350px] object-cover rounded-sm"
            />
            <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
              The Silky Vase
            </p>
            <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
              £125
            </p>
          </div>
  
         
          <div>
            <img
              src="lanp.png"
              alt="chair"
              className="w-full h-[250px] lg:h-[350px] object-cover rounded-sm"
            />
            <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
              The Lucy Lamp
            </p>
            <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
              £399
            </p>
          </div>
        </div>
  
      
        <div className="flex justify-center items-center mt-10">
          <button className="text-black bg-[#F9F9F9] font-medium px-6 py-2 rounded hover:bg-gray-300">
            View collection
          </button>
        </div>
      </div>
    );
  };
  
  export default Cards;
  