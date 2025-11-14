import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";

const Portfolio = ({ show, setShow }) => {
  const projects = [
    {
      _id: "1",
      title: "SerendipityMind – Mental Wellness Platform",
      category: "MERN STACK",
      thumbnail: "A_2D_digital_illustration_depicts_a_mental_wellnes.png",
      projectUrl: "https://github.com/CoderShivam/SerendityMind",
    },
    {
      _id: "2",
      title: "Job_RaShPi – Career Guidance Platform",
      category: "MERN STACK",
      thumbnail: "A_flat-style_digital_illustration_depicts_four_stu.png",
      projectUrl: "https://github.com/CoderShivam/job_rashpi/tree/shivam",
    },
    {
      _id: "3",
      title: "Personal Portfolio Website",
      category: "Frontend",
      thumbnail: "A_vector-based_digital_illustration_serves_as_an_i.png",
      projectUrl: "https://github.com/CoderShivam",
    },
  ];

  return (
    <section className="page portfolioPage">
      <Navbar show={show} />
      <TbGridDots onClick={() => setShow(!show)} className="hamburger" />

      <div className="banner">
        <div className="header">
          <img src="/star.png" alt="star" />
          <h1>PROJECTS</h1>
          <img src="/star.png" alt="star" />
        </div>

        <div className="latest-projects">
          <div className="first-column">
            {projects.map((element) => {
              return (
                <a
                  href={element.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  key={element._id}
                >
                  <div className="card" style={{ cursor: "pointer" }}>
                    <img src={element.thumbnail} alt="project-thumbnail" />
                    <div>
                      <span>
                        <p>{element.category}</p>
                        <p>{element.title}</p>
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
