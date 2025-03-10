import React from "react";
import "../styles/Home.css"; // Import the updated CSS

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Valuation",
      icon: "📊",
      description: "Master valuation techniques and models.",
      link: "/valuation",
    },
    {
      id: 2,
      name: "Accounting",
      icon: "📚",
      description: "Learn accounting principles and practices.",
      link: "/accounting",
    },
    {
      id: 3,
      name: "LBOs",
      icon: "💼",
      description: "Understand leveraged buyout strategies.",
      link: "/lbos",
    },
    {
      id: 4,
      name: "Brain Teasers",
      icon: "🧩",
      description: "Solve finance-related puzzles and challenges.",
      link: "/brain-teasers",
    },
    {
      id: 5,
      name: "Behaviorals",
      icon: "🗣️",
      description: "Prepare for behavioral interview questions.",
      link: "/behaviorals",
    },
    {
      id: 6,
      name: "Industry Knowledge",
      icon: "🤝",
      description: "Explore M&A processes and case studies.",
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
            <li><a href="/mergers-acquisitions">M&A</a></li>
          </ul>
        </nav>
        <button className="home-cta-button">Logout</button>
      </div>

      {/* Right Side: Categories Grid */}
      <div className="home-content">
        <div className="home-categories-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="home-category-card"
              onClick={() => (window.location.href = category.link)}
            >
              <div className="home-icon-wrapper">
                <span className="home-category-icon">{category.icon}</span>
              </div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;