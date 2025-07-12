import Image from "next/image";
import React from "react";

export default function WhyNiigma() {
  return (
    <div className=" relative py-16">
      <div className="w-[1107px] mx-auto relative z-10">
        <h1 className=" text-49 text-[#0BA7E3] font-bold font-rethink_Sans text-center">
          Why niiGma?
        </h1>
        <h3 className=" text-31 text-[#1F1F1F] font-bold font-rethink_Sans text-center">
          The Power of Unified Health Intelligence
        </h3>
        <div className="flex items-center py-10 ">
          <Image
            src="/img/why/1.svg"
            width={450.81}
            height={365.49}
            alt=""
            className="relative z-10"
          />
          <Image
            src="/img/why/2.svg"
            width={322}
            height={81}
            alt=""
            className=" relative -left-10"
          />
          <Image src="/img/why/3.svg" width={380.1} height={535} alt="" />
        </div>
        <div className="flex w-[1107px] mx-auto items-center justify-center">
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
