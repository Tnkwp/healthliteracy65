import React, { useState } from 'react';
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    text: 'เข้าใจเกี่ยวกับสิ่งที่หมอได้พูดกับท่าน',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 2,
    text: 'เข้าใจเกี่ยวกับสิ่งที่พยาบาลได้พูดกับท่าน',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 3,
    text: 'เข้าใจเกี่ยวกับสิ่งที่อาสาสมัครสาธารณสุข (อสม./อสส./ อสค.) ได้พูดกับท่าน',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 4,
    text: 'เข้าใจเกี่ยวกับเรื่องที่เพื่อน หรือเพื่อนผู้ป่วยได้พูดกับคุณ',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 5,
    text: 'เข้าใจกับเอกสารที่ได้มากับยาที่ซื้อเอง หรือที่ได้รับจากโรงพยาบาล',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 6,
    text: 'เข้าใจข้อมูลจากสื่อสาธารณะ (โทรทัศน์ วิทยุ) สื่อออนไลน์ (เช่น ไลน์ เฟสบุค อินสตาแกรม) หรือป้ายประกาศว่าจะต้อง ทำอะไรบ้างเมื่อประสบกรณีฉุกเฉินทางการแพทย์',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 7,
    text: 'เข้าใจคำแนะนำของแพทย์หรือเภสัชกรเรื่องวิธีการใช้ยา ที่แพทย์กำหนด',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  { 
    id: 8,
    text: 'เข้าใจว่าเพราะเหตุใด คุณถึงควรได้รับการตรวจคัดกรองสุขภาพ',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 9,
    text: 'เข้าใจว่าเพราะเหตุใดคุณถึงจำเป็นต้องได้รับวัคซีน',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 10,
    text: 'เข้าใจคำเตือนเกี่ยวกับพฤติกรรมสุขภาพว่าสำคัญและจำเป็นอย่างไร เช่น การมีกิจกรรมทางกายคำเตือนไม่สูบบุหรี่ หรือ การดื่มแอลกอฮอล์ที่มากเกินไป',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 11,
    text: 'เข้าใจข้อมูลเกี่ยวกับวิธีการที่จะทำให้สุขภาพจิตดี',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 12,
    text: 'เข้าใจฉลากยา เครื่องสำอาง อาหารเสริม สมุนไพรเครื่องมือแพทย์ วัตถุอันตราย',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
  {
    id: 13,
    text: 'เข้าใจบริการสุขภาพที่ออกมาใหม่ๆ เช่น กำไลปรับสมดุล การผ่าตัดเทคนิคใหม่ๆ',
    options: ['เข้าใจง่ายมาก', 'เข้าใจง่าย', 'เข้าใจยาก', 'เข้าใจยากมาก'],
  },
];

const HealthLiteracyQuiz2 = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="p-6 flex-grow">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link to="/quiz"><button className="text-2xl text-green-600 mr-2">&lt;</button></Link>
            <h2 className="text-3xl font-bold flex-grow text-start text-green-600">การประเมินศักยภาพของผู้ดูแลสุขภาพ</h2>
          </div>
          <div className='mt-8 ml-7'>
            <p className="text-xl text-black mb-2">
            <strong>แบบประเมินนี้ใช้เพื่อประเมินความรอบรู้ด้านสุขภาพของคนไทย</strong>
          </p>
          <p className="text-xl text-black">
            <strong>ด้านที่ 2 </strong> การเข้าใจข้อมูล ท่านมีความเข้าใจในสิ่งต่อไปนี้ระดับใด
          </p>
          </div>
        </div>
        <form>
          {questions.map((question) => (
            <div key={question.id} className="mb-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="mb-4 text-lg font-medium text-gray-800">{question.id}. {question.text}</p>
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
                  />
                  <label htmlFor={`${question.id}-${option}`} className="text-base text-gray-700">{option}</label>
                </div>
              ))}
            </div>
          ))}
          <div className="flex justify-end">
            <Link to="/quiz3">
              <button type="submit" className="bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-md hover:bg-green-800 transition duration-300">
              ถัดไป
              </button>
            </Link>
          </div>
        </form>
      </main>
    </div> 
  );
};

export default HealthLiteracyQuiz2;