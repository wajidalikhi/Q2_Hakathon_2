import Image from "next/image";

export default function PaymentFooter(){
    return(
    
        <div className=" flex w-[1320px] h-[75px] justify-between m-auto items-center">
           <div className=" flex gap-2 w-[362px] h-[21px] ">
            <p className="text-gray-500 w-full">@ 2021 - Blogy - Designed & Develop by</p>
            <p>Zakirsoft</p>
            </div>
            <div>
                <Image
                                              src="/image/footer/logos.png"
                                              width={277}
                                              height={27}
                                              alt="arrow Icon"
                                              className=" md:w-[277px] md:h-[27px]"
                                            />
            </div>
        </div>
    
    )
}