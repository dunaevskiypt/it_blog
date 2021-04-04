import React from "react";
import { connect } from "react-redux";
import { PostActionCreator } from "../../reudx/profile-reducer";
import { UpdateNewPostTextActionCreator } from "../../reudx/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateNewPostText: (text) => {
      let action = UpdateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(PostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
