import React from "react";
import { steps } from "../../data/steps";
import Link from "next/link";

export default function WhyCourse() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-dark-2">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle">
              <h2
                className="sectionTitle__title text-white"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                News
              </h2>

              
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          {steps.map((elm, i) => (
            <div
              key={elm.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={(i + 1) * 400}
            >
              <Link href={`/event-list-1`}>
                <div className="stepCard -type-1 -stepCard-hover">
                  <div className="stepCard__content">
                    <div className="stepCard__icon">
                      <i className={elm.icon}></i>
                    </div>
                    <h4 className="stepCard__title">{elm.title}</h4>
                    <p className="stepCard__text">{elm.text}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
