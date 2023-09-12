import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Enter into Student Info System</h1>
      <Link to="/chat">
        <button className="enroll-button">Enroll Now!</button>
      </Link>
    </div>
  );
};

export default Home;
