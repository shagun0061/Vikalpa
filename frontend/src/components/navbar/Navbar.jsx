import React from "react";
import "./style.scss";
import { BsArrowDownCircleFill } from 'react-icons/bs';

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="nav">
      <div id="title">Admit Card Generator</div>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="pageLink">Home</div>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/admitcard">
        <div className="pageLink">Download Admit Card   <BsArrowDownCircleFill/> </div>
      </Link>
    </div>
  );
};

export default Navbar;
