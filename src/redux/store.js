import chatsReducer from "./chatsReducer"
import postsReducer from "./postsReducer"


const store = {
  _state: {
    postsPage: {
      posts: [
        {
          id: 1,
          text: "first impression of this social media",
        },
        {
          id: 2,
          text: "second impression",
        },
        {
          id: 3,
          text: "third impression",
        },
      ],
      newPostValue: "",
    },
    chatsPage: {
      chats: [
        {
          id: 1,
          name: "Elon Musk",
        },
        {
          id: 2,
          name: "Sam Altmon"
        },
        {
          id: 3,
          name: "Murk Zuckerberg"
        },
        {
          id: 4,
          name: "Bill Gates"
        },
      ],
      messages: [
        "Hello what's up?",
        "it's me",
        "How is your nothing?"
      ],
      messageValue: "",
      searchValue: "",
    },
  },

  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("rerender")
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
    this._state.postsPage = postsReducer(this._state.postsPage, action)
    this._state.chatsPage = chatsReducer(this._state.chatsPage, action)
    this._callSubscriber(store)
  },
}



window.store = store.getState()
window.posts = store.getState().posts
export default store;