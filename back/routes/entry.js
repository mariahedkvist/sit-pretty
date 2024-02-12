const express = require('express');
const router = express.Router();

const {
  getData,
  getById,
  postData,
  putData,
  deleteData,
} = require('../controllers/entryController');

router.route('/').get(getData).post(postData).put(putData);
router.route('/:id').get(getById).delete(deleteData); // TODO: lägg till /:id med router.route('/:id')

module.exports = router;
