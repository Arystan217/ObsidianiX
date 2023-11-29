import React from "react";
import styles from "./PostAdd.module.css"

const PostAdd = ( {handlePostButtonClick, newPostValue, newPostValueChange} ) => {

  const handlePostValueChange = e => {
    newPostValueChange(e.target.value)
  }

  return (
    <form className={styles.postAdd}>
      <p className={styles.postAddTitle}>New post:</p>
      <textarea
        className={styles.textarea}
        value={newPostValue}
        onChange={handlePostValueChange}
      ></textarea>
      <button className={styles.postButton} onClick={handlePostButtonClick}>Post!</button>
    </form>
  )
}

export default PostAdd