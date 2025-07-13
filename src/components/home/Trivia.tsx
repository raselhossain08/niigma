"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { EarlyAccessModal } from '../common/EarlyAccessModal';

export default function Trivia() {
    useEffect(() => {
      if (!document.querySelector('script[src*="tally.so/widgets/embed.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }, []);
  
  return (
    <div className="pt-16" id="trivia">
      <div className="w-full lg:w-[1240px] mx-auto relative z-10 px-5 lg:px-0">
        <div className="flex w-full items-center justify-between flex-wrap lg:flex-nowrap">
          <div
            className="w-full lg:w-[536.07px] mb-20 lg:mb-0 flex justify-center lg:justify-start"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Image
              src="/img/trivia/1.png"
              width={536.07}
              height={659.87}
              alt="Trivia"
            />
          </div>
          <div
            className="w-full lg:w-[558px]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="mb-4 lg:mb-0 w-[100px] h-[42px] bg-[#DBF5FF99] rounded-full text-[#0BA7E3] font-inter font-medium text-16 leading-[30px] flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span>Trivia</span>
            </div>
            <h1
              className="text-[#1F1F1F] text-39 lg:text-49 font-rethink_Sans font-bold leading-[120%] mt-4 mb-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Meet Nimbus 🎮: <br /> Your Health, Gamified
            </h1>
            <p className=" font-inter font-normal text-16 leading-[26px] text-black my-4">
              Turn everyday wellness into a game with bite-sized health trivia.
              Backed by real data. Rewarded with real perks.
            </p>
            <p className="font-inter font-normal text-16 leading-[36px] text-black mb-4">
              ✅ Earn points for answering <br /> ✅ Unlock badges & hidden
              rewards <br /> ✅ Compete with friends or beat your streak <br />
              ✅ Learn more about your body—1 question at a time
            </p>
            <h3 className="font-inter font-[600] text-24 leading-[36px] text-black mb-4">
              Why just track health when you can play your way to better habits?
            </h3>
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
              <button
                data-tally-open="nr96xL" // Replace with your real form ID
                data-tally-layout="modal"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
                data-tally-form-events-forwarding="1"
                className="font-bold text-16 leading-[30px] underline text-black cursor-pointer hover:text-cs1 transition-colors"
              >
                Join Beta
              </button>

              <p className=" font-bold text-16 leading-[30px]  text-black">
                Be one of the first to meet Nimbus.
              </p>
            </div>
            <p className="font-inter font-normal text-16 leading-[30px] text-black">
              🎉 Fun, science, and personalized insights — all in one
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
