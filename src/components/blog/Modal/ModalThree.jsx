import React from "react";



import {
  FiGithub,
} from "react-icons/fi";


const Git = [
  {
    iconName: <FiGithub />,
    link: "https://github.com/soumyakumaria/Team-P-CPSC-481",
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

const ModalThree = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/portfolio/Hanger.JPG" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              "/img/portfolio/Hanger.JPG"
            })`,
          }}
        ></div>
      </div>
      {/* END IMAGE */}
      <div className="news_details">
        <h3 className="title">Hanger</h3>
      </div>
      {/* End details */}
      <div className="main_content">
        <div className="descriptions">
          <p>
            Hanger is a high fidelity protoype created for a wardrobe app.
            It was created by collabrating with five other people.
            Creation of this high fidelity prototype involved five stages in total.
            Following are the five stages -<br></br>
            1. Design and planning <br></br>
            2. User Research Report <br></br>
            3. Low fidelity prototype <br></br>
            4. Heuristic Evaluation <br></br>
            5. High fidelity prototype <br></br>
          </p>
        </div>
        {/* END DESCRIPTION */}
        <div className="news_share">
          <span>View Code:</span>
          <SocialGit />
          {/* <span>Applications Used: </span>
          Figma, Balsamiq */}
          {/* END SOCIAL SHARE */}
        </div>
      </div>
    </div>
  );
};

export default ModalThree;
