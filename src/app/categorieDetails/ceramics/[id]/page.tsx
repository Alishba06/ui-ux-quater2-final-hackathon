/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */

import AddtocardButton from "@/app/components/addtocardButton";
import Brand from "@/app/home2/brand";
import { client } from "@/sanity/lib/client";
import Link from "next/link"; 

interface CeramicProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string
}

async function fetchCeramicProduct(id: string): Promise<CeramicProduct | null> {
  const query = `*[_type == "ceramic" && _id == $id][0] {  
    _id,
    name,
    price,
    description,
    "image": image.asset->url,
  }`;

  const result = await client.fetch<CeramicProduct | null>(query, { id });
  return result;
}

async function fetchRelatedCeramics(currentId: string): Promise<CeramicProduct[]> {
  const query = `*[_type == "ceramic" && _id != $currentId]{
    _id,
    name,
    price,
    "image": image.asset->url,
  }`;

  const results = await client.fetch<CeramicProduct[]>(query, { currentId });
  return results;
}

async function CeramicProductPage({ params }: { params: { id: string } }) {
  const ceramicProduct = await fetchCeramicProduct(params.id);

  if (!ceramicProduct) {
    return <div>Ceramic product not found</div>;
  }

  const relatedCeramics = await fetchRelatedCeramics(ceramicProduct._id);

  return (
    <div className="container mx-auto px-4 mt-10" key={ceramicProduct?._id}>
      {/* Ceramic Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <img
            src={ceramicProduct.image}
            alt={ceramicProduct.name}
            className="w-full h-[300px] object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold text-[#2A254B]">{ceramicProduct.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">£{ceramicProduct.price}</p>
          <p className="text-md text-gray-600 mt-4">{ceramicProduct.description}</p>
          <div className="mt-6">
            <AddtocardButton product={ceramicProduct} />
          </div>
        </div>
      </div>

      {/* Related Ceramics Section */}
   <div>
  <div className="mt-12">
  <h2 className="text-2xl font-bold text-[#2A254B] mb-6">Related Ceramic Products</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
    {relatedCeramics.length > 0 ? (
      relatedCeramics.slice(0, 4).map((related) => (
        <div key={related._id} className="w-full bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Link href={`/categorieDetails/ceramics/${related._id}`} passHref>
            <img
              src={related.image}
              alt={related.name}
              className="w-full h-[250px] object-cover rounded-lg transition-all duration-300"
            />
          </Link>
          <div className="mt-4">
            <p className="text-[#2A254B] font-clash text-lg font-semibold truncate">{related.name}</p>
            <p className="text-[#2A254B] font-satoshi text-md font-normal mt-2">£{related.price}</p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-md text-gray-600">No related ceramics found.</p>
    )}
  </div>
  </div>
  </div>
  <Brand/>
 </div>
  );
}

export default CeramicProductPage;



