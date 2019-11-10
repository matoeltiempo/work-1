const router = require('express').Router();
const { returnsUser, returnsAllUsers, updateUser, updateAvatar } = require('../controllers/user');

router.get('/', returnsAllUsers);
router.get('/:id', returnsUser);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatar);

module.exports = router;