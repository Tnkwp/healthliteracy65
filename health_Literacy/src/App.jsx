import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import HealthLiteracy from './pages/main';
import FindHistory from './pages/findhistory';
import Result from './pages/result';
import PersonalInfoForm from './pages/Personalinfo/PersonalInfoForm';
import EditPage from './pages/Personalinfo/PersonalEdit';
import SummaryPage from './pages/Personalinfo/SummaryPage';
import HealthAssessmentTable from './pages/Result/HealthAssessmentTable';
import Chart from './pages/Result/Chart';
import Quiz from './pages/Result/Quiz';
import HealthLiteracyResults from './pages/Result/HealthLiteracyResults';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HealthLiteracy />} />
        <Route path="findHistory" element={<FindHistory />} />
        <Route path="result" element={<Result />} />
        <Route path='edit' element={<EditPage />} />
        <Route path='summaryPage' element={<SummaryPage />} />
        <Route path='personalInfoForm' element={<PersonalInfoForm />} />
        <Route path='healthAssessmentTable' element={<HealthAssessmentTable />} />
        <Route path='chart' element={<Chart />} />
        <Route path='quiz' element={<Quiz />} />
        <Route path='healthLiteracyResults' element={<HealthLiteracyResults />} />
        
      </Routes>
    </div>
  );
}

export default App;
