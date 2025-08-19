import React from 'react';
import { useNavigate } from 'react-router-dom';

const OldAppointments = () => {
  const navigate = useNavigate();
  
  // Sample appointment data
  const appointments = [
    {
      id: 1,
      date: '2023-05-15',
      time: '10:00 AM',
      doctor: 'Dr. Smith',
      reason: 'Annual Checkup',
      status: 'Completed'
    },
    {
      id: 2,
      date: '2023-04-10',
      time: '02:30 PM',
      doctor: 'Dr. Johnson',
      reason: 'Headache Consultation',
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Appointment History</h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appt.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appt.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appt.doctor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appt.reason}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${appt.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <button
            onClick={() => navigate('/patients')}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Back to Appointment Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default OldAppointments;