import React from "react"
import styles from "./Messages.module.css"
import MessagesList from "./MessagesList/MessagesList"
import MessagesInput from "./MessagesInput/MessagesInput"
import { addMessageActionCreator, newMessageValueActionCreator } from "../../../../redux/chatsReducer";
import { connect } from "react-redux";


const MessagesContainerdf = ( {store} ) => {

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

const MessagesContainer = connect()() /* TODO: can i put several components inside connect? */

export default MessagesContainer