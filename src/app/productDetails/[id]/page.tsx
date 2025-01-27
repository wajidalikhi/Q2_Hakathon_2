"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getAllProducts, Product } from "@/sanity/lib/data";
import { useCart } from "@/app/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams(); // Get product ID from the route
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product) return; // Ensure product is not null
    console.log('Adding product:', product); // Check the product details
    alert(`Your Product: ${product.title} successfully added`)
    addToCart({
      id: product._id, // Ensure that we use _id as the id for cart
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });
  };

  useEffect(() => {
    if (id) {
      getAllProducts().then((products) => {
        const selectedProduct = products.find((prod) => prod._id === id);
        setProduct(selectedProduct || null);
      });
    }
  }, [id]);

  if (!product) {
    return (
      <div className="w-[1321px] m-auto p-10 text-center">
        <p>{id ? "Loading product..." : "Product not found!"}</p>
      </div>
    );
  }

  return (
    <section className="w-[1321px] m-auto p-10">
      <div className="flex gap-10">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-[36px] font-bold">{product.title}</h1>
          <p className="text-[24px] font-semibold text-[#01AD5A]">${product.price.toFixed(2)} USD</p>
          <p className="mt-5 text-gray-600">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="mt-5 bg-[#007580] text-white py-2 px-4 rounded-lg"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}
