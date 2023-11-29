import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import PostAdd from "./PostAdd/PostAdd";
import PostAddContainer from "./PostAdd/PostAddContainer";

const Profile = ( {store} ) => {

  //todo: delete this temporary shit
  const state = store.getState().postsPage
  const dispatch = store.dispatch

  return (
    <section>
      <ProfileInfo />
      <PostAddContainer store={store} />
      <Posts posts={store.getState().postsPage.posts} />
    </section>
  )
}

export default Profile