// const express = require('express');
// const router = express.Router();
// const { getContacts, getContact, addContact, updateContact, deleteContact } = require('../controllers/contactController');

// router.route('/').get(getContacts);
// router.route('/').post(addContact);
// router.route('/:id').get(getContact);
// router.route('/:id').put(updateContact);
// router.route('/:id').delete(deleteContact);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { getContact, addContact, getSingleContact, updateContact, deleteContact } = require('../controllers/contactController.js');

router.route('/').get(getContact);
router.route('/').post(addContact);
router.route('/:id').get(getSingleContact);
router.route('/:id').put(updateContact);
router.route('/:id').delete(deleteContact);



module.exports = router;