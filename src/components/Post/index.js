import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../hooks/Store'

import './index.sass'

function Post() {
  var [state, dispatch] = useContext(Context)
  var [search, setSearch] = useState('Marvel')
  useEffect(() => {
    onClick()
  }, [search])

  var onClick = async () => {
    if (search === '' || search.length < 3) return;
    var query = `https://api.themoviedb.org/3/search/movie?api_key=${window.API_KEY}&query=${search}`
    var response = await fetch(query).then((response) => {
      return response.json()
    })

    dispatch({ type: 'SET_SLIST', payload: response.results })
  }

  return (
    <div className={'Post'} style={{ textAlign: 'center' }}>
      <input
        className={"input"}
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
    </div>
  )
}

export default Post
