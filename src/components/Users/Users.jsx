import React from "react";
import style from "./Users.module.css";

function Users(props) {
  return (
    <div className={style.users}>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.fotoUrl} alt="foto" className={style.user_foto} />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Users;