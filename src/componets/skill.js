import logo from "../assests/img/MERN-logo.png";
import img1 from "../assests/img/pngegg (13).png";
import img2 from "../assests/img/pngegg (14).png";
import img3 from "../assests/img/pngegg (12).png";
import img4 from "../assests/img/pngegg (17).png";
import img5 from "../assests/img/pngegg (11).png";
import { motion } from "framer-motion";
// import { usestate } from "react";
import React, { useEffect, useRef, useState } from "react";

export const Skills = () => {
  const [width, setwidth] = useState(0);
  const slider_wrapper = useRef();

  return (
    <div className="containers" id="skills">
      <h1>Skills</h1>
      <div className="slider_wrapper">
        <div className="skill-list">
          <div className="skillss">
            <div className="images">
              <img src={logo} alt="" className="mern2" />
            </div>
          </div>
          <div className="skills">
            <div className="images">
              <img src={img1} alt="" className="mern" />
            </div>
          </div>
          <div className="skills">
            <div className="images">
              <img src={img2} alt="" className="mern" />
            </div>
          </div>
          <div className="skills">
            <div className="">
              <img src={img3} alt="" className="mern" />
            </div>
          </div>
          <div className="skills">
            <div className="">
              <img src={img4} alt="" className="mern" />
            </div>
          </div>
          <div className="skills">
            <div className="">
              <img src={img5} alt="" className="mern" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
