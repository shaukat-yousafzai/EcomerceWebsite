import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";

export default function Header() {
    return (
        <header className="w-screen bg-white h-20 fixed top-0 z-50">
            <div className="container mx-auto flex items-center h-full p-4">
                <div className="flex items-center gap-32">
                    <h1 className="font-bold text-[32px] leading-[22px]"><Link href="/SHOP.CO"></Link></h1>
                    <ul className="flex gap-5 text-black opacity-80 text-lg w-max">
                        <li className="relative hover:text-blue-500 cursor-pointer flex items-center">
                            <select className="bg-transparent border-none focus:outline-none cursor-pointer w-20 text-lg">
                                <option > Shop</option>
                            
                            </select>
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer"> <Link href="/onsale" > On Sale</Link> </li>
                        <li className="hover:text-blue-500 cursor-pointer">New Arrivals</li>
                        <li className="hover:text-blue-500 cursor-pointer">Brands</li>
                    </ul>
                </div>
                <div className="flex items-center gap-8 w-full justify-end">
                    <div className="relative w-full max-w-xl min-w-[300px]">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaSearch className="text-black opacity-40"/>
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border text-black opacity-40 bg-[#F0F0F0] border-gray-300 rounded-full focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <ShoppingCart className="text-xl font-black text-gray-700 hover:text-blue-500 cursor-pointer" />
                        <RiAccountCircleLine className="text-2xl font-black text-gray-700 hover:text-blue-500 cursor-pointer" />
                    </div>
                </div>
            </div>
        </header>
    );
}
