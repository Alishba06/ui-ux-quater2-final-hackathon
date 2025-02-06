/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const CardTwo = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-[#2A254B] font-clash text-2xl md:text-3xl font-semibold mt-10 md:mx-36 text-center">
        Our Popular Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 md:mx-36">
        <div className="w-full p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
       src="Sofa.png"
       alt="The Popular suede sofa"
      className="w-[300px] md:w-[400px] h-[200px] md:h-[300px] object-cover rounded-md transition-all ease-in-out duration-300"
     />

        </div>
        <div className="w-full p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img
            src="DanyChier.png"
            alt="The Dandy chair"
            className="w-full h-[200px] md:h-[300px] object-cover rounded-md transition-all ease-in-out duration-300"
          />
        </div>
        <div className="w-full p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img
            src="DanyChir2.png"
            alt="The Dandy chair"
            className="w-full h-[200px] md:h-[300px] object-cover rounded-md transition-all ease-in-out duration-300"
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        {/* Add a button or link if needed */}
        <Link href="/products" className="bg-[#2A254B] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#1e1b3a] transition-all ease-in-out duration-300">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default CardTwo;
