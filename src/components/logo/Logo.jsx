import React from "react";
import siteLogo from "../../../public/images/logo.png";
import { Link } from "react-router-dom";
const Logo = ({ handleClick }) => {
  return (
    <div className="logo" onClick={handleClick}>
      <Link to="/" className="flex items-center gap-2">
        <img className="w-20" src={siteLogo} alt="shopper" />
        <span className="text-white text-2xl font-medium">Shopper</span>
      </Link>
    </div>
  );
};

export default Logo;
