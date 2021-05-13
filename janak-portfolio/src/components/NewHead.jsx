import React from 'react'
import profile_new from "./profile_new.jpg"
import {
    FaLinkedinIn,
    FaGithub,
    FaMediumM
} from "react-icons/fa";
//import Typewriter from 'typewriter-effect';

const NewHead = () => {
    return (
        <div className='newHead_parent'>
            <div className='newHead_img'>
                <img src={profile_new} alt='profile pic'/>
            </div>
            <div className='newHead_text'>
                <div className="header__section">                        
                        <h1 style={{color:"white",fontSize:"35px",marginTop:"10px"}}>
                            Janakbharadwaj Adluri
                        </h1>
                        <p style={{color:"white",fontWeight:"600",marginBottom:"15px"}}>
                            Full Stack Developer
                            {/* <Typewriter
                                onInit={(typewriter)=>{
                                    typewriter
                                    .typeString("Respect time, be punctual")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Ready to Collaborate online")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start()
                                }}
                            />​ */}
                        </p>
                        <ul className="header__ul">
                            <li>
                                <a href="https://www.linkedin.com/in/janakbharadwaj-adluri/" target="_blank" rel="noreferrer"><FaLinkedinIn className="headerIcon" /></a>
                            </li>
                            <li>
                                <a href="https://github.com/janakbharadwaj" target="_blank" rel="noreferrer"><FaGithub className="headerIcon" /></a>
                            </li>
                            <li>
                                <a href="https://janakbharadwaj-adluri.medium.com/" target="_blank" rel="noreferrer"><FaMediumM className="headerIcon" /></a>
                            </li>
                        </ul>
                        <br/>
                        <div style={{marginBottom:"30px"}}>
                            <a href="https://drive.google.com/u/0/uc?id=1WKmOQd4R-DR6l5LhxSOGPNP6yhc9BA2k&export=download" className="btn btn-outline">
                                Resume 
                            </a>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default NewHead
