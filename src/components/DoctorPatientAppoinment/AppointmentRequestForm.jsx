"use client"

import { useState, useEffect } from "react"

export default function AppointmentRequestForm({ onSubmit, doctorSchedule, patientData }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    type: "regular",
    reason: "",
    notes: "",
  })

  const [availableDates, setAvailableDates] = useState([])
  const [availableTimes, setAvailableTimes] = useState([])
  const [errors, setErrors] = useState({})

  // Generate available dates (next 30 days excluding unavailable days)
  useEffect(() => {
    if (doctorSchedule) {
      const dates = []
      const today = new Date()

      // Get available days from doctor's schedule
      const availableDays = doctorSchedule.map((schedule) => schedule.Day)

      // Generate dates for the next 30 days
      for (let i = 1; i <= 30; i++) {
        const date = new Date()
        date.setDate(today.getDate() + i)

        // Check if this day of week is in doctor's schedule
        const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" })

        if (availableDays.includes(dayOfWeek)) {
          const formattedDate = date.toISOString().split("T")[0]
          dates.push({
            value: formattedDate,
            label: date.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            }),
          })
        }
      }

      setAvailableDates(dates)
    }
  }, [doctorSchedule])

  // Update available times when date changes
  useEffect(() => {
    if (formData.date && doctorSchedule) {
      const selectedDate = new Date(formData.date)
      const dayOfWeek = selectedDate.toLocaleDateString("en-US", { weekday: "long" })

      // Find the schedule for the selected day
      const daySchedule = doctorSchedule.find((schedule) => schedule.Day === dayOfWeek)

      if (daySchedule && daySchedule.Time) {
        setAvailableTimes(daySchedule.Time)
      } else {
        setAvailableTimes([])
      }
    } else {
      setAvailableTimes([])
    }
  }, [formData.date, doctorSchedule])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when field is updated
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.date) newErrors.date = "Please select a date"
    if (!formData.time) newErrors.time = "Please select a time"
    if (!formData.reason.trim()) newErrors.reason = "Please provide a reason for your visit"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    onSubmit({
      ...formData,
      patientName: patientData?.name,
      patientId: patientData?.id,
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Request an Appointment</h2>
      <p className="text-gray-600 mb-6">Please select your preferred date and time for the appointment.</p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Appointment Type */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Type*</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="regular"
                  checked={formData.type === "regular"}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2">Regular Checkup</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="followup"
                  checked={formData.type === "followup"}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2">Follow-up</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="urgent"
                  checked={formData.type === "urgent"}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2">Urgent</span>
              </label>
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date*
            </label>
            <select
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.date ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a date</option>
              {availableDates.map((date) => (
                <option key={date.value} value={date.value}>
                  {date.label}
                </option>
              ))}
            </select>
            {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
          </div>

          {/* Time Selection */}
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Time*
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              disabled={!formData.date || availableTimes.length === 0}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.time ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">
                {!formData.date
                  ? "Select a date first"
                  : availableTimes.length === 0
                    ? "No times available"
                    : "Select a time"}
              </option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && <p className="mt-1 text-sm text-red-500">{errors.time}</p>}
          </div>

          {/* Reason for Visit */}
          <div className="md:col-span-2">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Visit*
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows={3}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.reason ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Please describe your symptoms or reason for the appointment"
            ></textarea>
            {errors.reason && <p className="mt-1 text-sm text-red-500">{errors.reason}</p>}
          </div>

          {/* Additional Notes */}
          <div className="md:col-span-2">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Any additional information you'd like to share with the doctor"
            ></textarea>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Request Appointment
          </button>
        </div>
      </form>
    </div>
  )
}
