"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { carouselItemData } from "@/types/CarouselItem";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const autoplayOptions = {
  delay: 1500,
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
    // Reset animation for next slide
    setTimeout(() => setIsAnimating(false), 600); // Match this with your animation duration
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full"
      setApi={(api) => {
        if (api) {
          api.on("select", () => handleSelect(api));
          // Set initial active index
          setActiveIndex(api.selectedScrollSnap());
        }
      }}
    >
      <CarouselContent>
        {carouselItemData.map((item, index) => (
          <CarouselItem
            key={index}
            className="w-full flex justify-end relative pr-20"
          >
            <div className="p-1">
              <Image
                src={item.mainImage.src}
                width={item.mainImage.width}
                height={item.mainImage.height}
                alt={item.mainImage.alt}
                className={`transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {item.topLeftImage && (
              <div
                className={`absolute ${item.topLeftImage.top} ${
                  item.topLeftImage.left
                } ${
                  isAnimating && activeIndex === index ? "animate-fade-up" : ""
                }`}
              >
                <Image {...item.topLeftImage} />
              </div>
            )}

            {item.bottomRightImage && (
              <div
                className={`absolute ${item.bottomRightImage.bottom} ${
                  item.bottomRightImage.right
                } ${
                  isAnimating && activeIndex === index ? "animate-fade-up" : ""
                }`}
              >
                <Image {...item.bottomRightImage} />
              </div>
            )}

            {item.topLeftArrow && (
              <div
                className={`absolute ${item.topLeftArrow.top} ${
                  item.topLeftArrow.left
                } ${
                  isAnimating && activeIndex === index ? "animate-fade-up" : ""
                }`}
              >
                <Image {...item.topLeftArrow} />
              </div>
            )}

            {item.bottomRightArrow && (
              <div
                className={`absolute ${item.bottomRightArrow.bottom} ${
                  item.bottomRightArrow.right
                } ${
                  isAnimating && activeIndex === index ? "animate-fade-up" : ""
                }`}
              >
                <Image {...item.bottomRightArrow} />
              </div>
            )}
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
