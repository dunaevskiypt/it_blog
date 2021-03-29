const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
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
