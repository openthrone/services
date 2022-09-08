import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const IndexAboutSection = () => {
  return (
    <div className="about-section section-gap">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <Fade left>
            <div className="col-lg-6 col-md-8 wow fadeInLeft">
              <div className="about-illustration mb-md-gap-50">
                <img src="img/illustration/01.png" alt="iimage" />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-6 col-md-10 wow fadeInRight">
              <div className="about-text">
                <div className="section-title mb-30">
                  <span className="title-tag">About Us</span>
                  <h2 className="title">
                    Get an amazing experience with quality level{" "}
                    <span>team</span>
                  </h2>
                </div>
                <p>
                  Smooth On-Boarding Process to Project Completion within{" "}
                  <span>
                    {" "}
                    <b> 1 Week </b>{" "}
                  </span>
                </p>
                <Link href="/service">
                  <a className="main-btn mt-30">Get Started</a>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default IndexAboutSection;
