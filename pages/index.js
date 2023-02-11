import React, { useEffect } from 'react'
import HomePage from '../pages/homePage';

const Home = (props) => {
  return (
    <>
      <XyzTransition appear duration="auto">
        <div>
          <HomePage />
        </div>
      </XyzTransition>
    </>
  )
}

export default Home
