// app/components/HeroSection.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroCarousel } from './HeroCarousel';
import { EarlyAccessModal } from '../common/EarlyAccessModal';
import { WaitlistModal } from '../common/WaitlistModal';

export function HeroSection() {
  return (
    <section className="relative " id="home">
      <div className="w-full lg:w-[1240px] mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between py-10 sm:py-20 flex-wrap lg:flex-nowrap relative z-20">
          <div
            className="w-full lg:w-[644px]"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div
              className="inline-flex items-center bg-[#0A0A0A0A] rounded-full ps-2 pe-4 py-1 space-x-3 lg:h-[40px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex -space-x-2">
                <div className="w-7 h-7 bg-[#D9D9D9] rounded-full border border-white">
                  <Image
                    src="/img/avatar/1.png"
                    width={32}
                    height={32}
                    alt=""
                  />
                </div>
                <div className="w-7 h-7 bg-[#D9D9D9] rounded-full border border-white">
                  <Image
                    src="/img/avatar/2.png"
                    width={32}
                    height={32}
                    alt=""
                  />
                </div>
                <div className="w-7 h-7 bg-[#D9D9D9] rounded-full border border-white">
                  <Image
                    src="/img/avatar/3.png"
                    width={32}
                    height={32}
                    alt=""
                  />
                </div>
              </div>
              <p className="text-16 font-medium text-[#1F1F1F]">
                2500+ beta registrations – Join the movement
              </p>
            </div>
            <h1
              className=" text-49 lg:text-61 font-rethink_Sans font-bold text-[#1F1F1F] leading-[70px] my-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Your Health, <br /> One Intuitive Space.
            </h1>
            <p className="text-20 font-inter font-normal text-[#1F1F1F] leading-[30px]">
              niiGma unites mind, body, nutrition, and hormonal wellness <br />{' '}
              —so you can live clearer, lighter, and in sync.
            </p>

            <div
              className="flex items-center space-x-3 my-10 "
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <EarlyAccessModal />
              <WaitlistModal />
            </div>
          </div>
          <div
            className="w-full lg:w-[597.95px] flex justify-end relative z-10 mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <HeroCarousel />
          </div>
        </div>
      </div>
      <div className=" absolute -bottom-14 lg:-top-20 right-0">
        <Image
          src="/img/shape/1.png"
          width={670}
          height={651}
          alt=""
          className=" blur-[2px]"
        />
      </div>
    </section>
  );
}
