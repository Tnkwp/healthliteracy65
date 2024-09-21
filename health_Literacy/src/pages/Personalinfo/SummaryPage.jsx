import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const formatDateToThai = (dateString) => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear() + 543; 

  return `${day}/${month}/${year}`;
};

const PersonalInfoSummary = () => {
  const { pid } = useParams(); 
  const [personalInfo, setPersonalInfo] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/personalInfo/${pid}`);
        const data = await response.json();
        setPersonalInfo(data);
      } catch (error) {
        console.error('Error fetching personalInfo:', error);
      }
    };

    fetchPersonalInfo();
  }, [pid]);

  const handleEdit = () => {
    navigate(`/personalInfo/edit/${pid}`);
  };

  if (!personalInfo) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
        {/* Header */}
        <header className="bg-[#0EB24E] border-b-2 p-2 mb-6 rounded-md">
          <h1 className="text-xl font-semibold text-white text-start">ประวัติส่วนตัว</h1>
        </header>

        {/* ข้อมูลส่วนบุคคล */}
        <section className="mb-8 ">
          <h2 className="font-bold mb-4 text-base">1. ข้อมูลส่วนบุคคล</h2>
          <div className="grid gap-y-3">
            <div className='flex'>
              <div className="flex ml-5">ชื่อ - นามสกุล : <span className="font-medium ml-4">{personalInfo.nameTitle}{personalInfo.fullName}</span></div> 
              <div className="flex ml-10">เลขที่บัตรประจำตัวประชาชน : <span className="font-medium ml-4">{personalInfo.idCard}</span></div>
            </div>
            <div className='flex'>
              <div className="flex ml-5">เพศ : <span className="font-medium ml-4">{personalInfo.gender}</span></div> 
              <div className="flex ml-20">วัน/เดือน/ปี เกิด : <span className="font-medium ml-4">{formatDateToThai(personalInfo.dob)}</span></div>
              <div className="flex ml-20">อายุ : <span className="font-medium ml-4">{personalInfo.age} ปี</span></div>
            </div>
            <div className='flex'>
              <div className="flex ml-5">สถานภาพ : <span className="font-medium ml-4">{personalInfo.maritalStatus}</span></div> 
              <div className="flex ml-20">อาชีพ : <span className="font-medium ml-4">{personalInfo.occupation}</span></div>
            </div>
            <div className='flex'>
              <div className="flex ml-5">หมู่โลหิต : <span className="font-medium ml-4">{personalInfo.bloodType}</span></div> 
              <div className="flex ml-20">น้ำหนัก : <span className="font-medium ml-4">{personalInfo.weight}</span></div>
              <div className="flex ml-20">ส่วนสูง : <span className="font-medium ml-4">{personalInfo.height}</span></div>
            </div>
          </div>
        </section>

        {/* ข้อมูลการติดต่อ */}
        <section className="mb-8">
          <h2 className="font-bold mb-4 text-base">2. ข้อมูลการติดต่อ</h2>
          <div className="grid gap-y-3">

            <div className='flex'>
              <div className="flex ml-5">เบอร์โทรศัพท์ : <span className="font-medium ml-4">{personalInfo.mobile1}</span></div> 
              <div className="flex ml-20">Facebook : <span className="font-medium ml-4">{personalInfo.facebook}</span></div>
            </div>
            <div className='flex'>
              <div className="flex ml-5">ID Line : <span className="font-medium ml-4">{personalInfo.idLine}</span></div> 
              <div className="flex ml-20">E-mail : <span className="font-medium ml-4">{personalInfo.email}</span></div>
            </div>
          </div>
        </section>

        {/* ที่อยู่ปัจจุบัน */}
        <section className="mb-8">
          <h2 className="font-bold mb-4 text-base">3. ที่อยู่ปัจจุบัน</h2>
          <div className="grid gap-y-3">

            <div className='flex'>
              <div className="flex ml-5">บ้านเลขที่ : <span className="font-medium ml-4">{personalInfo.houseNumber}</span></div> 
              <div className="flex ml-20">หมู่บ้าน : <span className="font-medium ml-4">{personalInfo.hVillage}</span></div>
              <div className="flex ml-20">หมู่ : <span className="font-medium ml-4">{personalInfo.hMoo}</span></div> 
              <div className="flex ml-10">ซอย : <span className="font-medium ml-4">{personalInfo.hAlley}</span></div>
            </div>
            <div className='flex'>
              <div className="flex ml-5">ถนน : <span className="font-medium ml-4">{personalInfo.hRoad}</span></div> 
              <div className="flex ml-20">ตำบล/แขวง : <span className="font-medium ml-4">{personalInfo.hSubDistrict}</span></div>
              <div className="flex ml-20">อำเภอ/เขต : <span className="font-medium ml-4">{personalInfo.hDistrict}</span></div>
            </div>
            <div className='flex'>
              <div className="flex ml-5">จังหวัด : <span className="font-medium ml-4">{personalInfo.hProvince}</span></div> 
              <div className="flex ml-20">รหัสไปรษณีย์ : <span className="font-medium ml-4">{personalInfo.hPostalCode}</span></div>
            </div>
          </div>
        </section>

        {/* ข้อมูลที่ทำงาน */}
        <section className="mb-8">
          <h2 className="font-bold mb-4 text-base">4. ข้อมูลที่ทำงาน</h2>
          <div className="grid gap-y-3">
            <div className='flex'>
              <div className="flex ml-5">ชื่อสถานที่ทำงาน/บริษัท : <span className="font-medium ml-4">{personalInfo.companyName}</span></div> 
            </div>
            <div className='flex'>
              <div className="flex ml-5">เลขที่ : <span className="font-medium ml-4">{personalInfo.companyNumber}</span></div> 
              <div className="flex ml-20">หมู่บ้าน : <span className="font-medium ml-4">{personalInfo.cVillage}</span></div>
              <div className="flex ml-20">หมู่ : <span className="font-medium ml-4">{personalInfo.cMoo}</span></div> 
              <div className="flex ml-10">ซอย : <span className="font-medium ml-4">{personalInfo.cAlley}</span></div>
            </div>
            <div className='flex'>
              <div className="flex ml-5">ถนน : <span className="font-medium ml-4">{personalInfo.cRoad}</span></div> 
              <div className="flex ml-20">ตำบล/แขวง : <span className="font-medium ml-4">{personalInfo.cSubDistrict}</span></div>
              <div className="flex ml-20">อำเภอ/เขต : <span className="font-medium ml-4">{personalInfo.cDistrict}</span></div>
            </div>
            <div className='flex'>
              <div className="flex ml-5">จังหวัด : <span className="font-medium ml-4">{personalInfo.cProvince}</span></div> 
              <div className="flex ml-20">รหัสไปรษณีย์ : <span className="font-medium ml-4">{personalInfo.cPostalCode}</span></div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex justify-between">
         
            <button onClick={handleEdit} className="bg-red-500 text-white px-8 py-3 rounded-lg">แก้ไข</button>
          
          <Link to="/assessment">
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg">เริ่มทำแบบประเมิน</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSummary;
