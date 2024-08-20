import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ModalPage() {
  const [formData, setFormData] = useState({
    idCard: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      

      <div className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-3xl font-bold text-[#582D00]">ตรวจสอบประวัติการทำแบบประเมิน</h1>
        <div className="mt-4 text-center text-xl">
            <p >กรอกเลขบัตรประจำตัวประชาชนและชื่อ-นามสกุล</p>
            <p>ของผู้ที่ต้องการทำแบบประเมิน</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md mt-8">
          <div className="mb-4">
            <label htmlFor="idCard" className="block text-gray-700 text-sm font-bold mb-2">เลขบัตรประจำตัวประชาชน</label>
            <input type="text" id="idCard" name="idCard" value={formData.idCard} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">ชื่อ-นามสกุล</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <Link><button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">ค้นหา</button></Link>
        </form>
      </div>
    </div>
  );
}

export default ModalPage;
