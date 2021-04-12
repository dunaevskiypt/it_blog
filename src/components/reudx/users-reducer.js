const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialSatate = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: "Dmitro",
      status: "I am a bosss",
      location: { city: "Kiev", country: "Ukraine" },
    },
    {
      id: 2,
      followed: false,
      fullName: "Ann",
      status: "I am a bosss too",
      location: { city: "Dnipro", country: "Ukraine" },
    },
    {
      id: 3,
      followed: true,
      fullName: "Peter",
      status: "I am a junior dev",
      location: { city: "Kharkiv", country: "Ukraine" },
    },
  ],
  newPostText: "in power",
};

const usersReducer = (state = initialSatate, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
        }),
      };

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
