import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import LoggedInNavBarLinks from './LoggedInNavBarLinks'
import useWindowDimensions from '../hooks/useWindowDimensions'
import './NavBar.css'
import AnonNavBarLinks from './AnonNavBarLinks'

function NavBar() {
  const {currentUser} = useContext(UserContext)
  const {windowSize} = useWindowDimensions()
  const isSmallWindow = windowSize.width < 800

  const navLinksClasses = !isSmallWindow ? 'NavBarLinks navbar-nav' : 'NavBarLinks navbar-nav isSmall w-75 justify-content-between'
  
  return (
    <nav className='NavBar navbar navbar-expand bg-light'>
      <div className='container-sm h-100'>
        <Link className='navbar-brand fs-4 fw-bolder' to='/'>
          Jobly
        </Link>
        { 
          currentUser
          ? (
            <ul className={navLinksClasses}>
              <LoggedInNavBarLinks isSmallWindow={isSmallWindow} />
            </ul>
          )
          : <AnonNavBarLinks isSmallWindow={isSmallWindow} />
        }        
      </div>
    </nav>
  )
}

export default NavBar