import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaMediumM,
  FaSlackHash
} from "react-icons/fa";

const Banner = () => {
  return (
    <header className="header">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__content">
                <div className="header__section">
                  <ul className="header__ul">
                    <li>
                      <a href="https://www.linkedin.com/in/janakbharadwaj-adluri/"><FaLinkedinIn className="headerIcon" /></a>
                    </li>
                    <li>
                      <a href="https://github.com/janakbharadwaj"><FaGithub className="headerIcon" /></a>
                    </li>
                    <li>
                      <a href="https://hashnode.com/@janakbharadwaj95"><FaSlackHash className="headerIcon" /></a>
                    </li>
                    <li>
                      <a href="https://janakbharadwaj-adluri.medium.com/"><FaMediumM className="headerIcon" /></a>
                    </li>
                  </ul>
                  <h1>I am Janakbharadwaj</h1>
                  <p>Full Stack Web Developer​</p>
                  <div className="header__buttons">
                    <a href="https://drive.google.com/file/d/1WKmOQd4R-DR6l5LhxSOGPNP6yhc9BA2k/view?usp=sharing" className="btn btn-outline">
                      Resume 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
