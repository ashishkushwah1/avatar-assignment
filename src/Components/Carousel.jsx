import React from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css'
import 'swiper/css/autoplay'
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'


function Carousel() {
  
  return (
    <div className="container">
      <h1 className="heading">Featured Products</h1>
      <h4 className='sub-heading'>Explore and discover a variety of products</h4>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{
          enabled: true,
          delay: 1000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false
        }}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className='swiper-slide'>
          <img src={img1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={img2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={img3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={img4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={img5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={img4} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <GoArrowLeft className='arrow' />
          </div>
          <div className="swiper-button-next slider-arrow">
            <GoArrowRight className='arrow' />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div >
  );
}

export default Carousel;