

import Image from "next/image";
export default function SingleProductPage() {
  return (
    <div>
      <div className="w-[1329px] h-[607px] flex justify-center items-center">
        <div className=" w-[675px] h-[607px] ">
          <Image
            src="/image/Image (3).png"
            height={675}
            width={607}
            alt="Cahir-1"
          />
        </div>
        <div className=" w-[545px] h-[479px] flex flex-col justify-between">
          <div className="w-[500px] h-[190px] flex flex-col justify-between">
            <h1 className="flex font-bold text-6xl font-inter">
              Library Stool Chair
            </h1>

            <button className="bg-[#029FAE] w-[144px] h-[44px] rounded-full text-m">
              <p className="text-white text-xl w-auto h-[22px] flex justify-center items-center ">
                $20.00 USD
              </p>
            </button>

            {/* Single line below the price button */}
            <hr className="border-t-2 border-gray-300 my-0" />
          </div>
          <div className="flex flex-col w-[543px] h-[234px] ">
            <p className="flex text-[22px] font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>

            <button className="bg-[#029FAE] w-[212px] h-[63px] rounded-md flex justify-center items-center my-8">
              <Image
                src="/image/Green Add Cart.png"
                height={22.36}
                width={21.8}
                alt="Add to Cart"
                className=" "
              />
              <p className=" text-white text-xl w-auto h-[22px] flex justify-center items-center">
                Add To cart
              </p>
            </button>
          </div>
        </div>
      </div>

      <div>

        {/* Featured Products */}

        <div className=" flex flex-col w-[1447px] h-[409px] justify-between m-auto ">
          <div className="flex justify-between w-[1420px] h-[34px] text-center">
            <p className=" text-[32px] font-semibold">Featured Products</p>
            <p>View all</p>
          </div>
          <div className="w-[1447px] h-[270px] grid grid-cols-4">
            <div className=" w-[312px] h-full flex flex-col justify-between relative">
              <Image
                src="/image/Our Products/Our Products1.png"
                height={270}
                width={263}
                alt="Cahir-1"
              />

                <div className="flex w-auto  items-end justify-between">
                  <p >Library stool Chair</p><p className="">$20</p>
                  
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
          </div>
        </div>
      </div>
    </div>
  );
}


