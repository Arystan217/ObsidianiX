import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import PostAdd from "./PostAdd/PostAdd";

const Profile = ( {state, dispatch} ) => {
  return (
    <section>
      <ProfileInfo />
      <PostAdd newPostValue={state.newPostValue} dispatch={dispatch} />
      <Posts posts={state.posts} />
    </section>
  )
}

export default Profile