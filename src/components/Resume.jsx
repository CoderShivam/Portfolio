import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import Skills from "./sub-components/Skills";
import Languages from "./sub-components/Languages";
import Education from "./sub-components/Education";
import Hobbies from "./sub-components/Hobbies";

const Resume = ({ show, setShow }) => {
  return (
    <>
      <section className="page resumePage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
        <div className="banner">

          <div className="first-column">
            <Skills />
            <Languages />

            <div className="personal-skills">
              <h3>PERSONAL SKILLS</h3>
              <p>
                Creativity - Team Work - Time Management - Problem Solving
              </p>
            </div>
          </div>

          <div className="second-column">
            <Education />
          </div>

          <div className="third-column">
            <div>
              <h3>WHAT CAN I DO</h3>
              <p>
                MERN Stack Development - Frontend Development{" "}
                <span>Responsive UI Design - API Integration</span>
                <span>Code Debugging - Performance Optimization</span>
              </p>
            </div>

            <div>
              <h3>ADDITIONAL EXPERTISE</h3>
              <p>
                Database Management - Version Control{" "}
                <span>Problem Solving - Project Structuring</span>
              </p>
            </div>

            <div>
              <h3>HOBBIES AND INTERESTS</h3>
              <Hobbies />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Resume;
