"use client";

import { memo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Banner = ({
  video,
  poster,
  title,
  description,
  buttontitle,
  buttonurl
}) => {
  const videoRef = useRef(null);

  // Ensure video keeps playing (some browsers pause)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden text-white px-4 sm:px-6 lg:px-8">
      
      {/* Background */}
      {video ? (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"  
          poster={poster}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : poster ? (
        <Image
          src={poster}
          alt={title || "banner image"} 
          fill
          className="object-cover"
          priority
        />
      ) : null}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto h-full flex items-center">
        <div className="max-w-2xl">

          {/* SEO Heading */}
          {title && (
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p className="text-gray-300 mb-8 text-lg">
              {description}
            </p>
          )}

          {/* Button */}
          {buttontitle && (
            <Link
              href={buttonurl || "#"}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D80007] hover:bg-black text-white text-sm sm:text-base font-normal rounded-lg transition-colors duration-200 inline-block text-center"
            >
              {buttontitle}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Banner);