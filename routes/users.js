const router = require('express').Router();
const { createUser, returnsUser, returnsAllUsers, updateUser, updateAvatar } = require('../controllers/user');

router.get('/', returnsAllUsers);
router.get('/:id', returnsUser);
router.post('/', createUser);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatar);

module.exports = router;