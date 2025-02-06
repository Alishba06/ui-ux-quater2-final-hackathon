/* eslint-disable @next/next/no-img-element */
import AddtocardButton from '@/app/components/addtocardButton';
import Brand from '@/app/home2/brand';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  features: string | object | null;
  dimensions: string | object | null;
  category: string;
  image: string;
}

async function fetchAllProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] {
    _id,
    name,
    price,
    description,
    features,
    dimensions,
    category,
    "image": image.asset->url
  }`;
  const products = await client.fetch<Product[]>(query);
  return products;
}

async function ProductPage({ params }: { params: { id: string } }) {
  const products = await fetchAllProducts();
  const product = products.find((p) => p._id === params.id);

  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found</div>;
  }

  const relatedProducts = products.filter(
    (p) => p._id !== product._id && p.category?.[0]?.toLowerCase() === product.category?.[0]?.toLowerCase()
  );
  
  

  const formatField = (field: string | object | null | undefined) => {
    if (field === null || field === undefined) {
      return 'N/A';
    }
    if (typeof field === 'object') {
      return Array.isArray(field) ? field.join(', ') : JSON.stringify(field);
    }
    return field;
  };

  return (
    <div>
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <img
            src={urlFor(product.image)}
            alt={product.name}
            className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="w-full">
          <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-800 mt-4">£{product.price}</p>
          <p className="text-md text-gray-600 mt-6 leading-7">{product.description}</p>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Features:</h3>
            <p className="text-md text-gray-600">
              {formatField(product.features)}
            </p>
          </div>
          <div className='mt-4'>
          <AddtocardButton
            product={{
              _id: product._id,
              name: product.name,
              price: product.price,
              description: product.description,
              image: product.image,
            }}
          />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.length > 0 ? (
            relatedProducts.slice(0, 4).map((relatedProduct: Product) => (
              <div key={relatedProduct._id} className="w-full border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-200">
                <Link href={`/products/${relatedProduct._id}`} passHref>
                  <img
                    src={urlFor(relatedProduct.image)}
                    alt={relatedProduct.name}
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                </Link>
                <p className="text-[#2A254B] font-medium text-lg mt-3 mb-1">
                  <Link href={`/products/${relatedProduct._id}`} passHref>
                    {relatedProduct.name}
                  </Link>
                </p>
                <p className="text-[#2A254B] font-satoshi text-md">£{relatedProduct.price}</p>
              </div>
            ))
          ) : (
            <p className="text-md text-gray-600">No related products found.</p>
          )}
        </div>
       </div>
      </div>
      <Brand/>
    </div>
  );
}

export default ProductPage;














// /* eslint-disable @next/next/no-img-element */
// import AddtocardButton from '@/app/components/addtocardButton';
// import Brand from '@/app/home2/brand';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   features: string | object | null;
//   dimensions: string | object | null;
//   category: string;
//   image: string;
// }

// async function fetchAllProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"] {
//     _id,
//     name,
//     price,
//     description,
//     features,
//     dimensions,
//     category,
//     "image": image.asset->url
//   }`;
//   const products = await client.fetch<Product[]>(query);
//   return products;
// }

// async function ProductPage({ params }: { params: { id: string } }) {
//   const products = await fetchAllProducts();
//   const product = products.find((p) => p._id === params.id);

//   if (!product) {
//     return <div className="text-center text-xl mt-10">Product not found</div>;
//   }

//   const relatedProducts = products.filter(
//     (p) => p._id !== product._id && p.category === product.category
//   );

//   const formatField = (field: string | object | null | undefined) => {
//     if (field === null || field === undefined) {
//       return 'N/A';
//     }
//     if (typeof field === 'object') {
//       return Array.isArray(field) ? field.join(', ') : JSON.stringify(field);
//     }
//     return field;
//   };

//   return (
//     <div>
//     <div className="container mx-auto px-4 mt-10">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="w-full">
//           <img
//             src={urlFor(product.image)}
//             alt={product.name}
//             className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
//           />
//         </div>
//         <div className="w-full">
//           <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>
//           <p className="text-2xl font-semibold text-gray-800 mt-4">£{product.price}</p>
//           <p className="text-md text-gray-600 mt-6 leading-7">{product.description}</p>

//           <div className="mt-6">
//             <h3 className="font-semibold text-lg mb-2">Features:</h3>
//             <p className="text-md text-gray-600">
//               {formatField(product.features)}
//             </p>
//           </div>
//           <div className='mt-4'>
//           <AddtocardButton
//             product={{
//               _id: product._id,
//               name: product.name,
//               price: product.price,
//               description: product.description,
//               image: product.image,
//             }}
//           />
//           </div>
//         </div>
//       </div>

//       <div className="mt-12">
//         <h2 className="text-3xl font-bold mb-6">Related Products</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {relatedProducts.length > 0 ? (
//             relatedProducts.slice(0, 4).map((relatedProduct: Product) => (
//               <div key={relatedProduct._id} className="w-full border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-200">
//                 <Link href={`/products/${relatedProduct._id}`} passHref>
//                   <img
//                     src={urlFor(relatedProduct.image)}
//                     alt={relatedProduct.name}
//                     className="w-full h-[200px] object-cover rounded-md"
//                   />
//                 </Link>
//                 <p className="text-[#2A254B] font-medium text-lg mt-3 mb-1">
//                   <Link href={`/products/${relatedProduct._id}`} passHref>
//                     {relatedProduct.name}
//                   </Link>
//                 </p>
//                 <p className="text-[#2A254B] font-satoshi text-md">£{relatedProduct.price}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-md text-gray-600">No related products found.</p>
//           )}
//         </div>
//        </div>
//       </div>
//       <Brand/>
//     </div>
//   );
// }

// export default ProductPage;










// import AddtocardButton from '@/app/components/addtocardButton';
// import { fetchAllProducts } from '@/lib/allproduct';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link'; // Import Link for navigation

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
//   features: string;
//   dimensions: string;
//   category: string; // Adding category to filter related products
// }

// async function ProductPage({ params }: { params: { id: string } }) {
//   const products = await fetchAllProducts();
//   const product = products.find((p: { _id: string; }) => p._id === params.id);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   // Filter related products based on the same category
//   const relatedProducts = products.filter(
//     (p: { _id: any; category: any; }) => p._id !== product._id && p.category === product.category
//   );

//   // Convert features and dimensions to string if they are objects or arrays
//   const formatField = (field: string | object) => {
//     if (typeof field === 'object') {
//       return Array.isArray(field) ? field.join(', ') : JSON.stringify(field);
//     }
//     return field;
//   };

//   return (
//     <div className="container mx-auto px-4 mt-10">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="w-full">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-[350px] object-cover rounded-sm"
//           />
//         </div>
//         <div className="w-full">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-xl font-semibold text-gray-700 mt-4">£{product.price}</p>
//           <p className="text-md text-gray-600 mt-6">{product.description}</p>

//           <div className="mt-6">
//             <h3 className="font-semibold">Features:</h3>
//             <p className="text-md text-gray-600">{formatField(product.features)}</p>
//           </div>
//           <AddtocardButton
//             product={{
//               _id: product._id,
//               name: product.name,
//               price: product.price,
//               description:product.description,
//               image:product.image,
//             }}
//           />

//           <div className="mt-6">
//             <h3 className="font-semibold">Dimensions:</h3>
//             <p className="text-md text-gray-600">{formatField(product.dimensions)}</p>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-6">Related Products</h2>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {relatedProducts.length > 0 ? (
//             relatedProducts.slice(0, 4).map((relatedProduct: Product) => (
//               <div key={relatedProduct._id} className="w-full">
//               <Link href={`/products/${relatedProduct._id}`} passHref>
//                 <img
//                 src={urlFor(relatedProduct.image)}
//                 alt={relatedProduct.name}
//                 className="w-full h-[250px] object-cover rounded-sm"
//                 />
//               </Link>
//               <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
//                 <Link href={`/products/${relatedProduct._id}`} passHref>
//                 {relatedProduct.name}
//                 </Link>
//               </p>
//               <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
//                 £{relatedProduct.price}
//               </p>
//               </div>
//             ))
//             ) : (
//             <p className="text-md text-gray-600">No related products found.</p>
//             )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductPage;
