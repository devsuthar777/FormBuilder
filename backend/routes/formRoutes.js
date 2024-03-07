const express = require('express');
const router = express.Router();

const {createForm} = require('../controllers/createForm');
const {viewAllForms} = require('../controllers/viewAllForms');
const {viewFormData} = require('../controllers/viewFormData');
const {submitForm} = require('../controllers/submitForm');

router.post('/createForm',createForm);
router.post('/submitForm',submitForm);
router.get('/viewAllForms',viewAllForms);
router.get('/viewFormData',viewFormData);


module.exports = router;