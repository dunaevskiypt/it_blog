import React from 'react'
import FriendProfile from './FriendProfile/FriendProfile';
import style from "./Friends.module.css";



function Friends (props) {

    let friendElements = props.state.profile.map((friend) => (
        <FriendProfile name={friend.name} id={friend.id} foto={friend.foto} />
      ));

    return(
        <div className={style.Friends_wrapper}>
            <div className={style.friens_info}>
                {friendElements}
            </div>
        </div>
    )
}



export default Friends;