"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// Components for each section
import PatientInfoForm from "../../components/DoctorPatientAppoinment/PatientInfoForm"
import MedicalHistoryForm from "../../components/DoctorPatientAppoinment/MedicalHistoryForm"
import AppointmentRequestForm from "../../components/DoctorPatientAppoinment/AppointmentRequestForm"
import DoctorInfo from "../../components/DoctorPatientAppoinment/DoctorInfo"
import axios from "axios"

export function DoctorPatientAppoinment() {
  const { doctor } = useParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [doctorData, setDoctorData] = useState(null)
  const [patientData, setPatientData] = useState(null)
  const [isNewPatient, setIsNewPatient] = useState(false)
  const [hasMedicalHistory, setHasMedicalHistory] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch doctor information based on the doctor ID from URL
  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        setIsLoading(true)
        // Replace with your actual API endpoint
        const response = await fetch(`http://localhost:5000/api/doctors/${doctor}` )
        if (!response.ok) {
          throw new Error("Doctor not found")
        }
        const data = await response.json()
        setDoctorData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (doctor) {
      fetchDoctorData()
    }
  }, [doctor])

  // Handle patient form submission
  const handlePatientInfoSubmit = async (formData) => {
    try {
      // Check if patient exists
      const response = await fetch("http://localhost:5000/api/patients/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.exists) {
        // Patient exists
        setPatientData(data.patient)
        setHasMedicalHistory(data.hasMedicalHistory)
        // Skip medical history if patient already has records
        setCurrentStep(data.hasMedicalHistory ? 3 : 2)
      } else {
        // New patient
        setPatientData(formData)
        setIsNewPatient(true)
        setCurrentStep(2) // Go to medical history
      }
    } catch (err) {
      setError("Error checking patient information. Please try again.")
    }
  }

  // Handle medical history submission
  const handleMedicalHistorySubmit = (historyData) => {
    // In a real app, you would save this data to your backend
    setHasMedicalHistory(true)
    setCurrentStep(3) // Move to appointment section
  }

  // Handle appointment request submission
  const handleAppointmentSubmit = async (appointmentData) => {
    try {
      // Create appointment
      const appointmentPayload = {
        ...appointmentData,
        doctorId: doctor,
        patientData: patientData,
        isNewPatient: isNewPatient,
      }

      // Replace with your actual API endpoint
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentPayload),
      })

      if (!response.ok) {
        throw new Error("Failed to create appointment")
      }

      // Show success message or redirect
      alert("Appointment request submitted successfully!")
    } catch (err) {
      setError("Error submitting appointment request. Please try again.")
    }
  }

  const handleNewPatientClick = () => {
    setIsNewPatient(true)
    setPatientData(null)
    setCurrentStep(1)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with doctor info */}
      {doctorData && <DoctorInfo doctor={doctorData} />}

      <div className="container mx-auto px-4 py-8">
        {/* Progress steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? "bg-purple-600 text-white" : "bg-gray-300"}`}
            >
              1
            </div>
            <div className={`h-1 w-12 ${currentStep >= 2 ? "bg-purple-600" : "bg-gray-300"}`}></div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? "bg-purple-600 text-white" : "bg-gray-300"}`}
            >
              2
            </div>
            <div className={`h-1 w-12 ${currentStep >= 3 ? "bg-purple-600" : "bg-gray-300"}`}></div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 3 ? "bg-purple-600 text-white" : "bg-gray-300"}`}
            >
              3
            </div>
          </div>
          <div className="flex justify-center mt-2 text-sm">
            <div className="w-24 text-center">Patient Info</div>
            <div className="w-24 text-center">Medical History</div>
            <div className="w-24 text-center">Appointment</div>
          </div>
        </div>

        {/* New Patient button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleNewPatientClick}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            New Patient
          </button>
        </div>

        {/* Form sections */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {currentStep === 1 && <PatientInfoForm onSubmit={handlePatientInfoSubmit} />}

          {currentStep === 2 && (
            <MedicalHistoryForm
              onSubmit={handleMedicalHistorySubmit}
              patientData={patientData}
              isNewPatient={isNewPatient}
            />
          )}

          {currentStep === 3 && doctorData && (
            <AppointmentRequestForm
              onSubmit={handleAppointmentSubmit}
              doctorSchedule={doctorData.schedule}
              patientData={patientData}
            />
          )}
        </div>
      </div>
    </div>
  )
}
