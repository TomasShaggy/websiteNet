import React from "react";
import "./styles/NavbarButton.scss";
import { Link } from "react-router-dom";

export default function LiItems({ handleOff }) {
  return (
    <>
      <div className="menuList flex justify-center items-center text-center">
        <ul>
          <li onClick={handleOff}>
            <Link to="/" exact>
              Home
            </Link>
          </li>
          <li onClick={handleOff}>
            <Link to="/MoreInfo">About </Link>
          </li>
          <li onClick={handleOff}>Works</li>
          <li onClick={handleOff}>Contacts</li>
        </ul>
        <div className="box"></div>
      </div>

      {/* bug here */}
      <div className="backgroundDiv lg:flex hidden"></div>
    </>
  );
}
