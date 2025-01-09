import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-auto py-8 px-4 flex justify-center text-white border-t-2 border-b-2">
      <div className="flex justify-between w-full max-w-[1321px] ">
        {/* Logo and Description */}
        <div className="flex flex-col justify-between w-[350px] h-[198px]">
          <div className="flex items-center text-3xl font-bold gap-2">
            <Image src="/image/Logo Icon.png" width={40} height={40} alt="Logo Icon" />
            <h1 className="text-[#272343]">Comforty</h1>
          </div>
          <p className="text-[#272343] mt-4 flex flex-col w-[350px] h-[198px]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. 
            <p>Cras egestas purus.</p>
          </p>
          
          <div className="flex gap-4 mt-4">
            {['FB Logo', 'Twitter', 'Instagram', 'Patner Logo', 'YouTube'].map((platform, index) => (
              <Image
                key={index}
                src={`/image/Footer/${platform}.png`}
                width={38}
                height={38}
                alt={`${platform} Logo`}
              />
            ))}
          </div>
        </div>

        {/* Category */}
        <div className="w-1/6">
          <h1 className="text-gray-400 mb-4">CATEGORY</h1>
          <ul className="space-y-2 text-[#272343]">
            {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'Wooden Chair'].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="w-1/6">
          <h1 className="text-gray-400 mb-4">SUPPORT</h1>
          <ul className="space-y-2 text-[#272343]">
            {['Help & Support', 'Terms & Conditions', 'Privacy Policy', 'Help'].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-1/3 flex flex-col">
          <h1 className="text-gray-400 mb-4">NEWSLETTER</h1>
          <form action="" className="flex items-center gap-4 mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="pl-4 w-full max-w-xs h-[46px] border-2 bg-transparent rounded-lg focus:outline-none text-[#272343]"
            />
            <button className="bg-[#029FAE] px-6 py-2 rounded-md text-white">Subscribe</button>
          </form>
          <p className="text-[#272343]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>
    </footer>
  );
}