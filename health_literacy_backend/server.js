const express = require('express');
const app = express();
const config = require('./config/config');
const personalInfo = require('./routes/personalInfo');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use('/personalInfo', personalInfo);

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
})