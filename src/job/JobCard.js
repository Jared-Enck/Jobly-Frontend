import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function JobCard({job}) {
  const {id,title,companyName,salary,equity} = job
  const {applyToJob,hasAppliedToJob} = useContext(UserContext)
  
  const cName = (
    <p className="card-text">
      {companyName}
    </p>
  )
  const formattedSalary = '$' + Number(salary).toLocaleString("en-US")

  const jobAppliedTo = hasAppliedToJob(id)

  return (
    <li className="JobCard card mb-3">
      <div className="card-body">
        <h4 className="card-title">
          {title}
        </h4>
        { companyName ? cName : null }
        <div className="d-flex">
          <span>
            Salary: { salary ? formattedSalary : 'N/A' }
            <br/>
            Equity: { equity ? equity : 'N/A' }
          </span>
          {
            jobAppliedTo
            ? <span className='text-success ms-auto align-self-end '>
                Application accepted!
              </span>
            : <button 
                className="btn btn-sm btn-success ms-auto align-self-end"
                onClick={() => applyToJob(id)}
              >
                Apply!
              </button>
          }
        </div>
      </div>
    </li>
  )
}

export default JobCard