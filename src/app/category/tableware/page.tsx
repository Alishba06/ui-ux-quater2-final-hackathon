/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Tableware {
  _id: string; // Optional because it's not fetched from Sanity
  name: string;
  title: string;
  imageUrl: string;
  price: number;
}

const TablewareProduct = () => {
  const [tablewares, setTablewares] = useState<Tableware[]>([]); // Specify type for tablewares state

  // Fetch data from Sanity
  useEffect(() => {
    const fetchTablewares = async () => {
      try {
        const query =
        '*[_type == "tablewares"]{_id, name, title, price, "imageUrl": image.asset->url}';
        const result = await client.fetch<Tableware[]>(query); // Specify type for fetch result
        setTablewares(result);
      } catch (error) {
        console.error("Error fetching tablewares:", error);
      }
    };

    fetchTablewares();
  }, []);

  return (
    <div>
      <h1 className="text-dark-primary font-clash text-[30px] font-normal leading-[1.4] text-[#2A254B] text-center mt-20">
        Elegant Tablewares for Your Home
      </h1>

      <div className="px-4 md:px-8 lg:px-36 h-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] lg:gap-6 mt-6">
          {tablewares.map((item, index) => (
            <div key={index} className="w-full">
              <Link href={`/categorieDetails/tablewares/${item._id}`}>
              <img
                src={item.imageUrl} // Use correct field for image
                alt={item.name} // Use correct field for name
                className="w-full h-[170px] md:h-[250px] lg:h-[310px] object-cover"
              />
              </Link>
              <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                {item.title} {/* Use title from fetched data */}
              </p>
              <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150% ]">
                £{item.price} {/* Use price from fetched data */}
              </p>
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

export default TablewareProduct;
