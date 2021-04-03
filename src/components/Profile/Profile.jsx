import React from "react";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import style from "./Profile.module.css";

function Profile(props) {
  return (
    <div className={style.MyContent}>
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
