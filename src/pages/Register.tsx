import React, { useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Logo from '../components/Logo';
import './register.css'


const Register: React.FC= () => {
 const [isRegistered, setIsRegistered] = useState(false);

 const toggleForm = () => {
  setIsRegistered(!isRegistered);
 }
 const validationSchema = Yup.object().shape({
  isRegistered: Yup.boolean(),
  name: Yup.string().when('isRegistered', {
    is: false,
    then: Yup.string().required('Name is required'),
    otherwise: Yup.string(),
  }),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});
 const formik = useFormik({
  initialValues:{
    name: '',
    email: '',
    password: '',
  },
  validationSchema,
  onSubmit: (values) =>{
    console.log(values);
  }
 });
  return (
    <div className="register_container">
      <div className="card">
        <div className="logo">
          <Logo/>
          
        </div>
        {isRegistered ? (
          <>
          <h2>Login</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input 
              type="email" 
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required/>
              {formik.touched.password && formik.errors.password ?(
                <div className="error">{formik.errors.password}</div>
              ): null}
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>
            <button type='submit' className='btn primary'>Login</button>
          </form>
          <p>
              Don't have an account? <button onClick={toggleForm} className="link-button">Register</button>
            </p>
          </>
        ):(
          <>
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                    <label>Name</label>
                    <input
                     type="text"
                      name='name'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      required
                      />
                      {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="form-group">
              <label>Email</label>
              <input 
              type="email" 
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required/>
              {formik.touched.password && formik.errors.password ?(
                <div className="error">{formik.errors.password}</div>
              ): null}
            </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                type="password"
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                />
                 {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>
              <button type="submit" className="btn primary">Submit</button>
            </form>
            <p>
              Already a member? <button onClick={toggleForm} className="link-button">Login</button>
            </p>
          </>
          

        )}
      </div>
    </div>
  )
}

export default Register

