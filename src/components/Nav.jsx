import React from 'react'
import logo from '../react-icon-small.png'
const Nav = () => {
  return (
    <div className='nav'>
      <nav>
      <img src={logo} className='react-logo'/>
      <h3 className='left-nav'>ReactFacts</h3>
      <h4 className='right-nav'>Made by Dhruv Kr. Shukla</h4>
      </nav>
    </div>
  )
}

export default Nav
