/* eslint-disable @next/next/no-img-element */
import AddtocardButton from "@/app/components/addtocardButton";
import Brand from "@/app/home2/brand";
import { client } from "@/sanity/lib/client";
import Link from "next/link"; // Import Link for navigation

interface Crockery {
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

async function fetchCrockeryProduct(id: string): Promise<Crockery | null> {
  const query = `*[_type == "crockery" && _id == $id][0] {  
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

  const result = await client.fetch<Crockery | null>(query, { id });
  return result;
}

async function fetchRelatedCrockery(currentId: string): Promise<Crockery[]> {
  const query = `*[_type == "crockery" && _id != $currentId]{
    _id,
    name,
    price,
    "image": image.asset->url,
  }`;

  const results = await client.fetch<Crockery[]>(query, { currentId });
  return results;
}

async function CrockeryProductPage({ params }: { params: { id: string } }) {
  const crockeryProduct = await fetchCrockeryProduct(params.id);

  if (!crockeryProduct) {
    return <div>Crockery product not found</div>;
  }

  const relatedCrockery = await fetchRelatedCrockery(crockeryProduct._id);

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Crockery Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <img
            src={crockeryProduct.image}
            alt={crockeryProduct.name}
            className="w-full h-[350px] object-cover rounded-sm"
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold">{crockeryProduct.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">£{crockeryProduct.price}</p>
          <p className="text-md text-gray-600 mt-6">{crockeryProduct.description}</p>

          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-t pt-4">
    
            <div className="mt-4 sm:mt-0">
              <AddtocardButton product={crockeryProduct} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Crockery Section */}
      <div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Crockery Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedCrockery.length > 0 ? (
            relatedCrockery.slice(0, 4).map((related) => (
              <div key={related._id} className="w-full">
                <Link href={`/categorieDetails/crockerys/${related._id}`} passHref>
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-[250px] object-cover rounded-sm"
                  />
                </Link>
                <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                  <Link href={`/crockerys/${related._id}`} passHref>
                    {related.name}
                  </Link>
                </p>
                <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
                  £{related.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-md text-gray-600">No related crockery found.</p>
          )}
        </div>
      </div>
    </div>
    <Brand/>
  </div>
  );
}

export default CrockeryProductPage;
