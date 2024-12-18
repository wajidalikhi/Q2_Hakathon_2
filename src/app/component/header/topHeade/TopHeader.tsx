export default function TopHeader() {
  return (
    <>
      <section className="bg-black w-full h-[45px] flex justify-center items-center">
        <div className=" flex md:w-[1321px] w-full justify-between m-auto">
          <div className=" flex gap-6 text-slate-400">
            <p className="text-xs md:text-base">Free Shoping On All Orders Over $50</p>
          </div>
          <div className=" flex md:gap-6 gap-2 text-slate-400 text-xs md:text-base">
            <p>Eng</p>
            <p>Faqs</p>
            <p>Need Help</p>
          </div>
        </div>
      </section>
    </>
  );
}
