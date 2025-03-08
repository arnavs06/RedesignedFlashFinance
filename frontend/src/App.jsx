import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Flashcard from './pages/Flashcards';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flashcards" element={<Flashcard flashcard={Flashcard} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;