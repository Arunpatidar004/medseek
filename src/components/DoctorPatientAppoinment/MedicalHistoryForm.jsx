"use client"

import { useState } from "react"

export default function MedicalHistoryForm({ onSubmit, patientData, isNewPatient }) {
  const [formData, setFormData] = useState({
    medicalConditions: [],
    allergies: [],
    medications: [],
    pastSurgeries: [],
    familyHistory: "",
    additionalNotes: "",
  })

  const [customCondition, setCustomCondition] = useState("")
  const [customAllergy, setCustomAllergy] = useState("")
  const [customMedication, setCustomMedication] = useState("")
  const [customSurgery, setCustomSurgery] = useState("")

  // Common medical conditions
  const commonConditions = [
    "Hypertension",
    "Diabetes",
    "Asthma",
    "Heart Disease",
    "Arthritis",
    "Cancer",
    "Depression",
    "Anxiety",
  ]

  // Common allergies
  const commonAllergies = ["Penicillin", "Peanuts", "Latex", "Dust", "Pollen", "Shellfish", "Eggs", "Dairy"]

  const handleCheckboxChange = (category, value) => {
    setFormData((prev) => {
      const updated = { ...prev }

      if (updated[category].includes(value)) {
        updated[category] = updated[category].filter((item) => item !== value)
      } else {
        updated[category] = [...updated[category], value]
      }

      return updated
    })
  }

  const handleAddCustomItem = (category, value, setValue) => {
    if (value.trim()) {
      setFormData((prev) => ({
        ...prev,
        [category]: [...prev[category], value.trim()],
      }))
      setValue("")
    }
  }

  const handleRemoveItem = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== value),
    }))
  }

  const handleTextChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      patientId: patientData?.id,
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Medical History</h2>
      <p className="text-gray-600 mb-6">
        Please provide your medical history information to help us provide better care.
        {isNewPatient && " As a new patient, this information is especially important."}
      </p>

      <form onSubmit={handleSubmit}>
        {/* Medical Conditions Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Medical Conditions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            {commonConditions.map((condition) => (
              <label key={condition} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.medicalConditions.includes(condition)}
                  onChange={() => handleCheckboxChange("medicalConditions", condition)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 rounded"
                />
                <span className="ml-2 text-sm">{condition}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center mt-2">
            <input
              type="text"
              value={customCondition}
              onChange={(e) => setCustomCondition(e.target.value)}
              placeholder="Other condition"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => handleAddCustomItem("medicalConditions", customCondition, setCustomCondition)}
              className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700"
            >
              Add
            </button>
          </div>

          {formData.medicalConditions.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium mb-2">Selected conditions:</p>
              <div className="flex flex-wrap gap-2">
                {formData.medicalConditions.map((condition) => (
                  <span
                    key={condition}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                  >
                    {condition}
                    <button
                      type="button"
                      onClick={() => handleRemoveItem("medicalConditions", condition)}
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-purple-400 hover:bg-purple-200 hover:text-purple-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Allergies Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Allergies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            {commonAllergies.map((allergy) => (
              <label key={allergy} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.allergies.includes(allergy)}
                  onChange={() => handleCheckboxChange("allergies", allergy)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 rounded"
                />
                <span className="ml-2 text-sm">{allergy}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center mt-2">
            <input
              type="text"
              value={customAllergy}
              onChange={(e) => setCustomAllergy(e.target.value)}
              placeholder="Other allergy"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => handleAddCustomItem("allergies", customAllergy, setCustomAllergy)}
              className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700"
            >
              Add
            </button>
          </div>

          {formData.allergies.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium mb-2">Selected allergies:</p>
              <div className="flex flex-wrap gap-2">
                {formData.allergies.map((allergy) => (
                  <span
                    key={allergy}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
                  >
                    {allergy}
                    <button
                      type="button"
                      onClick={() => handleRemoveItem("allergies", allergy)}
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-red-400 hover:bg-red-200 hover:text-red-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Current Medications */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Current Medications</h3>
          <div className="flex items-center">
            <input
              type="text"
              value={customMedication}
              onChange={(e) => setCustomMedication(e.target.value)}
              placeholder="Medication name and dosage"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => handleAddCustomItem("medications", customMedication, setCustomMedication)}
              className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700"
            >
              Add
            </button>
          </div>

          {formData.medications.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium mb-2">Current medications:</p>
              <ul className="list-disc pl-5 space-y-1">
                {formData.medications.map((medication) => (
                  <li key={medication} className="text-sm flex items-center justify-between">
                    <span>{medication}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem("medications", medication)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Past Surgeries */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Past Surgeries or Procedures</h3>
          <div className="flex items-center">
            <input
              type="text"
              value={customSurgery}
              onChange={(e) => setCustomSurgery(e.target.value)}
              placeholder="Surgery name and year"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => handleAddCustomItem("pastSurgeries", customSurgery, setCustomSurgery)}
              className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700"
            >
              Add
            </button>
          </div>

          {formData.pastSurgeries.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium mb-2">Past surgeries:</p>
              <ul className="list-disc pl-5 space-y-1">
                {formData.pastSurgeries.map((surgery) => (
                  <li key={surgery} className="text-sm flex items-center justify-between">
                    <span>{surgery}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem("pastSurgeries", surgery)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Family History */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Family Medical History</h3>
          <textarea
            name="familyHistory"
            value={formData.familyHistory}
            onChange={handleTextChange}
            placeholder="Please describe any significant medical conditions in your immediate family (parents, siblings, children)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={3}
          ></textarea>
        </div>

        {/* Additional Notes */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Additional Information</h3>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleTextChange}
            placeholder="Any other information you would like the doctor to know"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={3}
          ></textarea>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}
