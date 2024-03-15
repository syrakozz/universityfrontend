"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import React from "react";
import { slidesData } from "../../../data/hero";
import { useRouter } from "next/navigation";

export default function HeroTwo() {
  const router = useRouter();
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <section className="mainSlider -type-1 js-mainSlider customizedHeroBackground" style={{ paddingTop: "250px" }}>
      <div className="swiper-wrapper-two">
        {showSlider && (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".hero-slider-next",
              prevEl: ".hero-slider-prev",
            }}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              450: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }}
            speed={1200}
          >
            {slidesData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="swiper-slide hightFull">
                  <div className="mainSlider__bg">
               
                    <Image
                      src={item.bgImage}
                      alt={`Slide ${i}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="container">
                    <div className="row justify-center text-center">
                      <div className="col-xl-6 col-lg-8">
                        <div
                          className="mainSlider__content"
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <h1 className="mainSlider__title text-white">
                            {item.description}
                          </h1>
                          <div className="mainSlider__form">
                            <button
                              className="button -md -purple-1 text-white"
                              onClick={() => router.push("/courses-list-1")}
                            >
                              <i className="icon icon-search mr-15"></i>
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Navigation Buttons */}
      <button className="swiper-prev hero-slider-prev button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-prev">
        <i className="icon icon-arrow-left text-24"></i>
      </button>

      <button className="swiper-next hero-slider-next button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-next">
        <i className="icon icon-arrow-right text-24"></i>
      </button>
    </section>
  );
}
