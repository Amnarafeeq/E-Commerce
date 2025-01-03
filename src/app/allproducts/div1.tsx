import Link from "next/link";
import React from "react";
interface IProductsProps {
  img1: string;
  img2: string;
  img3: string;
  para: string;
  btnText: string;
  link: string;
}
const Div1 = ({ img1, img2, img3, para, btnText, link }: IProductsProps) => {
  return (
    <div className="bg--500 p-2 w-[80%] mx-auto sm:h-[100vh] flex max-md:flex-col md:justify-between my-6 border- ">
      <div className="sm:w-[60%] bg--400 h-full    flex flex-col justify-evenly items-center gap-y-3 my-2 ">
        <div className="w-[90%] h-[50%] bg--300 bg-slate-200 ">
          <img src={img1} alt="" className="w-full h-full p-3  " />
        </div>
        <div className="w-[90%] h-[45%] bg--300 flex justify-between">
          <img src={img2} alt="" className="w-[58%]  p-2 bg-gray-600" />
          <img src={img3} alt="" className="w-[38%]  p-2 bg-slate-200" />
        </div>
      </div>
      <div className="sm:w-[35%] bg--800 h-full flex flex-col justify-evenly items-center space-y-3 my-2 py-2 bg-[rgba(255,255,255,0.5)] border-2 border-black rounded-3xl shadow-lg text-">
        <p className="px-7 lg:px-14 text-lg  text-center md:text-2xl font-semibold text-slate-900">
          {para}
        </p>
        <Link href={link}>
          <button className="text-sm border border-black bg-[rgba(0,0,0,0.5)] px-6 py-3 rounded-xl  font-bold text-gray-100 hover:bg-[rgba(255,255,255,0.5)] hover:text-black transition duration-300 hover:scale-105">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Div1;
