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
  const [activeButton, setActiveButton] = useState("65e39e215a35f51ff98b1da3");

  const handleButtonClick = (buttonId) => {
    fetchCertificatesData(buttonId);
    setActiveButton(buttonId);
  };
  useEffect(() => {
    fetchCertificatesData("65e39e215a35f51ff98b1da3");
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
            <h1 className="text-30 lh-12 fw-700">School of Education</h1>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="py-30 px-30">
                <div>
                  The School of Education's mission focuses on the improvement
                  of learning and teaching in educational settings. We value the
                  importance of teaching and research within a major research
                  university. Striking such a balance depends on three key
                  ideas: focusing our research squarely on the improvement of
                  educational practice, offering high quality programs of
                  instruction for present and future educational practitioners,
                  and collaborating directly with other educators to improve
                  practice. The idea of this balance is incorporated in our
                  mission. The Education undergraduate program usually lasts for
                  3 years.
                  <br />
                  <a
                    style={{ width: 190, marginTop: 20 }}
                    className="button -md -orange-1 text-white"
                    target={"_blank"}
                    href={
                      "http://188.166.52.152:3003/upload/fec24e11-d4ad-4c6d-a18b-2da948a946f9.jpeg"
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
                            handleButtonClick("65e39e215a35f51ff98b1da3")
                          }
                          className={`button -md -outline-light-5 ${
                            activeButton === "65e39e215a35f51ff98b1da3"
                              ? "text-white"
                              : "text-dark-1"
                          }`}
                          style={{
                            borderColor: "#204250",
                            backgroundColor:
                              activeButton === "65e39e215a35f51ff98b1da3"
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
                            handleButtonClick("65e4c5f52200cf54d621dd60")
                          }
                          className={`button -md -outline-light-5 ${
                            activeButton === "65e4c5f52200cf54d621dd60"
                              ? "text-white"
                              : "text-dark-1"
                          }`}
                          style={{
                            borderColor: "#204250",
                            backgroundColor:
                              activeButton === "65e4c5f52200cf54d621dd60"
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
                      <div className="col-xl-6">Major</div>
                      <div className="col-xl-2">Credits</div>
                      <div className="col-xl-2 center">Contract Sheet</div>
                      <div className="col-xl-2 center">Course Description</div>
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
                        <div className="col-xl-6">
                          <div
                            className={` d-flex items-center ${
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
                              className={`col-xl-2 center ${
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
                          <div className=" center">
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
                          <div className="center">
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
