const router = require('express').Router();
const { returnsCards, createCard, deleteCard, likeCard, dislikeCard } = require('../controllers/card');

router.get('/cards', returnsCards);
router.post('/cards', createCard);
router.delete('/cards/:cardId', deleteCard);
router.put('/cards/:cardId/likes', likeCard);
router.delete('/cards/:cardId/likes', dislikeCard);

module.exports = router;