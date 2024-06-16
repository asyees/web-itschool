const Router = require('express')
const router = new Router()

const leaderboardRouter = require('./leaderboardRouter')
const personal_informationRouter = require('./personal_informationRouter')
const user_of_courseRouter = require('./user_of_courseRouter')
const userRouter = require('./userRouter')
// const authMiddleware = require('../middleware/authMiddleware')
// const Answercontroller = require ("../controllers/answerController")
const taskRouter = require("./taskRouter")


router.use('/user', userRouter)
// router.use('/personal_information', personal_informationRouter)
router.use('/user', personal_informationRouter)
router.use(leaderboardRouter)
router.use(user_of_courseRouter)
router.use(taskRouter)
// router.post('/answer/:taskId', authMiddleware, Answercontroller.putAnswer)
module.exports = router