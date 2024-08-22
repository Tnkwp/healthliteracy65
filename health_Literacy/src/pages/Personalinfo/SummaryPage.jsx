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
            <p>เพศ: <span className="font-medium">ชาย</span></p>
            <p>วัน/เดือน/ปีเกิด: <span className="font-medium">29/07/2512</span> อายุ: <span className="font-medium">55 ปี</span></p>
            <p>สถานภาพ: <span className="font-medium">สมรส</span></p>
            <p>ศาสนา: <span className="font-medium">พุทธ</span></p>
            <p>สัญชาติ: <span className="font-medium">ไทย</span></p>
            <p>เชื้อชาติ: <span className="font-medium">ไทย</span></p>
            <p>อาชีพ: <span className="font-medium">รับจ้าง</span></p>
            <p>ระดับการศึกษา: <span className="font-medium">ประถมศึกษา</span></p>
            <p>หมู่โลหิต: <span className="font-medium">O</span></p>
            <p>น้ำหนัก: <span className="font-medium">70 กิโลกรัม</span></p>
            <p>ส่วนสูง: <span className="font-medium">175 เซนติเมตร</span></p>
            <p>สิทธิการรักษาพยาบาล: <span className="font-medium">สิทธิสวัสดิการข้าราชการ</span></p>
            <p>ประกันสุขภาพ: <span className="font-medium">มี</span></p>
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

        

        {/* ข้อมูลที่ทำงาน */}
        <section className="mb-6">
          <h2 className="font-bold mb-2">5. ข้อมูลที่ทำงาน</h2>
          <div className="space-y-2">
            <p>ชื่อสถานที่ทำงาน/บริษัท: <span className="font-medium">บริษัทตัวอย่าง จำกัด</span></p>
            <p>ที่อยู่ที่ทำงาน: <span className="font-medium">123/4 อาคาร ABC ถนนตัวอย่าง ตำบลตัวอย่าง อำเภอตัวอย่าง จังหวัดตัวอย่าง 12345</span></p>
            <p>เบอร์โทรศัพท์ที่ทำงาน: <span className="font-medium">02-1234567</span></p>
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
