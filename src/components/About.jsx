import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";

const About = ({ show, setShow }) => {
  return (
    <>
      <section className="page aboutPage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />

        <div className="banner">
          <div className="content">
            <div>
              <h1>ABOUT</h1>
              <h3>shivammnnit8257@gmail.com</h3>
            </div>

            <div>
              Hello, I'm <strong>Shivam Gupta</strong>, a passionate{" "}
              <strong>Full Stack Developer</strong> specializing in the MERN
              stack. I enjoy building modern, scalable, and high-performance web
              applications with clean UI and efficient backend logic. With a
              strong foundation in Data Structures & Algorithms and hands-on
              experience developing real-world projects, I aim to create
              seamless digital experiences that blend design, functionality, and
              performance.{" "}
              <span>
                I’m deeply interested in problem-solving, crafting optimized
                solutions, and continuously exploring new technologies. My
                focus is on writing clean code, building impactful projects, and
                delivering meaningful user experiences. Let’s collaborate and
                turn ideas into reality!
              </span>
            </div>

            <div>
              <p>Prayagraj, India</p>
              <p>MNNIT Allahabad</p>
            </div>
          </div>

          <div className="profileImage">
            <img src="/my.jpg" alt="profilImage" />
            <span></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
