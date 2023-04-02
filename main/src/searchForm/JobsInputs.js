function JobsInputs({formData,handleChange}) {
  return (
    <>
      <input
        className="form-control"
        name="title"
        type="text"
        placeholder="Job title"
        value={formData.title || ''}
        onChange={handleChange}
        autoFocus 
      />
      <input
        className="form-control"
        name="minSalary"
        type="number"
        placeholder="Minimum salary"
        value={formData.minSalary || ''}
        onChange={handleChange}
      />
      <div className="input-group-text">
        <label htmlFor="hasEquity" className="me-2 text-shadow-none">
          Has Equity 
        </label>
        <input
          name="hasEquity"
          type='checkbox'
          checked={formData.hasEquity || ''}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default JobsInputs