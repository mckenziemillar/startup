import React from 'react';
import { useNavigate } from 'react-router-dom';
import './trending.css';

export function Trending() {
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

      <h1 className="section-title">Trending Songs</h1>

      <div className="song-list">
        <div className="song-item">
          <img src="/images/abbyroad.avif" alt="Come Together" />
          <div className="song-info">
            <p className="song-title">Come Together</p>
            <p className="song-artist">The Beatles</p>
          </div>
        </div>

        <div className="song-item">
          <img src="/images/darkside.png" alt="Money" />
          <div className="song-info">
            <p className="song-title">Money</p>
            <p className="song-artist">Pink Floyd</p>
          </div>
        </div>
      </div>
    </>
  );
}