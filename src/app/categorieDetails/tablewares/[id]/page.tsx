import { client } from "@/sanity/lib/client";
import Link from "next/link"; // Import Link for navigation

interface TablewareProduct {
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

async function fetchTablewareProduct(id: string): Promise<TablewareProduct | null> {
  const query = `*[_type == "tablewares" && _id == $id][0] {  
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

  const result = await client.fetch<TablewareProduct | null>(query, { id });
  return result;
}

async function fetchRelatedTablewares(currentId: string): Promise<TablewareProduct[]> {
  const query = `*[_type == "tablewares" && _id != $currentId]{
    _id,
    name,
    price,
    image {
      asset -> {
        url
      }
    }
  }`;

  const results = await client.fetch<TablewareProduct[]>(query, { currentId });
  return results;
}

async function TablewareProductPage({ params }: { params: { id: string } }) {
  const tablewareProduct = await fetchTablewareProduct(params.id);

  if (!tablewareProduct) {
    return <div>Tableware product not found</div>;
  }

  const relatedTablewares = await fetchRelatedTablewares(tablewareProduct._id);

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Tableware Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <img
            src={tablewareProduct.image.asset.url}
            alt={tablewareProduct.name}
            className="w-full h-[350px] object-cover rounded-sm"
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold">{tablewareProduct.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">£{tablewareProduct.price}</p>
          <p className="text-md text-gray-600 mt-6">{tablewareProduct.description}</p>
        </div>
      </div>

      {/* Related Tableware Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Tableware Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedTablewares.length > 0 ? (
            relatedTablewares.slice(0, 4).map((related) => (
              <div key={related._id} className="w-full">
                <Link href={`/categorieDetails/tablewares/${related._id}`} passHref>
                  <img
                    src={related.image.asset.url}
                    alt={related.name}
                    className="w-full h-[250px] object-cover rounded-sm"
                  />
                </Link>
                <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                  <Link href={`/tablewares/${related._id}`} passHref>
                    {related.name}
                  </Link>
                </p>
                <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
                  £{related.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-md text-gray-600">No related tableware products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TablewareProductPage;
