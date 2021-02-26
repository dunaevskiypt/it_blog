import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
        <div className="header-logo"><img src="" alt="logo"/></div>
        <div className="header-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Discussion</a></li>
            <li><a href="#"></a>Weather</li>
            <li><a href="#"></a>Pages</li>
            <li><a href="#"></a>Blg</li>
            <li><a href="#"></a>Add New Event </li>
          </ul>
        </div>
        <div className="header-social"></div>
        <div className="header-profile-menu"></div>
    </header>
  );
}

export default Header;
