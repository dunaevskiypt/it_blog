import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./FriendProfile.module.css";



function FriendProfile (props) {
    return(
        <div className={style.friendProfile_wrapper}>
            <div className={style.item}></div>
           <NavLink to="/profile"><div className={style.logo}><img src="https://img1.freepng.ru/20180423/alq/kisspng-logo-dragon-graphic-design-dragon-logo-5ade0b7811f273.9777779215245013680735.jpg" alt="foto"/></div></NavLink>
           <span>Name</span>
        </div>
    )
}



export default  FriendProfile;