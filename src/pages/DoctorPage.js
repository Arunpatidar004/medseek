import React from 'react';
import { Outlet } from 'react-router-dom';
import DoctorNavbar from '../components/doctors/DoctorNavbar';
import Footer from '../components/common/Footer';

const DoctorPage = () => {
  return (
    <div className="doctor-page">
      <DoctorNavbar />
      <Outlet /> 
      <Footer />
    </div>
  );
};

export default DoctorPage;