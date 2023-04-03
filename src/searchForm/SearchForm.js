import React, { useContext, useEffect } from "react"
import useFields from "../hooks/useFields"
import ListDataContext from "../context/ListDataContext"
import CompaniesInputs from "./CompaniesInputs"
import JobsInputs from "./JobsInputs"
import "./SearchForm.css"
import useWindowDimensions from '../hooks/useWindowDimensions'

function SearchForm() {
  const {setSearchTerms, pathName} = useContext(ListDataContext)
  const {windowSize} = useWindowDimensions()
  
  const fieldOptions = {
    companies: {
      name: '',
      minEmployees: '',
      maxEmployees: ''
    },
    jobs: {
      title: '',
      minSalary: '',
      hasEquity: ''
    }
  }
  const initialState = fieldOptions[pathName] || ''

  const [formData, handleChange, setFormData] = useFields(initialState)

  useEffect(() => {
    setSearchTerms(initialState)
    setFormData(initialState)
  },[pathName])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerms(formData)
  }

  const isSmallWindow = windowSize.width < 600

  const inputGroupClass = 
    isSmallWindow 
    ? 'input-group-sm isSmall' 
    : ''
  
  return (
    <div className="row">
      <form 
        className="SearchForm col-12 col-md-10 col-xl-9 p-0"
        onSubmit={handleSubmit}
      >
        <div id="search" className={`input-group ${inputGroupClass} shadow`}>
          {
            pathName === 'companies'
              ? <CompaniesInputs 
                  formData={formData} 
                  handleChange=
                  {handleChange} 
                />
              : <JobsInputs 
                  formData={formData} 
                  handleChange=
                  {handleChange} 
                />
          }
          <button className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm