import React from "react";
import Link from "next/link";
export default function Join() {
  return (
    <section className="layout-pt-md layout-pb-md bg-purple-1">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-xl-4 col-lg-5">
            <h2 className="text-30 lh-15 text-white">
           Contact Us Now
        
            </h2>
            <h4 className="text-green-1">For more info</h4>
          </div>

          <div className="col-auto">
            <Link href="/contact-1" className="button -md -green-1 text-dark-1">
             Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
