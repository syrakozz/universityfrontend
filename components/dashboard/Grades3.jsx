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
        fetchCertificatesData("65e39e625a35f51ff98b1da9")
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
                        <h1 className="text-30 lh-12 fw-700">School of Business</h1>
                    </div>
                </div>

                <div className="row y-gap-30">
                    <div className="col-12">
                        <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                            <div className="py-30 px-30">
                                <div>
                                    The School of Business gained a leading position among the several educational institutions offering similar programs of study. In addition, the S.o.B.U. has adopted up-to-date, rich, and profound curricula, offering the Lebanese and regional job markets business graduates who are realistic, practical, eager to learn, and radiating good citizenship values.<br/>

                                    The S.o.B.U. currently comprises more than 10,000 students majoring in eight undergraduate business disciplines and an MBA program with eight different emphases. The Faculty is supported with a rich body of instructors who are in their majority experienced educators and working professionals.<br/>
                                    The Business undergraduate program usually lasts for 3 years.<br/>

                                    To apply to PIU as a bachelor student, you will need to prepare the below documents:
                                    <br/>
                                    <a style={{width:190,marginTop:20}}  className="button -md -orange-1 text-white" target={"_blank"} href={"http://188.166.52.152:3003/upload/1e1f8fda-3380-440a-9140-4ed94fba4bf7.jpeg"}>View File</a>
                                    <br/>

                                    <div style={{textAlign:"center",margin:"auto",width:500}}>
                                        <div className="row items-center x-gap-20 y-gap-20 pt-20">
                                            <div className="col-auto">
                                                <a
                                                    onClick={()=>{
                                                        fetchCertificatesData("65e39e625a35f51ff98b1da9")
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
                                                        fetchCertificatesData("65e4c5db2200cf54d621dd5a")
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
