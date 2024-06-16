const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../erorr/ApiError')
const {User, Personal_information, Leaderboard, Usertask, Task} = require("../models/models")
const { where } = require("sequelize")
const { RelationshipType } = require('sequelize/lib/errors/database/foreign-key-constraint-error')
const sequelize = require('../db')
const generateJwt = (id, nickname, email) => {
    return jwt.sign(
        {id, nickname, email}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next){
        const {nickname, email, password} = req.body
        if ( !nickname || !email || !password){ 
            return next(ApiError.baderquest("Некорректный имейл или пароль"))
        }
        let condidate = await User.findOne({where : {nickname}})
        if (condidate){
            return next(ApiError.baderquest("Имя пользователя уже занято"))

        }
        condidate = await User.findOne({where : {email}})
        if (condidate) {
            return next(ApiError.baderquest("Почта уже занята"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({nickname, email, password: hashPassword})
        const personal_information = await Personal_information.create({userId : user.id})
        const leaderboard = await Leaderboard.create({userId : user.id, rating : 0})
        const tasks = await Task.findAll();

        // Insert records into UserTask table
        const userTasks = tasks.map(task => ({
            userId: user.id,
            taskId: task.id,
            status: 'не приступал'
        }));
        await Usertask.bulkCreate(userTasks);
        const token = generateJwt(user.id, user.nickname, user.email )
        return res.json({token})

    }
    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where : {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.nickname, user.email )
        return res.json({token})
    }
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.nickname, req.user.email)
        return res.json({token})
    }
}

module.exports = new UserController()