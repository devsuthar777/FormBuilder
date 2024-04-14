const express = require('express');
const router = express.Router();

const {createForm} = require('../controllers/createForm');
const {viewAllForms} = require('../controllers/viewAllForms');
const {viewFormData} = require('../controllers/viewFormData');
const {submitForm} = require('../controllers/submitForm');
const {viewFormTemplate} = require('../controllers/viewFormTemplate');
const {login,signup} = require('../controllers/Auth');
const { auth } = require('../middlewares/auth');


router.post('/login',login);
router.post('/signup',signup);

//middleware test route
router.post('/test',auth, (req,res) => {
    return res.status(200).json({
        success:true,
        message:"Token verification done!"
    })
});
//middleware test route

router.post('/createForm',createForm);
router.post('/submitForm',submitForm);
router.get('/viewAllForms',viewAllForms);
router.post('/viewFormData',viewFormData);
router.post('/viewFormTemplate',viewFormTemplate);

module.exports = router;