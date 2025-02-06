/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Swal from "sweetalert2";
import ReviewsAndRatings from "@/app/components/ReviewsAndRatings";
import Wishlist from "@/app/components/wishlist";
import Brand from "@/app/home2/brand";

interface Chair {
  _id: string;
  name: string;
  title: string;
  imageUrl: string;
  price: number;
}

const ChairsProduct = () => {
  const [chairs, setChairs] = useState<Chair[]>([]);

  useEffect(() => {
    const fetchChairs = async () => {
      try {
        const query =
          '*[_type == "chairs"]{_id, name, title, price, "imageUrl": image.asset->url}';
        const result = await client.fetch<Chair[]>(query);
        setChairs(result);
      } catch (error) {
        console.error("Error fetching chairs:", error);
      }
    };
    fetchChairs();
  }, []);

  const handleAddToCart = (chair: Chair) => {
    Swal.fire({
      icon: "success",
      title: `${chair.title} added to cart`,
      position: "top-right",
      showConfirmButton: false,
      timer: 1200,
      toast: true,
    });
  };

  return (
    <div>
      <h1 className="text-dark-primary font-clash text-3xl lg:text-4xl font-bold text-[#2A254B] text-center mt-10">
        Stylish Chairs for Ultimate Comfort
      </h1>

      <div className="px-4 md:px-8 lg:px-36 h-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {chairs.map((chair, index) => (
            <div
              key={index}
              className="w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all"
            >
              <Link href={`/categorieDetails/chairs/${chair._id}`}>
                <img
                  src={chair.imageUrl}
                  alt={chair.name}
                  className="w-full h-52 object-cover rounded-t-lg"
                />
              </Link>
              <div className="p-4">
                <p className="text-[#2A254B] font-clash text-lg font-medium mb-2">
                  {chair.title}
                </p>
                <p className="text-[#2A254B] font-satoshi text-md">
                  £{chair.price}
                </p>
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

export default ChairsProduct;




