import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostAddContainer from "./PostAdd/PostAddContainer";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {

  return (
    <section>
      <ProfileInfo />
      <PostAddContainer />
      <PostsContainer />

    </section>
  )
}

export default Profile