import React from 'react'

const Pic = () => {
  const [state] = React.useState({
    title: "I am Janakbharadwaj",
    text: "Full Stack Web Developer​",
    image: "/images/slack_pic.png",
  });
  return (
    <div className="profilePicture">
      <img src={state.image} alt='profile pic'/>
    </div>
  )
}

export default Pic


//background: "linear-gradient(to left, #bdc3c7, #2c3e50)"