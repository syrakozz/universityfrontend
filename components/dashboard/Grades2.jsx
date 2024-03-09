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

    useEffect(() => {
        fetchCertificatesData("65e39e525a35f51ff98b1da6")
    }, []);
    const fetchCertificatesData = async (graduate) => {
        try {
            let engine = new RequestEngine();

            const response = await engine.getItem("admin", "/filtercertificate/"+graduate);
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
                        <h1 className="text-30 lh-12 fw-700">School of Arts & Sciences</h1>
                    </div>
                </div>

                <div className="row y-gap-30">
                    <div className="col-12">
                        <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                            <div className="py-30 px-30">
                                <div>
                                    The Faculty of Arts and Sciences represents the core of the University and is its main gateway
                                    for higher studies and professional education.
                                    <br/>
                                    It follows a liberal arts program that stresses
                                    freedom of academic choice, integrity, ethical conduct, equal opportunity and respect for
                                    diversity. The faculty offers undergraduate and graduate programs committed to excellence in
                                    research and teaching in the most fundamental disciplines of the arts, humanities, and social,
                                    natural and mathematical sciences.<br/>
                                    The Arts & Sciences undergraduate program usually lasts for 3 years.

                                    To apply to PIU as a bachelor student, you will need to prepare the below documents:
                                    <br/>
                                    <a style={{width:190,marginTop:20}}  className="button -md -orange-1 text-white" target={"_blank"} href={"http://188.166.52.152:3003/upload/97c7d188-ab87-444d-a910-e98b168defe0.jpeg"}>View File</a>
                                    <br/>

                                    <div style={{textAlign:"center",margin:"auto",width:500}}>
                                        <div className="row items-center x-gap-20 y-gap-20 pt-20">
                                            <div className="col-auto">
                                                <a
                                                    onClick={()=>{
                                                        fetchCertificatesData("65e39e525a35f51ff98b1da6")
                                                    }
                                                    }
                                                    className="button -md -outline-light-5 text-dark-1"
                                                >
                                                    Under graduate
                                                </a>
                                            </div>
                                            <div className="col-auto">
                                                <a
                                                    href="#"
                                                    onClick={()=>{
                                                        fetchCertificatesData("65e4c5e92200cf54d621dd5d")
                                                    }
                                                    }
                                                    className="button -md -orange-1 text-white"
                                                >
                                                    Graduate
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <br/>

                                <div className="border-light-bottom py-20 px-30">
                                    {certificatesData.map((certificate, index) => (
                                        <div key={index} className={`row y-gap-20 justify-between items-center ${index !== 0 ? "border-top-light pt-20 mt-20" : ""}`}>
                                            <div className="col-xl-3">
                                                <div className="d-flex items-center">
                                                    <div className="text-dark-1 ml-10">{certificate.name}</div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2">
                                                <div className="d-flex justify-end">
                                                    <div className="text-dark-1">{certificate.credits}</div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2">
                                                <div className="d-flex justify-end">
                                                    <div className="text-dark-1"><a href={certificate.full_picture} target={"_blank"}><img width={30} src={"/assets/img/pdf.png"}/></a></div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2">
                                                <div className="d-flex justify-end">
                                                    <div className="text-dark-1"><a href={certificate.full_picture2} target={"_blank"}><img width={30} src={"/assets/img/pdf.png"}/></a></div>

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
