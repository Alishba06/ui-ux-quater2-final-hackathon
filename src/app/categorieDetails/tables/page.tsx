/* eslint-disable @next/next/no-img-element */
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface TableProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
}

async function fetchAllTables(): Promise<TableProduct[]> {
  const query = `*[_type == "tables"] {
    _id,
    name,
    price,
    image {
      asset -> {
        url
      }
    }
  }`;

  const results = await client.fetch<TableProduct[]>(query);
  return results;
}

async function fetchTableProduct(id: string): Promise<TableProduct | null> {
  const query = `*[_type == "tables" && _id == $id][0] {  
    _id,
    name,
    price,
    description,
    image {
      asset -> {
        url
      }
    },
    dimensions {
      height,
      width,
      depth
    }
  }`;

  const result = await client.fetch<TableProduct | null>(query, { id });
  return result;
}

export default async function TablePage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  const allTables = await fetchAllTables();
  const selectedProduct = searchParams.id
    ? await fetchTableProduct(searchParams.id)
    : null;

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Display Selected Product Details */}
      {selectedProduct && (
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
            <div className="mt-4">
              <p><strong>Dimensions:</strong></p>
              <ul className="text-gray-600">
                <li>Height: {selectedProduct.dimensions.height}</li>
                <li>Width: {selectedProduct.dimensions.width}</li>
                <li>Depth: {selectedProduct.dimensions.depth}</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Display All Table Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Table Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {allTables.map((product) => (
            <div key={product._id} className="w-full">
              <Link
                href={`/categorieDetails/tables?id=${product._id}`}
                passHref
              >
                <img
                  src={product.image.asset.url}
                  alt={product.name}
                  className="w-full h-[250px] object-cover rounded-sm"
                />
              </Link>
              <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                <Link
                  href={`/categorieDetails/tables?id=${product._id}`}
                  passHref
                >
                  {product.name}
                </Link>
              </p>
              <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
                £{product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}