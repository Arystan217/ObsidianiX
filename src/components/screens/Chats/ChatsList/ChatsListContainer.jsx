import React, { useState, useEffect } from "react"
import ChatsList from "./ChatsList";
import { connect } from "react-redux";


const mapStateToProps = state => {

  const [foundChats, setFoundChats] = useState(state.chatsPage.chats)

  const searchValue = state.chatsPage.searchValue
  const chats = state.chatsPage.chats

  useEffect(() => {
    if (!searchValue.trim()) {
      setFoundChats(chats);
    } else {
      setFoundChats(chats.filter((chat) => chat.name.toLowerCase().includes(searchValue.toLowerCase())));
    }
  }, [searchValue, chats]);

  return {
    foundChats : foundChats
  }
}

const ChatsListContainer = connect(mapStateToProps)(ChatsList)

export default ChatsListContainer