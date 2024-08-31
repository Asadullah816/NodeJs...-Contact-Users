// const express = require('express');
// const router = express.Router();

// const { register, login } = require('../controllers/userController');

// router.post('/register', register);
// router.post('/login', login);
// router.get('/current',);

// module.exports = router;

// ============================================================
// ============================================================
// ============================================================

const express = require("express");
const router = express.Router();

const { register, login } = require('../controllers/userController');


router.post('/register', register);
router.post('/login', login);
// router.get('/current', current);

module.exports = router;