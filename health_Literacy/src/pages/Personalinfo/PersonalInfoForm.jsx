import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PersonalInfoForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personalInfo: {
      nameTitle: '',
      fullName: '',
      idCard: '',
      dob: '',
      age: '',
      gender: '',
      maritalStatus: '',
      occupation: [],
      bloodType: '',
      weight: '',
      height: '',
      medicalTreatmentRights: [],
      insurance: '',
    },
    contactInfo: {
      mobile1: '',
      mobile2: '',
      facebook: '',
      idLine: '',
      email: '',
    },
    address: {
      current: {
        houseNumber: '',
        village: '',
        alley: '',
        moo: '',
        road: '',
        subDistrict: '',
        district: '',
        province: '',
        postalCode: '',
      },
      company: {
        companyName: '',
        companyNumber: '',
        village: '',
        moo: '',
        alley: '',
        road: '',
        subDistrict: '',
        district: '',
        province: '',
        postalCode: '',
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

  const handleRadioChange = (e, section, field) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: e.target.value,
      },
    });
  };

  const handleCheckboxChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    personalInfo: {
      ...prevState.personalInfo,
      medicalTreatmentRights: checked
        ? [...prevState.personalInfo.medicalTreatmentRights, value]
        : prevState.personalInfo.medicalTreatmentRights.filter((item) => item !== value),
    },
  }));
};

  const handleCheckboxChangeOccupation = (e) => {
  const { value, checked } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    personalInfo: {
      ...prevState.personalInfo,
      occupation: checked
        ? [...prevState.personalInfo.occupation, value]
        : prevState.personalInfo.occupation.filter((item) => item !== value),
    },
  }));
};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Data:', formData);
    navigate('/summaryPage');
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-8">
        <header className="bg-green-500 border-b-2 p-2 mb-6 rounded-md">
          <h1 className="text-xl font-semibol text-white text-start ">กรอกประวัติส่วนตัว</h1>
        </header>

        {/* ข้อมูลส่วนบุคคล */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">1. ข้อมูลส่วนบุคคล</h3>
          <div className="space-y-4">

            {/* ชื่อ-นามสกุล */}
            <div className='flex items-center '>
              <label className="block text-sm font-medium mr-2">ชื่อ - นามสกุล</label>
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id="นาย"
                  name="nameTitle"
                  value="นาย"
                  checked={formData.personalInfo.nameTitle === 'นาย'}
                  onChange={(e) => handleRadioChange(e, 'personalInfo', 'nameTitle')}
                />
                <label htmlFor="นาย">นาย</label>
                <input
                  type="radio"
                  id="นาง"
                  name="nameTitle"
                  value="นาง"
                  checked={formData.personalInfo.nameTitle === 'นาง'}
                  onChange={(e) => handleRadioChange(e, 'personalInfo', 'nameTitle')}
                />
                <label htmlFor="นาง">นาง</label>
                <input
                  type="radio"
                  id="นางสาว"
                  name="nameTitle"
                  value="นางสาว"
                  checked={formData.personalInfo.nameTitle === 'นางสาว'}
                  onChange={(e) => handleRadioChange(e, 'personalInfo', 'nameTitle')}
                />
                <label htmlFor="นางสาว">นางสาว</label>
                <input
                  type="text"
                  value={formData.personalInfo.fullName}
                  onChange={(e) => handleChange(e, 'personalInfo', 'fullName')}
                  className="p-2 border rounded"
                  placeholder="ชื่อ-นามสกุล"
                />
              </div>
            </div>

            {/* เลขบัตรประจำตัวประชาชน */}
            <div>
              <label className="block text-sm font-medium">เลขที่บัตรประชาชน</label>
              <input
                type="text"
                value={formData.personalInfo.idCard}
                onChange={(e) => handleChange(e, 'personalInfo', 'idCard')}
                className="p-2 border rounded"
                placeholder="เลขที่บัตรประชาชน"
              />
            </div>

            {/* เพศ */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">เพศ</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="ชาย"
                checked={formData.personalInfo.gender === 'ชาย'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'gender')}
              />
              <label htmlFor="male">ชาย</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="หญิง"
                checked={formData.personalInfo.gender === 'หญิง'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'gender')}
              />
              <label htmlFor="female">หญิง</label>
            </div>
            <div>
              <label className="block text-sm font-medium">วัน/เดือน/ปีเกิด</label>
              <input
                type="date"
                value={formData.personalInfo.dob}
                onChange={(e) => handleChange(e, 'personalInfo', 'dob')}
                className="p-2 border rounded"
              />
            </div>

            {/* อายุ */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">อายุ</label>
              <input
                type="text"
                value={formData.personalInfo.age}
                onChange={(e) => handleChange(e, 'personalInfo', 'age')}
                className="p-2 border rounded"
                placeholder="อายุ"
              />
              <span>ปี</span>
            </div>

            {/* น้ำหนัก */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">น้ำหนัก</label>
              <input
                type="text"
                value={formData.personalInfo.weight}
                onChange={(e) => handleChange(e, 'personalInfo', 'weight')}
                className="p-2 border rounded"
                placeholder="น้ำหนัก"
              />
              <span>กิโลกรัม</span>
            </div>

            {/* ส่วนสูง */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">ส่วนสูง</label>
              <input
                type="text"
                value={formData.personalInfo.height}
                onChange={(e) => handleChange(e, 'personalInfo', 'height')}
                className="p-2 border rounded"
                placeholder="ส่วนสูง"
              />
              <span>เซนติเมตร</span>
            </div>

            {/* สถานะภาพ */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">สถานะภาพ</label>
              <input
                type="radio"
                id="single"
                name="maritalStatus"
                value="โสด"
                checked={formData.personalInfo.maritalStatus === 'โสด'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'maritalStatus')}
              />
              <label htmlFor="single">โสด</label>
              <input
                type="radio"
                id="married"
                name="maritalStatus"
                value="สมรส"
                checked={formData.personalInfo.maritalStatus === 'สมรส'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'maritalStatus')}
              />
              <label htmlFor="married">สมรส</label>
              <input
                type="radio"
                id="divorced"
                name="maritalStatus"
                value="หย่าร้าง/หม้าย/แยกกันอยู่"
                checked={formData.personalInfo.maritalStatus === 'หย่าร้าง/หม้าย/แยกกันอยู่'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'maritalStatus')}
              />
              <label htmlFor="divorced">หย่าร้าง/หม้าย/แยกกันอยู่</label>
            </div>

            {/* อาชีพ */}
            <div className="space-y-4">
  <label className="text-sm font-medium mb-2">อาชีพ</label>
  
  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
    <div className="flex items-center">
      <input
        type="checkbox"
        id="รับราชการ/รัฐวิสาหกิจ"
        name="occupation"
        value="รับราชการ/รัฐวิสาหกิจ"
        checked={formData.personalInfo.occupation.includes('รับราชการ/รัฐวิสาหกิจ')}
        onChange={handleCheckboxChangeOccupation}
        className="mr-2"
      />
      <label htmlFor="รับราชการ/รัฐวิสาหกิจ">รับราชการ/รัฐวิสาหกิจ</label>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="ค้าขาย/ธุรกิจส่วนตัว"
        name="occupation"
        value="ค้าขาย/ธุรกิจส่วนตัว"
        checked={formData.personalInfo.occupation.includes('ค้าขาย/ธุรกิจส่วนตัว')}
        onChange={handleCheckboxChangeOccupation}
        className="mr-2"
      />
      <label htmlFor="ค้าขาย/ธุรกิจส่วนตัว">ค้าขาย/ธุรกิจส่วนตัว</label>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="พนักงาน/ลูกจ้างในหน่วยงานภาครัฐ"
        name="occupation"
        value="พนักงาน/ลูกจ้างในหน่วยงานภาครัฐ"
        checked={formData.personalInfo.occupation.includes('พนักงาน/ลูกจ้างในหน่วยงานภาครัฐ')}
        onChange={handleCheckboxChangeOccupation}
        className="mr-2"
      />
      <label htmlFor="พนักงาน/ลูกจ้างในหน่วยงานภาครัฐ">พนักงาน/ลูกจ้างในหน่วยงานภาครัฐ</label>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="เกษตรกรรม"
        name="occupation"
        value="เกษตรกรรม"
        checked={formData.personalInfo.occupation.includes('เกษตรกรรม')}
        onChange={handleCheckboxChangeOccupation}
        className="mr-2"
      />
      <label htmlFor="เกษตรกรรม">เกษตรกรรม</label>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="พนักงานบริษัท/ลูกจ้างเอกชน"
        name="occupation"
        value="พนักงานบริษัท/ลูกจ้างเอกชน"
        checked={formData.personalInfo.occupation.includes('พนักงานบริษัท/ลูกจ้างเอกชน')}
        onChange={handleCheckboxChangeOccupation}
        className="mr-2"
      />
      <label htmlFor="พนักงานบริษัท/ลูกจ้างเอกชน">พนักงานบริษัท/ลูกจ้างเอกชน</label>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="ว่างงาน"
        name="occupation"
        value="ว่างงาน"
        checked={formData.personalInfo.occupation.includes('ว่างงาน')}
        onChange={handleCheckboxChangeOccupation}
        className="mr-2"
      />
      <label htmlFor="ว่างงาน">ว่างงาน</label>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="รับจ้างทั่วไป"
        name="occupation"
        value="รับจ้างทั่วไป"
        checked={formData.personalInfo.occupation.includes('รับจ้างทั่วไป')}
        onChange={handleCheckboxChangeOccupation}
        className="mr-2"
      />
      <label htmlFor="รับจ้างทั่วไป">รับจ้างทั่วไป</label>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="อื่นๆ ระบุ"
        name="occupation"
        value="อื่นๆ ระบุ"
        checked={formData.personalInfo.occupation.includes('อื่นๆ ระบุ')}
        onChange={handleCheckboxChangeOccupation}
        className="mr-2"
      />
      <label htmlFor="อื่นๆ ระบุ">อื่นๆ ระบุ</label>
    </div>
  </div>
</div>


            {/* กลุ่มเลือด */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">กลุ่มเลือด</label>
              <input
                type="text"
                value={formData.personalInfo.bloodType}
                onChange={(e) => handleChange(e, 'personalInfo', 'bloodType')}
                className="p-2 border rounded"
                placeholder="กลุ่มเลือด"
              />
            </div>
            
            {/* สิทธิการรักษา */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">สิทธิการรักษาพยาบาล</label>
              <input
                type="checkbox"
                id="สิทธิสวัสดิการข้าราชการ"
                name="medicalTreatmentRights"
                value="สิทธิสวัสดิการข้าราชการ"
                checked={formData.personalInfo.medicalTreatmentRights.includes('สิทธิสวัสดิการข้าราชการ')}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="สิทธิสวัสดิการข้าราชการ">สิทธิสวัสดิการข้าราชการ</label>

              <input
                type="checkbox"
                id="สิทธิประกันสังคม"
                name="medicalTreatmentRights"
                value="สิทธิประกันสังคม"
                checked={formData.personalInfo.medicalTreatmentRights.includes('สิทธิประกันสังคม')}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="สิทธิประกันสังคม">สิทธิประกันสังคม</label>

              <input
                type="checkbox"
                id="สิทธิหลักประกันสุขภาพ (บัตรทอง)"
                name="medicalTreatmentRights"
                value="สิทธิหลักประกันสุขภาพ (บัตรทอง)"
                checked={formData.personalInfo.medicalTreatmentRights.includes('สิทธิหลักประกันสุขภาพ (บัตรทอง)')}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="สิทธิหลักประกันสุขภาพ (บัตรทอง)">สิทธิหลักประกันสุขภาพ (บัตรทอง)</label>
            </div>
            
            {/* ประกันสุขภาพ */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">ประกันสุขภาพ</label>
              <input
                type="radio"
                id="มี"
                name="insurance"
                value="มี"
                checked={formData.personalInfo.insurance === 'มี'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'insurance')}
              />
              <label htmlFor="มี">มี</label>
              <input
                type="radio"
                id="ไม่มี"
                name="insurance"
                value="ไม่มี"
                checked={formData.personalInfo.insurance === 'ไม่มี'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'insurance')}
              />
              <label htmlFor="ไม่มี">ไม่มี</label>
              
            </div>
          </div>
        </section>

        {/* ข้อมูลการติดต่อ */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">2. ข้อมูลการติดต่อ</h3>
          <div className="space-y-4">

            {/* เบอร์โทรศัพท์1 */}
            <div>
              <label className="block text-sm font-medium">เบอร์โทรศัพท์มือถือ:</label>
              <input
                type="text"
                value={formData.contactInfo.mobile1}
                onChange={(e) => handleChange(e, 'contactInfo', 'mobile1')}
                className="p-2 border rounded"
                placeholder="เบอร์โทรศัพท์"
              />
            </div>

            {/* เบอร์โทรศัพท์2 */}
            <div>
              <label className="block text-sm font-medium">เบอร์โทรศัพท์มือถือ:</label>
              <input
                type="text"
                value={formData.contactInfo.mobile2}
                onChange={(e) => handleChange(e, 'contactInfo', 'mobile2')}
                className="p-2 border rounded"
                placeholder="เบอร์โทรศัพท์สำรอง"
              />
            </div>

            {/* Facebook */}
            <div>
              <label className="block text-sm font-medium">Faceboo:k</label>
              <input
                type="text"
                value={formData.contactInfo.facebook}
                onChange={(e) => handleChange(e, 'contactInfo', 'facebook')}
                className="p-2 border rounded"
                placeholder="Facebook"
              />
            </div>

            {/* ID Line */}
            <div>
              <label className="block text-sm font-medium">ID Line:</label>
              <input
                type="text"
                value={formData.contactInfo.idLine}
                onChange={(e) => handleChange(e, 'contactInfo', 'idLine')}
                className="p-2 border rounded"
                placeholder="ID Line"
              />
            </div>

            {/* อีเมล์ */}
            <div>
              <label className="block text-sm font-medium">E-mail:</label>
              <input
                type="email"
                value={formData.contactInfo.email}
                onChange={(e) => handleChange(e, 'contactInfo', 'email')}
                className="p-2 border rounded"
                placeholder="อีเมล์"
              />
            </div>
          </div>
        </section>

        {/* ข้อมูลที่อยู่ */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">3. ข้อมูลที่อยู่</h3>

          {/* ที่อยู่ปัจจุบัน */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold">ที่อยู่ปัจจุบัน</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">บ้านเลขที่</label>
                <input
                  type="text"
                  name="houseNumber"
                  value={formData.address.current.houseNumber}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
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
                  className="p-2 border rounded"
                  placeholder="หมู่บ้าน"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">หมู่</label>
                <input
                  type="text"
                  name="moo"
                  value={formData.address.current.moo}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
                  placeholder="หมู่"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ซอย</label>
                <input
                  type="text"
                  name="alley"
                  value={formData.address.current.alley}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
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
                  className="p-2 border rounded"
                  placeholder="ถนน"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ตำบล</label>
                <input
                  type="text"
                  name="subDistrict"
                  value={formData.address.current.subDistrict}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
                  placeholder="ตำบล"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">อำเภอ</label>
                <input
                  type="text"
                  name="district"
                  value={formData.address.current.district}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
                  placeholder="อำเภอ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">จังหวัด</label>
                <input
                  type="text"
                  name="province"
                  value={formData.address.current.province}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
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
                  className="p-2 border rounded"
                  placeholder="รหัสไปรษณีย์"
                />
              </div>
            </div>
          </div>

          {/* ที่อยู่ที่ทำงาน */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold">4.ที่อยู่ที่ทำงาน</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">ชื่อสถานที่ทำงาน</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.address.company.companyName}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="ชื่อสถานที่ทำงาน"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">เลขที่</label>
                <input
                  type="text"
                  name="companyNumber"
                  value={formData.address.company.companyNumber}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="เลขที่"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">หมู่บ้าน</label>
                <input
                  type="text"
                  name="village"
                  value={formData.address.company.village}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="หมู่บ้าน"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">หมู่</label>
                <input
                  type="text"
                  name="moo"
                  value={formData.address.company.moo}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="หมู่"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ซอย</label>
                <input
                  type="text"
                  name="alley"
                  value={formData.address.company.alley}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="ซอย"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ถนน</label>
                <input
                  type="text"
                  name="road"
                  value={formData.address.company.road}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="ถนน"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ตำบล</label>
                <input
                  type="text"
                  name="subDistrict"
                  value={formData.address.company.subDistrict}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="ตำบล"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">อำเภอ</label>
                <input
                  type="text"
                  name="district"
                  value={formData.address.company.district}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="อำเภอ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">จังหวัด</label>
                <input
                  type="text"
                  name="province"
                  value={formData.address.company.province}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="จังหวัด"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">รหัสไปรษณีย์</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.address.company.postalCode}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="รหัสไปรษณีย์"
                />
              </div>
            </div>
          </div>
        </section>

        
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-500 text-white p-2 rounded"
          >
            บันทึกข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
