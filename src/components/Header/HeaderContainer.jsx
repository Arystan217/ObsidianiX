import React from "react";
import { newSearchValueActionCreator } from "../../redux/chatsReducer";
import Header from "./Header";
import StoreContext from "../../StoreContext";

const HeaderContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {

        const searchValueChangeHandler = (newValue) => {
          store.dispatch(newSearchValueActionCreator(newValue))
        }

        return <Header searchValue={store.getState().chatsPage.searchValue} searchValueChangeHandler={searchValueChangeHandler} />
        
      }}
    </StoreContext.Consumer>
  )
}

export default HeaderContainer