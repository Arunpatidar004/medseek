import React from 'react';

import DoctorNavbar from '../components/doctors/DoctorNavbar';
import StatsCards from '../components/doctors/Dashboard/StatsCards';
import Appointments from '../components/doctors/Dashboard/Appointments';
import TodaySchedule from '../components/doctors/Dashboard/TodaySchedule';
import QuickActions from '../components/doctors/Dashboard/QuickActions';
import AIInsights from '../components/doctors/Dashboard/AIInsights';
console.log("COMPONENT TYPES:");
console.log({
  DoctorNavbar: DoctorNavbar?.name || "NOT A COMPONENT",
  StatsCards: StatsCards?.name || "NOT A COMPONENT", 
  Appointments: Appointments?.name || "NOT A COMPONENT",
  TodaySchedule: TodaySchedule?.name || "NOT A COMPONENT",
  QuickActions: QuickActions?.name || "NOT A COMPONENT",
  AIInsights: AIInsights?.name || "NOT A COMPONENT"
});
const DoctorDashboard = () => {

  const components = {
    DoctorNavbar,
    StatsCards,
    Appointments,
    TodaySchedule,
    QuickActions,
    AIInsights
  };

  // Log for debugging
  console.log('Loaded components:', components);

  return (
    <div className="min-h-screen bg-gray-50">
      {DoctorNavbar ? <DoctorNavbar /> : <div>Navbar Loading...</div>}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Medical Dashboard</h1>
        <p className="text-xl text-gray-600 mb-8">Welcome back, Dr. Chen</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {StatsCards ? <StatsCards /> : <div>Stats Cards Loading...</div>}
            {Appointments ? <Appointments /> : <div>Appointments Loading...</div>}
          </div>
          
          <div className="space-y-6">
            {TodaySchedule ? <TodaySchedule /> : <div>Schedule Loading...</div>}
            {QuickActions ? <QuickActions /> : <div>Quick Actions Loading...</div>}
            {AIInsights ? <AIInsights /> : <div>AI Insights Loading...</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;