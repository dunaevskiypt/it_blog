import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./FriendProfile.module.css";



function FriendProfile (props) {
    return(
        <div className={style.friendProfile_wrapper}>
            <div className={style.item}></div>
           <NavLink id={props.id} to="/profile"><div className={style.logo}><img src={props.foto} alt="foto"/></div></NavLink>
           <span>{props.name}</span>
        </div>
    )
}



export default  FriendProfile;