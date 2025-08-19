import React from 'react';
import { Link } from 'react-router-dom';
const Testimonials = () => {
    return (
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">What Doctors Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <p className="text-gray-600 italic mb-4">
                "MedLink AI+ has reduced my documentation time by 60%. I can spend more time with patients instead of on paperwork."
              </p>
              <p className="font-semibold text-gray-800">Dr. Sarah Johnson</p>
              <p className="text-gray-500">Cardiologist</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <p className="text-gray-600 italic mb-4">
                "The imaging analysis feature has helped me catch subtleties I might have otherwise missed. It's like having a second pair of expert eyes."
              </p>
              <p className="font-semibold text-gray-800">Dr. Michael Chen</p>
              <p className="text-gray-500">Radiologist</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <p className="text-gray-600 italic mb-4">
                "The voice assistant is incredibly accurate with medical terminology. It's transformed how I document during patient visits."
              </p>
              <p className="font-semibold text-gray-800">Dr. Emily Rodriguez</p>
              <p className="text-gray-500">Family Medicine</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
  to="/"
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-300"
>
  Discover AI Features for Doctors
</Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;