"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";

const images = [image1, image2, image3, image4, image5];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex justify-center px-10 pt-8 pb-10 shadow-md">
    <div className="relative w-[715px] h-[300] lg:w-[1430px] lg:h-[600px] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-1500 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-full"
            style={{ width: `${100 / images.length}%` }}
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}