import React from "react";
import "./education.scss";

const Education = () => {
  return (
    <div className="education">
      <div className="wrapper">
        <header>
          My <span>Education</span> & <span>Work Experience</span>
        </header>
        <div className="infoContainer">
        <div className="left">
          <header>Education</header>
          <div className="line"></div>
          <div className="details">
          <div className="text">
          Uniiveersity
          </div>
          <div className="date">
          2014 - 2019
          </div>
          </div>
          <p>dummy text of the printing</p>
          <div className="details">
          <div className="text">
          Uniiveersity
          </div>
          <div className="date">
          2014 - 2019
          </div>
          </div>
          <p>dummy text of the printing</p>
        </div>
        <div className="left">
          <header>Experience</header>
          <div className="line"></div>
          <div className="details">
          <div className="text">
          Uniiveersity
          </div>
          <div className="date">
          2014 - 2019
          </div>
          </div>
          <p>dummy text of the printing</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Education;
