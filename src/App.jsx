import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './assets/styles/global.css'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/screens/Profile/Profile'
import Chats from './components/screens/Chats/Chats'
import styles from './App.module.css'
import HeaderContainer from './components/Header/HeaderContainer';
import HomeContainer from './components/screens/Home/HomeContainer';

const App = () => {
  
  return (
    <>
      {/* <Header store={store} /> */}
      <HeaderContainer />  {/* DONE */}
      <div className="container app-container">
        <Sidebar />
        <Routes>
          <Route path="/SignIn" element={<Profile />} />             {/* DONE */}
          <Route path="/SignUp" element={<HomeContainer />} />       {/* DONE */}
          <Route path="/Home" element={<HomeContainer />} />         {/* DONE */}
          <Route path="/Chats" element={<Chats />} />
          <Route path="/MyProfile" element={<Profile />} />          {/* DONE */}
        </Routes> 
      </div>


    </>
  )
}

export default App
