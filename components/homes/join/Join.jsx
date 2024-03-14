import React from "react";
import Link from "next/link";
import Image from "next/image";
import { contactData } from "@/data/contactLinks";
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
          <div className="col-lg-4">
              

          <div className="y-gap-30 pt-60 lg:pt-40">
  {contactData.map((elm, i) => (
    <div key={i} className="d-flex items-center">
      <div className="d-flex justify-center items-center size-60 rounded-full bg-light-7">
        <Image width={30} height={30} src={elm.icon} alt="icon" />
      </div>
      <div className="ml-20 text-white"> 
        {elm.address
          ? `${elm.address
              .split(" ")
              .slice(0, 4)
              .join(" ")} \n ${elm.address
              .split(" ")
              .slice(4, -1)
              .join(" ")}`
          : elm.email || elm.phoneNumber}
      </div>
    </div>
  ))}
</div>

            </div>
          {/* <div className="col-auto">
            <Link href="/contact-1" className="button -md -green-1 text-dark-1">
             Contact Us
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
