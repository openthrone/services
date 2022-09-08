import React from "react";
import Circle3 from "../ProgressBar/Circle3";
import Circle4 from "../ProgressBar/Circle4";
const TeamSkillArea = () => {
    return (
        <section className="skill-section with-gallery">
            <div className="grey-bg skill-section-top">
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <span className="title-tag">Counter</span>
                        <h2 className="title">Some Fun Facts</h2>
                    </div>
                    <div className="pie-charts">
                        <div className="single-pie-chart">
                            <div
                                className="chart"
                                data-percent={61}
                                data-bar-color="#1baaa0"
                            >
                                <span>61</span>
                            </div>
                            <Circle3 />
                            <h4 className="title">Work Progress</h4>
                            <p>
                                As emerging technologies converge with urban
                                planning, a revolution of automated, on-demand
                            </p>
                        </div>
                        <div className="single-pie-chart">
                            <div
                                className="chart"
                                data-percent={85}
                                data-bar-color="#1baaa0"
                            >
                                <span>85</span>
                            </div>
                            <Circle4 />
                            <h4 className="title">Projects Done</h4>
                            <p>
                                As emerging technologies converge with urban
                                planning, a revolution of automated, on-demand
                            </p>
                        </div>
                        <div className="single-pie-chart">
                            <div
                                className="chart"
                                data-percent={61}
                                data-bar-color="#1baaa0"
                            >
                                <span>61</span>
                            </div>
                            <Circle3 />
                            <h4 className="title">Work Progress</h4>
                            <p>
                                As emerging technologies converge with urban
                                planning, a revolution of automated, on-demand
                            </p>
                        </div>
                        <div className="single-pie-chart">
                            <div
                                className="chart"
                                data-percent={85}
                                data-bar-color="#1baaa0"
                            >
                                <span>85</span>
                            </div>
                            <Circle4 />
                            <h4 className="title">Projects Done</h4>
                            <p>
                                As emerging technologies converge with urban
                                planning, a revolution of automated, on-demand
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="skill-gallery">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="image mb-30">
                                <img src="img/skillset/06.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image mb-30">
                                <img src="img/skillset/07.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSkillArea;
