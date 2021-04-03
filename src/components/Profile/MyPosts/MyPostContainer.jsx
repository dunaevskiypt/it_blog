import React from "react";
import { PostActionCreator } from "../../reudx/profile-reducer";
import { UpdateNewPostTextActionCreator } from "../../reudx/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(PostActionCreator());
  };

  let onPostChange = (text) => {
    let action = UpdateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      UpdateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default MyPostsContainer;
