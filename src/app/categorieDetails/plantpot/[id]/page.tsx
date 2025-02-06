/* eslint-disable @next/next/no-img-element */
import AddtocardButton from "@/app/components/addtocardButton";
import Brand from "@/app/home2/brand";
import { client } from "@/sanity/lib/client";
import Link from "next/link"; // Import Link for navigation

interface PlantProduct {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: "string"
  }
  
  async function fetchPlantProduct(id: string): Promise<PlantProduct | null> {
    const query = `*[_type == "plant" && _id == $id][0] {  
      _id,
      name,
      price,
      description,
       "image": image.asset->url,
    }`;
  
    const result = await client.fetch<PlantProduct | null>(query, { id });
    return result;
  }
  
  async function fetchRelatedPlants(currentId: string): Promise<PlantProduct[]> {
    const query = `*[_type == "plant" && _id != $currentId]{
      _id,
      name,
      price,
       "image": image.asset->url,
    }`;
  
    const results = await client.fetch<PlantProduct[]>(query, { currentId });
    return results;
  }

  async function PlantProductPage({ params }: { params: { id: string } }) {
    const plantProduct = await fetchPlantProduct(params.id);
  
    if (!plantProduct) {
      return <div>Plant product not found</div>;
    }
  
    const relatedPlants = await fetchRelatedPlants(plantProduct._id);
  
    return (
      <div className="container mx-auto px-4 mt-10">
        {/* Plant Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full">
            <img
              src={plantProduct.image}
              alt={plantProduct.name}
              className="w-full h-[350px] object-cover rounded-sm"
            />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold">{plantProduct.name}</h1>
            <p className="text-xl font-semibold text-gray-700 mt-4">£{plantProduct.price}</p>
            <p className="text-md text-gray-600 mt-6">{plantProduct.description}</p>
            <div className="mt-6">
            <AddtocardButton product={plantProduct} />
            </div>
          </div>
        </div>
  
        {/* Related Plants Section */}
        <div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Plant Products</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPlants.length > 0 ? (
              relatedPlants.slice(0, 4).map((related) => (
                <div key={related._id} className="w-full">
                  <Link href={`/categorieDetails/plantpot/${related._id}`} passHref>
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-[250px] object-cover rounded-sm"
                    />
                  </Link>
                  <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                    <Link href={`/plantpot/${related._id}`} passHref>
                      {related.name}
                    </Link>
                  </p>
                  <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
                    £{related.price}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-md text-gray-600">No related plants found.</p>
            )}
          </div>
        </div>
      </div>
     <Brand/>
    </div>
    );
  }
  
  export default PlantProductPage;
  