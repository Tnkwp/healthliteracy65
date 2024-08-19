import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    text: 'ท่านสามารถค้นหาข้อมูลว่าจะต้องทำอะไรเมื่อประสบกรณีฉุกเฉินทางการแพทย์ เช่น พบคนตกน้ำ พบคนหมดสติ',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 2,
    text: 'ท่านสามารถค้นหาข้อมูลเกี่ยวกับอาการ หรือความเจ็บป่วยที่ต้องรีบไปโรงพยาบาล',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 3,
    text: 'ท่านสามารถค้นหาข้อมูลเกี่ยวกับการตรวจเช็คสุขภาพเบื้องต้น หรือการฉีดวัคซีนที่ควรได้รับ',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 4,
    text: 'ท่านสามารถค้นหาข้อมูลเกี่ยวกับการป้องกันตนเองจากโรคติดต่อต่างๆ เช่น ไข้หวัดใหญ่ ท้องร่วง',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 5,
    text: 'ท่านสามารถหาข้อมูลเกี่ยวกับวิธีการทำให้สุขภาพแข็งแรง เช่น การออกกำลังกาย การกินอาหารที่เหมาะสม',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 6,
    text: 'ท่านสามารถค้นหาข้อมูลเกี่ยวกับวิธีการจัดการความเครียดที่เหมาะสม',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 7,
    text: 'ท่านสามารถค้นหาข้อมูลที่เชื่อถือได้เกี่ยวกับยา เครื่องสำอาง สมุนไพร อาหารเสริม',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  { 
    id: 8,
    text: 'ท่านสามารถค้นหาข้อมูลที่เชื่อถือได้เกี่ยวกับการบริการเครื่องมือที่เกี่ยวข้องกับสุขภาพที่ออกมาใหม่ๆ (เช่น การผ่าตัดเทคนิคใหม่ๆ เครื่องวัดความดัน สายรัดข้อมืออัจฉริยะ)',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
];

const HealthLiteracyQuiz = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="p-6 flex-grow">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <button className="text-2xl text-green-600 mr-2">&lt;</button>
            <h2 className="text-3xl font-bold flex-grow text-start text-green-600">การประเมินศักยภาพของผู้ดูแลสุขภาพ</h2>
          </div>
          <div className='mt-8 ml-7'>
            <p className="text-xl text-black mb-2">
            <strong>แบบประเมินนี้ใช้เพื่อประเมินความรอบรู้ด้านสุขภาพของคนไทย</strong>
          </p>
          <p className="text-xl text-black">
            <strong>ด้านที่ 1 การเข้าถึงข้อมูล</strong>  ใน 1 ปีที่ผ่านมา จากข้อความด้านล่าง ท่านตอบได้ว่า......
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
            <button type="submit" className="bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-md hover:bg-green-800 transition duration-300">
              ถัดไป
            </button>
          </div>
        </form>
      </main>
    </div> 
  );
};

export default HealthLiteracyQuiz;
