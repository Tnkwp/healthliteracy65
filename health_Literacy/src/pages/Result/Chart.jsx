import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dataSets = {
  age: {
    labels: ["18-28", "29-39", "40-50", "51-61"],
    datasets: [
      {
        label: "ระดับความพอใจมาก",
        data: [30, 45, 40, 35],
        backgroundColor: "green",
      },
      {
        label: "ระดับความพอใจปานกลาง",
        data: [20, 35, 25, 30],
        backgroundColor: "yellow",
      },
      {
        label: "ระดับความพอใจไม่พอใจ",
        data: [15, 20, 10, 20],
        backgroundColor: "red",
      },
    ],
  },
  profession: {
    labels: [
      "รับราชการ/รัฐวิสาหกิจ",
      "พนักงานบริษัท/โรงงาน",
      "พนักงานค้าขาย/ธุรกิจส่วนตัว",
      "รับจ้างทั่วไป",
    ],
    datasets: [
      {
        label: "ระดับความพอใจมาก",
        data: [35, 30, 45, 40],
        backgroundColor: "green",
      },
      {
        label: "ระดับความพอใจปานกลาง",
        data: [25, 20, 35, 25],
        backgroundColor: "yellow",
      },
      {
        label: "ระดับความพอใจไม่พอใจ",
        data: [10, 15, 20, 10],
        backgroundColor: "red",
      },
    ],
  },
  year: {
    labels: ["2564", "2565", "2566", "2567"],
    datasets: [
      {
        label: "ระดับความพอใจมาก",
        data: [40, 35, 50, 45],
        backgroundColor: "green",
      },
      {
        label: "ระดับความพอใจปานกลาง",
        data: [30, 25, 35, 30],
        backgroundColor: "yellow",
      },
      {
        label: "ระดับความพอใจไม่พอใจ",
        data: [20, 10, 15, 10],
        backgroundColor: "red",
      },
    ],
  },
};

const MyChart = () => {
  const [selectedFilter, setSelectedFilter] = useState("age");

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full h-full bg-white p-4 shadow-lg rounded-lg flex flex-col">
        {/* Headerghjkl[ukjhgf] */}
        <div className="flex justify-between items-center mb-4">
          <button className="text-lg">&lt;</button>
          <div className="text-center flex-grow text-gray-700">
            <h1 className="text-lg font-bold">การแสดงผลแบบแผนภูมิแท่ง</h1>
            <h2 className="text-sm">หมู่ที่ 1 บ้านหลวง</h2>
          </div>
          <div className="text-right">
            <button className="text-lg">&#128100;</button>
          </div>
        </div>

        
        <div className="mb-4 flex justify-center">
          <select
            className="block w-min text-center border border-gray-300 rounded-md p-2"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="age">ช่วงอายุ</option>
            <option value="profession">อาชีพ</option>
            <option value="year">พ.ศ.</option>
          </select>
        </div>

       
        <div className="flex-grow flex justify-center">
          <div className="w-full max-w-6xl">
            <Bar
              data={dataSets[selectedFilter]}
              options={{ responsive: true, plugins: { legend: { position: "bottom" } } }}
            />
          </div>
        </div>

        
        <div className="mt-4 text-center">
          <div className="flex justify-around">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 mr-2"></div>
              <span className="text-xs">ระดับความพอใจมาก</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 mr-2"></div>
              <span className="text-xs">ระดับความพอใจปานกลาง</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 mr-2"></div>
              <span className="text-xs">ระดับความพอใจไม่พอใจ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChart;
