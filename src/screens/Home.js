import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import SearchList from '../components/SearchResults'
import { Context } from '../hooks/Store'

import marvel from './../assets/images/9070463.jpg'

function Home() {
  var [state, dispatch] = useContext(Context)

  return (
    <div className={"centerWrap"}>
      <Post />
      <SearchList />
      <img src={marvel} alt="" />
      {/* <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      /> */}
      <pre>{JSON.stringify({ state }, null, 2)}</pre>
    </div>
  )
}

export default Home
