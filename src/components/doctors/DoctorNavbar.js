import React from 'react';
import { Link } from 'react-router-dom';

const DoctorNavbar = () => {
  return (
    <nav className="doctor-navbar">
      <Link to="/"></Link>
      <Link to="/doctors"></Link>
    </nav>
  );
};

export default DoctorNavbar;