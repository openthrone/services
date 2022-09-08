import React from "react";
import ContactArea from "../src/components/Contact/ContactArea";
import ContactBreadcrumbSection from "../src/components/Contact/ContactBreadcrumbSection";
import Footer1 from "../src/layout/Footer/Footer1";
import Header1 from "../src/layout/Header/HomeHeader";

const contact = () => {
  return (
    <>
      {/*====== Header Start ======*/}
      <Header1 />
      {/*====== Header End ======*/}
      {/*====== Breadcrumb section Start ======*/}
      <ContactBreadcrumbSection />
      {/*====== Breadcrumb section End ======*/}
      {/*====== Conatct Area Start ======*/}
      <ContactArea />
      {/*====== Conatct Area End ======*/}
      {/*====== Footer Start ======*/}
      <Footer1 />
      {/*====== Footer End ======*/}
    </>
  );
};

export default contact;
