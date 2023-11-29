import React from "react"
import styles from "./ChatList.module.css"
import { Link } from "react-router-dom";


const ChatsList = ( {foundChats} ) => {  

  return (
    <div className={styles.chatsList}>
      {foundChats.map(chat => (<Link key={chat.id} to={"/Chats/"+chat.id}>{chat.name}</Link>))}
    </div>
  )
}

export default ChatsList