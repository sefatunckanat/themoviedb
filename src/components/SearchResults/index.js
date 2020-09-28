import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../hooks/Store'

import './index.sass'

var GetPoster = (url) => { return `http://image.tmdb.org/t/p/original${url}` }
var GetBackdrop = (url) => { return `http://image.tmdb.org/t/p/original${url}` }

function Result({ data }) {
  return <div className="Result" key={data.id}>
    <div className="bg" style={{ backgroundImage: `url(${GetBackdrop(data.backdrop_path)})` }}></div>
    <div style={{ fontSize: 0 }}><img src={GetPoster(data.poster_path)} alt="" /></div>
    <div className="name">
      {data.title}
    </div>
  </div>
}

function SearchList() {
  var [state, dispatch] = useContext(Context)

  return (
    <div>
      <div className={'SearchList'}>
        {state.searchList.map((item) => {
          return (<Result data={item} />)
        })}
      </div>
    </div>
  )
}

export default SearchList
