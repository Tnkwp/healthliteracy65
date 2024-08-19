import React from 'react';

const PersonalInfoForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-md rounded-lg w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">ประวัติส่วนตัว</h2>
          <form>
            {/* ข้อมูลส่วนบุคคล */}
            <div className="mb-6">
              <h3 className="text-md font-bold mb-2">1. ข้อมูลส่วนบุคคล</h3>
              <div className="mb-4">
                <label className="block mb-2">ชื่อ - นามสกุล</label>
                <div className="flex items-center space-x-2 mb-4">
                  <input type="checkbox" id="mr" />
                  <label htmlFor="mr">นาย</label>
                  <input type="checkbox" id="mrs" />
                  <label htmlFor="mrs">นาง</label>
                  <input type="checkbox" id="ms" />
                  <label htmlFor="ms">นางสาว</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
              </div>
              <div className="mb-4">
                <label className="mb-2">เลขที่บัตรประจำตัวประชาชน</label>
                <input type="text" className="border border-gray-300 p-2 rounded " />
              </div>
              <div className="mb-4 flex flex-wrap items-center space-x-2">
                <label className="block mr-2">เพศ</label>
                <input type="checkbox" id="male" />
                <label htmlFor="male">ชาย</label>
                <input type="checkbox" id="female" />
                <label htmlFor="female">หญิง</label>
                <label className="block">วัน/เดือน/ปีเกิด</label>
                <input type="date" className="border border-gray-300 p-2 rounded" />
                <label>อายุ</label>
                <input type="text" className="border border-gray-300 p-2 rounded w-20" />
                <label>ปี</label>
              </div>
              <div className="mb-4 flex flex-wrap items-center space-x-2">
                <label className=" mr-2">สถานะภาพ</label>
                <input type="checkbox" id="single" />
                <label htmlFor="single">โสด</label>
                <input type="checkbox" id="married" />
                <label htmlFor="married">สมรส/อยู่ด้วยกัน</label>
                <input type="checkbox" id="divorce" />
                <label htmlFor="divorce">หย่าร้าง/หม้าย/แยกกันอยู่</label>
              </div>
              <div className="flex mb-4 ">
                <label className="mr-2 mb-2">อาชีพ</label>
                <div>
                  <div className=" mb-2">
                  <input type="checkbox" id="government1" />
                  <label className="mr-4 ml-2" htmlFor="government1">รัฐวิสาหกิจ/รัฐวิสาหกิจ</label>
                  <input type="checkbox" id="business" />
                  <label className="ml-2" htmlFor="business">ค้าขาย/ธุรกิจส่วนตัว</label>
                </div>
                <div className=" mb-2">
                  <input type="checkbox" id="govEmployee" />
                  <label className="mr-4 ml-2" htmlFor="govEmployee">พนักงาน/ลูกจ้างในหน่วยงานภาครัฐ</label>
                  <input type="checkbox" id="agriculture" />
                  <label className="ml-2" htmlFor="agriculture">เกษตรกรรม</label>
                </div>
                <div className=" mb-2">
                  <input type="checkbox" id="privateEmployee" />
                  <label className="mr-4 ml-2" htmlFor="privateEmployee">พนักงานบริษัท/ลูกจ้างเอกชน</label>
                  <input type="checkbox" id="unemployed" />
                  <label className="ml-2" htmlFor="unemployed">ว่างงาน</label>
                </div>
                <div className=" mb-2">
                  <input type="checkbox" id="generalLabor" />
                  <label className="mr-4 ml-2" htmlFor="generalLabor">รับจ้างทั่วไป</label>
                  <input type="checkbox" id="other" />
                  <label className="ml-2" htmlFor="other">อื่นๆ ระบุ</label>
                  <input type="text" className="border border-gray-300 p-2 rounded ml-2 " />
                </div>
                </div>
              </div>
              <div className="mb-4 flex flex-wrap items-center">
                <label className="block mr-2">หมู่โลหิต</label>
                <input type="text" className="border border-gray-300 p-2 rounded w-20" />
                <label className="ml-4">น้ำหนัก</label>
                <input type="text" className="border border-gray-300 p-2 rounded w-20" />
                <label className="ml-2">กิโลกรัม</label>
                <label className="ml-4">ส่วนสูง</label>
                <input type="text" className="border border-gray-300 p-2 rounded w-20" />
                <label className="ml-2">เซนติเมตร</label>
              </div>
              <div className="mb-4 flex  ">
                <label className=" mr-2">สิทธิการรักษาพยาบาล</label>
                <div>
                  <input type="checkbox" id="govBenefits" />
                  <label className="ml-2" htmlFor="govBenefits">สิทธิสวัสดิการข้าราชการ</label>
                  <p><input type="checkbox" id="socialSecurity" />
                  <label className="ml-2" htmlFor="socialSecurity">สิทธิประกันสังคม</label></p>
                  <p><input type="checkbox" id="healthCare" />
                  <label className="ml-2" htmlFor="healthCare">สิทธิหลักประกันสุขภาพ (บัตรทอง)</label></p>
                </div>
              </div>
              <div className="mb-4 flex  items-center">
                <label className=" mr-2">ประกันสุขภาพ</label>
                <div className='mr-5'>
                  <input type="checkbox" id="hasInsurance" />
                  <label className="ml-2" htmlFor="hasInsurance">มี</label>
                </div>
                <div>
                  <input type="checkbox" id="noInsurance" />
                  <label className="ml-2" htmlFor="noInsurance">ไม่มี</label>
                </div>
              </div>
              
            </div>

            {/* ข้อมูลติดต่อ */}
            <div className="mb-6">
              <h3 className="text-md font-bold mb-2">2. ข้อมูลติดต่อ</h3>
              <div className="mb-4">
                <label className="block mb-2">เบอร์โทรศัพท์มือถือ</label>
                <input type="text" className="border border-gray-300 p-2 rounded " />
              </div>
              <div className="mb-4">
                <label className="block mb-2">เบอร์โทรศัพท์บ้าน</label>
                <input type="text" className="border border-gray-300 p-2 rounded " />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Facebook</label>
                <input type="text" className="border border-gray-300 p-2 rounded " />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Line ID</label>
                <input type="text" className="border border-gray-300 p-2 rounded " />
              </div>
              <div className="mb-4">
                <label className="block mb-2">E-mail</label>
                <input type="email" className="border border-gray-300 p-2 rounded " />
              </div>
            </div>

            {/* ที่อยู่ปัจจุบัน */}
            <div className="mb-6">
              <h3 className="text-md font-bold mb-2">3. ข้อมูลที่อยู่ปัจจุบัน</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">เลขที่อยู่</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
                <div>
                  <label className="block mb-2">หมู่ที่</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">ซอย</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
                <div>
                  <label className="block mb-2">ถนน</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">ตำบล/แขวง</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
                <div>
                  <label className="block mb-2">อำเภอ/เขต</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">จังหวัด</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
                <div>
                  <label className="block mb-2">รหัสไปรษณีย์</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
              </div>
            </div>

            {/* ที่อยู่บริษัท */}
            <div className="mb-6">
              <h3 className="text-md font-bold mb-2">4. ข้อมูลที่ทำงาน</h3>
              <div className="mb-4">
                <label className="block mb-2">ชื่อสถานที่ทำงาน/บริษัท</label>
                <input type="text" className="border border-gray-300 p-2 rounded " />
              </div>
              <div className="mb-4">
                <label className="block mb-2">ที่อยู่ที่ทำงาน</label>
                <textarea className="border border-gray-300 p-2 rounded " />
              </div>
              <div className="mb-4">
                <label className="block mb-2">เบอร์โทรศัพท์ที่ทำงาน</label>
                <input type="text" className="border border-gray-300 p-2 rounded " />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">เลขที่อยู่</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
                <div>
                  <label className="block mb-2">หมู่ที่</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">ซอย</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
                <div>
                  <label className="block mb-2">ถนน</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">ตำบล/แขวง</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
                <div>
                  <label className="block mb-2">อำเภอ/เขต</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">จังหวัด</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
                <div>
                  <label className="block mb-2">รหัสไปรษณีย์</label>
                  <input type="text" className="border border-gray-300 p-2 rounded " />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
              >
                บันทึกข้อมูล
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
