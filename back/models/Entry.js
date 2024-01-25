const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  reflection: String,
});

module.exports = mongoose.model('Entry', EntrySchema);
