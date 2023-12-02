import React from "react";
import { newSearchValueActionCreator } from "../../redux/chatsReducer";
import Header from "./Header";
import { connect } from "react-redux";


const mapStateToProps = state => ({
  searchValue: state.chatsPage.searchValue
})
const mapDispatchToProps = dispatch => ({
  searchValueChangeHandler : newValue => {
    dispatch(newSearchValueActionCreator(newValue))
  }
})

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer