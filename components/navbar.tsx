import Image from "next/image"
import { motion, easeInOut } from "framer-motion"
import React from "react";
import Link from "next/link";

export default function Navbar({ currentPage }: { currentPage: string }) {
    return (
        <div className="navbar fixed w-full flex justify-center items-center">
            <div className="w-[60vw] mt-10 flex justify-between items-center text-white bg-[#0005] border border-[#444] backdrop-blur-[10px] p-4 rounded-full">
                <div className="flex">
                    <Link href="/" className={currentPage === "home" ? "active p-2 px-5" : "p-2 px-5"}>Home</Link>
                </div>
                <div className="flex gap-5">
                    <Link href="/projects" className={currentPage === "projects" ? "active p-2 px-5" : "p-2 px-5"}>Projects</Link>
                    <Link href="/about" className={currentPage === "about" ? "active p-2 px-5" : "p-2 px-5"}>About</Link>
                    <Link href="/contact" className={currentPage === "contact" ? "active p-2 px-5" : "p-2 px-5"}>Contact</Link>
                    <Link href="/shop" className={currentPage === "shop" ? "active p-2 px-5" : "p-2 px-5"}>Shop</Link>
                </div>
                <div className="flex gap-5">
                    <button type="button" className="font-bold p-2 px-5 rounded-full bg-white text-black">Contact</button>
                    <button type="button" className="font-bold p-2 px-5 border rounded-full">Contact</button>
                </div>
            </div>
        </div>
    );
}