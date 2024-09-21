import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'; 

function ModalPage() {
  const [formData, setFormData] = useState({
    idCard: '',
    name: '',
  });

  const [modal, setModal] = useState({ isOpen: false, message: '', actionLink: '', actionText: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/personalInfo/search', formData);
      
      setModal({
        isOpen: true,
        message: 'พบข้อมูลในระบบ',
        actionLink: '/quiz',  
        actionText: 'เริ่มทำแบบประเมิน'
      });
    } catch (err) {
      setModal({
        isOpen: true,
        message: 'ไม่พบข้อมูลในระบบ',
        actionLink: '/personalInfoForm',  
        actionText: 'กรอกข้อมูลส่วนตัว'
      });
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gr-100 min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow p-8">
        <div className='w-[200px] mb-9'>
          <img src="/public/logoChiangMuan.jpg" alt="Chiang Muan Logo" />
        </div>
        <h1 className="text-4xl font-bold text-[#582D00]">ตรวจสอบประวัติการทำแบบประเมิน</h1>
        <div className="mt-5 text-center text-2xl">
          <p>กรอกเลขบัตรประจำตัวประชาชนและชื่อ-นามสกุล</p>
          <p>ของผู้ที่ต้องการทำแบบประเมิน</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md mt-8">
          <div className="mb-4">
            <label htmlFor="idCard" className="block text-gray-700 text-xl font-bold mb-2">เลขบัตรประจำตัวประชาชน</label>
            <input type="text" id="idCard" name="idCard" value={formData.idCard} onChange={handleChange} className="shadow appearance-none border rounded w-full h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-xl font-bold mb-2">ชื่อ-นามสกุล</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className='flex justify-center'>
            <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ค้นหา</button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">{modal.message}</h2>
            <Link to={modal.actionLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {modal.actionText}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalPage;
