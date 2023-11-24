import React from "react"
import styles from "./Messages.module.css"
import MessagesList from "./MessagesList/MessagesList"
import MessagesInput from "./MessagesInput/MessagesInput"

const Messages = ( {messages, messageValue, dispatch} ) => {
  return (
    <div className={styles.messages}>
      <MessagesList messages={messages} />
      <MessagesInput messageValue={messageValue} dispatch={dispatch} />
    </div>
  )
}

export default Messages