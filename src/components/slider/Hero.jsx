import React from "react";
import Social from "../Social";
import ReactTyped from "react-typed";

const heroContent = {
  shapeImage: "profile_pic_best",
  heroImage: "profile_pic_best",
  name: "Soumya Kumaria",
  description: `I'm a software developer based in Canada with over 2 years of
  professional experience.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <img
            src={`img/hero/profile-pic/${heroContent.shapeImage}`}
            srcSet={`img/hero/profile-pic/${heroContent.heroImage}.jpg`}
            alt="about author"
          />
        </div>
        <div className="extra">
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            Hello, I'm {heroContent.name}
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={150}
                backSpeed={60}
                strings={["Energetic", "Driven", "Collabrative"]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Social />
          </div>
          <div
            className="button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
