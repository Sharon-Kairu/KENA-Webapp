import React from 'react'
import Hero from "../components/hero/hero";
import Homecontent from "../components/homecontent/Homecontent";
import Reviews from "../components/reviews/Reviews";

const page = () => {
  return (
    <div id='home'>
        <Hero/>
        <Homecontent/>
        <Reviews/> 
    </div>
  )
}

export default page