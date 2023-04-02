import React, {useContext, useState} from "react";
import { Navigate } from "react-router";
import UserContext from "../context/UserContext";
import useFields from "../hooks/useFields"
import Alert from "../common/Alert"

function EditProfile() {
  const {currentUser} = useContext(UserContext)
  const {firstName,lastName,email} = currentUser

  const initialState = {
    firstName: firstName, 
    lastName: lastName, 
    password: '', 
    email: email
  }

  const [formData,handleChange] = useFields(initialState)
  const [formErrors, setFormErrors] = useState([])
  const {editUser} = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await editUser(formData)
    if (!result.success) {
      return setFormErrors(result.err)
    }
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className='container-sm'>
      {
        formErrors.length
        ? (
          <Alert 
            type='danger' 
            messages={formErrors} 
            setFormErrors={setFormErrors} 
          />
        )
        :null
      }
      <div className="row Forms-row">
        <div className='col-12 col-sm-8 col-md-5'>
          <h2>
            {firstName + ' ' + lastName}
          </h2>
          <form 
            className="p-3 Forms"
            onSubmit={handleSubmit}
          >
            <div className='row'>
              <div className="form-group">
                <label htmlFor='firstName'>
                  First Name
                </label>
                <input 
                  className='form-control'
                  name="firstName"
                  type='text'
                  value={formData.firstName || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor='lastName'>
                  Last Name
                </label>
                <input 
                  className='form-control'
                  name="lastName"
                  type='text'
                  value={formData.lastName || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor='password'>
                  Password
                </label>
                <input 
                  className='form-control'
                  name="password"
                  type='password'
                  value={formData.password || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">                
                <label htmlFor='email'>
                  Email
                </label>
                <input 
                  className='form-control'
                  name="email"
                  type='email'
                  value={formData.email || ''}
                  onChange={handleChange}
                />
              </div>
              <button className="col-7 btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default EditProfile