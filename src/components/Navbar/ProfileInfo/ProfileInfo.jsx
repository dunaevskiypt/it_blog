import React from "react";
import style from "./ProfileInfo.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function ProfileInfo() {
  return (
    <div className={style.profileInfo}>
      <div className={style.profileFoto}></div>
      <div className={style.profileName}>Alina France</div>
      <div className={style.profilePosition}>
        <a href="/">
          <FaMapMarkerAlt />
        </a>
        <span>City: Dnipro</span>
      </div>
      <div className={style.profileWiev}>
        <a href="/">Wiev Profile</a>
      </div>
    </div>
  );
}

export default ProfileInfo;
