/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import ReviewsAndRatings from "@/app/components/ReviewsAndRatings";
import Wishlist from "@/app/components/wishlist";
import Brand from "@/app/home2/brand";

interface Tableware {
  _id: string;
  name: string;
  title: string;
  imageUrl: string;
  price: number;
}

const TablewareProduct = () => {
  const [tablewares, setTablewares] = useState<Tableware[]>([]);

  useEffect(() => {
    const fetchTablewares = async () => {
      try {
        const query =
          '*[_type == "tablewares"]{_id, name, title, price, "imageUrl": image.asset->url}';
        const result = await client.fetch<Tableware[]>(query);
        setTablewares(result);
      } catch (error) {
        console.error("Error fetching tablewares:", error);
      }
    };

    fetchTablewares();
  }, []);

  return (
    <div className="bg-[#F9F9F9] min-h-screen py-10">
      <h1 className="text-dark-primary font-clash text-4xl font-bold text-[#2A254B] text-center mt-10">
        Elegant Tablewares for Your Home
      </h1>

      <div className="px-4 md:px-8 lg:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          {tablewares.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <Link href={`/categorieDetails/tablewares/${item._id}`}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
              </Link>
              <div className="p-4">
                <p className="text-[#2A254B] font-clash text-xl font-semibold mb-2">
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
            View Collection
          </button>
        </div>
      </div>
      <Brand/>
    </div>
  );
};

export default TablewareProduct;

