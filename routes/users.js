const router = require('express').Router();
const { createUser, returnsUser, returnsAllUsers, updateUser, updateAvatar } = require('../controllers/user');

router.get('/users', returnsAllUsers);
router.get('/users/:id', returnsUser);
router.post('/users', createUser);
router.patch('/users/me', updateUser);
router.patch('/users/me/avatar', updateUser);

module.exports = router;