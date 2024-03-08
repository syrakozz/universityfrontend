"use client";

import { grades } from "@/data/dashboard";
import { letters, alphabetItems } from "@/data/dictionary";
import React, { useState, useEffect } from "react";
import FooterOne from "../layout/footers/FooterOne";
import Image from "next/image";
import PageLinksTwo from "../common/PageLinksTwo";
import RequestEngine from "@/core/RequestEngine";

export default function EventsOne() {
  const [certificatesData, setCertificatesData] = useState([]);

  useEffect(() => {
    fetchCertificatesData();
  }, []);

  const fetchCertificatesData = async () => {
    try {
      let engine = new RequestEngine();
      const response = await engine.getItem("admin", "/certificate/list");
      
      if (response && response.status === 200) {
        setCertificatesData(response.data.data);
      } else {
        console.error("Failed to fetch certificates data");
      }
    } catch (error) {
      console.error("Error fetching certificates data:", error);
    }
  };

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Certificates</h1>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="py-30 px-30">
                <div className="border-light-bottom py-20 px-30">
                  {certificatesData.map((certificate, index) => (
                    <div key={index} className={`row y-gap-20 justify-between items-center ${index !== 0 ? "border-top-light pt-20 mt-20" : ""}`}>
                      <div className="col-xl-3">
                        <div className="d-flex items-center">
                          <div className="text-dark-1 ml-10">{certificate.name}</div>
                        </div>
                      </div>
                      <div className="col-xl-2">
                        <div className="text-dark-1">{certificate.email}</div>
                      </div>
                      <div className="col-xl-2">
                        <div className="d-flex justify-end">
                          <div className="text-dark-1">{certificate.credits}</div>
                        </div>
                      </div>
                      <div className="col-xl-2">
                        <div className="d-flex justify-end">
                          <div className="text-dark-1">{certificate.Contract}</div>
                        </div>
                      </div>
                      <div className="col-xl-2">
                        <div className="d-flex justify-end">
                          <div className="text-dark-1">{certificate.coursedescription}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
