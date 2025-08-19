import React, { useState } from 'react';
import PatientNavbar from '../../pages/patients/PatientNavbar';

const PatientAppointment = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctorId: '',
    symptoms: '',
    medicalHistory: '',
    prescription: null
  });

  // Dummy doctor data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      availability: 'Mon, Wed, Fri - 9am to 5pm',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 4.8,
      alt: 'Portrait of Dr. Sarah Johnson'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      availability: 'Tue, Thu - 10am to 6pm',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4.9,
      alt: 'Portrait of Dr. Michael Chen'
    },
    {
      id: 3,
      name: 'Dr. Priya Patel',
      specialty: 'Pediatrician',
      availability: 'Mon to Fri - 8am to 4pm',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4.7,
      alt: 'Portrait of Dr. Priya Patel'
    },
    {
      id: 4,
      name: 'Dr. Robert Williams',
      specialty: 'Orthopedic Surgeon',
      availability: 'Wed, Thu, Sat - 11am to 7pm',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      rating: 4.6,
      alt: 'Portrait of Dr. Robert Williams'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    setShowAppointmentModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Redefining Healthcare & Education
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our revolutionary features that combine cutting-edge AI, voice technology, and blockchain security in one seamless platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowAppointmentModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium inline-block"
              >
                New Appointment
              </button>
              <button 
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium"
              >
                Previous Appointments
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:w-1/2 w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">SecureMed </h3>
            <p className="text-gray-600 mb-4">Book a consultation with your preferred doctor</p>
            <div className="mb-4">
              <p className="font-medium text-gray-800">View History</p>
              <p className="text-gray-600">
                Access your past medical appointments
              </p>
            </div>
            <div className="mb-4">
              <p className="font-medium text-gray-800">Get Help Now</p>
              <p className="text-gray-600">
                Get immediate medical assistance
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              View Full Analysis
            </button>
          </div>
        </div>
      </section>

      {/* Doctor Availability Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Available Doctors</h2>
          <p className="text-lg text-center text-gray-600 mb-8">Find the right specialist for your needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-blue-50 rounded-xl p-6 shadow-md">
                <div className="flex flex-col items-center">
                  <img 
                    src={doctor.image} 
                    alt={doctor.alt}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800 text-center">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium text-center">{doctor.specialty}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-gray-700">{doctor.rating}</span>
                  </div>
                  <p className="mt-3 text-gray-600 text-center text-sm">
                    <span className="font-medium">Availability:</span> {doctor.availability}
                  </p>
                  <button 
                    onClick={() => setShowAppointmentModal(true)}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appointment Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* New Appointment Card */}
          <div 
            onClick={() => setShowAppointmentModal(true)}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-blue-500"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">New Appointment</h2>
            <p className="text-gray-600 mb-4">
              Schedule a new consultation with your doctor
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Book Now
            </button>
          </div>

          {/* Old Appointments Card */}
          <div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-green-500"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Previous Appointments</h2>
            <p className="text-gray-600 mb-4">
              View your appointment history and medical records
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              View History
            </button>
          </div>

          {/* Emergency Card */}
          <div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-red-500"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Emergency</h2>
            <p className="text-gray-600 mb-4">
              Immediate medical attention for urgent cases
            </p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Get Help Now
            </button>
          </div>
        </div>
      </div>

      {/* Appointment Booking Modal */}
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-xl font-bold text-gray-800">New Appointment</h3>
              <button 
                onClick={() => setShowAppointmentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Date*</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Time*</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Doctor*</label>
                  <select
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={(e) => setFormData({...formData, doctorId: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  >
                    <option value="">Select a doctor</option>
                    {doctors.map(doctor => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name} ({doctor.specialty})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Symptoms*</label>
                  <textarea
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    rows="3"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Medical History</label>
                  <textarea
                    name="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={(e) => setFormData({...formData, medicalHistory: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    rows="2"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Upload Prescription (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-4">
                    <input
                      type="file"
                      onChange={(e) => setFormData({...formData, prescription: e.target.files[0]})}
                      className="block w-full text-sm text-gray-500"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      PDF, JPG, or PNG (Max. 5MB)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAppointmentModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientAppointment;