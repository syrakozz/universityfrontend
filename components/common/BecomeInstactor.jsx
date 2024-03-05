import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function BecomeInstactor() {
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row y-gap-30 items-center">
          <div className="col-xl-5 offset-xl-1 col-lg-6">
            <Image
              width={730}
              height={530}
              className="w-1/1"
              src="/assets/img/home-2/about/1.jpeg"
              alt="image"
            />
          </div>

          <div className="col-xl-4 offset-xl-1 col-lg-6">
            <h3 className="text-24 lh-1">Diversity & Mutual Understanding</h3>
            <p className="mt-20">
            With 125 nationalities represented in Paris and more than 33 nationalities represented in the
student body and faculty, PIU students regularly interact with individuals from different cultures.
Respect for one another and mutual understanding are enshrined within PIU’s mission and code
of ethics.
            </p>
            {/* <div className="d-inline-block mt-20">
              <Link
                href="/instructor-become"
                className="button -md -outline-purple-1 text-purple-1"
              >
                Apply Now
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
