import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaWhatsapp } from "react-icons/fa";

const Home = ({ show, setShow }) => {
  return (
    <>
      <section className="page homePage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
        <div className="banner">
          <h1>SHIVAM</h1>
          <h1>GUPTA</h1>
          <p>Web Developer</p>
          <div className="btns">
            <a
              href="https://drive.google.com/uc?export=download&id=1qP7GtgmbO1RborhyQiKDnznoOkHfc-3s"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>
        <footer>
          <ul>
            <a
              href="https://www.linkedin.com/in/shivam-gupta-b373092a6/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/CoderShivam" target="_blank" rel="noreferrer">
              <FaGithubSquare />
            </a>
            <a href="https://wa.me/918077628541" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </ul>
          <span>© 2025 Shivam Gupta. All rights reserved.</span>
        </footer>
      </section>
    </>
  );
};

export default Home;
