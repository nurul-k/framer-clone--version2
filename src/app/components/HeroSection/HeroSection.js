'use client';
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";

export const HeroSection = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // if scroll > 0, make it sticky
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={isSticky ? 'header sticky' : 'header'}> <Navbar/>
    </header>
  )
}