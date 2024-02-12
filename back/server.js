const express = require('express');
const cors = require('cors');
const connect = require('./config/db');
const router = require('./routes/entry');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());
app.use('/api/v1/entries', router);

connect(); // Connect to MongoDB

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
