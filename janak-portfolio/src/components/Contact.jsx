import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              {/* <p>
                Mancherial, Telangana - 504208
              </p> */}
              <p>
                <a href="mailto: janakbharadwaj.adluri@gmail.com" style={{color:"white"}}>janakbharadwaj.adluri@gmail.com</a><br/>             
              </p>
              <p>
                8106896489
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
