import Image from "next/image";
export default function Hearder() {
  return (
    <>
      <header className="bg-[#F0F2F3] flex w-full h-[84px] justify-between m-auto items-center">
        <div className="  flex w-[1321] justify-between items-center m-auto">
          <div className="flex w-full justify-between">
            <div className="flex md:items-start items-center md:text-3xl text-xl font-bold gap-2">
              <div className="">
                <Image
                  src="/image/Logo Icon.png"
                  width={40}
                  height={40}
                  alt="Logo Icon"
                  className=" md:w-[40px] md:h-[40px] w-6 h-6"
                />
              </div>
              <h1>Comforty</h1>
            </div>
            <button>
              <div className=" items-end">
                <Image
                  src="/image/Cart.png"
                  width={96}
                  height={240}
                  alt="Chart Box"
                />
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
