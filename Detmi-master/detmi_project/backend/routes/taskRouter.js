const Router = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()
const taskController = require("../controllers/taskController")
// router.get("/:langId/:taskId/getresult", )
router.post('/:langId/:taskId/giveanswer',authMiddleware, taskController.giveAnswer) 
router.get('/tasks',authMiddleware, taskController.getAllTasks)
router.get("/tasks/:taskId", authMiddleware, taskController.getOneTask)
router.post('/:langId/justtask', taskController.justtask) 

module.exports = router
