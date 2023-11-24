import React from "react";
import styles from "./Posts.module.css"

const Posts = ( {posts} ) => {
  return (
    <div className={styles.posts}>
      
      {posts.map(post => <div key={post.id} className={styles.post}>
        {post.text}
      </div>)}

    </div>
  )
}

export default Posts