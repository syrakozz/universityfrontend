"use client";
import React from "react";
import Menu from "../component/Menu";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "../component/MobileMenu";

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  return (
    <>
      <header className="header -type-1 ">
        <div className="header__container">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="header-left">
                <div className="header__logo ">
                  <Link href="/">
                    <Image
                      width={200}
                      height={50}
                      src="/assets/img/general/logo.png"
                      alt="logo"
                    />
                  </Link>
                </div>


              </div>
            </div>

            <Menu allClasses={"menu__nav text-white -is-active"} />
            <MobileMenu
              setActiveMobileMenu={setActiveMobileMenu}
              activeMobileMenu={activeMobileMenu}
            />

            <div className="col-auto">
              <div className="header-right d-flex items-center">
                <div className="header-right__icons text-white d-flex items-center">
                  <div className="d-none xl:d-block ml-20">
                    <button
                      onClick={() => setActiveMobileMenu(true)}
                      className="text-white items-center"
                      data-el-toggle=".js-mobile-menu-toggle"
                    >
                      <i className="text-11 icon icon-mobile-menu"></i>
                    </button>
                  </div>
                </div>

                <div className="header-right__buttons d-flex items-center ml-30 md:d-none">
                  <Link href="/login" className="button -underline text-white">
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
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
