/* eslint-disable @next/next/no-img-element */
      
const Idea = () => {
    return (
     <div className="flex  gap-5 mt-10 mb-10 mx-40">
      <div className="w-[500px]  flex flex-col h-[400px] md:flex-row bg-[#2A254B]">

        <div className="  p-10 flex flex-col justify-center">
          <h1 className="text-white font-clash text-2xl md:text-3xl font-medium mb-4">
          It started with a small idea
          </h1>
          <p className="text-white font-satoshi text-base leading-relaxed mb-6">
          A global brand with local beginnings, our story begain in a small studio in South London in early 2014
          </p>
         
          <button className="bg-gray-300 border w-[150px] h-[50px] rounded-sm  text-black left-[84px] mt-20">
          View collection
        </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <img
            src="/sofaBlock.png"
            alt="Sofa and Decoration"
            className="w-[550px] h-[400px] object-cover"
          />
        </div>
      </div>
    );
  };
  

export default Idea