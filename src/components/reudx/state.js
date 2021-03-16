let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello", likeCount: 134 },
        { id: 2, message: "Hello React", likeCount: 1434 },
        { id: 3, message: "Hello my new job", likeCount: 1324 },
        { id: 4, message: "Hello new TAsks", likeCount: 1534 },
        { id: 5, message: "Hello new friend", likeCount: 1354 },
        { id: 5, message: "Hello new mount", likeCount: 1354 },
      ],
      newPostEText: "in power",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Peter" },
        { id: 2, name: "Victor" },
        { id: 3, name: "Ann" },
        { id: 4, name: "Alex" },
        { id: 5, name: "Maxim" },
      ],
      messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: 'How are you"' },
        { id: "3", message: "I like react" },
        { id: "4", message: "This is my first ptoect" },
        { id: "5", message: 'Ok GO"' },
      ],
    },
    friendPage: {
      profile: [
        {
          id: 1,
          name: "Peter",
          foto:
            "https://www.pikpng.com/pngl/m/97-973734_instagram-clipart-picsart-png-instagram-logo-100x100-png.png",
        },
        {
          id: 2,
          name: "Victor",
          foto:
            "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c51f.png",
        },
        {
          id: 3,
          name: "Ann",
          foto:
            "https://svn.apache.org/repos/infra/websites/production/ooo-site/content/images/aoo-logo-100x100.png",
        },
        {
          id: 4,
          name: "Alex",
          foto:
            "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg",
        },
        {
          id: 5,
          name: "Maxim",
          foto:
            "https://png.pngtree.com/element_pic/00/16/07/06577d261edb9ec.jpg",
        },
        {
          id: 6,
          name: "Veronika",
          foto:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-VTlayGVI8PxdrwsbfIxMul8FmRHgKxtcQ&usqp=CAU",
        },
        {
          id: 7,
          name: "Artur",
          foto: "https://img.icons8.com/ios/2x/dot-logo.png",
        },
        {
          id: 8,
          name: "Foma",
          foto:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY17TbAWP4x-E3-i_Jo2O87QPgarTR-5sHqA&usqp=CAU",
        },
        {
          id: 9,
          name: "Bob",
          foto:
            "https://www.freeiconspng.com/thumbs/snapchat-logo/png-format-images-of-snapchat-logo-7.png",
        },
      ],
    },
  },

  getSatte(){
    return this._state
  },
  _callSubsriber() {

    console.log("state was changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostEText,
      likeCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._profilePage.newPostEText = "";
    this._callSubsriber(this._state);
  },
  updateNewPostText(newText) {
    this._profilePage.newPostEText = newText;
    this.rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    
    this._callSubsriber = observer;
  },
};

window.state = store;

export default store;
