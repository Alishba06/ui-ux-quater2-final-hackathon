import AddtocardButton from "@/app/components/addtocardButton";
import { client } from "@/sanity/lib/client";
import Link from "next/link"; // Import Link for navigation

interface ChairProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  image:string,
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
}

async function fetchChairProduct(id: string): Promise<ChairProduct | null> {
  const query = `*[_type == "chairs" && _id == $id][0] {  
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

  const result = await client.fetch<ChairProduct | null>(query, { id });
  return result;
}

async function fetchRelatedChairs(currentId: string): Promise<ChairProduct[]> {
  const query = `*[_type == "chairs" && _id != $currentId]{
    _id,
    name,
    price,
     "image": image.asset->url,

  }`;

  const results = await client.fetch<ChairProduct[]>(query, { currentId });
  return results;
}

async function ChairProductPage({ params }: { params: { id: string } }) {
  const chairProduct = await fetchChairProduct(params.id);

  if (!chairProduct) {
    return <div>Chair product not found</div>;
  }

  const relatedChairs = await fetchRelatedChairs(chairProduct._id);

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Chair Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <img
            src={chairProduct.image}
            alt={chairProduct.name}
            className="w-full h-[350px] object-cover rounded-sm"
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold">{chairProduct.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">£{chairProduct.price}</p>
          <p className="text-md text-gray-600 mt-6">{chairProduct.description}</p>
          <AddtocardButton product={chairProduct} />

          <div className="mt-4">
            <p><strong>Dimensions:</strong></p>
            <ul className="text-gray-600">
              <li>Height: {chairProduct.dimensions.height}</li>
              <li>Width: {chairProduct.dimensions.width}</li>
              <li>Depth: {chairProduct.dimensions.depth}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Chairs Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Chair Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedChairs.length > 0 ? (
            relatedChairs.slice(0, 4).map((related) => (
              <div key={related._id} className="w-full">
                <Link href={`/categorieDetails/chairs/${related._id}`} passHref>
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-[250px] object-cover rounded-sm"
                  />
                </Link>
                <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                  <Link href={`/chairs/${related._id}`} passHref>
                    {related.name}
                  </Link>
                </p>
                <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
                  £{related.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-md text-gray-600">No related chairs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChairProductPage;
