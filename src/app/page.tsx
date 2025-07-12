import { Header } from "@/components/common/header";
import { HeroSection } from "@/components/home/HeroSection";
import WhyNiigma from "@/components/home/whyNiigma";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyNiigma/>
    </>
  );
}
