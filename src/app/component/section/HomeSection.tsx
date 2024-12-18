import Image from "next/image";

export default function HomeSection() {
  return (
    <>
      <section className="w-[1321px] h-[2950px] m-auto">
        <div className="flex justify-between">
          <Image src="/image/Logo.png" height={87} width={85} alt="logo" />

          <Image
            src="/image/Logo (1).png"
            height={109}
            width={107}
            alt="logo-1"
          />

          <Image
            src="/image/Logo (2).png"
            height={139}
            width={135}
            alt="logo-2"
          />

          <Image
            src="/image/Logo (3).png"
            height={65}
            width={63}
            alt="logo-3"
          />

          <Image
            src="/image/Logo (4).png"
            height={101}
            width={98}
            alt="logo-4"
          />

          <Image
            src="/image/Logo (5).png"
            height={115}
            width={113}
            alt="logo-5"
          />

          <Image src="/image/Logo (6).png" height={87} width={84} alt="logo" />
        </div>

        {/* Featured Products */}

        <div className=" flex flex-col w-full h-[461px] justify-between m-auto ">
          <div className="w-full h-[44px]">
            <p className="text-[32px] font-semibold">Featured Products</p>
          </div>
          <div className="flex h-[377px] justify-between">
            <div className=" w-[312px] h-full flex flex-col justify-between relative">
              <Image
                src="/image/Image.png"
                height={312}
                width={312}
                alt="Cahir-1"
              />

              <div className="absolute top-5 left-[17px] rounded-md justify-center text-center text-white bg-[#01AD5A] h-[26px] w-[49px]">
                <p>New</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-[#007580]">Library stool Chair</p>
                  <p>$20</p>
                </div>

                <Image
                  src="/image/Green Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>

            <div className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image
                src="/image/Image (1).png"
                height={312}
                width={312}
                alt="Cahir-1"
              />

              <div className="absolute top-5 left-[17px] rounded-md justify-center text-center text-white bg-[#F5813F] h-[26px] w-[49px]">
                <p>Sales</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p>Library stool Chair</p>
                  <p>
                    $20 <span className="line-through">$30</span>
                  </p>
                </div>

                <Image
                  src="/image/Gry Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>

            <div className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image
                src="/image/Image (2).png"
                height={312}
                width={312}
                alt="Cahir-1"
              />
              <div className="flex justify-between">
                <div>
                  <p>Library stool Chair</p>
                  <p>$20</p>
                </div>

                <Image
                  src="/image/Gry Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>

            <div className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image
                src="/image/Image (3).png"
                height={312}
                width={312}
                alt="Cahir-1"
              />
              <div className="flex justify-between">
                <div>
                  <p>Library stool Chair</p>
                  <p>$20</p>
                </div>

                <Image
                  src="/image/Gry Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Top Categories */}

        <div className=" flex flex-col justify-between w-full h-[508px] m-auto my-1">
          <div>
            <p className="font-semibold text-[32px]">Top Categories</p>
          </div>
          <div className="flex w-full h-[424px]">
            <div className="h-full justify-between m-auto relative">
              <Image
                src="/image/Wing Chair.png"
                height={424}
                width={424}
                alt="Wing Chair"
              />
              <div className="absolute w-full p-5 bottom-0 rounded-b-xl bg-black bg-opacity-70 text-white color">
                <p>Wing Chair</p>
                <p>3,584 Products</p>
              </div>
            </div>

            <div className="h-full justify-between m-auto relative">
              <Image
                src="/image/Wooden Chair.png"
                height={424}
                width={424}
                alt="wooden Chair"
              />
              <div className="absolute w-full p-5 bottom-0 rounded-b-xl bg-black bg-opacity-70 text-white color">
                <p>Wooden Chair</p>
                <p>157 Products</p>
              </div>
            </div>

            <div className="h-full justify-between m-auto relative">
              <Image
                src="/image/Desk Chair.png"
                height={424}
                width={424}
                alt="Desk Chair"
              />
              <div className="absolute w-full p-5 bottom-0 rounded-b-xl bg-black bg-opacity-70 text-white color">
                <p>Wing Chair</p>
                <p>3,584 Products</p>
              </div>
            </div>
          </div>
        </div>

        {/* Explore New and Papoulor Style */}
        <div className="flex w-[1320px] h-[648px] my-32 justify-between items-center ">
          {/* Left Side: Rotated Text */}
          <div className="flex items-center justify-center w-[40px] h-full">
            <h1 className="-rotate-90 text-center text-[34px] uppercase whitespace-nowrap">
              Explore new and popular styles
            </h1>
          </div>

          {/* Right Side: Images */}
          <div className="flex w-[1320px] justify-start h-full gap-2">
            {/* Main Image */}
            <div className="h-full w-[648px]">
              <Image
                src="/image/explore/explore-1.png"
                height={648}
                width={648}
                alt="Chair"
                className="h-full w-full"
              />
            </div>

            {/* Grid of Smaller Images */}
            <div className="w-[648px] grid grid-cols-2 place-content-between place-items-end">
              <Image
                src="/image/explore/explore-2.png"
                height={312}
                width={312}
                alt="Chair"
              />
              <Image
                src="/image/explore/explore-3.png"
                height={312}
                width={312}
                alt="Chair"
              />
              <Image
                src="/image/explore/explore-4.png"
                height={312}
                width={312}
                alt="Chair"
              />
              <Image
                src="/image/explore/explore-5.png"
                height={312}
                width={312}
                alt="Chair"
              />
            </div>
          </div>
        </div>

        {/* Last Section Grid of Smaller Images */}

        <div className=" flex flex-col w-full h-[461px] justify-between m-auto ">
          <div className="w-full h-[44px] text-center">
            <p className="text-[32px] font-semibold">Our Products</p>
          </div>
          <div className="h-[377px] grid grid-cols-4 gap-y-8">
            <div className=" w-[312px] h-full flex flex-col justify-between relative">
              <Image
                src="/image/Our Products/Our Products1.png"
                height={312}
                width={312}
                alt="Cahir-1"
              />

              <div className="absolute top-5 left-[17px] rounded-md justify-center text-center text-white bg-[#01AD5A] h-[26px] w-[49px]">
                <p>New</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-[#007580]">Library stool Chair</p>
                  <p>$20</p>
                </div>

                <Image
                  src="/image/Our Products/Green Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>

            <div className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image
                src="/image/Our Products/Our Products2.png"
                height={312}
                width={312}
                alt="Cahir-1"
              />

              <div className="absolute top-5 left-[17px] rounded-md justify-center text-center text-white bg-[#F5813F] h-[26px] w-[49px]">
                <p>Sales</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p>Library stool Chair</p>
                  <p>
                    $20 <span className="line-through">$30</span>
                  </p>
                </div>

                <Image
                  src="/image/Our Products/Gry Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>

            <div className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image
                src="/image/Our Products/Our Products3.png"
                height={312}
                width={312}
                alt="Cahir-1"
              />
              <div className="flex justify-between">
                <div>
                  <p>Library stool Chair</p>
                  <p>$20</p>
                </div>

                <Image
                  src="/image/Gry Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>

            <div className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image
                src="/image/Image (3).png"
                height={312}
                width={312}
                alt="Cahir-1"
              />
              <div className="flex justify-between">
                <div>
                  <p>Library stool Chair</p>
                  <p>$20</p>
                </div>

                <Image
                  src="/image/Gry Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>
            <div className=" w-[312px] h-full flex flex-col justify-between relative">
              <Image
                src="/image/Our Products/Our Products5.png"
                height={312}
                width={312}
                alt="Cahir-1"
              />

              <div className="absolute top-5 left-[17px] rounded-md justify-center text-center text-white bg-[#01AD5A] h-[26px] w-[49px]">
                <p>New</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Library stool Chair</p>
                  <p>$20</p>
                </div>

                <Image
                  src="/image/Our Products/Gry Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>

            <div className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image
                src="/image/Our Products/Our Products6.png"
                height={312}
                width={312}
                alt="Cahir-1"
              />

              <div className="absolute top-5 left-[17px] rounded-md justify-center text-center text-white bg-[#F5813F] h-[26px] w-[49px]">
                <p>Sales</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p>Library stool Chair</p>
                  <p>
                    $20 <span className="line-through">$30</span>
                  </p>
                </div>

                <Image
                  src="/image/Our Products/Gry Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>

            <div className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image
                src="/image/Our Products/Our Products7.png"
                height={312}
                width={312}
                alt="Cahir-1"
              />
              <div className="flex justify-between">
                <div>
                  <p>Library stool Chair</p>
                  <p>$20</p>
                </div>

                <Image
                  src="/image/Gry Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>

            <div className="w-[312px] h-[377px] relative flex flex-col justify-between">
              <Image
                src="/image/Our Products/Our Products8.png"
                height={312}
                width={312}
                alt="Cahir-1"
              />
              <div className="flex justify-between">
                <div>
                  <p>Library stool Chair</p>
                  <p>$20</p>
                </div>

                <Image
                  src="/image/Gry Add Cart.png"
                  height={44}
                  width={44}
                  alt="Add to Cart"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}