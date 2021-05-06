import React from "react";
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

let arr = [{
  heading: "Royal Brothers",
  desc:"As a team of 3 we made the end to end clone of royal brothers website, a web application to rent two wheelers",
  tech:"HTML | CSS | JavaScript | React | Axios | Node | Express | MongoDB ",
  responsibilities1 :"Created Navbar and made it accessible to other contributors, Laid out the database schema.",
  responsibilities2:"Developed the Monthly rentals page and left navbar, Integrated the frontend and backend.",
  git:"https://github.com/janakbharadwaj/royal_brothers",
  blog:"https://janakbharadwaj.hashnode.dev/janak-royal-brothers"
},
{
  heading: "Product Hunt",
  desc:"An online product portal where users can browse, research, and post products, we were the team of 4",
  tech:"HTML | CSS | JavaScript | React | JSON mock server | Axios",
  responsibilities1 :"Scraped data from the original product hunt, Developed pixel-perfect UI of the Discussions page.",
  responsibilities2:"Implemented features like Single Discussion Redirct, Modal, Filters, Git handling.",
  git:"https://github.com/nitansh11/product-hunt",
  blog:"https://janakbharadwaj.hashnode.dev/janak-bharadwaj-product-hunt"
},
{
  heading: "Carb Manager",
  desc:"As a team of 3 we made the clone of carb manager website, A Place where a fitness freak can find all the information needed regarding exercises, diet, and yoga.",
  tech:" HTML | CSS | JavaScript",
  responsibilities1 :"Developed pixel-perfect UI of the Exercises and data visualization pages, Git handling and error resolving",
  responsibilities2:"Implemented features like Single Exercise Redirct, Modal, Filters, Search, Team collaboration and work division",
  git:"https://github.com/nitansh11/scandium",
  blog:"https://janakbharadwaj-adluri.medium.com/creating-dynamic-web-pages-with-html-css-and-javascript-7c12c21a069d"
},
{
  heading: "Nifty",
  desc:"We were the team of 2, with the very basic knowledge of developement we made the clone of Nifty website which is a project management site",
  tech:"HTML | CSS ",
  responsibilities1 :"Created basic UI of Landing page, clients page complete, Remote work adapatability.",
  responsibilities2:"GIT handling, merging branches and resolving conflicts on GIT, Login and readme",
  git:"https://github.com/janakbharadwaj/titanium",
  blog:"https://janakbharadwaj-adluri.medium.com/making-a-replica-of-the-nifty-website-in-just-3-days-6aacde1b9f99"
},
{
  heading: "MedicJAM",
  desc:"It is altogether a new Idea, we as a team of 3 trieed to implement the new tech stack in 48 hours as a part of hackathon, its based on current pandemic",
  tech:"Next | MongoDB | JavaScript | Axios | Node | CSS",
  responsibilities1 :"Getting hold of new tech stack, Creating static design of product",
  responsibilities2:"Implementing features in best possible way in given time limit",
  git:"https://github.com/janakbharadwaj/CoderJAM",
  blog:""
},
{
  heading: "Chat Application",
  desc:"Solo project, Group messagaging application, Inspired by Whatsapp, user will be able to join different groups available, user will get notification on each group message",
  tech:"JavaScript | React |  CSS | Socket.io | Express",
  responsibilities1 :"Implementing group messages feature, Viewing all group members",
  responsibilities2:"Understanding socket.io, implemeting frameworks like antd",
  git:"https://github.com/janakbharadwaj/chat-application",
  blog:""
}
]

const Projects = () => {
  // const [isModalVisible, setIsModalVisible] = React.useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <div className="projects">
      <div className="container">
        <div className="common">         
          <h1 className="mainHeader">Projects</h1>
        </div>
        <div className="row">
          {arr.map((item) => (
            <div className="col-4">
              <div className="project">
                <div className="projectHeading">{item.heading}</div>
                <div style={{lineHeight:"20px"}}>{item.desc}</div>
                <br/>
                <h3 style={{color:"rgb(211,67,81)"}}>Tech Stack</h3>
                
                <div style={{lineHeight:"25px"}}>{item.tech}</div>
                <br/>
                <h3 style={{color:"rgb(211,67,81)"}}>Roles and Responsibilities</h3>
                <ul>
                  <li>{item.responsibilities1}</li>
                  <li>{item.responsibilities2}</li>
                  {/* <li>{item.responsibilities3}</li>
                  <li>{item.responsibilities4}</li> */}
                </ul>
                <div className='projectButtons'>
                  <button>
                    <a href={item.git} className="btn">
                      GIT
                    </a>
                  </button>
                  <button>
                    <a href={item.blog} className="btn">
                      Blog
                    </a>
                  </button>
                </div>
                {/* <div>
                  <button type="default" onClick={showModal}>
                      More Info
                  </button>
                  <Modal 
                      title={item.heading} 
                      visible={isModalVisible} 
                      onOk={handleOk} 
                      onCancel={handleCancel} 
                      okButtonProps={{style:{display:'none'}}}
                      cancelButtonProps={{style:{display:'none'}}}
                  >
                      <h3 style={{color:"rgb(211,67,81)"}}>Roles and Responsibilities</h3>
                      <ul>
                        <li>{item.responsibilities1}</li>
                        <li>{item.responsibilities2}</li>
                        <li>{item.responsibilities3}</li>
                        <li>{item.responsibilities4}</li>
                      </ul>
                  </Modal>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
