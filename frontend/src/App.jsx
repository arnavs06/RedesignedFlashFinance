import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Flashcard from './pages/Flashcards';
import SignUp from './pages/Signup';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/flashcards" element={<Flashcard flashcard={Flashcard} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;