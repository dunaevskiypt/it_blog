import React from "react";
import style from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={style.navigation}>
      <div className={style.massegeNav}>
        <a href="/" className={style.itemNavigation}>
          Messages
        </a>
      </div>
      <div className={style.dialogNav}>
        <a href="/" className={style.itemNavigation}>
          Dialogs
        </a>
      </div>
      <div className={style.profileNav}>
        <a href="/" className={style.itemNavigation}>
          Profile
        </a>
      </div>

      <div className={style.profileNews}>
        <a href="/" className={style.itemNavigation}>
          News
        </a>
      </div>
      <div className={style.profileMusic}>
        <a href="/" className={style.itemNavigation}>
          Music
        </a>
      </div>
    </div>
  );
}

export default Navigation;
