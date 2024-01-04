import React from 'react'
import classes from '../styles/Login.module.css'
import styles from '../styles/Styles.module.css'
import logo from '../assets/logo.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import { Link, NavLink} from 'react-router-dom'

function Login(props) {

  const buttonStyles = `${classes.button} ${styles.button}`
  const secondButtonStyles = `${classes.button} ${styles.secondButton}`
  return (
    <>
    <div className={classes.loginContainer}>
      <div  className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="" />
      </div>
      <div>
        <h1>Happening now</h1>
        <h3>Join today.</h3>
        <div className={classes.registerContainer}>
          <button className={classes.signUp}>
            <img className={classes.signUpLogo} src={google} alt="" />
            Sign up with Google
          </button>
          <button className={classes.signUp}>
            <img className={classes.signUpLogo} src={apple} alt="" />
            Sign up with Apple 
          </button>
          <div className={classes.or}>
            <div className={classes.line}></div><p>or</p><div className={classes.line}></div>
          </div>
          <button className={buttonStyles}>
            Create account
          </button>
          <p className={classes.terms}>
            By signing up, you agree to the <NavLink className={styles.link}>Terms of Service</NavLink> and <NavLink className={styles.link}>Privacy Policy</NavLink>, including <NavLink className={styles.link}>Cookie Use.</NavLink>
          </p>
          <h4 className={classes.signIn}>Already have an account?</h4>
          <Link to='/home'><button className={secondButtonStyles}>Sign In</button></Link>
        </div>
      </div>
    </div>
    <div className={classes.footerWrapper}>
      <footer className={classes.footer}>
        <NavLink className={classes.footerContent}>About</NavLink>
        <NavLink className={classes.footerContent}>Terms of Service</NavLink>
        <NavLink className={classes.footerContent}>Privacy Policy</NavLink>
        <NavLink className={classes.footerContent}>Developers</NavLink>
        <p className={classes.footerContent}>© 2023 Anascreaction.</p>
      </footer>
    </div>
    </>
  )
}

export default Login