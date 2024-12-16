import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="bg-[#F0F2F3] rounded-bl-3xl w-[1321px] h-[850px] m-auto flex justify-center items-center">
      <div className="flex justify-around items-center">
        <div className="flex justify-between flex-col w-[557px]">
            <p className="py-4">WELCOME TO CHAIRY</p>
          <div className="text-5xl font-bold w-[557px] h-[198px]">
            <p>Best Furniture</p>
            <p>Collection For Your</p>
            <p>Interior.</p>
          </div>
          <div className="flex justify-around bg-[#029FAE] w-[171] py-4 rounded-xl">
            <button className="text-white">Shop Now</button>
            <Image
              src="/image/Right 24px.png"
              width={24}
              height={24}
              alt="Arrow"
              
            />
          </div>
        </div>
        <div className="w-[434px] h-[584px]">
          <Image
            src="/image/Product Image.png"
            width={434}
            height={584}
            alt="Chair"
          />
        </div>
      </div>
    </section>
  );
}
