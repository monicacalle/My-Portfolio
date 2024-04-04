import React from "react";
import { Link } from "react-router-dom";
import { github, logo, linkedin } from "../assets";

const Footer = () => {
  return (
    <footer class=" footer text-xs">
      <p>&copy;2024 Mónica Calle | All Rights Reserved</p>
      <ul class="social-icon flex justify-between gap-5 align-middle">
        <li class="social-icon__item">
          <Link to="https://github.com/monicacalle" target="_blank">
            <img src={github} alt="github" className="w-7 h-7 object-contain" />
          </Link>
        </li>
        <li class="social-icon__item">
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
