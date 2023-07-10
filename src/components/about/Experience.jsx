import React from "react";

const experienceContent = [
  {
    year: "   2022 - 2023",
    position: " Application Developer",
    compnayName: "S.I. Systems",
  },
  {
    year: "2021 - 2022",
    position: " Software Developer Intern",
    compnayName: "TC Energy",
  },
  {
    year: "2018 - 2020",
    position: "Store Manager",
    compnayName: "Jugo Juice",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
