import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

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

      <div className="login-container">
        <h2 className="login-title">Welcome to SongSwipe</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" className="input-field" value={username}
            onChange={(e) => setUsername(e.target.value)} required />
          <input 
            type="password" 
            placeholder="Password" 
            className="input-field" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.5)', 
            marginTop: '10px',
            fontSize: '14px'
          }}>
            Song {currentSongIndex + 1} of {songs.length}
          </p>  
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="signup-text">Don't have an account? <a href="#" className="signup-link">Sign Up</a></p>
      </div>
    </>
  );
}