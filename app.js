const express = require('express');
const app = express();
const mongoose = require('./database/mongoose.js');

app.listen(3000, function() {
    console.log('Server starter on port 3000');
});
