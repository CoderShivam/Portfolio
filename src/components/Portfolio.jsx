import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";

const Portfolio = ({ show, setShow }) => {
  const projects = [
    {
      _id: "1",
      title: "SerendipityMind – Mental Wellness Platform",
      category: "MERN STACK",
      thumbnail: "/serendipity.png",
      projectUrl: "https://github.com/CoderShivam/SerendityMind",
    },
    {
      _id: "2",
      title: "Job_RaShPi – Career Guidance Platform",
      category: "MERN STACK",
      thumbnail: "/jobrashpi.png",
      projectUrl: "https://github.com/CoderShivam/job_rashpi/tree/shivam",
    },
    {
      _id: "3",
      title: "Personal Portfolio Website",
      category: "Frontend",
      thumbnail: "/portfolio.png",
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
                <div className="card" key={element._id}>
                  <img src={element.thumbnail} alt="project-thumbnail" />
                  <div>
                    <span>
                      <p>{element.category}</p>
                      <p>{element.title}</p>
                    </span>
                    <span>
                      <a
                        href={element.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/arrow.svg" alt="arrow" />
                      </a>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
