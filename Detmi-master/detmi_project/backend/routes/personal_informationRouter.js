const Router = require('express')
const router = new Router()
const personal_informationController =  require('../controllers/personal_informationController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/change_personal',authMiddleware, personal_informationController.change_info)
router.get('/lk',authMiddleware, personal_informationController.view_lk)

module.exports = router