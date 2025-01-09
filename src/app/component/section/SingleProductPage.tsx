import Image from "next/image";
export default function SingleProductPage() {
  return (
    <div className="bg-green-600 w-[1329px] h-[607px] flex">
      
        <div className="bg-purple-500 w-[675px] h-[607px] ">
          <Image
            src="/image/Image (3).png"
            height={675}
            width={607}
            alt="Cahir-1"
          />
        </div>
        <div className="bg-slate-400 w-[545px] h-[479px]">
        <div className=" bg-yellow-300 w-[541px] h-[208px]">
          <h1>Library Stool Chair</h1>

          <button className="bg-[#029FAE] w-[118px] h-[22px] rounded-full">
            $20.00 USD
          </button>
        </div>
        <div className="bg-pink-400 flex flex-col w-[543px] h-[234px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </p>

          <button className="bg-[#029FAE] w-[116px] h-[22px] rounded-md flex">
            <Image
              src="/image/Green Add Cart.png"
              height={44}
              width={44}
              alt="Add to Cart"
              className="w-[22.36px] h-[21.8px]"
            />
            Add To cart
          </button>
        </div>
        </div>
      </div>

  );
}
