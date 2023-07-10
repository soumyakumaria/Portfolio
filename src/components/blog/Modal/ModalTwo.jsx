import React from "react";


import {
  FiGithub,
} from "react-icons/fi";


const Git = [
  {
    iconName: <FiGithub />,
    link: "https://github.com/soumyakumaria/DotsAndBoxes",
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

const ModalTwo = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/portfolio/dotsAndBoxes.JPG" alt="thumb" />
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
        <h3 className="title"> Dots and Boxes</h3>
      </div>
      {/* End details */}
      <div className="main_content">
        <div className="descriptions">
          <p>
            Dots and Boxes is a multiplaye player game. The game starts with
            an empty grid of dots. Players take turn joining unjoined adjacent dots. 
            The player that joins the last unjoined side of the box gets one point and another turn. 
            The player that has the highest number of joined boxes wins the game.
          </p>
          <p>
            This game is a three player game. If there is a tie then no one wins the game.
            A player can restart the game or go back to the home page to restart a new game.
          </p>
        </div>
        {/* End description */}
        <div className="news_share">
          <span>View Code:</span>
          <SocialGit />
          {/* <span> Languages Used:</span>
          HTML, CSS, Javascript */}
        </div>
        {/* End news share */}
      </div>
    </div>
  );
};

export default ModalTwo;
