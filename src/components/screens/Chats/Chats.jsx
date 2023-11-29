import React from "react";
import styles from './Chats.module.css'
import ChatsListContainer from "./ChatsList/ChatsListContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Chats = ( {store} ) => {

  return (
    <div className={styles.wrapper}>
      <ChatsListContainer store={store} />      
      <MessagesContainer store={store} />
    </div>
  )
}

export default Chats