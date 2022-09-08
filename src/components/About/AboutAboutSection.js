import Link from "next/link";
import React from "react";

const AboutAboutSection = () => {
    return (
        <section className="about-section section-gap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-6 col-lg-9">
                        <div className="about-experience-galley mb-lg-gap-50">
                            <div
                                className="image-one"
                                style={{
                                    backgroundImage:
                                        "url(img/experience-gallery/01.jpg)",
                                }}
                            ></div>
                            <div
                                className="image-two"
                                style={{
                                    backgroundImage:
                                        "url(img/experience-gallery/02.jpg)",
                                }}
                            ></div>
                            <div
                                className="image-three"
                                style={{
                                    backgroundImage:
                                        "url(img/experience-gallery/03.jpg)",
                                }}
                            ></div>
                            <div className="experience-tag">
                                <span>
                                    <span className="count">30</span>Years
                                    Experience
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="about-text">
                            <div className="section-title mb-30">
                                <span className="title-tag">About Us</span>
                                <h2 className="title">
                                    Get an amazing experience with quality level
                                    team
                                </h2>
                            </div>
                            <p>
                                Productservices are professional services that
                                help market or advertise your business online.
                                Best Way to Manage and Share Work Resources.
                            </p>
                            <Link href="/about">
                                <a className="main-btn mt-30">Learn More</a>
                            </Link>
                            <div className="about-author">
                                <div className="author-img">
                                    <img
                                        src="img/about-author.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="author-desc">
                                    <h5>Rosalina D. William</h5>
                                    <span>Founder of Bella</span>
                                </div>
                                <div className="brand-img">
                                    <img src="img/brand/2.png" alt="2.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAboutSection;
