const router = require('express').Router();
const { returnsCards, createCard, deleteCard } = require('../controllers/card');

router.get('/cards', returnsCards);
router.post('/cards', createCard);
router.delete('/cards/:cardId', deleteCard);

module.exports = router;