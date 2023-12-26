import React from "react";
import { FaPlay } from "react-icons/fa";

function FirstPage() {
  return (
    <div
      className="first"
      style={{
        backgroundImage: `url('banner-bg.jpg')`,
        backgroundSize: "cover",
        height: "109vh",
        width: "100%",
        margin: "0",
        padding: "0",
        border: "0",
      }}
    >
      <div className="c1">
        <h1>
          Enter a world of <span>Photos</span>& Amazing <span>Awards</span>
        </h1>
        <hr className="horizontalLine" />
        <p>
          SnapX Photography is a professional website template with 5 different
          pages for maximum custumizations. It is free for commercial usage.
          This Bootstrap v5.1.3 CSS layout is provided by TemplateMo Free CSS
          Template.
        </p>
      </div>
      <div className="c2">
        <button
          className="btn"
          style={{
            height: "55px",
            borderRadius: "10px",
            border: "2px rgb(88, 86, 86)",
            borderStyle: "solid",
            backgroundColor: "transparent",
						fontSize: 'medium',
						color: 'whitesmoke'
          }}
        >
          Explore SnapX Contest
        </button>
        <button
          className="btn"
          style={{
            height: "55px",
            border: "none",
            backgroundColor: "transparent",
						fontSize: 'medium',
						color: 'whitesmoke'
          }}
        >
          <FaPlay style={{color: "whitesmoke"}}/> Watch Our Video Now
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
