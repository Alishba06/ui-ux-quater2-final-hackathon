/* eslint-disable @next/next/no-img-element */


const Hero = () => {
  return (
    
    <div className="flex justify-center  items-center" >
    <div className="flex  overflow-x-hidden flex-col md:flex-row w-full h-auto mt-5  justify-center items-center md:mx-10   ">
     
      <div className="w-full h-full py-10 md:py-0 px-6 md:px-0  gap-10 bg-[#2A254B] text-white relative md:ml-[5%] mt-[2%] flex flex-col md:flex-row items-center justify-between  space-y-4 md:space-y-0">
        
        <div>
        <div className="flex flex-col items-start space-y-4 ml-[5%] ">
          <p className="text-lg font-semibold">
            The furniture brand for the future<br /> with timeless designs
          </p>
          <button className="text-white bg-[#f9f9f9]  bg-opacity-15 font-medium px-4 py-2 rounded hover:bg-gray-300 md:block hidden">
            View collection
          </button>
          </div> 


          <div>
          <p className=" mt-20 md:mt-36 ml-[5%]">
            A new era in eco friendly furniture with Avelon, the French luxury retail brand
            with nice fonts tasteful colors and a beautiful way to display things digitally 
            using modern web technologies.
          </p>
          </div>
           <div className="flex justify-center items-center  md:hidden">
           <button className="text-white bg-[#f9f9f9] w-[238px] mt-5 bg-opacity-15 font-medium px-4 py-2  ">
            View collection
          </button>
           </div>
          </div>

        <div className="md:flex justify-end items-center w-full h-full hidden">
          <img
            src="/RightImage.png"
            alt="chair"
            className="w-full  h-full object-contain"
          />
        </div>
      </div>
    </div>
    </div>

  );
};

export default Hero 