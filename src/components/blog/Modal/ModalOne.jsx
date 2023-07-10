import React from "react";

import {
  FiGithub,
} from "react-icons/fi";

const Git = [
  {
    iconName: <FiGithub />,
    link: "https://github.com/soumyakumaria/IceParadise",
  }

];


const SocialGit = () => {
  return (
    <ul>
      {Git.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};
const ModalOne = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/portfolio/iceparadise.JPG" alt="website" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              "img/portfolio/iceparadise.JPG"
            })`,
          }}
        ></div>
      </div>
      {/* End image */}

      <div className="news_details">
        <h3 className="title">Ice Paradise Icecream Parlor</h3>
      </div>
      {/* End details */}

      <div className="main_content">
        <div className="descriptions">
          <p>
            Ice paradise is a static website for an icecream parlor.
            It is created using HTML and CSS only. 
          </p>
          <p className>
            The website consists of 5 pages -<br></br>
              1. Home<br></br>
              2. Menu<br></br>
              3. Location<br></br>
              4. About Us<br></br>
              5. Contact Us<br></br>
          </p>
        </div>
        {/* End description */}
        <div className="news_share ">
          <span>View Code:</span>
          <SocialGit />
          {/* <span>Languages Used:</span>
          HTML, CSS */}
        </div>
        {/* End news share */}
      </div>
    </div>
  );
};

export default ModalOne;
