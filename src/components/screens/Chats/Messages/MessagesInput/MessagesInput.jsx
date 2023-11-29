import React from "react";
import styles from "./MessagesInput.module.css"

const MessagesInput = ( {messageValue, newMessageValue, addMessage} ) => {

  const changeMessageHandler = e => {
    newMessageValue(e.target.value)
  }

  const sendMessageHandler = () => {
    addMessage()
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