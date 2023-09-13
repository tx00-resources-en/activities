import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const getGreetings = () => {
    switch (nationality) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return '';
    }
  };

    // Function to validate an email
    const isValidEmail = (email) => {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      // Function to check password strength (simple example)
      const isStrongPassword = (password) => {
        // You can implement more complex password strength checks here
        return password.length >= 6;
      };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Signup</h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className={`input ${isValidEmail(email) ? 'success' : ''}`}
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          className={`input ${isStrongPassword(password) ? 'success' : ''}`}
        />
        <select
          value={nationality}
          onChange={handleNationalityChange}
          className="input"
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <p>{getGreetings()}</p>
        <p>Your email is {email}</p>
      </form>
    </div>
  );
};

export default SignupPage;
