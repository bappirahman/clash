import React from "react";
import Image from "next/image";
import banner from "@/public/banner.svg";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import Logo from "./Logo";

function HeroSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div>
        <Image src={banner} alt="Banner image" />
      </div>
      <div className="text-center">
        <Logo className="text-6xl md:text-7xl lg:text-8xl" />
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Discover the better choice together
        </p>
        <Link href={"/login"}>
          <Button>Start now</Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
