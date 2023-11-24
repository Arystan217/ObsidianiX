import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import './assets/styles/global.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/screens/Home/Home'
import Profile from './components/screens/Profile/Profile'
import Chats from './components/screens/Chats/Chats'
import styles from './App.module.css'

function App( {store} ) {

  return (
    <>
      <Header state={store.getState()} dispatch={store.dispatch.bind(store)} />
      <div className="container app-container">
        <Sidebar />
        <Routes>
          <Route path="/SignIn" element={<Profile />} />
          <Route path="/SignUp" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Chats" element={<Chats state={store.getState()} dispatch={store.dispatch.bind(store)} />} />
          <Route path="/MyProfile" element={<Profile state={store.getState()} dispatch={store.dispatch.bind(store)} />} />
        </Routes>
      </div>


    </>
  )
}

export default App
