import Faq from "@/components/common/Faq";
import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";
import ContactOne from "@/components/contacts/ContactOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";

export const metadata = {
  title:
    "Contact us",
  description:
    "",
};

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <ContactOne />
        {/* <Faq /> */}

        <FooterOne />
      </div>
    </div>
  );
}
