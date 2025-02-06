/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchAllProducts } from "@/lib/allproduct"; 
import { urlFor } from "@/sanity/lib/image";
import ReviewsAndRatings from "./ReviewsAndRatings";
import Wishlist from "./wishlist";

interface Product { 
  _id: string;
  name: string;
  price: number;
  image: string
}

const Cards = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts);
    };

    getProducts();
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-36 h-full">
      <h1 className="text-[#2A254B] font-clash text-2xl md:text-3xl lg:text-4xl font-medium leading-normal mt-16 mb-8">
        New Products
      </h1>

      <div className="overflow-hidden mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="w-full bg-white p-4 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Link href={`/products/${product._id}`} passHref>
                <div className="relative">
                  <img
                    src={urlFor(product.image)}
                    alt={product.name}
                    className="w-full h-[230px] object-cover rounded-lg transition-all duration-300"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-20 rounded-lg transition-all duration-300"></div>
                </div>
                <div className="mt-4">
                  <p className="text-[#2A254B] font-clash text-lg font-semibold truncate">{product.name}</p>
                  <p className="text-[#2A254B] font-satoshi text-md font-normal mt-2">£{product.price}</p> 
                  <ReviewsAndRatings /> 
                  <Wishlist productId={product._id} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <Link href="/viewall">
          <button className="text-white bg-[#2A254B] font-medium px-6 py-3 rounded-lg hover:bg-[#2a1c3c] transition-all duration-300">
            View Collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;


// /* eslint-disable @next/next/no-img-element */
// 'use client'

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { fetchAllProducts } from "@/lib/allproduct"; 
// import { urlFor } from "@/sanity/lib/image";
// import { addtoCart } from "../actions/actions";
// import Swal from "sweetalert2";


// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string
// }


// const Cards = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       const allProducts = await fetchAllProducts();
//       setProducts(allProducts);
//     };

//     getProducts();
//   }, []);

   

//   return (
//     <div className="px-4 md:px-8 lg:px-36 h-full">
//       <h1 className="text-[#2A254B] font-clash text-2xl md:text-3xl lg:text-4xl font-normal leading-normal mt-16">
//         New Product
//       </h1>

//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] lg:gap-6 mt-6">
//         {products.map((product) => (
//           <div key={product._id} className="w-full">
          
//           <Link href={`/products/${product._id}`}>
     
//         <img
//           src={urlFor(product.image)}
//           alt={product.name}
//           className="w-full h-[170px] md:h-[250px] lg:h-[350px] object-cover rounded-sm"
//         />
//         <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
//           {product.name}
//         </p>
//         <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
//           £{product.price}
//         </p>
     
//     </Link>

//    </div>
//         ))}
//       </div>

//       <div className="flex justify-center items-center mt-10">
//         <Link href="/viewall">
//           <button className="text-black bg-[#F9F9F9] bg-opacity-15 font-medium px-4 py-2 rounded hover:bg-gray-300">
//             View Collection
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Cards;



