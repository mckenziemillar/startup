import React from 'react';
import { useNavigate } from 'react-router-dom';
import './trending.css';

const initialTrendingSongs = [
  {
    id: 1,
    title: "Come Together",
    artist: "The Beatles",
    albumArt: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
    plays: 1250
  },
  {
    id: 2,
    title: "Money",
    artist: "Pink Floyd",
    albumArt: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
    plays: 1100
  },
  {
    id: 3,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    albumArt: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_at_the_Opera.png",
    plays: 980
  }
];

export function Trending() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('Guest');
  const [trendingSongs, setTrendingSongs] = React.useState(initialTrendingSongs);

  React.useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem('username');
    navigate('/');
  }


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