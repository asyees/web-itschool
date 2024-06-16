const Router = require('express')
const router = new Router()
const leaderboardController = require('../controllers/leaderboardController')

router.get('/leaderboard', leaderboardController.get_leaders)


module.exports = router