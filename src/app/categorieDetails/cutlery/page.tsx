import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface CutleryProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
}

async function fetchAllCutlery(): Promise<CutleryProduct[]> {
  const query = `*[_type == "cutlery"] {
    _id,
    name,
    price,
    image {
      asset -> {
        url
      }
    }
  }`;

  const results = await client.fetch<CutleryProduct[]>(query);
  return results;
}

async function fetchCutleryProduct(id: string): Promise<CutleryProduct | null> {
  const query = `*[_type == "cutlery" && _id == $id][0] {  
    _id,
    name,
    price,
    description,
    image {
      asset -> {
        url
      }
    }
  }`;

  const result = await client.fetch<CutleryProduct | null>(query, { id });
  return result;
}

export default async function CutleryPage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  const allCutlery = await fetchAllCutlery();
  const selectedProduct = searchParams.id
    ? await fetchCutleryProduct(searchParams.id)
    : null;

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Display Selected Product Details */}
      {/* {selectedProduct && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="w-full">
            <img
              src={selectedProduct.image.asset.url}
              alt={selectedProduct.name}
              className="w-full h-[350px] object-cover rounded-sm"
            />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold">{selectedProduct.name}</h1>
            <p className="text-xl font-semibold text-gray-700 mt-4">
              £{selectedProduct.price}
            </p>
            <p className="text-md text-gray-600 mt-6">
              {selectedProduct.description}
            </p>
          </div>
        </div>
      )} */}

      {/* Display All Cutlery Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Cutlery Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {allCutlery.map((product) => (
            <div key={product._id} className="w-full">
             
                <Image
                 
                  src={product.image.asset.url}
                  alt={product.name}
                  className="w-full h-[250px] object-cover rounded-sm"
                />
                 <Link
                  href={`/categorieDetails/cutlery/${product._id}`}
                 
                >
              <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
               
                  {product.name}
                
              </p>
              <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
                £{product.price}
              </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}