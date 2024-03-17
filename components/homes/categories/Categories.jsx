"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { topCategories } from "../../../data/topCategories";

import "swiper/css/pagination";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {Fab} from "@mui/material";

const CategoriesHomeOne = () => {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle ">
                <h2 className="sectionTitle__title ">Our Majors</h2>
              </div>
            </div>
          </div>

          <div className="overflow-hidden pt-50 js-section-slider">
  {showSlider && (
    <div className="row justify-content-center">
      {topCategories.map((item, i) => (
        <div
          key={i}
          className="col-lg-auto col-md-3 col-sm-6 col-12 mb-4"
        >
          <Link
            href={`/courses-list-${item.id > 4 ? 1 : item.id}`}
            data-aos="fade-left"
            data-aos-duration={(i + 1) * 350}
            className="featureCard -type-1 -featureCard-hover linkCustomTwo"
          >
            <div className="featureCard__content">
              <div className="featureCard__icon">
                <Image
                  width={145}
                  height={145}
                  src={item.iconSrc}
                  alt="icon"
                />
              </div>
              <div className="featureCard__title" style={{fontSize:24}}>
                {item.title}
              </div>
              <div className="featureCard__text" style={{fontSize:20}}>{item.text}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )}



            <center>
              <Fab variant="extended" style={{color:"white !important",fontSize:22}} href={"http://188.166.52.152:3003/upload/fec24e11-d4ad-4c6d-a18b-2da948a946f9.jpeg"} color="primary">
                Apply Now
              </Fab>

            </center>



          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesHomeOne;
