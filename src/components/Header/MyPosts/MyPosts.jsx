import React from "react";
import style from "./MyPosts.module.css";
import Posts from "./Posts/Post";

function MyPosts() {
  return (
    <div className={style.MyPosts}>
      MyPosts
      <div>
        <textarea name="post" id="" rows="2"></textarea>
        <button>Add post</button>
        <button>Post remote</button>
      </div>
      <Posts message="Hello my friend" />
      <Posts message="Hello!!!!" />
    </div>
  );
}

export default MyPosts;
