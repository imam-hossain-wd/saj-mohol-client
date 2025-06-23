// components/reusable-carousel.js
'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ReusableCarousel({
  children,
  showButtons = true,
  className,
}) {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={cn('relative w-full', className)}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="w-full h-full"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index} className="h-full">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {showButtons && (
        <>
          <button
            ref={prevRef}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:p-3"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6" />
          </button>
          <button
            ref={nextRef}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:p-3"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6" />
          </button>
        </>
      )}

      {/* Custom Pagination */}
      <div className="custom-pagination mt-4 flex justify-center gap-2" />
    </div>
  );
}


// How to use this carousel 
// _________________________
// ****************************
// Without Navigation Buttons
// <ReusableCarousel showButtons={false}>
//   {/* Your slides */}
// </ReusableCarousel>

// With Custom Styling
// <ReusableCarousel className="rounded-xl overflow-hidden shadow-lg">
//   {/* Your slides */}
// </ReusableCarousel>

// ********************************
//    <ReusableCarousel >
//       <div className="h-64 bg-gray-100 flex items-center justify-center">
//         <h3>Slide 1</h3>
//       </div>
//       <div className="h-64 bg-gray-200 flex items-center justify-center">
//         <h3>Slide 2</h3>
//       </div>
//       <div className="h-64 bg-gray-300 flex items-center justify-center">
//         <h3>Slide 3</h3>
//       </div>

//     </ReusableCarousel>