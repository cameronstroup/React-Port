import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="linkedin.com/in/cameron-stroup-10a71b91"
      >
        <FontAwesomeIcon icon="fab fa-linkedin-in" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/cameronstroup"
      >
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:cameron.d.stroup@gmail.com"
      >
        <FontAwesomeIcon icon="fa-solid fa-square-envelope" />
      </a>

      <a target="_blank" rel="noopener noreferrer" href="tel:512-964-4404">
        <FontAwesomeIcon icon="fa-solid fa-mobile" />
      </a>
      <p>Copyright © Cameron Stroup </p>
    </footer>
  );
};

export default Footer;
