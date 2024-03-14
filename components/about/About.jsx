import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">About Us</h1>
                </div>

                <div>
                  <p className="text-dark-1 mt-30">
                    Paris International University is located in Paris, the capital city of France. Founded in 1989, the University offers over 36-Majors programs to students from over 100 countries. Our university is distinguished by an outstanding hands-on learning experience spanning the classroom, campus, and a wide variety of work environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between items-center">
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <Image
                  width={730}
                  height={530}
                  className="w-1/1 bordershadow"
                  src="/assets/img/about-1/1.jpeg"
                  alt="image"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="text-30 lh-16">
              Mission Statement
              </h1>
              <p className="text-dark-1 mt-30">
              Paris International University (PIU) mission is to provide a positive learning and social
environment where students, faculty, staff, and alumni can come together to build a campus
community of collaboration, prepare students professionally, and promote ethical business
practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
