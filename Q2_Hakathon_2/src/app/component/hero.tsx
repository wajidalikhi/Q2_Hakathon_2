import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="bg-[#F0F2F3] rounded-bl-3xl md:w-[1321px] w-full md:h-[850px] h-[450px] m-auto md:flex  justify-center items-center">
      <div className="md:flex justify-around items-center space-y-5 md:space-y-0">
        <div className="flex justify-between flex-col items-center md:items-start md:w-[557px] w-full">
            <p className="py-4">WELCOME TO CHAIRY</p>
          <div className=" md:text-5xl flex flex-col items-center md:items-start text-xl font-bold md:w-[557px] w-full md:h-[198px]">
            <p>Best Furniture</p>
            <p>Collection For Your</p>
            <p>Interior.</p>
          </div>
          <div className="flex justify-around bg-[#029FAE] w-[171px] md:py-4 py-2 rounded-xl">
            <button className="text-white">Shop Now</button>
            <Image
              src="/image/Right 24px.png"
              width={24}
              height={24}
              alt="Arrow"
              
            />
          </div>
        </div>
        <div className="md:w-[434px] w-full h-[584px]">
          <Image
            src="/image/Product Image.png"
            width={434}
            height={584}
            alt="Chair"
            className="w-[200px] h-[220px] md:w-[434px] md:h-[584px]"
          />
        </div>
      </div>
    </section>
  );
}
