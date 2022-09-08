import React from "react";
import ServiceBGC from "../src/components/common/ServiceBGC";
import ServicePricingSection from "../src/components/common/ServicePricingSection";
import ServiceProcessSection from "../src/components/common/ServiceProcessSection";
import Service2Area from "../src/components/Service-2/Service2Area";
import Service2SkillArea from "../src/components/Service-2/Service2SkillArea";
import Footer1 from "../src/layout/Footer/Footer1";
import HomeHeader from "../src/layout/Header/HomeHeader";

const service2 = () => {
  return (
    <>
      {/*====== Header Start ======*/}
      <HomeHeader />
      {/*====== Header End ======*/}
      {/*====== Breadcrumb section Start ======*/}
      <ServiceBGC />
      {/*====== Breadcrumb section End ======*/}
      {/*====== Service Area Start ======*/}
      <Service2Area />
      {/*====== Service Area End ======*/}
      {/*====== Process Area Start ======*/}
      <ServiceProcessSection />
      {/*====== Process Area End ======*/}
      {/*====== Skill area Start ======*/}
      {/*====== Skill area End ======*/}
      {/*====== Pricing Section Start ======*/}
      {/* <ServicePricingSection /> */}
      {/*====== Pricing Section End ======*/}
      {/*====== Footer Start ======*/}
      <Footer1 />
      {/*====== Footer End ======*/}
    </>
  );
};

export default service2;
