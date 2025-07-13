'use client';

import { Header } from '@/components/common/header';
import Corporate from '@/components/home/corporate';
import FeaturesSection from '@/components/home/FeaturesSection';
import { HeroSection } from '@/components/home/HeroSection';
import Trivia from '@/components/home/Trivia';
import WhyNiigma from '@/components/home/whyNiigma';
import { useScrollToHash } from '@/lib/scrollUtils';

export default function Home() {
  useScrollToHash();

  return (
    <div className="overflow-hidden">
      <Header />
      <HeroSection />
      <WhyNiigma />
      <FeaturesSection />
      <Trivia />
      <Corporate />
    </div>
  );
}
