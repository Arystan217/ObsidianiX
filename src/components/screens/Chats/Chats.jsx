import React from "react";
import styles from './Chats.module.css'
import ChatsListContainer from "./ChatsList/ChatsListContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import StoreContext from "../../../StoreContext";

const Chats = () => {
  return (
    <div className={styles.wrapper}>
      <StoreContext.Consumer>
        {store => (
          <>
            <ChatsListContainer store={store} />      
            <MessagesContainer store={store} />
          </>
        )}
      </StoreContext.Consumer>
    </div>
  )
}

export default Chats