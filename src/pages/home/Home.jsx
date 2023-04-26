import React from 'react'
import './Home.scss'; 

import {HeroBanner, TopRated, Trending, Popular} from '../../componants/index'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home;
