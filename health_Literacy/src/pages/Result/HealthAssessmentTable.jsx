import React, { useState } from 'react';
import { Link } from "react-router-dom";

function HealthAssessmentTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [data, setData] = useState([
    { id: 1342269854099, name: 'นายสมคิด เรืองรอง', level: 'เพียงพอ' },
    { id: 1768904350326, name: 'นายสมศักดิ์ มารบ', level: 'ไม่เพียงพอ' },
    
  ]);

  
  const filteredData = data.filter(item => {
    const matchesSearchTerm =
      item.id.toString().includes(searchTerm) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.level.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel =
      !selectedLevel || item.level === selectedLevel;

    return matchesSearchTerm && matchesLevel;
  });

  const handleFilterChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">การประเมินผลความสามารถทางสุขภาพ หมู่ที่ 1 บ้านหลวง</h1>

      <div className="flex flex-col md:flex-row md:justify-between mb-4">
        <div className="mb-2 md:mb-0 md:w-1/2">
          <input
            type="text"
            placeholder="ค้นหา"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-80" // Adjust width here
          />
        </div>
        <div className="md:w-1/2 md:flex md:justify-end">
          <select
            id="levelFilter"
            value={selectedLevel}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto"
          >
            <option value="">ระดับความรอบรู้ทั้งหมด</option>
            <option value="เพียงพอ">ระดับความรอบรู้เพียงพอ</option>
            <option value="ไม่เพียงพอ">ระดับความรอบรู้ไม่เพียงพอ</option>
          </select>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">เลขบัตรประชาชน</th>
            <th className="px-4 py-2 text-left">ชื่อ-นามสกุล</th>
            <th className="px-4 py-2 text-left">ระดับความรอบรู้</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <tr key={item.id}>
                <td className="border px-4 py-2"><Link to={"/healthLiteracyResults"}>{item.id}</Link></td>
                <td className="border px-4 py-2"><Link to={"/healthLiteracyResults"}>{item.name}</Link></td>
                <td className="border px-4 py-2">
                  <span className={`px-2 py-1 rounded ${item.level === 'เพียงพอ' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    <Link to={"/healthLiteracyResults"}>{item.level}</Link>
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border px-4 py-2 text-center">ไม่พบข้อมูล</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HealthAssessmentTable;
