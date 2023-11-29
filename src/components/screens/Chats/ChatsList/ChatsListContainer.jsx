import React, { useState, useEffect } from "react"
import ChatsList from "./ChatsList";


const ChatsListContainer = ( {store} ) => {

  const [foundChats, setFoundChats] = useState(store.getState().chatsPage.chats)

  const state = store.getState()
  const searchValue = state.chatsPage.searchValue
  const chats = state.chatsPage.chats

  useEffect(() => {
    if (!searchValue.trim()) {
      setFoundChats(chats);
    } else {
      setFoundChats(chats.filter((chat) => chat.name.toLowerCase().includes(searchValue.toLowerCase())));
    }
  }, [searchValue, chats]);
  

  return <ChatsList foundChats={foundChats} />
}

export default ChatsListContainer