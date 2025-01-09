import Image from "next/image";
import Subscribe from "../component/Subscribe";
import SingleProductPage from "../component/section/SingleProductPage";

export default function Products() {
  const products = [
    {
      name: "Library Stool Chair",
      price: 20,
      image: "/image/Image.png",
      tag: "New",
      tagColor: "#01AD5A",
    },
    {
      name: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/image/Image (1).png",
      tag: "Sales",
      tagColor: "#F5813F",
    },
    {
      name: "Library Stool Chair",
      price: 20,
      image: "/image/Image (2).png",
    },
    {
      name: "Library Stool Chair",
      price: 20,
      image: "/image/Image (3).png",
    },
  ];

  return (
    <>
    <div className="w-full max-w-[1321px] mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6">All Products</h1>
      {[...Array(3)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex justify-between mb-10">
          {products.map((product, index) => (
            <div
            key={index}
            className="w-[312px] h-[377px] flex flex-col justify-between relative"
            >
              <Image src={product.image} height={312} width={312} alt={product.name} />
              {product.tag && (
                <div
                className={`absolute top-5 left-5 rounded-md text-center text-white bg-[${product.tagColor}] h-[26px] w-[49px] flex items-center justify-center`}
                >
                  <p>{product.tag}</p>
                </div>
              )}
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-[#007580]">{product.name}</p>
                  <p>
                    ${product.price}
                    {product.originalPrice && (
                      <span className="line-through ml-2 text-gray-500">
                        ${product.originalPrice}
                      </span>
                    )}
                  </p>
                </div>
                <Image
                  src={product.tag === "Sales" ? "/image/Gry Add Cart.png" : "/image/Green Add Cart.png"}
                  height={44}
                  width={44}
                  alt="Add to Cart"
                  />
              </div>
            </div>
            
          ))}
        </div>
      ))}
      
    </div>
    <Subscribe/>
    <SingleProductPage/>


          </>
  );
}
