import React from "react";
import styles from "./MessagesInput.module.css"
import { addMessageActionCreator, newMessageValueActionCreator } from "../../../../../redux/chatsReducer";

const MessagesInput = ( {messageValue, dispatch} ) => {

  const changeMessageHandler = e => {
    dispatch(newMessageValueActionCreator(e.target.value))
  }

  const sendMessageHandler = () => {
    dispatch(addMessageActionCreator())
  }

  const keyPressHandler = e => {
    if (e.key === "Enter") {
      sendMessageHandler()
    }
  }

  return (
    <div className={styles.wrapper}>
      <input 
        value={messageValue} 
        onChange={changeMessageHandler} 
        onKeyDown={keyPressHandler}
        className={styles.input} 
        placeholder="Enter your messages..."
        type="text" 
      />
      <button onClick={sendMessageHandler} className={styles.button}>Send</button>
    </div>
  )
}

export default MessagesInput