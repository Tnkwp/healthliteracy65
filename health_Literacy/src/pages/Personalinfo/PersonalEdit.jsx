import React, { useState } from 'react';
import { Link } from "react-router-dom";

function EditPage() {
  const [formData, setFormData] = useState({
    personalInfo: {
      nameTitle: 'นาย',
      firstName: 'อนุวัฒน์',
      lastName: 'สวัสดิ์วงศ์',
      idCard: '1234567890123',
      dob: '29/07/2512',
      age: 55,
      weight: 68,
      height: 171,
      maritalStatus: 'สมรส',
      occupation: 'รับจ้างทั่วไป',
      hasDisability: true,
    },
    contactInfo: {
      mobile: '089-9966999',
      facebook: 'Anuwat Sawatdiwong',
      idLine: '089-9966999',
      email: 'anuwatsawatdiwong99@gmail.com',
    },
    address: {
      current: {
        houseNumber: '165/3',
        village: 'บ้านกลาง',
        alley: '1',
        road: '',
        subDistrict: 'เชียงแสน',
        district: 'เชียงแสน',
        province: 'พะเยา',
        postalCode: '56160',
      },
      work: {
        companyName: 'สำนักงานขายกลางเชียงใหม่',
        houseNumber: '1/21',
        village: 'บ้านกลาง',
        alley: '1',
        road: '',
        subDistrict: 'เชียงแสน',
        district: 'เชียงแสน',
        province: 'พะเยา',
        postalCode: '56160',
      },
    },
  });

  const handleChange = (e, section, field) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: e.target.value,
      },
    });
  };

  const handleAddressChange = (e, type) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [type]: {
          ...formData.address[type],
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Data:', formData);
    
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-8">
        <h2 className="text-2xl font-bold text-center">แก้ไขข้อมูลส่วนตัว</h2>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold">1. ข้อมูลส่วนบุคคล</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">คำนำหน้า</label>
              <select
                value={formData.personalInfo.nameTitle}
                onChange={(e) => handleChange(e, 'personalInfo', 'nameTitle')}
                className="w-full p-2 border rounded"
              >
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">ชื่อ</label>
              <input
                type="text"
                value={formData.personalInfo.firstName}
                onChange={(e) => handleChange(e, 'personalInfo', 'firstName')}
                className="w-full p-2 border rounded"
                placeholder="ชื่อ"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">นามสกุล</label>
              <input
                type="text"
                value={formData.personalInfo.lastName}
                onChange={(e) => handleChange(e, 'personalInfo', 'lastName')}
                className="w-full p-2 border rounded"
                placeholder="นามสกุล"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">เลขที่บัตรประชาชน</label>
              <input
                type="text"
                value={formData.personalInfo.idCard}
                onChange={(e) => handleChange(e, 'personalInfo', 'idCard')}
                className="w-full p-2 border rounded"
                placeholder="เลขที่บัตรประชาชน"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">วัน/เดือน/ปีเกิด</label>
              <input
                type="text"
                value={formData.personalInfo.dob}
                onChange={(e) => handleChange(e, 'personalInfo', 'dob')}
                className="w-full p-2 border rounded"
                placeholder="วัน/เดือน/ปีเกิด"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">อายุ</label>
              <input
                type="text"
                value={formData.personalInfo.age}
                onChange={(e) => handleChange(e, 'personalInfo', 'age')}
                className="w-full p-2 border rounded"
                placeholder="อายุ"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">น้ำหนัก</label>
              <input
                type="text"
                value={formData.personalInfo.weight}
                onChange={(e) => handleChange(e, 'personalInfo', 'weight')}
                className="w-full p-2 border rounded"
                placeholder="น้ำหนัก"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">ส่วนสูง</label>
              <input
                type="text"
                value={formData.personalInfo.height}
                onChange={(e) => handleChange(e, 'personalInfo', 'height')}
                className="w-full p-2 border rounded"
                placeholder="ส่วนสูง"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold">2. ข้อมูลติดต่อ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">เบอร์โทรศัพท์มือถือ</label>
              <input
                type="text"
                value={formData.contactInfo.mobile}
                onChange={(e) => handleChange(e, 'contactInfo', 'mobile')}
                className="w-full p-2 border rounded"
                placeholder="เบอร์โทรศัพท์มือถือ"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Facebook</label>
              <input
                type="text"
                value={formData.contactInfo.facebook}
                onChange={(e) => handleChange(e, 'contactInfo', 'facebook')}
                className="w-full p-2 border rounded"
                placeholder="Facebook"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">ID Line</label>
              <input
                type="text"
                value={formData.contactInfo.idLine}
                onChange={(e) => handleChange(e, 'contactInfo', 'idLine')}
                className="w-full p-2 border rounded"
                placeholder="ID Line"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">E-mail</label>
              <input
                type="email"
                value={formData.contactInfo.email}
                onChange={(e) => handleChange(e, 'contactInfo', 'email')}
                className="w-full p-2 border rounded"
                placeholder="E-mail"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold">3. ที่อยู่ปัจจุบัน</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">บ้านเลขที่</label>
              <input
                type="text"
                name="houseNumber"
                value={formData.address.current.houseNumber}
                onChange={(e) => handleAddressChange(e, 'current')}
                className="w-full p-2 border rounded"
                placeholder="บ้านเลขที่"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">หมู่บ้าน</label>
              <input
                type="text"
                name="village"
                value={formData.address.current.village}
                onChange={(e) => handleAddressChange(e, 'current')}
                className="w-full p-2 border rounded"
                placeholder="หมู่บ้าน"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">ซอย</label>
              <input
                type="text"
                name="alley"
                              value={formData.address.current.alley}
              onChange={(e) => handleAddressChange(e, 'current')}
              className="w-full p-2 border rounded"
              placeholder="ซอย"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ถนน</label>
            <input
              type="text"
              name="road"
              value={formData.address.current.road}
              onChange={(e) => handleAddressChange(e, 'current')}
              className="w-full p-2 border rounded"
              placeholder="ถนน"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ตำบล/แขวง</label>
            <input
              type="text"
              name="subDistrict"
              value={formData.address.current.subDistrict}
              onChange={(e) => handleAddressChange(e, 'current')}
              className="w-full p-2 border rounded"
              placeholder="ตำบล/แขวง"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">อำเภอ/เขต</label>
            <input
              type="text"
              name="district"
              value={formData.address.current.district}
              onChange={(e) => handleAddressChange(e, 'current')}
              className="w-full p-2 border rounded"
              placeholder="อำเภอ/เขต"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">จังหวัด</label>
            <input
              type="text"
              name="province"
              value={formData.address.current.province}
              onChange={(e) => handleAddressChange(e, 'current')}
              className="w-full p-2 border rounded"
              placeholder="จังหวัด"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">รหัสไปรษณีย์</label>
            <input
              type="text"
              name="postalCode"
              value={formData.address.current.postalCode}
              onChange={(e) => handleAddressChange(e, 'current')}
              className="w-full p-2 border rounded"
              placeholder="รหัสไปรษณีย์"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">4. สถานที่ทำงาน</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">ชื่อสถานที่ทำงาน/บริษัท</label>
            <input
              type="text"
              name="companyName"
              value={formData.address.work.companyName}
              onChange={(e) => handleAddressChange(e, 'work')}
              className="w-full p-2 border rounded"
              placeholder="ชื่อสถานที่ทำงาน/บริษัท"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">บ้านเลขที่</label>
            <input
              type="text"
              name="houseNumber"
              value={formData.address.work.houseNumber}
              onChange={(e) => handleAddressChange(e, 'work')}
              className="w-full p-2 border rounded"
              placeholder="บ้านเลขที่"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">หมู่บ้าน</label>
            <input
              type="text"
              name="village"
              value={formData.address.work.village}
              onChange={(e) => handleAddressChange(e, 'work')}
              className="w-full p-2 border rounded"
              placeholder="หมู่บ้าน"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ซอย</label>
            <input
              type="text"
              name="alley"
              value={formData.address.work.alley}
              onChange={(e) => handleAddressChange(e, 'work')}
              className="w-full p-2 border rounded"
              placeholder="ซอย"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ถนน</label>
            <input
              type="text"
              name="road"
              value={formData.address.work.road}
              onChange={(e) => handleAddressChange(e, 'work')}
              className="w-full p-2 border rounded"
              placeholder="ถนน"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ตำบล/แขวง</label>
            <input
              type="text"
              name="subDistrict"
              value={formData.address.work.subDistrict}
              onChange={(e) => handleAddressChange(e, 'work')}
              className="w-full p-2 border rounded"
              placeholder="ตำบล/แขวง"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">อำเภอ/เขต</label>
            <input
              type="text"
              name="district"
              value={formData.address.work.district}
              onChange={(e) => handleAddressChange(e, 'work')}
              className="w-full p-2 border rounded"
              placeholder="อำเภอ/เขต"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">จังหวัด</label>
            <input
              type="text"
              name="province"
              value={formData.address.work.province}
              onChange={(e) => handleAddressChange(e, 'work')}
              className="w-full p-2 border rounded"
              placeholder="จังหวัด"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">รหัสไปรษณีย์</label>
            <input
              type="text"
              name="postalCode"
              value={formData.address.work.postalCode}
              onChange={(e) => handleAddressChange(e, 'work')}
              className="w-full p-2 border rounded"
              placeholder="รหัสไปรษณีย์"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-end space-x-4 mt-6">
        <Link to="/summaryPage">
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-lg"
        >
          บันทึกข้อมูล
        </button></Link>
      </div>
    </form>
  </div>
  );
}

export default EditPage;

