import React from 'react';
import { Link } from "react-router-dom";

function ResultScreen() {
  return (
    <div className="bg-gray-100">
      

      
      <div className="flex flex-col p-10 mt-20 text-center ">
        <div className="bg-green-500 p-4 rounded-lg mb-4 text-white h-[20rem] ">
            <div className="flex justify-center mb-4 mt-12 w-[4rem]  mx-auto">
                    <img src="/public/ผลประเมิน.png" alt="/" />
            </div>
            <div className="text-3xl font-bold">
                <h2>ผลการประเมิน Health Literacy</h2>
                <p>การแสดงผลแบบแผนที่</p>
            </div>
                <p className='text-xl'>คลิกเพื่อดูผลการประเมิน</p>
        </div>
        <Link to={"/healthAssessmentTable"} ><div className="bg-yellow-500 p-4 rounded-lg mb-4 text-white h-[20rem]">
            <div className="flex justify-center mb-4 mt-12 w-[4rem] mx-auto">
                    <img src="/public/ผลประเมิน.png" alt="/" />
            </div>
            <div className="text-3xl font-bold ">
                <h2>ผลการประเมิน Health Literacy</h2>
                <p>การแสดงผลแบบตาราง</p>
            </div>
          <p className='text-xl'>คลิกเพื่อดูผลการประเมิน</p>
        </div></Link>
        <Link to={"/chart"}><div className="bg-red-500 p-4 rounded-lg text-white h-[20rem]">
            <div className="flex justify-center mb-4 mt-12 w-[4rem] mx-auto">
                    <img src="/public/ผลประเมิน.png" alt="/" />
            </div>
            <div className="text-3xl font-bold ">
                <h2>ผลการประเมิน Health Literacy</h2>
                <p>การแสดงผลแบบแผนภูมิแท่ง</p>
            </div>
          <p className='text-xl'>คลิกเพื่อดูผลการประเมิน</p>
        </div></Link>
      </div>
    </div>
  );
}

export default ResultScreen;