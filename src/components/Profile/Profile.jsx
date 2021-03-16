import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

function Profile(props) {
  return (
    <div className={style.MyContent}>
      <MyPosts
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostEText={props.profilePage.newPostEText}
      />
    </div>
  );
}

export default Profile;
