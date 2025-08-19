import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorHeroSection = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/doctors/LoginPage'); 
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
      
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Transform Your Medical Practice
          </h1>
          <p className="text-xl text-gray-600 mb-8">
        SecureMed AI empowers doctors with cutting-edge AI tools designed to reduce administrative burden, enhance diagnostic accuracy, and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDashboardClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium inline-block"
            >
              Try Doctor Dashboard →
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium">
              Explore All Features
            </button>
          </div>
        </div>

    
        <div className="bg-white rounded-xl shadow-lg p-6 md:w-1/2 w-full">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">SecureMed AI Assistant</h3>
          <p className="text-gray-600 mb-4">Analyzing patient history...</p>
          <div className="mb-4">
            <p className="font-medium text-gray-800">Summary:</p>
            <p className="text-gray-600">
              Patient presents with recurring migraines, 3-4 times weekly. No significant relief from current medication.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-medium text-gray-800">Suggestion:</p>
            <p className="text-gray-600">
              Consider preventive treatment options. Recent studies show promise with GGRP antagonists for similar cases.
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            View Full Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorHeroSection;