import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPopup = ({ onClose, onViewResult }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 text-center w-11/12 sm:w-96">
        <div className="flex justify-center mb-4">
          <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-4">บันทึกข้อมูลสำเร็จ</h2>
        <div className="flex justify-around">
          <Link to={"/"}><button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            กลับหน้าหลัก
          </button></Link>
          <Link to={"/healthLiteracyResults"}><button
            onClick={onViewResult}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            ดูผลการประเมิน
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
