import React from 'react'
import ReactDOM from 'react-dom/client'
// Base styles must load before component styles so components can override them.
import './styles/base.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
