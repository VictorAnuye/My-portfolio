"use client"
import Image from "next/image";
// import Link from "next/link";
import mylogo from "@/app/public/mylogo.png"

const Navbar = () => {
    return (
        <div className="">
            <nav className="flex gap-2 justify-between bg-[#705C53] items-center px-6 h-16">
                <div className="flex justify-end">
                    <div>
                        <Image 
                        width={100}
                        height={100}
                        src={mylogo}
                        alt="brand logo"/>
                    </div>
                </div>

                <div className="flex justify-end gap-6">
                    <div className="flex text-white md:text-xl text-sm hover:text-[#B7B7B7] hover:scale-110 hover:shadow-lg transition duration-800">
                       <a href="#">Home</a>
                    </div>
                    <div className="flex text-white md:text-xl text-sm hover:text-[#B7B7B7] hover:scale-110 hover:shadow-lg transition duration-800">
                       <a href="#">About Us</a>
                    </div>
                    <div className="flex text-white md:text-xl text-sm hover:text-[#B7B7B7] hover:scale-110 hover:shadow-lg transition duration-800">
                        <a href="https://wa.link/ll7sld">Contact Us</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar
