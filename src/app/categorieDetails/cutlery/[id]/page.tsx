import { client } from "@/sanity/lib/client";
import Link from "next/link"; // Import Link for navigation

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

async function fetchRelatedCutlery(currentId: string): Promise<CutleryProduct[]> {
  const query = `*[_type == "cutlery" && _id != $currentId]{
    _id,
    name,
    price,
    image {
      asset -> {
        url
      }
    }
  }`;

  const results = await client.fetch<CutleryProduct[]>(query, { currentId });
  return results;
}

async function CutleryProductPage({ params }: { params: { id: string } }) {
  const cutleryProduct = await fetchCutleryProduct(params.id);

  if (!cutleryProduct) {
    return <div>Cutlery product not found</div>;
  }

  const relatedCutlery = await fetchRelatedCutlery(cutleryProduct._id);

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Cutlery Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <img
            src={cutleryProduct.image.asset.url}
            alt={cutleryProduct.name}
            className="w-full h-[350px] object-cover rounded-sm"
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold">{cutleryProduct.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">£{cutleryProduct.price}</p>
          <p className="text-md text-gray-600 mt-6">{cutleryProduct.description}</p>
        </div>
      </div>

      {/* Related Cutlery Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Cutlery Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedCutlery.length > 0 ? (
            relatedCutlery.slice(0, 4).map((related) => (
              <div key={related._id} className="w-full">
                <Link href={`/categorieDetails/cutlery/${related._id}`} passHref>
                  <img
                    src={related.image.asset.url}
                    alt={related.name}
                    className="w-full h-[250px] object-cover rounded-sm"
                  />
                </Link>
                <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                  <Link href={`/cutlery/${related._id}`} passHref>
                    {related.name}
                  </Link>
                </p>
                <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
                  £{related.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-md text-gray-600">No related cutlery found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CutleryProductPage;
