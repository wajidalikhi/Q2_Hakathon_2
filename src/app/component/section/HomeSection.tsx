"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAllProducts, Product } from "@/sanity/lib/data";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

export default function HomeSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading products. Please try again later.</p>;
  }

  return (
    <section className="w-[1321px] m-auto">
      {/* Logos */}
      <div className="flex justify-between mb-10">
        {[...Array(7)].map((_, idx) => (
          <Image
            key={idx}
            src={`/image/Logo${idx === 0 ? "" : ` (${idx})`}.png`} // Ensure logo path is correct
            height={100}
            width={100}
            alt={`logo-${idx}`}
            onError={() => console.error(`Logo ${idx} not found.`)} // Handle missing images
          />
        ))}
      </div>

      {/* Featured Products Section */}
      <div className="flex flex-col w-full justify-between m-auto mb-10">
        {/* Title and SearchBar in one line */}
        <div className="w-full mb-5 flex items-center justify-between">
          <p className="flex justify-start w-1/2 text-[32px] font-semibold">Featured Products</p>
          {/* SearchBar placed next to the title */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        <div className="flex flex-wrap gap-5">
          {filteredProducts.map((product) => (
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
