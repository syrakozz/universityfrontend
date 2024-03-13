"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CartToggle from "../component/CartToggle";
import { sidebarItems } from "../../../data/homeSidebarItems";
import { notifications } from "@/data/notifications";
import Messages from "../component/Messages";
import MyCourses from "../component/MyCourses";
import Link from "next/link";

export default function HeaderDashboard() {
  const [messageOpen, setMessageOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [isfullScreen, setIsfullScreen] = useState(false);
  const [isOnNotification, setIsOnNotification] = useState(false);
  const [isOnProfile, setIsOnProfile] = useState(false);

  const [documentElement, setDocumentElement] = useState();
  const handleFullScreenToggle = () => {
    setIsfullScreen((pre) => !pre);
    if (!isfullScreen) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
  };

  useEffect(() => {
    setDocumentElement(document.documentElement);
  }, []);
  const openFullscreen = () => {
    if (documentElement?.requestFullscreen) {
      documentElement?.requestFullscreen();
    } else if (documentElement?.webkitRequestFullscreen) {
      /* Safari */
      documentElement?.webkitRequestFullscreen();
    } else if (documentElement?.msRequestFullscreen) {
      /* IE11 */
      documentElement?.msRequestFullscreen();
    }
  };

  const handleDarkmode = () => {
    if (document) {
      document.getElementsByTagName("html")[0].classList.toggle("-dark-mode");
    }
  };

  const closeFullscreen = () => {
    if (document?.exitFullscreen) {
      document?.exitFullscreen();
    } else if (document?.webkitExitFullscreen) {
      /* Safari */
      document?.webkitExitFullscreen();
    } else if (document?.msExitFullscreen) {
      /* IE11 */
      document?.msExitFullscreen();
    }
  };
  const handleResize = () => {};
  useEffect(() => {
    if (window.innerWidth < 990) {
      document
        .getElementById("dashboardOpenClose")
        .classList.add("-is-sidebar-hidden");
    }
    const handleResize = () => {
      if (window.innerWidth < 990) {
        document
          .getElementById("dashboardOpenClose")
          .classList.add("-is-sidebar-hidden");
      }
    };

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
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
                      document
                        .getElementById("dashboardOpenClose")
                        .classList.toggle("-is-sidebar-hidden");
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
                <div className="text-white d-flex items-center lg:d-none mr-15">
                  {/* <div className="dropdown bg-transparent px-0 py-0">
                    <div className="d-flex items-center text-14 text-dark-1">
                      All Pages
                      <i className="text-9 icon-chevron-down ml-10"></i>
                    </div>
                    <div className="dropdown__item -dark-bg-dark-2 -dark-border-white-10">
                      <div className="text-14 y-gap-15">
                        <div>
                          <Link
                            href="/dashboard"
                            className="d-block text-dark-1"
                          >
                            Dashboard
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="/dshb-courses"
                            className="d-block text-dark-1"
                          >
                            My Courses
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="/dshb-bookmarks"
                            className="d-block text-dark-1"
                          >
                            Bookmarks
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="/dshb-listing"
                            className="d-block text-dark-1"
                          >
                            Add Listing
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="/dshb-reviews"
                            className="d-block text-dark-1"
                          >
                            Reviews
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="/dshb-settings"
                            className="d-block text-dark-1"
                          >
                            Settings
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <MyCourses /> */}
                </div>

                <div
                  className="relative d-flex items-center ml-10"
                  onClick={() => setIsOnProfile((pre) => !pre)}
                >
                  <a href="#" data-el-toggle=".js-profile-toggle">
                    <Image
                      width={50}
                      height={50}
                      className="size-50"
                      src="/assets/img/misc/user-profile.png"
                      alt="image"
                    />
                  </a>

                  <div
                    className={`toggle-element js-profile-toggle ${
                      isOnProfile ? "-is-el-visible" : ""
                    } -`}
                  >
                    <div className="toggle-bottom -profile bg-white shadow-4 border-light rounded-8 mt-10">
                      <div className="px-30 py-30">
                        <div className="sidebar -dashboard">
                          {sidebarItems.map((elm, i) => (
                            <div
                              key={i}
                              className={`sidebar__item ${
                                elm.id == 1 ? "-is-active -dark-bg-dark-2" : ""
                              }`}
                            >
                              <a
                                href={elm.href}
                                className="d-flex items-center text-17 lh-1 fw-500 "
                              >
                                <i className={elm.iconClass}></i>
                                {elm.text}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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
