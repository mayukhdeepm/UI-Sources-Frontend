import React from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log in or sign up <br />to continue browsing apps</h2>
        <button className="login-button google">
          <FcGoogle className="icon" /> Continue with Google
        </button>
        <button className="login-button">See other options</button>
        <div className="separator">
          <span>or</span>
        </div>
        <input
          type="email"
          className="email-input"
          placeholder="Enter email address"
        />
        <button className="login-button email">Continue with email</button>
        <p className="terms">
          By continuing you acknowledge that you have read and understood, and
          agree to UI Source’s <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Login;