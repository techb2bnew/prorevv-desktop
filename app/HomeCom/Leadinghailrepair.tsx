'use client';

import { memo, useEffect, useRef, useState } from 'react';

// Animated counter hook
function useCountUp(target: number | string, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState<string>('0');

  useEffect(() => {
    if (!shouldStart) return;

    // Parse number from strings like "100+", "5,000+", "1M+", "99%"
    const raw = String(target);
    const suffix = raw.replace(/[\d,\.]/g, ''); // e.g. "+", "%", "M+"
    const numStr = raw.replace(/[^\d\.]/g, ''); // e.g. "100", "5000", "1", "99"
    const isMillions = raw.includes('M');
    const num = parseFloat(numStr) * (isMillions ? 1 : 1);

    if (isNaN(num)) {
      setCount(raw);
      return;
    }

    const startTime = performance.now();
    const endValue = isMillions ? num : num;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * endValue);

      // Format with commas if needed
      let formatted: string;
      if (isMillions) {
        formatted = current.toLocaleString() + suffix;
      } else if (numStr.includes(',') || num >= 1000) {
        formatted = current.toLocaleString() + suffix;
      } else {
        formatted = String(current) + suffix;
      }

      setCount(formatted);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(raw); // Ensure exact final value
      }
    };

    requestAnimationFrame(tick);
  }, [shouldStart, target, duration]);

  return count;
}

// Individual stat card with its own intersection observer
const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animatedNumber = useCountUp(stat.number, 2000, visible);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#E7000B] hover:shadow-lg transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, box-shadow 0.3s`,
      }}
    >
      {/* Number */}
      <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#18181B] mb-3 sm:mb-4 tabular-nums">
        {animatedNumber}
      </h4>

      {/* Label */}
      <p className="text-base sm:text-lg md:text-xl font-medium text-[#18181B] mb-2">
        {stat.label}
      </p>

      {/* Subtext */}
      <p className="text-sm sm:text-base text-[#FB2C36] font-normal">
        {stat.subtext}
      </p>
    </div>
  );
};

const LeadingHailRepair = ({
  badge,
  title,
  subtitle,
  description,
  stats,
  downloadBtnText,
  downloadBtnUrl,
}: any) => {
  const defaultStats = [
    {
      id: 1,
      number: '100+',
      label: 'Repair Businesses',
      subtext: '+24% this quarter',
      textColor: '#E7000B',
    },
    {
      id: 2,
      number: '5,000+',
      label: 'Jobs Managed',
      subtext: 'Growing daily',
      textColor: '#E7000B',
    },
    {
      id: 3,
      number: '1M+',
      label: 'Repairs Processed',
      subtext: 'And counting',
      textColor: '#E7000B',
    },
    {
      id: 4,
      number: '99%',
      label: 'Customer Satisfaction',
      subtext: 'Rated 4.9/5',
      textColor: '#E7000B',
    },
  ];

  const trustedIcon = (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3337 5.83301L11.2503 12.9163L7.08366 8.74967L1.66699 14.1663"
        stroke="#FB2C36"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 5.83301H18.333V10.833"
        stroke="#FB2C36"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const statsToDisplay = stats && stats.length > 0 ? stats : defaultStats;

  return (
  <section className="w-full bg-black py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#27272A] border border-[#3F3F47] rounded-full mb-6 sm:mb-8">
              <span className="text-red-600 text-lg">{trustedIcon}</span>
              <span className="text-white font-normal text-[14px] sm:text-[16px] md:text-[18px]">
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight px-2">
              {title}
            </h2>
          )}

          {/* Subtitle */}
          {subtitle && (
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FB2C36] mb-4 sm:mb-6 leading-tight px-2">
              {subtitle}
            </h3>
          )}

          {/* Description */}
          {description && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#9F9FA9] mb-8 sm:mb-10 md:mb-14 max-w-5xl mx-auto leading-relaxed px-2">
              {description}
            </p>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-10 sm:mb-12 md:mb-16">
            {statsToDisplay.map((stat: any, index: number) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>

          {/* Download Button */}
          {downloadBtnText && (
            <a
              href={downloadBtnUrl}
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D80007] hover:bg-white text-white hover:text-black text-sm sm:text-base rounded-lg transition-colors duration-200 text-center"
            >
              {downloadBtnText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(LeadingHailRepair);