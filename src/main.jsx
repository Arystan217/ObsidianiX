import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from "./redux/redux-store.js"
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = store => {
  root.render(
    <BrowserRouter>
      <App store={store} />  
    </BrowserRouter>
  )
}

rerenderEntireTree(store)

store.subscribe(() => {
  rerenderEntireTree(store)
})