import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DoctorPage from './pages/DoctorPage';
import DoctorLanding from './pages/DoctorLanding';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDetails from './pages/PatientDetails';
import MedicalImaging from './pages/MedicalImaging';
import PatientAppointment from './pages/patients/PatientAppointment';
import NewAppointment from './pages/patients/NewAppointment';
import OldAppointments from './pages/patients/OldAppointments';
import Emergency from './pages/patients/Emergency';
import { DoctorPatientAppoinment } from './pages/patients/DoctorPatientAppoinment';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Doctor section routes */}
        <Route path="/doctors" element={<DoctorPage />}>
          <Route index element={<DoctorLanding />} />
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="patient/:id" element={<PatientDetails />} />
          <Route path="medical-imaging" element={<MedicalImaging />} />
        </Route>
        

        <Route path="/patients" element={<PatientAppointment />}>
          <Route index element={<div>Select an option</div>} />
          <Route path="new" element={<NewAppointment />} />
          <Route path="old" element={<OldAppointments />} />
          <Route path="emergency" element={<Emergency />} />
        </Route>
        
        <Route path="/appoinment/:doctor/patient" element={<DoctorPatientAppoinment />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;