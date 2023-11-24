import React from "react";
import styles from "./MessagesList.module.css"

const MessagesList = ( {messages} ) => {
  return (
    <div className={styles.messagesList}> 
      {messages.map((message, index) => (<p key={index} className={styles.myMessage}><span>{message}</span></p>))}
    </div>
  )
}

export default MessagesList