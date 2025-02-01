import AddtocardButton from "@/app/components/addtocardButton";
import { client } from "@/sanity/lib/client";
import Link from "next/link"; // Import Link for navigation

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
            className="w-full h-[350px] object-cover rounded-sm"
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold">{tableProduct.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">
            £{tableProduct.price}
          </p>
          <p className="text-md text-gray-600 mt-6">
            {tableProduct.description}
          </p>
          <AddtocardButton
            product={{
              _id: tableProduct._id,
              name: tableProduct.name,
              price: tableProduct.price,
              description: tableProduct.description,
              image: tableProduct.image,
            }}
          />
          <div className="mt-4">
            <p>
              <strong>Dimensions:</strong>
            </p>
            <ul className="text-gray-600">
              <li>Height: {tableProduct.dimensions.height}</li>
              <li>Width: {tableProduct.dimensions.width}</li>
              <li>Depth: {tableProduct.dimensions.depth}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Tables Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Table Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedTables.length > 0 ? (
            relatedTables.slice(0, 4).map((related) => (
              <div key={related._id} className="w-full">
                <Link href={`/categorieDetails/tables/${related._id}`} passHref>
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-[250px] object-cover rounded-sm"
                  />
                </Link>
                <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                  <Link href={`/tables/${related._id}`} passHref>
                    {related.name}
                  </Link>
                </p>
                <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
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
  );
}

export default TableProductPage;


















