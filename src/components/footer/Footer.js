import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <a
        className="Icon"
        target="_blank"
        rel="noopener noreferrer"
        href="linkedin.com/in/cameron-stroup-10a71b91"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/cameronstroup"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:cameron.d.stroup@gmail.com"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/Cslake12345"
      >
        <FontAwesomeIcon icon={faMailBulk} />
      </a>

      <a target="_blank" rel="noopener noreferrer" href="tel:512-964-4404">
        <FontAwesomeIcon icon={faPhone} />
      </a>
      <p>Copyright © Cameron Stroup </p>
    </footer>
  );
};

export default Footer;
