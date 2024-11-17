import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setSubmitted(true);
      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      alert('Please fill out both fields');
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the sign-up page
  };

  

  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <div>
          <h2 style={styles.login_title}>Login Page</h2>
        </div>

        {submitted ? (
          <div style={styles.successMessage}>
            <h3>Welcome!</h3>
            <p>You have successfully logged in with the email: {email}</p>
          </div>
        ) : (
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label><strong>Email:</strong></label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label><strong>Password:</strong></label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Login</button>
            <br></br>
            <div>
              <h5>If you're new, please sign-up here.</h5>
              <br></br>
              <button type="button" style={styles.signup} onClick={handleSignUpClick}>Sign-Up</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '100px',
    border: '3px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  login_title: {
    backgroundColor: 'wheat',
    marginBottom: '15px',
    padding: '15px',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '5px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  signup: {
    padding: '10px',
    backgroundColor: 'cornflowerblue',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  successMessage: {
    textAlign: 'center',
  },
};

export default LoginPage
