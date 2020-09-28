import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../hooks/Store'

function Header() {
  var [state] = useContext(Context)
  return (
    <div className={'Header'}>
      <Link to="/">Home</Link>
      <Link to="/my-favs">My Favs</Link>

      <div>{state.name}</div>
    </div>
  )
}

export default Header
