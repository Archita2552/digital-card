
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/Archita2552/"
        target="_blank"
        rel="Archita Jain"
      >
        <FontAwesomeIcon icon={faGithubSquare} className="footer--icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/archijain2552/"
        target="_blank"
        rel="Archita Jain"
      >
        <FontAwesomeIcon icon={faLinkedin} className="footer--icon" />
      </a>
    </div>
  );
}
