import React from "react";

const skillsContent = [
  {
    name: "HTML",
    skillPercent: "90",
  },
  {
    name: "CSS",
    skillPercent: "70",
  },
  {
    name: "Javascript",
    skillPercent: "60",
  },
  {
    name: "React.Js",
    skillPercent: "40",
  },
  {
    name: "Angular",
    skillPercent: "40",
  },
  {
    name: "Python",
    skillPercent: "80",
  },
  {
    name: "Java",
    skillPercent: "60",
  },
  {
    name: "SQL",
    skillPercent: "60",
  },
  {
    name: "C++",
    skillPercent: "50",
  },
  {
    name: "YAML",
    skillPercent: "50",
  },
  {
    name: "JSON",
    skillPercent: "70",
  },
  {
    name: "Figma",
    skillPercent: "50",
  },
  {
    name: "Balsamiq",
    skillPercent: "80",
  },

];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
