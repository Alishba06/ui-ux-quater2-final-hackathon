
/* eslint-disable @next/next/no-img-element */
import AddtocardButton from "@/app/components/addtocardButton";
import Brand from "@/app/home2/brand";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface TableProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
}

async function fetchTableProduct(id: string): Promise<TableProduct | null> {
  const query = `*[_type == "tables" && _id == $id][0] {  
    _id,
    name,
    price,
    description,
    "image": image.asset->url,
    dimensions {
      height,
      width,
      depth
    }
  }`;
  const result = await client.fetch<TableProduct | null>(query, { id });
  return result;
}

async function fetchRelatedTables(currentId: string): Promise<TableProduct[]> {
  const query = `*[_type == "tables" && _id != $currentId]{
    _id,
    name,
    price,
    "image": image.asset->url,
  }`;
  const results = await client.fetch<TableProduct[]>(query, { currentId });
  return results;
}

async function TableProductPage({ params }: { params: { id: string } }) {
  const tableProduct = await fetchTableProduct(params.id);

  if (!tableProduct) {
    return <div>Table product not found</div>;
  }

  const relatedTables = await fetchRelatedTables(tableProduct._id);

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Table Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <img
            src={tableProduct.image}
            alt={tableProduct.name}
            className="w-full h-[350px] object-cover rounded-md"
          />
        </div>
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {tableProduct.name}
          </h1>
          <p className="text-lg md:text-xl font-semibold text-gray-700 mt-4">
            £{tableProduct.price}
          </p>
          <p className="text-sm md:text-md text-gray-600 mt-6">
            {tableProduct.description}
          </p>
          {/* Dimensions and Add to Cart Section */}
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-t pt-4">
            <div>
              <p className="text-lg font-semibold text-gray-800">
                <strong>Dimensions:</strong>
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>Height: {tableProduct.dimensions.height}</li>
                <li>Width: {tableProduct.dimensions.width}</li>
                <li>Depth: {tableProduct.dimensions.depth}</li>
              </ul>
            </div>
            <div className="mt-4 sm:mt-0">
              <AddtocardButton
                product={{
                  _id: tableProduct._id,
                  name: tableProduct.name,
                  price: tableProduct.price,
                  description: tableProduct.description,
                  image: tableProduct.image,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related Tables Section */}
      <div>
      <div className="mt-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Related Table Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedTables.length > 0 ? (
            relatedTables.slice(0, 4).map((related) => (
              <div
                key={related._id}
                className="w-full p-4 border rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <Link href={`/categorieDetails/tables/${related._id}`} passHref>
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-[200px] md:h-[250px] object-cover rounded-sm"
                  />
                </Link>
                <p className="text-gray-800 font-semibold text-md md:text-lg mt-3">
                  <Link href={`/tables/${related._id}`} passHref>
                    {related.name}
                  </Link>
                </p>
                <p className="text-gray-700 text-sm md:text-md">
                  £{related.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-md text-gray-600">No related tables found.</p>
          )}
        </div>
      </div>
    </div>
    <Brand/>
  </div>
  );
}

export default TableProductPage;

















