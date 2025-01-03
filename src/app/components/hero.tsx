import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative">
        <img
          src="/Images/bg1.webp"
          alt=""
          className="brightness-50 h-[100vh] w-full "
        />
      </div>
      <div className="absolute inset-0 flex justify-center flex-col items-center gap-y-8 bg--400 w-[50%] h-auto mx-auto">
        <h1 className="max-sm:text-3xl  text-5xl   text-center bg--600  mx-4  leading-relaxed text-gray-200">
          Find Your Signature Look with Our Exclusive Makeup Range
        </h1>

        <button className="text-sm md:text-xl text-white border-2 px-3 sm:px-5 py-3 rounded-xl bg-[rgba(0,0,0,0.7)] hover:text-black hover:bg-[rgba(255,255,255,0.7)] transition duration-500 ">
          <Link href="/allproducts"> Discover Your Glow</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
