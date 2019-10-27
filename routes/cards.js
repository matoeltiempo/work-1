const router = require('express').Router();
const { returnsCards, createCard, deleteCard, likeCard, dislikeCard } = require('../controllers/card');

router.get('/', returnsCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;