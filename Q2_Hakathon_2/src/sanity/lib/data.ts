import { client } from "@/sanity/lib/client";

export interface Product {
  _id: string; // Unique identifier for the product
  title: string; // Title of the product
  price: number; // Price of the product
  priceWithoutDiscount: number | null; // Original price before discount, can be null
  badge: string | null; // Badge or label for the product, can be null
  imageUrl: string; // URL of the product image
  description: string; // Description of the product
  inventory: number; // Available stock
  tags: string[]; // Array of tags for the product
  category: {
    _id: string; // Category ID
    title: string; // Category title
  };
}

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const queryAllProducts = `
      *[_type == 'products']{
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url,
        category->{_id, title},
        description,
        inventory,
        tags
      }
    `;
    const products = await client.fetch<Product[]>(queryAllProducts);
    return products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};
