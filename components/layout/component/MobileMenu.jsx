"use client";

import MobileFooter from "./MobileFooter";

import { menuList } from "../../../data/menu";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileMenu({ setActiveMobileMenu, activeMobileMenu }) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuNesting, setMenuNesting] = useState([]);
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");

  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split('/')[1] == pathname?.split('/')[1]) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.map((elm3) => {
            if (elm3.href?.split('/')[1] == pathname?.split('/')[1]) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, []);
  useEffect(() => {
    setShowMenu(true);
  }, []);
  const pathname = usePathname();
  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        activeMobileMenu ? "-is-el-visible" : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>

        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <div style={{}}>
            <Image
                width={160}
                height={50}
                src="/assets/img/general/logo.png"
                alt="logo"
            />
          </div>

          <Link
            href="/login"
            style={{
              float: "right",
              position: "absolute",
              right: 0}
            }
            className={`text-white-1 ${
              pathname == "/login" ? "activeMenu" : "inActiveMenu"
            } `}
          >
            Log in
            <Image
                width={40}
                height={50}
                src="/assets/img/user.png"

                style={{
                  padding: 7,
                  marginLeft: 10}
                }
            />
          </Link>


        </div>

        {showMenu && activeMobileMenu && (
          <div className="mobileMenu text-white-1">
            <li className="menu-item-has-children">
              <Link
                  data-barba
                  href="/"
                  className={menuItem == "Home" ? "activeMenu" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                  href="/about-2"
                  className={
                    submenu == "about-2" ? "activeMenu" : "inActiveMenu"
                  }
              >
                About Us
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link
                  data-barba
                  href="/event-list-1"
                  className={menuItem == "Events" ? "activeMenu" : ""}
              >
                News
              </Link>

            </li>
            <li className="menu-item-has-children -has-mega-menu">
              <Link
                  data-barba
                  href="/courses-list-1"
                  className={menuItem == "Courses" ? "activeMenu" : ""}
              >
                Academic
              </Link>

              <div className="subnav">

                <ul className="mega__list">
                  {menuList[1].links[0].links.map((elm, i) => (
                      <li
                          key={i}
                          className={
                            pathname.split("/")[1] == elm.href.split("/")[1]
                                ? "activeMenu"
                                : "inActiveMegaMenu"
                          }
                      >
                        <Link data-barba href={elm.href} className={"text-white-1"}>
                          {elm.label}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>


            </li>

            <li>
              <Link
                  data-barba
                  href="/contact-1"
                  className={
                    pathname == "/contact-1" ? "activeMenu" : "inActiveMenuTwo"
                  }
              >
                Contact
              </Link>
            </li>
          </div>
        )}

        {/* mobile footer start */}
        <MobileFooter />
        {/* mobile footer end */}
      </div>

      <div
        className="header-menu-close"
        onClick={() => {
          setActiveMobileMenu(false);
        }}
        data-el-toggle=".js-mobile-menu-toggle"
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-white-1 text-16"></div>
        </div>
      </div>

      <div
        className="header-menu-bg"
        onClick={() => setActiveMobileMenu(false)}
      ></div>
    </div>
  );
}
