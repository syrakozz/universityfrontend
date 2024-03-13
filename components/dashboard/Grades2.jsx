"use client";

import { grades } from "@/data/dashboard";
import { letters, alphabetItems } from "@/data/dictionary";
import React, { useState, useEffect } from "react";
import FooterOne from "../layout/footers/FooterOne";
import Image from "next/image";
import PageLinksTwo from "../common/PageLinksTwo";
import RequestEngine from "@/core/RequestEngine";
import Link from "next/link";

export default function EventsOne() {
  const [certificatesData, setCertificatesData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [activeButton, setActiveButton] = useState("65e39e525a35f51ff98b1da6");

  const handleButtonClick = (buttonId) => {
    fetchCertificatesData(buttonId);
    setActiveButton(buttonId);
  };
  useEffect(() => {
    fetchCertificatesData("65e39e525a35f51ff98b1da6");
  }, []);
  const fetchCertificatesData = async (graduate) => {
    try {
      let engine = new RequestEngine();

      const response = await engine.getItem(
        "admin",
        "/filtercertificate/" + graduate
      );
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
    // <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">School of Arts & Sciences</h1>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="py-30 px-30">
                <div>
                  The Faculty of Arts and Sciences represents the core of the
                  University and is its main gateway for higher studies and
                  professional education.
                  <br />
                  It follows a liberal arts program that stresses freedom of
                  academic choice, integrity, ethical conduct, equal opportunity
                  and respect for diversity. The faculty offers undergraduate
                  and graduate programs committed to excellence in research and
                  teaching in the most fundamental disciplines of the arts,
                  humanities, and social, natural and mathematical sciences.
                  <br />
                  The Arts & Sciences undergraduate program usually lasts for 3
                  years. To apply to PIU as a bachelor student, you will need to
                  prepare the below documents:
                  <br />
                  <a
                    style={{ width: 190, marginTop: 20 }}
                    className="button -md -orange-1 text-white"
                    target={"_blank"}
                    href={
                      "http://188.166.52.152:3003/upload/97c7d188-ab87-444d-a910-e98b168defe0.jpeg"
                    }
                  >
                    View File
                  </a>
                  <br />
                  <div
                    style={{ textAlign: "center", margin: "auto", width: 500 }}
                  >
                    <div className="row items-center x-gap-20 y-gap-20 pt-20">
                      <div className="col-auto">
                        <button
                          onClick={() =>
                            handleButtonClick("65e39e525a35f51ff98b1da6")
                          }
                          className={`button -md -outline-light-5 ${
                            activeButton === "65e39e525a35f51ff98b1da6"
                              ? "text-white"
                              : "text-dark-1"
                          }`}
                          style={{
                            borderColor: "#204250",
                            backgroundColor:
                              activeButton === "65e39e525a35f51ff98b1da6"
                                ? "#204250"
                                : "transparent",
                          }}
                        >
                          Undergraduate
                        </button>
                      </div>
                      <div className="col-auto">
                        <button
                          onClick={() =>
                            handleButtonClick("65e4c5e92200cf54d621dd5d")
                          }
                          className={`button -md -outline-light-5 ${
                            activeButton === "65e4c5e92200cf54d621dd5d"
                              ? "text-white"
                              : "text-dark-1"
                          }`}
                          style={{
                            borderColor: "#204250",
                            backgroundColor:
                              activeButton === "65e4c5e92200cf54d621dd5d"
                                ? "#204250"
                                : "transparent",
                          }}
                        >
                          Graduate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <br />

                <div className="container">
                  <div
                    className="border-light-bottom py-20 px-30"
                    style={{ backgroundColor: "#204250" }}
                  >
                    <div className="row y-gap-20 justify-between items-center text-white">
                      <div className="col-xl-3">Major</div>
                      <div className="col-xl-2">Credits</div>
                      <div className="col-xl-2">Contract Sheet</div>
                      <div className="col-xl-2">Course Description</div>
                    </div>
                  </div>
                  {certificatesData.map((certificate, index) => (
                    <div
                      key={index}
                      className="border-light-bottom py-20 px-30"
                      style={{
                        backgroundColor:
                          index === hoveredIndex
                            ? "#204250"
                            : index % 2 === 0
                            ? "#F5F5F5"
                            : "#FFFFFF",
                        transition: "background-color 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(-1)}
                    >
                      <div className="row y-gap-20 justify-between items-center">
                        <div className="col-xl-3">
                          <div
                            className={`col-xl-3 d-flex items-center ${
                              index === hoveredIndex
                                ? "text-white"
                                : "text-dark-1"
                            }`}
                          >
                            {certificate.name}
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <div className="d-flex justify-end">
                            <div
                              className={`col-xl-2 d-flex justify-end ${
                                index === hoveredIndex
                                  ? "text-white"
                                  : "text-dark-1"
                              }`}
                            >
                              {certificate.credits}
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <div className="d-flex justify-end">
                            <div className="text-dark-1">
                              <a
                                href={certificate.full_picture}
                                target="_blank"
                              >
                                <img
                                  width={30}
                                  src={"/assets/img/pdf.png"}
                                  alt="PDF Icon"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <div className="d-flex justify-end">
                            <div className="text-dark-1">
                              <a
                                href={certificate.full_picture2}
                                target="_blank"
                              >
                                <img
                                  width={30}
                                  src={"/assets/img/pdf.png"}
                                  alt="PDF Icon"
                                />
                              </a>
                            </div>
                          </div>
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
    // </div>
  );
}
