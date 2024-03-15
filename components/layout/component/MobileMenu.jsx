// import MobileFooter from "./MobileFooter";
// import { menuList } from "../../../data/menu";
// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";


// export default function MobileMenu({ setActiveMobileMenu, activeMobileMenu }) {
//   const [showMenu, setShowMenu] = useState(false);
//   const [menuNesting, setMenuNesting] = useState([]);
//   const [menuItem, setMenuItem] = useState("");
//   const [submenu, setSubmenu] = useState("");
//   const [academicOpen, setAcademicOpen] = useState(false);

//   const pathname = usePathname();

//   useEffect(() => {
   
//     menuList.forEach((elm) => {
//       elm?.links?.forEach((elm2) => {
//         if (elm2.href?.split('/')[1] === pathname?.split('/')[1]) {
//           setMenuItem(elm.title);
//         } else {
//           elm2?.links?.forEach((elm3) => {
//             if (elm3.href?.split('/')[1] === pathname?.split('/')[1]) {
//               setMenuItem(elm.title);
//               setSubmenu(elm2.title);
//             }
//           });
//         }
//       });
//     });
//   }, [pathname]);

//   useEffect(() => {
//     setShowMenu(true);
//   }, []);

//   return (
//     <div
//     className={`header-menu js-mobile-menu-toggle ${
//       activeMobileMenu ? "-is-el-visible" : ""
//     }`}
//   >
//       <div className="header-menu__content">
//         <div className="mobile-bg js-mobile-bg"></div>
//         <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
//           <Link href="/">
//             <Image
//               width={140}
//               height={50}
//               src="/assets/img/general/logo1.png"
//               alt="logo"
//             />
//           </Link>
//         </div>

//         {showMenu && activeMobileMenu && (
//           <div className="mobileMenu text-dark-1">
//             <li className="menu-item-has-children">
//               <Link
//                 data-barba
//                 href="/"
//                 className={menuItem === "Home" ? "activeMenu" : ""}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/about-2"
//                 className={submenu === "About Us " ? "activeMenu" : "inActiveMenu"}
//               >
//                 About Us
//               </Link>
//             </li>
//             <li className="menu-item-has-children">
//               <Link
//                 data-barba
//                 href="/event-list-1"
//                 className={menuItem === "Events" ? "activeMenu" : ""}
//               >
//                 News
//               </Link>
//             </li>
//             <li className="menu-item-has-children -has-mega-menu">
//               <div
//                 onClick={() => setAcademicOpen(!academicOpen)} // Toggle Academic collapse
//                 className={`cursor-pointer ${
//                   academicOpen ? "text-black" : "text-dark-1"
//                 }`}
//               >
//                 Academic
//               </div>
//               {academicOpen && ( // Conditionally render based on academicOpen state
//                 <div className="subnav">
//                   <ul className="mega__list">
//                     {menuList[1]?.links[0]?.links.map((elm, i) => (
//                       <li
//                         key={i}
//                         className={
//                           pathname.split("/")[1] === elm.href.split("/")[1]
//                             ? "activeMenu"
//                             : "inActiveMegaMenu"
//                         }
//                       >
//                         <Link data-barba href={elm.href}>
//                           {elm.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//             <li>
//               <Link
//                 data-barba
//                 href="/contact-1"
//                 className={
//                   pathname === "/contact-1" ? "activeMenu" : "inActiveMenuTwo"
//                 }
//               >
//                 Contact
//               </Link>
//             </li>
//           </div>
//         )}
// <div className="row-container">

//   {/* Mobile footer */}
//   <MobileFooter />
//   <div className="image-container">
//     <Link href="/">
//       <Image
//         width={160}
//         height={90}
//         src="/assets/img/general/paris.png"
//         alt="logo"
//       />
//     </Link>
//   </div>
// </div>
        
//       </div>


//       <div
//         className="header-menu-close"
//         onClick={() => {
//           setActiveMobileMenu(false);
//         }}
//         data-el-toggle=".js-mobile-menu-toggle"
//       >
//         <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
//           <div className="icon-close text-dark-1 text-16"></div>
//         </div>
//       </div>

//       <div
//         className="header-menu-bg"
//         onClick={() => setActiveMobileMenu(false)}
//       ></div>
//     </div>
//   );
// }
"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MobileFooter from './MobileFooter';
import { menuList } from '../../../data/menu';
import Image from 'next/image';

export default function MobileMenu({ setActiveMobileMenu, activeMobileMenu }) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuNesting, setMenuNesting] = useState([]);
  const [menuItem, setMenuItem] = useState('');
  const [submenu, setSubmenu] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split('/')[1] === pathname?.split('/')[1]) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.forEach((elm3) => {
            if (elm3.href?.split('/')[1] === pathname?.split('/')[1]) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, [pathname]);

  useEffect(() => {
    setShowMenu(true);
  }, []);

  return (
    <div className={`header-menu js-mobile-menu-toggle ${activeMobileMenu ? '-is-el-visible' : ''}`}>
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>
        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link href="/login" className={`text-dark-1 ${pathname === '/login' ? 'activeMenu' : 'inActiveMenu'}`}>
            Log in
          </Link>
        </div>
        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link href="/">
            <Image width={140} height={50} src="/assets/img/general/logo1.png" alt="logo" />
          </Link>
        </div>
        {showMenu && activeMobileMenu && (
          <div className="mobileMenu text-dark-1">
            <ul>
             

              {/* Other Menu Items */}
              {menuList.map((item, index) => (
                <li key={index}>
                  {/* Render Submenu if available */}
                  {item.links ? (
                    <div className="submenuOne">
                      {/* Title */}
                      <div
                        className="title"
                        onClick={() => setMenuNesting(prev => prev[0] === item.title ? [] : [item.title])}
                      >
                        <span className={item.title === menuItem ? "activeMenu" : "inActiveMenu"}>
                          {item.title}
                        </span>
                        <i className={menuNesting[0] === item.title ? "icon-chevron-right text-13 ml-10 active" : "icon-chevron-right text-13 ml-10"}></i>
                      </div>

                      {/* Links */}
                      <div className={menuNesting[0] === item.title ? "toggle active" : "toggle"}>
                        {item.links.map((subItem, subIndex) => (
                          <div key={subIndex}>
                            {/* Render Submenu links */}
                            <Link href={subItem.href} className={pathname?.split("/")[1] === subItem.href?.split("/")[1] ? "activeMenu link" : "link inActiveMenu"}>
                              {subItem.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Render Single Links
                    <div
                        className="title">
                    <Link href={item.href} className={pathname === item.href ? "activeMenu" : "inActiveMenu"}>
                    <span className={item.title === menuItem ? "activeMenu" : "inActiveMenu"}>
                          {item.title}
                        </span>
                    </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* mobile footer start */}
        / <div className="row-container">

  {/* Mobile footer */}   <MobileFooter />
  <div className="image-container">
    <Link href="/">
       <Image
        width={160}
        height={90}
        src="/assets/img/general/paris.png"
        alt="logo"
      />
    </Link>
  </div>
</div>
        
   
        {/* mobile footer end */}
      </div>
      <div className="header-menu-close" onClick={() => setActiveMobileMenu(false)} data-el-toggle=".js-mobile-menu-toggle">
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>
      <div className="header-menu-bg" onClick={() => setActiveMobileMenu(false)}></div>
    </div>
  );
}
