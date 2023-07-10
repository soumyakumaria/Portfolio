import React from "react";
import { useState } from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Address from "../../components/Address";
import HeaderMobile from "../../components/header/HeaderMobile";

const Home = () => {
  const [isDark, setIsDark] = useState(true);
  document.querySelector("body").classList.remove("rtl");

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };
  return (
    <div
      className={`home-light mainpart ${isDark ? "theme-dark" : ""}`}
    >


      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>

      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
      <About />
      {/* End Hero */}

      


      <div className="news" id="blog">
        <div className="container">
          <div className="title">
            <h3>Projects</h3>
            <p>
              Please click on one of the images below to get more information about the project.
            </p>
          </div>
          {/* End ediantitle */}
          <Blog />
        </div>
      </div>
      {/* End Blog */}

      <div className="contact" id="contact">
        <div className="container">
          <div className="title">
            <h3>Contact</h3>
            <p>
              Please feel free to contact me.
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
              </div>
              {/* End title */}
              <div className="fields">
                <Contact />
              </div>
              {/* End Contact Form */}
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default Home;
