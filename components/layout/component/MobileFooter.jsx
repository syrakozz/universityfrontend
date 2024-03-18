import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function MobileFooter() {
  return (
    <>
      <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
        <div className="mobile-footer__number">
          <div className="text-17 fw-500 text-dark-1">Call us</div>
          <div className="text-17 fw-500 text-purple-1">+33744253346</div>
        </div>

        <div className="lh-2 mt-10">
          <div>
            <div>
              <br />137 , Avenue Jean Jaures F - 92140 Clamart /<br />
            </div>
            <div><a href="mailto:info@piu-paris.com" >info@piu-paris.com</a></div>
            <div><a href="mailto:dean@piu-paris.com" >dean@piu-paris.com</a></div>
            <div><a href="mailto:adm@piu-paris.com" >adm@piu-paris.com</a></div>
            <div><a href="tel:+33744253346" >+33744253346</a></div>
          </div>
          <div style={{float: "right",
            position: "relative",
            top: -125}}>
            <Image
                width={90}
                height={50}
                src="/assets/img/general/parisfooter.png"
            />
          </div>

        </div>

        <div className="mobile-socials mt-10">
          <Link
            href="#"
            className="d-flex items-center justify-center rounded-full size-40"
          >
            <i className="fa fa-facebook"></i>
          </Link>

          <Link
            href="#"
            className="d-flex items-center justify-center rounded-full size-40"
          >
            <i className="fa fa-twitter"></i>
          </Link>

          <Link
            href="#"
            className="d-flex items-center justify-center rounded-full size-40"
          >
            <i className="fa fa-instagram"></i>
          </Link>

          <Link
            href="#"
            className="d-flex items-center justify-center rounded-full size-40"
          >
            <i className="fa fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
