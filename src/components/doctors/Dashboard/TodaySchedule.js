import React from 'react';

const TodaySchedule = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Today's Schedule</h2>
      <p className="text-gray-600 mb-6">Friday, May 9, 2025</p>
      
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-medium">Sarah Johnson</h3>
          <p className="text-gray-600">Follow-up - 10:00 AM</p>
        </div>
        
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-medium">Mike Stevens</h3>
          <p className="text-gray-600">Consultation - 11:30 AM</p>
        </div>
      </div>
    </div>
  );
};

export default TodaySchedule;