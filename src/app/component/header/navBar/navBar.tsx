import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="flex md:w-[1321px] w-full h-[74px] justify-between m-auto">
        <div className="md:flex hidden items-center text-gray-600">
          <ul className=" flex gap-6">
            <li>
              <Link href="/">Home</Link>
              </li>
            <li>
            <Link href="/">Shop</Link>
              </li>
            <li>
            <Link href="/products">Product</Link>
              </li>
            <li>
            <Link href="/">Pages</Link>
            </li>
            <li>
            <Link href="/">About</Link>
            </li>
          </ul>
        </div>

        <div className="md:flex hidden items-center gap-6">
          <p className="text-gray-600">Contact:</p>
          <p>(808) 555-0111</p>
        </div>

        <Sheet>
          <SheetTrigger className=" md:hidden w-full flex justify-end items-center bg-slate-500">
            <Menu className="mr-8"/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex justify-center items-center text-gray-600">
                  <div className="space-y-4">
                    <Link href="#">Home</Link>
                    <Link href="#">Shop</Link>
                    <Link href="#">Product</Link>
                    <Link href="#">Pages</Link>
                    <Link href="#">About</Link>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
