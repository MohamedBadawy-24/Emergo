"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Navbar Links */}
          <ul className="hidden md:flex gap-x-8 text-white font-semibold">
            <li className="hover:text-indigo-300 transition-colors duration-300">
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li className="hover:text-indigo-300 transition-colors duration-300">
              <Link href="/model">
                <p>Services</p>
              </Link>
            </li>
            <li className="hover:text-indigo-300 transition-colors duration-300">
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>

          {/* User Authentication Buttons */}
          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <button className="bg-white text-blue-500 py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition duration-300">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
