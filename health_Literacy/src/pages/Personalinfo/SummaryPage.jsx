import React from 'react';
import { Link } from 'react-router-dom';

const PersonalInfoSummary = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">

        {/* Header */}
        <header className="bg-green-500 border-b-2 p-2 mb-6 rounded-md">
          <h1 className="text-xl font-semibol text-white text-start ">ประวัติส่วนตัว</h1>
        </header>

        {/* ข้อมูลส่วนบุคคล */}
        <section className="mb-8">
          <h2 className="font-bold mb-4 text-base">1. ข้อมูลส่วนบุคคล</h2>
          <div className="grid grid-cols-2 gap-y-3 gap-x-6">
            <p className="col-span-2">ชื่อ - นามสกุล: <span className="font-medium">นายอนุวัตร์ สวัสดิ์วงค์</span></p>
            <p className="col-span-2">หมายเลขบัตรประจำตัวประชาชน: <span className="font-medium">1234567890234</span></p>
            <p>เพศ: <span className="font-medium">ชาย</span></p>
            <p>วัน/เดือน/ปีเกิด: <span className="font-medium">29/07/2512</span></p>
            <p>อายุ: <span className="font-medium">55 ปี</span></p>
            <p>สถานภาพ: <span className="font-medium">สมรส</span></p>
            <p>อาชีพ: <span className="font-medium">รับจ้าง</span></p>
            <p>หมู่โลหิต: <span className="font-medium">O</span></p>
            <p>น้ำหนัก: <span className="font-medium">70 กิโลกรัม</span></p>
            <p>ส่วนสูง: <span className="font-medium">175 เซนติเมตร</span></p>
            <p className="col-span-2">สิทธิการรักษาพยาบาล: <span className="font-medium">สิทธิสวัสดิการข้าราชการ</span></p>
            <p className="col-span-2">ประกันสุขภาพ: <span className="font-medium">มี</span></p>
          </div>
        </section>

        {/* ข้อมูลการติดต่อ */}
        <section className="mb-8">
          <h2 className="font-bold mb-4 text-base">2. ข้อมูลการติดต่อ</h2>
          <div className="grid grid-cols-2 gap-y-3 gap-x-6">
            <p>เบอร์โทรศัพท์: <span className="font-medium">099-9999999</span></p>
            <p>Facebook: <span className="font-medium">Anuwat Sawatdiwong</span></p>
            <p>ID Line: <span className="font-medium">Anuwat Sawatdiwong</span></p>
            <p className="col-span-2">E-mail: <span className="font-medium">anuwatsawatdiwong09@gmail.com</span></p>
          </div>
        </section>

        {/* ที่อยู่ปัจจุบัน */}
        <section className="mb-8">
          <h2 className="font-bold mb-4 text-base">3. ที่อยู่ปัจจุบัน</h2>
          <div className="grid grid-cols-2 gap-y-3 gap-x-6">
            <p>บ้านเลขที่: <span className="font-medium">165/3</span></p>
            <p>หมู่บ้าน: <span className="font-medium">แสนสุข</span></p>
            <p>หมู่: <span className="font-medium">1</span></p>
            <p>ซอย: <span className="font-medium"></span></p>
            <p>ถนน: <span className="font-medium"></span></p>
            <p>ตำบล/แขวง: <span className="font-medium">เชียงม่วน</span></p>
            <p>อำเภอ/เขต: <span className="font-medium">เชียงม่วน</span></p>
            <p>จังหวัด: <span className="font-medium">พะเยา</span></p>
            <p>รหัสไปรษณีย์: <span className="font-medium">56160</span></p>
          </div>
        </section>

        {/* ข้อมูลที่ทำงาน */}
        <section className="mb-8">
          <h2 className="font-bold mb-4 text-base">4. ข้อมูลที่ทำงาน</h2>
          <div className="grid grid-cols-2 gap-y-3 gap-x-6">
            <p className="col-span-2">ชื่อสถานที่ทำงาน/บริษัท: <span className="font-medium">บริษัทตัวอย่าง จำกัด</span></p>
            <p className="col-span-2">เลขที่ทำงาน: <span className="font-medium">123/4 </span></p>
            <p>หมู่บ้าน: <span className="font-medium">แสนสุข</span></p>
            <p>หมู่: <span className="font-medium">1</span></p>
            <p>ซอย: <span className="font-medium"></span></p>
            <p>ถนน: <span className="font-medium"></span></p>
            <p>ตำบล/แขวง: <span className="font-medium">เชียงม่วน</span></p>
            <p>อำเภอ/เขต: <span className="font-medium">เชียงม่วน</span></p>
            <p>จังหวัด: <span className="font-medium">พะเยา</span></p>
            <p>รหัสไปรษณีย์: <span className="font-medium">56160</span></p>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex justify-between">
          <Link to="/edit">
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg">แก้ไข</button>
          </Link>
          <Link to="/quiz">
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg">เริ่มทำแบบประเมิน</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSummary;