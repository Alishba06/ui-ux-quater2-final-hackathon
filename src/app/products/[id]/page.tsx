import { fetchAllProducts } from '@/lib/allproduct';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link'; // Import Link for navigation

interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  description: string;
  features: string;
  dimensions: string;
  category: string; // Adding category to filter related products
}

async function ProductPage({ params }: { params: { id: string } }) {
  const products = await fetchAllProducts();
  const product = products.find((p: { _id: string; }) => p._id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Filter related products based on the same category
  const relatedProducts = products.filter(
    (p: { _id: any; category: any; }) => p._id !== product._id && p.category === product.category
  );

  // Convert features and dimensions to string if they are objects or arrays
  const formatField = (field: string | object) => {
    if (typeof field === 'object') {
      return Array.isArray(field) ? field.join(', ') : JSON.stringify(field);
    }
    return field;
  };

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <img
            src={urlFor(product.image)}
            alt={product.name}
            className="w-full h-[350px] object-cover rounded-sm"
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">£{product.price}</p>
          <p className="text-md text-gray-600 mt-6">{product.description}</p>

          <div className="mt-6">
            <h3 className="font-semibold">Features:</h3>
            <p className="text-md text-gray-600">{formatField(product.features)}</p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Dimensions:</h3>
            <p className="text-md text-gray-600">{formatField(product.dimensions)}</p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.length > 0 ? (
            relatedProducts.slice(0, 4).map((relatedProduct: Product) => (
              <div key={relatedProduct._id} className="w-full">
              <Link href={`/products/${relatedProduct._id}`} passHref>
                <img
                src={urlFor(relatedProduct.image)}
                alt={relatedProduct.name}
                className="w-full h-[250px] object-cover rounded-sm"
                />
              </Link>
              <p className="text-[#2A254B] font-clash text-lg font-normal leading-[140%] mt-3 mb-2">
                <Link href={`/products/${relatedProduct._id}`} passHref>
                {relatedProduct.name}
                </Link>
              </p>
              <p className="text-[#2A254B] font-satoshi text-md font-normal leading-[150%]">
                £{relatedProduct.price}
              </p>
              </div>
            ))
            ) : (
            <p className="text-md text-gray-600">No related products found.</p>
            )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
