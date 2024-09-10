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
import Quiz2 from './pages/Result/Quiz2';
import Quiz3 from './pages/Result/Quiz3';
import Quiz4 from './pages/Result/Quiz4';
import Quiz5 from './pages/Result/Quiz5';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HealthLiteracy />} />
        <Route path="findHistory" element={<FindHistory />} />
        <Route path="result" element={<Result />} />
        <Route path='/personalInfo/edit/:pid' element={<EditPage />} />
        <Route path='/personalInfo/:pid' element={<SummaryPage />} />
        <Route path='personalInfoForm' element={<PersonalInfoForm />} />
        <Route path='healthAssessmentTable' element={<HealthAssessmentTable />} />
        <Route path='chart' element={<Chart />} />
        <Route path='quiz' element={<Quiz />} />
        <Route path='quiz2' element={<Quiz2 />} />
        <Route path='quiz3' element={<Quiz3 />} />
        <Route path='quiz4' element={<Quiz4 />} />
        <Route path='quiz5' element={<Quiz5 />} />
        <Route path='healthLiteracyResults' element={<HealthLiteracyResults />} />
      </Routes>
    </div>
  );
}

export default App;
