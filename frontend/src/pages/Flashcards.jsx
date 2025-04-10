import React from 'react';
import Flashcard from '../components/Flashcards/Flashcard';
import Header from '../components/Landing/Header'; 
import '../styles/Flashcards.css';

function Flashcards() {
  const cards = [
    { title: 'FlashFinance', description: 'Best IB/PE learning platform' },
    { title: 'TechStack', description: 'do not ask me that' },
    { title: 'Goated?', description: 'Yeah' },
  ];

  return (
    <div>
      <Header />
      <Flashcard cards={cards} />
    </div>
  );
}

export default Flashcards;