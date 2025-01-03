"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className="max-lg:hidden  flex justify-between items-center p-6 bg-black border-b-[1px] text-white w-full">
        <h1 className="text-3xl bg-gradient-to-r from-slate-300 to-gray-600 bg-clip-text text-transparent font-extrabold">
          Velvet Glow
        </h1>
        <ul className="flex justify-between items-center gap-x-5 text-lg ">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li className="relative ">
            <DropdownMenu>
              <Link href="/allproducts" className="flex items-center ">
                <span className="hover:text-gray-300 transition duration-300">
                  Shop
                </span>

                <DropdownMenuTrigger>
                  <RiArrowDropDownLine className="text-2xl hover:text-gray-300 transition-all duration-300 hover:rotate-180 " />
                </DropdownMenuTrigger>
              </Link>
              <DropdownMenuContent className="bg-gray-100 w-[200px]  ml-20 rounded-xl border-2 border-black">
                <DropdownMenuLabel>All Products</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-200 hover:cursor-pointer">
                  <Link href="/products">Blush</Link>{" "}
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-200 hover:cursor-pointer">
                  <Link href="/bronze">Bronzer</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-200 hover:cursor-pointer">
                  <Link href="/eyebrow">Eyebrow</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-200 hover:cursor-pointer">
                  <Link href="/eyeliner">Eyeliner</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-200 hover:cursor-pointer">
                  <Link href="/eyeshadow">Eyeshadow</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-200 hover:cursor-pointer">
                  <Link href="/foundation">Foundation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-200 hover:cursor-pointer">
                  <Link href="/lipliner">Lip Liner</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-200 hover:cursor-pointer">
                  <Link href="/lipstick">Lipstick</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-200 hover:cursor-pointer">
                  <Link href="/mascara">Mascara</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-200 hover:cursor-pointer">
                  <Link href="/nailpolish">Nail Polish</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <Link
              href="/aboutus"
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contactus"
              className="hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-between items-center text-3xl space-x-4 ">
          <FaRegHeart className="hover:text-gray-600" />

          <Link href="/cart" className="flex items-center  gap-x-2 relative ">
            <PiShoppingCartSimpleBold className="hover:text-gray-600" />
            <IoIosAddCircle className="absolute text-2xl  bottom-4 left-3 hover:text-gray-600 hover:scale-105 " />
          </Link>
        </div>
      </div>

      <Sheet>
        <SheetTrigger className=" lg:hidden  flex justify-between items-center py-3 px-4 w-full bg-black">
          {/* <div className='flex justify-between  bg-red-300'> */}
          <h1 className="text-3xl bg-gradient-to-r from-slate-400 to-red-600 bg-clip-text text-transparent font-extrabold">
            Velvet Glow
          </h1>

          <HiOutlineMenuAlt3 className="text-2xl text-white" />
          {/* </div> */}
        </SheetTrigger>

        <SheetContent className="min-[902px]:block w-full bg-white shadow-lg">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="flex flex-col justify-center items-center ">
              <ul className="flex items-center flex-col justify-between text-textColor1 text-lg mt-12 space-y-5 font-bold">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="flex items-center  font-bold">
                  {" "}
                  <Link href="/allproducts">Shop </Link>{" "}
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </li>

                <li>
                  {" "}
                  <Link href="/aboutus">About</Link>
                </li>

                <li>
                  {" "}
                  <Link href="/contactus">Contact</Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="flex items-center  gap-x-2 relative "
                  >
                    <PiShoppingCartSimpleBold className="hover:text-gray-600 text-3xl" />
                    <IoIosAddCircle className="absolute text-2xl  bottom-4 left-3 hover:text-gray-600 hover:scale-105 " />
                  </Link>
                </li>
                <li>
                  <FaRegHeart className="hover:text-gray-600 text-3xl" />
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
