import React from "react";
import styles from './Chats.module.css'
import ChatsListContainer from "./ChatsList/ChatsListContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Chats = () => {
  return (
    <div className={styles.wrapper}>
      <ChatsListContainer />      
      <MessagesContainer />
    </div>
  )
}

export default Chats