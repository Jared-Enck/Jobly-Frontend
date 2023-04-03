import { Link } from 'react-router-dom'
import NavBarLinks from './NavBarLinks'
import useWindowDimensions from '../hooks/useWindowDimensions'
import './NavBar.css'

function NavBar() {
  const {windowSize} = useWindowDimensions()
  const isSmallWindow = windowSize.width < 800

  const navLinksClasses = !isSmallWindow ? 'NavBarLinks navbar-nav' : 'NavBarLinks navbar-nav isSmall w-75 justify-content-between'
  
  return (
    <nav className='NavBar navbar navbar-expand bg-light'>
      <div className='container-sm h-100'>
        <Link className='navbar-brand fs-4 fw-bolder' to='/'>
          Jobly
        </Link>
        <ul className={navLinksClasses}>
          <NavBarLinks />
        </ul>
      </div>
    </nav>
  )
}

export default NavBar