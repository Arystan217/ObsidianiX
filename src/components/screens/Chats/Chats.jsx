import React from "react";
import styles from './Chats.module.css'
import ChatsList from "./ChatsList/ChatsList";
import Messages from "./Messages/Messages";

const Chats = ( {state, dispatch} ) => {
  return (
    <div className={styles.wrapper}>
      <ChatsList searchValue={state.searchValue} chats={state.chats} />      
      <Messages dispatch={dispatch} messageValue={state.messageValue} messages={state.messages} />
    </div>
  )
}

export default Chats