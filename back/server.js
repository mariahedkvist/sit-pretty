const express = require('express');
const cors = require('cors');
const connect = require('./config/db');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

connect(); // Connect to MongoDB
