const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialSatate = {
  posts: [
    { id: 1, message: "Hello", likeCount: 134 },
    { id: 2, message: "Hello React", likeCount: 1434 },
    { id: 3, message: "Hello my new job", likeCount: 1324 },
    { id: 4, message: "Hello new TAsks", likeCount: 1534 },
    { id: 5, message: "Hello new friend", likeCount: 1354 },
    { id: 5, message: "Hello new mount", likeCount: 1354 },
  ],
  newPostEText: "in power",
};

const profileReducer = (state = initialSatate, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: state.newPostEText,
      likeCount: 0,
    };
    state.posts.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostEText = action.newText;
  }

  return state;
};

export const PostActionCreator = () => ({ type: ADD_POST });

export const UpdateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
