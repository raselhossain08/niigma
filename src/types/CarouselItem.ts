// app/types/CarouselItem.ts

import { StaticImageData } from 'next/image';

export interface CarouselItemData {
  id: number;
  mainImage: {
    src: string | StaticImageData;
    alt: string;
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
    w?: number;
    h?: number;
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
    cls?: string; // Optional class for additional styling
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
    cls?: string;
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
    cls?: string;
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
    cls?: string;
  };
}

// Example object based on the provided JSX with custom positions
export const carouselItemData: CarouselItemData[] = [
  {
    id: 0,
    mainImage: {
      src: '/img/hero/1.png',
      alt: '',
      w: 394.04,
      h: 611,
    },
    // topLeftImage: {
    //   src: '/img/hero/slide/1.svg',
    //   width: 221.61,
    //   height: 78,
    //   alt: '',
    //   top: 'top-12 sm:top-20',
    //   left: ' left-[-60px] sm:-left-[80px]',
    //   cls: 'w-[150px] h-auto sm:w-[221.61px] ',
    // },
    // bottomRightImage: {
    //   src: '/img/hero/slide/2.svg',
    //   width: 221.61,
    //   height: 78,
    //   alt: '',
    //   bottom: 'bottom-[30px] sm:bottom-[50px]',
    //   right: 'right-[-50px] sm:right-[-50px] ',
    //   cls: 'w-[150px] h-auto sm:w-[221.61px] ',
    // },
    topLeftArrow: {
      src: '/img/hero/arrowLeft.svg',
      width: 82.91,
      height: 34.67,
      alt: '',
      top: 'top-[130px] sm:top-[200px]',
      left: '-left-2 sm:-left-4',
      cls: 'w-[50px] h-auto sm:w-[82.91px] ',
    },
    bottomRightArrow: {
      src: '/img/hero/arrowRight.svg',
      width: 82.91,
      height: 34.67,
      alt: '',
      bottom: 'bottom-[98px] sm:bottom-[160px]',
      right: '-right-3 sm:right-[4px]',
      cls: 'w-[50px] h-auto sm:w-[82.91px] ',
    },
  },
  {
    id: 1,
    mainImage: {
      src: '/img/hero/2.png',
      alt: '',
      w: 394.04,
      h: 611,
    },
    topLeftImage: {
      src: '/img/hero/slide/3.svg',
      width: 221.61,
      height: 78,
      alt: '',
      top: 'top-12 sm:top-20',
      left: ' left-[-60px] sm:-left-[80px]',
      cls: 'w-[150px] h-auto sm:w-[221.61px] ',
    },
    bottomRightImage: {
      src: '/img/hero/slide/4.svg',
      width: 221.61,
      height: 78,
      alt: '',
      bottom: 'bottom-[30px] sm:bottom-[50px]',
      right: 'right-[-50px] sm:right-[-50px] ',
      cls: 'w-[150px] h-auto sm:w-[221.61px] ',
    },
    topLeftArrow: {
      src: '/img/hero/arrowLeft.svg',
      width: 82.91,
      height: 34.67,
      alt: '',
      top: 'top-[130px] sm:top-[200px]',
      left: '-left-2 sm:-left-4',
      cls: 'w-[50px] h-auto sm:w-[82.91px] ',
    },
    bottomRightArrow: {
      src: '/img/hero/arrowRight.svg',
      width: 82.91,
      height: 34.67,
      alt: '',
      bottom: 'bottom-[98px] sm:bottom-[160px]',
      right: '-right-3 sm:right-[4px]',
      cls: 'w-[50px] h-auto sm:w-[82.91px] ',
    },
  },
  {
    id: 2,
    mainImage: {
      src: '/img/hero/3.png',
      alt: '',
      w: 394.04,
      h: 611,
    },
    topLeftImage: {
      src: '/img/hero/slide/5.svg',
      width: 221.61,
      height: 78,
      alt: '',
      top: 'top-12 sm:top-20',
      left: 'left-[-60px] sm:-left-[80px]',
      cls: 'w-[150px] h-auto sm:w-[221.61px] ',
    },
    bottomRightImage: {
      src: '/img/hero/slide/6.svg',
      width: 221.61,
      height: 78,
      alt: '',
      bottom: 'bottom-[30px] sm:bottom-[50px]',
      right: 'right-[-50px] sm:right-[-50px] ',
      cls: 'w-[150px] h-auto sm:w-[221.61px] ',
    },
    topLeftArrow: {
      src: '/img/hero/arrowLeft.svg',
      width: 82.91,
      height: 34.67,
      alt: '',
      top: 'top-[130px] sm:top-[200px]',
      left: '-left-2 sm:-left-4',
      cls: 'w-[50px] h-auto sm:w-[82.91px] ',
    },
    bottomRightArrow: {
      src: '/img/hero/arrowRight.svg',
      width: 82.91,
      height: 34.67,
      alt: '',
      bottom: 'bottom-[98px] sm:bottom-[160px]',
      right: '-right-3 sm:right-[4px]',
      cls: 'w-[50px] h-auto sm:w-[82.91px] ',
    },
  },
  {
    id: 3,
    mainImage: {
      src: '/img/hero/4.png',
      alt: '',
      w: 394.04,
      h: 611,
    },
    topLeftImage: {
      src: '/img/hero/7.png',
      width: 221.61,
      height: 78,
      alt: '',
      top: 'top-12 sm:top-20',
      left: ' left-[-60px] sm:-left-[80px]',
      cls: 'w-[150px] h-auto sm:w-[221.61px] ',
    },
    bottomRightImage: {
      src: '/img/hero/slide/8.svg',
      width: 221.61,
      height: 78,
      alt: '',
      bottom: 'bottom-[30px] sm:bottom-[50px]',
      right: 'right-[-50px] sm:right-[-50px] ',
      cls: 'w-[150px] h-auto sm:w-[221.61px] ',
    },
    topLeftArrow: {
      src: '/img/hero/arrowLeft.svg',
      width: 82.91,
      height: 34.67,
      alt: '',
      top: 'top-[130px] sm:top-[200px]',
      left: '-left-2 sm:-left-4',
      cls: 'w-[50px] h-auto sm:w-[82.91px] ',
    },
    bottomRightArrow: {
      src: '/img/hero/arrowRight.svg',
      width: 82.91,
      height: 34.67,
      alt: '',
      bottom: 'bottom-[98px] sm:bottom-[160px]',
      right: '-right-3 sm:right-[4px]',
      cls: 'w-[50px] h-auto sm:w-[82.91px] ',
    },
  },
  {
    id: 4,
    mainImage: {
      src: '/img/hero/5.png',
      alt: '',
      w: 394.04,
      h: 611,
    },
    topLeftImage: {
      src: '/img/hero/8.png',
      width: 221.61,
      height: 78,
      alt: '',
      top: 'top-12 sm:top-20',
      left: ' left-[-60px] sm:-left-[80px]',
      cls: 'w-[150px] h-auto sm:w-[221.61px] ',
    },
    bottomRightImage: {
      src: '/img/hero/slide/10.svg',
      width: 221.61,
      height: 78,
      alt: '',
      bottom: 'bottom-[30px] sm:bottom-[50px]',
      right: 'right-[-50px] sm:right-[-50px] ',
      cls: 'w-[150px] h-auto sm:w-[221.61px] ',
    },
    topLeftArrow: {
      src: '/img/hero/arrowLeft.svg',
      width: 82.91,
      height: 34.67,
      alt: '',
      top: 'top-[130px] sm:top-[200px]',
      left: '-left-2 sm:-left-4',
      cls: 'w-[50px] h-auto sm:w-[82.91px] ',
    },
    bottomRightArrow: {
      src: '/img/hero/arrowRight.svg',
      width: 82.91,
      height: 34.67,
      alt: '',
      bottom: 'bottom-[98px] sm:bottom-[160px]',
      right: '-right-3 sm:right-[4px]',
      cls: 'w-[50px] h-auto sm:w-[82.91px] ',
    },
  },
];
