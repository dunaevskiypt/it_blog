import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { PostActionCreator } from "../../reudx/state";
import { UpdateNewPostTextActionCreator } from "../../reudx/state";

function MyPosts(props) {
  let postElements = props.posts.map((post) => (
    <Post
      message={post.message}
      likeCount={post.likeCount}
      dislikeCount={post.dislikeCount}
      id={post.id}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(PostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = UpdateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={style.MyPosts}>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostEText}
      />
      <br></br>
      <button onClick={addPost}>Create Post</button>
      <h3>MyPosts</h3>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
