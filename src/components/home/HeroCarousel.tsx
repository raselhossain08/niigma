'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { carouselItemData } from '@/types/CarouselItem';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

const autoplayOptions = {
  delay: 3000,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
};

export function HeroCarousel() {
  const plugin = React.useRef(Autoplay(autoplayOptions));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = useCallback((api: any) => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600); 
  }, []);

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full"
      setApi={(api) => {
        if (api) {
          api.on('select', () => handleSelect(api));
          // Set initial active index
          setActiveIndex(api.selectedScrollSnap());
        }
      }}
    >
      <CarouselContent>
        {carouselItemData.map((item, index) => (
          <CarouselItem
            key={index}
            className="w-full flex justify-center lg:justify-end  lg:pr-20"
          >
            <div className="p-1 relative">
              <img
                src={typeof item.mainImage.src === 'string' ? item.mainImage.src : item.mainImage.src.src}
                alt={item.mainImage.alt}
                className={`w-[227.35px] h-auto sm:w-[394.04px] sm:h-[611.81px] object-contain transition-opacity duration-300 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {item.topLeftImage && (
                <div
                  className={`absolute ${item.topLeftImage.top} ${
                    item.topLeftImage.left
                  } ${
                    isAnimating && activeIndex === index
                      ? 'animate-fade-up'
                      : ''
                  }`}
                >
                  <Image
                    {...item.topLeftImage}
                    className={`${item.topLeftImage.cls}`}
                  />
                </div>
              )}

              {item.bottomRightImage && (
                <div
                  className={`absolute ${item.bottomRightImage.bottom} ${
                    item.bottomRightImage.right
                  } ${
                    isAnimating && activeIndex === index
                      ? 'animate-fade-up'
                      : ''
                  }`}
                >
                  <Image
                    {...item.bottomRightImage}
                    className={`${item.bottomRightImage.cls}`}
                  />
                </div>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(45%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.7s ease-out forwards;
        }
      `}</style>
    </Carousel>
  );
}
