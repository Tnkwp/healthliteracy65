import React, { useState } from 'react';

const HealthLiteracyResults = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const assessmentResults = [
    { id: 1, name: 'การเข้าถึงข้อมูล', status: 'ความรอบรู้เพียงพอ' },
    { id: 2, name: 'การเข้าใจข้อมูล', status: 'ความรอบรู้อาจไม่เพียงพอ' },
    { id: 3, name: 'การซักถามข้อมูล', status: 'ความรอบรู้เพียงพอ' },
    { id: 4, name: 'การตัดสินใจ', status: 'ความรอบรู้อาจไม่เพียงพอ' },
    { id: 5, name: 'การปฏิบัติ', status: 'ความรอบรู้ไม่เพียงพอ' },
  ];

  const areaNames = [
    'การเข้าถึงข้อมูล',
    'การเข้าใจข้อมูล',
    'การซักถามข้อมูล',
    'การตัดสินใจ',
    'การปฏิบัติ'
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-bold flex-grow">
            ผลการประเมิน Health Literacy
            <br />
            <span className="text-sm font-normal">Health Literacy Assessment Results</span>
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="font-bold text-gray-600 mb-2">ชื่อ-สกุล/Name-Surname</h3>
          <p className="text-lg mb-4">นายสุขภาพ ดีทั่วไทย</p>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-sm text-gray-600">อายุ</p>
              <p className="text-sm text-gray-600">Age</p>
              <p>35</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">เลขบัตรประชาชน</p>
              <p className="text-sm text-gray-600">ID No.</p>
              <p>12345678901234</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">ระดับความรอบรู้ด้านสุขภาพ</p>
              <p className="text-sm text-gray-600">Health Literacy Level</p>
              <p className="text-green-500">เพียงพอ</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="font-bold mb-2">ผลการประเมินทั้ง 5 ด้าน</h3>
          {assessmentResults.map((result) => (
            <div key={result.id} className="flex justify-between items-center mb-2">
              <span>{`ด้านที่ ${result.id} ${result.name}`}</span>
              <span className={`px-2 py-1 rounded-full text-sm ${
                result.status === 'ความรอบรู้เพียงพอ' ? 'bg-green-500 text-white' :
                result.status === 'ความรอบรู้อาจไม่เพียงพอ' ? 'bg-yellow-500 text-white' :
                'bg-red-500 text-white'
              }`}>
                {result.status}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-4">
          {areaNames.map((name, index) => (
            <button
              key={index + 1}
              className={`p-4 rounded-lg shadow text-center ${
                selectedArea === index + 1 ? 'bg-green-500 text-white' : 'bg-white'
              }`}
              onClick={() => setSelectedArea(index + 1)}
            >
              <img src={`/icon-${index + 1}.png`} alt="" className="w-12 h-12 mx-auto mb-2" />
              <p>{`ด้านที่ ${index + 1}`}</p>
              <p>{name}</p>
            </button>
          ))}
        </div>

        {selectedArea && (
          <div className="bg-white rounded-lg shadow p-4 mt-4">
            <h3 className="font-bold mb-2">{`ด้านที่ ${selectedArea} ${areaNames[selectedArea - 1]}`}</h3>
            <div className="flex justify-between items-center">
              <span>ผลการประเมินรายด้าน</span>
              <span className={`px-2 py-1 rounded-full text-sm ${
                assessmentResults.find(result => result.id === selectedArea).status === 'ความรอบรู้เพียงพอ' ? 'bg-green-500 text-white' :
                assessmentResults.find(result => result.id === selectedArea).status === 'ความรอบรู้อาจไม่เพียงพอ' ? 'bg-yellow-500 text-white' :
                'bg-red-500 text-white'
              }`}>
                {assessmentResults.find(result => result.id === selectedArea).status}
              </span>
            </div>
            
          </div>
        )}
      </main>
    </div>
  );
};

export default HealthLiteracyResults;