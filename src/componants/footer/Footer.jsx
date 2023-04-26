import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
  

  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          We are not the most popular Streaming Platform but we are the most
          demanded platform. On our Platform you can see different kind of
          Videos and Movies. Also if you like the site you can go to the other
          social media handle to Follow us and Day to Day Update. <br />
          =====Dhanyawaad=====
        </div>
        <div className="socialIcons">
        <Link to ='https://www.instagram.com/_oye.shubham'>  <span className="icon" >
            <FaInstagram />
          </span> </Link>
         <Link to ='https://github.com/shubham6772'> <span className="icon" >
            <FaGithub />
          </span> </Link>
          <Link to ='https://www.linkedin.com/in/shubham-verma-b5a541273/'><span className="icon" >
            <FaLinkedin />
          </span> </Link>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
