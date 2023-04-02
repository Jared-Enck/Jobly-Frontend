import JobCard from "./JobCard"

function JobCardList({jobs}) {
  return (
    <div className="row">
      <div className="col-12 col-md-10 col-xl-9 p-0">
        <ul className="mt-3 p-0">
          {
            jobs.map(j => (
              <JobCard 
                key={j.id}
                job={j}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default JobCardList