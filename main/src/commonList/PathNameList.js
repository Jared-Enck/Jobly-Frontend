import React, { useContext } from "react"
import CompanyCard from '../company/CompanyCard'
import JobCard from "../job/JobCard"
import SearchForm from '../searchForm/SearchForm'
import ListDataContext from '../context/ListDataContext'

/**Renders SearchForm and list of CompanyCards or JobCards based on pathName */

function PathNameList() {
  const {
    items,
    pathName
  } = useContext(ListDataContext)  

  const noResults = (
    <p className="text-center mt-4 fs-2">
      No results found.
    </p>
  )

  const companyCardComponents = (i) => {
    return (
      <CompanyCard
        key={i.handle}
        company={i}
      />
    )
  }

  const jobCardComponents = (i) => {
    return (
      <JobCard
        key={i.id}
        job={i}
      />
    )
  }

  const cardOptions = {
    companies: companyCardComponents,
    jobs: jobCardComponents
  }
  
  return (
    <div className="container-md">
      <SearchForm pathName={pathName} />

      <div className="row">
        <div className="col-12 col-md-10 col-xl-9 p-0">
          <ul className="mt-3 p-0">
            { 
              !items.length
              ? noResults
              : items.map(i => (
                cardOptions[pathName](i)
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default PathNameList