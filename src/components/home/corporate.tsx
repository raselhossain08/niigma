import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { EarlyAccessModal } from '../common/EarlyAccessModal';
import { WaitlistModal } from '../common/WaitlistModal';

export default function Corporate() {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(227, 247, 255, 0) 0%, #E3F7FF 100%);',
      }}
      className="pt-16 pb-8"
      id="corporate"
    >
      <div className="w-full lg:w-[1240px] mx-auto relative z-10 px-5 lg:px-0">
        <div className="w-full lg:w-[664px] mx-auto text-center">
          <div
            className="w-[101px] h-[42px] rounded-full flex items-center justify-center text-[#0BA7E3] font-inter text-16 font-medium bg-[#DBF5FF99] mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>Corporate</p>
          </div>
          <p
            className="font-inter font-normal text-16 leading-[150%] text-black my-4 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join forward-thinking organizations optimizing employee well-being
            and performance with niiGma’s integrated health platform—smarter
            tools for stress, symptom, cycle, and calorie tracking.{' '}
          </p>
          <h3
            className="font-inter font-medium text-16 leading-[150%] text-black mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            To explore corporate partnerships, reach us at{' '}
          </h3>
          <h4
            className="text-[#0BA7E3] font-medium text-16 leading-[150%] mb-14"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            info@niigmai.com
          </h4>
          <Image
            src="/img/corporate/1.svg"
            alt="Corporate Image"
            width={387.41}
            height={68}
            className=" mx-auto lg:w-[387px] h-auto w-[211px]"
            data-aos="zoom-in"
            data-aos-delay="500"
          />
          <div
            className="flex items-center space-x-3 justify-center my-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <WaitlistModal />
            <EarlyAccessModal />
          </div>
        </div>
      </div>
    </div>
  );
}
