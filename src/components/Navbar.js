import React, { useState } from "react";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  const [isActive, setIsActive] = useState(true);

  function toggleNav() {
    setIsHidden((prevState) => !prevState);
  }

  function toggleActive() {}

  const navStyle = {
    transform: isHidden ? "translateX(100%)" : "translateX(0%)",
  };

  const hamburgerStyle = {
    backgroundImage: isHidden ? `url(${hamburgerIcon})` : `url(${closeIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
  };
  return (
    <div className="nav-container">
      <h1>DFS Hive</h1>
      <nav className="active">
        <ul className="nav-list">
          <li>Bankroll Manager</li>
          <li>Articles</li>
          <li>Brandon's Plays</li>
        </ul>
      </nav>
      <nav className="inactive" style={navStyle}>
        <ul className="nav-list">
          <li>Bankroll Manager</li>
          <li>Articles</li>
          <li>Brandon's Plays</li>
        </ul>
      </nav>
      <button
        className="icon"
        style={hamburgerStyle}
        onClick={toggleNav}
      ></button>
    </div>
  );
}
