import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3"
      >
        <img
          src="/logo-no-background1.png"
          alt="Logo"
          className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg"
        />
      </Link>
    </div>
  );
};

export default Logo;
