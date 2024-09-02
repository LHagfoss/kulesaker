"use client"

import Image from "next/image";
import { motion, easeInOut, easeIn } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import Navbar from "@/components/navbar";

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
      <Navbar currentPage="home" />
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className=""></div>
      </div>
    </motion.div>
  );
}