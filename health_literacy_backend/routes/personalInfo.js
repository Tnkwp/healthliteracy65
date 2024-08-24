const express = require('express');
const router = express.Router();
const db = require('../db/db');

// ---------------------- Personal Info Routes ----------------------

// GET all personal info
router.get('/', (req, res) => {
  db.query('SELECT * FROM personalInfo', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// GET personal info by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM personalInfo WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.json(results[0]);
  });
});

// POST new personal info
router.post('/', (req, res) => {
  const {
    nameTitle, fullName, idCard, dob, age, gender, maritalStatus,
    occupation, bloodType, weight, height, medicalTreatmentRights, insurance
  } = req.body;

  const query = `INSERT INTO personalInfo (nameTitle, fullName, idCard, dob, age, gender, maritalStatus, occupation, bloodType, weight, height, medicalTreatmentRights, insurance)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [nameTitle, fullName, idCard, dob, age, gender, maritalStatus, occupation, bloodType, weight, height, medicalTreatmentRights, insurance], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    // Retrieve the newly inserted record
    const newId = results.insertId;
    db.query('SELECT * FROM personalInfo WHERE id = ?', [newId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      // Send the newly added record back
      res.status(201).json(results[0]);
    });
  });
});

// PUT update personal info
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const {
    nameTitle, fullName, idCard, dob, age, gender, maritalStatus,
    occupation, bloodType, weight, height, medicalTreatmentRights, insurance
  } = req.body;

  const query = `UPDATE personalInfo SET nameTitle = ?, fullName = ?, idCard = ?, dob = ?, age = ?, gender = ?, maritalStatus = ?, occupation = ?, bloodType = ?, weight = ?, height = ?, medicalTreatmentRights = ?, insurance = ?
                 WHERE id = ?`;

  db.query(query, [nameTitle, fullName, idCard, dob, age, gender, maritalStatus, occupation, bloodType, weight, height, medicalTreatmentRights, insurance, id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    // Retrieve the updated record
    db.query('SELECT * FROM personalInfo WHERE id = ?', [id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'Not found' });
      }
      
      // Send the updated record back
      res.status(200).json(results[0]);
    });
  });
});

// DELETE personal info
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  
  // First retrieve the record to be deleted
  db.query('SELECT * FROM personalInfo WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Not found' });
    }
    
    // Proceed to delete the record
    db.query('DELETE FROM personalInfo WHERE id = ?', [id], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      // Send the deleted record back
      res.status(200).json(results[0]);
    });
  });
});

// ---------------------- Occupation Details Routes ----------------------

// GET occupation details by personal info ID
router.get('/occupationDetails/:personalInfoId', (req, res) => {
  const personalInfoId = req.params.personalInfoId;
  db.query('SELECT * FROM occupationDetails WHERE personalInfoId = ?', [personalInfoId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST new occupation details
router.post('/occupationDetails', (req, res) => {
  const { personalInfoId, occupationOther } = req.body;

  const query = `INSERT INTO occupationDetails (personalInfoId, occupationOther) VALUES (?, ?)`;

  db.query(query, [personalInfoId, occupationOther], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    // Retrieve the newly inserted record
    const newId = results.insertId;
    db.query('SELECT * FROM occupationDetails WHERE id = ?', [newId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      // Send the newly added record back
      res.status(201).json(results[0]);
    });
  });
});

// PUT update occupation details
router.put('/occupationDetails/:id', (req, res) => {
  const id = req.params.id;
  const { personalInfoId, occupationOther } = req.body;

  const query = `UPDATE occupationDetails SET personalInfoId = ?, occupationOther = ? WHERE id = ?`;

  db.query(query, [personalInfoId, occupationOther, id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    // Retrieve the updated record
    db.query('SELECT * FROM occupationDetails WHERE id = ?', [id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'Not found' });
      }
      
      // Send the updated record back
      res.status(200).json(results[0]);
    });
  });
});

// DELETE occupation details
router.delete('/occupationDetails/:id', (req, res) => {
  const id = req.params.id;
  
  // First retrieve the record to be deleted
  db.query('SELECT * FROM occupationDetails WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Not found' });
    }
    
    // Proceed to delete the record
    db.query('DELETE FROM occupationDetails WHERE id = ?', [id], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      // Send the deleted record back
      res.status(200).json(results[0]);
    });
  });
});

module.exports = router;
