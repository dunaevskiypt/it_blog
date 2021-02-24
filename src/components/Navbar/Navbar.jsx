import React from "react";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <a href="#">Profile</a>
      </div>
      <div className={style.item}>
        <a href="#">Message</a>
      </div>
      <div className={style.item}>
        <a href="#">News</a>
      </div>
      <div className={style.item}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
