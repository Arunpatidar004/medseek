import React from 'react';
const Doctorfeatures= () => {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Key Features for Medical Professionals
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
          
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Documentation</h3>
              <p className="text-gray-600">
                Automatically generate SOAP notes, summary reports, and patient histories using advanced AI that understands medical context.
              </p>
            </div>
          
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Medical Imaging Analysis</h3>
              <p className="text-gray-600">
                Get AI assistance in analyzing X-rays, MRIs, and CT scans, with automatic detection of anomalies and diagnostic suggestions.
              </p>
            </div>
          
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Voice Assistant Integration</h3>
              <p className="text-gray-600">
                Use voice commands for hands-free operation during procedures and consultations, with real-time transcription and data retrieval.
              </p>
            </div>
            
          
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Blockchain Secure Records</h3>
              <p className="text-gray-600">
                Maintain tamper-proof patient records with blockchain technology, ensuring privacy, traceability, and secure data sharing.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Doctorfeatures;
