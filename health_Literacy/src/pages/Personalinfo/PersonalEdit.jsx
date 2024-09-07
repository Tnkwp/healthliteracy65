import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function EditPage() {
  const navigate = useNavigate();
  const [showOtherOccupationInput, setShowOtherOccupationInput] = useState(false);
  const [otherOccupation, setOtherOccupation] = useState('');

  const [formData, setFormData] = useState({
    personalInfo: {
      nameTitle: 'นาย',
      fullName: 'อนุวัฒน์ สวัสดิ์วงศ์',
      idCard: '1234567890123',
      dob: '2512-07-29',
      age: '55',
      gender: 'ชาย',
      maritalStatus: 'สมรส',
      occupation: ['พนักงาน/ลูกจ้างในหน่วยงานภาครัฐ'],
      bloodType: 'O',
      weight: '68',
      height: '171',
      medicalTreatmentRights: ['สิทธิประกันสังคม'],
      insurance: 'ไม่มี',
    },
    contactInfo: {
      mobile1: '089-9966999',
      mobile2: '',
      facebook: 'Anuwat Sawatdiwong',
      idLine: '089-9966999',
      email: 'anuwatsawatdiwong99@gmail.com',
    },
    address: {
      current: {
        houseNumber: '165/3',
        hVillage: 'บ้านกลาง',
        hAlley: '1',
        hMoo: '',
        hRoad: '',
        hSubDistrict: 'เชียงแสน',
        hDistrict: 'เชียงแสน',
        hProvince: 'พะเยา',
        hPostalCode: '56160',
      },
      company: {
        companyName: 'สำนักงานขายกลางเชียงใหม่',
        companyNumber: '1/21',
        cVillage: 'บ้านกลาง',
        cMoo: '',
        cAlley: '1',
        cRoad: '',
        cSubDistrict: 'เชียงแสน',
        cDistrict: 'เชียงแสน',
        cProvince: 'พะเยา',
        cPostalCode: '56160',
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

  const handleCheckboxChangeOccupation = (event) => {
    const { value, checked } = event.target;

    if (value === 'อื่นๆ') {
      setShowOtherOccupationInput(checked);
      if (!checked) {
        setOtherOccupation('');
      }
    }

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

  const handleSubmit = (event) => {
    event.preventDefault();

    let updatedOccupations = formData.personalInfo.occupation;

    if (updatedOccupations.includes('อื่นๆ') && otherOccupation) {
      updatedOccupations = updatedOccupations.map((occupation) =>
        occupation === 'อื่นๆ' ? otherOccupation : occupation
      );
    }

    setFormData((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        occupation: updatedOccupations,
      },
    }));

    // Your form submission logic here
    console.log('Form Data Submitted:', {
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        occupation: updatedOccupations,
      },
    });

    navigate('/summaryPage');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className='bg-white shadow-lg rounded-lg w-full max-w-3xl p-8'>
        <form onSubmit={handleSubmit} className="space-y-8">
        <header className="bg-green-500 border-b-2 p-2 mb-6 rounded-md">
          <h1 className="text-xl font-semibol text-white text-start ">แก้ไขประวัติส่วนตัว</h1>
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
                  onChange={(e) => handleChange(e, 'personalInfo', 'Name')}
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

            {/* วัน/เดือน/ปีเกิด */}
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
        id="อื่นๆ"
        name="occupation"
        value="อื่นๆ"
        checked={formData.personalInfo.occupation.includes('อื่นๆ')}
        onChange={handleCheckboxChangeOccupation}
        className="mr-2"
      />
      <label htmlFor="อื่นๆ">อื่นๆ</label>
    </div>
    {showOtherOccupationInput && (
        <div className="mt-2">
          <label htmlFor="otherOccupation" className="text-sm font-medium mr-2">ระบุ</label>
          <input
            type="text"
            value={otherOccupation}
            onChange={(e) => setOtherOccupation(e.target.value)}
            placeholder="ระบุอาชีพอื่นๆ"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
      )}
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
                  name="hVillage"
                  value={formData.address.current.hVillage}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
                  placeholder="หมู่บ้าน"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">หมู่</label>
                <input
                  type="text"
                  name="hMoo"
                  value={formData.address.current.hMoo}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
                  placeholder="หมู่"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ซอย</label>
                <input
                  type="text"
                  name="hAlley"
                  value={formData.address.current.hAlley}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
                  placeholder="ซอย"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ถนน</label>
                <input
                  type="text"
                  name="hRoad"
                  value={formData.address.current.hRoad}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
                  placeholder="ถนน"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ตำบล</label>
                <input
                  type="text"
                  name="hSubDistrict"
                  value={formData.address.current.hSubDistrict}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
                  placeholder="ตำบล"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">อำเภอ</label>
                <input
                  type="text"
                  name="hDistrict"
                  value={formData.address.current.hDistrict}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
                  placeholder="อำเภอ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">จังหวัด</label>
                <input
                  type="text"
                  name="hProvince"
                  value={formData.address.current.hProvince}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded"
                  placeholder="จังหวัด"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">รหัสไปรษณีย์</label>
                <input
                  type="text"
                  name="hPostalCode"
                  value={formData.address.current.hPostalCode}
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
                  name="cVillage"
                  value={formData.address.company.cVillage}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="หมู่บ้าน"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">หมู่</label>
                <input
                  type="text"
                  name="cMoo"
                  value={formData.address.company.cMoo}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="หมู่"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ซอย</label>
                <input
                  type="text"
                  name="cAlley"
                  value={formData.address.company.cAlley}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="ซอย"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ถนน</label>
                <input
                  type="text"
                  name="cRoad"
                  value={formData.address.company.cRoad}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="ถนน"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ตำบล</label>
                <input
                  type="text"
                  name="cSubDistrict"
                  value={formData.address.company.cSubDistrict}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="ตำบล"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">อำเภอ</label>
                <input
                  type="text"
                  name="cDistrict"
                  value={formData.address.company.cDistrict}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="อำเภอ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">จังหวัด</label>
                <input
                  type="text"
                  name="cProvince"
                  value={formData.address.company.cProvince}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded"
                  placeholder="จังหวัด"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">รหัสไปรษณีย์</label>
                <input
                  type="text"
                  name="cPostalCode"
                  value={formData.address.company.cPostalCode}
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
    </div>
  );
};

export default EditPage;
