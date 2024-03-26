"use client";


import Image from "next/image";
import React, { useEffect, useState } from "react";
import CartToggle from "../component/CartToggle";
import { sidebarItems } from "../../../data/homeSidebarItems";
import { notifications } from "@/data/notifications";
import Messages from "../component/Messages";
import MyCourses from "../component/MyCourses";
import Link from "next/link";
import Constants from '@/core/Constants'; 
export default function HeaderDashboard() {
  const [messageOpen, setMessageOpen] = useState(false);
  const [userImage, setUserImage] = useState(""); 

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      const parsedUserData = JSON.parse(userDataFromStorage);
     
      setUserImage(parsedUserData.picture);
    }
  }, []);

  const [isfullScreen, setIsfullScreen] = useState(false);
  const [isOnNotification, setIsOnNotification] = useState(false);
  const [isOnProfile, setIsOnProfile] = useState(false);
  const [documentElement, setDocumentElement] = useState();

  useEffect(() => {
    setDocumentElement(document.documentElement);
  }, []);

  const handleFullScreenToggle = () => {
    setIsfullScreen((prev) => !prev);
    if (!isfullScreen) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
  };

  const openFullscreen = () => {
    if (documentElement?.requestFullscreen) {
      documentElement.requestFullscreen();
    } else if (documentElement?.webkitRequestFullscreen) {
      documentElement.webkitRequestFullscreen();
    } else if (documentElement?.msRequestFullscreen) {
      documentElement.msRequestFullscreen();
    }
  };

  const closeFullscreen = () => {
    if (document?.exitFullscreen) {
      document.exitFullscreen();
    } else if (document?.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document?.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const handleResize = () => {};

  useEffect(() => {
    if (window.innerWidth < 990) {
      document.getElementById("dashboardOpenClose").classList.add("-is-sidebar-hidden");
    }
    const handleResize = () => {
      if (window.innerWidth < 990) {
        document.getElementById("dashboardOpenClose").classList.add("-is-sidebar-hidden");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header -dashboard -dark-bg-dark-1 js-header">
        <div className="header__container py-20 px-30">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="header__explore text-dark-1">
                  <button
                    onClick={() => {
                      document.getElementById("dashboardOpenClose").classList.toggle("-is-sidebar-hidden");
                    }}
                    className="d-flex items-center js-dashboard-home-9-sidebar-toggle"
                  >
                    <i className="icon -dark-text-white icon-explore"></i>
                  </button>
                </div>

                <div className="header__logo ml-30 md:ml-20">
                  <Link data-barba href="/">
                    <Image
                      width={140}
                      height={50}
                      className="-light-d-none"
                      src="/assets/img/general/logo1.png"
                      alt="logo"
                    />
                    <Image
                      width={140}
                      height={50}
                      className="-dark-d-none"
                      src="/assets/img/general/logo1.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="text-white d-flex items-center lg:d-none mr-15"></div>

                <div
                  className="relative d-flex items-center ml-10"
                  onClick={() => setIsOnProfile((prev) => !prev)}
                >
                  <a href="#" data-el-toggle=".js-profile-toggle">
                    {/* <Image
                      width={50}
                      height={50}
                      className="size-50"
                      src={userImage} // Use userImage state here
                      alt="User Profile"
                    /> */}
               <img
  src={`${Constants.serverlink}/upload/${userImage}`}
  alt="User Profile"
  width={50}
  height={50}
/>


                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Messages setMessageOpen={setMessageOpen} messageOpen={messageOpen} />
      </header>
    </>
  );
}
