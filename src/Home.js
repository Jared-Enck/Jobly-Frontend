import './Home.css'
import React, { useContext } from 'react'
import UserContext from './context/UserContext'

function Home() {
  const {currentUser} = useContext(UserContext)
  return(
    <div className="welcome container-sm">
      <h1 className='mb-4 fw-bold'>
        Jobly
      </h1>
      <p>
        All the jobs in one, convenient place.
      </p>
      {
        currentUser
        ? <h2>
            Welcome back,
            <span className='text-capitalize'>
              {' ' + currentUser.firstName}!
            </span>
          </h2>
        : null  
      }
    </div>
  )
}

export default Home