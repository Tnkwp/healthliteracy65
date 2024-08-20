import React, { useState } from 'react';
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    text: 'ท่านทบทวนข้อมูลที่ได้จากแพทย์',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 2,
    text: 'ท่านทบทวนข้อมูลที่ได้จากพยาบาล',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
 },
  {
    id: 3,
    text: 'ท่านทบทวนข้อมูลที่ได้จากเภสัชกร',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 4,
    text: 'ท่านทบทวนข้อมูลที่ได้จาก อาสาสมัครสาธารณสุข (อสม. อสส. อสค.)',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 5,
    text: 'ท่านทบทวนข้อมูลที่ได้จาก เพื่อนผู้ป่วย',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 6,
    text: 'ท่านทบทวนข้อมูลที่ได้จาก เพื่อนผู้ป่วย',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 7,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับ การทำให้สุขภาพแข็งแรง จากแพทย์',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  { 
    id: 8,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับ การทำให้สุขภาพแข็งแรง จากพยาบาล',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 9,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับ การทำให้สุขภาพแข็งแรงจากอาสาสมัครสาธารณสุข (อสม. อสส. อสค.)',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 10,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับโรค และการปฏิบัติตัวเพื่อป้องกันโรค จากแพทย์',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 11,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับโรค และการปฏิบัติตัวเพื่อป้องกันโรค จากพยาบาล',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 12,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับ โรค และการปฏิบัติตัวเพื่อ ป้องกันโรค จากอาสาสมัครสาธารณสุข (อสม. อสส. อสค.)',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 13,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับผลิตภัณฑ์สุขภาพ (เช่น ยา  อาหารเสริม เครื่องสำอาง สมุนไพร) จากแพทย์',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 14,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับ ผลิตภัณฑ์สุขภาพ (เช่น ยา  อาหารเสริม เครื่องสำอาง สมุนไพร) จากพยาบาล',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 15,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับ ผลิตภัณฑ์สุขภาพ (เช่น ยา  อาหารเสริม เครื่องสำอาง สมุนไพร) จากอาสาสมัคร สาธารณสุข (อสม. อสส. อสค.)',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],  
 },
  { 
    id: 16,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับ สิทธิ ค่าใช้จ่าย และข้อสงสัย ต่างๆ จากแพทย์',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 17,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับ สิทธิ ค่าใช้จ่าย และข้อสงสัย ต่างๆ จาก พยาบาล',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
  {
    id: 18,
    text: 'ท่านซักถามข้อมูลเกี่ยวกับ สิทธิ ค่าใช้จ่าย และข้อสงสัยต่างๆ  จาก เจ้าหน้าที่ที่โรงพยาบาล/สถานพยาบาล',
    options: ['ทุกครั้ง', 'บ่อยครั้ง', 'บางครั้ง', 'ไม่เคยทำ'],
  },
];

const HealthLiteracyQuiz3 = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="p-6 flex-grow">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link to="/quiz2"><button className="text-2xl text-green-600 mr-2">&lt;</button></Link>
            <h2 className="text-3xl font-bold flex-grow text-start text-green-600">การประเมินศักยภาพของผู้ดูแลสุขภาพ</h2>
          </div>
          <div className='mt-8 ml-7'>
            <p className="text-xl text-black mb-2">
            <strong>แบบประเมินนี้ใช้เพื่อประเมินความรอบรู้ด้านสุขภาพของคนไทย</strong>
          </p>
          <p className="text-xl text-black">
            <strong>ด้านที่ 3 การทบทวน ซักถาม</strong> ท่านทำสิ่งต่อไปนี้ บ่อยแค่ไหน?
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
            <Link to="/quiz4">
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

export default HealthLiteracyQuiz3;