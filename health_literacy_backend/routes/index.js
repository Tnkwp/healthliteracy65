const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// สร้างแอป Express
const app = express();
app.use(bodyParser.json());

// ตั้งค่าการเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // เปลี่ยนเป็นชื่อผู้ใช้ของคุณ
  password: 'boss', // เปลี่ยนเป็นรหัสผ่านของคุณ
  database: 'personal' // เปลี่ยนเป็นชื่อฐานข้อมูลของคุณ
});

// เชื่อมต่อกับฐานข้อมูล
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Route สำหรับการเพิ่มข้อมูลในตาราง personalInfo
app.post('/addPersonalInfo', (req, res) => {
  const { nameTitle, fullName, idCard, dob, age, gender, maritalStatus, occupation, bloodType, weight, height, medicalTreatmentRights, insurance } = req.body;

  const sql = `INSERT INTO personalInfo (nameTitle, fullName, idCard, dob, age, gender, maritalStatus, occupation, bloodType, weight, height, medicalTreatmentRights, insurance)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [nameTitle, fullName, idCard, dob, age, gender, maritalStatus, occupation, bloodType, weight, height, medicalTreatmentRights, insurance], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    res.status(201).send('Personal Info added successfully');
  });
});

// Route สำหรับการเพิ่มข้อมูลในตาราง occupationDetails
app.post('/addOccupationDetails', (req, res) => {
  const { personalInfoId, occupationOther } = req.body;

  const sql = `INSERT INTO occupationDetails (personalInfoId, occupationOther)
               VALUES (?, ?)`;

  db.query(sql, [personalInfoId, occupationOther], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    res.status(201).send('Occupation Details added successfully');
  });
});

// Route สำหรับการดึงข้อมูลทั้งหมดจาก personalInfo
app.get('/getPersonalInfo', (req, res) => {
  const sql = 'SELECT * FROM personalInfo';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

// Route สำหรับการดึงข้อมูลทั้งหมดจาก occupationDetails
app.get('/getOccupationDetails', (req, res) => {
  const sql = 'SELECT * FROM occupationDetails';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

// ตั้งค่าให้เซิร์ฟเวอร์ฟังบนพอร์ต 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
