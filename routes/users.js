const router = require('express').Router();
const { createUser, returnsUser, returnsAllUsers } = require('../controllers/user');

router.get('/users', returnsAllUsers);
router.get('/users/:id', returnsUser);
router.post('/users', createUser);

module.exports = router;