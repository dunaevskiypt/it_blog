import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogItem = (props)=>{
  return(
  <div className={style.dialog}>
    <NavLink to={"/dialogs/1" + props.id}> {props.name}</NavLink>  
    </div>
  )
}

const Message = (props)=>{
  return(
  <div className={style.message}>{props.message}</div>
  )
}

function Dialogs(props) {
  return (
    <div className={style.dialogs_wrapper}>
      <div className={style.dialogs_items}>
        <DialogItem name='Peter' id='1'/>
        <DialogItem name='Victor' id='2'/>
        <DialogItem name='Ann' id='3'/>
        <DialogItem name='Alex' id='4'/>
        <DialogItem name='Maxim' id='5'/>
      </div>
      <div className={style.messages}>
        <Message message="Hi" />
        <Message message="How are you" />
        <Message message="I like react" />
        <Message message="This is my first ptoect" />
        <Message message="Ok GO" />
      </div>
    </div>
  );
}

export default Dialogs;

// let dialogsElements = props.state.dialogs.map(d=><UserInfo name={d.name} id={d.id}/>)
// let messagesElements = props.state.messages.map(m=><Messages message={m.message} />)
