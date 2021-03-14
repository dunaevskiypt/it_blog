import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

function Profile(props) {
  return (
    <div className={style.MyContent}>
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostEText={props.profilePage.newPostEText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
}

export default Profile;
