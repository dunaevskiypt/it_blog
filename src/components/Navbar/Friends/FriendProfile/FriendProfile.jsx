import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./FriendProfile.module.css";



function FriendProfile (props) {
    return(
        <div className={style.friendProfile_wrapper}>
            <div className={style.item}>
           <NavLink id={props.id} to="/profile"><div className={style.logo}><img src={props.foto} alt="foto"/></div></NavLink>
           <span>{props.name}</span>
           </div>
        </div>
    )
}



export default  FriendProfile;