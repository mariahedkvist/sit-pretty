const express = require('express');
const router = express.Router();

const {
  getData,
  postData,
  putData,
  deleteData,
} = require('../controllers/entryController');

router.route('/').get(getData).post(postData).put(putData).delete(deleteData); // TODO: lägg till /:id med router.route('/:id')

module.exports = router;
