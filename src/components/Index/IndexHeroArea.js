import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const IndexHeroArea = () => {
  return (
    <section
      style={{
        paddingTop: "6rem",
      }}
      className="hero-area"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="hero-text">
              <Fade left>
                <h2 className="title wow fadeInLeft" data-wow-delay="0.5s">
                  Modern <span>Software Development </span> Company
                </h2>
              </Fade>
              <ul className="hero-btns">
                <Fade bottom>
                  <li className="wow fadeInUp" data-wow-delay="0.7s">
                    <Link href="/contact">
                      <a className="main-btn">Get Quote</a>
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-md-10">
            <Fade right>
              <div
                className="hero-img text-lg-end text-center wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <img src="img/hero-img/hero-01.png" alt="HeroImage" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexHeroArea;
