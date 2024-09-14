import React from 'react'
import { createRoot } from 'react-dom/client'
import ContextProvider from './context';
import App from './App.jsx'
import Home from './Home'


createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
    <Home></Home>
  </ContextProvider>,
)
