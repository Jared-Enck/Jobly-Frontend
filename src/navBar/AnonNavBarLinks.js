import { NavLink } from "react-router-dom"

export default function AnonNavBarLinks({isSmallWindow}) {
  return (
    <ul className="NavBarLinks navbar-nav">
      <li className='nav-item'>
        <NavLink className='nav-link text-center' to="/login">
          <span>
            Login
          </span>
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to="/signup">
          <span>
            Sign up
          </span>
        </NavLink>
      </li>
    </ul>
  )
}