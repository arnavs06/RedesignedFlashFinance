import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Flashcard from './pages/Flashcards';
import SignUp from './pages/Signup';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/flashcards" element={<Flashcard flashcard={Flashcard} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;