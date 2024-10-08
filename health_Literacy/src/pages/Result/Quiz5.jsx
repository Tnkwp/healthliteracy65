import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import SuccessPopup from '../Components/SuccessPopup';

const HealthLiteracyQuiz5 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

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
    
    // Save score to localStorage
    localStorage.setItem('Practice score', totalScore);
    console.log('Practice score', totalScore);
    
    // Show popup after a short delay
    setTimeout(() => {
      setShowPopup(true);
    }, 500);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const viewResult = () => {
    setShowPopup(false);
    // Implement result viewing logic here
    navigate('/result-page'); // Replace with your result page route
  };

  const questions = [
  {
    id: 1,
    text: 'กินอาหาร ไม่หวาน ไม่มัน ไม่เค็ม',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 2,
    text: 'กินผักผลไม้เพิ่มขึ้น',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 3,
    text: 'กินอาหารที่ปรุงสุกใหม่',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 4,
    text: 'ใช้ช้อนกลางเมื่อรับประทานอาหารร่วมกับผู้อื่น',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 5,
    text: 'ล้างมือให้สะอาด ก่อนและหลัง กินอาหาร',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 6,
    text: 'ดื่มน้ำสะอาด 6 - 8 แก้วต่อวัน',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 7,
    text: 'กินอาหารให้ครบทั้งเนื้อสัตว์ ผัก ข้าว ผลไม้ และสับเปลี่ยน รายการอาหาร โดยไม่จำเป็น ต้องกินอาหารเสริม',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  { 
    id: 8,
    text: 'ออกแรงเพื่อเสริมสร้างความแข็งแรงให้แก่กล้ามเนื้อ วันเว้น วัน',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 9,
    text: 'นอนหลับ(สนิท) 7-8 ชั่วโมงต่อคืน',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 10,
    text: 'จัดการความเครียดของตนเองได้อย่างเหมาะสม',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 11,
    text: 'ไม่สูบบุหรี่หรือสูดดมควันบุหรี่',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 12,
    text: 'ไม่ดื่มเครื่องดื่มแอลกอฮอล์',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 13,
    text: 'แปรงฟันด้วยยาสีฟันผสมฟลูออไรด์อย่างน้อยครั้งละ 2 นาที',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 14,
    text: 'แปรงฟันวันละ 2 ครั้ง',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 15,
    text: 'งดกินอาหารหลังแปรงฟัน 2 ชั่วโมง',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  { 
    id: 16,
    text: 'อ่านและตรวจสอบข้อมูลเกี่ยวกับเครื่องสำอาง โดยดูที่มีเครื่องหมายรับรองมาตรฐาน การผลิตที่ดี (GMP)',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 17,
    text: 'อ่านและตรวจสอบข้อมูลเกี่ยวกับ อาหาร หรือผลิตภัณฑ์ลด ความอ้วน โดยดูที่มีเครื่องหมาย รับรองมาตรฐานการผลิตที่ดี (GMP)',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 18,
    text: 'อ่านและตรวจสอบข้อมูลเกี่ยวกับ อาหารเสริมสุขภาพหรือ สมุนไพร โดยดูที่มีเครื่องหมาย รับรองมาตรฐานการผลิตที่ดี (GMP)',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 19,
    text: 'ค้นคว้าตรวจสอบผลิตภัณฑ์และบริการสุขภาพ เครื่องสำอาง เครื่องมือแพทย์ วัตถุอันตราย จากแหล่งที่เชื่อถือได้ และรู้ว่าร้องเรียนได้ที่ใด',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 20,
    text: 'รักษาสิ่งแวดล้อมด้วยการลดปริมาณขยะ (ลดการใช้โฟมและพลาสติกที่ใช้แล้วทิ้ง ใช้ภาชนะที่เหมาะ กับการบรรจุอาหารแทน อาหารร้อนจัดต้องใช้วัสดุที่ เหมาะสม ใช้ถุงผ้าหรือกระเป๋าแทนถุงพลาสติก)',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 21,
    text: 'เก็บบ้านไม่ให้รก',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 22,
    text: 'เก็บขยะ',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 23,
    text: 'ปิดภาชนะเก็บน้ำให้มิดชิด',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  { 
    id: 24,
    text: 'กำจัดฝุ่นและควันในบ้าน',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 25,
    text: 'งดการเผาขยะ ลดการจุดธูป ไม่สูบบุหรี่ในบ้าน',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 26,
    text: 'ทำความสะอาดเครื่องปรับอากาศอย่างถูกวิธี',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 27,
    text: 'ปลูกต้นไม้ช่วยลดมลพิษ',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 28,
    text: 'ปรับโครงสร้างและสภาพแวดล้อมของบ้านให้เหมาะสมกับ ผู้สูงอายุ',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 29,
    text: 'ปฏิบัติตามคำแนะนำแพทย์ เภสัชกรและเฝ้าระวังหากต้องใช้ ยาปฏิชีวนะและยาที่ทำให้เสพติด (ยาแก้ปวด หรือยาแก้ไอ บางชนิด) ได้',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 30,
    text: 'ดูแลตัวเองเมื่อเจ็บป่วยเบื้องต้น ด้วยยาสมุนไพรในงาน สาธารณสุขมูลฐาน ยาสามัญประจำบ้าน ทั้งแผนปัจจุบันและ แผนโบราณ และใช้ยาเท่าที่จำเป็น',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 31,
    text: 'ใช้ถุงยางอนามัยเพื่อป้องกันการติดเชื้อเอชไอวี โรคติดต่อทาง เพศสัมพันธ์ และการตั้งครรภ์ ไม่พึงประสงค์',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  { 
    id: 32,
    text: 'ใส่หมวกนิรภัย เมื่อใช้จักรยานยนต์',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 33,
    text: 'ขับรถยนต์ไม่เกิน 60 กม.ต่อ ชม. ในพื้นที่เขตเมือง',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 34,
    text: 'คาดเข็มขัดนิรภัยเมื่อใช้รถยนต์',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  { 
    id: 35,
    text: 'ไม่ขับรถยนต์ หรือจักรยานยนต์ เมื่อง่วง เหนื่อยล้า หรือเมา',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 36,
    text: 'หากเราพบคนตกน้ำให้ช่วยด้วยวิธี “ตะโกน โยน ยื่น” และ โทร 1669 ห้ามจับอุ้มพาดบ่า/กดท้อง/ห้อยหัว เพื่อเอาน้ำออก ต้องช่วยด้วยการเป่าปากสลับกับการกดนวดหัวใจ',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 37,
    text: 'ห้ามหญิงตั้งครรภ์ดื่มเครื่องดื่มที่มีแอลกอฮอล์ เพราะอาจทำให้คลอดก่อนกำหนด ทารกตายในครรภ์ หรือเกิดมาพิการ มีพัฒนาการผิดปกติ',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 38,
    text: 'ตรวจสอบอุปกรณ์เครื่องเล่น ให้อยู่ในสภาพดีก่อนให้เด็กเล่น และดูแลให้เล่นอย่างปลอดภัย',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 39,
    text: 'ส่งเสริมให้เด็กแรกเกิด ถึง 6 ปี ทุกคน ได้รับการประเมิน พัฒนาการและฉีดวัคซีน ตามที่ควรได้รับ',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 40,
    text: 'ปฏิบัติ หรือส่งเสริมให้ผู้หญิง อายุ 20 ปีขึ้นไป สามารถตรวจ เต้านมด้วยตนเอง อย่างน้อยเดือนละ 1 ครั้ง เพื่อเฝ้าระวัง มะเร็งเต้านม',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
  {
    id: 41,
    text: 'ปฏิบัติ หรือ ส่งเสริมให้ผู้หญิง อายุ 30 - 60 ปี เข้ารับการตรวจคัดกรองมะเร็งปากมดลูก อย่างน้อย 5 ปีครั้ง ในกรณีปกติ',
    options: ['ทำได้ง่ายมาก', 'ทำได้ง่าย', 'ทำได้ยาก', 'ทำได้ยากมาก'],
  },
];

  const optionScores = {
    'ทำได้ง่ายมาก': 4,
    'ทำได้ง่าย': 3,
    'ทำได้ยาก': 2,
    'ทำได้ยากมาก': 1,
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="p-6 flex-grow">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link to="/quiz4">
              <button className="text-2xl text-green-600 mr-2">&lt;</button>
            </Link>
             <h2 className="text-3xl font-bold flex-grow text-start text-green-600">
              การประเมินศักยภาพของผู้ดูแลสุขภาพ
            </h2>
          </div>
          <div className="mt-8 ml-7">
            <p className="text-xl text-black mb-2">
              <strong>แบบประเมินนี้ใช้เพื่อประเมินความรอบรู้ด้านสุขภาพของคนไทย</strong>
            </p>
            <p className="text-xl text-black">
              <strong>ด้านที่ 5 การปฏิบัติ</strong> โดยทั่วไป ใน 1 ปี ท่านปฏิบัติในเรื่องต่อไปนี้หรือไม่ ยาก ง่ายระดับใด
            </p>
       
            <form onSubmit={handleSubmit} className="space-y-6">
              {questions.map((question) => (
                 <div key={question.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="mb-4 text-lg font-medium text-gray-800">
                {question.id}. {question.text}
              </p>
                  {question.options.map((option, index) => (
                    <div key={index} className="mb-1">
                      <label>
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
                      </label>
                    </div>
                  ))}
                </div>
              ))}
              <div className='flex justify-end'>
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">บันทึก</button>
              </div>
              
            </form>
          </div>
        </div>
      </main>
      {showPopup && (
        <SuccessPopup
          onClose={closePopup}
          onViewResult={viewResult}
        />
      )}
    </div>
  );
};

export default HealthLiteracyQuiz5;
