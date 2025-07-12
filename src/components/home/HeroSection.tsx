// app/components/HeroSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "./HeroCarousel";

export function HeroSection() {
  return (
    <section className="relative ">
      <div className="w-[1240px] mx-auto">
        <div className="flex items-center justify-between py-20">
          <div className="w-[644px]">
            <div className="inline-flex items-center bg-[#0A0A0A0A] rounded-full ps-2 pe-4 py-1 space-x-3 h-[40px]">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 bg-[#D9D9D9] rounded-full border border-white" />
                <div className="w-7 h-7 bg-[#D9D9D9] rounded-full border border-white" />
                <div className="w-7 h-7 bg-[#D9D9D9] rounded-full border border-white" />
              </div>
              <p className="text-16 font-medium text-[#1F1F1F]">
                2500+ beta registrations – Join the movement
              </p>
            </div>
            <h1 className="text-61 font-rethink_Sans font-bold text-[#1F1F1F] leading-[70px] my-6">
              Your Health, <br /> One Intuitive Space.
            </h1>
            <p className="text-20 font-inter font-normal text-[#1F1F1F] leading-[30px]">
              niiGma unites mind, body, nutrition, and hormonal wellness <br />{" "}
              —so you can live clearer, lighter, and in sync.
            </p>

            <div className="flex items-center space-x-3 my-10">
              <Button
                variant="outline"
                className="w-[152px] h-[56px] font-semibold text-16 rounded-full border-cs1 text-cs1 hover:bg-blue-50 transition-colors duration-200"
              >
                Join Waitlist
              </Button>
              <Button className="w-[152px] h-[56px] font-semibold text-16 rounded-full bg-cs1 hover:bg-cs1 transition-colors duration-200 text-white">
                Join Beta
              </Button>
            </div>
          </div>
          <div className="w-[597.95px] flex justify-end relative z-10">
            <HeroCarousel/>
          </div>
        </div>
      </div>
      <div className=" absolute -top-20 right-0">
        <Image src="/img/shape/1.png" width={670} height={651} alt="" />
      </div>
    </section>
  );
}
