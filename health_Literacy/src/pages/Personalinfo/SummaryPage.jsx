import React from 'react';
import { Link } from 'react-router-dom';

const PersonalInfoSummary = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6">
        
        <header className="border-b pb-4 mb-4">
          <h1 className="text-xl font-semibold text-center">สรุปข้อมูลส่วนตัว</h1>
        </header>

        {/* ข้อมูลส่วนบุคคล */}
        <section className="mb-6">
          <h2 className="font-bold mb-2">1. ข้อมูลส่วนบุคคล</h2>
          <div className="space-y-2">
            <p>ชื่อ - นามสกุล: <span className="font-medium">นายอนุวัตร์ สวัสดิ์วงค์</span></p>
            <p>หมายเลขบัตรประจำตัวประชาชน: <span className="font-medium">1234567890234</span></p>
            <p>วัน/เดือน/ปีเกิด: <span className="font-medium">29/07/2512</span> อายุ: <span className="font-medium">55 ปี</span></p>
            <p>สถานภาพ: <span className="font-medium">สมรส</span></p>
            <p>ศาสนา: <span className="font-medium">พุทธ</span></p>
            <p>สัญชาติ: <span className="font-medium">ไทย</span></p>
            <p>เชื้อชาติ: <span className="font-medium">ไทย</span></p>
            <p>อาชีพ: <span className="font-medium">รับจ้าง</span></p>
            <p>ระดับการศึกษา: <span className="font-medium">ประถมศึกษา</span></p>
          </div>
        </section>

        {/* ข้อมูลการติดต่อ */}
        <section className="mb-6">
          <h2 className="font-bold mb-2">2. ข้อมูลการติดต่อ</h2>
          <div className="space-y-2">
            <p>เบอร์โทรศัพท์: <span className="font-medium">099-9999999</span></p>
            <p>Facebook: <span className="font-medium">Anuwat Sawatdiwong</span></p>
            <p>Line: <span className="font-medium">Anuwat Sawatdiwong</span></p>
            <p>Email: <span className="font-medium">anuwatsawatdiwong09@gmail.com</span></p>
          </div>
        </section>

        {/* ที่อยู่ปัจจุบัน */}
        <section className="mb-6">
          <h2 className="font-bold mb-2">3. ที่อยู่ปัจจุบัน</h2>
          <div className="space-y-2">
            <p>บ้านเลขที่: <span className="font-medium">165/3</span> หมู่ที่: <span className="font-medium">1</span></p>
            <p>ชื่อหมู่บ้าน: <span className="font-medium">แสนสุข</span></p>
            <p>ตำบล: <span className="font-medium">เชียงม่วน</span> อำเภอ: <span className="font-medium">เชียงม่วน</span></p>
            <p>จังหวัด: <span className="font-medium">พะเยา</span> รหัสไปรษณีย์: <span className="font-medium">56160</span></p>
          </div>
        </section>

        {/* ที่อยู่ตามทะเบียนบ้าน */}
        <section className="mb-6">
          <h2 className="font-bold mb-2">4. ที่อยู่ตามทะเบียนบ้าน</h2>
          <div className="space-y-2">
            <p>บ้านเลขที่: <span className="font-medium">121</span> หมู่ที่: <span className="font-medium">5</span></p>
            <p>ชื่อหมู่บ้าน: <span className="font-medium">สุขสันต์</span></p>
            <p>ตำบล: <span className="font-medium">สันโค้ง</span> อำเภอ: <span className="font-medium">ดอกคำใต้</span></p>
            <p>จังหวัด: <span className="font-medium">พะเยา</span> รหัสไปรษณีย์: <span className="font-medium">56140</span></p>
          </div>
        </section>

        
        <div className="flex justify-between">
          <Link to="/edit"><button className="bg-red-500 text-white px-4 py-2 rounded-lg">แก้ไข</button></Link>
          <Link to="/quiz"><button className="bg-green-500 text-white px-4 py-2 rounded-lg">เริ่มทำแบบประเมิน</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSummary;
