import React from "react";
import image from "../images/ARCHI.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info(){
    return(
        <div className="info">
            <img className="info--photo" src={image} alt="Archita Jain" />
            <h1 className="info--fullname">Archita Jain</h1>
      <h5 className="info--role">Front End Developer</h5>
      <p className="info--website">
      <a
          className="info--websiteLink"
          href="https://archita-rouge.vercel.app/"
          target="_blank"
          rel="Archita's portfolio"
        >Archita Jain's Portfolio</a>
        </p>
        <div className="info--buttons">
        <address>
          <a href="mailto:archijain2508@gmail.com">
            {" "}
            <button className="button button--email">
            <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/archijain2552/"
          target="_blank"
          rel="Archita Jain"
        >
          <button className="button button--linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
        </div>
    )
}
export default Info