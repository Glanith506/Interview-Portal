import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import AptitudeDashboard from "./pages/Aptitude/AptitudeDashboard";
import CodingDashboard from "./pages/Coding/CodingDashboard";
import GeneralDashboard from "./pages/General/GeneralDashboard";

import Instruction from "./pages/Shared/Instruction";
import ResultPage from "./pages/Results/ResultPage";
import Profile from "./pages/Profile/Profile";

import QuizPageAptitude from "./pages/Shared/QuizPageAptitude";
import QuizPageCoding from "./pages/Shared/QuizPageCoding";
import QuizPageGeneral from "./pages/Shared/QuizPageGeneral";

// ✅ Resume module
import ResumePage from "./pages/Resume/ResumePage";
import ResumeForm from "./pages/Resume/ResumeForm";
import ResumeForm2 from "./pages/Resume/Template2/ResumeForm2";
import ResumePreview from "./pages/Resume/ResumePreview"; // Template1 preview
import ResumePreview2 from "./pages/Resume/Template2/ResumePreview2"; // Template2 preview

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/auth" />;
};

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<Auth />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

        {/* Aptitude */}
        <Route path="/aptitude" element={<PrivateRoute><AptitudeDashboard /></PrivateRoute>} />
        <Route path="/aptitude/instruction/:topic" element={<PrivateRoute><Instruction module="aptitude" /></PrivateRoute>} />
        <Route path="/aptitude/quiz/:topic" element={<PrivateRoute><QuizPageAptitude /></PrivateRoute>} />
        <Route path="/aptitude/result/:topic" element={<PrivateRoute><ResultPage module="aptitude" /></PrivateRoute>} />

        {/* Coding */}
        <Route path="/coding" element={<PrivateRoute><CodingDashboard /></PrivateRoute>} />
        <Route path="/coding/instruction/:level" element={<PrivateRoute><Instruction module="coding" /></PrivateRoute>} />
        <Route path="/coding/quiz/:level" element={<PrivateRoute><QuizPageCoding /></PrivateRoute>} />
        <Route path="/coding/result/:level" element={<PrivateRoute><ResultPage module="coding" /></PrivateRoute>} />

        {/* General */}
        <Route path="/general" element={<PrivateRoute><GeneralDashboard /></PrivateRoute>} />
        <Route path="/general/instruction/:topic" element={<PrivateRoute><Instruction module="general" /></PrivateRoute>} />
        <Route path="/general/quiz/:topic" element={<PrivateRoute><QuizPageGeneral /></PrivateRoute>} />
        <Route path="/general/result/:topic" element={<PrivateRoute><ResultPage module="general" /></PrivateRoute>} />

        {/* Resume */}
        <Route path="/resume" element={<PrivateRoute><ResumePage /></PrivateRoute>} />
        <Route path="/resume/form/1" element={<PrivateRoute><ResumeForm /></PrivateRoute>} />
        <Route path="/resume/form/2" element={<PrivateRoute><ResumeForm2 /></PrivateRoute>} />

        {/* Preview Routes */}
        <Route path="/resume/preview/1" element={<PrivateRoute><ResumePreview /></PrivateRoute>} />
        <Route path="/resume/preview/2" element={<PrivateRoute><ResumePreview2 /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}
