import React from 'react'
import FriendProfile from './FriendProfile/FriendProfile';
import style from "./Friends.module.css";



function Friends (props) {
    return(
        <div className={style.Friends_wrapper}>
            <div className={style.friens_info}>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
            </div>
        </div>
    )
}



export default Friends;