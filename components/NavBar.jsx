import Image from "next/image";
import React from "react";
import Icon from "@/public/icon.svg";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-start py-4 fixed w-screen bg-white/50 backdrop-blur-3xl top-0 z-50">
      <div className="flex items-start">
        <a href="#hero">
          <Image
            src={Icon}
            width={100}
            height={100}
            alt="Icon"
            className="w-[248px] h-[88px]"
          />
        </a>
      </div>
      <div className="flex items-center px-2">
        <div className="md:hidden flex flex-col items-center gap-1">
          <div className="w-4 h-1 bg-primary"></div>
          <div className="w-4 h-1 bg-primary"></div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <p className="text-primary hover:font-semibold transition-all duration-200">
            <a href="#problem">The Problem</a>
          </p>
          <p className="text-primary hover:font-semibold transition-all duration-200">
            <a href="#solution">Solution</a>
          </p>
          <p className="text-primary hover:font-semibold transition-all duration-200">
            <a href="#pricing">Pricing</a>
          </p>
          <p className="text-primary hover:font-semibold transition-all duration-200">
            <a href="#roadmap">Roadmap</a>
          </p>
          <Button className="px-6 py-2 bg-primary text-white font-bold cursor-pointer">
            Watch Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
