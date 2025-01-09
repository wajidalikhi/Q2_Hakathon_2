import Image from "next/image";

export default function TopHeader() {
  return (
    <>
      <section className="bg-black w-full h-[45px] flex justify-center items-center">
        <div className=" flex md:w-[1321px] w-full justify-between m-auto">
          <div className=" flex gap-6 text-gray-300">
            <p className="text-xs md:text-base">Free Shipping On All Orders Over $50</p>
          </div>
          <div className="flex w-[215px] h-[17px] md:gap-4 gap-2 text-gray-300 text-xs md:text-base ">
            
            
            <div className=" flex items-center gap-1 w-[37px] h-[17px] ">
            <p>Eng</p>
                            <Image
                              src="/image/arrow.png"
                              width={7}
                              height={3.5}
                              alt="arrow Icon"
                              className=" md:w-[7px] md:h-[3.5px]"
                            />
                          </div>
            <div className="flex items-center w-[30px] h-[17px]">
              <p>Faqs</p>
            </div>  

            <div className="flex items-center w-full h-[17px]">
            
            <Image
                              src="/image/Vector.png"
                              width={13.33}
                              height={13.33}
                              alt="Vector Icon"
                              className=" md:w-[13.33px] md:h-[13.33px]"
                            />
                            <Image
                              src="/image/Vector1.png"
                              width={0}
                              height={2.67}
                              alt="Vector Icon"
                              className=" md:w-[0px] md:h-[2.67px]"
                            />
                            <Image
                              src="/image/Vector2.png"
                              width={0.01}
                              height={0}
                              alt="Vector Icon"
                              className=" md:w-[0.01px] md:h-[0px]"
                            />
                            <p className="flex">Need Help</p>
            </div>
            
            
            
          </div>
        </div>
      </section>
    </>
  );
}
