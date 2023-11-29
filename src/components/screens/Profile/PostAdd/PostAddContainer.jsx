import React from "react";
import { addPostActionCreator, newPostValueActionCreator } from "../../../../redux/postsReducer";
import PostAdd from "./PostAdd";
import StoreContext from "../../../../StoreContext";

const PostAddContainer = () => {

  return (
    <StoreContext.Consumer>
      {store => {

        const handlePostButtonClick = e => {
          e.preventDefault();
          
          if (store.getState().postsPage.newPostValue.trim().length > 0) {
            store.dispatch(addPostActionCreator())
          }
        }

        const newPostValueChange = newValue => {
          store.dispatch(newPostValueActionCreator(newValue))
        }

        return (<PostAdd 
          handlePostButtonClick={handlePostButtonClick} 
          newPostValue={store.getState().postsPage.newPostValue} 
          newPostValueChange={newPostValueChange} 
        />)
      }}
    </StoreContext.Consumer>
    
  )
}

export default PostAddContainer