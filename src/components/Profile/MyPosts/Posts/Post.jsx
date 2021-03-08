import React from "react";
import style from "./Post.module.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

function Post(props) {
  return (
    <div className={style.post}>
      <div className={style.postAva}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA78dEDjfxAwziFJ-4bJn6UKWVadl279rd9A&usqp=CAU"
          alt="ava"
        />
      </div>
      <div className={style.post_btn}>
        <button>
          <AiOutlineDislike />
        </button>
        <button>
          <AiOutlineLike />
        </button>
        <span></span>
      </div>
    </div>
  );
}

export default Post;
