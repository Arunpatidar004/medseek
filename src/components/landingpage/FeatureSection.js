import React, { useState } from 'react';

const FeaturesSection = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const features = [
    // First 3 features kept exactly as original
    {
      id: 1,
      title: "AI Assistant",
      description: "Advanced AI that helps with documentation, research, and decision support",
      icon: "📚",
      color: "from-blue-100 to-blue-50"
    },
    {
      id: 2,
      title: "Medical Imaging Analysis",
      description: "Computer vision algorithms for diagnostic support",
      icon: "🖼️",
      color: "from-purple-100 to-purple-50",
      details: {
        doctors: ["AI models for X-rays, MRIs, and CT scans with anomaly detection"],
        students: ["Practice analyzing medical images with guided learning sessions"]
      }
    },
    {
      id: 3,
      title: "Voice Integration",
      description: "Hands-free operation through advanced voice recognition",
      icon: "🎤",
      color: "from-green-100 to-green-50"
    },
    // New last 3 features based on your images
    {
      id: 4,
      title: "Patient Journey",
      description: "Seamless experience from scheduling to follow-up",
      icon: "👨‍⚕️",
      color: "from-indigo-100 to-indigo-50",
      details: {
        items: [
          "Smart appointment scheduling",
          "Digital check-in process",
          "Automated visit summaries",
          "Secure patient messaging"
        ]
      }
    },
    {
      id: 5,
      title: "Clinical Dashboard",
      description: "Comprehensive practice management tools",
      icon: "📊",
      color: "from-amber-100 to-amber-50",
      details: {
        items: [
          "Real-time patient queue",
          "Treatment plan templates",
          "Performance analytics",
          "Integrated billing"
        ]
      }
    },
    {
      id: 6,
      title: "Telehealth Suite",
      description: "Complete virtual care solution",
      icon: "💻",
      color: "from-cyan-100 to-cyan-50",
      details: {
        items: [
          "Secure video consultations",
          "Remote monitoring",
          "Collaborative diagnosis",
          "Mobile access"
        ]
      }
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combining cutting-edge technology with seamless healthcare workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`relative overflow-hidden rounded-xl p-0.5 bg-gradient-to-r ${feature.color} transition-all duration-300 ${hoveredId === feature.id ? 'scale-[1.02] shadow-xl' : 'shadow-md'}`}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="bg-white h-full rounded-[11px] p-6">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>

                {feature.details && (
                  <div className={`mt-4 overflow-hidden transition-all duration-300 ${expandedId === feature.id ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="pt-2 space-y-2">
                      {feature.details.doctors ? (
                        <>
                          <div>
                            <h4 className="font-medium text-blue-600">For Doctors:</h4>
                            <ul className="mt-1 space-y-1 pl-5">
                              {feature.details.doctors.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-indigo-600">For Students:</h4>
                            <ul className="mt-1 space-y-1 pl-5">
                              {feature.details.students.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-2"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <ul className="space-y-2 pl-2">
                          {feature.details.items.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mt-2 mr-2"></span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  {feature.details ? (
                    <button
                      onClick={() => toggleExpand(feature.id)}
                      className={`text-sm font-medium flex items-center transition-colors ${hoveredId === feature.id ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
                    >
                      {expandedId === feature.id ? (
                        <>
                          <span>Collapse</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Learn more</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </>
                      )}
                    </button>
                  ) : (
                    <button className={`text-sm font-medium flex items-center ${hoveredId === feature.id ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}>
                      <span>Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;