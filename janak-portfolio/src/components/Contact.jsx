import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaMediumM,
  FaSlackHash
} from "react-icons/fa";
import { RiSurgicalMaskLine } from "react-icons/ri";
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div style={{textAlign:"center"}}>
                <h1 className="mainHeader">Contact</h1>
              </div>
              <p>
                <span style={{color:"rgb(255,74,87)"}}> Address </span> : Mancherial, Telangana - 504208
              </p>
              <p>
                <span style={{color:"rgb(255,74,87)"}}> Email </span> : janakbharadwaj.adluri@gmail.com<br/>             
              </p>
              <p>
                <span style={{color:"rgb(255,74,87)"}}> Phone </span>: 8106896489
              </p>
              <ul className="contactCircles">
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
              <br/>
              <div>
                <ContactForm/>
              </div>
              <br/>
              <div className='thankYouText'>
                <h1 style={{color:"white",fontSize:"40px"}}>Thank You</h1>
                <p style={{color:"white",fontSize:"30px"}}>
                  <RiSurgicalMaskLine className="headerIcon" />
                    <span>Wear Mask - Stay Safe</span>  
                  <RiSurgicalMaskLine className="headerIcon" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
