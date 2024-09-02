import Image from "next/image"
import React from "react"
import { motion, easeInOut } from "framer-motion"
import Link from "next/link"

export default function Navbar() {


    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[60vw] flex justify-between items-center text-white">
                <div className=""></div>
                <div className="">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className="">
                    <button type="button" className="">Contact</button>
                    <button type="button" className=""></button>
                </div>
            </div>
        </div>
    )
}