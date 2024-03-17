import React from "react";
import Link from "next/link";
import Image from "next/image";
import { contactData } from "@/data/contactLinks";
export default function Join() {
  return (
    <section className="layout-pt-md layout-pb-md bg-purple-1">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">

          <div className="col-lg-4">
          <div className="y-gap-30 pt-60 lg:pt-40">
              <h2 className="text-30 lh-15 text-white">Contact Us Now</h2>
  {contactData.map((elm, i) => (
    <div key={i} className="d-flex items-center">
      <div className="d-flex justify-center items-center size-40 rounded-full bg-light-7">
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

            <div className="col-xl-4 col-lg-5">
                <div className="footer-header__logo">
                    <br/>
                    <Image
                        width={210}
                        height={50}
                        src="/assets/img/general/parisfooter.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
