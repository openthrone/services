import Link from "next/link";
import React from "react";
import HomeCTASection from "./HomeCTASection";

const ServiceProcessSection = () => {
  return (
    <section className="process-section process-with-cta">
      <div className="section-gap-top secondary-bg">
        <div className="container">
          <div className="section-title color-white text-center mb-20">
            <span className="title-tag">Process</span>
            <h2 className="title">How It Works</h2>
          </div>
          <div className="row process-boxes justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="process-box mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: "url(img/process/01.jpg)",
                  }}
                />
                <div className="desc">
                  <h4>Project Discussions</h4>
                  <span className="count">01</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="process-box mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: "url(img/process/02.jpg)",
                  }}
                />
                <div className="desc">
                  <h4>Wireframe &amp; Design</h4>
                  <span className="count">02</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="process-box mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: "url(img/process/03.jpg)",
                  }}
                />
                <div className="desc">
                  <h4>Finalize &amp; Handover</h4>
                  <span className="count">03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "9rem" }}>
        <HomeCTASection />
      </div>
    </section>
  );
};

export default ServiceProcessSection;
