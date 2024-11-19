import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Doctor from './pages/Doctor';
import AuthProvider from './AuthContext';
import PatientDetail from './components/PatientDetail';
import PatientSchedule from './components/PatientSchedule';
import Login from './pages/Login';
import Medicine from './pages/Medicine';
import Nurse from './pages/Nurse';
import Patient from './pages/Patient';
import { SearchProvider } from './SearchContext';
// import Yta from './pages/Yta'
function App() {
    return (
        <AuthProvider>
            <SearchProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" index element={<Dashboard />} />
                    <Route path="/doctor" index element={<Doctor />} />
                    <Route path="/nurse" index element={<Nurse />} />
                    <Route path="/medicine" index element={<Medicine />} />
                    <Route path="/patient" index element={<Patient />} />
                    <Route path="/patient-detail" element={<PatientDetail />} />
                    <Route path="/patient-schedule" element={<PatientSchedule />} />
                </Routes>
            </SearchProvider>
        </AuthProvider>
    );
}

export default App;
