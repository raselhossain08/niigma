// app/types/CarouselItem.ts

import { StaticImageData } from "next/image";

export interface CarouselItemData {
  id: number;
  mainImage: {
    src: string | StaticImageData;
    width: number;
    height: number;
    alt: string;
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
  topLeftImage?: {
    src: string | StaticImageData;
    width: number;
    height: number;
    alt: string;
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
  bottomRightImage?: {
    src: string | StaticImageData;
    width: number;
    height: number;
    alt: string;
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
  topLeftArrow?: {
    src: string | StaticImageData;
    width: number;
    height: number;
    alt: string;
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
  bottomRightArrow?: {
    src: string | StaticImageData;
    width: number;
    height: number;
    alt: string;
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
}

// Example object based on the provided JSX with custom positions
export const carouselItemData: CarouselItemData[] = [
  {
    id: 0,
    mainImage: {
      src: "/img/hero/1.png",
      width: 394.04,
      height: 611.81,
      alt: "",
    },
    topLeftImage: {
      src: "/img/hero/slide/1.svg",
      width: 221.61,
      height: 78,
      alt: "",
      top: "top-24",
      left: "left-14",
    },
    bottomRightImage: {
      src: "/img/hero/slide/2.svg",
      width: 221.61,
      height: 78,
      alt: "",
      bottom: "bottom-20",
      right: "right-10",
    },
    topLeftArrow: {
      src: "/img/hero/arrowLeft.svg",
      width: 82.91,
      height: 34.67,
      alt: "",
      top: "top-54",
      left: "left-32",
    },
    bottomRightArrow: {
      src: "/img/hero/arrowRight.svg",
      width: 82.91,
      height: 34.67,
      alt: "",
      bottom: "bottom-44",
      right: "right-20",
    },
  },
  {
    id: 1,
    mainImage: {
      src: "/img/hero/2.png",
      width: 394.04,
      height: 611.81,
      alt: "",
    },
    topLeftImage: {
      src: "/img/hero/slide/3.svg",
      width: 221.61,
      height: 78,
      alt: "",
      top: "top-24",
      left: "left-10",
    },
    bottomRightImage: {
      src: "/img/hero/slide/4.svg",
      width: 221.61,
      height: 78,
      alt: "",
      bottom: "bottom-7",
      right: "right-5",
    },
    topLeftArrow: {
      src: "/img/hero/arrowLeft.svg",
      width: 82.91,
      height: 34.67,
      alt: "",
      top: "top-50",
      left: "left-32",
    },
    bottomRightArrow: {
      src: "/img/hero/arrowRight.svg",
      width: 82.91,
      height: 34.67,
      alt: "",
      bottom: "bottom-40",
      right: "right-20",
    },
  },
  {
    id: 2,
    mainImage: {
      src: "/img/hero/3.png",
      width: 394.04,
      height: 611.81,
      alt: "",
    },
    topLeftImage: {
      src: "/img/hero/slide/5.svg",
      width: 221.61,
      height: 78,
      alt: "",
      top: "top-24",
      left: "left-10",
    },
    bottomRightImage: {
      src: "/img/hero/slide/6.svg",
      width: 221.61,
      height: 78,
      alt: "",
      bottom: "bottom-12",
      right: "right-5",
    },
    topLeftArrow: {
      src: "/img/hero/arrowLeft.svg",
      width: 82.91,
      height: 34.67,
      alt: "",
      top: "top-50",
      left: "left-32",
    },
    bottomRightArrow: {
      src: "/img/hero/arrowRight.svg",
      width: 82.91,
      height: 34.67,
      alt: "",
      bottom: "bottom-40",
      right: "right-20",
    },
  },
  {
    id: 3,
    mainImage: {
      src: "/img/hero/4.png",
      width: 394.04,
      height: 611.81,
      alt: "",
    },
    topLeftImage: {
      src: "/img/hero/slide/7.svg",
      width: 221.61,
      height: 78,
      alt: "",
      top: "top-24",
      left: "left-10",
    },
    bottomRightImage: {
      src: "/img/hero/slide/8.svg",
      width: 221.61,
      height: 78,
      alt: "",
      bottom: "bottom-12",
      right: "right-5",
    },
    topLeftArrow: {
      src: "/img/hero/arrowLeft.svg",
      width: 82.91,
      height: 34.67,
      alt: "",
      top: "top-60",
      left: "left-28",
    },
    bottomRightArrow: {
      src: "/img/hero/arrowRight.svg",
      width: 82.91,
      height: 34.67,
      alt: "",
      bottom: "bottom-45",
      right: "right-20",
    },
  },
];
