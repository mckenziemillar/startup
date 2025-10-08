import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Deck } from './deck/deck';
import { Playlist } from './playlist/playlist';
import { Trending } from './trending/trending';
import './app.css';

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/deck' element={<Deck />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2024 Music Swipe App</p>
          <a href="https://github.com/mckenziemillar/startup.git" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}