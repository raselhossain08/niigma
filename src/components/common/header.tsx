// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/features", label: "Features" },
  { href: "/corporate", label: "Corporate" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[60px] md:h-[88px] sticky top-0 z-50 bg-[#FFFFFF1A] border-b border-[#F0F0F0] backdrop-blur-3xl">
      <div className="lg:w-[1240px] mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/img/logo.svg"
            width={169}
            height={29}
            alt="logo"
            className="w-[124px] sm:w-[169px] h-auto "
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-16 font-medium text-black">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-cs1 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
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

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="link" className="lg:hidden ">
              <Image src="/icons/menu.svg" width={24} height={24} alt="" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] transition-all duration-300 ease-in-out p-8"
          >
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="outline"
                className="w-full h-[56px] font-semibold text-16 rounded-full border-cs1 text-cs1 hover:bg-blue-50 transition-colors duration-200"
              >
                Join Waitlist
              </Button>
              <Button className="w-full h-[56px] font-semibold text-16 rounded-full bg-cs1 hover:bg-cs1 transition-colors duration-200 text-white">
                Join Beta
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
