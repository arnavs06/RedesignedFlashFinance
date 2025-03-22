import React from "react";
import "../styles/Home.css";
import Categories from "../components/Home/Categories"; // Import the Categories component

const Home = () => {
  return (
    <div className="home-container">
      {/* Render the Categories component */}
      <Categories />
    </div>
  );
};

export default Home;