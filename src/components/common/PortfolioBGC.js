import Link from "next/link";
import React from "react";

const PortfolioBGC = () => {
  return (
    <section
      className="breadcrumb-section bgc"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="breadcrumb-text">
              <span className="title-tag">Welcome to our company</span>
              <h2
                style={{
                  fontSize: "35px",
                }}
                className="page-title"
              >
                Portfolio of Successful Projects
              </h2>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="breadcrumb-nav">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="separator">|</li>
                <li>Portfolio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBGC;
