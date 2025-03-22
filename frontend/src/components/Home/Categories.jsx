import React, { useState } from "react";
import { FaChartLine, FaBook, FaHandshake, FaPuzzlePiece, FaUser, FaBuilding } from "react-icons/fa"; // Import the icons
import "../../styles/Home.css"; // Corrected import path
import QuestionTypeModal from "./QuestionTypeModal"; // Import the modal component

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // State to manage the selected category

  const categories = [
    {
      id: 1,
      name: "Valuation",
      icon: <FaChartLine className="home-category-icon" />, // Use FaChartLine icon
      description: "Master valuation techniques and models.",
      link: "/valuation",
    },
    {
      id: 2,
      name: "Accounting",
      icon: <FaBook className="home-category-icon" />, // Use FaBook icon
      description: "Learn accounting principles and practices.",
      link: "/accounting",
    },
    {
      id: 3,
      name: "LBOs",
      icon: <FaHandshake className="home-category-icon" />, // Use FaHandshake icon
      description: "Understand leveraged buyout strategies.",
      link: "/lbos",
    },
    {
      id: 4,
      name: "Brain Teasers",
      icon: <FaPuzzlePiece className="home-category-icon" />, // Use FaPuzzlePiece icon
      description: "Solve finance-related puzzles and challenges.",
      link: "/brain-teasers",
    },
    {
      id: 5,
      name: "Behaviorals",
      icon: <FaUser className="home-category-icon" />, // Use FaUser icon
      description: "Prepare for behavioral interview questions.",
      link: "/behaviorals",
    },
    {
      id: 6,
      name: "Industry Knowledge",
      icon: <FaBuilding className="home-category-icon" />, // Use FaBuilding icon
      description: "Explore M&A processes and case studies.",
      link: "/mergers-acquisitions",
    },
  ];

  // Handle category click to open the modal
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="home-container">
      {/* Left Side: Header */}
      <div className="home-header">
        <div className="home-logo">Flash Finance</div>
        <nav className="home-nav-container">
          <ul className="home-nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/valuation">Valuation</a></li>
            <li><a href="/accounting">Accounting</a></li>
            <li><a href="/lbos">LBOs</a></li>
            <li><a href="/brain-teasers">Brain Teasers</a></li>
            <li><a href="/behaviorals">Behaviorals</a></li>
            <li><a href="/mergers-acquisitions">M&A</a></li>
          </ul>
        </nav>
        <button className="home-cta-button">Logout</button>
      </div>

      {/* Right Side: Categories Grid */}
      <div className="home-content">
        <h1>Welcome</h1>
        <p>Learn in a Flash</p>

        <div className="home-categories-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="home-category-card"
              onClick={() => handleCategoryClick(category)} // Open modal on click
            >
              <div className="home-icon-wrapper">{category.icon}</div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCategory && (
        <QuestionTypeModal category={selectedCategory} onClose={closeModal} />
      )}
    </div>
  );
};

export default Categories;