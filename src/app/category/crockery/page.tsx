/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import ReviewsAndRatings from "@/app/components/ReviewsAndRatings";
import Wishlist from "@/app/components/wishlist";
import Brand from "@/app/home2/brand";

interface Crockery {
  _id: string;
  name: string;
  title: string;
  imageUrl: string;
  price: number;
}

const CrockeryProduct = () => {
  const [crockery, setCrockery] = useState<Crockery[]>([]);

  useEffect(() => {
    const fetchCrockery = async () => {
      try {
        const query =
          '*[_type == "crockery"]{_id ,name, title, price, "imageUrl": image.asset->url}';
        const result = await client.fetch<Crockery[]>(query);
        setCrockery(result);
      } catch (error) {
        console.error("Error fetching crockery:", error);
      }
    };

    fetchCrockery();
  }, []);

  return (
    <div className="bg-[#F9F9F9] min-h-screen py-10">
      <h1 className="text-dark-primary font-clash text-4xl font-bold text-[#2A254B] text-center mt-10">
        Elegant Crockery for Your Table
      </h1>

      <div className="px-4 md:px-8 lg:px-36 h-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {crockery.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <Link href={`/categorieDetails/crockerys/${item._id}`}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
              </Link>
              <div className="p-4">
                <p className="text-[#2A254B] font-clash text-lg font-semibold mb-1">
                  {item.title}
                </p>
                <p className="text-[#2A254B] font-satoshi text-md">
                  £{item.price}
                </p>
                <ReviewsAndRatings/>
                <Wishlist productId={""}/>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          <button className="bg-black text-white font-medium px-8 py-3 rounded-md hover:bg-gray-800">
            View collection
          </button>
        </div>
      </div>
      <Brand/>
    </div>
  );
};

export default CrockeryProduct;

