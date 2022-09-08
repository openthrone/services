import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import Counter from "../Counter";
import Line1 from "../ProgressBar/Line1";
import Line2 from "../ProgressBar/Line2";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const AboutSkillSection = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="skill-section section-gap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-7 col-md-10 order-lg-2">
                        <div className="skillset-video active ms-lg-5">
                            <Link href="/about">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpen(true);
                                    }}
                                    className="popup-btn popup-video"
                                >
                                    <i className="fas fa-play" />
                                </a>
                            </Link>

                            <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="pVE92TNDwUk"
                                onClose={() => setOpen(false)}
                            />
                            <div
                                className="video-bg"
                                style={{
                                    backgroundImage: "url(img/skillset/04.jpg)",
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-10 order-lg-1">
                        <div className="skill-text mt-md-gap-50">
                            <div className="section-title mb-30">
                                <span className="title-tag">Our Skillset</span>
                                <h2 className="title">
                                    Emerging technologies converge with urban
                                </h2>
                            </div>
                            <p>
                                Their creativity, innovation, technological
                                expertise, and project completion steps were
                                impressive. Project management was professional.
                                We’re a full-service creative digital marketing
                                agency, collaborating.
                            </p>
                            <div className="progress-bars progress-bars-two mt-40">
                                <div
                                    className="single-progress"
                                    data-count={72}
                                >
                                    <div className="title">
                                        <span>Main Strategy</span>
                                        <span className="progress-counter">
                                            <span className="count">
                                                <Counter end={72} />
                                            </span>
                                            %
                                        </span>
                                    </div>
                                    <Line1 />
                                </div>
                                <div
                                    className="single-progress"
                                    data-count={80}
                                >
                                    <div className="title">
                                        <span>Gaming &amp; Planning</span>
                                        <span className="progress-counter">
                                            <span className="count">
                                                <Counter end={80} />
                                            </span>
                                            %
                                        </span>
                                    </div>
                                    <Line2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSkillSection;
