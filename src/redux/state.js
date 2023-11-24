const ADD_POST = "ADD-POST"
const NEW_POST_VALUE = "NEW-POST-VALUE"
const NEW_MESSAGE_VALUE = "NEW-MESSAGE-VALUE"
const ADD_MESSAGE = "ADD-MESSAGE"
const NEW_SEARCH_VALUE = "NEW-SEARCH-VALUE"

const store = {
  _state: {
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
    newPostValue: "",
    messageValue: "",
    searchValue: "",
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

  _addPost(action) {
    const newPost = {
      id: store.getState().posts.length + 1,
      text: this._state.newPostValue
    }
    this._state.posts.push(newPost)
    this._state.newPostValue = ""
    this._callSubscriber(store)
  },
  _newPostValue(action) {
    this._state.newPostValue = action.newValue
    this._callSubscriber(store)
  },
  _addMessage(action) {
    if (this._state.messageValue.trim() !== "") {
      this._state.messages.push(this._state.messageValue)
      this._state.messageValue = ""
      this._callSubscriber(store)      
    }
    return
  },
  _newMessageValue(action) {
    this._state.messageValue = action.newValue
    this._callSubscriber(store)
  },
  _newSearchValue(action) {
    this._state.searchValue = action.newValue
    this._callSubscriber(store)
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost(action)
    } else if (action.type === NEW_POST_VALUE) {
      this._newPostValue(action)
    } else if (action.type === NEW_MESSAGE_VALUE) {
      this._newMessageValue(action)
    } else if (action.type === ADD_MESSAGE) {
      this._addMessage(action)
    } else if (action.type === NEW_SEARCH_VALUE) {
      this._newSearchValue(action)
    }
  },
}

export const addPostActionCreator = () => (
  {type: ADD_POST}
)
export const newPostValueActionCreator = newValue => ({
  type: NEW_POST_VALUE, newValue: newValue
})
export const newMessageValueActionCreator = newValue => ({
  type: NEW_MESSAGE_VALUE, newValue: newValue
})
export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
})
export const newSearchValueActionCreator = newValue => ({
  type: NEW_SEARCH_VALUE, newValue: newValue
})

window.store = store.getState()
window.posts = store.getState().posts
export default store;