import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaMediumM,
  FaSlackHash
} from "react-icons/fa";
import Typewriter from 'typewriter-effect';

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
                  <h1>
                    <Typewriter
                      onInit={(typewriter)=>{
                        typewriter.typeString("Am Janakbharadwaj")
                        .start()
                      }}
                    />
                  </h1>
                  <p>
                    <Typewriter
                      onInit={(typewriter)=>{
                        typewriter
                        .typeString("Full Stack Developer")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("I respect time, be punctual")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Comfortable to work remote and onsite")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Full Stack Developer")
                        .start()
                      }}
                    />​
                  </p>
                  <div className="header__buttons">
                    <a href="https://drive.google.com/u/0/uc?id=1WKmOQd4R-DR6l5LhxSOGPNP6yhc9BA2k&export=download" className="btn btn-outline">
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
