import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import PostAddContainer from "./PostAdd/PostAddContainer";
import StoreContext from "../../../StoreContext";

const Profile = () => {

  return (
    <section>
      <ProfileInfo />
      <PostAddContainer />
      <StoreContext.Consumer>
        {store => (
          <Posts posts={store.getState().postsPage.posts} />
        )}
      </StoreContext.Consumer>
    </section>
  )
}

export default Profile