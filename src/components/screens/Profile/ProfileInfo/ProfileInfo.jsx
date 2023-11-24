import React from "react";
import styles from './ProfileInfo.module.css'
import profileBG from "../../../../assets/logo.jpeg"
import profileImage from "../../../../assets/profile.jpg"

const ProfileInfo = () => {
  return (
    <>
      <img className={styles.profileBG} src={profileBG} alt="" />
      <img className={styles.profileImage} src={profileImage} alt="" />
      <div className={styles.profileInfo}>
        <p className={styles.profileName}>Kudaibergenov Arystan</p>
        <p className={styles.profileDescription}>The senior programmer in ObsidianX, founder of this proj. i no, NobodY cRs abOt iT</p>
      </div>
    </>
  )
}

export default ProfileInfo