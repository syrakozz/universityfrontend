// export default HomeHero;
"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image, { StaticImageData } from "next/image";
import hero_ba from "../../../public/assets/img/home-1/hero/ba.png";
import { ShapeRendering } from "../../../svg/index";
import { slidesData } from "../../../data/hero";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {counters} from "@/data/count";

const HomeHero = () => {
  useEffect(() => {
    const parallaxIt = () => {
      const target = document.querySelectorAll(".js-mouse-move-container");

      target.forEach((container) => {
        const targets = container.querySelectorAll(".js-mouse-move");

        targets.forEach((el) => {
          const movement = el.getAttribute("data-move");

          document.addEventListener("mousemove", (e) => {
            const relX = e.pageX - container.offsetLeft;
            const relY = e.pageY - container.offsetTop;

            gsap.to(el, {
              x:
                ((relX - container.offsetWidth / 2) / container.offsetWidth) *
                Number(movement),
              y:
                ((relY - container.offsetHeight / 2) / container.offsetHeight) *
                Number(movement),
              duration: 0.2,
            });
          });
        });
      });
    };

    parallaxIt();
  }, []);

  return (
    <>
      <section className="masthead -type-1 js-mouse-move-container">
        <div className="masthead__bg">
          <Image src={hero_ba} alt="image" />
        </div>

        <div className="container">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              el: ".swiper-paginationx",
              clickable: true,
            }}
            navigation={{
              nextEl: ".arrow-right-one",
              prevEl: ".arrow-left-one",
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
          >
         {slidesData.map((slide) => (
  <SwiperSlide key={slide.id}>
    <div className="teamCard -type-1 -teamCard-hover">
      <div className="teamCard__image position-relative">
        <Image
          width={1500}
          height={700}
          style={{ height: "100%", width: "100%" }}
          src={slide.bgImage}
          alt={`image-${slide.id}`}
        />
        <div className="teamCard__content position-absolute bottom-0 start-0 w-100 p-3" style={{position: "relative",
          zIndex: 99999,
          top: -400}}>
          <button className="btn btn-primary">{slide.buttonLabel}</button>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}



          </Swiper>

          <div className="row  counter__row" style={{paddingTop:0}}>
            {counters.map((elm, i) => (
                <div
                    key={i}
                    className="col-lg-3 col-sm-6"
                    data-aos="fade-left"
                    data-aos-duration={(i + 1) * 350}
                >
                  <div className="counter -type-1">
                    <div className="counter__number">{elm.number}</div>
                    <div className="counter__title">{elm.title}</div>
                  </div>
                </div>
            ))}
          </div>
          <div className="d-flex  x-gap-15  items-center lg:pt-40" style={{float:"right",position: "relative",
            top: -67}} >
            <div className="col-auto">
              <button className="button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-next">
                <i className="icon icon-arrow-left arrow-left-one" style={{color:"white"}}></i>
              </button>
            </div>
            <div className="col-auto">
              <div className="swiper-paginationx"></div>
            </div>
            <div className="col-auto">
              <button className="button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-prev">
                <i className="icon icon-arrow-right arrow-right-one " style={{color:"white"}}></i>
              </button>
            </div>
          </div>
        </div>

        {/* animated shape start */}
        <ShapeRendering />
        {/* animated shape end */}
      </section>
    </>
  );
};

export default HomeHero;
