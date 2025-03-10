import React from "react";
import { FaChartLine, FaBook, FaHandshake, FaPuzzlePiece, FaUser, FaBuilding } from "react-icons/fa"; // Modern icons
import "../styles/Home.css"; // Import the updated CSS

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Valuation",
      icon: <FaChartLine className="home-category-icon" />,
      description: "Master valuation techniques and models.",
      link: "/valuation",
    },
    {
      id: 2,
      name: "Accounting",
      icon: <FaBook className="home-category-icon" />,
      description: "Learn accounting principles and practices.",
      link: "/accounting",
    },
    {
      id: 3,
      name: "LBOs",
      icon: <FaHandshake className="home-category-icon" />,
      description: "Understand leveraged buyout strategies.",
      link: "/lbos",
    },
    {
      id: 4,
      name: "Brain Teasers",
      icon: <FaPuzzlePiece className="home-category-icon" />,
      description: "Solve finance-related puzzles and challenges.",
      link: "/brain-teasers",
    },
    {
      id: 5,
      name: "Behaviorals",
      icon: <FaUser className="home-category-icon" />,
      description: "Prepare for behavioral interview questions.",
      link: "/behaviorals",
    },
    {
      id: 6,
      name: "Industry Knowledge",
      icon: <FaBuilding className="home-category-icon" />,
      description: "Learn more about the Industry",
      link: "/mergers-acquisitions",
    },
  ];

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
            <li><a href="/mergers-acquisitions">Industry Knowledge</a></li>
          </ul>
        </nav>
        <button className="home-cta-button">Logout</button>
      </div>

      {/* Right Side: Categories Grid */}
      <div className="home-content">
        <h1>Welcome to FlashFinance</h1>
        <p>Explore & Learn below</p>

        <div className="home-categories-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="home-category-card"
              onClick={() => (window.location.href = category.link)}
            >
              <div className="home-icon-wrapper">{category.icon}</div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;