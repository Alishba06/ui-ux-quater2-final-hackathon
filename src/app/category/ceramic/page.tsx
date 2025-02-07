/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import ReviewsAndRatings from "@/app/components/ReviewsAndRatings";
import Wishlist from "@/app/components/wishlist";
import Brand from "@/app/home2/brand";

interface Ceramic {
  _id: string;
  name: string;
  title: string;
  imageUrl: string;
  price: number;
}

const CeramicProduct = () => {
  const [ceramicItems, setCeramicItems] = useState<Ceramic[]>([]);

  useEffect(() => {
    const fetchCeramicItems = async () => {
      try {
        const query =
          '*[_type == "ceramic"]{_id, name, title, price, "imageUrl": image.asset->url}';
        const result = await client.fetch<Ceramic[]>(query);
        setCeramicItems(result);
      } catch (error) {
        console.error("Error fetching ceramic items:", error);
      }
    };

    fetchCeramicItems();
  }, []);


  return (
    <div>
      <h1 className="text-dark-primary font-clash text-2xl lg:text-4xl font-semibold text-center mt-10 text-[#2A254B]">
        Elegant Ceramic Collection
      </h1>

      <div className="px-4 md:px-8 lg:px-36 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {ceramicItems.map((item, index) => (
            <div
            key={index}
            className="w-full bg-[#f9f9f9] shadow-md rounded-2xl overflow-hidden hover:shadow-lg transform hover:-translate-y-2 transition-all"
          >
            <Link href={`/categorieDetails/ceramics/${item._id}`}>
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-[#2A254B] font-bold text-lg">{item.title}</h2>
              <p className="text-[#2A254B] font-medium mt-1 text-md">£{item.price}</p>
              <ReviewsAndRatings/>
              <Wishlist productId={""}/>
            </div>
          </div>
          
          ))}
        </div>

        <div className="flex justify-center items-center mt-10 mb-10">
          <button className="bg-black text-white font-medium px-8 py-3 rounded-md hover:bg-gray-800">
            View collection
          </button>
        </div>
      </div>
      <Brand/>
    </div>
  );
};

export default CeramicProduct;


