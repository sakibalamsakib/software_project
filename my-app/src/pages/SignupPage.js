// src/pages/SignUpPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phoneNumber && password && confirmPassword) {
      if (password === confirmPassword) {
        setSubmitted(true);
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Password:', password);
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div>
          <h2 style={styles.signup_title}>Sign-Up Page</h2>
        </div>

        {submitted ? (
          <div style={styles.successMessage}>
            <h3>Thank You for Signing Up!</h3>
            <p>Your account has been created successfully with the email: {email}</p>
            <p>
              <Link to="/login" style={styles.loginLink}>Go to Login Page</Link>
            </p>
          </div>
        ) : (
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label><strong>Name:</strong></label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                style={styles.input}
              />
            </div>
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
              <label><strong>Phone Number:</strong></label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
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
            <div style={styles.inputGroup}>
              <label><strong>Confirm Password:</strong></label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Sign Up</button>
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
  signup_title: {
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
  successMessage: {
    textAlign: 'center',
  },
  loginLink: {
    color: '#4CAF50',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default SignupPage;
