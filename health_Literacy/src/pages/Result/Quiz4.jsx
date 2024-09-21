import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const questions = [
  {
    id: 1,
    text: 'หลังจากได้ข้อมูล เรื่องการออกกำลังกาย ทำให้ท่านตัดสินใจ ได้ว่าท่านควรออกกำลังกายอย่างไร',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 2,
    text: 'หลังจากได้ข้อมูล เรื่อง การรับประทานอาหารที่ดีต่อสุขภาพ ทำให้ท่านตัดสินใจได้ว่า ท่านควรเลือกซื้อ หรือปรุงอาหาร อย่างไร',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 3,
    text: 'หลังจากได้ข้อมูล เรื่องวิธีการคลายเครียด ทำให้ท่านตัดสินใจ ได้ว่าท่านควรทำกิจกรรมอะไร เพื่อลดความเครียด',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 4,
    text: 'หลังจากได้ข้อมูลเกี่ยวกับโรค และการรักษา ทำให้ท่าน ตัดสินใจได้ว่าท่าน ต้องจัดการตนเองอย่างไร เพื่อทำตามแผนการรักษาอย่างครบถ้วน',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 5,
    text: 'หลังจากได้ข้อมูล เรื่อง อาหารเสริม สมุนไพรทำให้ท่าน ตัดสินใจได้ว่าท่านควรเลือกใช้อย่างไร',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 6,
    text: 'หลังจากได้ข้อมูลเกี่ยวกับการใช้ยา ทำให้ท่านตัดสินใจได้ว่า ท่านจะจัดการตนเองอย่างไร เพื่อใช้ยาได้ถูกต้อง ครบถ้วน',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 7,
    text: 'หลังจากได้ข้อมูลเกี่ยวกับการเกิดเหตุฉุกเฉิน ไม่ว่าจะเป็นกรณี อุบัติเหตุ หรือเจ็บป่วย ท่านสามารถปฏิบัติตามได้อย่างมั่นใจ',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
];

const optionScores = {
  'ทำได้ง่ายมาก': 4,
  'ทำได้ง่าย': 3,
  'ทำได้ยาก': 2,
  'ทำได้ยากมาก': 1,
};

const HealthLiteracyQuiz4 = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateScore = () => {
    return Object.keys(answers).reduce((totalScore, questionId) => {
      const selectedOption = answers[questionId];
      return totalScore + (optionScores[selectedOption] || 0);
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = calculateScore();
    
    // Save score to localStorage or send it to backend
    localStorage.setItem('Decision-making score', totalScore);
    console.log('Decision-making score', totalScore);
    navigate('/quiz5')
    // Navigate to results page, passing the score
    
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="p-6 flex-grow">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link to="/quiz3">
              <button className="text-2xl text-green-600 mr-2">&lt;</button>
            </Link>
            <h2 className="text-3xl font-bold flex-grow text-start text-green-600">
              การประเมินศักยภาพของผู้ดูแลสุขภาพ
            </h2>
          </div>
          <div className='mt-8 ml-7'>
            <p className="text-xl text-black mb-2">
              <strong>แบบประเมินนี้ใช้เพื่อประเมินความรอบรู้ด้านสุขภาพของคนไทย</strong>
            </p>
            <p className="text-xl text-black">
              <strong>ด้านที่ 4 การตัดสินใจ</strong> โปรดระบุความยากง่ายในการตัดสินใจในเรื่องต่อไปนี้ (ภายใน 1 ปี) 
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="mb-4 text-lg font-medium text-gray-800">
                {question.id}. {question.text}
              </p>
              {question.options.map((option) => (
                <div key={option} className="mb-2 flex items-center">
                  <input
                    type="radio"
                    id={`${question.id}-${option}`}
                    name={`question-${question.id}`}
                    value={option}
                    onChange={() => handleAnswer(question.id, option)}
                    checked={answers[question.id] === option}
                    className="mr-3 accent-green-600"
                    aria-labelledby={`${question.id}-${option}`}
                  />
                  <label htmlFor={`${question.id}-${option}`} className="text-base text-gray-700">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-md hover:bg-green-800 transition duration-300"
            >
              ถัดไป
            </button>
          </div>
        </form>
      </main>
    </div> 
  );
};

export default HealthLiteracyQuiz4;
