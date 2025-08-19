import React from 'react';
import { Navbar, HeroSection, FeaturesSection } from '../components/landingpage';
import Footer from '../components/common/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default LandingPage;