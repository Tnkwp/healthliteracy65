import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function PersonalInfoForm() {
  const navigate = useNavigate();
  const { pid } = useParams();
  const [showOtherOccupationInput, setShowOtherOccupationInput] = useState(false);
  const [otherOccupation, setOtherOccupation] = useState('');



  const [formData, setFormData] = useState({
    personalInfo: {
      nameTitle: '',
      fullName: '',
      idCard: '',
      dob: '',
      age: '',
      gender: '',
      maritalStatus: '',
      occupation: '',
      bloodType: '',
      weight: '',
      height: '',
      medicalTreatmentRights: '',
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
        hVillage: '',
        hAlley: '',
        hMoo: '',
        hRoad: '',
        hSubDistrict: '',
        hDistrict: '',
        hProvince: '',
        hPostalCode: '',
      },
      company: {
        companyName: '',
        companyNumber: '',
        cVillage: '',
        cMoo: '',
        cAlley: '',
        cRoad: '',
        cSubDistrict: '',
        cDistrict: '',
        cProvince: '',
        cPostalCode: '',
      },
    },
  });

 

   useEffect(() => {
  const fetchPersonalInfo = async () => {
    try {
      const response = await fetch(`http://localhost:3000/personalInfo/${pid}`);
      const data = await response.json();
       
       console.log('Fetched Data:', data);
      
      

      
      setFormData((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          ...data.personalInfo,
        },
        contactInfo: {
          ...prevState.contactInfo,
          ...data.contactInfo,
        },
        address: {
          ...prevState.address,
          current: {
            ...prevState.address.current,
            ...data.address?.current,
          },
          company: {
            ...prevState.address.company,
            ...data.address?.company,
          },
        },
      }));
    } catch (error) {
      console.error('Error fetching personalInfo:', error);
    }
  };

  fetchPersonalInfo();
}, [pid]);


  const handleChange = (e, section, field) => {
  const { value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    [section]: {
      ...prevState[section],
      [field]: value,
    },
  }));
};


  const handleAddressChange = (e, type) => {
  const { name, value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    address: {
      ...prevState.address,
      [type]: {
        ...prevState.address[type],
        [name]: value,
      },
    },
  }));
};

  const handleRadioChange = (e, section, field) => {
  const { value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    [section]: {
      ...prevState[section],
      [field]: value,
    },
  }));
};
 const handleCheckboxChange = (e) => {
  const { value, checked } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    personalInfo: {
      ...prevState,
      medicalTreatmentRights: checked
        ? [...prevState.medicalTreatmentRights, value] // เพิ่มค่าเข้าไปใน array ถ้า checkbox ถูกเลือก
        : prevState.medicalTreatmentRights.filter((item) => item !== value), // นำค่าที่ไม่ถูกเลือกออกจาก array
    },
  }));
};

  const handleCheckboxChangeOccupation = (e) => {
  const { value, checked } = e.target;

  if (value === 'อื่นๆ') {
    setShowOtherOccupationInput(checked);
    if (!checked) {
      setOtherOccupation('');
    }
  }

  setFormData((prevState) => ({
    ...prevState,
    personalInfo: {
      ...prevState,
      occupation: checked
        ? [...prevState.occupation, value]
        : prevState.occupation.filter((item) => item !== value),
    },
  }));
};


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data before submission:', formData);

    const updatedFormData = {
      ...formData.contactInfo,
      ...formData.personalInfo,
      ...formData.address.current,
      ...formData.address.company
  };
    fetch(`http://localhost:3000/personalInfo/${pid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        navigate(`/personalInfo/${data.pid}`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };



  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className='bg-white shadow-lg rounded-lg w-full max-w-3xl p-8'>
        <form onSubmit={handleSubmit} className="space-y-8">
        <header className="bg-[#0EB24E] border-b-2 p-2 mb-6 rounded-md">
          <h1 className="text-xl font-semibol text-white text-start ">ประวัติส่วนตัว</h1>
        </header>

        {/* ข้อมูลส่วนบุคคล */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">1. ข้อมูลส่วนบุคคล</h3>
          <div className="space-y-4">

            {/* ชื่อ-นามสกุล */}
            <div className='flex items-center '>
              <label className="text-sm font-medium mr-2">ชื่อ - นามสกุล</label>
              <div className=" items-center space-x-4">
                <input
                  type="radio"
                  id="นาย"
                  name="nameTitle"
                  value="นาย"
                  checked={formData.personalInfo?.nameTitle === 'นาย'}
                  onChange={(e) => handleRadioChange(e, 'personalInfo', 'nameTitle')}
                />
                <label htmlFor="นาย">นาย</label>
                <input
                  type="radio"
                  id="นาง"
                  name="nameTitle"
                  value="นาง"
                  checked={formData.personalInfo?.nameTitle === 'นาง'}
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
                <label htmlFor="นางสาว">นางสาว :</label>
                <input
                  type="text"
                  value={formData.personalInfo?.fullName}
                  onChange={(e) => handleChange(e, 'personalInfo', 'fullName')}
                  className="p-2 border rounded mr-5 w-[370px] "
                  placeholder="ชื่อ-นามสกุล"
                />
              </div>
            </div>

            {/* เลขบัตรประจำตัวประชาชน */}
            <div>
              <label className="text-sm font-medium mr-3" >เลขที่บัตรประชาชน :</label>
              <input
                type="text"
                value={formData.personalInfo?.idCard}
                onChange={(e) => handleChange(e, 'personalInfo', 'idCard')}
                className="p-2 border rounded w-[575px]"
                placeholder="เลขที่บัตรประชาชน"
              />
            </div>

            {/* เพศ */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">เพศ : </label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="ชาย"
                checked={formData.personalInfo?.gender === 'ชาย'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'gender')}
              />
              <label htmlFor="male">ชาย</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="หญิง"
                checked={formData.personalInfo?.gender === 'หญิง'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'gender')}
              />
              <label htmlFor="female">หญิง</label>
            </div>

            {/* วัน/เดือน/ปีเกิด */}
            <div>
              <label className="text-sm font-medium mr-2 ">วัน/เดือน/ปีเกิด :</label>
              <input
                type="date"
                value={formData.personalInfo?.dob}
                onChange={(e) => handleChange(e, 'personalInfo', 'dob')}
                className="p-2 border rounded"
              />
            </div>

            {/* อายุ */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">อายุ : </label>
              <input
                type="text"
                value={formData.personalInfo?.age}
                onChange={(e) => handleChange(e, 'personalInfo', 'age')}
                className="p-2 border rounded w-[50px]"
                placeholder="อายุ"
              />
              <span>ปี</span>
            </div>

            {/* สถานะภาพ */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">สถานะภาพ</label>
              <input
                type="radio"
                id="single"
                name="maritalStatus"
                value="โสด"
                checked={formData.personalInfo?.maritalStatus === 'โสด'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'maritalStatus')}
              />
              <label htmlFor="single">โสด</label>
              <input
                type="radio"
                id="married"
                name="maritalStatus"
                value="สมรส"
                checked={formData.personalInfo?.maritalStatus === 'สมรส'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'maritalStatus')}
              />
              <label htmlFor="married">สมรส</label>
              <input
                type="radio"
                id="divorced"
                name="maritalStatus"
                value="หย่าร้าง/หม้าย/แยกกันอยู่"
                checked={formData.personalInfo?.maritalStatus === 'หย่าร้าง/หม้าย/แยกกันอยู่'}
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
        checked={formData.personalInfo?.occupation?.includes('รับราชการ/รัฐวิสาหกิจ')}
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
        checked={formData.personalInfo?.occupation?.includes('ค้าขาย/ธุรกิจส่วนตัว')}
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
        checked={formData.personalInfo?.occupation?.includes('พนักงาน/ลูกจ้างในหน่วยงานภาครัฐ')}
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
        checked={formData.personalInfo?.occupation?.includes('เกษตรกรรม')}
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
        checked={formData.personalInfo?.occupation?.includes('พนักงานบริษัท/ลูกจ้างเอกชน')}
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
        checked={formData.personalInfo?.occupation?.includes('ว่างงาน')}
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
        checked={formData.personalInfo?.occupation?.includes('รับจ้างทั่วไป')}
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
        checked={formData.personalInfo?.occupation?.includes('อื่นๆ')}
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
              <label className="block text-sm font-medium">หมู่โลหิต :</label>
              <input
                type="text"
                value={formData.personalInfo?.bloodType}
                onChange={(e) => handleChange(e, 'personalInfo', 'bloodType')}
                className="p-2 border rounded  w-[80px]"
                placeholder="หมู่โลหิต"
              />
            </div>
             {/* น้ำหนัก /}{/ ส่วนสูง */}
             <div className="flex items-center space-x-4">
              <label className=" text-sm font-medium">น้ำหนัก :</label>
              <input
                type="text"
                value={formData.personalInfo?.weight}
                onChange={(e) => handleChange(e, 'personalInfo', 'weight')}
                className="p-2 border rounded  w-[70px]"
                placeholder="น้ำหนัก"
              />
              <span>กิโลกรัม</span>
              <label className=" text-sm font-medium">ส่วนสูง :</label>
              <input
                type="text"
                value={formData.personalInfo?.height}
                onChange={(e) => handleChange(e, 'personalInfo', 'height')}
                className="p-2 border rounded w-[70px]"
                placeholder="ส่วนสูง"
              />
              <span>เซนติเมตร</span>
            </div>

          

            {/* สิทธิการรักษา */}
<div className="items-center space-x-1">
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-2">สิทธิการรักษาพยาบาล</label>

    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id="สิทธิสวัสดิการข้าราชการ"
        name="medicalTreatmentRights"
        value="สิทธิสวัสดิการข้าราชการ"
        checked={formData.personalInfo?.medicalTreatmentRights?.includes('สิทธิสวัสดิการข้าราชการ')}
        onChange={handleCheckboxChange}
      />
      <label className="ml-2" htmlFor="สิทธิสวัสดิการข้าราชการ">สิทธิสวัสดิการข้าราชการ</label>
    </div>

    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id="สิทธิประกันสังคม"
        name="medicalTreatmentRights"
        value="สิทธิประกันสังคม"
        checked={formData.personalInfo?.medicalTreatmentRights?.includes('สิทธิประกันสังคม')}
        onChange={handleCheckboxChange}
      />
      <label className="ml-2" htmlFor="สิทธิประกันสังคม">สิทธิประกันสังคม</label>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="สิทธิหลักประกันสุขภาพ (บัตรทอง)"
        name="medicalTreatmentRights"
        value="สิทธิหลักประกันสุขภาพ (บัตรทอง)"
        checked={formData.personalInfo?.medicalTreatmentRights?.includes('สิทธิหลักประกันสุขภาพ (บัตรทอง)')}
        onChange={handleCheckboxChange}
      />
      <label className="ml-2" htmlFor="สิทธิหลักประกันสุขภาพ (บัตรทอง)">สิทธิหลักประกันสุขภาพ (บัตรทอง)</label>
    </div>

  </div>
</div>

            
            {/* ประกันสุขภาพ */}
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium">ประกันสุขภาพ</label>
              <input
                type="radio"
                id="มี"
                name="insurance"
                value="มี"
                checked={formData.personalInfo?.insurance === 'มี'}
                onChange={(e) => handleRadioChange(e, 'personalInfo', 'insurance')}
              />
              <label htmlFor="มี">มี</label>
              <input
                type="radio"
                id="ไม่มี"
                name="insurance"
                value="ไม่มี"
                checked={formData.personalInfo?.insurance === 'ไม่มี'}
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
              <label className="text-sm font-medium mr-2">เบอร์โทรศัพท์มือถือ :</label>
              <input
                type="text"
                value={formData.contactInfo?.mobile1}
                onChange={(e) => handleChange(e, 'contactInfo', 'mobile1')}
                className="p-2 border rounded mr-10"
                placeholder="เบอร์โทรศัพท์"
              />{/* เบอร์โทรศัพท์2 */}
              <label className="text-sm font-medium mr-2">เบอร์โทรศัพท์มือถือ :</label>
              <input
                type="text"
                value={formData.contactInfo?.mobile2}
                onChange={(e) => handleChange(e, 'contactInfo', 'mobile2')}
                className="p-2 border rounded"
                placeholder="เบอร์โทรศัพท์สำรอง"
              />
            </div>

            {/* Facebook */}
            <div>
              <label className="text-sm font-medium mr-2">Facebook :</label>
              <input
                type="text"
                value={formData.contactInfo?.facebook}
                onChange={(e) => handleChange(e, 'contactInfo', 'facebook')}
                className="p-2 border rounded mr-10"
                placeholder="Facebook"
              />
              {/* ID Line */}
                <label className="text-sm font-medium mr-2">ID Line :</label>
              <input
                type="text"
                value={formData.contactInfo?.idLine}
                onChange={(e) => handleChange(e, 'contactInfo', 'idLine')}
                className="p-2 border rounded"
                placeholder="ID Line"
              />
            </div>

            {/* อีเมล์ */}
            <div>
              <label className="text-sm font-medium mr-2">E-mail :</label>
              <input
                type="email"
                value={formData.contactInfo?.email}
                onChange={(e) => handleChange(e, 'contactInfo', 'email')}
                className="p-2 border rounded"
                placeholder="E-mail"
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
                <label className="text-sm font-medium mr-2">บ้านเลขที่ :</label>
                <input
                  type="text"
                  name="houseNumber"
                  value={formData.address?.current?.houseNumber}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded mr-5 w-[100px]"
                  placeholder="บ้านเลขที่"
                />
                <label className="text-sm font-medium mr-2">หมู่บ้าน :</label>
                <input
                  type="text"
                  name="hVillage"
                  value={formData.address?.current?.hVillage}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded mr-5 w-[130px]"
                  placeholder="หมู่บ้าน"
                />
                <label className="text-sm font-medium mr-2">หมู่ :</label>
                <input
                  type="text"
                  name="hMoo"
                  value={formData.address?.current?.hMoo}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded mr-5 w-[60px]"
                  placeholder="หมู่"
                />
                <label className="text-sm font-medium mr-2">ซอย :</label>
                <input
                  type="text"
                  name="hAlley"
                  value={formData.address?.current?.hAlley}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded mr-5 w-[125px]"
                  placeholder="ซอย"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mr-2">ถนน :</label>
                <input
                  type="text"
                  name="hRoad"
                  value={formData.address?.current?.hRoad}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded mr-5 w-[130px]"
                  placeholder="ถนน"
                />
                <label className="text-sm font-medium mr-2">ตำบล/แขวง :</label>
                <input
                  type="text"
                  name="hSubDistrict"
                  value={formData.address?.current?.hSubDistrict}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded mr-5 w-[150px]"
                  placeholder="ตำบล/แขวง"
                />
                <label className="text-sm font-medium mr-2">อำเภอ/เขต :</label>
                <input
                  type="text"
                  name="hDistrict"
                  value={formData.address?.current?.hDistrict}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded mr-5 w-[155px]"
                  placeholder="อำเภอ/เขต"
                />
              </div>
              <div>
                <label className="text-sm font-medium mr-2">จังหวัด :</label>
                <input
                  type="text"
                  name="hProvince"
                  value={formData.address?.current?.hProvince}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded mr-5 w-[170px]"
                  placeholder="จังหวัด"
                />
                <label className="text-sm font-medium mr-2">รหัสไปรษณีย์ :</label>
                <input
                  type="text"
                  name="hPostalCode"
                  value={formData.address?.current?.hPostalCode}
                  onChange={(e) => handleAddressChange(e, 'current')}
                  className="p-2 border rounded w-[170px]"
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
                <label className="text-sm font-medium mr-2">ชื่อสถานที่ทำงาน :</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.address?.company?.companyName}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded w-[565px]"
                  placeholder="ชื่อสถานที่ทำงาน"
                />
              </div>
              <div>
                <label className="text-sm font-medium mr-2">เลขที่ :</label>
                <input
                  type="text"
                  name="companyNumber"
                  value={formData.address?.company?.companyNumber}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded mr-5 w-[105px]"
                  placeholder="เลขที่"
                />

                <label className="text-sm font-medium mr-2">หมู่บ้าน :</label>
                <input
                  type="text"
                  name="cVillage"
                  value={formData.address?.company?.cVillage}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded mr-5 w-[140px]"
                  placeholder="หมู่บ้าน"
                />

                <label className="text-sm font-medium mr-2">หมู่ :</label>
                <input
                  type="text"
                  name="cMoo"
                  value={formData.address?.company?.cMoo}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded mr-5 w-[60px]"
                  placeholder="หมู่"
                />

                <label className="text-sm font-medium mr-2">ซอย :</label>
                <input
                  type="text"
                  name="cAlley"
                  value={formData.address?.company?.cAlley}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded mr-5 w-[135px]"
                  placeholder="ซอย"
                />
              </div>
              <div>
                <label className="text-sm font-medium mr-2">ถนน :</label>
                <input
                  type="text"
                  name="cRoad"
                  value={formData.address?.company?.cRoad}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded mr-5 w-[130px]"
                  placeholder="ถนน"
                />
                <label className="text-sm font-medium mr-2">ตำบล/แขวง :</label>
                <input
                  type="text"
                  name="cSubDistrict"
                  value={formData.address?.company?.cSubDistrict}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded mr-5 w-[150px]"
                  placeholder="ตำบล/แขวง"
                />
                <label className="text-sm font-medium mr-2">อำเภอ/เขต :</label>
                <input
                  type="text"
                  name="cDistrict"
                  value={formData.address?.company?.cDistrict}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded mr-5 w-[155px]"
                  placeholder="อำเภอ/เขต"
                />
              </div>
              <div>
                <label className="text-sm font-medium mr-2">จังหวัด :</label>
                <input
                  type="text"
                  name="cProvince"
                  value={formData.address?.company?.cProvince}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded mr-5 w-[170px]"
                  placeholder="จังหวัด"
                />
                <label className="text-sm font-medium mr-2">รหัสไปรษณีย์ :</label>
                <input
                  type="text"
                  name="cPostalCode"
                  value={formData.address?.company?.cPostalCode}
                  onChange={(e) => handleAddressChange(e, 'company')}
                  className="p-2 border rounded w-[170px]"
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

export default PersonalInfoForm;