const express = require('express');
const router = express.Router();

const {createForm} = require('../controllers/createForm');
const {viewAllForms} = require('../controllers/viewAllForms');
const {viewFormData} = require('../controllers/viewFormData');
const {submitForm} = require('../controllers/submitForm');
const {viewFormTemplate} = require('../controllers/viewFormTemplate');

router.post('/createForm',createForm);
router.post('/submitForm',submitForm);
router.get('/viewAllForms',viewAllForms);
router.post('/viewFormData',viewFormData);
router.post('/viewFormTemplate',viewFormTemplate);

module.exports = router;