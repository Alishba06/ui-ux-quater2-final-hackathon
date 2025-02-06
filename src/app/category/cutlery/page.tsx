/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import ReviewsAndRatings from "@/app/components/ReviewsAndRatings";
import Wishlist from "@/app/components/wishlist";
import Brand from "@/app/home2/brand";

interface Cutlery {
  _id: string;
  name: string;
  title: string;
  imageUrl: string;
  price: number;
}

const CutleryProduct = () => {
  const [cutlery, setCutlery] = useState<Cutlery[]>([]);

  useEffect(() => {
    const fetchCutlery = async () => {
      try {
        const query =
          '*[_type == "cutlery"]{_id, name, title, price, "imageUrl": image.asset->url}';
        const result = await client.fetch<Cutlery[]>(query);
        setCutlery(result);
      } catch (error) {
        console.error("Error fetching cutlery:", error);
      }
    };

    fetchCutlery();
  }, []);

  return (
    <div className="bg-[#F9F9F9] min-h-screen py-10">
      <h1 className="text-dark-primary font-clash text-4xl font-bold text-[#2A254B] text-center mt-10">
        Elegant Cutlery for Every Occasion
      </h1>

      <div className="px-4 md:px-8 lg:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          {cutlery.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <Link href={`/categorieDetails/cutlery/${item._id}`}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-[#2A254B] font-clash text-xl font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-[#6B7280] font-satoshi text-md">
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
            View Collection
          </button>
        </div>
      </div>
      <Brand/>
    </div>
  );
};

export default CutleryProduct;

