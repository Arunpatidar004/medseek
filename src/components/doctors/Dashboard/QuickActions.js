import React from 'react';

const QuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-1 gap-4">
        <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-4 rounded-lg text-left">
          <h3 className="font-medium">Analyze Medical Image</h3>
          <p className="text-sm">Upload and analyze scans</p>
        </button>
        
        <button className="bg-green-50 hover:bg-green-100 text-green-700 p-4 rounded-lg text-left">
          <h3 className="font-medium">Generate Report</h3>
          <p className="text-sm">Create patient documentation</p>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;