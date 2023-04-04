import './NavBarLinks.css'
import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import FontAwesomeIcon from '../common/FontAwesomeIcon'

function LoggedInNavBarLinks({isSmallWindow}) {
  const {logout} = useContext(UserContext)

  const loggedInUserLinks = (
    <>
      <li className='nav-item'>
        <NavLink className='nav-link' to="/companies">
          <span>
            Companies
          </span> 
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to="/jobs">
          <span>
            Jobs
          </span>
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to="/profile">
          <span>
            Profile
          </span>
        </NavLink>
      </li>
      <li className='nav-item' tabIndex="-1">
        <Link className='nav-link' onClick={logout}>
          <span>
            Logout
          </span>
        </Link>
      </li>
    </>
  )

  const loggedInIconLinks = (
    <>
      <li className='nav-item'>
        <NavLink className='nav-link isSmall' to="/companies">
          <FontAwesomeIcon icon="fa-solid fa-building fa-xl" />
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link isSmall' to="/jobs">
          <FontAwesomeIcon icon="fa-solid fa-briefcase fa-xl" />
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link isSmall' to="/profile">
          <FontAwesomeIcon icon="fa-solid fa-user fa-xl" />
        </NavLink>
      </li>
      <li className='nav-item' tabIndex="-1">
        <Link className='nav-link isSmall' onClick={logout}>
          <FontAwesomeIcon icon="fa-solid fa-right-from-bracket fa-xl" />
        </Link>
      </li>
    </>
  )

  return (
    <>
      {isSmallWindow ? loggedInIconLinks : loggedInUserLinks}
    </>
  )
}

export default LoggedInNavBarLinks