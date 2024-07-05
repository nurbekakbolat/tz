
import React from 'react';
import './Statistics.css'

const Statistics = () => (
  <div className="statistics-container">
    <div className="stats-wrapper">
    <div className="statistics">
    <div className="stat-numbers">
      <label className="main-stat-text">20K+</label>
      <label className="sub-stat-text">subscribers</label>
    </div>
    <div className="stat-numbers">
      <label className="main-stat-text">19,5K</label>
      <label className="sub-stat-text">successful cases</label>
    </div>
    <div className="stat-numbers">
      <label className="main-stat-text">4.8/5</label>
      <label className="sub-stat-text">rating</label>
    </div>
    </div>
    <button className="wp-btn">
        <label style={{
          color: "1C1A1A"
        }}>JOIN WHATSAPP</label>
    </button>
    </div>
  </div>
);

export default Statistics;
