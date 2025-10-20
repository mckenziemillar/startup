import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');

  React.useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      navigate('/deck');
    }
  }, [navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Store username in localStorage (mock authentication)
    localStorage.setItem('username', username);
    navigate('/deck');
  }

  return (
    <>
      <div className="nav-container">
        <button className="nav-button" onClick={() => navigate('/deck')}>Home</button>
        <button className="nav-button" onClick={() => navigate('/playlist')}>My Playlist</button>
        <button className="nav-button" onClick={() => navigate('/trending')}>Trending</button>
      </div>

      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form">
          <input type="text" placeholder="Username" className="input-field" required />
          <input type="password" placeholder="Password" className="input-field" required />
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="signup-text">Don't have an account? <a href="#" className="signup-link">Sign Up</a></p>
      </div>
    </>
  );
}