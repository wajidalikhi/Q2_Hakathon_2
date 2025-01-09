// import { Section } from "lucide-react";
import Image from "next/image";

export default function Subscribe() {
  return (
    <section className="grayColor h-[754px] flex flex-col justify-center">
      <div className=" flex flex-col gap-6 w-full h-auto justify-center text-center items-center ">
        <div className=" w-[760px] h-[165px] flex flex-col justify-between">
          <h1 className=" font-['Roboto'] text-[50px]">
            Or Subscribe To The Newsletter
          </h1>

          
            <form
              action=""
              className=" flex items-end gap-6 justify-center text-black"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="text-black pl-4 h-[46px] bg-transparent border-b-2 border-black w-[760px]"
              />
              <button className=" flex border-b-2 border-black ">
                Subscribe
              </button>
            </form>
          
        </div>

        {/* Follow products and discounts on Instagram */}
        <div className=" w-[1324px] h-[319px] flex flex-col items-center my-12">
          <h1 className="font-['Roboto'] text-[50px] w-[1013px] h-[59px] flex text-center justify-end items-center">
            Follow products and discounts on Instagram
          </h1>

          <div className=" flex w-full justify-between  my-10">
            <Image
              src="/image/Image.png"
              height={186}
              width={186}
              alt="Cahir-1"
            />

            <Image
              src="/image/Image (1).png"
              height={186}
              width={186}
              alt="Cahir-1"
            />

            <Image
              src="/image/Image (2).png"
              height={186}
              width={186}
              alt="Cahir-1"
            />

            <Image
              src="/image/Image (3).png"
              height={186}
              width={186}
              alt="Cahir-1"
            />

            <Image
              src="/image/Image (3).png"
              height={186}
              width={186}
              alt="Cahir-1"
            />

            <Image
              src="/image/Image (3).png"
              height={186}
              width={186}
              alt="Cahir-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
