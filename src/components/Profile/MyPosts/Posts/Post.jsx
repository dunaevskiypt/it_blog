import React from "react";
import style from "./Post.module.css";

function Post(props) {
  return (
    <div className={style.post}>
      <h2>{props.id}</h2>
      <div className={style.postText}>
        <span>{props.message}</span>
      </div>
      <div className={style.post_btn}>
        <div>Like{props.likeCount}</div>
      </div>
    </div>
  );
}

export default Post;
