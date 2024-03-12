"use client";
import RequestEngine from "@/core/RequestEngine";
import Image from "next/image";
import React, { useState, useEffect } from "react";


export default function EventDetails() {
  const [eventDetails, setEventDetails] = useState(null);
  
  useEffect(() => {
    // Fetch news details when the component mounts
    prepareData();
  }, []);

  const prepareData = async () => {
    try {
      // Extract the id parameter from the URL
      const id = getIdFromUrl();
      
      let engine = new RequestEngine();
      const response = await engine.getItem("user", `/news/${id}`); 
      if (response && response.status === 200) {
        setEventDetails(response.data); 
      }
    } catch (error) {
      console.error("Error fetching news details:", error);
    }
  };

  const getIdFromUrl = () => {
    // Extract the id parameter from the URL using window.location.pathname
    const pathParts = window.location.pathname.split("/");
    return pathParts[pathParts.length - 1];
  };

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-content">
      <Preloader/>
      <Header/>
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <section className="page-header -type-1">
          <div className="container">
            <div className="page-header__content">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  {/* Content for page header */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row y-gap-50 justify-between items-center">
              <div className="col-lg-6">
                <div>
                  <Image
                    width={400}
                    height={400}
                    src="/assets/img/home-2/students/2.jpeg"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <h2 className="text-30 lh-16">{data.text}</h2>
                  <p className="text-dark-1 mt-30">{data.name}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterOne/>
      </div>
    </div>
  );
}
