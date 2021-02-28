import React from "react";
import style from "./Post.module.css";

function Post(props) {
  return (
    <div className={style.posts}>
      <img
        src="https://lh3.googleusercontent.com/proxy/baWSp_QzkhCuZxsYeqKDuwa0B9FHgjorT7-du-ONmQ6YfCjjZjJfpu4kmo35Q6x15R3tT1CC314eDM0n1T2eFv0kg9Ohj1gm8fppXqpF3-KJ"
        alt="ava"
      />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          dignissimos harum adipisci! Aspernatur, tenetur eaque.
        </p>
        <button>LIke</button>
        <button>DsIke</button>
      </div>
    </div>
  );
}

export default Post;
