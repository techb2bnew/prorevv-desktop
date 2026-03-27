import { memo } from 'react';

const ScaleYourHairRepair = ({
  title,
  description,
  subheading,
  bookDemoTtitle,
  bookDemoUrl,
  getStartTitle,
  getStartUrl,
}) => {
  return (
    <div className='scale-your-hair bg-[#f7f7f7] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8'>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center">
          {/* Main Title */}
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
              Scale Your{' '}
              <span className="text-[#E7000B]">Hail Repair</span>{' '}
              Business
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg md:text-xl text-[#2B2B2B] mb-5 sm:mb-7 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {/* Subheading */}
          {subheading && (
            <p className="text-base sm:text-lg md:text-xl font-semibold text-[#2B2B2B] mb-7 sm:mb-7 md:mb-9">
              {subheading}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-5 md:mt-5">
            {/* Book Demo Button */}
            {bookDemoTtitle && (
              <a href={bookDemoUrl} className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D80007] hover:bg-black text-white text-sm sm:text-base rounded-lg transition-colors duration-200 inline-block text-center">
                {bookDemoTtitle}
              </a>
            )}

            {/* Get Started Button */}
            {getStartTitle && (
              <a href={getStartUrl} className="px-6 sm:px-8 md:px-12 lg:px-16 py-2.5 sm:py-3 bg-white hover:bg-black hover:text-white hover:border-white text-[#E7000B] border border-red-600 rounded-lg transition-colors duration-200 inline-block text-center text-sm sm:text-base">
                {getStartTitle}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ScaleYourHairRepair);