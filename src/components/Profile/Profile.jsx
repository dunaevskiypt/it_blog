import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Posts/Post";
import style from "./Profile.module.css";

function Profile(props) {
  return (
    <div className={style.MyContent}>
      <MyPosts />
      <Post />
    </div>
  );
}

export default Profile;
