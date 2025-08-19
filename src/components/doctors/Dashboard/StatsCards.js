import React from 'react';

const StatsCards = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-gray-500 text-sm">Patients Today</h3>
          <p className="text-2xl font-bold text-gray-800">12</p>
          <p className="text-gray-500 text-sm">Total appointments</p>
        </div>
        
      
        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="text-gray-500 text-sm">Pending Reports</h3>
          <p className="text-2xl font-bold text-gray-800">5</p>
          <p className="text-gray-500 text-sm">Awaiting your review</p>
        </div>
        
      
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-gray-500 text-sm">Image Analysis</h3>
          <p className="text-2xl font-bold text-gray-800">8</p>
          <p className="text-gray-500 text-sm">Ready for AI processing</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;