import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";

function MyPosts(props) {
  let postElements = props.posts.map((post) => (
    <Post
      message={props.posts.message}
      likeCount={props.posts.likeCount}
      dislikeCount={props.posts.dislikeCount}
      id={props.posts.id}
    />
  ));
  return (
    <div className={style.MyPosts}>
      <textarea cols="10" rows="1"></textarea>
      <br></br>
      <button>Create Post</button>
      <h3>MyPosts</h3>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
