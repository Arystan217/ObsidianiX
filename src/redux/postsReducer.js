const ADD_POST = "ADD-POST"
const NEW_POST_VALUE = "NEW-POST-VALUE"

const initialState = {
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
}

const postsReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        text: state.newPostValue
      }
      state.posts.push(newPost)
      state.newPostValue = ""
      return state
    case NEW_POST_VALUE:
      state.newPostValue = action.newValue
      return state
    default:
      return state
  }
}

export default postsReducer


export const addPostActionCreator = () => ({
  type: ADD_POST
})
export const newPostValueActionCreator = newValue => ({
  type: NEW_POST_VALUE, newValue: newValue
})