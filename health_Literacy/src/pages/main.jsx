import React from 'react';
import { Link } from "react-router-dom";

const HealthLiteracy = () => {
    return (
        <div className="flex items-center justify-center p-6 bg-gray-100 min-h-screen">
            <div className="space-y-14">
                <div className="bg-white p-6 rounded-lg shadow-lg w-[48rem] h-[30rem]  flex flex-col items-center justify-center text-center">
                    <div className="flex justify-center mb-4">
                        <img src="/public/แบบประเมิน.png" alt="Assessment Icon" />
                    </div>
                    <h2 className="text-4xl font-semibold text-gray-700 mb-5">แบบประเมิน Health Literacy</h2>
                    <p className="text-2xl text-gray-600 mb-5">โปรดเลือกตอบตามความเป็นจริง และตอบให้ครบทุกข้อ</p>
                    <Link to={"/findhistory"}>
                        <button className="bg-green-500 text-white text-3xl py-2 px-4 h-[4.5rem] w-[17rem] rounded-2xl hover:bg-green-600">
                            ทำแบบประเมิน
                        </button>
                    </Link>
                </div>
                <div className="bg-green-500 p-6 rounded-lg shadow-lg w-[48rem] h-[30rem] flex flex-col items-center justify-center text-center">
                    <div className="flex justify-center mb-4">
                        <img src="/public/ผลประเมิน.png" alt="Results Icon" />
                    </div>
                    <h2 className="text-4xl font-semibold text-white mb-5">ผลการประเมิน Health Literacy</h2>
                    <p className="text-2xl text-white mb-5">คลิกเพื่อดูผลการประเมิน</p>
                    <Link to={"/result"}>
                        <button className="bg-white text-black text-3xl py-2 px-4  h-[4.5rem] w-[17rem] rounded-2xl hover:bg-gray-200">
                            ผลการประเมิน
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HealthLiteracy;
