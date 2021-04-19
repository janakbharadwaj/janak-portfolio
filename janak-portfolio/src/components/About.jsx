import React from "react";

let arr = [
{ id: 1, title: "Email:", text: "janakbharadwaj.adluri@gmail.com" },
{ id: 2, title: "Phone:", text: "8106896489" }]

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/slack_pic.png" alt="profile pic" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>About Me</h1>
              <div className="about__info-p1">
              A fiery Full Stack Developer enthusiastic in exigent technologies 
              like React, MongoDB. Devoted to achieving objectives in tight schedules, 
              potent of working remotely and collaborate online
              </div>
              <div className="about__info-p2">
              Love towards product development made me take a turn into the CS industry, 
              the thing that fascinates me about this industry is the wide range of technologies, 
              my innumerable experiences at Masai school made us sharpen our swords to conquer the 
              world of tech with JavaScript, HTML, CSS, React, MongoDB and various frameworks in our quiver. 
              Dedicated to achieving demanding development objectives. 
              </div>
              <div className="info__contacts">
                <div className="row">
                  {arr.map((item) => (
                    <div className="col-6">
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
