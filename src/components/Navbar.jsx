import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

function Navbar() {
  return (
    <div className={classes.navbarContainer}>
      <h3><NavLink to='/' className={classes.link}>Twitter</NavLink></h3>
      <div className={classes.reg}>
        <NavLink className={classes.link}><p>Login</p></NavLink>
        <NavLink className={classes.link}><p>Sign Up</p></NavLink>
      </div>
    </div>
  )
}

export default Navbar