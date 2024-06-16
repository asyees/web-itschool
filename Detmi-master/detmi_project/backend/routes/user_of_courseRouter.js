const Router = require('express')
const router = new Router()
const user_of_courseController = require( '../controllers/user_of_courseController')
const authMiddleware = require("../middleware/authMiddleware")
router.get('/:courseId/promo', authMiddleware, user_of_courseController.checkmemb)
router.post('/:courseId/enter',authMiddleware, user_of_courseController.enter)


module.exports = router