import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="w-[1321px] h-[3000px] m-auto">
      {/* Logo Section */}
      <div className="flex justify-between">
        <Image src="/image/Logo.png" height={87} width={85} alt="logo" />
        <Image src="/image/Logo (1).png" height={109} width={107} alt="logo-1" />
        <Image src="/image/Logo (2).png" height={139} width={135} alt="logo-2" />
        <Image src="/image/Logo (3).png" height={65} width={63} alt="logo-3" />
        <Image src="/image/Logo (4).png" height={101} width={98} alt="logo-4" />
        <Image src="/image/Logo (5).png" height={115} width={113} alt="logo-5" />
        <Image src="/image/Logo (6).png" height={87} width={84} alt="logo-6" />
      </div>

      {/* Featured Products Section */}
      <div className="flex flex-col w-full h-[461px] justify-between m-auto">
        <div className="w-full h-[44px]">
          <p className="text-[32px] font-semibold">Featured Products</p>
        </div>
        <div className="flex h-[377px] justify-between">
          {/* Product Cards */}
          {[
            { img: "/image/Image.png", label: "New", price: "$20" },
            { img: "/image/Image (1).png", label: "Sales", price: "$20", originalPrice: "$30" },
            { img: "/image/Image (2).png", label: "", price: "$20" },
            { img: "/image/Image (3).png", label: "", price: "$20" }
          ].map((product, index) => (
            <div key={index} className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image src={product.img} height={312} width={312} alt={`Product-${index + 1}`} />
              {product.label && (
                <div className={`absolute top-5 left-[17px] rounded-md justify-center text-center text-white bg-[#01AD5A] h-[26px] w-[49px]`}>
                  <p>{product.label}</p>
                </div>
              )}
              <div className="flex justify-between">
                <div>
                  <p className="text-[#007580]">Library stool Chair</p>
                  <p>{product.price} {product.originalPrice && <span className="line-through">{product.originalPrice}</span>}</p>
                </div>
                <Image src="/image/Green Add Cart.png" height={44} width={44} alt="Add to Cart" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Categories Section */}
      <div className="flex flex-col justify-between w-full h-[508px] m-auto my-1">
        <div>
          <p className="font-semibold text-[32px]">Top Categories</p>
        </div>
        <div className="flex w-full h-[424px]">
          {[
            { img: "/image/Wing Chair.png", title: "Wing Chair", productsCount: "3,584" },
            { img: "/image/Wooden Chair.png", title: "Wooden Chair", productsCount: "157" },
            { img: "/image/Desk Chair.png", title: "Desk Chair", productsCount: "3,584" }
          ].map((category, index) => (
            <div key={index} className="h-full justify-between m-auto relative">
              <Image src={category.img} height={424} width={424} alt={`Category-${category.title}`} />
              <div className="absolute w-full p-5 bottom-0 rounded-b-xl bg-black bg-opacity-70 text-white">
                <p>{category.title}</p>
                <p>{category.productsCount} Products</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore New and Popular Style Section */}
      <div className="flex w-[1320px] h-[648px] my-32 justify-between items-center">
        {/* Left Side: Rotated Text */}
        <div className="flex items-center justify-center w-[40px] h-full">
          <h1 className="-rotate-90 text-center text-[34px] uppercase whitespace-nowrap">
            Explore new and popular styles
          </h1>
        </div>

        {/* Right Side: Images */}
        <div className="flex w-[1320px] justify-start h-full gap-2">
          <div className="h-full w-[648px]">
            <Image src="/image/explore/explore-1.png" height={648} width={648} alt="Explore-1" className="h-full w-full" />
          </div>
          <div className="w-[648px] grid grid-cols-2 place-content-between place-items-end">
            {["explore-2.png", "explore-3.png", "explore-4.png", "explore-5.png"].map((image, index) => (
              <Image key={index} src={`/image/explore/${image}`} height={312} width={312} alt={`Explore-${index + 2}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Our Products Section */}
      <div className="flex flex-col w-full h-[461px] justify-between m-auto">
        <div className="w-full h-[44px] text-center">
          <p className="text-[32px] font-semibold">Our Products</p>
        </div>
        <div className="h-[377px] grid grid-cols-4 gap-y-8">
          {[
            { img: "/image/Our Products/Our Products1.png", label: "New", price: "$20" },
            { img: "/image/Our Products/Our Products2.png", label: "Sales", price: "$20", originalPrice: "$30" },
            { img: "/image/Our Products/Our Products3.png", price: "$20" },
            { img: "/image/Our Products/Our Products4.png", price: "$20" },
            { img: "/image/Our Products/Our Products5.png", label: "New", price: "$20" },
            { img: "/image/Our Products/Our Products6.png", label: "Sales", price: "$20", originalPrice: "$30" },
            { img: "/image/Our Products/Our Products7.png", price: "$20" },
            { img: "/image/Our Products/Our Products8.png", price: "$20" }
          ].map((product, index) => (
            <div key={index} className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image src={product.img} height={312} width={312} alt={`Product-${index + 1}`} />
              {product.label && (
                <div className={`absolute top-5 left-[17px] rounded-md justify-center text-center text-white bg-[#01AD5A] h-[26px] w-[49px]`}>
                  <p>{product.label}</p>
                </div>
              )}
              <div className="flex justify-between">
                <div>
                  <p className="text-[#007580]">Library stool Chair</p>
                  <p>{product.price} {product.originalPrice && <span className="line-through">{product.originalPrice}</span>}</p>
                </div>
                <Image src="/image/Our Products/Gry Add Cart.png" height={44} width={44} alt="Add to Cart" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
