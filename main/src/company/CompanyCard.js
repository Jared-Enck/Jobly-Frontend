import React, { useContext } from 'react'
import ListDataContext from '../context/ListDataContext'
import useWindowDimensions from '../hooks/useWindowDimensions'
import './CompanyCard.css'

function CompanyCard({company}) {
  const {handle,name,description,numEmployees,logoUrl} = company
  const {handleCardClick,searchTerms} = useContext(ListDataContext)
  const {windowSize} = useWindowDimensions()

  const isSmallWindow = windowSize.width < 600
  const cardClasses = isSmallWindow ? 'card mb-3 pb-1 isSmall' : 'card mb-3'

  const numEmpsJsx = (
    <span className='align-self-end fw-bold'>
      { `Total employees: ${numEmployees}` }
    </span>
  )

  return (
    <li
      className={cardClasses}
      onClick={() => handleCardClick(handle)}
    >
      <div className="row card-body m-0">        
        <div className='col-10 p-0 justify-content-between'>
          <h4 className="card-title">
            {name}
          </h4>
          <div className='d-grid h-75'>
            <p className='m-0 align-self-center'>
              {description}            
            </p>
            {
              searchTerms.minEmployees || searchTerms.maxEmployees
                ? numEmpsJsx
                : null
            }
          </div>
        </div>
        {
          !isSmallWindow
          ? (
            <div className='col-2 p-2 align-self-center'>
              {logoUrl ? <img src={logoUrl} alt={`${name} logo`} /> : null}
            </div>
          )
          : null
        }
        
      </div>
    </li>
  )
}

export default CompanyCard