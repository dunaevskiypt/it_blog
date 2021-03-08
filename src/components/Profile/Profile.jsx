import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

function Profile() {
  return (
    <div className={style.MyContent}>
      <MyPosts />
    </div>
  );
}

export default Profile;
