import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from "./redux/redux-store.js"
import { BrowserRouter } from 'react-router-dom'
import {Provider} from './StoreContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = store => {
  root.render(
    <BrowserRouter>
      <Provider value={store}>
        <App />  
      </Provider>
    </BrowserRouter>
  )
}

rerenderEntireTree(store)

store.subscribe(() => {
  rerenderEntireTree(store)
})