const router = require('express').Router()

const GameController = require('../controllers/gameCotroller')

router.get('/', GameController.getGames)
router.get('/:id', GameController.gatGame)
router.get('/name/t', GameController.t)
router.post('/add', GameController.addGame)
router.delete('/:id', GameController.deleteGame)
router.put('/:id', GameController.updateGame)


module.exports = router