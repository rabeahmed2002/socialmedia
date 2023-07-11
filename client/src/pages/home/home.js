import React from 'react'
import './home.scss'

import Stories from "../../components/Stories/stories"
// import Posts from "../../components/Posts/Posts.jsx"
import Posts from "../../components/Posts/posts"


const home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Posts/>

    </div>
  )
}

export default home
