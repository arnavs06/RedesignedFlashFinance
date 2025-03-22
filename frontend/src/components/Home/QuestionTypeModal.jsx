import React, { useEffect } from "react";
import { FaBook, FaCheckCircle, FaEdit } from "react-icons/fa"; // Import the icons

const QuestionTypeModal = ({ category, onClose }) => {
  useEffect(() => {
    if (category) {
      // Add a slight delay to ensure the DOM updates before adding the 'active' class
      setTimeout(() => {
        const overlay = document.querySelector(".modal-overlay");
        if (overlay) {
          overlay.classList.add("active");
        }
      }, 10);
    }
  }, [category]);

  if (!category) return null;

  const questionTypes = [
    {
      id: 1,
      name: "Flashcards",
      icon: <FaBook className="question-type-icon" />, // Use FaBook for Flashcards
      link: `${category.link}/flashcards`,
    },
    {
      id: 2,
      name: "Multiple Choice",
      icon: <FaCheckCircle className="question-type-icon" />, // Use FaCheckCircle for Multiple Choice
      link: `${category.link}/multiple-choice`,
    },
    {
      id: 3,
      name: "Short Answer",
      icon: <FaEdit className="question-type-icon" />, // Use FaEdit for Short Answer
      link: `${category.link}/short-answer`,
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Select Question Type for {category.name}</h2>
        <div className="modal-options">
          {questionTypes.map((type) => (
            <a key={type.id} href={type.link} className="modal-option">
              <div className="question-type-icon-wrapper">
                {type.icon} {/* Render the icon */}
              </div>
              <span>{type.name}</span>
            </a>
          ))}
        </div>
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default QuestionTypeModal;