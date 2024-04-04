import React from "react";
import { Link } from "react-router-dom";
import { github, logo, linkedin } from "../assets";

const Footer = () => {
  return (
    <footer className=" footer text-xs">
      <p>&copy;2024 Mónica Calle | All Rights Reserved</p>
      <ul className=" flex justify-between gap-5 align-middle cursor-pointer">
        <li>
          <Link to="https://github.com/monicacalle" target="_blank">
            <img src={github} alt="github" className="w-7 h-7 object-contain" />
          </Link>
        </li>
        <li>
          <Link
            to="https://linkedin.com/in/monica-calle-betancourt"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="w-7 h-7 object-contain"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
