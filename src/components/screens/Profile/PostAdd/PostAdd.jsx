import React from "react";
import styles from "./PostAdd.module.css"
import { addPostActionCreator, newPostValueActionCreator } from "../../../../redux/state";

const PostAdd = ( {dispatch, newPostValue} ) => {

  const addingNewPost = e => {
    e.preventDefault();
    
    if (newPostValue.trim().length > 0) {
      dispatch(addPostActionCreator())
    } else {
      alert("type smth bro")
    }
  }

  const newPostValueChangeHandler = e => {
    dispatch(newPostValueActionCreator(e.target.value))
  }

  return (
    <form className={styles.postAdd}>
      <p className={styles.postAddTitle}>New post:</p>
      <textarea
        className={styles.textarea}
        value={newPostValue}
        onChange={newPostValueChangeHandler}
      ></textarea>
      <button className={styles.postButton} onClick={addingNewPost}>Post!</button>
    </form>
  )
}

export default PostAdd