import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

window.API_KEY = `a2bf270cbb88e1c637475e0a773ceaae`

fetch('/auth')
var auth = true

ReactDOM.render(
  <React.StrictMode>{auth ? <App /> : <div>Login</div>}</React.StrictMode>,
  document.getElementById('root')
)
