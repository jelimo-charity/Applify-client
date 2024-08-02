import React, { useState } from 'react';
import Logo from '../components/Logo';
import axios from 'axios';
import './register.css';

const Register: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const toggleForm = () => {
    setIsRegistered(!isRegistered);
    setFormValues({ firstName: '', lastName: '', email: '', password: '' });
    setFormErrors({ firstName: '', lastName: '', email: '', password: '' });
  };

  const validate = () => {
   const errors = { firstName: '', lastName: '', email: '', password: '' };
    if (!isRegistered) {
      if (!formValues.firstName) errors.firstName = 'First name is required';
      if (!formValues.lastName) errors.lastName = 'Last name is required';
    }
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formValues.password) {
      errors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:5000/register', formValues);
        alert(response.data.message);
        console.log(response.data);
      } catch (error: any) {
        alert(error.response?.data.message || 'Error occurred!');
        console.error(error);
      }
    }
  };

  return (
    <div className="register_container">
      <div className="card">
        <div className="logo">
          <Logo />
        </div>
        {isRegistered ? (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
                {formErrors.email && <div className="error">{formErrors.email}</div>}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  required
                />
                {formErrors.password && <div className="error">{formErrors.password}</div>}
              </div>
              <button type="submit" className="btn primary">Login</button>
            </form>
            <p>
              Don't have an account? <button onClick={toggleForm} className="link-button">Register</button>
            </p>
          </>
        ) : (
          <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  required={!isRegistered}
                />
                {formErrors.firstName && <div className="error">{formErrors.firstName}</div>}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  required={!isRegistered}
                />
                {formErrors.lastName && <div className="error">{formErrors.lastName}</div>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
                {formErrors.email && <div className="error">{formErrors.email}</div>}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  required
                />
                {formErrors.password && <div className="error">{formErrors.password}</div>}
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
  );
};

export default Register;
