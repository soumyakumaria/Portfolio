import React from "react";
import {
  FiLinkedin,
  FiGithub,
  FiMail,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/soumya-kumaria",
  },
  {
    iconName: <FiGithub />,
    link: "https://github.com/soumyakumaria",
  },
  {
    iconName: <FiMail />,
    link: "soumya.kumaria1@gmail.com",
  },

];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
