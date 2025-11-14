import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { title: "C++", progress: 90 },
    { title: "JavaScript", progress: 85 },
    { title: "React.js", progress: 85 },
    { title: "Node.js", progress: 75 },
    { title: "Express.js", progress: 78 },
    { title: "MongoDB", progress: 80 },
    { title: "SQL", progress: 70 },
    { title: "HTML", progress: 90 },
    { title: "CSS", progress: 85 },
    { title: "Tailwind CSS", progress: 80 },
    { title: "Git & GitHub", progress: 85 },
  ];

  return (
    <div>
      <h3>DEVELOPMENT SKILLS</h3>
      {skills.map((element) => {
        return (
          <div key={element.title} className="progressBar">
            <p>{element.title}</p>
            <span>
              <FaRegDotCircle
                style={{
                  right: `${element.progress > 85 ? 0 : 100 - element.progress}`,
                }}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
