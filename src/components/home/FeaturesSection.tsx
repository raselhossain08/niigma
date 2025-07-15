import Image from 'next/image';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
const steps = [
  {
    step: 'STEP 1',
    title: 'OvuNova',
    subtitle: 'Detects luteal phase',
    icon: (
      <Image
        src="/icons/feature1.svg"
        alt="Feature 1"
        width={41}
        height={41}
        className="w-[21.14px] lg:w-[41px] h-auto "
      />
    ),
    bgColor: 'bg-red-50',
  },
  {
    step: 'STEP 2',
    title: 'MoodMana',
    subtitle: 'Logs Low energy+irrit',
    icon: (
      <Image
        src="/icons/feature2.svg"
        alt="Feature 1"
        width={41}
        height={41}
        className="w-[21.14px] lg:w-[41px] h-auto "
      />
    ),
    bgColor: 'bg-green-50',
  },
  {
    step: 'STEP 3',
    title: 'CalTraker',
    subtitle: 'Suggests iron rich food',
    icon: (
      <img
        src="/icons/feature3.svg"
        alt="Feature 1"
        className="w-[21.14px] lg:w-[41px] h-auto md:object-contain rounded-[4px]  md:rounded-[10px]"
      />
    ),
    bgColor: 'bg-blue-50',
  },
  {
    step: 'STEP 4',
    title: 'Result',
    subtitle: '',
    icon: (
      <Image
        src="/icons/feature4.svg"
        alt="Feature 1"
        width={41}
        height={41}
        className="w-[21.14px] lg:w-[41px] h-auto "
      />
    ),
    bgColor: 'bg-orange-50',
  },
];
export default function FeaturesSection() {
  return (
    <div className=" relative pt-20 lg:pt-32" id="features">
      <div className="w-full px-5 lg:px-0 lg:w-[1240px] mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div
            className="w-[101px] h-[42px] rounded-full flex items-center justify-center text-[#0BA7E3] font-inter text-16 font-medium bg-[#DBF5FF99]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>Features</p>
          </div>
          <h2
            className="text-center font-rethink_Sans font-bold text-49 leading-[120%] mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            How <span className="text-[#0BA7E3]">niiGma's features</span> work
            <br /> better together?
          </h2>

          <p
            className="text-[#1F1F1F] font-inter font-medium text-20 text-center lg:w-[758px] mx-auto w-full my-5 lg:my-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            When you log data in any niiGma feature, that information instantly
            becomes part of a unified puzzle
          </p>
        </div>
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap">
          <div
            className="w-[279px] sm:w-full lg:w-[501px] py-8 lg:py-0 flex justify-center flex-col mx-auto"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="flex w-full items-start justify-between  relative">
              <Image
                src="/img/feature/3.svg"
                alt="Feature Image"
                width={245.94}
                height={205}
                className="w-[120px] h-auto sm:w-[245.94px]"
                data-aos="fade-up"
                data-aos-delay="500"
                quality={100}
              />
              <Image
                src="/img/feature/4.svg"
                alt="Feature Image"
                width={225.06}
                height={205}
                className="w-[120px] h-auto sm:w-[225.06px] "
                data-aos="fade-up"
                data-aos-delay="600"
                quality={100}
              />
            </div>
            <div className="  flex items-center justify-center ps-6 sm:ps-12">
              <p
                className="text-center text-[#0BA7E3] font-bold text-20 sm:text-26"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                niiGma
              </p>
            </div>
            <div className="flex w-full items-end justify-between ">
              <Image
                src="/img/feature/5.svg"
                alt="Feature Image"
                width={268.94}
                height={205}
                className="w-[140px]  sm:w-[268.94px] h-auto"
                quality={100}
              />
              <Image
                src="/img/feature/6.svg"
                alt="Feature Image"
                width={222}
                height={205}
                className="w-[120px]  sm:w-[222px] h-auto"
                data-aos="fade-up"
                data-aos-delay="900"
                quality={100}
              />
            </div>
          </div>
          <div
            className="w-full lg:w-[593px] py-8 lg:py-0"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <h3
              className=" text-center font-inter font-bold text-25 leading-[150%] text-[#1F1F1F] mb-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Meet Maya's Case Study
            </h3>
            <div className="flex justify-between items-start pt-3">
              <div className="w-[47%] lg:w-[250px] flex flex-col items-center justify-center ">
                <Image
                  src="/img/feature/2.svg"
                  alt="Feature 1"
                  width={134}
                  height={134}
                  className=""
                  data-aos="zoom-in"
                  data-aos-delay="700"
                />
                <div className="flex flex-col items-center  pt-4 w-full">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-0 w-full lg:w-[280px]"
                      data-aos="fade-up"
                      data-aos-delay={400 + index * 100}
                    >
                      <Card
                        className={`w-full ${step.bgColor} rounded-[20px] p-4 lg:px-[18px] lg:py-[12px] justify-start gap-0`}
                      >
                        <CardHeader className="mb-0 px-0">
                          <CardTitle className="text-[6.17px]  lg:text-12 text-[#929495] font-inter font-medium">
                            {step.step}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center space-x-3 px-0 lg:pt-2">
                          {step.icon}
                          <div className=" ">
                            <p className="font-inter  lg:leading-[24px] text-[9.25px] lg:text-18 text-[#1F1F1F] font-[600]">
                              {step.title}
                            </p>
                            {step.subtitle && (
                              <p className="text-[#1F1F1F] font-inter  text-[8.22px] lg:text-16 lg:leading-[24px] font-normal">
                                {step.subtitle}
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                      {index < steps.length - 1 && (
                        <Image
                          src="/icons/longArrow.svg"
                          alt="Arrow"
                          width={24}
                          height={24}
                          className="my-4 h-[25px] lg:h-[34px]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="w-[47%] lg:w-[300px] pt-3 lg:pt-0"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div
                  className="h-[120px] lg:h-[147px] mt-5"
                  data-aos="fade-up"
                  data-aos-delay="850"
                >
                  <p className="font-semibold text-[10.95px] lg:text-lg mb-[5px]">
                    Maya
                  </p>
                  <p className="text-[9.86px] font-inter font-medium lg:text-18 mb-1">
                    Age: 27
                  </p>
                  <p className="font-inter font-[600] text-[9.86px] lg:text-18">
                    Current Phase:
                    <span className="text-black ps-1 font-medium">Late luteal</span>
                  </p>
                </div>
                <div
                  className="lg:h-[80px] py-4 lg:pt-0 lg:pb-5 "
                  data-aos="fade-up"
                  data-aos-delay="950"
                >
                  <h3 className="text-[10.95px] font-bold lg:text-20 lg:leading-[150%]">
                    OvuNova detects luteal phase
                  </h3>
                  <p className="text-[10.95px] lg:text-18 leading-[24px] text-[#1F1F1F] lg:my-1">
                    Maya is 2 days from her flow
                  </p>
                </div>
                <Image
                  src="/icons/longArrow.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="mt-2 h-[25px] lg:h-[34px]  last:h-[54px] my-6 "
                  data-aos="fade-right"
                  data-aos-delay="900"
                />

                <div
                  className="lg:h-[80px] mt-10 lg:mt-0 lg:mb-5"
                  data-aos="fade-up"
                  data-aos-delay="1050"
                >
                  <h3 className="text-[10.95px]  font-bold lg:text-20 leading-[150%]">
                    MoodMana
                  </h3>
                  <p className="text-[10.95px] lg:text-18 leading-[24px] text-[#1F1F1F] lg:my-1">
                    logs low energy/mood, in the afternoon
                  </p>
                </div>
                <Image
                  src="/icons/longArrow.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="my-5 h-[25px] lg:h-[34px]  last:h-[54px]"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                />

                <div
                  className=" flex items-center space-x-4  w-full"
                  data-aos="fade-up"
                  data-aos-delay="1100"
                >
                  <Image
                    src="/icons/feature5.svg"
                    alt="Arrow"
                    width={75}
                    height={75}
                    className="mt-2 w-[41.08px] h-auto lg:w-[75] lg:h-[75px]"
                    data-aos="zoom-in"
                    data-aos-delay="1200"
                  />
                  <div
                    className=" w-[240px]"
                    data-aos="fade-left"
                    data-aos-delay="1250"
                  >
                    <h3 className="font-bold text-[10.95px] lg:text-20 leading-[150%]">
                      Detects cycle related pattern
                    </h3>
                    <p className="text-[10.95px] lg:text-18 leading-[24px] text-[#1F1F1F] my-1">
                      logs low energy/mood, in the afternoon
                    </p>
                  </div>
                </div>
                <Image
                  src="/icons/longArrow.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="mt-5 mb-5 lg:my-5 h-[25px] lg:h-[34px]"
                  data-aos="fade-right"
                  data-aos-delay="1300"
                />
                <div
                  className=" flex items-center space-x-4 w-full"
                  data-aos="fade-up"
                  data-aos-delay="1400"
                >
                  <Image
                    src="/icons/feature6.svg"
                    alt="Arrow"
                    width={32}
                    height={32}
                    className="mt-2 h-[32px]"
                    data-aos="zoom-in"
                    data-aos-delay="1500"
                  />
                  <div
                    className=" w-[240px]"
                    data-aos="fade-left"
                    data-aos-delay="1550"
                  >
                    <h3 className="font-bold text-[10.95px] lg:text-20 leading-[150%]">
                      Maya feels seen
                    </h3>
                    <p className="text-[10.95px] lg:text-18 lg:leading-[24px] text-[#1F1F1F] my-1">
                      niiGma connected the dots without her knowing the
                      underlying science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-12">
          <p
            className="text-[#1F1F1F] font-inter font-medium text-16 lg:text-24 text-center lg:leading-[36px] lg:w-[845px] mx-auto w-full"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            Every log you make fuels smarter advice everywhere else. That's how
            niiGma turns isolated data points into actionable, whole-person
            insights
          </p>
        </div>{' '}
      </div>
      <div
        className=" absolute top-0 right-0"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <Image
          src="/img/feature/effect1.png"
          alt="Feature Section Background"
          width={913}
          height={913}
          className="w-full h-auto object-cover"
        />
      </div>
      <div
        className=" absolute top-0 right-0 left-0 bottom-0 h-full flex items-center justify-center"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <Image
          src="/img/feature/effect2.png"
          alt="Feature Section Background"
          width={692}
          height={692}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
