import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="courses-section">
      <h1 className="courses-heading pt-3">Our Services</h1>
      <nav className="nav-heading">
        <NavLink to="design" id="services"><button className="btn btn-success">Design</button></NavLink> {' '}
        <NavLink to="development" id="services-develop"><button className="btn btn-success">Development</button></NavLink>
      </nav>
      <Outlet />
    </div>
  );
}



export default Services;
