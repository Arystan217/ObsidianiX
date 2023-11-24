import React, { useState, useEffect } from "react"
import styles from "./ChatList.module.css"
import { Link } from "react-router-dom";


const ChatsList = ( {searchValue, chats} ) => {

  const [foundChats, setFoundChats] = useState(chats)

  useEffect(() => {
    if (!searchValue.trim()) {
      setFoundChats(chats);
    } else {
      setFoundChats(chats.filter((chat) => chat.name.toLowerCase().includes(searchValue.toLowerCase())));
    }
  }, [searchValue, chats]);
  

  return (
    <div className={styles.chatsList}>
      {foundChats.map(chat => (<Link key={chat.id} to={"/Chats/"+chat.id}>{chat.name}</Link>))}
    </div>
  )
}

export default ChatsList