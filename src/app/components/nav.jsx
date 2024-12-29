import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <nav className="p-6 flex items-center justify-between md:px-[110px] md:bg-navbg">
      <div className="flex items-center justify-between gap-2">
        <Image
          src="logo.svg"
          width={22}
          height={100}
          alt="lumber logo"
          priority
        />
        <p className="text-3xl text-white md:text-4xl font-[family-name:var(--font-ribeye)]">Lumber</p>
      </div>

      <div className="xl:hidden">
        <Image
          src="menu.svg"
          width={27}
          height={100}
          alt="open menu"
          priority
        />
      </div>

      {/* medium screen nav */}
      <div className="hidden xl:flex text-links text-lg leading-[18px] gap-6">
        <div className="flex items-center justify-between gap-[33px]">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Resources</a>
          <a href="">Contact</a>
        </div>

        <div className="flex items-center justify-between gap-6">
          <a
            href=""
            className="bg-white py-[18px] px-6 rounded-[30px] font-bold"
          >
            Login
          </a>
          <a
            href=""
            className="text-white bg-links px-6 py-[18px] rounded-[30px] font-bold"
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}