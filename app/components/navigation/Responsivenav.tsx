'use client'
import React, { useState }  from 'react'
import Navbar from './Navbar'
import Mobilenav from './Mobilenav'

const Responsivenav = () => {
  const [showMobileNav, setShowMobileNav]=useState(false);

  const openNavHandler=()=>setShowMobileNav(true);
  const closeNavHandler=()=>setShowMobileNav(false);
  return (
    <div>
        <Navbar openNav={openNavHandler}/>
        <Mobilenav closeNav={closeNavHandler} showNav={showMobileNav}/>
    </div>
  )
}

export default Responsivenav