import React from "react";
import style from "./MyPosts.module.css";
import Posts from "./Posts/Post";

function MyPosts() {
  return (
    <div className={style.MyPosts}>
      <span> If you need create new post, click this button</span>
      <button>Create Post</button>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
}

export default MyPosts;
