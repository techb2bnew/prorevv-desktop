'use client';

import { memo } from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  badge?: string;
  title?: string;
  titleHighlight?: string;
  paragraphs?: string[];
  btnText?: string;
  btnUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const AboutSection = ({
  badge,
  title,
  titleHighlight,
  paragraphs = [
    'At Prorevv, we connect skilled hail damage repair technicians with real, high-quality job opportunities across the industry. Our platform is built to simplify how repair professionals find work, manage projects, and grow their business.',
    'From job assignment to work order management, we help repair professionals focus on what they do best — restoring vehicles with precision and confidence.',
  ],
  btnText = 'Download Now',
  btnUrl = '#',
  imageSrc = '/dashboard-preview.png',
  imageAlt = 'Dashboard Preview',
}: AboutSectionProps) => {
  return (
    <section className="w-full bg-[#F5F5F5] py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-16">

          {/* Left — Image */}
          <div className="w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={700}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Right — Content */}
          <div className="w-full flex flex-col items-start text-left">

            {/* Badge */}
            {badge && (
              <div className="flex items-center gap-2 mb-3 sm:mb-3">
                <span className="w-2 h-2 rounded-full bg-[#E7000B] inline-block" />
                <span className="text-[#181818] text-sm sm:text-base font-semibold tracking-widest uppercase">
                  {badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2B2B] leading-tight mb-4 sm:mb-6">
              {title}{' '}
              <br className="hidden sm:block" />
              {titleHighlight}
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base md:text-lg text-[#2B2B2B] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* CTA Button */}
            {btnText && (
              <a
                href={btnUrl}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D80007] hover:bg-black text-white text-sm sm:text-base rounded-lg transition-colors duration-200 inline-block text-center">
                {btnText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);