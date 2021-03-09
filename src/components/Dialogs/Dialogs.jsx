import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";


function Dialogs(props) {
  return (
    <div className={style.dialogs_wrapper}>
      <div className={style.dialogs_items}>
        <div className={style.dialog}> <NavLink to="/dialogs/1">Peter</NavLink>  </div>
        <div className={style.dialog}><NavLink to="/dialogs/2">Victor</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/3">Ann</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/4">Alex</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/5">Maxim</NavLink> </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>How are you</div>
        <div className={style.message}>I like react</div>
        <div className={style.message}>This is my first ptoect</div>
        <div className={style.message}>Ok GO</div>
      </div>
    </div>
  );
}

export default Dialogs;

// let dialogsElements = props.state.dialogs.map(d=><UserInfo name={d.name} id={d.id}/>)
// let messagesElements = props.state.messages.map(m=><Messages message={m.message} />)
