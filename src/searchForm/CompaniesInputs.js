function CompaniesInputs({formData,handleChange}) {
  return (
    <>
      <input
        className="form-control"
        name="name"
        type="text"
        placeholder="Company name"
        value={formData.name || ''}
        onChange={handleChange}
        autoFocus 
      />
      <input
        className="form-control"
        name="minEmployees"
        type="number"
        placeholder="Minimum employees"
        value={formData.minEmployees || ''}
        onChange={handleChange}
      />
      <input
        className="form-control"
        name="maxEmployees"
        type='number'
        placeholder="Maximum employees"
        value={formData.maxEmployees || ''}
        onChange={handleChange}
      />
    </>
  )
}

export default CompaniesInputs