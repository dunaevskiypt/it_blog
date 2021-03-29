import React from "react";
import Friends from "./Friends/Friends";
import style from "./Navbar.module.css";
import Navigation from "./Navigation/Navigation";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Navbar(props) {
  return (
    <nav className={style.nav}>
      <ProfileInfo />
      <Friends />
      <Navigation />
    </nav>
  );
}

export default Navbar;
