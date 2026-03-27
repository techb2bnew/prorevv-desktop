'use client';
import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface InvoiceFastProps {
  image: string;
  title: string;
  description: string[];
  findOutBtnText: string;
  findOutBtnUrl: string;
  getEarlyText: string;
  getEarlyUrl: string;
}

const InvoiceFast = memo(({
  image,
  title,
  description,
  findOutBtnText,
  findOutBtnUrl,
  getEarlyText,
  getEarlyUrl,
}: InvoiceFastProps) => {
  return (
    <section className='bg-black invoice-fast py-12 sm:py-16 md:py-20 lg:py-24'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='invoice-fast-wr grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center'>
          
          {/* Image Section */}
          <div className='image order-2 lg:order-1 rounded-sm'>
            <Image
              src={image} 
              alt={title}
              width={500}
              height={400}
              quality={80}
              priority={false}
              loading="lazy"
              className='w-full h-auto object-contain rounded-lg'
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>

          {/* Content Section */}
          <div className='content order-1 lg:order-2 text-white space-y-6'>
            {/* Title */}
            <h2 className='text-4xl md:text-5xl font-semibold leading-tight mb-4'>
              {title}
            </h2>

            {/* Description */}
            <div className='space-y-4'>
              {description.map((para, index) => (
                <p 
                  key={index}
                  className='text-gray-300 text-base lg:text-lg leading-relaxed'
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Button Group */}
            <div className='flex flex-row items-center md:justify-start gap-3 sm:gap-4 mt-7 sm:mt-12 md:mt-16'>
              {/* Find Out More Button */}
              <Link 
                href={findOutBtnUrl}
                className='px-6 sm:px-8 md:px-12 lg:px-12 py-2.5 sm:py-3 bg-black hover:bg-white hover:text-black hover:border-white text-white border border-white rounded-lg transition-colors duration-200 inline-block text-center text-sm sm:text-base'>
                {findOutBtnText}
              </Link>

              {/* Get Early Access Button */}
              <Link 
                href={getEarlyUrl}
                className='px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D80007] hover:bg-white hover:text-black text-white text-sm sm:text-base rounded-lg transition-colors duration-200 inline-block text-center'
              >
                {getEarlyText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

InvoiceFast.displayName = 'InvoiceFast';

export default InvoiceFast;