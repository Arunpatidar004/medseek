import React from 'react';
import DoctorNavbar from '../components/doctors/DoctorNavbar';

const PatientDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DoctorNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Patient Details</h1>
        <div className="bg-white rounded-xl shadow p-6">
          <p>Patient details content will go here</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;