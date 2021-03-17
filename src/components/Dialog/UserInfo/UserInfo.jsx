import React from "react";
import style from "./UserInfo.module.css";

function UserInfo() {
  return (
    <div className={style.usreProfile}>
      <div className={style.user_foto}>
        <img src="https://www.emojiok.com/resolution/static/img/emoji/wind/20170529/1f559.png" alt="foto"/>
      </div>
      <div className={style.usre_name}>Name</div>
      <div className={style.user_prev_message}>New message</div>
      <div className={style.user_message_time}>12:48</div>
    </div>
  );
}

export default UserInfo;
