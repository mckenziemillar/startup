import React from 'react';
import { useNavigate } from 'react-router-dom';
import './deck.css';

const mockSongs = [
  {
    id: 1,
    title: "Come Together",
    artist: "The Beatles",
    albumArt: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
  },
  {
    id: 2,
    title: "Money",
    artist: "Pink Floyd",
    albumArt: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
  },
  {
    id: 3,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    albumArt: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_at_the_Opera.png"
  },
  {
    id: 4,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    albumArt: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg"
  }
];

export function Deck() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('Guest');
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const [songs, setSongs] = React.useState(mockSongs);

  React.useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  const currentSong = songs[currentSongIndex];

  function handleLogout() {
    localStorage.removeItem('username');
    navigate('/');
  }

  function handleSkip() {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      // Loop back to start or show "no more songs" message
      setCurrentSongIndex(0);
    }
  }

  function handleSave() {
    // Save song to playlist in localStorage
    const savedPlaylist = JSON.parse(localStorage.getItem('playlist') || '[]');
    
    // Check if song already exists
    const exists = savedPlaylist.some(song => song.id === currentSong.id);
    if (!exists) {
      savedPlaylist.push(currentSong);
      localStorage.setItem('playlist', JSON.stringify(savedPlaylist));
    }

    // Move to next song
    handleSkip();
  }

  if (!currentSong) {
    return (
      <div>
        <h2 style={{textAlign: 'center', marginTop: '50px'}}>
          No more songs! Start over?
        </h2>
        <button onClick={() => setCurrentSongIndex(0)}>Restart</button>
      </div>
    );
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

      <main className="main-content">
        <div className="album-container">
          <div className="album-frame">
            <img 
              src={currentSong.albumArt} 
              alt={`${currentSong.title} Album Cover`} 
              className="album-art"
            />
          </div>
        </div>

        <div className="song-info">
          <h2 className="song-title">Come Together</h2>
          <h3 className="artist-name">The Beatles</h3>
        </div>

        <div className="controls">
          <button className="control-button skip-button" oncClick={handleSkip}>← Skip</button>
          <button className="control-button save-button" oncClick={handleSave}>Save →</button>
        </div>
      </main>
    </>
  );
}