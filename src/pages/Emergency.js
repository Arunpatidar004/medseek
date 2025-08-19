import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Emergency = () => {
  const [emergencyData, setEmergencyData] = useState({
    name: '',
    phone: '',
    condition: '',
    location: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmergencyData({
      ...emergencyData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would trigger emergency protocols
    console.log('Emergency request:', emergencyData);
    setIsSubmitted(true);
    // Simulate emergency response
    setTimeout(() => {
      setIsSubmitted(false);
      navigate('/patients');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Emergency Assistance</h2>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Emergency Alert Sent!</h3>
            <p className="text-gray-600 mb-4">
              Medical help is on the way to your location.
              Please stay on the line if you called emergency services.
            </p>
            <div className="animate-pulse text-red-500">
              <p>Connecting you with emergency services...</p>
            </div>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              For immediate medical attention, please fill this form and we will
              connect you with emergency services.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={emergencyData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={emergencyData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Current Condition</label>
                  <textarea
                    name="condition"
                    value={emergencyData.condition}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                    rows="3"
                    placeholder="Describe symptoms, injuries, etc."
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Your Location</label>
                  <input
                    type="text"
                    name="location"
                    value={emergencyData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Address or approximate location"
                    required
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => navigate('/patients')}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Request Emergency Help
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Emergency;