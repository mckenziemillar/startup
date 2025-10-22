import React from 'react';
import { useNavigate } from 'react-router-dom';
import './playlist.css';

export function Playlist() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('Guest');
  const [playlist, setPlaylist] = React.useState([]);

  // Load username and playlist from localStorage
  React.useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setUsername(savedUser);
    }

    const savedPlaylist = JSON.parse(localStorage.getItem('playlist') || '[]');
    setPlaylist(savedPlaylist);
  }, []);

  function handleLogout() {
    localStorage.removeItem('username');
    navigate('/');
  }

  function handleRemoveSong(songId) {
    const updatedPlaylist = playlist.filter(song => song.id !== songId);
    setPlaylist(updatedPlaylist);
    localStorage.setItem('playlist', JSON.stringify(updatedPlaylist));
  }

  return (
    <>
      <div className="nav-container">
        <button className="nav-button" onClick={handleLogout}>Logout</button>
        <button className="nav-button" onClick={() => navigate('/deck')}>Swipe Deck</button>
        <button className="nav-button" onClick={() => navigate('/playlist')}>My Playlist</button>
        <button className="nav-button" onClick={() => navigate('/trending')}>Trending</button>
        <div className="current-user-box">
          Logged in as <span className="username">{username}</span>
        </div>
      </div>

      <h1 className="section-title">My Saved Songs</h1>

      <div className="song-list">
        {playlist.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px', 
            color: 'rgba(255, 255, 255, 0.7)' 
          }}>
            <p>No saved songs yet!</p>
            <p>Go to the Swipe Deck to start adding songs.</p>
          </div>
        ) : (
          playlist.map((song) => (
            <div key={song.id} className="song-item">
              <img src={song.albumArt} alt={song.title} />
              <div className="song-info">
                <p className="song-title">{song.title}</p>
                <p className="song-artist">{song.artist}</p>
              </div>
              <button 
                onClick={() => handleRemoveSong(song.id)}
                style={{
                  marginLeft: 'auto',
                  background: 'rgba(255, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 0, 0, 0.5)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}