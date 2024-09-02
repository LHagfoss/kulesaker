"use client"

import Image from "next/image";
import { motion, easeInOut, easeIn } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import Navbar from "@/components/navbar";

import century1 from "@/assets/century1.png"
import century2 from "@/assets/century2.png"
import century3 from "@/assets/century3.png"
import century4 from "@/assets/century4.png"
import century5 from "@/assets/century5.png"

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis();
    lenisRef.current = lenis;
    
    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
        lenis.destroy();
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, ease: easeInOut, duration: 0.8 }}
      className="w-[100vw] h-[100vh] bg-black"
    >
      <Navbar currentPage="projects" />
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-[60vw] h-[50vw] grid grid-cols-6 grid-rows-6 gap-5 mt-[4vw]">
          <div className="col-span-2 row-span-3 bg-[#222] border border-[#333] rounded-[2vw] p-5 flex">
            <div className="flex-1 flex rounded-[1.5vw] overflow-hidden bg-white">
              <Image src={century1} alt="" className="object-contain"></Image>
            </div>
          </div>
          <div className="col-span-4 row-span-3 bg-[#222] border border-[#333] rounded-[2vw] p-5 flex">
            <div className="flex-1 flex rounded-[1.5vw] overflow-hidden">
              <motion.div 
                initial={{ y: 500 }}
                animate={{ y: [100, 0] }}
                transition={{ ease: easeInOut, delay: 0.5, repeat: Infinity, duration: 2 }}
              >
                <Image src={century3} alt="" className="rounded-[1.5vw] object-cover"></Image>
                <Image src={century4} alt="" className="rounded-[1.5vw] object-cover"></Image>
              </motion.div>
            </div>
          </div>
          <div className="col-span-4 row-span-3 bg-[#222] border border-[#333] rounded-[2vw] p-5 flex">
            <div className="flex-1 flex rounded-[1.5vw] overflow-hidden">
                <Image src={century5} alt="" className="object-cover"></Image>
            </div>
          </div>
          <div className="col-span-2 row-span-2 bg-[#222] border border-[#333] rounded-[2vw] p-5 flex">
            <div className="flex-1 flex flex-col rounded-[1.5vw] overflow-hidden p-5">
                <div className="text-white text-[1.5vw]">Toyota Century</div>
                <ul className="flex flex-col text-white pl-6">
                  <li className="list-disc">V12 Motor</li>
                  <li className="list-disc">Håndlagd i Japan</li>
                  <li className="list-disc">Brukt som president bil</li>
                  <li className="list-disc">Må være på venteliste for å kjøpe ny</li>
                </ul>
            </div>
          </div>
          <div className="col-span-2 row-span-1 bg-[#222] border border-[#333] rounded-[2vw] p-5 flex">
          <div className="flex-1 flex justify-center items-center flex-col rounded-[1.5vw] overflow-hidden p-5">
                <div className="text-white text-[1.5vw]">Lucas Hagfoss</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">

      </div>
    </motion.div>
  );
}