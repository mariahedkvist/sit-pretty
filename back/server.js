const express = require('express');
const cors = require('cors');
const connect = require('./config/db');
const Entry = require('./models/Entry');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

connect(); // Connect to MongoDB

// CRUD
app.get('/api/v1/entries', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.status(200).json({ success: true, data: entries });
  } catch (err) {
    res.status(400).json({ success: false, error: err }); // TODO: korrekta felmedd
  }
});

app.post('/api/v1/entries', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const entry = await Entry.create(req.body); // TODO: validering på request body
    res.status(201).json({ success: true, data: entry });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const validationErrors = Object.values(err.errors).map(
        (err) => err.message
      );
      res.status(400).json({ success: false, errors: validationErrors }); // TODO: korrekta felmedd
    } else {
      res.status(400).json({ success: false, error: err.message }); // TODO: korrekta felmedd
    }
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
