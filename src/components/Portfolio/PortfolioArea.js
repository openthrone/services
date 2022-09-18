import Isotope from "isotope-layout";
import Fade from "react-reveal/Fade";
import Link from "next/dist/client/link";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useRef, useState, useContext } from "react";
import Loader from "../../layout/Loader";
// import websitesLinks from "./dataPortfolio";
import axios from "axios";
import ModalAddPortfolio from "./ModalAddPortfolio";
import AuthContext from "../../../context/AuthProvider";
import Router, { useRouter } from "next/router";
import { BASE_URL } from "../../utils";

const PortfolioArea = () => {
  // checking user authentication
  const { auth } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // category filter
  const [selectedCategory, setSelectedCategory] = useState({
    cat: "all",
    active: false,
  });

  // Data Websites and ScreenShot Generator
  const [websiteLinks, setWebsiteLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  // modal toggle states
  const [showModal, setShowModal] = useState(false);

  // handling modal toggle
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // get data from api
  useEffect(() => {
    const getData = async () => {
      try {
        var config = {
          method: "get",
          url: `${BASE_URL}/api/portfolio`,
          headers: {},
        };
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setWebsiteLinks(response.data);
            // setting categories
            console.log("data loaded ... ");
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (err) {
        console.log("unset loading ...");
        setLoading(false);
        console.log(err);
      }
    };
    console.log("set loading ...");
    setLoading(true);
    getData();
  }, []);

  useEffect(() => {
    if (auth.userInfo) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [auth]);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [activeClass, setActiveClass] = useState("*");
  // useEffect(() => {
  //   setTimeout(() => {
  //     isotope.current = new Isotope(".portfolio-filter", {
  //       itemSelector: ".grid-item___",
  //       layoutMode: "fitRows",
  //     });
  //   }, 300);
  //   return () => isotope.current.destroy();
  // }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    setActiveClass(key);
  };

  // setting catgories
  const categories = websiteLinks
    .map((item) => item.category)
    .filter((x, i, array) => array.indexOf(x) == i);

  return (
    <section className="portfolio-area section-gap">
      <div className="container">
        <div className="section-title text-center mb-30">
          <span className="title-tag">Our Portfolio</span>
          <h2 className="title" style={{ fontSize: "29px" }}>
            Successful Projects Completion within
            <span> 1 Week</span>
          </h2>
          {auth.userInfo && (
            <ul className="hero-btns" style={{ paddingTop: "20px" }}>
              <Fade bottom>
                <li className="wow fadeInUp" data-wow-delay="0.7s">
                  <button onClick={handleShow} className="main-btn">
                    Add Portfolio
                  </button>
                  <ModalAddPortfolio
                    token={auth.userInfo.accessToken}
                    show={showModal}
                    onHide={handleClose}
                  />
                </li>
              </Fade>
            </ul>
          )}
          <br />
          <h4>Categories</h4>
          <br />
        </div>
        <div className="container mb-30">
          <button
            className="main-btn"
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              borderRadius: "20px",
              padding: "0 20px 0 20px",
              margin: "0 1rem 0.8rem 1rem",
              backgroundColor: `${"#1e87f0"}`,
            }}
            onClick={() => setSelectedCategory({ cat: "all", active: true })}
          >
            All
          </button>
          {console.log(categories)}
          {!loading &&
            categories.map((item) => (
              <button
                className="main-btn"
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  borderRadius: "20px",
                  padding: "0 20px 0 20px",
                  margin: "0 1rem 0.8rem 1rem",
                  backgroundColor: `${"#1e87f0"}`,
                }}
                onClick={() => setSelectedCategory({ cat: item, active: true })}
              >
                {item}
              </button>
            ))}
        </div>
        <div
          className="portfolio-filter-items row"
          style={{ height: "auto !important;" }}
        >
          {loading ? (
            <Loader size={150} />
          ) : selectedCategory.cat === "all" ? (
            websiteLinks.map((item) => (
              <div
                key={item._id}
                className="col-xl-3 grid-item___ col-md-6 graphics ui-ux consultancy"
              >
                <div key={item._id} className="portfolio-box-three mt-30">
                  <div
                    key={item._id}
                    className="thumb"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                    }}
                  />
                  <div className="content">
                    <div className="tags">
                      <p style={{ color: "#41e341", fontWeight: "bolder" }}>
                        {" "}
                        {item.category ? item.category : "Website"}{" "}
                      </p>
                    </div>
                    <h4 className="title">
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.title}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            websiteLinks
              .filter((item) => item.category === selectedCategory.cat)
              .map((item) => (
                <div
                  key={item._id}
                  className="col-xl-3 grid-item___ col-md-6 graphics ui-ux consultancy"
                >
                  <div key={item._id} className="portfolio-box-three mt-30">
                    <div
                      key={item._id}
                      className="thumb"
                      style={{
                        backgroundImage: `url(${item.imageUrl})`,
                      }}
                    />
                    <div className="content">
                      <div className="tags">
                        <p style={{ color: "#41e341", fontWeight: "bolder" }}>
                          {" "}
                          {item.category ? item.category : "Website"}{" "}
                        </p>
                      </div>
                      <h4 className="title">
                        <a
                          href={item.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.title}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioArea;
