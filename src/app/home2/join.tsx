import Image from "next/image";

const Join = () => {
  return (
    <div className="relative">
      <Image src="/join.png" alt="joinimage" width={1440} height={360} className="w-full h-auto object-cover" />
      
      {/* Responsive Form Section */}
      <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <input
            type="text"
            placeholder="your@email.com"
            className="h-12 w-full sm:w-2/3 px-4 text-sm border-2 border-gray-300 rounded-md sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
          />
          <button className="w-full sm:w-1/3 bg-[#2A254B] text-white text-sm h-12 flex justify-center items-center rounded-md sm:rounded-r-md hover:bg-[#1e1b3a] transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
