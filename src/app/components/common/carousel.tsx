'use client';

import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { ReactNode } from 'react';

export default function Carousel({ data, ...SwiperProps }: { data: ReactNode[] } & SwiperProps) {
  return (
    <Swiper
      className="h-full"
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay
      loop
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      {...SwiperProps}
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}
