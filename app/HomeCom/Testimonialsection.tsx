'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialSection = () => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Hail Repair Shop Owner',
      title: 'Michael R.',
      image: '/hair-repair.png',
      rating: 4.5,
      text: 'Before Prorevv, we were managing jobs on spreadsheets and paper. Now everything — customers, technicians, invoices — is in one place. It’s saved us hours every week and improved our cash flow',
    },
    {
      id: 2,
      name: 'Daniel T.',
      title: 'PDR Team Manager',
      image: '/pdr-team-manager.png',
      rating: 5,
      text: 'We used to miss payments and struggle with tracking technician jobs. With Prorevv, we know exactly what\'s completed, what\'s pending, and what\'s paid. It brought real structure to our operations.',
    },
    {
      id: 3,
      name: 'Sarah L.',
      title: 'Operations Director',
      image: 'operation-director.png',
      rating: 5,
      text: 'Most software tools feel generic. Prorevv understands how hail repair businesses actually work. Job assignment, vehicle tracking, and staff management are all seamless. Highly recommend it to serious repair companies.',
    },
    // {
    //   id:4,
    //   name: 'Emma W.',
    //   title: 'Dispatch Manager',
    //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    //   rating: 4,
    //   text: 'Prorevv transformed how we handle daily operations. Technicians are happier, customers are more informed, and our cash flow is predictable.',
    // },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-gray-300 text-gray-300'
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="testimonalias py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto overflow-x-hidden">

        {/* Swiper Carousel */}
        <div className="swiper-slider-main-testi"> 
            {/* Header */}
            <div className="text-center mb-10 lg:mb-10 relative justify-center flex">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
                Hundreds of excellent{' '}
                <span className="text-red-600">Reviews</span>
              </h2>
              {/* Navigation Buttons */}

              <div className='arrow-custom gap-5 absolute right-0 top-[30px] desktop-arrow'>
                <button className="swiper-button-prev static z-20 p-2.5 border border-black rounded-full transition-all duration-200 group" aria-label="Previous testimonial">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="black" strokeWidth={2} strokeLinecap="round"strokeLinejoin="round"/>
                  </svg>
                </button>

                <button className="swiper-button-next static z-20 p-2.5 border border-black rounded-full transition-all duration-200 group" aria-label="Next testimonial">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onAutoplayStart={() => setIsAutoPlay(true)}
            onAutoplayStop={() => setIsAutoPlay(false)}
            breakpoints={{
              // Mobile - 1 slide
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              // Tablet - 2 slides
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              // Desktop - 3 slides
              1024: {
                slidesPerView:2.5,
                spaceBetween:25,
              },
            }}
            className="testimonial-swiper pb-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className='h-full'>
                <div className="bg-white rounded-lg p-6 lg:p-8 border cursor-grab border-[#D7D8DC] h-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  {/* Review Text - MIDDLE */}
                    <p className="text-[#18202B] text-[14px] lg:text-[15px] leading-relaxed mb-6 flex-grow">
                      {testimonial.text}
                    </p>


                  {/* Author Section - TOP LEFT */}
                  <div className="auther-auto">
                    <div className="flex items-center justify-between">
                      <div className='left-user flex gap-2'>
                          <div className='profile'>
                              <img src={testimonial.image} alt={testimonial.name} className="h-12 lg:h-14 rounded-full object-cover border border-gray-300"/>
                          </div>
                        <div className='userct'>
                          <h4 className="text-[#18202B] text-base lg:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-xs lg:text-sm">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                      {/* Star Rating - BOTTOM */}
                      <div className="flex gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
            
            {/* mobile arrow */}
          <div className='arrow-custom  gap-5 mobile-arrow'>
                <button className="swiper-button-prev static z-20 p-2.5 border border-black rounded-full transition-all duration-200 group" aria-label="Previous testimonial">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="black" strokeWidth={2} strokeLinecap="round"strokeLinejoin="round"/>
                  </svg>
                </button>

                <button className="swiper-button-next static z-20 p-2.5 border border-black rounded-full transition-all duration-200 group" aria-label="Next testimonial">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
       
        </div>

       
      </div>

      <style jsx global>{`
        .swiper-button-prev::after,
        .swiper-button-next::after {
          content: '';
        }

        .testimonial-swiper {
          overflow: visible;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;