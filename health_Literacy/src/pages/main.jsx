import React from 'react';
import { Link } from "react-router-dom";

const HealthLiteracy = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            
            <div className="bg-white p-6 mb-4 rounded-lg shadow-md w-full max-w-lg text-center">
                <div className="flex justify-center mb-4">
                    <img src="https://via.placeholder.com/50" alt="Assessment Icon" />
                </div>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">แบบประเมิน Health Literacy</h2>
                <p className="text-gray-600 mb-4">โปรดเลือกตอบตามความเป็นจริง และตอบให้ครบทุกข้อ</p>
                <Link to={"/findhistory"}><button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600">
                    ทำแบบประเมิน
                </button></Link>
            </div>
            <div className="bg-green-500 p-6 rounded-lg shadow-md w-full max-w-lg text-center">
                <div className="flex justify-center mb-4">
                    <img src="https://via.placeholder.com/50" alt="Results Icon" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">ผลการประเมิน Health Literacy</h2>
                <p className="text-white mb-4">คลิกเพื่อดูผลการประเมิน</p>
                <Link to={"/result"}><button className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200">
                    ผลการประเมิน
                </button></Link>
            </div>
        </div>
    );
}

export default HealthLiteracy;
