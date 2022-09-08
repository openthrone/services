import dynamic from "next/dynamic";
import React from "react";
import PortfolioBGC from "../src/components/common/PortfolioBGC";
// import PortfolioArea from "../src/components/Portfolio/PortfolioArea";
import Footer1 from "../src/layout/Footer/Footer1";
import Header1 from "../src/layout/Header/HomeHeader";
const PortfolioArea = dynamic(
  () => import("../src/components/Portfolio/PortfolioArea"),
  {
    ssr: false,
  }
);

const portfolio = () => {
  return (
    <>
      {/*====== Header Start ======*/}
      <Header1 />
      {/*====== Header End ======*/}
      {/*====== Breadcrumb section Start ======*/}
      <PortfolioBGC />
      {/*====== Breadcrumb section End ======*/}
      {/*====== Portfolio Area Start ======*/}
      <PortfolioArea />
      {/*====== Portfolio Area End ======*/}
      {/*====== Footer Start ======*/}
      <Footer1 />
      {/*====== Footer End ======*/}
    </>
  );
};

export default portfolio;
