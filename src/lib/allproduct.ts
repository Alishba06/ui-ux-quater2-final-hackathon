import { client } from '@/sanity/lib/client';

export const fetchAllProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    name,
    slug,
    price,
    image,
    quantity,
    tags,
    description,
    features,
    dimensions
  }`;

  const products = await client.fetch(query); 
  return products; 
};