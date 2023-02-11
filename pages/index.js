import React, { useEffect } from 'react'
import Head from 'next/head'

import Card from '../components/card'
import { TbPhone, TbMapPin, TbMail } from "react-icons/tb";
import AnimatedHeadline from './animated-headlines';
import { XyzTransition } from "@animxyz/react";
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
