import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";

function MyPosts() {
  let posts = [
    { id: 1, message: "Post1", likeCount: 134, dislikeCount: 3 },
    { id: 2, message: "Post2", likeCount: 1434, dislikeCount: 6 },
    { id: 3, message: "Post3", likeCount: 1324, dislikeCount: 7 },
    { id: 4, message: "Post4", likeCount: 1534, dislikeCount: 8 },
    { id: 5, message: "Post5", likeCount: 1354, dislikeCount: 9 },
    { id: 5, message: "Post5", likeCount: 1354, dislikeCount: 9 },
  ];
  let postElements = posts.map((post) => (
    <Post
      message={post.message}
      likeCount={post.likeCount}
      dislikeCount={post.dislikeCount}
      id={post.id}
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
