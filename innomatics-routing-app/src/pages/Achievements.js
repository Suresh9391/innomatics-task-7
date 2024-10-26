import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="award-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <img src="https://www.innomatics.in/wp-content/uploads/2023/01/AWARD-PAGE.jpg" className="w-100 image2" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Achievements;
