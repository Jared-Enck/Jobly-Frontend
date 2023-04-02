import React, { useState, useEffect, useContext } from "react"
import { useParams, Navigate } from "react-router";
import JobCardList from "../job/JobCardList"
import JoblyApi from "../api";
import LoadingSpinner from "../common/LoadingSpinner";
import UserContext from "../context/UserContext";

function CompanyDetail() {
  const [company, setCompany] = useState({})
  const {handle} = useParams()
  const {currentUser} = useContext(UserContext)

  useEffect(() => {
    async function getCompany() {
      let company = await JoblyApi.getCompany(handle)
      setCompany(company)
    }
    getCompany()
  },[])

  if (!company) return <LoadingSpinner />

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const {name, description, jobs} = company

  return (
    <div className="container-sm">
      <div className="row">
        <div className="col-12 col-md-10 col-xl-9 p-0">
          <h2>
            {name}.
          </h2>
          <p className="fs-5">
            {description}
          </p>
        </div>
      </div>
      {
        jobs
        ? <JobCardList jobs={jobs} />
        : null
      }
    </div>
  )
}

export default CompanyDetail