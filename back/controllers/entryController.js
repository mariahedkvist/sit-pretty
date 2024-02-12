const Entry = require('../models/Entry');

exports.getData = async (req, res) => {
  try {
    const entries = await Entry.find();
    res.status(200).json({ success: true, data: entries });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);

    if (!entry) return res.status(404).json({ success: false });

    res.status(200).json({ success: true, data: entry });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.postData = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const entry = await Entry.create(req.body); // TODO: validering på request body
    res.status(201).json({ success: true, data: entry });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const validationErrors = Object.values(err.errors).map(
        (err) => err.message
      );
      res.status(400).json({ success: false, errors: validationErrors });
    } else {
      res.status(400).json({ success: false, error: err.message });
    }
  }
};

exports.putData = async (req, res) => {
  try {
    const entry = await Entry.findByIdAndUpdate(req.params.id, req.body);

    if (!entry) return res.status(404).json({ success: false });

    res.status(204).json({ success: true, data: entry });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const entry = await Entry.findByIdAndDelete(req.params.id);

    if (!entry) return res.status(404).json({ success: false });

    res.status(204).json({ success: true, data: entry });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
