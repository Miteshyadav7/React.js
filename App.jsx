import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agree) newErrors.agree = 'You must agree to the terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSubmittedData(formData);
    } else {
      setErrors(validationErrors);
      setSubmittedData(null);
    }
  };

  return (
    <>
      <div className='container'>
        <div>
          <img
            style={{ borderRadius: '20px' }}
            src='https://mrwallpaper.com/images/high/cute-mobile-purple-butterfly-397ce8mvuaracn2o.jpg'
            width={400}
            height={500}
            alt=''
          />
        </div>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>

            <p>FULL NAME</p>
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
            {errors.name && <p style={{color:"red"}} className='error '>{errors.name}</p>}

            <p>EMAIL</p>
            <input type='email' name='email' value={formData.email} onChange={handleChange} />
            {errors.email && <p style ={{color:"red"}} className='error'>{errors.email}</p>}

            <p>Username</p>
            <input type='text' name='username' value={formData.username} onChange={handleChange} />
            {errors.username && <p style ={{color:"red"}} className='error'>{errors.username}</p>}

            <p>Password</p>
            <input type='password' name='password' value={formData.password} onChange={handleChange} />
            {errors.password && <p style ={{color:"red"}} className='error'>{errors.password}</p>}

            <p>Repeat Password</p>
            <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <p style ={{color:"red"}} className='error'>{errors.confirmPassword}</p>}

            <div className='mt-3'>
              <input
                type='checkbox'
                className='btn-check'
                id='checkBox'
                name='agree'
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor='checkBox' className='ml-2'>
                I agree terms and condition
              </label>
              {errors.agree && <p style ={{color:"red"}} className='error'>{errors.agree}</p>}
            </div>

            <br />
            <button type='submit' className='button1'>
              SignUp
            </button>
            <button type='button' className='button1'>
              SignIn
            </button>
          </form>

          
          {submittedData && (
            <div className='result mt-4'>
              <h2>Submitted Data:</h2>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Username:</strong> {submittedData.username}</p>
              <p><strong>password:</strong>{submittedData.password}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
