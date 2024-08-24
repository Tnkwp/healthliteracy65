const express = require('express');
const app = express();
const config = require('./config/config');
const personalInfo = require('./routes/personalInfo');

app.use(express.json());
app.use('/personalInfo', personalInfo);

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
})