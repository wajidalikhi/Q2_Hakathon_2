import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full mt-auto py-8 px-4 flex justify-center text-white border-t-2 border-b-2">
      <div className="flex justify-between w-[1321px] h-[203px]">
        <div className="w-[350px] h-[198px] flex flex-col justify-between">
          <div className="flex text-3xl font-bold gap-2">
            <div className="">
              <Image
                src="/image/Logo Icon.png"
                width={40}
                height={40}
                alt="Logo Icon"
              />
            </div>
            <h1>Comforty</h1>
          </div>
          <p className="text-[#272343]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus{" "}
          </p>

          <div className=" flex w-[206px] h-[38px]">
            <Image
              src="/image/Footer/FB Logo.png"
              width={38}
              height={38}
              alt="FB Logo"
            />

            <Image
              src="/image/Footer/Twitter.png"
              width={38}
              height={38}
              alt="Twitter Logo"
            />

            <Image
              src="/image/Footer/Instagram.png"
              width={38}
              height={38}
              alt="Instagram Logo"
            />

            <Image
              src="/image/Footer/Patner Logo.png"
              width={38}
              height={38}
              alt="Patner Logo"
            />

            <Image
              src="/image/Footer/YouTube.png"
              width={38}
              height={38}
              alt="YouTube Logo"
            />
          </div>
        </div>


        <div className="  w-[105px] h-[203px] flex flex-col justify-between ">
            <h1 className="text-gray-400 w-[82px] h-[15px]">GATEGORY</h1>
            <ul className=" w-[105px] h-[168px] flex flex-col justify-between text-[#272343]">
                <li>Sofa</li>
                <li>Armchair</li>
                <li>Wing Chair</li>
                <li>Desk Chair</li>
                <li>wooden Chair</li>
            </ul>
        </div>

        <div className=" w-[156px] h-[143px] flex flex-col justify-between ">
            <h1 className="text-gray-400 w-[72px] h-[15px]">SUPPORT</h1>
            <ul className=" w-[156px] h-[108px] flex flex-col justify-between text-[#272343] ">
                <li>Help & Support</li>
                <li>Tearms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Help</li>
                
            </ul>
        </div>


        <div className="w-[424px] h-[142px] flex flex-col justify-between">
        <h1 className="text-gray-400 w-[102px] h-[15px]">NEWSLETTER</h1>
        
        
        <form action="" className="flex justify-between">
        <input type="email" placeholder="Your Email"  className="pl-4 w-[285px] h-[46px] border-2 bg-transparent rounded-lg focus:outline-none text-[#272343]" />
        <button className="bg-[#029FAE] w-[127px] h-[46px] rounded-md">Subscrib</button>
        </form>
        
        <p className="text-[#272343]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>


        </div>


      </div>
    </footer>
  );
}
