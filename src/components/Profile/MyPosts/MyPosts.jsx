import React from "react";
import style from "./MyPosts.module.css";
import Posts from "./Posts/Post";

function MyPosts() {
  return (
    <div className={style.MyPosts}>
      <textarea name="" id="" cols="10" rows="1"></textarea>
      <br></br>
      <button>Create Post</button>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
}

export default MyPosts;
