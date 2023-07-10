import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalOne from "./Modal/ModalOne";
import ModalTwo from "./Modal/ModalTwo";
import ModalThree from "./Modal/ModalThree";

Modal.setAppElement("#root");

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  

  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          speed: 300,
          draggable: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="news_inner my_carousel">
        <ul>
          <Slider {...settings}>
          <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalTwo}>
                  <img src="img/portfolio/dotsAndBoxes.JPG" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        "img/portfolio/dotsAndBoxes.JPG"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="news_details">
                  <h3 className="title" onClick={toggleModalTwo}>
                    Dots and Boxes
                  </h3>
                </div>
                {/* End details */}
              </div>
              {/* End list inner */}
            </li>
            {/* End single blog Two */}
            
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image" onClick={toggleModalOne}>
                  <img src="img/portfolio/iceparadise.JPG" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${"img/portfolio/iceparadise.JPG"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="news_details">
                  <h3 className="title" onClick={toggleModalOne}>
                    Ice Paradise Icecream Parlor
                  </h3>
                </div>
                {/* End details */}
              </div>
            </li>
            {/* End single blog One */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalThree}>
                  <img src="/img/portfolio/Hanger.JPG" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "/img/portfolio/Hanger.JPG"
                      })`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="news_details">

                  <h3 className="title" onClick={toggleModalThree}>
                    Hanger
                  </h3>
                </div>
                {/* End details */}
              </div>
              {/* END LIST INNER */}
            </li>
            {/* End single blog Three */}
            {/* End single blog Four */}
          </Slider>
        </ul>

        {/* Start Modal One */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="modalbox">
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner">
              <ModalOne />
            </div>
            {/* End box inner */}
          </div>
          {/* End modal box news */}
        </Modal>
        {/* End modal One */}

        {/* Start Modal Two */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="modalbox">
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* End close modal */}
            <div className="box_inner">
              <ModalTwo />
            </div>
          </div>
        </Modal>
        {/* End modal Two */}

        {/* Start Modal Three */}
        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="modalbox">
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE MODAL */}
            <div className="box_inner">
              <ModalThree />
            </div>
          </div>
        </Modal>
        {/* End Modal Three */}
      </div>
    </>
  );
};

export default Blog;
