const NEW_MESSAGE_VALUE = "NEW-MESSAGE-VALUE"
const ADD_MESSAGE = "ADD-MESSAGE"
const NEW_SEARCH_VALUE = "NEW-SEARCH-VALUE"

const chatsReducer = (state, action) => {
  
  switch(action.type) {
    case NEW_MESSAGE_VALUE:
      state.messageValue = action.newValue
      return state
    case ADD_MESSAGE:
      if (state.messageValue.trim() !== "") {
        state.messages.push(state.messageValue)
        state.messageValue = ""  
      }
      return state
    case NEW_SEARCH_VALUE:
      state.searchValue = action.newValue
      return state
    default: 
      return state
  }
}

export default chatsReducer


export const newMessageValueActionCreator = newValue => ({
  type: NEW_MESSAGE_VALUE, newValue: newValue
})
export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
})
export const newSearchValueActionCreator = newValue => ({
  type: NEW_SEARCH_VALUE, newValue: newValue
})