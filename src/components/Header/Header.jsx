import React from "react";
import styles from './Header.module.css'
import { Link } from "react-router-dom";
import { newSearchValueActionCreator } from "../../redux/chatsReducer";

const Header = ( {searchValue, searchValueChangeHandler} ) => {
  return (
    <header>
      <div className={styles.headerContainer + " container"}>
        <p className={styles.logo}>Obsidian<b>X</b></p>

        <input 
          type="text"
          value={searchValue}
          onChange={e => searchValueChangeHandler(e.target.value)}
          className={styles.headerSearch}
          placeholder="Find chat"
        />

        <nav className={styles.headerNav}>
          <Link to="SignIn" className={styles.headerNavLink}>Sign in</Link>
          <Link to="SignUp" className={styles.headerNavLink}>Sign up</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header