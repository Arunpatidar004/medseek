
import React from 'react';
import DoctorHeroSection from '../components/doctors/DoctorHeroSection';
import DoctorFeatures from '../components/doctors/Doctorfeatures';
import Testimonials from '../components/doctors/Testimonials';

const DoctorLanding = () => {
  return (
    <>
      <DoctorHeroSection />
      <DoctorFeatures />
      <Testimonials />
    </>
  );
};

export default DoctorLanding;