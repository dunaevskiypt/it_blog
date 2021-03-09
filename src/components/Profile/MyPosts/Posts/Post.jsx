import React from "react";
import style from "./Post.module.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import UserInfo from "../../../Dialog/UserInfo/UserInfo";

function Post(props) {
  return (
    <div className={style.post}>
      <UserInfo />
      <div className={style.postText}>
        <span>{props.message}</span>
      </div>
      <div className={style.post_btn}>
        <button>
          <AiOutlineDislike />
        </button>
        <button>
          <AiOutlineLike />
        </button>
      </div>
    </div>
  );
}

export default Post;
