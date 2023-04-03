import React, { useContext, useState, useEffect} from "react";
import { Navigate, useNavigate } from "react-router"
import ListDataContext from "./ListDataContext"
import UserContext from "./UserContext";
import JoblyApi from "../api";
import LoadingSpinner from "../common/LoadingSpinner";

function ListDataProvider({children}) {
  const [searchTerms, setSearchTerms] = useState({})
  const [items, setItems] = useState([])
  const {currentUser} = useContext(UserContext)
  const navigate = useNavigate()

  const path = 
    window.location.pathname
    .slice(1)
    .split('/')[0]
  
  const [pathName, setPathName] = useState(path)
  
  useEffect(() => {
    setItems([])
    setPathName(path)
  },[path])

  /**Gets list of companies or jobs based on pathName */

  useEffect(() => {
    async function getList() {
      async function getCompanies() {
        const companies = await JoblyApi.getCompanyList(searchTerms)
        return companies
      }
      async function getJobs() {
        const jobs = await JoblyApi.getJobList(searchTerms)
        return jobs
      }
      const listOptions = {
        companies: getCompanies(),
        jobs: getJobs()
      }
      const items = await listOptions[pathName]
      setItems(items)
    }
    getList()
  }, [searchTerms])
  
  /**Handles click on CompanyCard */

  const handleCardClick = (handle) => {
    navigate(`/companies/${handle}`)
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  if(!items) return <LoadingSpinner />

  return (
    <ListDataContext.Provider
      value={
        { 
          searchTerms,
          setSearchTerms,
          pathName,
          items,
          handleCardClick
        }
      }
    >
      {children}
    </ListDataContext.Provider>
  )
}

export default ListDataProvider