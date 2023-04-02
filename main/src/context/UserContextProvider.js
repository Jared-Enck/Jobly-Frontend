import React, {useState, useEffect} from "react";
import UserContext from "./UserContext";
import {useNavigate} from "react-router"
import JoblyApi from '../api'
import useLocalStorage from '../hooks/useLocalStorage'
import jwt_decode from "jwt-decode"
import LoadingSpinner from '../common/LoadingSpinner'

export const TOKEN_STORAGE_ID = "jobly-token";

function UserContextProvider({children}) {
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState('')
  const [appliedJobIds, setAppliedJobIds] = useState(new Set([]))
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)

  const navigate = useNavigate()

  async function signUpUser(signUpData) {
    try {
        let token = await JoblyApi.register(signUpData)
        setToken(token)
        return { success: true }
      } catch (err) {
      console.error('signup failed', err)
      return { success: false, err}
    }
  }

  async function loginUser(loginData) {
    try {
        let token = await JoblyApi.login(loginData)
        setToken(token)
        return { success: true }
      } catch (err) {
      console.log(err)
      return { success: false, err}
    }
  }

  async function editUser(editData) {
    try {
      let newUserData = await JoblyApi.editCurrentUser(
        currentUser.username, editData
      )
      setCurrentUser(newUserData)
      navigate('/')
      return { success: true }
    } catch (err) {
      console.log(err)
      return { success: false, err}
    }
  }

  const hasAppliedToJob = (jobId) => {
    return appliedJobIds.has(jobId)
  }

  const applyToJob = (jobId) => {
    if (hasAppliedToJob(jobId)) return;
    JoblyApi.applyToJob(currentUser.username, jobId)
    setAppliedJobIds(new Set ([...appliedJobIds, jobId]))
  }

  useEffect(() => {
    async function getCurrentUser () {
      if (token) {
        try {
          const {username} = jwt_decode(token)
          JoblyApi.token = token
          const user = await JoblyApi.getCurrentUser(username)
          setCurrentUser(user)
          setAppliedJobIds(new Set (user.applications))
          navigate('/')
        } catch (err) {
          console.log(err)
          setCurrentUser('')
        }
      }
      setIsLoading(false)
    }
    setIsLoading(true)
    getCurrentUser()
  },[token])

  const logout = () => {
    setCurrentUser('')
    setAppliedJobIds('')
    setToken('')
    navigate('/')
  }

  const onHomepage = window.location.pathname === '/'

  if (isLoading && !onHomepage ) return <LoadingSpinner />

  return (
    <UserContext.Provider
      value={
        {
          setIsLoading,
          currentUser,
          signUpUser,
          loginUser,
          editUser,
          applyToJob,
          appliedJobIds,
          hasAppliedToJob,
          logout
        }
      }
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider