import { FaUserMd, FaHospital, FaPhone, FaEnvelope } from "react-icons/fa"

export default function DoctorInfo({ doctor }) {
  return (
    <div className="bg-purple-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-24 h-24 rounded-full bg-white p-1 mb-4 md:mb-0 md:mr-6">
            {doctor.profileImage ? (
              <img
                src={doctor.profileImage || "/placeholder.svg"}
                alt={doctor.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-purple-200 flex items-center justify-center">
                <FaUserMd className="text-purple-600 text-3xl" />
              </div>
            )}
          </div>

          <div>
            <h1 className="text-2xl font-bold">{doctor.name}</h1>
            <p className="text-purple-200">{doctor.specialization}</p>

            <div className="mt-2 flex flex-wrap gap-4">
              {doctor.hospital && (
                <div className="flex items-center">
                  <FaHospital className="mr-2" />
                  <span>{doctor.hospital}</span>
                </div>
              )}

              {doctor.phone && (
                <div className="flex items-center">
                  <FaPhone className="mr-2" />
                  <span>{doctor.phone}</span>
                </div>
              )}

              {doctor.email && (
                <div className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <span>{doctor.email}</span>
                </div>
              )}

              {doctor.yearsOfExperience && (
                <div className="flex items-center">
                  <span>{doctor.yearsOfExperience} years of experience</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
