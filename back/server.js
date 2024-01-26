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
// TODO: generalisera felhantering
app.get('/api/v1/entries', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.status(200).json({ success: true, data: entries });
  } catch (err) {
    res.status(400).json({ success: false, error: err }); // TODO: korrekta felmedd
  }
});

app.get('/api/v1/entries/:id', async (req, res) => {
  try {
    const param = req.params.id;
    const entry = await Entry.findById(param);

    if (!entry) return res.status(404).json({ success: false });

    res.status(200).json({ success: true, data: entry });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message }); // TODO: korrekta felmedd
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

app.put('/api/v1/entries/:id', async (req, res) => {
  try {
    const entry = await Entry.findByIdAndUpdate(req.params.id, req.body);

    if (!entry) return res.status(404).json({ success: false });

    res.status(204).json({ success: true, data: entry });
    // res.status(204).send();
  } catch (err) {
    res.status(400).json({ success: false, error: err.message }); // TODO: korrekta felmedd
  }
});

app.delete('/api/v1/entries/:id', async (req, res) => {
  try {
    const entry = await Entry.findByIdAndDelete(req.params.id);

    if (!entry) return res.status(404).json({ success: false });

    res.status(204).json({ success: true, data: entry });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message }); // TODO: korrekta felmedd
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
