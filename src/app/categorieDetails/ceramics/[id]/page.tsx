/* eslint-disable @next/next/no-img-element */
"use client"
import AddtocardButton from "@/app/components/addtocardButton";
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

// eslint-disable-next-line @next/next/no-async-client-component
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
            className="w-full h-[350px] object-cover rounded-sm"
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold">{ceramicProduct.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">£{ceramicProduct.price}</p>
          <p className="text-md text-gray-600 mt-6">{ceramicProduct.description}</p>
          <AddtocardButton product={ceramicProduct} />
        </div>
      </div>

      {/* Related Ceramics Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Ceramic Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedCeramics.length > 0 ? (
            relatedCeramics.slice(0, 4).map((related) => (
              <div key={related._id} className="w-full">
                <Link href={`/categorieDetails/ceramics/${related._id}`} passHref>
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-[250px] object-cover rounded-sm"
                  />
                </Link>
                <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                  <Link href={`/ceramic/${related._id}`} passHref>
                    {related.name}
                  </Link>
                </p>
                <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
                  £{related.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-md text-gray-600">No related ceramics found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CeramicProductPage;










// "use client"
// import { client } from "@/sanity/lib/client";
// import Link from "next/link"; // Import Link for navigation
// import { useState } from "react";

// interface CeramicProduct {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// async function fetchCeramicProduct(id: string): Promise<CeramicProduct | null> {
//   const query = `*[_type == "ceramic" && _id == $id][0] {  
//     _id,
//     name,
//     price,
//     description,
//     image {
//       asset -> {
//         url
//       }
//     }
//   }`;

//   const result = await client.fetch<CeramicProduct | null>(query, { id });
//   return result;
// }

// async function fetchRelatedCeramics(currentId: string): Promise<CeramicProduct[]> {
//   const query = `*[_type == "ceramic" && _id != $currentId]{
//     _id,
//     name,
//     price,
//     image {
//       asset -> {
//         url
//       }
//     }
//   }`;

//   const results = await client.fetch<CeramicProduct[]>(query, { currentId });
//   return results;
// }

// async function CeramicProductPage({ params }: { params: { id: string } }) {
//   const ceramicProduct = await fetchCeramicProduct(params.id);

//   if (!ceramicProduct) {
//     return <div>Ceramic product not found</div>;
//   }

//   const relatedCeramics = await fetchRelatedCeramics(ceramicProduct._id);
  
//   // const [CartItem, setCartItem] = useState({
//   //   id: [0], 
//   //   image: (id && id.length > 0 ? id[0].image : ''),  // Safe access
//   //   price: (id && id.length > 0 ? id[0].price : 0),    // Safe access
//   //   description: (id && id.length > 0 ? id[0].description : ''), // Safe access
//   //   qty: (id && id.length > 0 ? id[0].qty : 1)  // Safe access
//   // });
  

//   return (
//     <div className="container mx-auto px-4 mt-10">
//       {/* Ceramic Product Details */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="w-full">
//           <img
//             src={ceramicProduct.image.asset.url}
//             alt={ceramicProduct.name}
//             className="w-full h-[350px] object-cover rounded-sm"
//           />
//         </div>
//         <div className="w-full">
//           <h1 className="text-3xl font-bold">{ceramicProduct.name}</h1>
//           <p className="text-xl font-semibold text-gray-700 mt-4">£{ceramicProduct.price}</p>
//           <p className="text-md text-gray-600 mt-6">{ceramicProduct.description}</p>
//         </div>
//       </div>

//       {/* Related Ceramics Section */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-6">Related Ceramic Products</h2>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//           {relatedCeramics.length > 0 ? (
//             relatedCeramics.slice(0, 4).map((related) => (
//               <div key={related._id} className="w-full">
//                 <Link href={`/categorieDetails/ceramics/${related._id}`} passHref>
//                   <img
//                     src={related.image.asset.url}
//                     alt={related.name}
//                     className="w-full h-[250px] object-cover rounded-sm"
//                   />
//                 </Link>
//                 <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
//                   <Link href={`/ceramic/${related._id}`} passHref>
//                     {related.name}
//                   </Link>
//                 </p>
//                 <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
//                   £{related.price}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-md text-gray-600">No related ceramics found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CeramicProductPage;
