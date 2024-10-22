const express = require('express');
const router = express.Router();
const { signupUser } = require('../controllers/authController');
const { check } = require('express-validator');

router.post(
  '/signup',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
  ],
  signupUser
);

module.exports = router;
