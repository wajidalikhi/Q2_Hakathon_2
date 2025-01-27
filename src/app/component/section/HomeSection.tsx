"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAllProducts, Product } from "@/sanity/lib/data";
import Link from "next/link";

export default function HomeSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Handle errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(true); // Set error state
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Loading indicator
  }

  if (error) {
    return <p>Error loading products. Please try again later.</p>; // Error message
  }

  return (
    <section className="w-[1321px] m-auto">
      {/* Logos */}
      <div className="flex justify-between mb-10">
        {[...Array(7)].map((_, idx) => (
          <Image
            key={idx}
            src={`/image/Logo${idx > 0 ? ` (${idx})` : ""}.png`}
            height={100}
            width={100}
            alt={`logo-${idx}`}
            onError={() => console.error(`Logo ${idx} not found.`)} // Handle missing images
          />
        ))}
      </div>

      {/* Featured Products */}
      <div className="flex flex-col w-full justify-between m-auto mb-10">
        <div className="w-full mb-5">
          <p className="text-[32px] font-semibold">Featured Products</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {products.map((product) => (
            <Link key={product._id} href={`/productDetails/${product._id}`}>
              <div className="w-[312px] flex flex-col justify-between relative">
                <Image
                  src={product.imageUrl}
                  height={312}
                  width={312}
                  alt={product.title}
                />
                {product.badge && (
                  <div
                    className={`absolute top-5 left-[17px] rounded-md text-center text-white h-[26px] w-[49px] ${
                      product.badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
                    }`}
                  >
                    <p>{product.badge}</p>
                  </div>
                )}
                <div className="flex justify-between mt-3">
                  <div>
                    <p className="text-[#007580] font-medium">
                      {product.title}
                    </p>
                    <p>
                      ${product.price}
                      {product.priceWithoutDiscount && (
                        <span className="line-through ml-2">
                          ${product.priceWithoutDiscount}
                        </span>
                      )}
                    </p>
                  </div>
                  <Image
                    src="/image/Green Add Cart.png"
                    height={44}
                    width={44}
                    alt="Add to Cart"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
