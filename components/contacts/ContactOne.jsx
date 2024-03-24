"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { contactData } from "@/data/contactLinks";
import dynamic from "next/dynamic";
import {Utilites} from "@/core/Utilites";

const MapComponent = dynamic(() => import("./Map"), {
  ssr: false,
});
export default function ContactOne() {
  const [showMap, setShowMap] = useState(false);
  const [securityvalue,setSecurityvalue]=useState(4345)
  const [security,setSecurity]=useState("")
  useEffect(() => {
    setShowMap(true);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(security!==securityvalue){
      alert("Please Write a valid Security Code!")
    }else{
      alert("Thank You!")
    }

  };

  useEffect(() => {
    setSecurityvalue(Utilites.generateRandomNumber(4))
  }, []);
  return (
    <>
      <section>{showMap && <MapComponent />}</section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between">
            <div className="col-lg-4">
              <h1 className="mt-25" >
              Contact Us
              </h1>

              <div className="y-gap-30 pt-60 lg:pt-40">
                {contactData.map((elm, i) => (
                  <div key={i} className="d-flex items-center">
                    <div className="d-flex justify-center items-center size-60 rounded-full bg-light-7">
                      <Image width={30} height={30} src={elm.icon} alt="icon" />
                    </div>
                    <div className="ml-20">
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

            <div className="col-lg-7">
              <h3 className="text-24 fw-500">Send a Message.</h3>
              <form
                className="contact-form row y-gap-30 pt-60 lg:pt-40"
                onSubmit={handleSubmit}
              >
                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    name="title"
                    placeholder="Name..."
                  />
                </div>
                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Email Address
                  </label>
                  <input
                    required
                    type="text"
                    name="title"
                    placeholder="Email..."
                  />
                </div>
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Message...
                  </label>
                  <textarea
                    required
                    name="comment"
                    placeholder="Message"
                    rows="8"
                  ></textarea>
                </div>

                <div className="col-12">
                  <div className="chek-form">
                    <input type="text" required="" onChange={(e)=>{
                      setSecurity(e.target.value)
                    }}  name="security" className={`form-control `} placeholder={"Security Code"} />
                    <div className="invalid-feedback"></div>
                  </div>
                  <span className="security-code">
                                                        <b className="text-new">{securityvalue[0]}</b>
                                                        <b className="text-hot">{securityvalue[1]}</b>
                                                        <b className="text-sale">{securityvalue[2]}</b>
                                                        <b className="text-best">{securityvalue[3]}</b>
                                                    </span>

                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -purple-1 text-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
