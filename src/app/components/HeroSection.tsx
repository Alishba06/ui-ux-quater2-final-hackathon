const Hero = () => {
    return (
      <div className="flex flex-col md:flex-row w-full h-auto mt-5 justify-center items-center mx-20">
       
        <div className="w-full md:w-[1100px]   md:h-[500px]  gap-10 bg-[#2A254B] text-white relative ml-[5%] mt-[2%] flex flex-col md:flex-row items-center justify-between  space-y-4 md:space-y-0">
          
          <div>
          <div className="flex flex-col items-start space-y-4 ml-[5%] ">
            <p className="text-lg font-semibold">
              The furniture brand for the future,<br /> with timeless designs
            </p>
            <button className="text-white bg-[#f9f9f9]  bg-opacity-15 font-medium px-4 py-2 rounded hover:bg-gray-300">
              View collection
            </button>
            </div> 


            <div>
            <p className="mt-36 ml-[5%]">
              A new era in eco friendly furniture with Avelon, the French luxury retail brand
              with nice fonts, tasteful colors and a beautiful way to display things digitally 
              using modern web technologies.
            </p>
            </div>
            </div>
  
          <div className="flex justify-end items-center w-full">
            <img
              src="/RightImage.png"
              alt="chair"
              className="w-full max-w-[445px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero