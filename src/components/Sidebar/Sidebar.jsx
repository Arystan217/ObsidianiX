import React from "react";
import styles from './Sidebar.module.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarUl}>
        <li className={styles.sidebarItem}><Link to="/Home">Home</Link></li>
        <li className={styles.sidebarItem}><Link to="/Chats">Chats</Link></li>
        <li className={styles.sidebarItem}><Link to="/MyProfile">My profile</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar