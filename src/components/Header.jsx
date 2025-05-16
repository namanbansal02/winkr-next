// components/Header.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Image from 'next/image';

const Header = () => {
  const [isSmallHeader, setIsSmallHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSmallHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 top-0 left-1/2 transform -translate-x-1/2 border-b-2 border-gray-800 bg-transparent transition-all duration-300 ease-in-out ${
        isSmallHeader
          ? "flex justify-center items-center h-16 w-[90vw] sm:w-[70vw] lg:w-[50vw] glass-container rounded-full top-5"
          : "flex justify-center h-20 w-full py-5"
      }`}
      style={{ borderRadius: isSmallHeader ? "50px" : "0" }}
    >
      <div className="flex justify-between items-center w-full px-4">
        <Link href="/" className="text-white text-base sm:text-lg font-bold">
          <img
            src="/winkr-logo-min.svg"
            alt="Winkr Logo"
            loading="lazy"
            className={`transition-all duration-300 ease-in-out ${
              isSmallHeader
                ? "h-6 w-20 sm:h-6 sm:w-20"
                : "h-6 w-24 sm:h-6 sm:w-28"
            }`}
          />
        </Link>

        <div className="flex items-center">
          <button
            className={`bg-white text-gray-700 flex items-center justify-around border border-[#dadce0] rounded-full hover:bg-gray-300 hover:shadow-sm transition-all duration-300 ease-in-out cursor-pointer ${
              isSmallHeader
                ? "h-8 text-sm w-8"
                : "h-8 w-8 text-sm sm:w-8 md:w-48 sm:h-10"
            }`}
            onClick={() => window.location.href = "/login"} // example redirect
          >
            <FcGoogle className="w-6 h-6" />
            {!isSmallHeader && (
              <span className="hidden md:inline">Continue with Google</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
