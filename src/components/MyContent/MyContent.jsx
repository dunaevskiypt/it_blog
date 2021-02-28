import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./MyContent.module.css";

function MyContent() {
  return (
    <div className={style.MyContent}>
      <MyPosts />
    </div>
  );
}

export default MyContent;
