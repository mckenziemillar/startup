import React from 'react';
import { useNavigate } from 'react-router-dom';
import './deck.css';

export function Deck() {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav-container">
        <button className="nav-button" onClick={() => navigate('/')}>Logout</button>
        <button className="nav-button" onClick={() => navigate('/deck')}>Swipe Deck</button>
        <button className="nav-button" onClick={() => navigate('/playlist')}>My Playlist</button>
        <button className="nav-button" onClick={() => navigate('/trending')}>Trending</button>
        <div className="current-user-box">
          Logged in as <span className="username">Mckenzie</span>
        </div>
      </div>

      <main className="main-content">
        <div className="album-container">
          <div className="album-frame">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg" 
              alt="Abbey Road Album Cover" 
              className="album-art"
            />
          </div>
        </div>

        <div className="song-info">
          <h2 className="song-title">Come Together</h2>
          <h3 className="artist-name">The Beatles</h3>
        </div>

        <div className="controls">
          <button className="control-button skip-button">← Skip</button>
          <button className="control-button save-button">Save →</button>
        </div>
      </main>
    </>
  );
}