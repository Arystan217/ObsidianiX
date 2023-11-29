import React from "react"
import styles from "./Messages.module.css"
import MessagesList from "./MessagesList/MessagesList"
import MessagesInput from "./MessagesInput/MessagesInput"
import { addMessageActionCreator, newMessageValueActionCreator } from "../../../../redux/chatsReducer";


const MessagesContainer = ( {store} ) => {

  const state = store.getState().chatsPage
  const dispatch = store.dispatch

  const newMessageValue = (newValue) => {
    dispatch(newMessageValueActionCreator(newValue))
  }

  const addMessage = () => {
    dispatch(addMessageActionCreator())
  }

  return (
    <div className={styles.messages}>
      <MessagesList messages={state.messages} />
      <MessagesInput messageValue={state.messageValue} newMessageValue={newMessageValue} addMessage={addMessage} />
    </div>
  )
}

export default MessagesContainer