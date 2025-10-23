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
    albumArt: "https://en.wikipedia.org/wiki/File:Queen_A_Night_At_The_Opera.png"
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
  const [songs] = React.useState(mockSongs);

  React.useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setUsername(savedUser);
    } else {
      navigate('/');
    }
    const savedProgress = localStorage.getItem('songProgress');
      if (savedProgress) {
        setCurrentSongIndex(parseInt(savedProgress));
      }
  }, [navigate]);

  React.useEffect(() => {
    localStorage.setItem('songProgress', currentSongIndex.toString());
  }, [currentSongIndex]);

  const currentSong = songs[currentSongIndex];
  const hasMoreSongs = currentSongIndex < songs.length - 1;

  function handleLogout() {
    localStorage.removeItem('username');
    navigate('/');
  }

  function handleSkip() {
    console.log('Skip button clicked!');
    /*if (hasMoreSongs) {
      setCurrentSongIndex(prev => prev + 1);
    } else {
      setCurrentSongIndex(0);
    }*/
    setCurrentSongIndex(prev => prev + 1);
  }

  function handleSave() {
    console.log('Save button clicked for:', currentSong.title);
    // Save song to playlist in localStorage
    const savedPlaylist = JSON.parse(localStorage.getItem('playlist') || '[]');
    
    // Check if song already exists
    const exists = savedPlaylist.some(song => song.id === currentSong.id);
    if (!exists) {
      savedPlaylist.push(currentSong);
      localStorage.setItem('playlist', JSON.stringify(savedPlaylist));
      console.log('Song saved to playlist!');
    } else {
      console.log('Song already in playlist');
    }

    // Move to next song
    /*if (hasMoreSongs) {
      setCurrentSongIndex(prev => prev + 1);
    }*/

    setCurrentSongIndex(prev => prev + 1);
  }

  /*if (!currentSong) {
    return (
      <div style={{ 
        textAlign: 'center', 
        marginTop: '100px', 
        color: 'white',
        padding: '40px'
      }}>
        <h2>You've gone through all available songs!</h2>
        <p style={{ marginTop: '20px', color: 'rgba(255, 255, 255, 0.7)' }}>
          Check out your playlist to see what you saved.
        </p>
      </div>
    );
  }*/



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

      {!currentSong ? (
      <div style={{ 
        textAlign: 'center', 
        marginTop: '100px', 
        color: 'white',
        padding: '40px',
        flex: 1
      }}>
        <h2>You've gone through all available songs!</h2>
        <p style={{ marginTop: '20px', color: 'rgba(255, 255, 255, 0.7)' }}>
          Check out your playlist to see what you saved.
        </p>
      </div>
      ) : (

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
            <h2 className="song-title">{currentSong.title}</h2>
            <h3 className="artist-name">{currentSong.artist}</h3>
          </div>

          <div className="controls">
            <button className="control-button skip-button" onClick={handleSkip} type="button">← Skip</button>
            <button className="control-button save-button" onClick={handleSave} type="button">Save →</button>
          </div>
        </main>
      )}
    </>
  );
}