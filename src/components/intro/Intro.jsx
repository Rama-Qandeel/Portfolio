import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="btn">
          <span>Hello</span>
        </div>
        <div className="wrapper">
          <h2>I'm Rama,</h2>
          <h3>
            Front-end <span ref={textRef}></span>
          </h3>
          <h3>based in Jordan.</h3>
        </div>
        <p>
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries,
        </p>
        <div className="btnContainer">
          <div className="switch">
            <div className="btn btnOff">
            </div>
            <div className="btn btnOn">
              <span>View my profile</span>
            </div>
          </div>
          <div className="btn btnWidth">
            <span>Hire me</span>
          </div>
        </div>
      </div>

      <div className="right">
        <img src="/assets/women.png" alt="girl" className="imgGirl" />
      </div>
    </div>
  );
};

export default Intro;
