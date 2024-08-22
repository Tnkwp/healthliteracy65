import React from 'react';
import { Link } from 'react-router-dom';

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      nameTitle: '',
      Name: '',
      idCard: '',
      gender: '',
      dob: '',
      age: '',
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
        moo: '',
        alley: '',
        road: '',
        subdistrict: '',
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
        subdistrict: '',
        district: '',
        province: '',
        postalCode: '',
      },
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData((prevState) => ({
        ...prevState,
        occupation: [...prevState.occupation, value],
        medicalRights: [...prevState.medicalRights, value],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        occupation: prevState.occupation.filter((item) => item !== value),
        medicalRights: prevState.medicalRights.filter((item) => item !== value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to the server
    console.log(formData);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-md rounded-lg w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">ประวัติส่วนตัว</h2>
          <form onSubmit={handleSubmit}>
            {/* ข้อมูลส่วนบุคคล */}
            <div className="mb-6">
              <h3 className="text-md font-bold mb-2">1. ข้อมูลส่วนบุคคล</h3>
              <div className="mb-4">
                <label className="block mb-2">ชื่อ - นามสกุล</label>
                <div className="flex items-center space-x-2 mb-4">
                  <input type="radio" id="นาย" name="nameTitle" value="นาย" onChange={handleInputChange} />
                  <label htmlFor="mr">นาย</label>
                  <input type="radio" id="นาง" name="nameTitle" value="นาง" onChange={handleInputChange} />
                  <label htmlFor="mrs">นาง</label>
                  <input type="radio" id="นางสาว" name="nameTitle" value="นางสาว" onChange={handleInputChange} />
                  <label htmlFor="ms">นางสาว</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " id="Name" name="Name" value={formData.personalInfo.Name} onChange={handleInputChange} />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2">เลขที่บัตรประจำตัวประชาชน</label>
                <input type="text" className="border border-gray-300 p-2 rounded " id="idCard" name="idCard" value={formData.personalInfo.idCard} onChange={handleInputChange} />
              </div>

              <div className="mb-4 flex flex-wrap items-center space-x-2">
                <label className="block mr-2" id="gender">เพศ</label>
                <div>
                  <input type="radio" id="male" name="gender" value="ชาย" onChange={handleInputChange} />
                  <label htmlFor="male">ชาย</label>
                  <input type="radio" id="female" name="gender" value="หญิง" onChange={handleInputChange} />
                  <label htmlFor="female">หญิง</label>
                </div>
                <label className="block">วัน/เดือน/ปีเกิด</label>
                <input type="date" className="border border-gray-300 p-2 rounded" id="dob" name="dob" value={formData.personalInfo.dob} onChange={handleInputChange} />
                <label id="age">อายุ</label>
                <input type="text" className="border border-gray-300 p-2 rounded w-20" name="age" value={formData.personalInfo.age} onChange={handleInputChange} />
                <label>ปี</label>
              </div>
              <div className="mb-4 flex flex-wrap items-center space-x-2">
                <label className="mr-2">สถานะภาพ</label>
                <input type="radio" id="single" name="maritalStatus" value="โสด" onChange={handleInputChange} />
                <label htmlFor="single">โสด</label>
                <input type="radio" id="married" name="maritalStatus" value="สมรส/อยู่ด้วยกัน" onChange={handleInputChange} />
                <label htmlFor="married">สมรส/อยู่ด้วยกัน</label>
                <input type="radio" id="divorce" name="maritalStatus" value="หย่าร้าง/หม้าย/แยกกันอยู่" onChange={handleInputChange} />
                <label htmlFor="divorce">หย่าร้าง/หม้าย/แยกกันอยู่</label>
              </div>
              <div className="flex mb-4">
                <label className="mr-2 mb-2" htmlFor="occupation">อาชีพ</label>
                <div>
                  <div className="mb-2">
                    <input type="checkbox" id="government1" name="occupation" value="รัฐวิสาหกิจ/รัฐวิสาหกิจ" onChange={handleCheckboxChange} />
                    <label className="mr-4 ml-2" htmlFor="government1">รัฐวิสาหกิจ/รัฐวิสาหกิจ</label>
                    <input type="checkbox" id="business" name="occupation" value="ค้าขาย/ธุรกิจส่วนตัว" onChange={handleCheckboxChange} />
                    <label className="ml-2" htmlFor="business">ค้าขาย/ธุรกิจส่วนตัว</label>
                  </div>
                  <div className="mb-2">
                    <input type="checkbox" id="govEmployee" name="occupation" value="พนักงาน/ลูกจ้างในหน่วยงานภาครัฐ" onChange={handleCheckboxChange} />
                    <label className="mr-4 ml-2" htmlFor="govEmployee">พนักงาน/ลูกจ้างในหน่วยงานภาครัฐ</label>
                    <input type="checkbox" id="agriculture" name="occupation" value="เกษตรกรรม" onChange={handleCheckboxChange} />
                    <label className="ml-2" htmlFor="agriculture">เกษตรกรรม</label>
                  </div>
                  <div className="mb-2">
                    <input type="checkbox" id="privateEmployee" name="occupation" value="พนักงานบริษัท/ลูกจ้างเอกชน" onChange={handleCheckboxChange} />
                    <label className="mr-4 ml-2" htmlFor="privateEmployee">พนักงานบริษัท/ลูกจ้างเอกชน</label>
                    <input type="checkbox" id="unemployed" name="occupation" value="ว่างงาน" onChange={handleCheckboxChange} />
                    <label className="ml-2" htmlFor="unemployed">ว่างงาน</label>
                  </div>
                  <div className="mb-2">
                    <input type="checkbox" id="generalLabor" name="occupation" value="รับจ้างทั่วไป" onChange={handleCheckboxChange} />
                    <label className="mr-4 ml-2" htmlFor="generalLabor">รับจ้างทั่วไป</label>
                    <input type="checkbox" id="other" name="occupation" value="อื่นๆ" onChange={handleCheckboxChange} />
                    <label className="ml-2" htmlFor="other">อื่นๆ ระบุ</label>
                    <input type="text" className="border border-gray-300 p-2 rounded ml-2" name='occupation' value={formData.personalInfo.occupation} onChange={handleInputChange}  />
                  </div>
                </div>
              </div>
              <div className="mb-4 flex flex-wrap items-center">
                <label className="block mr-2">หมู่โลหิต</label>
                <input type="text" className="border border-gray-300 p-2 rounded w-20" id="bloodType" name='bloodType' value={formData.personalInfo.bloodType} onChange={handleInputChange}/>
                <label className="ml-4">น้ำหนัก</label>
                <input type="text" className="border border-gray-300 p-2 rounded w-20" id="weight" name='weight' value={formData.personalInfo.weight} onChange={handleInputChange}/>
                <label className="ml-2">กิโลกรัม</label>
                <input type="text" className="border border-gray-300 p-2 rounded w-20" id="height" name='height' value={formData.personalInfo.height} onChange={handleInputChange}/>
                <label className="ml-2">เซนติเมตร</label>
              </div>
              <div className="mb-4 flex">
                <label className="mr-2">สิทธิการรักษาพยาบาล</label>
                <div>
                  <input type="checkbox" id="government" />
                  <label className="ml-2" htmlFor="govBenefits">สิทธิสวัสดิการข้าราชการ</label>
                  <p>
                  <input type="checkbox" id="socialSecurity" />
                  <label className="ml-2" htmlFor="socialSecurity">สิทธิประกันสังคม</label>
                  </p>
                  <p>
                  <input type="checkbox" id="healthCare" />
                  <label className="ml-2" htmlFor="healthCare">สิทธิหลักประกันสุขภาพ (บัตรทอง)</label>
                  </p>
               </div>
              </div>
  <div className="mb-4 flex items-center">
    <label className="mr-2">ประกันสุขภาพ</label>
<div className="mr-5">
  <input type="radio" id="hasInsurance" name="insurance" />
  <label className="ml-2" htmlFor="hasInsurance">มี</label>
  <input type="radio" id="noInsurance" name="insurance" />
  <label className="ml-2" htmlFor="noInsurance">ไม่มี</label>
</div>

  </div>
</div>


            {/* ข้อมูลติดต่อ */}
<div className="mb-6">
  <h3 className="text-md font-bold mb-2">2. ข้อมูลติดต่อ</h3>
  <div className="mb-4">
    <label className="block mb-2" htmlFor="mobileNumber1">เบอร์โทรศัพท์มือถือ</label>
    <input type="text" className="border border-gray-300 p-2 rounded " id="mobileNumber1" />
  </div>
  <div className="mb-4">
    <label className="block mb-2" htmlFor="mobileNumber2">เบอร์โทรศัพท์มือถือ</label>
    <input type="text" className="border border-gray-300 p-2 rounded " id="mobileNumber2" />
  </div>
  <div className="mb-4">
    <label className="block mb-2" htmlFor="facebook">Facebook</label>
    <input type="text" className="border border-gray-300 p-2 rounded " id="facebook" />
  </div>
  <div className="mb-4">
    <label className="block mb-2" htmlFor="lineId">Line ID</label>
    <input type="text" className="border border-gray-300 p-2 rounded " id="lineId" />
  </div>
  <div className="mb-4">
    <label className="block mb-2" htmlFor="email">E-mail</label>
    <input type="email" className="border border-gray-300 p-2 rounded " id="email" />
  </div>
</div>

            {/* ที่อยู่ปัจจุบัน */}
<div className="mb-6">
  <h3 className="text-md font-bold mb-2">3. ข้อมูลที่อยู่ปัจจุบัน</h3>
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block mb-2" htmlFor="currentHouseNumber">เลขที่อยู่</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="currentHouseNumber" />
    </div>
    <div>
      <label className="block mb-2" htmlFor="currentVillage">หมู่บ้าน</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="currentVillage" />
    </div>
    <div>
      <label className="block mb-2" htmlFor="currentMoo">หมู่ที่</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="currentMoo" />
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block mb-2" htmlFor="currentSoi">ซอย</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="currentSoi" />
    </div>
    <div>
      <label className="block mb-2" htmlFor="currentRoad">ถนน</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="currentRoad" />
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block mb-2" htmlFor="currentSubdistrict">ตำบล/แขวง</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="currentSubdistrict" />
    </div>
    <div>
      <label className="block mb-2" htmlFor="currentDistrict">อำเภอ/เขต</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="currentDistrict" />
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block mb-2" htmlFor="currentProvince">จังหวัด</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="currentProvince" />
    </div>
    <div>
      <label className="block mb-2" htmlFor="currentPostalCode">รหัสไปรษณีย์</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="currentPostalCode" />
    </div>
  </div>
</div>


            {/* ที่อยู่บริษัท */}
<div className="mb-6">
  <h3 className="text-md font-bold mb-2">4. ข้อมูลที่ทำงาน</h3>
  <div className="mb-4">
    <label className="block mb-2" htmlFor="companyName">ชื่อสถานที่ทำงาน/บริษัท</label>
    <input type="text" className="border border-gray-300 p-2 rounded " id="companyName" />
  </div>
  <div className="mb-4">
    <label className="block mb-2" htmlFor="companyAddress">ที่อยู่ที่ทำงาน</label>
    <textarea className="border border-gray-300 p-2 rounded " id="companyAddress" />
  </div>
  <div className="mb-4">
    <label className="block mb-2" htmlFor="companyPhone">เบอร์โทรศัพท์ที่ทำงาน</label>
    <input type="text" className="border border-gray-300 p-2 rounded " id="companyPhone" />
  </div>
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block mb-2" htmlFor="companyHouseNumber">เลขที่อยู่</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="companyHouseNumber" />
    </div>
    <div>
      <label className="block mb-2" htmlFor="companyVillage">หมู่บ้าน</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="companyVillage" />
    </div>
    <div>
      <label className="block mb-2" htmlFor="companyMoo">หมู่ที่</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="companyMoo" />
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block mb-2" htmlFor="companySoi">ซอย</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="companySoi" />
    </div>
    <div>
      <label className="block mb-2" htmlFor="companyRoad">ถนน</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="companyRoad" />
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block mb-2" htmlFor="companySubdistrict">ตำบล/แขวง</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="companySubdistrict" />
    </div>
    <div>
      <label className="block mb-2" htmlFor="companyDistrict">อำเภอ/เขต</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="companyDistrict" />
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block mb-2" htmlFor="companyProvince">จังหวัด</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="companyProvince" />
    </div>
    <div>
      <label className="block mb-2" htmlFor="companyPostalCode">รหัสไปรษณีย์</label>
      <input type="text" className="border border-gray-300 p-2 rounded " id="companyPostalCode" />
    </div>
  </div>
</div>

            {/* Save Button */}
            <div className="flex justify-center">
              <Link to={"/summaryPage"}><button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
              >
                บันทึกข้อมูล
              </button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
