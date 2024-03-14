"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { topCategories } from "../../../data/topCategories";

import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Link from "next/link";

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
                  width={45}
                  height={45}
                  src={item.iconSrc}
                  alt="icon"
                />
              </div>
              <div className="featureCard__title">
                {item.title}
              </div>
              <div className="featureCard__text">{item.text}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )}





          
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesHomeOne;
