"use client"; 
import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { teamMembers } from "../../data/instractors";

export default function Instructors({ backgroundColor }) {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <section
      className={`layout-pt-lg layout-pb-lg ${
        backgroundColor ? backgroundColor : ""
      }`}
    >
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-lg-6">
          <div className="sectionTitle" style={{ paddingBottom: '30px' }}>
  <h2 className="sectionTitle__title">Our students work at</h2>
</div>

          </div>
        </div>

        {showSlider && (
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
         slidesPerView={4}
         loop={true}
         breakpoints={{
           0: { 
             slidesPerView: 2,
             
           },
           767: { 
           slidesPerView: 4,
          
         },
         }}
       >
       
            {teamMembers.slice(0, 6).map((elm, i) => (
              <SwiperSlide key={i}>
                <div className="teamCard -type-1 -teamCard-hover">
                  <div className="teamCard__image">
                    <Image
                      width={600}
                      height={700}
                      style={{ height: "100%", width: "100%" }}
                      src={elm.image}
                      alt="image"
                    />
                    <div className="teamCard__socials">
                      <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        {elm.socialProfile?.map((itm, i) => (
                          <Link key={i} href={itm.url ? itm.url : "#"}>
                            <i className={`${itm.icon} text-white`}></i>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="teamCard__content">
                    <h4 className="teamCard__title">
                      <Link className="linkCustom" href={`/instructors/${elm.id}`}>
                        {elm.name}
                      </Link>
                    </h4>
                    <p className="teamCard__text">{elm.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-left-hover js-prev">
              <i className="icon icon-arrow-left arrow-left-one"></i>
            </button>
          </div>
          <div className="col-auto">
            <div className="swiper-paginationx"></div>
          </div>
          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-right-hover js-next">
              <i className="icon icon-arrow-right arrow-right-one"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
