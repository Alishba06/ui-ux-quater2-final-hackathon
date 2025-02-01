/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { Product } from "@/types/products";
import { addtoCart } from "@/app/actions/actions";
import { product } from "@/sanity/schemaTypes/product";
import Swal from "sweetalert2";

interface Ceramic {
  _id: string;  
  name: string;
  title: string;
  imageUrl: string;
  price: number;
}

const CeramicProduct = () => {
  const [ceramicItems, setCeramicItems] = useState<Ceramic[]>([]); // Specify type for ceramic items state

  // Fetch data from Sanity
  useEffect(() => {
    const fetchCeramicItems = async () => {
      try {
        const query =
          '*[_type == "ceramic"]{_id, name, title, price, "imageUrl": image.asset->url}';
        const result = await client.fetch<Ceramic[]>(query); // Specify type for fetch result
        setCeramicItems(result);
      } catch (error) {
        console.error("Error fetching ceramic items:", error);
      }
    };

    fetchCeramicItems();
  }, []);

  const handleAddToCart = (e: React.MouseEvent , product: Product) =>{
    e.preventDefault()
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} Item added successfully`,
      showConfirmButton: false,
      timer: 1000
    })
    addtoCart(product)
   
  }

  return (
    <div>
      <h1 className="text-dark-primary font-clash text-[30px] font-normal leading-[1.4] text-[#2A254B] text-center mt-20">
        Elegant Ceramic Collection
      </h1>

      <div className="px-4 md:px-8 lg:px-36 h-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] lg:gap-6 mt-6">
          {ceramicItems.map((item, index) => (
            <div key={index} className="w-full">
             <Link href={`/categorieDetails/ceramics/${item._id}`}>
              <img
                src={item.imageUrl} 
                alt={item.name} 
                className="w-full h-[170px] md:h-[250px] lg:h-[310px] object-cover"
              />
              </Link>
              <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                {item.title} {/* Use title from fetched data */}
              </p>
              <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
                £{item.price} {/* Use price from fetched data */}
              </p>
              <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
               hover:scla-110 transition-transform duration-300 ease-in-out"
              onClick={(e) => handleAddToCart(e, product)}
              >
             Add To Cart
            </button>
            </div>
            
          ))}
        </div>

        <div className="flex justify-center items-center mt-10 mb-10">
          <button className="text-black bg-[#F9F9F9] font-medium px-6 py-2 rounded hover:bg-gray-300">
            View collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CeramicProduct;
