import React from "react";
import MyPosts from "../Header/MyPosts/MyPosts";
import style from "./Profile.module.css";

function Profile() {
  return (
    <div className={style.profile}>
      <div className={style.ProfileInfo}>
        <samp>City:Dnepr</samp>
        <samp>Date birthday:11.09.1990</samp>
        <div className={style.ProfileLogo}>
          <img
            src="https://pridenews.com.ua/wp-content/uploads/2020/04/n133.jpg"
            alt="logo"
          />
        </div>
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
