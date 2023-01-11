import HomeCTASection from "../src/components/common/HomeCTASection";
import HomeSkillSection from "../src/components/common/HomeSkillSection";
import IndexAboutSection from "../src/components/Index/IndexAboutSection";
import IndexHeroArea from "../src/components/Index/IndexHeroArea";
import IndexServiceArea from "../src/components/Index/IndexServiceArea";
import IndexTeamSection from "../src/components/Index/IndexTeamSection";
import IndexTestimonialsArea from "../src/components/Index/IndexTestimonialsArea";
import Footer1 from "../src/layout/Footer/Footer1";
import HomeHeader from "../src/layout/Header/HomeHeader";
import Service2Area from "../src/components/Service-2/Service2Area";
import { useEffect } from "react";
import { init } from "@socialgouv/matomo-next";
const MATOMO_URL = "https://analytics.aivinya.com";
const MATOMO_SITE_ID = "4";

export default function Home() {

  useEffect(() => {
    console.log("Analytics on...")
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);


  useEffect(()=>{
    // tiledesk
    function initTiledesk() {
      console.log('initTiledesk');

      window.tiledeskSettings = {
        projectid: "635a41fc85de9f001ae6dcea"
      };
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://widget.tiledesk.com/v4/launch.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'tiledesk-jssdk');
    }

    initTiledesk();
  },[])
  return (
    <>

      {/*====== Header Start ======*/}
      <HomeHeader />
      {/*====== Header End ======*/}
      {/*====== Hero Area Start ======*/}
      <IndexHeroArea />
      {/*====== Hero Area Start ======*/}
      {/*====== Service Area Start ======*/}
      <Service2Area />
      {/*====== Service Area End ======*/}
      {/*====== About section Start ======*/}
      <IndexAboutSection />
      {/*====== About section End ======*/}
      {/*====== Counter area Start ======*/}
      {/* <HomeCounterSection /> */}
      {/*====== Counter area End ======*/}
      {/*====== Skill area Start ======*/}
      {/* <HomeSkillSection /> */}
      {/*====== Skill area End ======*/}
      {/*====== Team section Start ======*/}
      {/* <IndexTeamSection /> */}
      {/*====== Team section End ======*/}
      {/*====== CTA section Start ======*/}
      <HomeCTASection />
      {/*====== CTA section End ======*/}
      {/*====== Testimonials area start ======*/}
      {/* <IndexTestimonialsArea /> */}
      {/*====== Testimonials area End ======*/}
      {/*====== Footer Start ======*/}
      <Footer1 />
      {/*====== Footer End ======*/}
    </>
  );
}
