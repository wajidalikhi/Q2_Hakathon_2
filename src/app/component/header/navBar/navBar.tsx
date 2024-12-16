export default function NavBar(){
    return(
        <>
        <div className="flex w-[1321px] h-[74px] justify-between m-auto">
            <div className="flex items-center text-gray-600">
            <ul className=" flex gap-6">
                <li>Home</li>
                <li>Shop</li>
                <li>Product</li>
                <li>Pages</li>
                <li>About</li>
            </ul>
            </div>

            <div className="flex items-center gap-6">
                <p className="text-gray-600">Contact:</p>
                <p>(808) 555-0111</p>
            </div>
        </div>
        </>
    )
}