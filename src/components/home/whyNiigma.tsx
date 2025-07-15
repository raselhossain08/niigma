import Image from 'next/image';
import React from 'react';

export default function WhyNiigma() {
  return (
    <div className=" relative py-16" id="how-it-works">
      <div className="w-full px-5 lg:px-0 lg:w-[1107px] mx-auto relative z-10">
        <h1
          className="text-39 sm:text-49 text-[#0BA7E3] font-bold font-rethink_Sans text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Why niiGma?
        </h1>
        <h3
          className=" text-31 text-[#1F1F1F] font-bold font-rethink_Sans text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The Power of Unified Health Intelligence
        </h3>
        <div className="flex items-center py-10 lg:flex-row flex-col">
          <Image
            src="/img/why/1.svg"
            width={450.81}
            height={365.49}
            alt=""
            className="relative z-10"
            data-aos="fade-right"
            data-aos-delay="300"
            priority
            quality={100}
          />
          <Image
            src="/img/why/2.svg"
            width={322}
            height={322}
            alt=""
            className=" rotate-90 lg:rotate-0 relative top-20 lg:top-0 lg:-left-10 w-[322px] h-auto"
            data-aos="zoom-in"
            data-aos-delay="500"
            priority
            quality={100}
          />
          <Image
            src="/img/why/3.png"
            width={380}
            height={380}
            alt=""
            className="mt-44 lg:mt-0 w-[380.1px] h-auto object-contain"
            data-aos="fade-left"
            data-aos-delay="400"
            priority
            quality={100}
          />
        </div>
        <div className="flex w-full lg:w-[1107px] mx-auto items-center justify-center">
          <p className=" text-[#1F1F1F] font-medium text-20 w-[849px] text-center">
            Why juggle four different apps when one intelligent ecosystem can do
            it all? niiGma unifies yourhealth journey - connecting calories,
            cycles, mood, and symptoms into one seamless experience
          </p>
        </div>
      </div>
      <div className=" absolute  bottom-0 left-0 top-0 flex items-center justify-end right-0">
        <Image
          src="/img/why/1.png"
          width={913}
          height={913}
          alt=""
          className="mx-auto w-[700px] h-[350px]"
        />
      </div>
      <div className=" absolute  bottom-[-30%] left-0">
        <Image
          src="/img/why/2.png"
          width={913}
          height={913}
          alt=""
          className="mx-auto w-[700px] h-[350px]"
        />
      </div>
    </div>
  );
}
