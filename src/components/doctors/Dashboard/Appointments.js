import React from 'react';

const Appointments = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Appointments</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-medium">Sarah Johnson</h3>
            <p className="text-gray-600 text-sm">Follow-up - 10:00 AM</p>
          </div>
          <button className="text-blue-600 text-sm font-medium">
            View Details
          </button>
        </div>
        
        <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-medium">Mike Stevens</h3>
            <p className="text-gray-600 text-sm">Consultation - 11:30 AM</p>
          </div>
          <button className="text-blue-600 text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;