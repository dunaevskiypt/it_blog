import React from "react";
import style from "./MyPosts.module.css";
import Posts from "./Posts/Post";

function MyPosts() {
  return (
    <div className={style.MyPosts}>
      <textarea name="" id="" cols="10" rows="1"></textarea>
      <span> If you need create new post, click this button</span>
      <button>Create Post</button>
      <Posts message="hello" likesCount="27" />
      <Posts message="hello children" likesCount="28" />
      <Posts message="hello  father" likesCount="28" />
      <Posts message="hello anc" likesCount="283" />
      <Posts />
    </div>
  );
}

export default MyPosts;
